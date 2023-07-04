'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var image_1 = require("next/image");
var BodyComponent = styled_1["default"].body(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    #img1 {\n        position: absolute;\n        top: 50px;\n    }\n"], ["\n    #img1 {\n        position: absolute;\n        top: 50px;\n    }\n"])));
var Body = function () {
    return (React.createElement(BodyComponent, null,
        React.createElement("div", { className: 'hide-on-small-desktops' },
            React.createElement(image_1["default"], { src: "/images/fox_paw1.png", width: 140, height: 140, alt: 'img-1', id: 'img1' }))));
};
exports["default"] = Body;
var templateObject_1;
