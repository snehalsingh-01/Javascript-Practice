//Prototype & Object

const student = { //object
    fullName : "Snehal Singh", //properties
    Marks : 9.4,
    printMark: function(){ //methods
        console.log("Marks=", this.Marks); //student.Marks (this is a keyword)
    },

};

const employee = {
    calcTax1() {
        console.log ("tax is 10%");
    },
    calcTax2 : function () {
        console.log ("tax is 10%");
    } 
};

const karanArjun = {
    salary : 1000,
};
const karanArjun2 = {
    salary : 1000,
};
const karanArjun3 = {
    salary : 1000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee; //object2 prototype = object 1 

//Classes

class hyundaiCar {

    constructor(brand, mileage) {
        console.log('creating new objects');
        this.brandName = brand;
        this.mileage = mileage;
    }
    start() {
        console.log ("start");
    }

    stop() {
        console.log ('stop');
    }
    /*setBrand (brand) {
        this.brandName = brand;
    }*/
};

let venue = new hyundaiCar("Hyundai", 10);//constructor invokes
console.log(venue);

//Inheritance
class Parent {
    hello(){
        console.log('hello');
    }
}
class child extends Parent{}
let  obj = new child();

class Person {
    constructor(fullName) {
        console.log('enter parent const');
        this.species = "insaan";
        this.fullName = fullName;
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {
    constructor(branch,fullName) {
        console.log('enter child const');
        super(fullName); //Super Keyword, used to invoke parent class constructor
        this.branch = branch;
        console.log('exits child const');
    }
    work() {
        console.log("solve problems, build something");
    }
}

let engObj = new Engineer( "Cse engineer ", "Sweety");



