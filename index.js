class miniTooltipClass {

    constructor() {

        this.injectHTML();
		this.allTipsSelector = "*[data-tip]";
		this.allTips = document.querySelectorAll(this.allTipsSelector);
        this.dom = document.querySelector("#mini-tooltip");
        this.events();

    }

    events() {

        this.allTips.forEach((el) => {

			el.addEventListener("mouseenter", (e) => {
				if(!e.target.matches(this.allTipsSelector)) { return; }
				const text = e.target.getAttribute('data-tip');
				if(text) { this.showMiniTooltip(e, text) }
			});
			
			el.addEventListener("mousemove", (e) => {
				this.moveMiniTooltip(e);
			});
			
			el.addEventListener("mouseleave", () => {
				this.hideMiniTooltip();
			});
			
			el.addEventListener("click", () => {
				this.hideMiniTooltip();
			});

		});

    }

    showMiniTooltip(e, text) {
		this.moveMiniTooltip(e);
		this.dom.innerHTML = text;
		this.dom.classList.add("show");
	}
	
	hideMiniTooltip() {
		this.dom.classList.remove("show");
	}
	
	moveMiniTooltip(e) {
		this.dom.style.top = e.pageY;
		this.dom.style.left = e.pageX;
		this.dom.style.marginLeft = this.dom.offsetWidth/-2;
	}

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', '<div id="mini-tooltip"></div>');
    }

}

const miniTooltip = new miniTooltipClass();

module.exports = miniTooltip;