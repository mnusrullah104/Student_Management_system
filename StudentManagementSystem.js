"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManagementSystem = void 0;
// src/StudentManagementSystem.ts
const student_1 = require("./student");
class StudentManagementSystem {
    constructor() {
        this.students = new Map();
    }
    addStudent(name) {
        const student = new student_1.Student(name);
        this.students.set(student.getId(), student);
        return student.getId();
    }
    getStudent(id) {
        return this.students.get(id);
    }
}
exports.StudentManagementSystem = StudentManagementSystem;
