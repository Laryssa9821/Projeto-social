const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({
            mensagem: "Token de acesso não informado."
        });
    }

    const partes = authorization.split(" ");

    if (
        partes.length !== 2 ||
        partes[0] !== "Bearer" ||
        !partes[1]
    ) {
        return res.status(401).json({
            mensagem: "Formato do token inválido."
        });
    }

    const token = partes[1];

    try {
        const dadosToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.usuario = {
            id_usuario: dadosToken.id_usuario,
            id_perfil: dadosToken.id_perfil
        };

        next();
    } catch (erro) {
        if (erro.name === "TokenExpiredError") {
            return res.status(401).json({
                mensagem: "Sua sessão expirou. Faça login novamente."
            });
        }

        return res.status(401).json({
            mensagem: "Token inválido."
        });
    }
}

module.exports = {
    verificarToken
};