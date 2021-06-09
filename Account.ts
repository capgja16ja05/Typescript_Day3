export class Account
{
    accountHolderName:string;
    accountNumber:number;
    balance:number;

    constructor(accountHolderName:string,accountNumber:number,
        balance:number) {
            this.accountHolderName = accountHolderName;
            this.accountNumber = accountNumber;
            this.balance = balance;
    }   

    // public int calculateInterest(){}

    calculateInterest():number{
        return this.balance*0.05;
    }

    // public void updateBalance(int interestAmount){}

    updateBalance(interestAmount:number)
    {
        this.balance+=interestAmount

    }


}//end class