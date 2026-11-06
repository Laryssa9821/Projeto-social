const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");

const caminhoCertificado = path.join(
    __dirname,
    "..",
    "..",
    "certs",
    "ca.pem"
);

console.log("Caminho do certificado:", caminhoCertificado);
console.log(
    "Certificado encontrado:",
    fs.existsSync(caminhoCertificado)
);

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    ssl: {
        ca: fs.readFileSync(caminhoCertificado, "utf8"),
        rejectUnauthorized: true
    },

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;