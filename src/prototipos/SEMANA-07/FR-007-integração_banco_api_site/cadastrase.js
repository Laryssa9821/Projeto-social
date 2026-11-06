document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.getElementById("form-cadastro");
    const mensagemCadastro = document.getElementById("mensagem-cadastro");
    const botaoCadastrar = document.getElementById("btn-cadastrar");

    if (!formCadastro) {
        console.error(
            'Formulário não encontrado. Verifique se existe id="form-cadastro" no HTML.'
        );
        return;
    }

    if (!mensagemCadastro) {
        console.error(
            'Área de mensagem não encontrada. Verifique se existe id="mensagem-cadastro".'
        );
        return;
    }

    if (!botaoCadastrar) {
        console.error(
            'Botão de cadastro não encontrado. Verifique se existe id="btn-cadastrar".'
        );
        return;
    }

    formCadastro.addEventListener("submit", async function (evento) {
        evento.preventDefault();

        const campoNome = document.getElementById("nome");
        const campoEmail = document.getElementById("email");
        const campoSenha = document.getElementById("senha");
        const campoConfirmarSenha =
            document.getElementById("confirmar_senha");
        const campoTelefone = document.getElementById("telefone");
        const campoPerfil = document.getElementById("id_perfil");

        if (
            !campoNome ||
            !campoEmail ||
            !campoSenha ||
            !campoConfirmarSenha ||
            !campoTelefone ||
            !campoPerfil
        ) {
            mostrarMensagem(
                "Um ou mais campos não foram encontrados no formulário.",
                "erro"
            );

            console.error(
                "Verifique os IDs: nome, email, senha, confirmar_senha, telefone e id_perfil."
            );

            return;
        }

        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim().toLowerCase();
        const senha = campoSenha.value;
        const confirmarSenha = campoConfirmarSenha.value;
        const telefone = campoTelefone.value.trim();
        const idPerfil = campoPerfil.value;

        limparMensagem();

        if (!nome || !email || !senha || !idPerfil || !confirmarSenha) {
            mostrarMensagem(
                "Preencha todos os campos obrigatórios.",
                "erro"
            );
            return;
        }

        if (senha !== confirmarSenha) {
            mostrarMensagem("As senhas não coincidem.", "erro");
            return;
        }

        if (!idPerfil) {
            mostrarMensagem("Selecione o tipo de conta.", "erro");
            return;
        }

        const dadosCadastro = {
    nome: nome,
    email: email,
    senha: senha,
    confirmar_senha: confirmarSenha,
    telefone: telefone || null,
    id_perfil: Number(idPerfil)
};

console.log("Dados enviados ao backend:", {
    nome: dadosCadastro.nome,
    email: dadosCadastro.email,
    telefone: dadosCadastro.telefone,
    id_perfil: dadosCadastro.id_perfil,
    senha: "[OCULTA]",
    confirmar_senha: "[OCULTA]"
});

        botaoCadastrar.disabled = true;
        botaoCadastrar.textContent = "CADASTRANDO...";

        try {
            const resposta = await fetch(
                "http://localhost:3000/api/auth/cadastro",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dadosCadastro)
                }
            );

            const tipoConteudo =
                resposta.headers.get("content-type") || "";

            let dados;

            if (tipoConteudo.includes("application/json")) {
                dados = await resposta.json();
            } else {
                const texto = await resposta.text();

                throw new Error(
                    `O backend não retornou JSON. Status: ${resposta.status}. Resposta: ${texto}`
                );
            }

            console.log("Resposta do backend:", dados);

            if (!resposta.ok) {
                mostrarMensagem(
                    dados.mensagem ||
                    dados.erro ||
                    "Não foi possível realizar o cadastro.",
                    "erro"
                );

                return;
            }

            mostrarMensagem(
                dados.mensagem || "Usuário cadastrado com sucesso.",
                "sucesso"
            );

            formCadastro.reset();

            setTimeout(function () {
                window.location.href = "login.html";
            }, 1500);
        } catch (erro) {
            console.error("Erro ao cadastrar:", erro);

            if (erro instanceof TypeError) {
                mostrarMensagem(
                    "Não foi possível conectar ao servidor. Verifique se o backend está ligado.",
                    "erro"
                );
            } else {
                mostrarMensagem(
                    erro.message || "Ocorreu um erro ao realizar o cadastro.",
                    "erro"
                );
            }
        } finally {
            botaoCadastrar.disabled = false;
            botaoCadastrar.textContent = "CADASTRAR";
        }
    });

    function mostrarMensagem(texto, tipo) {
        mensagemCadastro.textContent = texto;
        mensagemCadastro.className = tipo;
    }

    function limparMensagem() {
        mensagemCadastro.textContent = "";
        mensagemCadastro.className = "";
    }
});