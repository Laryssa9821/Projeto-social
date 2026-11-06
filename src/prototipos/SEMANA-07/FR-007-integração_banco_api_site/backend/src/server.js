require("dotenv").config();

console.log(
    "JWT_SECRET configurado:",
    Boolean(process.env.JWT_SECRET)
);

const express = require("express");
const cors = require("cors");

const pool = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const painelRoutes = require("./routes/painelRoutes");

const app = express();

const PORT = Number(process.env.PORT) || 3000;

/*
|--------------------------------------------------------------------------
| Middlewares
|--------------------------------------------------------------------------
*/

app.use(
    cors({
        origin: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
);

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);

/*
|--------------------------------------------------------------------------
| Rotas principais
|--------------------------------------------------------------------------
*/

app.use("/api/auth", authRoutes);
app.use("/api/painel", painelRoutes);

/*
|--------------------------------------------------------------------------
| Rota inicial
|--------------------------------------------------------------------------
*/

app.get("/", function (req, res) {
    return res.status(200).json({
        mensagem: "API SleepWell funcionando."
    });
});

/*
|--------------------------------------------------------------------------
| Teste simples do banco
|--------------------------------------------------------------------------
*/

app.get("/teste-banco", async function (req, res) {
    try {
        const [resultado] = await pool.execute(
            "SELECT 1 AS conexao"
        );

        return res.status(200).json({
            mensagem: "Conexão com o MySQL funcionando.",
            resultado: resultado
        });
    } catch (erro) {
        console.error("Erro no teste do banco:", erro);

        return res.status(500).json({
            mensagem: "Não foi possível consultar o MySQL.",
            erro: erro.message
        });
    }
});

/*
|--------------------------------------------------------------------------
| Diagnóstico do banco
|--------------------------------------------------------------------------
*/

app.get("/diagnostico-banco", async function (req, res) {
    try {
        const [resultado] = await pool.execute(`
            SELECT
                DATABASE() AS banco,
                @@hostname AS servidor,
                COUNT(*) AS quantidade_usuarios
            FROM usuarios
        `);

        return res.status(200).json(resultado[0]);
    } catch (erro) {
        console.error("Erro no diagnóstico do banco:", erro);

        return res.status(500).json({
            mensagem: "Erro no diagnóstico do banco.",
            erro: erro.message
        });
    }
});

/*
|--------------------------------------------------------------------------
| Rota não encontrada
|--------------------------------------------------------------------------
*/

app.use(function (req, res) {
    return res.status(404).json({
        mensagem: "Rota não encontrada.",
        metodo: req.method,
        rota: req.originalUrl
    });
});

/*
|--------------------------------------------------------------------------
| Tratamento geral de erros
|--------------------------------------------------------------------------
*/

app.use(function (erro, req, res, next) {
    console.error("Erro interno da API:", erro);

    return res.status(500).json({
        mensagem: "Erro interno do servidor."
    });
});

/*
|--------------------------------------------------------------------------
| Inicialização do servidor
|--------------------------------------------------------------------------
*/

async function iniciarServidor() {
    try {
        console.log("Testando conexão com o MySQL...");

        const conexao = await pool.getConnection();

        await conexao.query("SELECT 1");

        conexao.release();

        console.log("Conexão com o MySQL realizada com sucesso.");

        const servidor = app.listen(PORT, "0.0.0.0", function () {
            console.log(`Servidor executando na porta ${PORT}.`);
            console.log(`API disponível em http://localhost:${PORT}`);
            console.log(
                `Teste do banco: http://localhost:${PORT}/teste-banco`
            );
        });

        servidor.on("error", function (erro) {
            if (erro.code === "EADDRINUSE") {
                console.error(
                    `A porta ${PORT} já está sendo usada por outro programa.`
                );
            } else {
                console.error(
                    "Erro ao iniciar o servidor:",
                    erro.message
                );
            }
        });
    } catch (erro) {
        console.error("Não foi possível iniciar a API.");
        console.error("Código:", erro.code || "SEM_CODIGO");
        console.error("Mensagem:", erro.message);
    }
}

iniciarServidor();