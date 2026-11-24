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