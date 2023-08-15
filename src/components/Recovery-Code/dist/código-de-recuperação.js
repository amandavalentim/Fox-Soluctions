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
var FormComponent3 = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    height: 80vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    .mobile {\n        display: block;\n        justify-content: space-between;\n    }\n\n    h1 {\n        text-align: center;\n        font-size: 1.2em;\n        font-family: 'Poppins-medium';\n        margin-left: 1%;\n        padding-top: 10%;\n    }\n\n    #code {\n        padding-top: 20%;\n        margin-left: 15%;\n    }\n\n    p{\n        margin-left: 68%;\n        margin-top: -3%;\n    }\n\n    .resend {\n        margin-top: 5%;\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: -55%;\n        color: #93B413;\n    }\n\n    .resend:active {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: -55%;\n        color: #86a40f;\n    }\n\n    .rename {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: 45%;\n        margin-top: -10.2%;\n        color: #93B413;\n    }\n\n    .rename:active {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: 45%;\n        margin-top: -10.2%;\n        color: #86a40f;\n    }\n\n    .enviar {\n        margin-top: 23%;\n        margin-left: 24%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .enviar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n"], ["\n\n    height: 80vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    .mobile {\n        display: block;\n        justify-content: space-between;\n    }\n\n    h1 {\n        text-align: center;\n        font-size: 1.2em;\n        font-family: 'Poppins-medium';\n        margin-left: 1%;\n        padding-top: 10%;\n    }\n\n    #code {\n        padding-top: 20%;\n        margin-left: 15%;\n    }\n\n    p{\n        margin-left: 68%;\n        margin-top: -3%;\n    }\n\n    .resend {\n        margin-top: 5%;\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: -55%;\n        color: #93B413;\n    }\n\n    .resend:active {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: -55%;\n        color: #86a40f;\n    }\n\n    .rename {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: 45%;\n        margin-top: -10.2%;\n        color: #93B413;\n    }\n\n    .rename:active {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: 45%;\n        margin-top: -10.2%;\n        color: #86a40f;\n    }\n\n    .enviar {\n        margin-top: 23%;\n        margin-left: 24%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .enviar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n"])));
var RecoveryCode = function () {
    return (React.createElement(FormComponent3, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("h1", null,
                "Digite o c\u00F3digo que",
                React.createElement("br", null),
                " enviamos para voc\u00EA:"),
            React.createElement("div", { className: 'input' },
                React.createElement(Input_1["default"], { type: "number", name: "code", id: "code" }),
                React.createElement("p", null, "00:10")),
            React.createElement("div", { className: 'resend' },
                React.createElement("a", { href: "", id: 'a1' },
                    "N\u00E3o recebeu?",
                    React.createElement("br", null),
                    " Reenviar")),
            React.createElement("div", { className: 'rename' },
                React.createElement("a", { href: "", id: 'a2' },
                    "N\u00E3o \u00E9 o seu email?",
                    React.createElement("br", null),
                    " Reescreva")),
            React.createElement(link_1["default"], { href: '/page7' },
                React.createElement("button", { className: 'enviar', type: 'button' }, "Enviar")))));
};
exports["default"] = RecoveryCode;
var templateObject_1;
