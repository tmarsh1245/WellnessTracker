"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formNode = document.getElementById("logForm");

var LogForm = function (_React$Component) {
    _inherits(LogForm, _React$Component);

    function LogForm() {
        _classCallCheck(this, LogForm);

        var _this = _possibleConstructorReturn(this, (LogForm.__proto__ || Object.getPrototypeOf(LogForm)).call(this));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(LogForm, [{
        key: "handleSubmit",
        value: function handleSubmit(event) {
            alert('A log was submitted');
            event.preventDefault();
            var data = new FormData(event.target);
            fetch("api/newLog", {
                method: "POST",
                body: data
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "form",
                    { action: "/api/newLog", method: "POST" },
                    React.createElement("br", null),
                    React.createElement(
                        "h3",
                        null,
                        "Add a New Day"
                    ),
                    React.createElement(
                        "div",
                        { className: "form-row" },
                        React.createElement(
                            "div",
                            { className: "form col-6" },
                            "Date:",
                            React.createElement("br", null),
                            React.createElement("input", { type: "date", name: "date" }),
                            React.createElement("br", null),
                            "Overall Rating:",
                            React.createElement("br", null),
                            React.createElement("input", { type: "number", name: "overall", min: "1", max: "10" }),
                            React.createElement("br", null),
                            "Food Rating:",
                            React.createElement("br", null),
                            React.createElement("input", { type: "number", name: "food", min: "1", max: "10" }),
                            React.createElement("br", null),
                            "Activity Rating:",
                            React.createElement("br", null),
                            React.createElement("input", { type: "number", name: "activity", min: "1", max: "10" }),
                            React.createElement("br", null),
                            "Meds Morning:",
                            React.createElement("br", null),
                            React.createElement("input", { type: "radio", name: "morning", checked: true }),
                            "Yes",
                            React.createElement("input", { type: "radio", name: "morning" }),
                            "No",
                            React.createElement("br", null),
                            "Meds Evening:",
                            React.createElement("br", null),
                            React.createElement("input", { type: "radio", name: "evening", value: "yes", checked: true }),
                            "Yes",
                            React.createElement("input", { type: "radio", name: "evening", value: "no" }),
                            "No",
                            React.createElement("br", null),
                            "Workshift:",
                            React.createElement("br", null),
                            React.createElement("input", { type: "time", name: "timeFrom", value: "12:00" }),
                            " to ",
                            React.createElement("input", { type: "time", name: "timeTo", value: "12:00" }),
                            React.createElement("br", null),
                            React.createElement("input", { type: "submit", value: "Submit", onClick: this.handleSubmit }),
                            React.createElement("input", { type: "reset" })
                        ),
                        React.createElement(
                            "div",
                            { className: "form col-6" },
                            "Breakfast:",
                            React.createElement("br", null),
                            React.createElement("textarea", { name: "breakfast", rows: "2", cols: "60" }),
                            React.createElement("br", null),
                            "Lunch:",
                            React.createElement("br", null),
                            React.createElement("textarea", { name: "lunch", rows: "2", cols: "60" }),
                            React.createElement("br", null),
                            "Dinner:",
                            React.createElement("br", null),
                            React.createElement("textarea", { name: "dinner", rows: "2", cols: "60" }),
                            React.createElement("br", null),
                            "Exercise:",
                            React.createElement("br", null),
                            React.createElement("textarea", { name: "exercise", rows: "2", cols: "60" }),
                            React.createElement("br", null)
                        )
                    )
                )
            );
        }
    }]);

    return LogForm;
}(React.Component);

ReactDOM.render(React.createElement(LogForm, null), formNode);