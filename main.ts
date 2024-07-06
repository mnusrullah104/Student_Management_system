// src/index.ts
import inquirer from 'inquirer';
import { StudentManagementSystem } from './StudentManagementSystem';

const system = new StudentManagementSystem();

const mainMenu = async () => {
    const answer = await inquirer.prompt({
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
            const { name } = await inquirer.prompt({
                type: 'input',
                name: 'name',
                message: 'Enter student name:',
            });
            const id = system.addStudent(name);
            console.log(`Student added with ID: ${id}`);
            break;

        case 'Enroll in Course':
            const enrollDetails = await inquirer.prompt([
                { type: 'input', name: 'id', message: 'Enter student ID:' },
                { type: 'input', name: 'course', message: 'Enter course name:' },
            ]);
            const studentEnroll = system.getStudent(Number(enrollDetails.id));
            if (studentEnroll) {
                studentEnroll.enroll(enrollDetails.course);
                console.log(`Enrolled in ${enrollDetails.course}`);
            } else {
                console.log('Student not found');
            }
            break;

        case 'View Balance':
            const { id: balanceId } = await inquirer.prompt({
                type: 'input',
                name: 'id',
                message: 'Enter student ID:',
            });
            const studentBalance = system.getStudent(Number(balanceId));
            if (studentBalance) {
                console.log(`Balance: ${studentBalance.getBalance()}`);
            } else {
                console.log('Student not found');
            }
            break;

        case 'Pay Tuition':
            const paymentDetails = await inquirer.prompt([
                { type: 'input', name: 'id', message: 'Enter student ID:' },
                { type: 'input', name: 'amount', message: 'Enter amount:' },
            ]);
            const studentPayment = system.getStudent(Number(paymentDetails.id));
            if (studentPayment) {
                studentPayment.payTuition(Number(paymentDetails.amount));
                console.log(`Paid ${paymentDetails.amount}, New Balance: ${studentPayment.getBalance()}`);
            } else {
                console.log('Student not found');
            }
            break;

        case 'Show Status':
            const { id: statusId } = await inquirer.prompt({
                type: 'input',
                name: 'id',
                message: 'Enter student ID:',
            });
            const studentStatus = system.getStudent(Number(statusId));
            if (studentStatus) {
                console.log(studentStatus.getStatus());
            } else {
                console.log('Student not found');
            }
            break;

        case 'Exit':
            return;
    }

    mainMenu();
};

mainMenu();
