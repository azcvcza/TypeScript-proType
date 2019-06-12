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

interface House{
	bedrooms:number;
	bathrooms:number;
}
interface Mansion{
	bedrooms:number;
	bathrooms:number;
	bulters:number;
}
function getProperty():House | Mansion{

}

const property = getProperty();
const bedroomCount = property.bedrooms;
const bulterCount = property.bulters;

const workingButlerCount =(<Mansion>property).bulters;

function typeGuardExample(stringnumber:string|number){
	const a = stringnumber.length;
	const b = stringnumber.toFixed();
	if(typeof stringNumber ==='string'){
		return stringnumber.length;
	}
	else{
		return stringnumber.toFixed();
	}
}

function concatenate(items:string[],seperator=',',startAt=0,endAt=items.length){
	let result = '';
	for(let i = beginAt;i<endAt;i++){
		result += items[i];
		if(i<(endAt-1)){
			result+=seperator;
		}
	}
	return result;
}

const scopeLosingExample = {
	text:'Property from lexical scope',
	run:function(){
		setTimeout(()=>{
			console.log(this.text);
		},1000)
	}
}

//curry
const multiply = (a:number)=>(b:number)=>a*b;

const numA = multiply(5)(6);
console.log("curry, numA:",numA);

const log = (source:string)=>(message:string)=>{
	console.log(source,message);
}
log('message one');
log('message two');

interface Point{
	x:number;
	y:number;
}

interface Passenger{
	name:string;
}

interface Vehicle{
	new():Vehicle;
	currentLocation:Point;
	travelTo(point:Point):void;
	addPassenger(pessenger:Passenger):void;
	removePassenger(passenger:Passenger):void;
}

interface SimpleDocument{
	(selector:string):HTMLElement;
	notify(message:string):void;
}

const prepareDocument = function():SimpleDocument{
	let doc = <SimpleDocument>function(selector:string){
		return document.getElementById(selector);
	}
	doc.notify = function(message:string){
		console.log("notify:",message);
	}
	return doc;
}

const $ = prepareDocument();
const elem = $('myId');
$.notify(elem.id);

class Song{
	constructor(private artist:string,private title:string){

	}
	play(){
		console.log("playing "+this.title+":"+this.artist);
	}
}
class Jukebox{
	constructor(private song:Song[]){

	}
	play(){
		const song = this.getRandomSong();
		song.play();
	}
	private getRandomSong(){
		const songCount = this.song.length;
		const songIndex = Math.floor(Math.random()*songCount);
	}
}

const songs = [
	new Song('bbbb','aaaa'),
	new Song('Delays','one more nights'),
	new Song('Sohnee','Shatter')
]
const jukebox = new Jukebox(songs);
jukebox.play();

class Playlist{
	private songs:Song[]=[];
	static readonly maxSongCount =30;
	constructor(public name:string){

	}
	addSong(song:Song){
		if(this.songs.length>=Playlist.length){
			throw new Error('Playlist full!');
		}
		this.songs.push(song);
	}
}
const playlist = new Playlist('my playlist');

const p_name = playlist.name;
playlist.addSong(new Song('Therapy','fuckyou'));
const maxSongs = Playlist.maxSongCount;
// error Playlist.maxSongCount = 20;

interface StockItem{
	description:string;
	asin:string;
}

class WarehouseLocation{
	private _stockItem:StockItem;
	constructor(public asile:string,public slot:string){

	}
	get stockItem(){
		return this._stockItem
	}
	set stockItem(item:StockItem){
		this._stockItem = item;
	}
}

const figure ={asin:'B001TEQ2PI',description:'Figure'};
const warehouseSlot = new WarehouseLocation('helloworld','assasin');

warehouseSlot.stockItem = figure;

interface Audio{
	play():any;
}
class Song1 implements Audio{
	constructor(private artist:string,private title:string){

	}
	play():void{
		console.log("Playing "+this.title+" by -"+this.artist);
	}
	static Comparer(a:Song1,b:Song1){
		if(a.title === b.title){
			return 0;
		}
		return a.title > b.title?1:-1;
	}
}

class PlayList1 {
	constructor(public songs:Audio[]){

	}
	play(){
		var song = this.songs.pop();
		song.play();
	}
	sort(){
		this.songs.sort(Song1.Comparer);
	}
}
class RepeatingPlaylist extends PlayList1{
	private songIndex = 0;
	constructor(songs:Song1[]){
		super(songs);
	}
	play(){
		this.songs[this.songIndex].play;
		this.songIndex++;
		if(this.songIndex>=this.songs.length){
			this.songIndex=0;
		}
	}
}

