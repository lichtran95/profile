

// Smooth Scroll
!(function () {
	function v() {
		t.keyboardSupport && X("keydown", S);
	}
	function m() {
		if (!n && document.body) {
			n = !0;
			var e = document.body,
				o = document.documentElement,
				s = window.innerHeight,
				f = e.scrollHeight;
			if (
				((i = document.compatMode.indexOf("CSS") >= 0 ? o : e),
					(l = e),
					v(),
					top != self)
			)
				a = !0;
			else if (f > s && (e.offsetHeight <= s || o.offsetHeight <= s)) {
				var d = document.createElement("div");
				(d.style.cssText =
					"position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
					i.scrollHeight +
					"px"),
					document.body.appendChild(d);
				var m;
				(c = function () {
					m ||
						(m = setTimeout(function () {
							r ||
								((d.style.height = "0"),
									(d.style.height = i.scrollHeight + "px"),
									(m = null));
						}, 500));
				}),
					setTimeout(c, 10),
					X("resize", c);
				var w = { attributes: !0, childList: !0, characterData: !1 };
				if (((u = new j(c)), u.observe(e, w), i.offsetHeight <= s)) {
					var h = document.createElement("div");
					(h.style.clear = "both"), e.appendChild(h);
				}
			}
			t.fixedBackground ||
				r ||
				((e.style.backgroundAttachment = "scroll"),
					(o.style.backgroundAttachment = "scroll"));
		}
	}
	function w() {
		u && u.disconnect(),
			Y(Z, y),
			Y("mousedown", x),
			Y("keydown", S),
			Y("resize", c),
			Y("load", m);
	}
	function g(e, r, a) {
		if ((B(r, a), 1 != t.accelerationMax)) {
			var o = Date.now(),
				n = o - b;
			if (n < t.accelerationDelta) {
				var i = (1 + 50 / n) / 2;
				i > 1 && ((i = Math.min(i, t.accelerationMax)), (r *= i), (a *= i));
			}
			b = Date.now();
		}
		if (
			(h.push({
				x: r,
				y: a,
				lastX: 0 > r ? 0.99 : -0.99,
				lastY: 0 > a ? 0.99 : -0.99,
				start: Date.now(),
			}),
				!p)
		) {
			var l = e === document.body,
				u = function () {
					for (var n = Date.now(), i = 0, c = 0, s = 0; s < h.length; s++) {
						var f = h[s],
							d = n - f.start,
							v = d >= t.animationTime,
							m = v ? 1 : d / t.animationTime;
						t.pulseAlgorithm && (m = _(m));
						var w = (f.x * m - f.lastX) >> 0,
							b = (f.y * m - f.lastY) >> 0;
						(i += w),
							(c += b),
							(f.lastX += w),
							(f.lastY += b),
							v && (h.splice(s, 1), s--);
					}
					l
						? window.scrollBy(i, c)
						: (i && (e.scrollLeft += i), c && (e.scrollTop += c)),
						r || a || (h = []),
						h.length ? R(u, e, 1e3 / t.frameRate + 1) : (p = !1);
				};
			R(u, e, 0), (p = !0);
		}
	}
	function y(e) {
		n || m();
		var r = e.target,
			a = H(r);
		if (!a || e.defaultPrevented || e.ctrlKey) return !0;
		if (
			A(l, "embed") ||
			(A(r, "embed") && /\.pdf/i.test(r.src)) ||
			A(l, "object")
		)
			return !0;
		var o = -e.wheelDeltaX || e.deltaX || 0,
			i = -e.wheelDeltaY || e.deltaY || 0;
		return (
			f &&
			(e.wheelDeltaX &&
				K(e.wheelDeltaX, 120) &&
				(o = -120 * (e.wheelDeltaX / Math.abs(e.wheelDeltaX))),
				e.wheelDeltaY &&
				K(e.wheelDeltaY, 120) &&
				(i = -120 * (e.wheelDeltaY / Math.abs(e.wheelDeltaY)))),
			o || i || (i = -e.wheelDelta || 0),
			1 === e.deltaMode && ((o *= 40), (i *= 40)),
			!t.touchpadSupport && O(i)
				? !0
				: (Math.abs(o) > 1.2 && (o *= t.stepSize / 120),
					Math.abs(i) > 1.2 && (i *= t.stepSize / 120),
					g(a, o, i),
					e.preventDefault(),
					void T())
		);
	}
	function S(e) {
		var r = e.target,
			a =
				e.ctrlKey ||
				e.altKey ||
				e.metaKey ||
				(e.shiftKey && e.keyCode !== d.spacebar);
		document.body.contains(l) || (l = document.activeElement);
		var o = /^(textarea|select|embed|object)$/i,
			n = /^(button|submit|radio|checkbox|file|color|image)$/i;
		if (
			o.test(r.nodeName) ||
			(A(r, "input") && !n.test(r.type)) ||
			A(l, "video") ||
			P(e) ||
			r.isContentEditable ||
			e.defaultPrevented ||
			a
		)
			return !0;
		if (
			(A(r, "button") || (A(r, "input") && n.test(r.type))) &&
			e.keyCode === d.spacebar
		)
			return !0;
		var i,
			u = 0,
			c = 0,
			s = H(l),
			f = s.clientHeight;
		switch ((s == document.body && (f = window.innerHeight), e.keyCode)) {
			case d.up:
				c = -t.arrowScroll;
				break;
			case d.down:
				c = t.arrowScroll;
				break;
			case d.spacebar:
				(i = e.shiftKey ? 1 : -1), (c = -i * f * 0.9);
				break;
			case d.pageup:
				c = 0.9 * -f;
				break;
			case d.pagedown:
				c = 0.9 * f;
				break;
			case d.home:
				c = -s.scrollTop;
				break;
			case d.end:
				var v = s.scrollHeight - s.scrollTop - f;
				c = v > 0 ? v + 10 : 0;
				break;
			case d.left:
				u = -t.arrowScroll;
				break;
			case d.right:
				u = t.arrowScroll;
				break;
			default:
				return !0;
		}
		g(s, u, c), e.preventDefault(), T();
	}
	function x(e) {
		l = e.target;
	}
	function T() {
		clearTimeout(M),
			(M = setInterval(function () {
				D = {};
			}, 1e3));
	}
	function E(e, t) {
		for (var r = e.length; r--;) D[k(e[r])] = t;
		return t;
	}
	function H(e) {
		var t = [],
			r = document.body,
			o = i.scrollHeight;
		do {
			var n = D[k(e)];
			if (n) return E(t, n);
			if ((t.push(e), o === e.scrollHeight)) {
				var l = z(i) && z(r),
					u = l || L(i);
				if ((a && C(i)) || (!a && u)) return E(t, F());
			} else if (C(e) && L(e)) return E(t, e);
		} while ((e = e.parentElement));
	}
	function C(e) {
		return e.clientHeight + 10 < e.scrollHeight;
	}
	function z(e) {
		var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
		return "hidden" !== t;
	}
	function L(e) {
		var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
		return "scroll" === t || "auto" === t;
	}
	function X(e, t) {
		window.addEventListener(e, t, !1);
	}
	function Y(e, t) {
		window.removeEventListener(e, t, !1);
	}
	function A(e, t) {
		return (e.nodeName || "").toLowerCase() === t.toLowerCase();
	}
	function B(e, t) {
		(e = e > 0 ? 1 : -1),
			(t = t > 0 ? 1 : -1),
			(o.x !== e || o.y !== t) && ((o.x = e), (o.y = t), (h = []), (b = 0));
	}
	function O(e) {
		return e
			? (s.length || (s = [e, e, e]),
				(e = Math.abs(e)),
				s.push(e),
				s.shift(),
				clearTimeout(N),
				(N = setTimeout(function () {
					window.localStorage && (localStorage.SS_deltaBuffer = s.join(","));
				}, 1e3)),
				!q(120) && !q(100))
			: void 0;
	}
	function K(e, t) {
		return Math.floor(e / t) == e / t;
	}
	function q(e) {
		return K(s[0], e) && K(s[1], e) && K(s[2], e);
	}
	function P(e) {
		var t = e.target,
			r = !1;
		if (-1 != document.URL.indexOf("www.youtube.com/watch"))
			do
				if ((r = t.classList && t.classList.contains("html5-video-controls")))
					break;
			while ((t = t.parentNode));
		return r;
	}
	function I(e) {
		var r, a, o;
		return (
			(e *= t.pulseScale),
			1 > e
				? (r = e - (1 - Math.exp(-e)))
				: ((a = Math.exp(-1)),
					(e -= 1),
					(o = 1 - Math.exp(-e)),
					(r = a + o * (1 - a))),
			r * t.pulseNormalize
		);
	}
	function _(e) {
		return e >= 1
			? 1
			: 0 >= e
				? 0
				: (1 == t.pulseNormalize && (t.pulseNormalize /= I(1)), I(e));
	}
	function et(r) {
		for (var a in r) e.hasOwnProperty(a) && (t[a] = r[a]);
	}
	var l,
		u,
		c,
		M,
		N,
		e = {
			frameRate: 150,
			animationTime: 400,
			stepSize: 100,
			pulseAlgorithm: !0,
			pulseScale: 4,
			pulseNormalize: 1,
			accelerationDelta: 50,
			accelerationMax: 3,
			keyboardSupport: !0,
			arrowScroll: 50,
			touchpadSupport: !1,
			fixedBackground: !0,
			excluded: "",
		},
		t = e,
		r = !1,
		a = !1,
		o = { x: 0, y: 0 },
		n = !1,
		i = document.documentElement,
		s = [],
		f = /^Mac/.test(navigator.platform),
		d = {
			left: 37,
			up: 38,
			right: 39,
			down: 40,
			spacebar: 32,
			pageup: 33,
			pagedown: 34,
			end: 35,
			home: 36,
		},
		h = [],
		p = !1,
		b = Date.now(),
		k = (function () {
			var e = 0;
			return function (t) {
				return t.uniqueID || (t.uniqueID = e++);
			};
		})(),
		D = {};
	window.localStorage &&
		localStorage.SS_deltaBuffer &&
		(s = localStorage.SS_deltaBuffer.split(","));
	var Z,
		R = (function () {
			return (
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function (e, t, r) {
					window.setTimeout(e, r || 1e3 / 60);
				}
			);
		})(),
		j =
			window.MutationObserver ||
			window.WebKitMutationObserver ||
			window.MozMutationObserver,
		F = (function () {
			var e;
			return function () {
				if (!e) {
					var t = document.createElement("div");
					(t.style.cssText = "height:10000px;width:1px;"),
						document.body.appendChild(t);
					{
						var r = document.body.scrollTop;
						document.documentElement.scrollTop;
					}
					window.scrollBy(0, 3),
						(e =
							document.body.scrollTop != r
								? document.body
								: document.documentElement),
						window.scrollBy(0, -3),
						document.body.removeChild(t);
				}
				return e;
			};
		})(),
		V = window.navigator.userAgent,
		W = /Edge/.test(V),
		$ = /chrome/i.test(V) && !W,
		U = /safari/i.test(V) && !W,
		G = /mobile/i.test(V),
		J = /Windows NT 6.1/i.test(V) && /rv:11/i.test(V),
		Q = ($ || U || J) && !G;
	"onwheel" in document.createElement("div")
		? (Z = "wheel")
		: "onmousewheel" in document.createElement("div") && (Z = "mousewheel"),
		Z && Q && (X(Z, y), X("mousedown", x), X("load", m)),
		(et.destroy = w),
		window.SmoothScrollOptions && et(window.SmoothScrollOptions),
		"function" == typeof define && define.amd
			? define(function () {
				return et;
			})
			: "object" == typeof exports
				? (module.exports = et)
				: (window.SmoothScroll = et);
})();

// danh sách func bật dropdown
$(".dropdown-notification .dropbtn").click(function () {
	$("#content-feature").removeClass("show")
	$("#content-filter").removeClass("show");
	$(this).parent().find("#content-notification").toggleClass("show");
});


$(".dropdown-feature .dropbtn").click(function () {
	$("#content-notification").removeClass("show");
	$(this).parent().find("#content-feature").toggleClass("show");
});

$(".dropdown-filter .dropbtn").click(function () {
	$("#content-feature").removeClass("show")
	$("#content-notification").removeClass("show");
	$(this).parent().find("#content-filter").toggleClass("show");

});

$(".dropdown-more .dropbtn").click(function () {
	$("#content-feature").removeClass("show")
	$("#content-notification").removeClass("show");
	$("#content-filter").removeClass("show");
	$(this).parent().find("#content-more").toggleClass("show");
});



// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}


// mở letter ( chỉ áp dụng cho tablet và mobile)
$(document).ready(function() {
	if ( $(window).width() < 1024 ) {
		$(".draft-list .item").click(function(){
			$(".block-create-letter").addClass("active");
		});
		$(".inbox-list .item").click(function(){
			$(".block-content-inbox").addClass("active");
		});

		$(".sent-list .item").click(function(){
			$(".block-content-sent").addClass("active");
		});

		$(".func-back").click(function(){
			$(".block-create-letter").removeClass("active");
			$(".block-content-inbox").removeClass("active");
			$(".block-content-sent").removeClass("active");
		});
	};	
});

// bật modal feedback
$(".func-open-feedback").click(function(){
	$("body").addClass("overlay-modal");
	$(".bl-modal").addClass("is-show");
	$("#modal-feedback").addClass("active");
});

// event bật deactive ở trang setting
$(".open-modal-deactive").click(function(){
	$("body").addClass("overlay-modal");
	$(".bl-modal").addClass("is-show");
	$("#modal-confirm").addClass("active");
});

// event bật alert login ở trang writer guest
$(".open-alert-login").click(function(){
	$("body").addClass("overlay-modal");
	$(".bl-modal").addClass("is-show")
	$("#modal-alert-login").addClass("active");
});

// func bật modal preview
$(".func-open-preview").click(function () {
	$(".bl-modal").addClass("is-show")
	$("#modal-preview").addClass("active");
	$("body").addClass("overlay-modal");
});



// func-close-modal
$(".func-close-modal, .button-close").click(function(){
	$("body").removeClass("overlay-modal");
	$(".bl-modal").removeClass("is-show")
	$(".modal-container").removeClass("active")
});

// func tab ở trang setting
$('.section-setting .tab a').on('click', function (e) {
	e.preventDefault();
	$(this).parent().addClass('active');
	$(this).parent().siblings().removeClass('active');

	target = $(this).attr('href');
	$('.tab-content .wrap > div').not(target).hide();
	$(target).fadeIn(600);
});

// zoom block write
$(".func-zoom").click(function () {
	$(".block-create-letter").toggleClass("scale");
});

// swiper promote
var swiperHeroHome = new Swiper(".swiper-promote", {
	pagination: {
		el: ".swiper-pagination",
	},
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 1500,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
});