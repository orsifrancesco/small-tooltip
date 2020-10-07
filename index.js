export default class SmallTooltip {

	constructor() {

		this.injectHTML();
		this.allTipsSelector = "*[data-tip]";
		this.isIn = false;
		this.lastText = '';
		this.dom = document.querySelector("#small-tooltip");
		this.events();

	}

	events() {

		document.addEventListener("mouseover", (e) => {
			const tip = e.target.closest(this.allTipsSelector);
			if (tip) {
				const text = tip.getAttribute('data-tip');
				if (
					!this.isIn ||
					(
						text &&
						this.lastText !== text
					)
				) {
					this.isIn = true;
					this.showSmallTooltip(e, text);
					this.lastText = text;
				}
			} else if (this.isIn) {
				this.isIn = false;
				this.hideSmallTooltip();
			}
		});

		document.addEventListener("mousemove", (e) => {
			if (this.isIn) {
				this.moveSmallTooltip(e);
			}
		});

	}

	showSmallTooltip(e, text) {
		if (this.isIn) {
			this.dom = document.querySelector("#small-tooltip");
			if (this.dom) {
				this.dom.classList.add("show");
				this.moveSmallTooltip(e);
				this.dom.innerHTML = text;
			}
		}
	}

	hideSmallTooltip() {
		// if (this.isIn) {
		this.dom = document.querySelector("#small-tooltip");
		if (this.dom) {
			this.dom.classList.remove("show");
		}
		// }
	}

	moveSmallTooltip(e) {
		if (this.isIn) {
			this.dom = document.querySelector("#small-tooltip");
			if (this.dom) {
				this.dom.style.top = e.pageY + 'px';
				this.dom.style.left = e.pageX + 'px';
				this.dom.style.marginLeft = (this.dom.offsetWidth / -2) + 'px';
			}
		}
	}

	injectHTML() {
		//document.body.insertAdjacentHTML('beforeend', '<div id="small-tooltip"></div>');
	}

	init() { }

}

