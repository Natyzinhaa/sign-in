// Implementa acesso para a tela de login
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // Implementa estrutura que testa se todos os campos foram preenchidos
    if(!loginEmail || !loginSenha) {
        alert("Por favor preencher todos os campos");
    } else {
        window.location.href = "cadastro.html";
    }
}