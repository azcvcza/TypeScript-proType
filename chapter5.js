var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscriber = [];
    }
    Publisher.prototype.addSubscriber = function (subscriber) {
        this.subscriber.push(subscriber);
    };
    Publisher.prototype.notify = function (message) {
        for (var _i = 0, _a = this.subscriber; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber(message);
        }
    };
    return Publisher;
}());
var publisher = new Publisher();
publisher.addSubscriber(function (message) {
    console.log('A:' + message);
});
publisher.addSubscriber(function (message) {
    console.log('B:' + message);
});
publisher.notify('test message');
var FictiousAPI = /** @class */ (function () {
    function FictiousAPI() {
    }
    FictiousAPI.getData = function (id, callback) {
        var _this = this;
        // Simulating async data access with a timeout
        setTimeout(function () {
            var result = _this.data[id];
            if (typeof result == 'undefined') {
                throw new Error('No matching record');
            }
            callback(result);
        }, 200);
    };
    FictiousAPI.data = {
        1: { id: 1, name: 'Aramis' },
        2: { id: 2, name: 'Athos' },
        3: { id: 3, name: 'Porthos' },
        4: { id: 4, name: 'D\'Artagnan' }
    };
    return FictiousAPI;
}());
FictiousAPI.getData(1, function (data) {
    console.log(data.name);
});
