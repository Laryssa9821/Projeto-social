function protegerPagina(perfisPermitidos = []) {
    const token = localStorage.getItem("token");
    const usuarioSalvo = localStorage.getItem("usuarioLogado");

    if (!token || !usuarioSalvo) {
        window.location.href = "login.html";
        return;
    }

    try {
        const usuario = JSON.parse(usuarioSalvo);
        const perfilUsuario = Number(usuario.id_perfil);

        if (
            perfisPermitidos.length > 0 &&
            !perfisPermitidos.includes(perfilUsuario)
        ) {
            alert("Você não tem permissão para acessar esta página.");
            window.location.href = "login.html";
        }
    } catch (erro) {
        console.error("Dados de sessão inválidos:", erro);

        localStorage.removeItem("token");
        localStorage.removeItem("usuarioLogado");

        window.location.href = "login.html";
    }
}

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuarioLogado");

    window.location.href = "login.html";
}