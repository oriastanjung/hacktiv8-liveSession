// kita telah export class pada inheritance.js
// const EmployeeFactory = require("./inheritance"); js vanilla
//  // dengan es6
// import Programmer from "./inheritance"

const EmployeeFactory = require("./inheritance")
const Orias = EmployeeFactory.createEmployee("Orias" , 1000)
console.log(Orias)