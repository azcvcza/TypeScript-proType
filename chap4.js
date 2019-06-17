"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fs = require("fs");
var SyncFileReader = /** @class */ (function () {
    function SyncFileReader() {
    }
    SyncFileReader.prototype.getFiles = function (path, depth) {
        if (depth === void 0) { depth = 0; }
        var fileTree = [];
        var files = fs.readdirSync(path);
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            var stats = fs.statSync(file);
            var fileItem = void 0;
            if (stats.isDirectory()) {
                fileItem = {
                    path: file,
                    contents: this.getFiles(file, depth + 1)
                };
            }
            else {
                fileItem = {
                    path: file,
                    contents: []
                };
            }
            fileTree.push(fileItem);
        }
        return fileTree;
    };
    return SyncFileReader;
}());
var LimitedFileReader = /** @class */ (function (_super) {
    __extends(LimitedFileReader, _super);
    function LimitedFileReader(MaxDepth) {
        var _this = _super.call(this) || this;
        _this.MaxDepth = MaxDepth;
        return _this;
    }
    LimitedFileReader.prototype.getFiles = function (path, depth) {
        if (depth === void 0) { depth = 0; }
        if (depth > this.MaxDepth) {
            return [];
        }
        return _super.prototype.getFiles.call(this, path, depth);
    };
    return LimitedFileReader;
}(SyncFileReader));
var fileReder1 = new LimitedFileReader(1);
// const files1 = fileReder1.getFiles("path")
var Totalizer = /** @class */ (function () {
    function Totalizer() {
        this.total = 0;
        this.taxRateFactor = 0.2;
    }
    Totalizer.prototype.addDonation = function (amount) {
        if (amount <= 0) {
            throw new Error('Donation error');
        }
        var taxRebate = amount * this.taxRateFactor;
        var totalDonation = amount + taxRebate;
        this.total += totalDonation;
    };
    Totalizer.prototype.getAmountRaised = function () {
        return this.total;
    };
    return Totalizer;
}());
var Totalizer1 = new Totalizer();
Totalizer1.addDonation(100.00);
var fundsRaised = Totalizer1.getAmountRaised();
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
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.switchOn = function () {
        //..
        console.log("the light on");
    };
    Light.prototype.switchOff = function () {
        //..
        console.log("the light off");
    };
    return Light;
}());
var lightSwitch = /** @class */ (function () {
    function lightSwitch(light) {
        this.light = light;
        this.isOn = false;
    }
    lightSwitch.prototype.onPress = function () {
        if (this.isOn) {
            this.light.switchOff();
            this.isOn = false;
        }
        else {
            this.light.switchOn();
            this.isOn = true;
        }
    };
    return lightSwitch;
}());
var Light1 = /** @class */ (function () {
    function Light1() {
    }
    Light1.prototype.switchOn = function () {
        console.log("light1 on");
    };
    Light1.prototype.switchOff = function () {
        console.log("light off");
    };
    return Light1;
}());
var LightSwitch1 = /** @class */ (function () {
    function LightSwitch1(light1) {
        this.light1 = light1;
        this.isOn = false;
    }
    LightSwitch1.prototype.onPress = function () {
        if (this.isOn) {
            this.light1.switchOff();
            this.isOn = false;
        }
        else {
            this.light1.switchOn();
            this.isOn = true;
        }
    };
    return LightSwitch1;
}());
var light = new Light();
var lightswitch = new lightSwitch(light);
lightswitch.onPress();
lightswitch.onPress();
var light1 = new Light1();
var lightswitch1 = new LightSwitch1(light1);
lightswitch1.onPress();
lightswitch1.onPress();
var BasicWheelCleaning = /** @class */ (function () {
    function BasicWheelCleaning() {
    }
    BasicWheelCleaning.prototype.cleanWheels = function () {
        console.log("basic basic");
        console.log("brush basic");
    };
    return BasicWheelCleaning;
}());
var eliteWheelCleaning = /** @class */ (function () {
    function eliteWheelCleaning() {
    }
    eliteWheelCleaning.prototype.cleanWheels = function () {
        console.log("elite elite");
        console.log("brush elite");
    };
    return eliteWheelCleaning;
}());
var basicwheel = new BasicWheelCleaning();
basicwheel.cleanWheels();
var eliteWheel = new eliteWheelCleaning();
eliteWheel.cleanWheels();
