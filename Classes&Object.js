//this is types of Object can write in Javascript

//create a object
const student ={
    fname:"khurram",
    lname:"khan",
    namefunction: function(){
        console.log("Full Name of Function = ",this.fname+this.lname);
    }
}

const employee= {
    calcTax1(){
        console.log("tax rate is 10%");  //1
        //both of ways to create function
    },
    calcTax2:function(){
        console.log("tax is 20%"); //2
    }
}

const karanArjun = {
    salary:5000,
};
karanArjun.__proto__ = employee;



/* ==================================Class==============*/
// class ToyotaCar{           //Class

//    constructor(){
//     console.log("this is new Object");
//    }


//     start(){       //function
//         console.log("start");
//     }
//     stop(){
//         console.log("Stop");
//     }
//     setBrand(brand){
//         this.brandName = brand;
//     }
// }
// let foutuner = new ToyotaCar(); // Object
// foutuner.setBrand("MarutiSuzuki");



// ============================= Inheritence ===============================//
// class parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class child extends parent{

// }
// let obj = new child();
// console.log(obj.child());  


/*================================ SUPER keyword=======================================*/ 

/*class person{
    constructor(name){
        console.log("Enter in parent constructor")
        this.name= name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}
class Engineer extends person{
    constructor(name){
        console.log("enter in child class")
        super(name); //to invoke parent class constructor
        this.name = this.name;
        console.log("exit from child constructor");
    }
    work(){
        super.eat();
        console.log("solve problem ,createive thinking");
    }
}
let EngObj = new Engineer("khurram");

console.log(EngObj.work());
*/

/*================================== Practice Question ==================== */
  
class User{    
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("This is secret Data");
    }
}
let student1 = new User("khurram","khan@122.gmail");
student1.viewData();

class Admin extends User{
    constructor(name,email){
    super(name,email);
    this.name = name;
    this.email= email;
    }
    editData(){
        super.viewData();
        console.log("it is Admin class");
    }
}

let admin1 = new Admin("khuram","email.com");
admin1.editData;


/*========================== try and catch block ======================= */
let a =1;
let b =2;
console.log("a + b = ",a+b);
try{
console.log("a+c = ",a+c); //error
}
catch(err){
   console.log(err);
}
console.log("After error");