class smallTooltipClass {

	constructor() {

		this.injectHTML();
		this.allTipsSelector = "*[data-tip]";
		this.isIn = false;
		this.lastText = '';
		this.dom = document.querySelector("#small-tooltip");
		this.events();

	}

	events() {

		addEventListener("mouseover", (e) => {
			const tip = e.target.closest(this.allTipsSelector);
			if (tip) {
				const text = tip.getAttribute('data-tip');
				if (
					!this.isIn ||
					(
						text &&
						this.lastText != text
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

		addEventListener("mousemove", (e) => {
			this.moveSmallTooltip(e);
		});

	}

	showSmallTooltip(e, text) {
		if (this.isIn) {
			this.dom.classList.add("show");
			this.moveSmallTooltip(e);
			this.dom.innerHTML = text;
		}
	}

	hideSmallTooltip() {
		this.dom.classList.remove("show");
	}

	moveSmallTooltip(e) {
		this.dom.style.top = e.pageY + 'px';
		this.dom.style.left = e.pageX + 'px';
		this.dom.style.marginLeft = (this.dom.offsetWidth / -2) + 'px';
	}

	injectHTML() {
		document.body.insertAdjacentHTML('beforeend', '<div id="small-tooltip"></div>');
	}

}

const smallTooltip = new smallTooltipClass();

module.exports = smallTooltip;