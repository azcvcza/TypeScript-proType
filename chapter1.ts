interface PersonInterface{
	name:string;
	heightInCentimeters:number;
}

const sherlock:PersonInterface={
	name:'Bendict',
	heightInCentimeters:183.88,
}

type PersonType = {
	name:string;
	heightInCentimeters:number,
}

const sayHello:Function = (name)=>{
	console.log("hello + ",name);
}
sayHello(sherlock.name);