interface IHuman{
    name:string,
    age:number,
    gender:string
}
//인터페이스로 objet 유형 관리 가능 but js에서는 interface가 없다.
//따라서 js로 변환하는 프로젝트에서는 class를 사용해야 한다!

class CHuman{
    public name: string;
    public age:number;
    public gender:string;
    constructor(name:string,age:number,gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new CHuman("Lynn",18,"female");

const person = {
    name : "nicolas",
    age: 22,
    gender : "male"
}

const sayHiI = (person:IHuman):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!!`
};

const sayHiC = (person:CHuman):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!!`
};


console.log(sayHiI(person));
console.log(sayHiC(lynn));

export{};