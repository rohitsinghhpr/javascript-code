class Pen{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    getName(){
        return this.name;
    }
}

const p1 = new Pen("win",'red');
console.log(p1.getName());