'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var image_1 = require("next/image");
var BodyComponent = styled_1["default"].body(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    .hide-on-small-desktops {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktop-1024 {\n        display: none;\n    }\n    .mobile {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 910px;\n        left: 100px;\n        \n    }\n    #img2 {\n        position: absolute;\n        top: 800px;\n        left: 180px;\n    }\n    #img3 {\n        position: absolute;\n        top: 640px;\n        left: 160px;\n    }\n    #img4 {\n        position: absolute;\n        top: 360px;\n        left: 60px;\n    }\n    #img5 {\n        position: absolute;\n        top: 60px;\n        left: 160px;\n    }\n\n    @media((min-width: 1024px) and (max-width: 1100px)) {\n    .hide-on-small-desktops {\n        display: none;\n    }\n    .desktop-1024 {\n        display: flex;\n        justify-content: space-between;\n    }\n    .mobile {\n        display: none;\n    }\n    }\n\n    @media((min-width: 320px) and (max-width: 640px)) {\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .desktop-1024 {\n        display: none;\n    }\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n    }\n"], ["\n    .hide-on-small-desktops {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktop-1024 {\n        display: none;\n    }\n    .mobile {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 910px;\n        left: 100px;\n        \n    }\n    #img2 {\n        position: absolute;\n        top: 800px;\n        left: 180px;\n    }\n    #img3 {\n        position: absolute;\n        top: 640px;\n        left: 160px;\n    }\n    #img4 {\n        position: absolute;\n        top: 360px;\n        left: 60px;\n    }\n    #img5 {\n        position: absolute;\n        top: 60px;\n        left: 160px;\n    }\n\n    @media((min-width: 1024px) and (max-width: 1100px)) {\n    .hide-on-small-desktops {\n        display: none;\n    }\n    .desktop-1024 {\n        display: flex;\n        justify-content: space-between;\n    }\n    .mobile {\n        display: none;\n    }\n    }\n\n    @media((min-width: 320px) and (max-width: 640px)) {\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .desktop-1024 {\n        display: none;\n    }\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n    }\n"])));
var Body = function () {
    return (React.createElement(BodyComponent, null,
        React.createElement("div", { className: 'hide-on-small-desktops' },
            React.createElement(image_1["default"], { src: "/images/fox_paw1.png", width: 150, height: 150, alt: 'img-1', id: 'img1' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-2.png", width: 150, height: 150, alt: 'img-2', id: 'img2' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-3.png", width: 190, height: 190, alt: 'img-3', id: 'img3' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw4.png", width: 320, height: 320, alt: 'img-4', id: 'img4' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw6.png", width: 320, height: 320, alt: 'img-5', id: 'img5' })),
        React.createElement("div", { className: 'desktop-1024' }),
        React.createElement("div", { className: 'mobile' })));
};
exports["default"] = Body;
var templateObject_1;
