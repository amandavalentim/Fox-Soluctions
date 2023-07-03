'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var image_1 = require("next/image");
var fa_1 = require("react-icons/fa");
var HeadComponent = styled_1["default"].head(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);\n    height: 150px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    position: relative;\n    .logo-Fox {\n        position: absolute;\n        top: 5px;\n        left: -70px;\n    }\n    .nameLogo {\n        font-size: 1em;\n        position: absolute;\n        left: 40px;\n        top: 110px;\n        color: white;\n        font-family: 'Roboto-Medium';\n    }\n\n    .show-on-mobile {\n        display: none;\n    }\n\n    @media (min-width: 768px) {\n        height: 132px;\n    }\n\n    @media (min-width: 320px) and (max-width:425px) {\n        .hide-on-mobile {\n            display: none;\n        }\n        .show-on-mobile {\n            display: flex;\n            color: #FFFF;\n            cursor: pointer;\n            width: 35px;\n            height: 0px;\n            .faBars {\n                width: 30px;\n                height: 30px;\n            }\n        }\n        .logo-Fox {\n            position: absolute;\n            top: 15px;\n            left: 2px;\n        }\n        .nameLogo {\n            font-size: 1em;\n            position: absolute;\n            left: 103px;\n            top: 122px;\n            color: white;\n            font-family: 'Roboto-Medium';\n        }    \n    }\n"], ["\n    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);\n    height: 150px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    position: relative;\n    .logo-Fox {\n        position: absolute;\n        top: 5px;\n        left: -70px;\n    }\n    .nameLogo {\n        font-size: 1em;\n        position: absolute;\n        left: 40px;\n        top: 110px;\n        color: white;\n        font-family: 'Roboto-Medium';\n    }\n\n    .show-on-mobile {\n        display: none;\n    }\n\n    @media (min-width: 768px) {\n        height: 132px;\n    }\n\n    @media (min-width: 320px) and (max-width:425px) {\n        .hide-on-mobile {\n            display: none;\n        }\n        .show-on-mobile {\n            display: flex;\n            color: #FFFF;\n            cursor: pointer;\n            width: 35px;\n            height: 0px;\n            .faBars {\n                width: 30px;\n                height: 30px;\n            }\n        }\n        .logo-Fox {\n            position: absolute;\n            top: 15px;\n            left: 2px;\n        }\n        .nameLogo {\n            font-size: 1em;\n            position: absolute;\n            left: 103px;\n            top: 122px;\n            color: white;\n            font-family: 'Roboto-Medium';\n        }    \n    }\n"])));
var Ul = styled_1["default"].ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        display: flex;\n        list-style: none;   \n        li {\n            width: 100px;\n            color: white;\n            font-family: 'Poppins-Medium';\n        }\n"], ["\n        display: flex;\n        list-style: none;   \n        li {\n            width: 100px;\n            color: white;\n            font-family: 'Poppins-Medium';\n        }\n"])));
var Head = function () {
    return (React.createElement(HeadComponent, null,
        React.createElement("nav", { className: 'header' },
            React.createElement(image_1["default"], { className: 'logo-Fox', src: "/images/logo-fox1.svg", width: 310, height: 104, alt: "logo" }),
            React.createElement("div", { className: 'nameLogo' }, "Fox Soluctions")),
        React.createElement("nav", { className: 'hide-on-mobile' },
            React.createElement("div", null,
                React.createElement(Ul, null,
                    React.createElement("li", null, "Home"),
                    React.createElement("li", null, "Documentos")))),
        React.createElement("nav", { className: 'show-on-mobile' },
            React.createElement(fa_1.FaBars, { className: 'faBars' }))));
};
exports["default"] = Head;
var templateObject_1, templateObject_2;
