'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var BackgroundComponent = styled_1["default"].html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-image: url(\"/images/background2.svg\");\n    background-repeat: no-repeat;\n    background-size: 100% ;\n\n    @media((min-width: 1024px) and (max-width: 1100px)){\n    background-image: url(\"/images/background1-2.svg\");\n    background-color: #0A53B5;\n    background-position-y: 25px;\n    }\n\n    @media((min-width: 320px) and (max-width: 640px)) {\n        background: linear-gradient(180deg, #0A53B5 0%, #07B3FD 100%);\n        height: 1200px;\n    }\n"], ["\n    background-image: url(\"/images/background2.svg\");\n    background-repeat: no-repeat;\n    background-size: 100% ;\n\n    @media((min-width: 1024px) and (max-width: 1100px)){\n    background-image: url(\"/images/background1-2.svg\");\n    background-color: #0A53B5;\n    background-position-y: 25px;\n    }\n\n    @media((min-width: 320px) and (max-width: 640px)) {\n        background: linear-gradient(180deg, #0A53B5 0%, #07B3FD 100%);\n        height: 1200px;\n    }\n"])));
var Background = function () {
    return (React.createElement(BackgroundComponent, null));
};
exports["default"] = Background;
var templateObject_1;
