function permitirPerfis(...perfisPermitidos) {
    return function (req, res, next) {
        if (!req.usuario) {
            return res.status(401).json({
                mensagem: "Usuário não autenticado."
            });
        }

        const perfilUsuario = Number(req.usuario.id_perfil);

        if (!perfisPermitidos.includes(perfilUsuario)) {
            return res.status(403).json({
                mensagem: "Você não tem permissão para acessar este recurso."
            });
        }

        next();
    };
}

module.exports = {
    permitirPerfis
};
