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
monuments.push({
	name:'Peter the Great',
	heightInMeters:96
})

function compareMonumentHeight(a:Monument,b:Monument){
	return a.heightInMeters>b.heightInMeters?1:-1;
}

sayHello(monuments[0].name)

let poem:[number,boolean,string];

poem = [1,true,'love'];
//poem = ['my',true,'love'];
console.log(poem[2].charAt(0));

interface Cephalopod{
	hasInk:boolean;
	arms:number;
	tentacles:number;
}

interface CephalopodDictionary{
	[index:string]:Cephalopod;
}

let dictionary:CephalopodDictionary = {};


dictionary['octopus vulgaris'] = {hasInk:'true',arms:5,tentacles:4}

delete dictionary['octopus vulgaris'];

interface Options{
	material:string;
	backlight:boolean;
}

interface ManualReadonlyOptions{
	readonly materails:string;
	readonly backlight:boolean;
}
interface ManualOptionalOptions{
	materail?:string;
	backlight?:string;
}

interface ManualNullableOptions{
	material:string|null;
	backlight:string|null;
}

interface Options2{
	material:string;
	backlight:boolean;
}

type ReadOnly<T> ={readonly [k in keyof T]:T[k]}
type Optional<T> = {[k in keyof T]?:T[k]}
type Nullable<T> = {[k in keyof T]:T[k] | null}

type ReadonlyOptions = Readonly<Options>;
type OptionalOptions = Optional<Options>;
type NullableOptions = Nullable<Options>;

const options1:ReadonlyOptions = {
	backlight:true,
	material:'plastic',
}

const options2:OptionalOptions = {

}

const options3:NullableOptions = {
	backlight:null,
	material:null
}
