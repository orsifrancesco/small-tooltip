class smallTooltipClass {

    constructor() {

        this.injectHTML();
		this.allTipsSelector = "*[data-tip]";
		this.allTips = document.querySelectorAll(this.allTipsSelector);
        this.dom = document.querySelector("#small-tooltip");
        this.events();

    }

    events() {

        this.allTips.forEach((el) => {

			el.addEventListener("mouseenter", (e) => {
				if(!e.target.matches(this.allTipsSelector)) { return; }
				const text = e.target.getAttribute('data-tip');
				if(text) { this.showSmallTooltip(e, text) }
			});
			
			el.addEventListener("mousemove", (e) => {
				this.moveSmallTooltip(e);
			});
			
			el.addEventListener("mouseleave", () => {
				this.hideSmallTooltip();
			});
			
			el.addEventListener("click", () => {
				this.hideSmallTooltip();
			});

		});

    }

    showSmallTooltip(e, text) {
		this.moveSmallTooltip(e);
		this.dom.innerHTML = text;
		this.dom.classList.add("show");
	}
	
	hideSmallTooltip() {
		this.dom.classList.remove("show");
	}
	
	moveSmallTooltip(e) {
		this.dom.style.top = e.pageY;
		this.dom.style.left = e.pageX;
		this.dom.style.marginLeft = this.dom.offsetWidth/-2;
	}

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', '<div id="small-tooltip"></div>');
    }

}

const smallTooltip = new smallTooltipClass();

module.exports = smallTooltip;