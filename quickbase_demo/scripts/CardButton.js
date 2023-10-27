class CardButton {
	constructor(category, link, text) {
		(this.category = category), (this.link = link), (this.text = text);
	}
	create() {
		return `
		<a class="card-button ${this.category}" href="${this.link}">${this.linkText}</a>
		`;
	}
}

export default CardButton;
