/* *************************************************************************************
	アーコディオンボタン
  	[関連ファイル]
 　　	js	:	plugin.zig.modal.css
 		css	:	plugin.zig.modal.css
 	[option説明]
 		btn_id			: 操作するボタンIDを指定
 		duration 		: 速度を指定
 		no_scroll_back	: モーダルを表示したときに背景部分はスクロールできないようにする
 ************************************************************************************* */
/*!
 * jQuery 4s.modal 0.0.1
 * (c) 2020 ヨン　ジヌン <jinun.yeon@yeonce.com>
 * MIT Licensed.
 */

(function ($) {
	$.fn.zig_modal = function (options) {
		var defaultopt = {
			close_btn: false,
			duration: 500,
			transition: "linear",
			no_scroll_back: true,
		};

		options = options || {};
		$.extend(true, defaultopt, options);

		var $modal = $(this);

		var btn_id = $("#" + $modal.attr("id"));
		var close_btn = $("#" + defaultopt.close_btn);

		btn_id.on("tap click", function (e) {
			console.log("open click");
			if ($modal.is(":animated")) return false;

			isModalOpen() == true ? closeaccordion() : openaccordion();
			e.stopPropagation();
			return false;
		});

		if (close_btn) {
			close_btn.on("tap click", function () {
				if ($modal.is(":animated")) return false;
				closeaccordion();
			});
		}

		$("a[href]").on("tap click", function () {
			if (isModalOpen() == true) {
				console.log("href click");
				closeaccordion();
			}
		});
		function isModalOpen() {
			return $modal.css("display") == "block" ? true : false;
		}
		function openaccordion(duration) {
			if (defaultopt.no_scroll_back) {
				$("body").css({
					overflow: "hidden",
				});
			}

			$modal.fadeIn();
		}

		function closeaccordion() {
			console.log("exec cloadcondition");
			$("body").css({
				overflow: "auto",
			});

			modal.fadeOut(100);
		}
	};
})(jQuery);
