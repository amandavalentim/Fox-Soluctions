'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var BackgroundComponent = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nposition: relative;\n    background-color: linear-gradient(180deg, #0A53B5 0%, #07B3FD 100%);\n    background-repeat: no-repeat;\n    background-size: cover ;\n    height: 100vh;\n    width: 100%;\n\n    @media (min-width: 768px){\n    background-image: url(\"/images/background-tablet-2.svg\");\n    background-position-y: -85px;\n    }\n\n    @media (min-width: 992px){\n    background-image: url(\"/images/background3.svg\");\n    background-position-y: -110px;\n    }\n\n    @media (min-width: 1200px){\n    background-image: url(\"/images/background-2.svg\");\n    background-position-y: -110px;\n    }\n\n    @media (min-width: 1600px) {\n        background-image: url(\"/images/background-tall-screens.svg\");\n        background-position-y: -100px;\n    }\n"], ["\nposition: relative;\n    background-color: linear-gradient(180deg, #0A53B5 0%, #07B3FD 100%);\n    background-repeat: no-repeat;\n    background-size: cover ;\n    height: 100vh;\n    width: 100%;\n\n    @media (min-width: 768px){\n    background-image: url(\"/images/background-tablet-2.svg\");\n    background-position-y: -85px;\n    }\n\n    @media (min-width: 992px){\n    background-image: url(\"/images/background3.svg\");\n    background-position-y: -110px;\n    }\n\n    @media (min-width: 1200px){\n    background-image: url(\"/images/background-2.svg\");\n    background-position-y: -110px;\n    }\n\n    @media (min-width: 1600px) {\n        background-image: url(\"/images/background-tall-screens.svg\");\n        background-position-y: -100px;\n    }\n"])));
var Background = function () {
    return (React.createElement(BackgroundComponent, null));
};
exports["default"] = Background;
var templateObject_1;
