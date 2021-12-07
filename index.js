let balance = 500.0;

class Deposit {
  // Pass in the account that the deposit this for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  // Update the balance in the account
  commit() {
    this.account.balance += this.amount;
  }
}

class Withdrawal {
  // Pass in the account that the withdrawal this for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  // Update the balance in the account
  commit() {
    this.account.balance -= this.amount;
  }
}

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    // Calculate the balance using the transaction objects.
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

// DRIVER CODE BELOW

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.0, myAccount);
t1.commit();

const t2 = new Withdrawal(50.0, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);

t3 = new Deposit(120.0);
t3.commit();
console.log('Transaction 3:', t3);

const myAccount = new Account('snow-patrol');

console.log('Balance:', balance);
