class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    static getHoge()  {
        return 'Hoge';
    }
}

let alice = new Person('Alice');
console.log(alice.getName());
console.log(Person.getHoge());

// Inheritance
class Athlate extends Person {
    constructor(name, sports) {
        super(name);
        this.sports = sports;
    }

    // override
    getName() {
        return `${this.name}(${this.sports})`;
    }
}
let bob = new Athlate('Bob','Baseball');
console.log(bob.getName());
console.log(Athlate.getHoge());

