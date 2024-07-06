// src/StudentManagementSystem.ts
import { Student } from './student';

export class StudentManagementSystem {
    private students: Map<number, Student> = new Map();

    addStudent(name: string) {
        const student = new Student(name);
        this.students.set(student.getId(), student);
        return student.getId();
    }

    getStudent(id: number) {
        return this.students.get(id);
    }
}
