interface Subscriber {
	(message: string): void;
}

class Publisher {
	private subscriber: Subscriber[] = [];

	addSubscriber(subscriber: Subscriber) {
		this.subscriber.push(subscriber);
	}
	notify(message: string) {
		for (let subscriber of this.subscriber) {
			subscriber(message);
		}
	}
}
const publisher = new Publisher();

publisher.addSubscriber((message) => {
	console.log('A:' + message);
})
publisher.addSubscriber(function (message) {
	console.log('B:' + message);
})
publisher.notify('test message');

interface FictitiousData {
	id: number;
	name: string;
}

class FictitiousAPI {
	static data: { [index: number]: FictitiousData } = {
		1: { id: 1, name: 'Aramis' },
		2: { id: 2, name: 'Athos' },
		3: { id: 3, name: 'Porthos' },
		4: { id: 4, name: 'D\'Artagnan' }
	}
	static getData(id: number, callback: (data: FictitiousData) => void) {
		// Simulating async data access with a timeout
		setTimeout(() => {
			const result = this.data[id];
			if (typeof result == 'undefined') {
				throw new Error('No matching record');
			}
			callback(result);
		}, 200);
	}
}

FictitiousAPI.getData(1, function (data) {
	console.log(data.name);
})

FictitiousAPI.getData(1, (data) => {
	console.log(data.name);
	FictitiousAPI.getData(2, (data) => {
		if (data.name == 'Athos') {
			console.log(data.id + ' ' + data.name);
		} else {
			console.log(data.name);
		}
		FictitiousAPI.getData(3, (data) => {
			console.log(data.name);
			FictitiousAPI.getData(4, (data) => {
				console.log(data.name);

				FictitiousAPI.getData(5, (data) => {
					console.log(data.name);
				})
			});
		});
	});
});

interface FictitiousData1 {
	id: number;
	name: string;
}
class FictitiousAPI1 {
	static data: { [index: number]: FictitiousData } = {
		1: { id: 1, name: 'Aramis' },
		2: { id: 2, name: 'Athos' },
		3: { id: 3, name: 'Porthos' },
		4: { id: 4, name: 'D\'Artagnan' }
	};
	static getData(id: number) {
		return new Promise((fulfil: (data: FictitiousData) => void, reject: (reason: string)
			=> void) => {
			// Simulating async data access with a timeout
			setTimeout(() => {
				const result = this.data[id];
				if (typeof result == 'undefined') {
					reject('No matching record');
				}
				fulfil(result);
			}, 200);
		});
	}
}
FictitiousAPI1.getData(1).then(function(data){
	console.log(data.name);
})
FictitiousAPI1.getData(5).then(function(data){
	console.log(data.name);
}).catch(function(error){
	console.log('Caught:'+error);
})
Promise.all([
	FictitiousAPI1.getData(1),
	FictitiousAPI1.getData(2),
	FictitiousAPI1.getData(3),
	FictitiousAPI1.getData(4),
]).then((values)=>{
	for(let val of values){
		console.log(val.name);
	}
}).catch((error)=>{
	console.log('Caught:'+error);
})
