'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var image_1 = require("next/image");
var BodyComponent = styled_1["default"].body(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    #img1 {\n        position: absolute;\n        top: 910px;\n        left: 200px;\n        \n    }\n    #img2 {\n        position: absolute;\n        top: 800px;\n        left: 310px;\n    }\n"], ["\n    #img1 {\n        position: absolute;\n        top: 910px;\n        left: 200px;\n        \n    }\n    #img2 {\n        position: absolute;\n        top: 800px;\n        left: 310px;\n    }\n"])));
var Body = function () {
    return (React.createElement(BodyComponent, null,
        React.createElement("div", { className: 'hide-on-small-desktops' },
            React.createElement(image_1["default"], { src: "/images/fox_paw1.png", width: 120, height: 120, alt: 'img-1', id: 'img1' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-2.png", width: 150, height: 150, alt: 'img-2', id: 'img2' }))));
};
exports["default"] = Body;
var templateObject_1;
