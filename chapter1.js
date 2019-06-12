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
var sherlock = {
    name: 'Bendict',
    heightInCentimeters: 183.88
};
var sayHello = function (name) {
    console.log("hello + ", name);
};
sayHello(sherlock.name);
var monuments = [];
monuments.push({
    name: 'statue of liberty',
    heightInMeters: 46
});
monuments.push({
    name: 'Peter the Great',
    heightInMeters: 96
});
function compareMonumentHeight1(a, b) {
    return a.heightInMeters > b.heightInMeters ? 1 : -1;
}
sayHello(monuments[0].name);
var poem;
poem = [1, true, 'love'];
//poem = ['my',true,'love'];
console.log(poem[2].charAt(0));
var dictionary = {};
dictionary['octopus vulgaris'] = { hasInk: true, arms: 5, tentacles: 4 };
delete dictionary['octopus vulgaris'];
var options1 = {
    backlight: true,
    material: 'plastic'
};
var options2 = {};
var options3 = {
    backlight: null,
    material: null
};
/*
interface House{
    bedrooms:number;
    bathrooms:number;
}
interface Mansion{
    bedrooms:number;
    bathrooms:number;
    bulters:number;
}
function getProperty1():(House | Mansion):void{

}

const property = getProperty1();
const bedroomCount = property.bedrooms;
const bulterCount = property.bulters;

const workingButlerCount =(<Mansion>property).bulters;
*/
function typeGuardExample1(stringnumber) {
    //const a = stringnumber.length;
    //const b = stringnumber.toFixed();
    if (typeof stringnumber === 'string') {
        return stringnumber.length;
    }
    else {
        return stringnumber.toFixed();
    }
}
function concatenate1(items, seperator, startAt, endAt) {
    if (seperator === void 0) { seperator = ','; }
    if (startAt === void 0) { startAt = 0; }
    if (endAt === void 0) { endAt = items.length; }
    var result = '';
    for (var i = startAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1)) {
            result += seperator;
        }
    }
    return result;
}
var scopeLosingExample = {
    text: 'Property from lexical scope',
    run: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.text);
        }, 1000);
    }
};
//curry
var multiply = function (a) { return function (b) { return a * b; }; };
var numA = multiply(5)(6);
console.log("curry, numA:", numA);
var log = function (source) { return function (message) {
    console.log(source, message);
}; };
log('message one');
log('message two');
var prepareDocument = function () {
    var doc = function (selector) {
        return document.getElementById(selector);
    };
    doc.notify = function (message) {
        console.log("notify:", message);
    };
    return doc;
};
var $ = prepareDocument();
var elem = $('myId');
$.notify(elem.id);
var Song = /** @class */ (function () {
    function Song(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    Song.prototype.play = function () {
        console.log("playing " + this.title + ":" + this.artist);
    };
    return Song;
}());
var Jukebox = /** @class */ (function () {
    function Jukebox(song) {
        this.song = song;
    }
    Jukebox.prototype.play = function () {
        var song = this.getRandomSong();
        song.play();
    };
    Jukebox.prototype.getRandomSong = function () {
        var songCount = this.song.length;
        var songIndex = Math.floor(Math.random() * songCount);
    };
    return Jukebox;
}());
var songs = [
    new Song('bbbb', 'aaaa'),
    new Song('Delays', 'one more nights'),
    new Song('Sohnee', 'Shatter')
];
var jukebox = new Jukebox(songs);
jukebox.play();
var Playlist = /** @class */ (function () {
    function Playlist(name) {
        this.name = name;
        this.songs = [];
    }
    Playlist.prototype.addSong = function (song) {
        if (this.songs.length >= Playlist.length) {
            throw new Error('Playlist full!');
        }
        this.songs.push(song);
    };
    Playlist.maxSongCount = 30;
    return Playlist;
}());
var playlist = new Playlist('my playlist');
var p_name = playlist.name;
playlist.addSong(new Song('Therapy', 'fuckyou'));
var maxSongs = Playlist.maxSongCount;
var WarehouseLocation = /** @class */ (function () {
    function WarehouseLocation(asile, slot) {
        this.asile = asile;
        this.slot = slot;
    }
    Object.defineProperty(WarehouseLocation.prototype, "stockItem", {
        get: function () {
            return this._stockItem;
        },
        set: function (item) {
            this._stockItem = item;
        },
        enumerable: true,
        configurable: true
    });
    return WarehouseLocation;
}());
var figure = { asin: 'B001TEQ2PI', description: 'Figure' };
var warehouseSlot = new WarehouseLocation('helloworld', 'assasin');
warehouseSlot.stockItem = figure;
var Song1 = /** @class */ (function () {
    function Song1(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    Song1.prototype.play = function () {
        console.log("Playing " + this.title + " by -" + this.artist);
    };
    Song1.Comparer = function (a, b) {
        if (a.title === b.title) {
            return 0;
        }
        return a.title > b.title ? 1 : -1;
    };
    return Song1;
}());
var PlayList1 = /** @class */ (function () {
    function PlayList1(songs) {
        this.songs = songs;
    }
    PlayList1.prototype.play = function () {
        var song = this.songs.pop();
        song.play();
    };
    PlayList1.prototype.sort = function () {
        this.songs.sort(Song1.Comparer);
    };
    return PlayList1;
}());
var RepeatingPlaylist = /** @class */ (function (_super) {
    __extends(RepeatingPlaylist, _super);
    function RepeatingPlaylist(songs) {
        var _this = _super.call(this, songs) || this;
        _this.songIndex = 0;
        return _this;
    }
    RepeatingPlaylist.prototype.play = function () {
        this.songs[this.songIndex].play;
        this.songIndex++;
        if (this.songIndex >= this.songs.length) {
            this.songIndex = 0;
        }
    };
    return RepeatingPlaylist;
}(PlayList1));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.getMessage = function (message) {
        return "Information:" + new Date().toUTCString() + ":$message";
    };
    return Logger;
}());
var ConsoleLogger = /** @class */ (function (_super) {
    __extends(ConsoleLogger, _super);
    function ConsoleLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConsoleLogger.prototype.notify = function (message) {
        console.log(this.getMessage(message));
    };
    return ConsoleLogger;
}(Logger));
var InvasiveLogger = /** @class */ (function (_super) {
    __extends(InvasiveLogger, _super);
    function InvasiveLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InvasiveLogger.prototype.notify = function (message) {
        console.log("this:", this.getMessage(message));
    };
    return InvasiveLogger;
}(Logger));
var Logger1;
// error Logger1 = new Logger();
Logger1 = new InvasiveLogger();
Logger1.notify('Hello World');
var ClickCounter = /** @class */ (function () {
    function ClickCounter() {
        this.count = 0;
    }
    ClickCounter.prototype.registerClick = function () {
        this.count++;
        console.log(this.count);
    };
    return ClickCounter;
}());
var Cc = new ClickCounter();
document.getElementById('target').onclick = Cc.registerClick;
function reverseT(list) {
    var reverseList = [];
    for (var i = (list.length - 1); i >= 0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
}
var letters = ['a', 'b', 'c', 'd'];
var rLetters = reverseT(letters);
var numbers = [1, 2, 3, 4];
var rnumbers = reverseT(numbers);
