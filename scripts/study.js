class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    static getInterestRate() {
        return 0.5; // Процентная ставка
    }
}

const account1 = new BankAccount(1000);
const account2 = new BankAccount(500);

console.log(BankAccount.getInterestRate()); // Вывод: 0.5

console.log("Account 1 balance:", account1.getBalance()); // Вывод: 1000
console.log("Account 2 balance:", account2.getBalance()); // Вывод: 500

console.log(typeof(BankAccount));