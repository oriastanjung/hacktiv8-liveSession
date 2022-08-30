// inheritance ==> penurunan sifat ke class anaknya
class Person {
    constructor(name,salary,position){
        this.name = name; // this._name menjadi atribute pada class
        this.salary = salary; // this._name menjadi atribute pada class
        this.position = position; // this._name menjadi atribute pada class
    }
    getName(){
        console.log(this.name);
    }
}

class Programmer extends Person{
    constructor(name,salary){
        super(name,salary, "Programmer"); // memasukkan constructor ke parent atribute
    }
    getName(){ // polymorphism karena nama function sm tapi bisa beda kerjaan
        console.log(`${this.name} salary is ${this.salary} work as ${this.position}`);
    }
}

class Admin extends Person{
    constructor(name,salary){
        super(name,salary, "Admin"); // memasukkan constructor ke parent atribute
    }
}


class EmployeeFactory {

    static createEmployee(name, position, salary){
        if(position === "Programmer"){
            return new Programmer(name , salary)
        }else if(position === "Admin"){
            return new Admin(name , salary)
        }
    }
}



const orias = new Programmer("orias", 15000000);
console.log(orias)
orias.getName();

const ujang = EmployeeFactory.createEmployee("Ujang", "Admin", 100000);
const michael = EmployeeFactory.createEmployee("Michael", "Programmer", 100000);
console.log(ujang);
console.log(michael);


module.exports = EmployeeFactory

