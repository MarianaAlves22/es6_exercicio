const alunos = [];

const alunoNotas = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'QA',
        nota: '10'
    }
})

alunoNotas.push({
    nome: 'Maria',
    curso: 'QA',
    nota: '5'
})

alunoNotas.push({
    nome: 'João',
    curso: 'QA',
    nota: '6'
})

alunoNotas.push({
    nome: 'Paula',
    curso: 'Backend',
    nota: '10'
})

alunoNotas.push({
    nome: 'Carlos',
    curso: 'Backend',
    nota: '4'
})

alunoNotas.push({
    nome: 'Alberto',
    curso: 'Front-end',
    nota: '8'
})

alunoNotas.push({
    nome: 'Magne',
    curso: 'Front-end',
    nota: '2'
})


function filtra(alunos) {
    return alunos.nota >= 6;
}

const filtra2 = (alunos, indice) => alunos.nota > 6;

const alunosAprovados = alunoNotas.filter(filtra)

console.log('Esses são os alunos aprovados: ', alunosAprovados);