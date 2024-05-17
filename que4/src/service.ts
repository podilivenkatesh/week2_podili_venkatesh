// logic.ts
import { Student } from './pgConfig';

export async function filterPassedStudents(students: Student[]): Promise<Student[]> {
    return students.filter(student => student.grade >= 50);
}

export async function getStudentNames(students: Student[]): Promise<string[]> {
    return students.map(student => student.name);
}

export async function sortStudentsByGrade(students: Student[]): Promise<Student[]> {
    return students.slice().sort((a, b) => a.grade - b.grade);
}

export async function getAverageAge(students: Student[]): Promise<number> {
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    return totalAge / students.length;
}
