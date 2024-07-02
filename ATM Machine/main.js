import inquirer from "inquirer";
let accountNo = 112233;
let balance = 100000;
let password = "123";
let userCredentials = await inquirer.prompt([
    {
        name: "accountNo",
        type: "number",
        message: "Enter your account number",
    },
    {
        name: "password",
        type: "password",
        message: "Enter your password",
    },
]);
if (userCredentials.accountNo === accountNo && userCredentials.password === password) {
    console.log("Login Successful");
    console.log("welcome Anas Ahmed");
    let operationAns = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "select the operation you want to perform",
        choices: ["deposit", "withdraw", "checkbalance"]
    });
    if (operationAns.operation === "deposit") {
        let amountToDeposit = await inquirer.prompt({
            name: "debitAmount",
            type: "number",
            message: "Enter the amount to deposit",
        });
        console.log("your new balance is : ", (amountToDeposit.debitAmount + balance));
    }
    else if (operationAns.operation === "withdraw") {
        let amountToCredit = await inquirer.prompt({
            name: "creditAmount",
            type: "number",
            message: "Enter amount to withdraw",
        });
        if (amountToCredit.creditAmount > balance) {
            console.log("insufficient balance");
        }
        else if (amountToCredit.creditAmount <= balance) {
            console.log("your new balance is : ", balance - amountToCredit.creditAmount);
        }
    }
    else if (operationAns.operation === "checkbalance") {
        {
            console.log("your current balance is : ", balance);
        }
    }
}
else {
    console.log("Invalid Credentials");
}
