'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function App() {
    var ref = react_1.useRef();
    return (React.createElement("div", null,
        React.createElement("input", { type: "text", ref: ref, onChange: function (e) { return console.log(e.target.value); }, onFocus: function () { return (ref.current.type = "date"); }, onBlur: function () { return (ref.current.type = "text"); } })));
}
exports["default"] = App;
