'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var BackgroundComponent = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-repeat: no-repeat;\n    background-size: cover ;\n    height: 100vh;\n    background-color: linear-gradient(180deg, #0A53B5 0%, #07B3FD 100%);\n\n    @media (min-width: 768px){\n    background-image: url(\"/images/background.svg\");\n    background-position-y: -105px;\n    }\n\n    @media (min-width: 992px){\n    background-image: url(\"/images/background3.svg\");\n    background-position-y: -110px;\n    }\n"], ["\n    background-repeat: no-repeat;\n    background-size: cover ;\n    height: 100vh;\n    background-color: linear-gradient(180deg, #0A53B5 0%, #07B3FD 100%);\n\n    @media (min-width: 768px){\n    background-image: url(\"/images/background.svg\");\n    background-position-y: -105px;\n    }\n\n    @media (min-width: 992px){\n    background-image: url(\"/images/background3.svg\");\n    background-position-y: -110px;\n    }\n"])));
var Background = function () {
    return (React.createElement(BackgroundComponent, null));
};
exports["default"] = Background;
var templateObject_1;
