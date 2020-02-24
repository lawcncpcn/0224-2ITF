/*
ES6 SYNTAX (lesson 1)

class Student{
    constructor(name,  course, section){
        this.name=name;
        this.course=course;
        this.section=section;
    }
    enroll(subject){
        console.log(`${this.name}, ${this.course} is enrolled in section ${this.section}`)
        console.log(`He is studying ${subject}`);

    }
}
    let stud1= new Student("juan dela cruz", "IT", "2ITF");
    stud1.enroll("ICS 2609");

    */

/*
-PROTOTYPE- 


    let stud2= {name:"Alyssa Tangonan", course: "IT", section:"2ITF",
study:function(subject){
    console.log(`${this.name} is enrolled in ${subject}`);
}};

stud2.study("ICS 2609");

let stud3= {name:"Joeann Desierto", course: "IT", section:"2ITF"};
stud3.study("ICS2609");

*/




/*

-CONSTRUCTOR FUNCTION-

function Student(name,course,section){
    this.name=name;
    this.course=course;
    this.section=section;
}

Student.prototype.study=function (subject){
    console.log(`${this.name} is enrolled in ${subject}`);
}

Student.prototype.school="UST";

let stud4= new Student ("Angelyn Atienza", "IT", "2ITF");
let stud5= new Student ("Lawrence Concepcion", "IT", "2ITF");

stud4.study("Biology");
stud5.study("Algebra");

console.log(stud4.school);

*/

/*
-CALL FUNCTION DEMO-

let stud1={name:"Johna Palmares"};
let stud2={name:"Atkins Vergara"};

let study=function(subject){
    console.log(`${this.name} is enrolled in ${subject}`);
}


study.call(stud1, "Science"); //something about binding.
study.call(stud2, "Algebra");

*/


/*
-CALL FUNCTION USING DETAILS- 

let stud1={name:"Johna Palmares"};
let stud2={name:"Atkins Vergara"};

details=["ICS2609", "2ITF"];

let study=function(subject, section){
    console.log(`${this.name} is enrolled in ${subject}, section ${section}`);
};

study.apply(stud1, details);
study.apply(stud2, details);

*/


/*
-BIND FUNCTION-

let stud1={name:"Alyssa Tangonan"};
let stud2={name:"Nad Etneciv"};


let study=function(subject, section){
    console.log(`${this.name} is enrolled in ${subject}, section ${section}`);
};

let s1=study.bind(stud1);
s1("Course ni Ca", "2ITF");

let s2=study.bind(stud2);
s2("biology", "2ITF");

*/


/*

-STATIC FUNCTION-

class School{

    
    static location = "Manila";
    static population = 100;

    constructor(name, population, location){
        this.name=name;
        this.population=population;
        this.location=location;
    }
    

   static offer (course){
        console.log(`${this.name} located in ${this.location} has a
        population of ${this.population}`);
    }
}

let ust= new School("",0,"");
School.offer("Information Technology");

*/

/*
-SETTERS AND GETTERS-

class School{
    setName(name){
        this.name=name;
    }

    getName(){
        return this.name;
    }

    setLocation(location){
        this.location=location;
    }

    getLocation(){
        return this.location;
    }

    setPopulation(population){
        this.population=population;
    }

    getPopulation(){
        return this.population;
    }
}

let ust=new School();
ust.setName("UST");
ust.setLocation("Manila");
ust.setPopulation(40156);

console.log((`${ust.getName()} located in ${ust.getLocation()} and has 
a popuation of ${ust.getPopulation()}`));
*/


/*

-INHERITANCE FUNCTION- 
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    speak(language){
        console.log(`${this.name} can speak ${language}`);
    }
}

class Employee extends Person{
    constructor(name, age, job){
        super(name, age);
        this.job=job;
    }

    work(duration){
        console.log(`${this.name} works ${duration} hours a day!`);
    }
}

let p= new Person("Joeann Desierto", 0);
let e= new Employee("Alyssa Tangonan", "8 months", "Apple Enthusiast");

e.speak("english");
e.work("18")

p.speak("english");

*/