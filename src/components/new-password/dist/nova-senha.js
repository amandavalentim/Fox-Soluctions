'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var link_1 = require("next/link");
var Input_1 = require("../Forms/Input/Input");
var Formcomponent4 = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    height: 80vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    h1 {\n        color: white;\n        padding-top: 10%;\n        font-size: 1.3em;\n        margin-left: 9%;\n    }\n\n    #password {\n        margin-top: 23%;\n        margin-left: 14%;\n    }\n\n    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    #confirm-password {\n        margin-top: 13%;\n        margin-left: 14%;\n    }\n\n    #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    .confirmar {\n        margin-top: 10%;\n        margin-left: 24%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n        color: white;\n    }\n\n    .confirmar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n"], ["\n\n    height: 80vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    h1 {\n        color: white;\n        padding-top: 10%;\n        font-size: 1.3em;\n        margin-left: 9%;\n    }\n\n    #password {\n        margin-top: 23%;\n        margin-left: 14%;\n    }\n\n    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    #confirm-password {\n        margin-top: 13%;\n        margin-left: 14%;\n    }\n\n    #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    .confirmar {\n        margin-top: 10%;\n        margin-left: 24%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n        color: white;\n    }\n\n    .confirmar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n"])));
var NewPassword = function () {
    return (React.createElement(Formcomponent4, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("h1", null, "Crie a sua nova senha:"),
            React.createElement(Input_1["default"], { type: "number", name: "password", id: "password", placeholder: 'Nova Senha' }),
            React.createElement(Input_1["default"], { type: "number", name: "confirm-password", id: "confirm-password", placeholder: 'Confirmar nova Senha' }),
            React.createElement(link_1["default"], { href: '/page2' },
                React.createElement("button", { className: 'confirmar', type: 'button' }, "Confirmar")))));
};
exports["default"] = NewPassword;
var templateObject_1;
