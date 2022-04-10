class MethodDump {
	constructor() {}

	async assembleFasts() {
		let fastFactory = new FastFactory();

		try {
			return await fastFactory.createBulk();
		} catch (error) {
			console.error("inputProcessor.fetchState(): ", error);
			return [];
		}
	}

	
}
