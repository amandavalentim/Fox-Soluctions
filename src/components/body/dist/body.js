'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var image_1 = require("next/image");
var BodyComponent = styled_1["default"].body(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    .hide-on-small-desktops {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktop-1024 {\n        display: none;\n    }\n    .mobile {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 920px;\n        left: 120px;\n        \n    }\n    #img2 {\n        position: absolute;\n        top: 810px;\n        left: 200px;\n    }\n    #img3 {\n        position: absolute;\n        top: 650px;\n        left: 180px;\n    }\n    #img4 {\n        position: absolute;\n        top: 390px;\n        left: 80px;\n    }\n    #img5 {\n        position: absolute;\n        top: 310px;\n        left: 260px;\n    }\n    #img6 {\n        position: absolute;\n        top: 210px;\n        left: 340px;\n    }\n    #img7 {\n        position: absolute;\n        top: 150px;\n        left: 380px;\n    }\n    #img8 {\n        position: absolute;\n        top: 130px;\n        left: 1280px;\n    }\n    #img9 {\n        position: absolute;\n        top: 260px;\n        left: 1280px;\n    }\n\n    @media((min-width: 1024px) and (max-width: 1100px)) {\n    .hide-on-small-desktops {\n        display: none;\n    }\n    .desktop-1024 {\n        display: flex;\n        justify-content: space-between;\n    }\n    .mobile {\n        display: none;\n    }\n    }\n\n    @media((min-width: 320px) and (max-width: 640px)) {\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .desktop-1024 {\n        display: none;\n    }\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n    }\n"], ["\n    .hide-on-small-desktops {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktop-1024 {\n        display: none;\n    }\n    .mobile {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 920px;\n        left: 120px;\n        \n    }\n    #img2 {\n        position: absolute;\n        top: 810px;\n        left: 200px;\n    }\n    #img3 {\n        position: absolute;\n        top: 650px;\n        left: 180px;\n    }\n    #img4 {\n        position: absolute;\n        top: 390px;\n        left: 80px;\n    }\n    #img5 {\n        position: absolute;\n        top: 310px;\n        left: 260px;\n    }\n    #img6 {\n        position: absolute;\n        top: 210px;\n        left: 340px;\n    }\n    #img7 {\n        position: absolute;\n        top: 150px;\n        left: 380px;\n    }\n    #img8 {\n        position: absolute;\n        top: 130px;\n        left: 1280px;\n    }\n    #img9 {\n        position: absolute;\n        top: 260px;\n        left: 1280px;\n    }\n\n    @media((min-width: 1024px) and (max-width: 1100px)) {\n    .hide-on-small-desktops {\n        display: none;\n    }\n    .desktop-1024 {\n        display: flex;\n        justify-content: space-between;\n    }\n    .mobile {\n        display: none;\n    }\n    }\n\n    @media((min-width: 320px) and (max-width: 640px)) {\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .desktop-1024 {\n        display: none;\n    }\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n    }\n"])));
var Body = function () {
    return (React.createElement(BodyComponent, null,
        React.createElement("div", { className: 'hide-on-small-desktops' },
            React.createElement(image_1["default"], { src: "/images/fox_paw1.png", width: 130, height: 130, alt: 'img-1', id: 'img1' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-2.png", width: 130, height: 130, alt: 'img-2', id: 'img2' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-3.png", width: 170, height: 170, alt: 'img-3', id: 'img3' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw4.png", width: 300, height: 300, alt: 'img-4', id: 'img4' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw8.png", width: 150, height: 150, alt: 'img-5', id: 'img5' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-2.png", width: 130, height: 130, alt: 'img-6', id: 'img6' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw10.png", width: 100, height: 100, alt: 'img-7', id: 'img7' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw11.png", width: 155, height: 155, alt: 'img-8', id: 'img8' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw12.png", width: 155, height: 155, alt: 'img-9', id: 'img9' })),
        React.createElement("div", { className: 'desktop-1024' }),
        React.createElement("div", { className: 'mobile' })));
};
exports["default"] = Body;
var templateObject_1;
