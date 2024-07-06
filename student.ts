// src/Student.ts
export class Student {
    private static idCounter = 10000;
    private id: number;
    private courses: string[] = [];
    private balance: number = 0;

    constructor(private name: string) {
        this.id = Student.idCounter++;
    }

    enroll(course: string) {
        this.courses.push(course);
        this.balance += 1000;
    }

    payTuition(amount: number) {
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
