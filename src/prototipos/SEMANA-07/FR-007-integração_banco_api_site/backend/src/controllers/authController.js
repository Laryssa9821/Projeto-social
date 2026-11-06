const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/database");

// CADASTRAR USUÁRIO
async function cadastrar(req, res) {
    try {
        const {
            nome,
            email,
            senha,
            confirmar_senha,
            telefone,
            id_perfil
        } = req.body;

        // Verifica os campos obrigatórios
        if (!nome || !email || !senha || !confirmar_senha || !id_perfil) {
            return res.status(400).json({
                mensagem: "Preencha todos os campos obrigatórios."
            });
        }

        // Verifica o tamanho da senha
        const senhaForte =
    senha.length >= 10 &&
    /[a-z]/.test(senha) &&
    /[A-Z]/.test(senha) &&
    /[0-9]/.test(senha) &&
    /[^A-Za-z0-9]/.test(senha);

if (!senhaForte) {
    return res.status(400).json({
        mensagem:
            "A senha deve ter pelo menos 10 caracteres, incluindo letra maiúscula, letra minúscula, número e caractere especial."
    });
}

        // Verifica se as senhas são iguais
        if (senha !== confirmar_senha) {
            return res.status(400).json({
                mensagem: "As senhas não coincidem."
            });
        }

        const perfilId = Number(id_perfil);

        // Perfis existentes no banco
        if (![1, 2, 3].includes(perfilId)) {
            return res.status(400).json({
                mensagem: "Perfil de usuário inválido."
            });
        }

        // Remove espaços e converte o e-mail para minúsculo
        const emailNormalizado = email.trim().toLowerCase();

        // Verifica se o e-mail já está cadastrado
        const [usuariosExistentes] = await pool.execute(
            "SELECT id_usuario FROM usuarios WHERE email = ?",
            [emailNormalizado]
        );

        if (usuariosExistentes.length > 0) {
            return res.status(409).json({
                mensagem: "Este e-mail já está cadastrado."
            });
        }

        // Confere se o perfil escolhido existe
        const [perfis] = await pool.execute(
            "SELECT id_perfil FROM perfis WHERE id_perfil = ?",
            [perfilId]
        );

        if (perfis.length === 0) {
            return res.status(400).json({
                mensagem: "O perfil selecionado não existe."
            });
        }

        // Protege a senha antes de salvá-la
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        // Telefone é opcional
        const telefoneTratado = telefone
            ? telefone.trim()
            : null;

        // Insere o usuário no banco
        const [resultado] = await pool.execute(
            `INSERT INTO usuarios
                (nome, email, senha, telefone, id_perfil, ativo)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [
                nome.trim(),
                emailNormalizado,
                senhaCriptografada,
                telefoneTratado,
                perfilId,
                1
            ]
        );

        return res.status(201).json({
            mensagem: "Usuário cadastrado com sucesso.",
            usuario: {
                id_usuario: resultado.insertId,
                nome: nome.trim(),
                email: emailNormalizado,
                id_perfil: perfilId
            }
        });
    } catch (erro) {
    console.error("Erro no login:", {
        codigo: erro.code || "SEM_CODIGO",
        mensagem: erro.message,
        nome: erro.name
    });

        if (erro.code === "ER_DUP_ENTRY") {
            return res.status(409).json({
                mensagem: "Este e-mail já está cadastrado."
            });
        }

        return res.status(500).json({
            mensagem: "Erro interno ao realizar o login."
        });
    }
}

// REALIZAR LOGIN
async function login(req, res) {
    try {
        const { email, senha } = req.body;
        console.log("Tentativa de login:", {
    email: email,
    senhaPreenchida: Boolean(senha)
});

        // Verifica os campos obrigatórios
        if (!email || !senha) {
            return res.status(400).json({
                mensagem: "Informe o e-mail e a senha."
            });
        }

        const emailNormalizado = email.trim().toLowerCase();

        // Pesquisa o usuário e o perfil no banco
        const [usuarios] = await pool.execute(
            `SELECT
                u.id_usuario,
                u.nome,
                u.email,
                u.senha,
                u.id_perfil,
                u.ativo,
                p.nome AS perfil
             FROM usuarios u
             INNER JOIN perfis p
                ON p.id_perfil = u.id_perfil
             WHERE u.email = ?`,
            [emailNormalizado]
        );

        if (usuarios.length === 0) {
            return res.status(401).json({
                mensagem: "E-mail ou senha incorretos."
            });
        }

        const usuario = usuarios[0];

        // Verifica se o usuário está ativo
        if (!usuario.ativo) {
            return res.status(403).json({
                mensagem: "Este usuário está desativado."
            });
        }

        // Compara a senha digitada com a senha protegida do banco
        const senhaCorreta = await bcrypt.compare(
            senha,
            usuario.senha
        );

        if (!senhaCorreta) {
            return res.status(401).json({
                mensagem: "E-mail ou senha incorretos."
            });
        }

        // Cria um token válido por oito horas
        const token = jwt.sign(
            {
                id_usuario: usuario.id_usuario,
                id_perfil: usuario.id_perfil
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "8h"
            }
        );

        return res.status(200).json({
            mensagem: "Login realizado com sucesso.",
            token,
            usuario: {
                id_usuario: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email,
                id_perfil: usuario.id_perfil,
                perfil: usuario.perfil
            }
        });
    } catch (erro) {
        console.error("Erro no login:", erro);

        return res.status(500).json({
            mensagem: "Erro interno ao realizar o login."
        });
    }
}

module.exports = {
    cadastrar,
    login
};