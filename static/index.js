"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logsTableNode = document.getElementById("logs");

var Logs = function (_React$Component) {
    _inherits(Logs, _React$Component);

    function Logs() {
        _classCallCheck(this, Logs);

        var _this = _possibleConstructorReturn(this, (Logs.__proto__ || Object.getPrototypeOf(Logs)).call(this));

        _this.state = {
            logs: []
        };
        return _this;
    }

    _createClass(Logs, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadTable();
        }
    }, {
        key: "loadTable",
        value: function loadTable() {
            var _this2 = this;

            fetch("/api/logs").then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        _this2.setState({ logs: data.records });
                        console.log("Total number of logs: ", data._rowsOfLogs.totalLogs);
                        console.log(data.records);
                    });
                } else {
                    response.json().then(function (error) {
                        alert("Failed to load table:" + error.message);
                    });
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "table",
                    { id: "WellnessTable" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "th",
                            null,
                            "Date"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Overall"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Food"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Activity"
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        this.state.logs.map(function (data, key) {
                            return React.createElement(
                                "tr",
                                { key: key },
                                React.createElement(
                                    "td",
                                    null,
                                    data.date
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    data.overall
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    data.food
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    data.activity
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Logs;
}(React.Component);

function addRow() {
    var table = document.getElementById("WellnessTable");
    var tr = table.insertRow(1);
    var form = document.getElementById("newLogForm");
    for (var i = 0; i < 8; i++) {
        tr.insertCell(0).appendChild(form.elements[i].value);
    }
}

ReactDOM.render(React.createElement(Logs, null), logsTableNode);