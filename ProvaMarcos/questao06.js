let Pessoa = {
    nome: "Julio",
    Nascimento: "05/05/2002",
    CPF: "11111111111"
}

let Aluno = {
    ...Pessoa,
    Matricula: "111",
    Notas: [7,10,7],
    Media: function CalculaMedia () {
        soma = 0;
        
        for(let i = 0; i < this.Notas.length; i++) {
            soma += this.Notas[i]
        }

        media = soma / this.Notas.length;

        return media
    }
}



console.log(Aluno.Media())
