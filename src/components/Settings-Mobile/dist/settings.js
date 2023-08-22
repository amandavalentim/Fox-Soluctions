// Developed code by Gabriel
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var link_1 = require("next/link");
var image_1 = require("next/image");
var SettingsComponents = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    // Mobile\n\n    height: 114vh;\n\n    background-color: #2F99BF;\n\n    .mobile {\n        display: block;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n        display: none;\n    }\n\n    .desktop2 {\n        display: none;\n    }\n\n    .desktop3 {\n        display: none;\n    }\n\n    #photo-input {\n        display: none;\n    }\n\n    .photo {\n        margin-left: 15%;\n        margin-top: 10%;\n        width: 130px;\n        height: 130px;\n    }\n\n    * {\n        font-family: 'Poppins';\n    }\n\n    .name {\n        margin-left: 10%;\n        margin-top: 13%;\n        font-size: 1.2em;\n    }\n\n    .email {\n        margin-left: 10%;\n        margin-top: 10%;\n        font-size: 1.2em;\n    }\n\n    .birthday {\n        margin-left: 10%;\n        margin-top: 10%;\n        font-size: 1.2em;\n    }\n\n    .cpf {\n        margin-left: 10%;\n        margin-top: 10%;\n        font-size: 1.2em;\n    }\n\n    .country {\n        margin-left: 10%;\n        margin-top: 10%;\n        font-size: 1.2em;\n    }\n\n    span {\n        font-weight: bold;\n    }\n\n    .changePassword {\n        background-color: #93B413;\n        border: none;\n        font-size: 1.5em;\n        margin-top: 12%;\n        margin-left: 15%;\n        border-radius: 19px;\n        width: 220px;\n        height: 40px;\n    }\n\n    .changePassword:active {\n        background-color: #86a40f;\n        border: none;\n        font-size: 1.5em;\n        margin-top: 12%;\n        margin-left: 15%;\n        border-radius: 19px;\n        width: 220px;\n        height: 40px;\n    }\n\n    .deleteAccount {\n        background-color: red;\n        border: none;\n        font-size: 1.5em;\n        margin-top: 4%;\n        margin-left: 15%;\n        border-radius: 19px;\n        width: 220px;\n        height: 40px;\n    }\n\n    .deleteAccount:active {\n        background-color: #cf0000;\n        border: none;\n        font-size: 1.5em;\n        margin-top: 4%;\n        margin-left: 15%;\n        border-radius: 19px;\n        width: 220px;\n        height: 40px;\n    }\n\n\n    // Tablet\n    @media(min-width: 768px) {\n\n        height: 90vh;\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: block;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n\n        .fox {\n            margin-top: 10%;\n            margin-left: 35%;\n            width: 200px;\n        }\n\n        h1 {\n            font-size: 4em;\n            margin-left: 42%;\n        }\n        p {\n            text-align: center;\n        }\n\n        span {\n            color: #F47216;\n        }\n    }\n\n\n    // Small Screens\n    @media(min-width: 992px) {\n\n        height: 90vh;\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: block;\n            justify-content: space-between;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n\n        .fox {\n            margin-top: 10%;\n            margin-left: 40%;\n            width: 200px;\n        }\n\n        h1 {\n            font-size: 4em;\n            margin-left: 45%;\n        }\n\n        p {\n            text-align: center;\n            font-size: 1.2em;\n        }\n\n        span {\n            color: #F47216;\n        }\n    }\n\n    // Medium Screens\n    @media(min-width: 1200px) {\n\n        height: 90vh;\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: block;\n            justify-content: space-between;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n\n        .fox {\n            margin-top: 5%;\n            margin-left: 42%;\n            width: 250px;\n        }\n\n        h1 {\n            font-size: 5em;\n            margin-left: 47%;\n        }\n\n        p {\n            text-align: center;\n            font-size: 1.7em;\n            margin-left: 2%;\n        }\n\n        span {\n            color: #F47216;\n        }\n    }\n\n\n    // Large Screens\n    @media(min-width: 1600px) {\n\n        height: 90vh;\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: block;\n            justify-content: space-between;\n        }\n\n        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n\n        .fox {\n            margin-top: 5%;\n            margin-left: 41%;\n            width: 250px;\n        }\n\n        h1 {\n            font-size: 5em;\n            margin-left: 45%;\n        }\n\n        p {\n            text-align: center;\n            font-size: 1.9em;\n            margin-left: 2%;\n        }\n\n        span {\n            color: #F47216;\n        }\n    }\n\n"], ["\n\n    // Mobile\n\n    height: 114vh;\n\n    background-color: #2F99BF;\n\n    .mobile {\n        display: block;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n        display: none;\n    }\n\n    .desktop2 {\n        display: none;\n    }\n\n    .desktop3 {\n        display: none;\n    }\n\n    #photo-input {\n        display: none;\n    }\n\n    .photo {\n        margin-left: 15%;\n        margin-top: 10%;\n        width: 130px;\n        height: 130px;\n    }\n\n    * {\n        font-family: 'Poppins';\n    }\n\n    .name {\n        margin-left: 10%;\n        margin-top: 13%;\n        font-size: 1.2em;\n    }\n\n    .email {\n        margin-left: 10%;\n        margin-top: 10%;\n        font-size: 1.2em;\n    }\n\n    .birthday {\n        margin-left: 10%;\n        margin-top: 10%;\n        font-size: 1.2em;\n    }\n\n    .cpf {\n        margin-left: 10%;\n        margin-top: 10%;\n        font-size: 1.2em;\n    }\n\n    .country {\n        margin-left: 10%;\n        margin-top: 10%;\n        font-size: 1.2em;\n    }\n\n    span {\n        font-weight: bold;\n    }\n\n    .changePassword {\n        background-color: #93B413;\n        border: none;\n        font-size: 1.5em;\n        margin-top: 12%;\n        margin-left: 15%;\n        border-radius: 19px;\n        width: 220px;\n        height: 40px;\n    }\n\n    .changePassword:active {\n        background-color: #86a40f;\n        border: none;\n        font-size: 1.5em;\n        margin-top: 12%;\n        margin-left: 15%;\n        border-radius: 19px;\n        width: 220px;\n        height: 40px;\n    }\n\n    .deleteAccount {\n        background-color: red;\n        border: none;\n        font-size: 1.5em;\n        margin-top: 4%;\n        margin-left: 15%;\n        border-radius: 19px;\n        width: 220px;\n        height: 40px;\n    }\n\n    .deleteAccount:active {\n        background-color: #cf0000;\n        border: none;\n        font-size: 1.5em;\n        margin-top: 4%;\n        margin-left: 15%;\n        border-radius: 19px;\n        width: 220px;\n        height: 40px;\n    }\n\n\n    // Tablet\n    @media(min-width: 768px) {\n\n        height: 90vh;\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: block;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n\n        .fox {\n            margin-top: 10%;\n            margin-left: 35%;\n            width: 200px;\n        }\n\n        h1 {\n            font-size: 4em;\n            margin-left: 42%;\n        }\n        p {\n            text-align: center;\n        }\n\n        span {\n            color: #F47216;\n        }\n    }\n\n\n    // Small Screens\n    @media(min-width: 992px) {\n\n        height: 90vh;\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: block;\n            justify-content: space-between;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n\n        .fox {\n            margin-top: 10%;\n            margin-left: 40%;\n            width: 200px;\n        }\n\n        h1 {\n            font-size: 4em;\n            margin-left: 45%;\n        }\n\n        p {\n            text-align: center;\n            font-size: 1.2em;\n        }\n\n        span {\n            color: #F47216;\n        }\n    }\n\n    // Medium Screens\n    @media(min-width: 1200px) {\n\n        height: 90vh;\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: block;\n            justify-content: space-between;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n\n        .fox {\n            margin-top: 5%;\n            margin-left: 42%;\n            width: 250px;\n        }\n\n        h1 {\n            font-size: 5em;\n            margin-left: 47%;\n        }\n\n        p {\n            text-align: center;\n            font-size: 1.7em;\n            margin-left: 2%;\n        }\n\n        span {\n            color: #F47216;\n        }\n    }\n\n\n    // Large Screens\n    @media(min-width: 1600px) {\n\n        height: 90vh;\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: block;\n            justify-content: space-between;\n        }\n\n        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n\n        .fox {\n            margin-top: 5%;\n            margin-left: 41%;\n            width: 250px;\n        }\n\n        h1 {\n            font-size: 5em;\n            margin-left: 45%;\n        }\n\n        p {\n            text-align: center;\n            font-size: 1.9em;\n            margin-left: 2%;\n        }\n\n        span {\n            color: #F47216;\n        }\n    }\n\n"])));
var SettingsPg = function () {
    return (React.createElement(SettingsComponents, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("form", null,
                React.createElement("label", null,
                    React.createElement("span", { className: 'photo' },
                        React.createElement(image_1["default"], { className: 'photo', src: "/images/profile-photo2.png", width: 100, height: 104, alt: "profile-photo" }),
                        React.createElement("input", { type: "file", id: 'photo-input' }))),
                React.createElement("p", { className: 'name' },
                    React.createElement("span", null, "Nome:"),
                    " Seu Nome"),
                React.createElement("p", { className: 'email' },
                    React.createElement("span", null, "E-mail:"),
                    React.createElement("br", null),
                    " seuemail@gmail.com"),
                React.createElement("p", { className: 'birthday' },
                    React.createElement("span", null, "Nascimento:"),
                    " 21/08/2023"),
                React.createElement("p", { className: 'cpf' },
                    React.createElement("span", null, "CPF:"),
                    " 000.000.000-00"),
                React.createElement("p", { className: 'country' },
                    React.createElement("span", null, "Pa\u00EDs:"),
                    " Brasil"),
                React.createElement("button", { type: 'button', className: 'changePassword' }, "Alterar Senha"),
                React.createElement("button", { type: 'button', className: 'deleteAccount' }, "Excluir Conta"))),
        React.createElement("nav", { className: 'tablet' },
            React.createElement("img", { src: "/images/Stella.png", alt: "fox", className: 'fox' }),
            React.createElement("h1", null, "404"),
            React.createElement("p", null,
                "Ops... Parece que ocorreu um pequeno erro!",
                React.createElement("br", null),
                " Por favor, ",
                React.createElement(link_1["default"], { href: '/ProfilePage' },
                    React.createElement("span", null, "clique aqui")),
                " para voltar para a tela de configura\u00E7\u00F5es.")),
        React.createElement("nav", { className: 'desktop1' },
            React.createElement("img", { src: "/images/Stella.png", alt: "fox", className: 'fox' }),
            React.createElement("h1", null, "404"),
            React.createElement("p", null,
                "Ops... Parece que ocorreu um pequeno erro!",
                React.createElement("br", null),
                " Por favor, ",
                React.createElement(link_1["default"], { href: '/ProfilePage' },
                    React.createElement("span", null, "clique aqui")),
                " para voltar para a tela de configura\u00E7\u00F5es.")),
        React.createElement("nav", { className: 'desktop2' },
            React.createElement("img", { src: "/images/Stella.png", alt: "fox", className: 'fox' }),
            React.createElement("h1", null, "404"),
            React.createElement("p", null,
                "Ops... Parece que ocorreu um pequeno erro!",
                React.createElement("br", null),
                " Por favor, ",
                React.createElement(link_1["default"], { href: '/ProfilePage' },
                    React.createElement("span", null, "clique aqui")),
                " para voltar para a tela de configura\u00E7\u00F5es.")),
        React.createElement("nav", { className: 'desktop3' },
            React.createElement("img", { src: "/images/Stella.png", alt: "fox", className: 'fox' }),
            React.createElement("h1", null, "404"),
            React.createElement("p", null,
                "Ops... Parece que ocorreu um pequeno erro!",
                React.createElement("br", null),
                " Por favor, ",
                React.createElement(link_1["default"], { href: '/ProfilePage' },
                    React.createElement("span", null, "clique aqui")),
                " para voltar para a tela de configura\u00E7\u00F5es."))));
};
exports["default"] = SettingsPg;
var templateObject_1;
