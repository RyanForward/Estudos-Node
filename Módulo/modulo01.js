console.log("Executando módulo01.js");

oculta = () => {
    console.log("Executando função oculta");
}

executa = () => {
    console.log("Executando a função executa()");
}

welcome = "Bem-vindo ao módulo modulo01.js"

module.exports = {executa, welcome, oculta}