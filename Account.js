"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(accountHolderName, accountNumber, balance) {
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    // public int calculateInterest(){}
    Account.prototype.calculateInterest = function () {
        return this.balance * 0.05;
    };
    // public void updateBalance(int interestAmount){}
    Account.prototype.updateBalance = function (interestAmount) {
        this.balance += interestAmount;
    };
    return Account;
}()); //end class
exports.Account = Account;
