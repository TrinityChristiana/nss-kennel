const remoteURL = 'http://localhost:5002';

export default {
	get(id, category) {
		return fetch(`${remoteURL}/${category}/${id}`).then(result =>
			result.json()
		);
	},
	getAll(category) {
		return fetch(`${remoteURL}/${category}`).then(result => result.json());
	},
	delete(id, category) {
		return fetch(`${remoteURL}/${category}/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
	},
	post(newObj, category) {
		return fetch(`${remoteURL}/${category}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newObj)
		}).then(data => data.json());
	},
	getWithEmployee(id, category) {
		return fetch(
			`${remoteURL}/${category}/${id}?_embed=employees`
		).then(result => result.json());
	},
	edit(newObj, id, category) {
		return fetch(`${remoteURL}/${category}/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newObj)
		}).then(data => data.json());
	},
	// Add this method to the AnimalManager object
	getRandomId(category) {
		return fetch(`${remoteURL}/${category}`)
			.then(result => result.json())
			.then(elements => {
				const randomIndex = Math.floor(Math.random() * elements.length);
				const randomElement = elements[randomIndex];
				return randomElement.id;
			});
	},
	getWithAnimals(id, category) {
		return fetch(
			`${remoteURL}/${category}/${id}?_embed=animals`
		).then(result => result.json());
	}
};
