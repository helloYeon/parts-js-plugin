/*!
 * jQuery mmmmodal 0.0.1
 * (c) 2020 ヨン　ジヌン <jinun.yeon@yeonce.com>
 * MIT Licensed.
 */

(function ($) {
	$.fn.mmmmodal = function (options) {
		var defaultopt = {
			duration: 500,
			background: "#000000",
			overlay_opacity: ".5",
			background_scroll: false,
			close_btn: "close-btn",
			type: "inline",
			custom_css: {
				position: "fixed",
				width: "100%",
				height: "100%",
				top: "0",
				left: "0",
				transition: "background-color .6s ease-out",
				display: "none",
				"z-index": 1,
			},
		};

		var o = $.extend(true, defaultopt, options || {});

		var main = function (idx, element) {
			var $this = $(this),
				$videoIframe;

			if (!/^#/g.exec($this.attr("href"))) return true;

			// Make Modal Content
			// ----------------------------------------------------------------
			var getModalContent = function () {
				let $ccc = $($this.attr("href"));
				if (o.type == "inline") return $ccc;

				var movieInfo = $ccc.find("a").fadeOut();

				if (/youtube/g.exec(movieInfo.attr("href"))) {
					if ($ccc.find("iframe").length) return $ccc;

					var $videoWrap = $("<div>").css({
						position: "relative",
						"padding-bottom": "56.25%",
						"padding-top": "25px",
						height: 0,
					});

					$videoIframe = $("<iframe>")
						.attr({
							src: movieInfo.attr("href").replace(/(.*)\?.*$/i, "$1") + "?enablejsapi=1&mute=0",
							frameborder: "0",
							allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
							allowfullscreen: true,
						})
						.css({
							position: "absolute",
							top: 0,
							left: "0",
							width: "100%",
							height: "100%",
						});

					$videoIframe.on("load", function () {});
					return $ccc.append($videoWrap.append($videoIframe));
				}
			};

			// Close Modal
			// ----------------------------------------------------------------
			var close = function (e) {
				if (!$(e.target).closest($modalContent).length) {
					$modalContentWrap.css("background-color", "transparent").fadeOut();
					$("body").css({ overflow: "auto" });

					if ($videoIframe) {
						$videoIframe[0].contentWindow.postMessage(
							'{"event":"command","func":"stopVideo","args":""}',
							"*"
						);
					}
				}
			};

			// Open Modal
			// ----------------------------------------------------------------
			var open = function (e) {
				console.log("opeon");
				$close_btn = $("<div class='" + o.close_btn + "'>");
				$modalContentWrap.append($close_btn);
				$modalContentWrap.show().css({
					"background-color": hexToRgbA(o.background, o.overlay_opacity),
					"transition-duration": o.duration / 1000 + "s",
				});
				if (o.background_scroll === false) {
					$("body").css({ overflow: "hidden" });
				}

				if ($videoIframe) {
					$videoIframe[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
				}
			};

			var $modalContent = getModalContent(),
				$modalContentWrap = $modalContent.wrap($("<div>").css(o.custom_css)).parent();

			$modalContentWrap.on("tap click", close);
			$(document).on("tap click", "." + o.close_btn, close);
			$this.on("tap click", open);
		};
		return this.each(main);
	};

	function hexToRgbA(hex, opacity) {
		var c;
		opacity = opacity ? opacity : 1;

		if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
			c = hex.substring(1).split("");
			if (c.length == 3) {
				c = [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c = "0x" + c.join("");
			return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + "," + opacity + ")";
		}
		throw new Error("Bad Hex");
	}
})(jQuery);
