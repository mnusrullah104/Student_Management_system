"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
// src/Student.ts
class Student {
    constructor(name) {
        this.name = name;
        this.courses = [];
        this.balance = 0;
        this.id = Student.idCounter++;
    }
    enroll(course) {
        this.courses.push(course);
        this.balance += 1000;
    }
    payTuition(amount) {
        this.balance -= amount;
    }
    getStatus() {
        return `Name: ${this.name}, ID: ${this.id}, Courses: ${this.courses.join(', ')}, Balance: ${this.balance}`;
    }
    getId() {
        return this.id;
    }
    getBalance() {
        return this.balance;
    }
}
exports.Student = Student;
Student.idCounter = 10000;
