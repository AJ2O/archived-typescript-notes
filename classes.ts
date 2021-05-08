interface UserInterface {
    name: string,
    email: string,
    age: number,
    register();
    payInvoice(number);
}

class User implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: ' + this.name);
    }

    register() {
        console.log(this.name + ' is now registered.');
    }

    payInvoice(money: number) {
        console.log(this.name + ` has paid an invoice of $${money}.`);
    }
}

//let john = new User('John Doe', 'john@gmail.com', 34);
//console.log(john.age);
//john.register();

class Member extends User {
    id: number;
    
    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice(money: number) {
        super.payInvoice(money);
    }
}

let mike = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);
mike.payInvoice(100);