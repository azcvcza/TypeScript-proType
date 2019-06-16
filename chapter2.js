"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log
    ], Calculator.prototype, "square");
    return Calculator;
}());
