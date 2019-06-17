namespace First{
	export class Example{
		log(){
			console.log("logging from first");
		}
	}
}

namespace Second {
	export class Example{
		log(){
			console.log('Loging from Second');

		}
	}
}

const first = new First.Example();
const second = new Second.Example();

first.log();
second.log();

namespace Shipping {
	export interface Ship{
		name:string;
		port:string;
		displacement:number;
	}
	export class Ferry implements Ship{
		constructor(public name:string,public port: string ,public displacement:number){

		}
	}
	const defaultDisplacement = 4000;
	class PrivateShip implements Ship{
		constructor(public name:string,public port:string,public displacement:number = defaultDisplacement){

		}
	}
}

const ferry = new Shipping.Ferry('Assurance','London',22222)

namespace Docking {
	import Ship = Shipping.Ship;
	export class Dock {
		private dockedShips:Ship[] = [];

		arrival(ship:Ship){
			this.dockedShips.push(ship);
		}
	}
}
const dock = new Docking.Dock();

class Car{

}

namespace Car{
	export class Engine{

	}
	export class GloveBoat{

	}
}
const car = new Car();
const engine = new Car.Engine();
const gloveBox = new Car.GloveBoat();

export interface Ship1{
	name:string;
	port:string;
	displacement:number;
}

export class Ferry1 implements Ship1{
	constructor(
		public name:string,
		public port:string,
		public displacement:number
	){}
}
function log(target:any,key:string,description:any){
	console.log(key);
}
/*
class Calculator{
	@log
	square(n:number){
		return n*n;
	}
}
*/
class OrderedArray<T>{
	private items:T[] = [];
	constructor(private comparer?:(a:T,b:T)=>number){

	}
	add(item:T):void{
		this.items.push(item);
		this.items.sort(this.comparer);
	}
	getItem(index:number){
		if(this.items.length>index){
			return this.items[index];
		}
		return null;
	}

}
let orderedArray:OrderedArray<number> = new OrderedArray();
orderedArray.add(5);
orderedArray.add(1);
orderedArray.add(3);

let firstItem:number = orderedArray.getItem(0);
console.log("first item in orARR",firstItem);


let OrderedArray1 = (function(){
	function OrderedArray1(comparer){
		this.comparer = comparer;
		this.items = [];
	}

	OrderedArray1.prototype.add = function(item){
		this.items.push(item);
		this.items.sort(this.comparer);
	}
	OrderedArray1.prototype.getItem = function(index){
		if(this.items.length>index){
			return this.items[index];
		}
		return null;
	}
	return OrderedArray1
}())

function add(a:number,b:number){
	return a+b;
}
interface CallsFunction{
	(cb:(result:string)=>any):void
}

let callsFunction:CallsFunction = function(cb){
	cb('Done');

	//cb(1)
}
/*
interface DeviceMotionEvent extends Event {
	readonly acceleration: DeviceAcceleration | null;
	readonly accelerationIncludingGravity: DeviceAcceleration | null;
	readonly interval: number | null;
	readonly rotationRate: DeviceRotationRate | null;
	initDeviceMotionEvent(type: string, bubbles: boolean, cancelable: boolean, acceleration:
   DeviceAccelerationDict | null, accelerationIncludingGravity: DeviceAccelerationDict | null,
   rotationRate: DeviceRotationRateDict | null, interval: number | null): void;
   }
   declare var DeviceMotionEvent: {
	prototype: DeviceMotionEvent;
	new(typeArg: string, eventInitDict?: DeviceMotionEventInit): DeviceMotionEvent;
   };
}
*/
class C1 {
	name:string;
	show(hint:string){
		return 1;
	}
}
class C2{
	constructor(public name:string){

	}
	show(hint:string='default'){
		return Math.floor(Math.random()*10);
	}
}

class C3{
	name:string;
	show(){
		return <any> 'Dynamic';
	}
}
