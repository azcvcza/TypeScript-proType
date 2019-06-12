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

enum VehicleType  {
	pedalCycle,
	MotorCycle,
	Car,
	Van,
	Bus,
	Lorry
}

const t_type = VehicleType.Lorry;

const typeName = VehicleType[t_type];

interface Monument{
	name:string;
	heightInMeters
}

const monuments:Monument[] = [];

monuments.push({
	name:'statue of liberty',
	heightInMeters:46
})
sayHello(monuments[0].name)