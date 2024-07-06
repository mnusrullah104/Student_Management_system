"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const inquirer_1 = __importDefault(require("inquirer"));
const StudentManagementSystem_1 = require("./StudentManagementSystem");
const system = new StudentManagementSystem_1.StudentManagementSystem();
const mainMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield inquirer_1.default.prompt({
        type: 'list',
        name: 'action',
        message: 'Choose an operation',
        choices: [
            'Add Student',
            'Enroll in Course',
            'View Balance',
            'Pay Tuition',
            'Show Status',
            'Exit',
        ],
    });
    switch (answer.action) {
        case 'Add Student':
            const { name } = yield inquirer_1.default.prompt({
                type: 'input',
                name: 'name',
                message: 'Enter student name:',
            });
            const id = system.addStudent(name);
            console.log(`Student added with ID: ${id}`);
            break;
        case 'Enroll in Course':
            const enrollDetails = yield inquirer_1.default.prompt([
                { type: 'input', name: 'id', message: 'Enter student ID:' },
                { type: 'input', name: 'course', message: 'Enter course name:' },
            ]);
            const studentEnroll = system.getStudent(Number(enrollDetails.id));
            if (studentEnroll) {
                studentEnroll.enroll(enrollDetails.course);
                console.log(`Enrolled in ${enrollDetails.course}`);
            }
            else {
                console.log('Student not found');
            }
            break;
        case 'View Balance':
            const { id: balanceId } = yield inquirer_1.default.prompt({
                type: 'input',
                name: 'id',
                message: 'Enter student ID:',
            });
            const studentBalance = system.getStudent(Number(balanceId));
            if (studentBalance) {
                console.log(`Balance: ${studentBalance.getBalance()}`);
            }
            else {
                console.log('Student not found');
            }
            break;
        case 'Pay Tuition':
            const paymentDetails = yield inquirer_1.default.prompt([
                { type: 'input', name: 'id', message: 'Enter student ID:' },
                { type: 'input', name: 'amount', message: 'Enter amount:' },
            ]);
            const studentPayment = system.getStudent(Number(paymentDetails.id));
            if (studentPayment) {
                studentPayment.payTuition(Number(paymentDetails.amount));
                console.log(`Paid ${paymentDetails.amount}, New Balance: ${studentPayment.getBalance()}`);
            }
            else {
                console.log('Student not found');
            }
            break;
        case 'Show Status':
            const { id: statusId } = yield inquirer_1.default.prompt({
                type: 'input',
                name: 'id',
                message: 'Enter student ID:',
            });
            const studentStatus = system.getStudent(Number(statusId));
            if (studentStatus) {
                console.log(studentStatus.getStatus());
            }
            else {
                console.log('Student not found');
            }
            break;
        case 'Exit':
            return;
    }
    mainMenu();
});
mainMenu();
