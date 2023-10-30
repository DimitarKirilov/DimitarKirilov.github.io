class CardButton {
	constructor(category, link, text) {
		(this.category = category), (this.link = link), (this.text = text);
	}
	create() {
		return `
		<a class="card-button ${this.category}" href="${this.link}">${this.text}</a>
		`;
	}
}

// const test = 1;

// export { test };

// fetcb the parks data
fetch(
	"https://raw.githubusercontent.com/DimitarKirilov/DimitarKirilov.github.io/master/quickbase_demo/data/dataset1.json"
)
	.then((response) => response.json())
	.then((json) => {
		let cardContainer = document.getElementById("card-container");

		// generates a card for each park
		json.parks.forEach((park) => {
			// only create a card if the park has an image
			if (park.image) {
				// generates the html for the card
				cardContent = `
				<div class="banner ${park.category.toLowerCase()}">${park.category}</div>
					<img src="${park.image}" alt="Card Image">
				<div class="card-content">
					<h3 class="card-title color-${park.category.toLowerCase()}">${
					park.title ? park.title : "National Park"
				}</h3>
					<p class="card-text">${park.body}</p>
			
				`;

				// add button if there is a link
				if (park.link) {
					button = new CardButton(
						park.category.toLowerCase(),
						park.link,
						park.linkText
					).create();
					// cardContent += `
					// <a class="card-button ${park.category.toLowerCase()}" href="${park.link}">${
					// 	park.linkText
					// }</a>
					// `;
					cardContent += button;
				}

				// create the card element from the content and append to the card cointainer
				let card = document.createElement("div");
				card.className = "card";
				card.innerHTML = cardContent;
				cardContainer.appendChild(card);
			}
		});
	});
