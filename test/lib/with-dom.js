import jsdom from 'jsdom';

(function() {
	global.document = jsdom.jsdom("<html><head></head><body></body></html>");
	global.window = global.document.defaultView;
	global.window.matchMedia = function() {
		return {
			matches : false,
			addListener : function() {},
			removeListener: function() {}
		};
	};

	const script = global.window.document.createElement("script");
	script.src = "../node_modules/react-mdl/extra/material.js";
	global.window.document.body.appendChild(script);
})(global);
