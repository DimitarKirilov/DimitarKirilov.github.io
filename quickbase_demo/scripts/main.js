fetch(
	"https://raw.githubusercontent.com/DimitarKirilov/DimitarKirilov.github.io/master/quickbase_demo/data/dataset1.json"
)
	.then((response) => response.json())
	.then((json) => {
		let cardContainer = document.getElementById("card-container");

		json.parks.forEach((park) => {
			if (park.image) {
				cardContent = `
				<div class="banner ${park.category.toLowerCase()}">${park.category}</div>
					<img src="${park.image}" alt="Card Image">
				<div class="card-content">
					<h3 class="card-title color-${park.category.toLowerCase()}">${
					park.title ? park.title : "National Park"
				}</h3>
					<p class="card-text">${park.body}</p>
			
				`;

				if (park.link) {
					cardContent += `
					<a class="card-button ${park.category.toLowerCase()}" href="${park.link}">${
						park.linkText
					}</a>
					`;
				}

				let card = document.createElement("div");
				card.className = "card";
				card.innerHTML = cardContent;
				cardContainer.appendChild(card);
			}
		});
	});
