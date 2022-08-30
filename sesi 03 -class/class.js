// declare
class Employee{
    constructor(name, position){
        this._name = name; // this._name menjadi atribute pada class
        this._position = position;
    }

    // method
    doWork(){
        return "done!!"
    }
    showName(){
        console.log("my name is orias")
    }
    showData(){
        console.log(`my name is ${this._name} my position is ${this._position}`);
    }
    showPartner(partner){
        console.log(`my name is ${this._name} my partner is ${partner}`);
    }

    static running(){ // static method ==> bukan method dari object melainkan method class
        console.log("run away")
    }

}


// buat object baru
const orias = new Employee();
console.log(orias.doWork());
orias.showName()

const alex = new Employee("alex", "engineer");
alex.showData()
alex.showPartner("orias");
// alex.running() error

Employee.running()