"use strict";
exports.__esModule = true;
var background_1 = require("@/components/ulix/background/background");
var Head_1 = require("../components/Head/Head");
var Footer_1 = require("../components/Footer/Footer");
var Forms_1 = require("../components/Forms");
function Home() {
    return (React.createElement("main", null,
        React.createElement(Head_1["default"], null),
        React.createElement(background_1["default"], null),
        React.createElement(Forms_1["default"], null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
