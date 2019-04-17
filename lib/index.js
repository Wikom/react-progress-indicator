"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Created by rouven on 12.04.17.
 */
var ProgressIndicator = function ProgressIndicator(_ref) {
  var percent = _ref.percent;
  return _react["default"].createElement("div", {
    className: 'progress progress--pageload' + (percent === 100 ? ' invisible' : '')
  }, _react["default"].createElement("div", {
    className: "progress-bar progress-bar-striped",
    role: "progressbar",
    "aria-valuenow": percent,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    style: {
      width: percent + '%'
    }
  }, _react["default"].createElement("span", {
    className: "sr-only"
  }, percent, "% Complete")));
};

ProgressIndicator.propTypes = {
  percent: _propTypes["default"].number
};

var mapStateToProps = function mapStateToProps(state) {
  var queries = Object.keys(state.queries);
  var count = queries.length;
  var sum = queries.reduce(function (acc, val) {
    return acc + state.queries[val].percent;
  }, 0);
  var percent = count > 0 ? sum / count : 0;
  return {
    percent: percent
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(ProgressIndicator);

exports["default"] = _default;