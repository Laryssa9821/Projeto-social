const express = require("express");

const {
    verificarToken
} = require("../middlewares/authMiddleware");

const {
    permitirPerfis
} = require("../middlewares/perfilMiddleware");

const router = express.Router();

// Qualquer usuário autenticado
router.get(
    "/usuario",
    verificarToken,
    (req, res) => {
        return res.status(200).json({
            mensagem: "Rota protegida acessada com sucesso.",
            usuarioAutenticado: req.usuario
        });
    }
);

// Somente gerente
router.get(
    "/gerente",
    verificarToken,
    permitirPerfis(1),
    (req, res) => {
        return res.status(200).json({
            mensagem: "Bem-vindo ao painel do gerente."
        });
    }
);

// Somente administrativo
router.get(
    "/administrativo",
    verificarToken,
    permitirPerfis(2),
    (req, res) => {
        return res.status(200).json({
            mensagem: "Bem-vindo ao painel administrativo."
        });
    }
);

// Somente financeiro
router.get(
    "/financeiro",
    verificarToken,
    permitirPerfis(3),
    (req, res) => {
        return res.status(200).json({
            mensagem: "Bem-vindo ao painel financeiro."
        });
    }
);

// Gerente ou administrativo
router.get(
    "/gestao",
    verificarToken,
    permitirPerfis(1, 2),
    (req, res) => {
        return res.status(200).json({
            mensagem: "Área de gestão acessada com sucesso."
        });
    }
);

module.exports = router;