/* exported Account */

function Account (number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    this.transactions.push(new Transaction("deposit", amount));
    return true;
  }
  return false;
}

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    this.transactions.push(new Transaction("withdraw", amount));
    return true;
  }
  return false;
}

Account.prototype.getBalance = function () {
  var transactionLength = this.transactions.length

  if (transactionLength > 0) {
    var balance = 0;
    for (var transactionIndex = 0; transactionIndex < transactionLength; transactionIndex++) {
      if (this.transactions[transactionIndex].type === "withdraw") {
        balance -= this.transactions[transactionIndex].amount;
      } else {
        balance += this.transactions[transactionIndex].amount;
      }
    }
    return balance;
  }
  return 0
}
