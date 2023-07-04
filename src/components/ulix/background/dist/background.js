'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var BackgroundComponent = styled_1["default"].html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-image: url(\"/images/background2.svg\");\n    position: relative;\n    background-color: #0A53B5;\n    background-repeat: no-repeat;\n    background-size: cover ;\n\n    @media((min-width: 1024px) and (max-width: 1100px)){\n    background-image: url(\"/images/background1.svg\");\n    background-color: #0A53B5;\n    background-size: cover ;\n    background-position-y: 10px;\n    }\n"], ["\n    background-image: url(\"/images/background2.svg\");\n    position: relative;\n    background-color: #0A53B5;\n    background-repeat: no-repeat;\n    background-size: cover ;\n\n    @media((min-width: 1024px) and (max-width: 1100px)){\n    background-image: url(\"/images/background1.svg\");\n    background-color: #0A53B5;\n    background-size: cover ;\n    background-position-y: 10px;\n    }\n"])));
var Background = function () {
    return (React.createElement(BackgroundComponent, null));
};
exports["default"] = Background;
var templateObject_1;
