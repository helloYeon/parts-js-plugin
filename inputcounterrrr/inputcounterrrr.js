"use stric";
/*!
 * inputcounterrrr 0.0.1
 * (c) 2020 ヨン　ジヌン <jinun.yeon@yeonce.com>
 * MIT Licensed.
 */
var Inputcounterrrr = function (wrap, option) {
	this.wrap = wrap;
	this.option = Object.assign(
		{
			maxLength: 4,
			viewMaxLength: true,
			target: "textarea",
			onOverLengthClass: "is-error",
			lenthStatusClass: "cha-cnt",
		},
		option || {}
	);
	this.wrap = document.getElementById(this.wrap);
	console.log(wrap);
	if (!this.wrap) {
		throw new Error("ERR : wrap is not exist");
	}

	this.target = this.wrap.querySelector(this.option.target);
	if (!this.target) {
		throw new Error("ERR : target is not exist");
	}

	this.lengthStatus = this.wrap.querySelector(`.${this.option.lenthStatusClass}`);
	if (this.option.lenthStatusClass && !this.lengthStatus) {
		throw new Error("ERR : target is not exist");
	}

	Inputcounterrrr.setEvt();
};

Inputcounterrrr.setEffect = () => {
	console.log("optoion.", this.option);
	// content.style.transitionDuration = this.option.duration + "s";
};
Inputcounterrrr.setEvt = () => {
	this.target.addEventListener("keyup", Inputcounterrrr.handleKeyDown);
};

Inputcounterrrr.handleKeyDown = (e) => {
	let length = e.target.value.length;
	const max = this.option.maxLength;
	if (length <= max) {
		this.lengthStatus.textContent = `${length}/${max}`;
		Inputcounterrrr.removeError(e);
	} else {
		this.lengthStatus.textContent = `${length}/${max}`;
		Inputcounterrrr.setError(e);
	}
};
Inputcounterrrr.setError = (e) => {
	this.lengthStatus.classList.add(this.option.onOverLengthClass);
	e.target.classList.add(this.option.onOverLengthClass);
};

Inputcounterrrr.removeError = (e) => {
	this.lengthStatus.classList.remove(this.option.onOverLengthClass);
	e.target.classList.remove(this.option.onOverLengthClass);
};
// accccordion.setEffect = () => {
// 	let contents = {};
// 	this.accccordions.forEach((element) => {
// 		let contentId = element.getAttribute("href");
// 		let content = document.getElementById(contentId.replace("#", ""));
// 		content.style.transitionDuration = this.option.duration + "s";
// 		contents[contentId] = content;
// 	});
// 	return contents;
// };
// accccordion.setEvt = () => {
// 	this.accccordions.forEach((accordion) => {
// 		accordion.addEventListener(this.option.onEvent, (evt) => {
// 			evt.preventdefault;

// 			const id = evt.target.getAttribute("href");
// 			this.contents[id].classList //
// 				.toggle(this.option.classNames.toggle);
// 		});
// 	});
// };

window.Inputcounterrrr;
