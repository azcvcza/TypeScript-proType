"use strict";
exports.__esModule = true;
var First;
(function (First) {
    var Example = /** @class */ (function () {
        function Example() {
        }
        Example.prototype.log = function () {
            console.log("logging from first");
        };
        return Example;
    }());
    First.Example = Example;
})(First || (First = {}));
var Second;
(function (Second) {
    var Example = /** @class */ (function () {
        function Example() {
        }
        Example.prototype.log = function () {
            console.log('Loging from Second');
        };
        return Example;
    }());
    Second.Example = Example;
})(Second || (Second = {}));
var first = new First.Example();
var second = new Second.Example();
first.log();
second.log();
var Shipping;
(function (Shipping) {
    var Ferry = /** @class */ (function () {
        function Ferry(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return Ferry;
    }());
    Shipping.Ferry = Ferry;
    var defaultDisplacement = 4000;
    var PrivateShip = /** @class */ (function () {
        function PrivateShip(name, port, displacement) {
            if (displacement === void 0) { displacement = defaultDisplacement; }
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return PrivateShip;
    }());
})(Shipping || (Shipping = {}));
var ferry = new Shipping.Ferry('Assurance', 'London', 22222);
var Docking;
(function (Docking) {
    var Dock = /** @class */ (function () {
        function Dock() {
            this.dockedShips = [];
        }
        Dock.prototype.arrival = function (ship) {
            this.dockedShips.push(ship);
        };
        return Dock;
    }());
    Docking.Dock = Dock;
})(Docking || (Docking = {}));
var dock = new Docking.Dock();
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
(function (Car) {
    var Engine = /** @class */ (function () {
        function Engine() {
        }
        return Engine;
    }());
    Car.Engine = Engine;
    var GloveBoat = /** @class */ (function () {
        function GloveBoat() {
        }
        return GloveBoat;
    }());
    Car.GloveBoat = GloveBoat;
})(Car || (Car = {}));
var car = new Car();
var engine = new Car.Engine();
var gloveBox = new Car.GloveBoat();
var Ferry1 = /** @class */ (function () {
    function Ferry1(name, port, displacement) {
        this.name = name;
        this.port = port;
        this.displacement = displacement;
    }
    return Ferry1;
}());
exports.Ferry1 = Ferry1;
function log(target, key, description) {
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
var OrderedArray = /** @class */ (function () {
    function OrderedArray(comparer) {
        this.comparer = comparer;
        this.items = [];
    }
    OrderedArray.prototype.add = function (item) {
        this.items.push(item);
        this.items.sort(this.comparer);
    };
    OrderedArray.prototype.getItem = function (index) {
        if (this.items.length > index) {
            return this.items[index];
        }
        return null;
    };
    return OrderedArray;
}());
var orderedArray = new OrderedArray();
orderedArray.add(5);
orderedArray.add(1);
orderedArray.add(3);
var firstItem = orderedArray.getItem(0);
console.log("first item in orARR", firstItem);
var OrderedArray1 = (function () {
    function OrderedArray1(comparer) {
        this.comparer = comparer;
        this.items = [];
    }
    OrderedArray1.prototype.add = function (item) {
        this.items.push(item);
        this.items.sort(this.comparer);
    };
    OrderedArray1.prototype.getItem = function (index) {
        if (this.items.length > index) {
            return this.items[index];
        }
        return null;
    };
    return OrderedArray1;
}());
function add(a, b) {
    return a + b;
}
var callsFunction = function (cb) {
    cb('Done');
    //cb(1)
};
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
var C1 = /** @class */ (function () {
    function C1() {
    }
    C1.prototype.show = function (hint) {
        return 1;
    };
    return C1;
}());
var C2 = /** @class */ (function () {
    function C2(name) {
        this.name = name;
    }
    C2.prototype.show = function (hint) {
        if (hint === void 0) { hint = 'default'; }
        return Math.floor(Math.random() * 10);
    };
    return C2;
}());
var C3 = /** @class */ (function () {
    function C3() {
    }
    C3.prototype.show = function () {
        return 'Dynamic';
    };
    return C3;
}());
