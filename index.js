class BankAccount{
  constructor(){
    this.balance=0;

  }
  widthdraw(){
    console.log('Heres some money');
  }
  deposit(){
    console.log('Give some money');
  }
}

class CheckingAccount extends BankAccount{
  constructor(){
    super();// must be called in subclass
    this.balance = 5; //starting balance for checking account
  }
}

class SavingsAccount extends BankAccount{
  constructor(){
    super();// must be called in subclass
    this.balance = 100; //starting balance for savings account
  }
  widthdraw(number){
    if(number>3){
      console.log('you cannot withdraw');
    } else{
      console.log('heres your money');
    }
  }
}


let bobsAccount = new SavingsAccount();
console.log(bobsAccount.balance);
bobsAccount.widthdraw(4);