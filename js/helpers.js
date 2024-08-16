export class FetchWrapper {
	constructor(baseURL) {
		this.baseURL = baseURL;
	}

	#send = (method, endpoint, body) =>
		fetch(this.baseURL + endpoint, {
			method,
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(body),
		}).then(response => {
			if (!response.ok) {
				throw new Error("API issues.");
			}
			return response.json();
		});

	get = endpoint =>
		fetch(this.baseURL + endpoint).then(response => {
			if (!response.ok) {
				throw new Error("API issues.");
			}
			return response.json();
		});

	put = (endpoint, body) => this.#send("put", endpoint, body);
	post = (endpoint, body) => this.#send("post", endpoint, body);
	delete = (endpoint, body) => this.#send("delete", endpoint, body);
}
