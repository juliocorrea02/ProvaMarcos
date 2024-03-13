function Callback(funcao) {
    funcao("oi")
}

Callback(function(mensagem) {
    console.log(`Mensagem: ${mensagem}`)
})

