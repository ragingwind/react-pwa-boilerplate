webpackJsonp([0],{

/***/ 318:
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./src/components/Users.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 1);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(/*! react-router/lib/Link */ 139);

var _Link2 = _interopRequireDefault(_Link);

var _reactMdl = __webpack_require__(/*! react-mdl */ 85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dummyUsers = {
	jimmy: {
		fullName: 'Jimmy Moon',
		age: 30
	},
	jane: {
		fullName: 'Jane yoo',
		age: 29
	},
	john: {
		fullName: 'John Doh',
		age: 67
	}
};

var User = function (_React$Component) {
	_inherits(User, _React$Component);

	function User() {
		_classCallCheck(this, User);

		return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
	}

	_createClass(User, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactMdl.Card,
				{ shadow: 0, style: { width: '80%', margin: 'auto', marginTop: '30px' } },
				_react2.default.createElement(
					_reactMdl.CardTitle,
					null,
					'User: ',
					this.props.id
				),
				_react2.default.createElement(
					_reactMdl.CardText,
					{ style: { fontSize: '1em' } },
					'This is ',
					_react2.default.createElement(
						_Link2.default,
						{ style: { color: 'rgba(0,0,0, 0.54)' }, to: '/users/' + this.props.id },
						this.props.fullName
					),
					' section'
				)
			);
		}
	}]);

	return User;
}(_react2.default.Component);

User.propTypes = {
	id: _react2.default.PropTypes.string,
	fullName: _react2.default.PropTypes.string
};

var Users = function (_React$Component2) {
	_inherits(Users, _React$Component2);

	function Users() {
		_classCallCheck(this, Users);

		var _this2 = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this));

		_this2.state = {
			users: dummyUsers
		};
		return _this2;
	}

	_createClass(Users, [{
		key: 'render',
		value: function render() {
			var users = {};

			if (this.props.params && this.props.params.id) {
				users[this.props.params.id] = this.state.users[this.props.params.id];
			} else {
				users = this.state.users;
			}

			var children = Object.keys(users).map(function (u, i) {
				return _react2.default.createElement(User, _extends({ key: u + '-' + i, id: u }, users[u]));
			});

			return _react2.default.createElement(
				'div',
				null,
				children
			);
		}
	}]);

	return Users;
}(_react2.default.Component);

Users.propTypes = {
	params: _react2.default.PropTypes.object
};

exports.default = Users;

/***/ }

});