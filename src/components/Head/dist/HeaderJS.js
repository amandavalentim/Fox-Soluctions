"use strict";
var _a;
exports.__esModule = true;
var script_1 = require("next/script");
var HeaderJS = script_1["default"];
((_a = document.querySelector('#butao')) === null || _a === void 0 ? void 0 : _a.addEventListener) ? ('click') : function () {
    var _a;
    console.log('click');
    (_a = document.querySelector('#butao')) === null || _a === void 0 ? void 0 : _a.classList.add('open');
};
var HeadJS = function () {
    return (React.createElement(HeaderJS, null));
};
exports["default"] = HeadJS;
