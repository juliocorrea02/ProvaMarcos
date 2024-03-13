const alunos = [
    {
        nome: "Julio1",
        Nascimento: "05/05/2002",
        CPF: "11111111111",
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
    },
    {
        nome: "Julio2",
        Nascimento: "05/05/2002",
        CPF: "11111111111",
        Matricula: "111",
        Notas: [10,10,7],
        Media: function CalculaMedia () {
            soma = 0;
            
            for(let i = 0; i < this.Notas.length; i++) {
                soma += this.Notas[i]
            }
    
            media = soma / this.Notas.length;
    
            return media
        }
    },
    {
        nome: "Julio3",
        Nascimento: "05/05/2002",
        CPF: "11111111111",
        Matricula: "111",
        Notas: [8,5,2],
        Media: function CalculaMedia () {
            soma = 0;
            
            for(let i = 0; i < this.Notas.length; i++) {
                soma += this.Notas[i]
            }
    
            media = soma / this.Notas.length;
    
            return media
        }
    },
    {
        nome: "Julio2",
        Nascimento: "05/05/2002",
        CPF: "11111111111",
        Matricula: "111",
        Notas: [10,10,10],
        Media: function CalculaMedia () {
            soma = 0;
            
            for(let i = 0; i < this.Notas.length; i++) {
                soma += this.Notas[i]
            }
    
            media = soma / this.Notas.length;
    
            return media
        }
    },
    {
        nome: "Julio2",
        Nascimento: "05/05/2002",
        CPF: "11111111111",
        Matricula: "111",
        Notas: [6,6,7],
        Media: function CalculaMedia () {
            soma = 0;
            
            for(let i = 0; i < this.Notas.length; i++) {
                soma += this.Notas[i]
            }
    
            media = soma / this.Notas.length;
    
            return media
        }
    },
]

function calcularMedias(alunos){
    let mediaGeral = 0
    let MediaMaior = null
    let MediaMenor = null
    
    alunos.forEach(aluno => {
        let mediaAluno = aluno.Media()

        mediaGeral += mediaAluno

        if(MediaMenor == null){
            MediaMenor = mediaAluno
        }else{
            if(mediaAluno < MediaMenor){
                MediaMenor = mediaAluno
            }
        }

        if(MediaMaior == null){
            MediaMaior = mediaAluno
        }else{
            if(mediaAluno > MediaMaior){
                MediaMaior = mediaAluno
            }
        }
    })
    mediaGeral /= alunos.length

    return {
        "Media Geral" : mediaGeral, 
        "Menor Media" : MediaMenor, 
        "Maior Media" : MediaMaior
    }
}

console.log(calcularMedias(alunos))





