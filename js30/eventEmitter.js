class EventEmitter {
	constructor() {
		this.storage = {}
	}
	subscribe(event, cb) {
		if (this.storage[event]) {
			this.storage[event]['cb'].push(cb);
		} else {
			this.storage[event] = {};
			this.storage[event]['cb'] = [cb];
		}
		return {
			unsubscribe: () => {

				this.storage[event]['cb'] = this.storage[event]['cb'].filter((itm) => itm !== cb)

			}
		};
	}

	emit(event, args = []) {
		if (this.storage[event]) {
			return this.storage[event]['cb'].map(cb => {
				return cb(...args);
			});
		} else {
			return []
		}
	}
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
console.log(sub1.unsubscribe()); // undefined
console.log(emitter.emit("firstEvent", [5])); // [7]
