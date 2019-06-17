import * as fs from 'fs';

interface FileItem {
	path: string;
	contents: string[];
}

class SyncFileReader {
	getFiles(path: string, depth: number = 0) {
		const fileTree = [];
		const files = fs.readdirSync(path);

		for (let file of files) {
			const stats = fs.statSync(file);
			let fileItem: FileItem;

			if (stats.isDirectory()) {
				fileItem = {
					path: file,
					contents: this.getFiles(file, depth + 1)
				}
			}
			else {
				fileItem = {
					path: file,
					contents: []
				}
			}
			fileTree.push(fileItem)
		}
		return fileTree;
	}
}

class LimitedFileReader extends SyncFileReader {
	constructor(public MaxDepth: number) {
		super();
	}
	getFiles(path: string, depth = 0) {
		if (depth > this.MaxDepth) {
			return [];
		}
		return super.getFiles(path, depth);
	}
}

const fileReder1 = new LimitedFileReader(1);
// const files1 = fileReder1.getFiles("path")

class Totalizer {
	private total = 0;
	private taxRateFactor = 0.2;

	addDonation(amount: number) {
		if (amount <= 0) {
			throw new Error('Donation error');
		}
		const taxRebate = amount * this.taxRateFactor;
		const totalDonation = amount + taxRebate;
		this.total += totalDonation
	}
	getAmountRaised() {
		return this.total;
	}
}
const Totalizer1 = new Totalizer();
Totalizer1.addDonation(100.00);
const fundsRaised = Totalizer1.getAmountRaised();
console.log("get fundraised:", fundsRaised);
/*
interface ControlPanel{
	startAlarm(message:string):any;
}
interface Sensor{
	check():any;
}

class MasterControlPanel{
	private sensors:Sensor[]=[];

	constructor(){
		this.sensors.push(new HeatSensor(this));
	}
	start(){
		for (let sensor of this.sensors){
			sensor.check();
		}
		window.setTimeout(()=>{
			this.start()
		},1000)
	}
	startAlarm(message:string){
		console.log('Alarm:',message);
	}
}

class HeatSensor{
	private upperLimit = 38;
	private sensor = {
		read:function(){
			return Math.floor(Math.random() * 100);
		}
	}
	constructor(private controlPanel:ControlPanel){

	}
	check(){
		if(this.sensor.read() > this.upperLimit){
			this.controlPanel.startAlarm('over heating');
		}
	}
}

const controlPanel = new MasterControlPanel();
controlPanel.start();
*/
class Light {
	switchOn() {
		//..
		console.log("the light on")
	}
	switchOff() {
		//..
		console.log("the light off");
	}
}
class lightSwitch {
	private isOn = false;
	constructor(private light: Light) {

	}
	onPress() {
		if (this.isOn) {
			this.light.switchOff();
			this.isOn = false;
		}
		else {
			this.light.switchOn();
			this.isOn = true;
		}
	}
}

interface LightSource {
	switchOn();
	switchOff();
}
class Light1 implements LightSource {
	switchOn() {
		console.log("light1 on");
	}
	switchOff() {
		console.log("light off");
	}
}
class LightSwitch1 {
	private isOn = false;
	constructor(private light1: LightSource) {

	}
	onPress() {
		if (this.isOn) {
			this.light1.switchOff();
			this.isOn = false;
		}
		else {
			this.light1.switchOn();
			this.isOn = true;
		}
	}

}
const light = new Light()
const lightswitch = new lightSwitch(light);
lightswitch.onPress();
lightswitch.onPress();
const light1 = new Light1()
const lightswitch1 = new LightSwitch1(light1);
lightswitch1.onPress();
lightswitch1.onPress();

interface WheelCleaning {
	cleanWheels(): void;
}
class BasicWheelCleaning implements WheelCleaning {
	cleanWheels() {
		console.log("basic basic");
		console.log("brush basic")
	}
}
class eliteWheelCleaning implements BasicWheelCleaning {
	cleanWheels() {
		console.log("elite elite")
		console.log("brush elite")
	}
}
const basicwheel = new BasicWheelCleaning();
basicwheel.cleanWheels();
const eliteWheel = new eliteWheelCleaning();
eliteWheel.cleanWheels();

interface ValetFactory {
	getWheelCleaning(): WheelCleaning;
}
class basicbasic implements ValetFactory {
	getWheelCleaning() {
		return new BasicWheelCleaning();
	}
}
class eliteelite implements ValetFactory {
	getWheelCleaning() {
		return new eliteWheelCleaning();
	}
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
	baseCtors.forEach(baseCtor => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
			derivedCtor.prototype[name] = baseCtor.prototype[name];
		});
	});
}

class Sings{
	sing(){
		console.log("singing");
	}
}
class Dance{
	dance(){
		console.log("dancing");
	}
}
class Act{
	act(){
		console.log("acting")
	}
}

class Actor implements Act{
	act:()=>void
}
applyMixins(Actor, [Act]);
class AllRounder implements Act, Dance, Sings {
 act: () => void;
 dance: () => void;
 sing: () => void;
}
applyMixins(AllRounder, [Act, Dance, Sings]);
const actor = new Actor();
actor.act();
const allrouter = new AllRounder();
allrouter.act();
allrouter.dance();
allrouter.sing();
