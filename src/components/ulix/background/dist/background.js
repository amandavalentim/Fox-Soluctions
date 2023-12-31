// Background feito por Gabriel Marques Correia
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var BackgroundComponent = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    //Mobile Background\n\n    background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n    position: relative;\n    background-repeat: no-repeat;\n    background-position: bottom;\n    background-size: cover ;\n    height: 100vh;\n\n    // Tablet Background\n    @media (min-width: 768px){\n    background-image: url(\"/images/tablet.svg\");\n    height: 100vh;\n    width: 100%;\n    }\n\n    // Small Screens Background\n    @media (min-width: 992px){\n    background-image: url(\"/images/background3.svg\");\n    height: 100vh;\n    width: 100%;\n    }\n\n    // Medium Screens Background\n    @media (min-width: 1200px){\n    background-image: url(\"/images/background-2.svg\"); \n    background-position: bottom;\n    height: 100vh;\n    width: 100%;\n    }\n\n    //Large Screens Background\n    @media (min-width: 1600px) {\n        background-image: url(\"/images/group-144.svg\");\n        height: 100vh;\n        width: 100%;\n    }\n"], ["\n\n    //Mobile Background\n\n    background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n    position: relative;\n    background-repeat: no-repeat;\n    background-position: bottom;\n    background-size: cover ;\n    height: 100vh;\n\n    // Tablet Background\n    @media (min-width: 768px){\n    background-image: url(\"/images/tablet.svg\");\n    height: 100vh;\n    width: 100%;\n    }\n\n    // Small Screens Background\n    @media (min-width: 992px){\n    background-image: url(\"/images/background3.svg\");\n    height: 100vh;\n    width: 100%;\n    }\n\n    // Medium Screens Background\n    @media (min-width: 1200px){\n    background-image: url(\"/images/background-2.svg\"); \n    background-position: bottom;\n    height: 100vh;\n    width: 100%;\n    }\n\n    //Large Screens Background\n    @media (min-width: 1600px) {\n        background-image: url(\"/images/group-144.svg\");\n        height: 100vh;\n        width: 100%;\n    }\n"])));
var Background = function () {
    return (React.createElement(BackgroundComponent, null));
};
exports["default"] = Background;
var templateObject_1;
