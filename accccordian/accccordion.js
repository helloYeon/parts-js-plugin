"use stric";
/*!
 * accccordion 0.0.1
 * (c) 2020 ヨン　ジヌン <jinun.yeon@yeonce.com>
 * MIT Licensed.
 */
function accccordion(target, option) {
	this.accccordions = document.querySelectorAll(`[data-parent="${target}"]`);

	if (this.accccordions.length == 0) {
		throw new Error("ERR : not exist");
	}

	this.option = Object.assign(
		{
			duration: 0.2,
			classNames: {
				toggle: "open",
				toggleActive: "accordion_toggle_active",
				content: "accordion_content",
			},

			direction: "vertical",
			onEvent: "click",
		},
		option || {}
	);

	this.contents = accccordion.setEffect();
	accccordion.setEvt();
}

accccordion.setEffect = () => {
	let contents = {};
	this.accccordions.forEach((element) => {
		let contentId = element.getAttribute("href");
		let content = document.getElementById(contentId.replace("#", ""));
		content.style.transitionDuration = this.option.duration + "s";
		contents[contentId] = content;
	});
	return contents;
};
accccordion.setEvt = () => {
	this.accccordions.forEach((accordion) => {
		accordion.addEventListener(this.option.onEvent, (evt) => {
			evt.preventdefault;

			const id = evt.target.getAttribute("href");
			this.contents[id].classList //
				.toggle(this.option.classNames.toggle);
		});
	});
};
window.accccordion;
