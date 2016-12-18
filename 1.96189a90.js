webpackJsonp([1],{

/***/ 317:
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 1);

var _react2 = _interopRequireDefault(_react);

var _reactMdl = __webpack_require__(/*! react-mdl */ 85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
	_inherits(Contact, _React$Component);

	function Contact() {
		_classCallCheck(this, Contact);

		return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
	}

	_createClass(Contact, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactMdl.Card,
					{ shadow: 0, style: { width: '80%', margin: 'auto' } },
					_react2.default.createElement(
						_reactMdl.CardTitle,
						{ style: { color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' } },
						'Contact'
					),
					_react2.default.createElement(
						_reactMdl.CardText,
						null,
						'This is the contact section'
					),
					_react2.default.createElement(
						_reactMdl.CardActions,
						{ border: true },
						_react2.default.createElement(
							_reactMdl.Button,
							{ colored: true },
							'get Touch'
						)
					)
				)
			);
		}
	}]);

	return Contact;
}(_react2.default.Component);

exports.default = Contact;

/***/ }

});