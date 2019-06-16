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
