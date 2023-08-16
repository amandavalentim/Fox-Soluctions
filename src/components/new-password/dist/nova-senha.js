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
var Formcomponent4 = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    height: 92.5vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    .mobile{\n        display: block;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n        display: none;\n    }\n\n    h1 {\n        color: white;\n        padding-top: 10%;\n        font-size: 1.3em;\n        margin-left: 9%;\n    }\n\n    #password {\n        margin-top: 23%;\n        margin-left: 14%;\n    }\n\n    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    #confirm-password {\n        margin-top: 13%;\n        margin-left: 14%;\n    }\n\n    #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    .confirmar {\n        margin-top: 10%;\n        margin-left: 24%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n        color: white;\n    }\n\n    .confirmar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n    @media(min-width: 768px) {\n\n        height: 80vh;\n        \n        .mobile{\n            display: none;\n        }\n\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-recuperar-senha.svg\");\n        background-repeat: no-repeat;\n\n        form {\n            margin-top: 6%;\n            margin-left: 29%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 320px;\n            height: 350px;\n            border-color: white;\n        }\n\n        #password {\n            margin-top: 20%;\n            margin-left: 13.6%;\n            width: 230px;\n        }\n\n        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1em;\n        }\n\n        #confirm-password {\n            margin-top: 5%;\n            margin-left: 13.6%;\n            width: 230px;\n        }\n\n        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1em;\n        }\n\n        .confirmar {\n            margin-top: 5%;\n            margin-left: 24%;\n            width: 170px;\n            height: 50px;\n            font-size: 1.6em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 20px;\n            color: white;\n        }\n\n        .confirmar:active {\n            margin-top: 5%;\n            margin-left: 24%;\n            width: 170px;\n            height: 50px;\n            font-size: 1.6em;\n            background-color: #86a40f;\n            border: none;\n            border-radius: 20px;\n            color: white;\n        }\n\n        .fox {\n            margin-left: -108%;\n            margin-top: -50%;\n            width: 100px;\n        }\n\n        @media(min-width: 992px) {\n\n            .mobile{\n                display: none;\n            }\n\n            .tablet {\n                display: none;\n            }\n\n            .desktop1 {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            background-image: url(\"/images/992px-recuperar-senha.svg\");\n\n            form {\n                margin-top: 5%;\n                margin-left: 31%;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n                width: 370px;\n                height: 410px;\n                border-color: white;\n            }\n\n            h1 {\n                font-size: 1.5em;\n                margin-left: 11%;\n            }\n\n            #password {\n                margin-top: 20%;\n                margin-left: 13.6%;\n                width: 272px;\n            }\n\n            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.2em;\n            }\n\n            #confirm-password {\n                margin-top: 5%;\n                margin-left: 13.6%;\n                width: 272px;\n            }\n\n            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.2em;\n            }\n\n            .confirmar {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                margin-top: 8%;\n                margin-left: 22%;\n                background-color: #93B413;\n                border: none;\n                border-radius: 20px;\n                color: white;\n            }\n            \n            .confirmar:hover {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                margin-top: 8%;\n                margin-left: 22%;\n                background-color: #9fc214;\n                border: none;\n                border-radius: 20px;\n                color: white;\n            }\n\n            .confirmar:active {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                margin-top: 8%;\n                margin-left: 22%;\n                background-color: #86a40f;\n                border: none;\n                border-radius: 20px;\n                color: white;\n            }\n        }\n    }\n\n"], ["\n\n    height: 92.5vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    .mobile{\n        display: block;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n        display: none;\n    }\n\n    h1 {\n        color: white;\n        padding-top: 10%;\n        font-size: 1.3em;\n        margin-left: 9%;\n    }\n\n    #password {\n        margin-top: 23%;\n        margin-left: 14%;\n    }\n\n    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    #confirm-password {\n        margin-top: 13%;\n        margin-left: 14%;\n    }\n\n    #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    .confirmar {\n        margin-top: 10%;\n        margin-left: 24%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n        color: white;\n    }\n\n    .confirmar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n    @media(min-width: 768px) {\n\n        height: 80vh;\n        \n        .mobile{\n            display: none;\n        }\n\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-recuperar-senha.svg\");\n        background-repeat: no-repeat;\n\n        form {\n            margin-top: 6%;\n            margin-left: 29%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 320px;\n            height: 350px;\n            border-color: white;\n        }\n\n        #password {\n            margin-top: 20%;\n            margin-left: 13.6%;\n            width: 230px;\n        }\n\n        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1em;\n        }\n\n        #confirm-password {\n            margin-top: 5%;\n            margin-left: 13.6%;\n            width: 230px;\n        }\n\n        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1em;\n        }\n\n        .confirmar {\n            margin-top: 5%;\n            margin-left: 24%;\n            width: 170px;\n            height: 50px;\n            font-size: 1.6em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 20px;\n            color: white;\n        }\n\n        .confirmar:active {\n            margin-top: 5%;\n            margin-left: 24%;\n            width: 170px;\n            height: 50px;\n            font-size: 1.6em;\n            background-color: #86a40f;\n            border: none;\n            border-radius: 20px;\n            color: white;\n        }\n\n        .fox {\n            margin-left: -108%;\n            margin-top: -50%;\n            width: 100px;\n        }\n\n        @media(min-width: 992px) {\n\n            .mobile{\n                display: none;\n            }\n\n            .tablet {\n                display: none;\n            }\n\n            .desktop1 {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            background-image: url(\"/images/992px-recuperar-senha.svg\");\n\n            form {\n                margin-top: 5%;\n                margin-left: 31%;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n                width: 370px;\n                height: 410px;\n                border-color: white;\n            }\n\n            h1 {\n                font-size: 1.5em;\n                margin-left: 11%;\n            }\n\n            #password {\n                margin-top: 20%;\n                margin-left: 13.6%;\n                width: 272px;\n            }\n\n            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.2em;\n            }\n\n            #confirm-password {\n                margin-top: 5%;\n                margin-left: 13.6%;\n                width: 272px;\n            }\n\n            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.2em;\n            }\n\n            .confirmar {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                margin-top: 8%;\n                margin-left: 22%;\n                background-color: #93B413;\n                border: none;\n                border-radius: 20px;\n                color: white;\n            }\n            \n            .confirmar:hover {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                margin-top: 8%;\n                margin-left: 22%;\n                background-color: #9fc214;\n                border: none;\n                border-radius: 20px;\n                color: white;\n            }\n\n            .confirmar:active {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                margin-top: 8%;\n                margin-left: 22%;\n                background-color: #86a40f;\n                border: none;\n                border-radius: 20px;\n                color: white;\n            }\n        }\n    }\n\n"])));
var NewPassword = function () {
    return (React.createElement(Formcomponent4, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("h1", null, "Crie a sua nova senha:"),
            React.createElement(Input_1["default"], { type: "number", name: "password", id: "password", placeholder: 'Nova Senha' }),
            React.createElement(Input_1["default"], { type: "number", name: "confirm-password", id: "confirm-password", placeholder: 'Confirmar nova Senha' }),
            React.createElement(link_1["default"], { href: '/LoginPage' },
                React.createElement("button", { className: 'confirmar', type: 'button' }, "Confirmar")),
            React.createElement("img", { src: "/images/raposa-new-password.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'tablet' },
            React.createElement("form", null,
                React.createElement("h1", null, "Crie a sua nova senha:"),
                React.createElement(Input_1["default"], { type: "number", name: "password", id: "password", placeholder: 'Nova Senha' }),
                React.createElement(Input_1["default"], { type: "number", name: "confirm-password", id: "confirm-password", placeholder: 'Confirmar nova Senha' }),
                React.createElement(link_1["default"], { href: '/LoginPage' },
                    React.createElement("button", { className: 'confirmar', type: 'button' }, "Confirmar")),
                React.createElement("img", { src: "/images/Raposa-login.png", alt: "fox", className: 'fox' }))),
        React.createElement("nav", { className: 'desktop1' },
            React.createElement("form", null,
                React.createElement("h1", null, "Crie a sua nova senha:"),
                React.createElement(Input_1["default"], { type: "number", name: "password", id: "password", placeholder: 'Nova Senha' }),
                React.createElement(Input_1["default"], { type: "number", name: "confirm-password", id: "confirm-password", placeholder: 'Confirmar nova Senha' }),
                React.createElement(link_1["default"], { href: '/LoginPage' },
                    React.createElement("button", { className: 'confirmar', type: 'button' }, "Confirmar"))))));
};
exports["default"] = NewPassword;
var templateObject_1;
