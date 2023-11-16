export default class Horarios {
    professor: string;
    disciplina: string;
    turma: string;

    constructor(professor: string, disciplina: string, turma: string) {
        this.professor = professor;
        this.disciplina = disciplina;
        this.turma = turma;
    }
}

//talvez não precise ser assim