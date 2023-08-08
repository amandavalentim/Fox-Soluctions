'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var fa_1 = require("react-icons/fa");
var link_1 = require("next/link");
var Input_1 = require("../Forms/Input/Input");
var FormComponent2 = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    * {\n        box-sizing: border-box; \n        margin: 0px;\n        padding: 0px;\n    }\n\n    background: linear-gradient(180deg, #0A53B5 0%, #028fcc 100%);\n\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n    \n    .tablet {\n        display: none;\n    }\n\n    h1{\n        padding-top: 50px;\n        padding-bottom: 60px;\n        text-align: center;\n        font-size: 1.4em;\n        padding-left: 40px;\n    }\n\n    form {\n        text-align: center;\n    }\n\n    .name {\n        padding-bottom: 40px;\n        padding-left: 30px;\n    }\n\n    .email {\n        padding-bottom: 40px;\n        padding-left: 30px;\n    }\n\n    .phone {\n        padding-bottom: 40px;\n        padding-left: 30px;\n    }\n\n    .cpf {\n        padding-bottom: 40px;\n        padding-left: 30px;\n    }\n\n    .senha {\n        padding-bottom: 40px;\n        padding-left: 30px;\n    }\n\n    .confirmar-senha {\n        padding-bottom: 30px;\n        padding-left: 30px;\n    }\n\n    p {\n        padding-top: 2px;\n        padding-bottom: 20px;\n        padding-left: 30px;\n    }\n\n    .google-enter {\n        padding-bottom: 30px;\n    }\n\n    .btn-google {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n    .faGoogle {\n        width: 40px;\n        height: 25px;\n        margin-bottom: -5px;\n    }\n\n    span {\n        color: #F47216;\n    }\n\n    .button-create {\n        padding: 30px;\n    }\n\n    .criar {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .fox {\n        position: absolute;\n        width: 100px;\n        top: 150px;\n    }\n\n    .buttons {\n        padding-left: 28px;\n    }\n\n    @media(min-width: 768px){\n\n        * {\n        box-sizing: border-box; \n        margin: 0px;\n        padding: 0px;\n    }\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        background-image: url(\"/images/tablet-login.svg\");\n        background-repeat: no-repeat;\n\n        \n\n       form {\n        \n        \n       }\n    }\n\n"], ["\n\n    * {\n        box-sizing: border-box; \n        margin: 0px;\n        padding: 0px;\n    }\n\n    background: linear-gradient(180deg, #0A53B5 0%, #028fcc 100%);\n\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n    \n    .tablet {\n        display: none;\n    }\n\n    h1{\n        padding-top: 50px;\n        padding-bottom: 60px;\n        text-align: center;\n        font-size: 1.4em;\n        padding-left: 40px;\n    }\n\n    form {\n        text-align: center;\n    }\n\n    .name {\n        padding-bottom: 40px;\n        padding-left: 30px;\n    }\n\n    .email {\n        padding-bottom: 40px;\n        padding-left: 30px;\n    }\n\n    .phone {\n        padding-bottom: 40px;\n        padding-left: 30px;\n    }\n\n    .cpf {\n        padding-bottom: 40px;\n        padding-left: 30px;\n    }\n\n    .senha {\n        padding-bottom: 40px;\n        padding-left: 30px;\n    }\n\n    .confirmar-senha {\n        padding-bottom: 30px;\n        padding-left: 30px;\n    }\n\n    p {\n        padding-top: 2px;\n        padding-bottom: 20px;\n        padding-left: 30px;\n    }\n\n    .google-enter {\n        padding-bottom: 30px;\n    }\n\n    .btn-google {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n    .faGoogle {\n        width: 40px;\n        height: 25px;\n        margin-bottom: -5px;\n    }\n\n    span {\n        color: #F47216;\n    }\n\n    .button-create {\n        padding: 30px;\n    }\n\n    .criar {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .fox {\n        position: absolute;\n        width: 100px;\n        top: 150px;\n    }\n\n    .buttons {\n        padding-left: 28px;\n    }\n\n    @media(min-width: 768px){\n\n        * {\n        box-sizing: border-box; \n        margin: 0px;\n        padding: 0px;\n    }\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        background-image: url(\"/images/tablet-login.svg\");\n        background-repeat: no-repeat;\n\n        \n\n       form {\n        \n        \n       }\n    }\n\n"])));
var Senha = function () {
};
var Form2 = function () {
    return (React.createElement(FormComponent2, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("div", { className: 'box-container' },
                React.createElement("img", { src: "/images/Stella2.png", alt: "fox", className: 'fox' }),
                React.createElement("form", null,
                    React.createElement("h1", null, "Criar Usu\u00E1rio"),
                    React.createElement("div", { className: 'name' },
                        React.createElement(Input_1["default"], { type: "string", name: "name", id: "name", placeholder: 'Nome Completo' })),
                    React.createElement("div", { className: 'email' },
                        React.createElement(Input_1["default"], { type: "email", name: "email", id: "email", placeholder: 'Email' })),
                    React.createElement("div", { className: 'phone' },
                        React.createElement(Input_1["default"], { type: "phone", name: "phone", id: "phone", placeholder: 'Celular' })),
                    React.createElement("div", { className: 'cpf' },
                        React.createElement(Input_1["default"], { type: "number", name: "cpf", id: "cpf", placeholder: 'CPF' })),
                    React.createElement("div", { className: 'senha' },
                        React.createElement(Input_1["default"], { type: "password", name: "password", id: "password", placeholder: 'Senha' })),
                    React.createElement("div", { className: 'confirmar-senha' },
                        React.createElement(Input_1["default"], { type: "password", name: "confirm-password", id: "confirm-password", placeholder: 'Confirme sua Senha' })),
                    React.createElement("p", null, "OU"),
                    React.createElement("div", { className: 'buttons' },
                        React.createElement("div", { className: 'google-enter' },
                            React.createElement("button", { className: 'btn-google', type: 'button' },
                                React.createElement(fa_1.FaGoogle, { className: 'faGoogle' }),
                                " Entrar com Google")),
                        React.createElement(link_1["default"], { href: '/page2' },
                            "J\u00E1 tem uma conta? ",
                            React.createElement("span", null, "Clique Aqui!")),
                        React.createElement("div", { className: 'button-create' },
                            React.createElement("button", { className: 'criar', type: 'button', onClick: Senha }, "Criar")))))),
        React.createElement("nav", { className: 'tablet' },
            React.createElement("div", { className: 'box-container' },
                React.createElement("img", { src: "/images/Stella2.png", alt: "fox", className: 'fox' }),
                React.createElement("div", { className: 'form2' },
                    React.createElement("form", null,
                        React.createElement("h1", null, "Criar Usu\u00E1rio"),
                        React.createElement("div", { className: 'name' },
                            React.createElement(Input_1["default"], { type: "string", name: "name", id: "name", placeholder: 'Nome Completo' })),
                        React.createElement("div", { className: 'email' },
                            React.createElement(Input_1["default"], { type: "email", name: "email", id: "email", placeholder: 'Email' })),
                        React.createElement("div", { className: 'phone' },
                            React.createElement(Input_1["default"], { type: "phone", name: "phone", id: "phone", placeholder: 'Celular' })),
                        React.createElement("div", { className: 'cpf' },
                            React.createElement(Input_1["default"], { type: "number", name: "cpf", id: "cpf", placeholder: 'CPF' })),
                        React.createElement("div", { className: 'senha' },
                            React.createElement(Input_1["default"], { type: "password", name: "password", id: "password", placeholder: 'Senha' })),
                        React.createElement("div", { className: 'confirmar-senha' },
                            React.createElement(Input_1["default"], { type: "password", name: "confirm-password", id: "confirm-password", placeholder: 'Confirme sua Senha' })),
                        React.createElement("p", null, "OU"),
                        React.createElement("div", { className: 'google-enter' },
                            React.createElement("button", { className: 'btn-google', type: 'button' },
                                React.createElement(fa_1.FaGoogle, { className: 'faGoogle' }),
                                " Entrar com Google")),
                        React.createElement("div", { className: 'link-login' },
                            React.createElement(link_1["default"], { href: '/page2' },
                                "J\u00E1 tem uma conta? ",
                                React.createElement("span", null, "Clique Aqui!"))),
                        React.createElement("div", { className: 'button-create' },
                            React.createElement("button", { className: 'criar', type: 'button', onClick: Senha }, "Criar"))))))));
};
exports["default"] = Form2;
var templateObject_1;
