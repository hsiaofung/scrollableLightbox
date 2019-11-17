"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./css/scrollableLightbox.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollableLightbox = function (_Component) {
  _inherits(ScrollableLightbox, _Component);

  function ScrollableLightbox() {
    _classCallCheck(this, ScrollableLightbox);

    return _possibleConstructorReturn(this, (ScrollableLightbox.__proto__ || Object.getPrototypeOf(ScrollableLightbox)).apply(this, arguments));
  }

  _createClass(ScrollableLightbox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          show = _props.show,
          close = _props.close,
          title = _props.title;

      return show && _react2.default.createElement(
        "div",
        { className: "lightbox" },
        _react2.default.createElement(
          "div",
          { className: "content" },
          _react2.default.createElement(
            "div",
            { className: "lightbox-header" },
            title,
            _react2.default.createElement(
              "button",
              { className: "lightbox-close-btn", onClick: close },
              "\u95DC\u9589"
            )
          ),
          _react2.default.createElement("hr", null),
          _react2.default.createElement(
            "div",
            { className: "lightbox-body" },
            this.props.children
          )
        )
      ) || null;
    }
  }]);

  return ScrollableLightbox;
}(_react.Component);

exports.default = ScrollableLightbox;
