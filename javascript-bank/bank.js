/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
}

Bank.prototype.getAccount = function (number) {
  if (this.accounts[number - 1]) {
    return this.accounts[number - 1];
  } else {
    return null;
  }
}

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    var totalAssets = 0
    for (var accountsIndex = 0; accountsIndex < this.accounts.length; accountsIndex++) {
      totalAssets += this.accounts[accountsIndex].getBalance();
    }
    return totalAssets;
  }
}
