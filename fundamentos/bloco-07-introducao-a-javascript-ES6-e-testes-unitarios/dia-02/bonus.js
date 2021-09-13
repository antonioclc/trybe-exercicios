const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3})

// 1
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const sumStudentsMath = () => {
    let sum = 0
    for (let i = 0; i < Object.values(allLessons).length; i += 1) {
        if (Object.values(allLessons)[i].materia === 'Matemática') {
            sum += Object.values(allLessons)[i].numeroEstudantes
        }
    }
    return sum
}

// 2
// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (obj, name) => {
    let report = [];
    for (let i = 0; i < Object.values(obj).length; i += 1) {
        if (Object.values(allLessons)[i].professor === name) {
            report.push(Object.values(allLessons)[i])
        }
    }
    return report;
}
