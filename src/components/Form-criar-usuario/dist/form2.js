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
var FormComponent2 = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    height: 120vh;\n\n    background: linear-gradient(180deg, #0A53B5 0%, #028fcc 100%);\n\n    * {\n        color: white;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n            display: none;\n    }\n\n    h1 {\n        font-size: 1.3em;\n        position: absolute;\n        top: 220px;\n        left: 110px;\n    }\n\n    .fox {\n        position: absolute;\n        top: 150px;\n    }\n\n    .name {\n        position: absolute;\n        top: 270px;\n        left: 35px;\n    }\n\n    .email {\n        position: absolute;\n        top: 330px;\n        left: 35px;\n    }\n\n    .phone {\n        position: absolute;\n        top: 390px;\n        left: 35px;\n    }\n\n    .cpf {\n        position: absolute;\n        top: 450px;\n        left: 35px;\n    }\n\n    .senha {\n        position: absolute;\n        top: 510px;\n        left: 35px;\n    }\n\n    .confirmar-senha{\n        position: absolute;\n        top: 570px;\n        left: 35px;\n    }\n\n    p {\n        position: absolute;\n        top: 660px;\n        left: 150px;\n    }\n\n    .google-enter {\n        position: absolute;\n        top: 710px;\n        left: 35px;\n    }\n\n    .btn-google {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n    .btn-google:focus {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n        background-color: #86a40f;\n    }\n\n    .page2 {\n        position: absolute;\n        top: 790px;\n        left: 35px;\n    }\n\n    .faGoogle {\n        width: 40px;\n        height: 25px;\n        margin-bottom: -5px;\n    }\n\n    span {\n        color: #F47216;\n    }\n\n    .button-create {\n        position: absolute;\n        top: 850px;\n        left: 75px;\n    }\n\n    .criar {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    @media(min-width: 768px){\n\n        height: 118vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-login.svg\");\n        background-repeat: no-repeat;\n\n        form {\n        position: relative;\n        left: 190px;\n        top: 30px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n        width: 400px;\n        height: 710px;\n        border-color: white;\n       }\n\n       h1 {\n        font-size: 1.5em;\n        position: absolute;\n        top: 55px;\n        left: 115px;\n       }\n\n       .name {\n        font-size: 1.3em;\n        position: absolute;\n        top: 105px;\n        left: -40px;\n       }\n\n       .email {\n        font-size: 1.3em;\n        position: absolute;\n        top: 165px;\n        left: -40px;\n       }\n\n       .phone {\n        font-size: 1.3em;\n        position: absolute;\n        top: 215px;\n        left: -40px;\n       }\n\n       .cpf {\n        font-size: 1.3em;\n        position: absolute;\n        top: 275px;\n        left: -40px;\n       }\n\n       .senha {\n        font-size: 1.3em;\n        position: absolute;\n        top: 335px;\n        left: -40px;\n       }\n\n       .confirmar-senha {\n        font-size: 1.3em;\n        position: absolute;\n        top: 395px;\n        left: -40px;\n       }\n\n       p {\n        position: absolute;\n        top: 490px;\n        left: 185px;\n       }\n\n       .google-enter {\n        position: absolute;\n        top: 540px;\n        left: 75px;\n       }\n\n       .btn-google {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n       .btn-google:focus {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n       }\n\n       .page2 {\n        position: absolute;\n        top: 600px;\n        left: 65px;\n       }\n\n       .criar {\n        position: absolute;\n        top: -205px;\n        left: 40px;\n       }\n\n       .criar:focus {\n        position: absolute;\n        top: -205px;\n        left: 40px;\n        background-color: #86a40f;\n       }\n\n       .fox {\n        position: absolute;\n        top: 500px;\n        left: 590px;\n       }\n    }\n\n    @media(min-width: 992px) {\n\n        height: 138vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        background-image: url(\"/images/992px-login.svg\");\n\n        form {\n        position: relative;\n        left: 260px;\n        top: 30px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n        width: 500px;\n        height: 830px;\n        border-color: white;\n       }\n\n        h1 {\n            position: absolute;\n            top: 65px;\n            left: 135px;\n            font-size: 2em;\n        }\n\n        .name {\n            position: absolute;\n            top: 140px;\n            left: -50px;\n        }\n\n        .email {\n            position: absolute;\n            top: 205px;\n            left: -50px;\n        }\n\n        .phone {\n            position: absolute;\n            top: 270px;\n            left: -50px;\n        }\n\n        .cpf {\n            position: absolute;\n            top: 335px;\n            left: -50px;\n        }\n\n        .senha {\n            position: absolute;\n            top: 400px;\n            left: -50px;\n        }\n\n        .confirmar-senha {\n            position: absolute;\n            top: 465px;\n            left: -50px;\n        }\n\n        p {\n            font-size: 1.3em;\n            position: absolute;\n            top: 560px;\n            left: 230px;\n        }\n    }\n\n"], ["\n\n    height: 120vh;\n\n    background: linear-gradient(180deg, #0A53B5 0%, #028fcc 100%);\n\n    * {\n        color: white;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n            display: none;\n    }\n\n    h1 {\n        font-size: 1.3em;\n        position: absolute;\n        top: 220px;\n        left: 110px;\n    }\n\n    .fox {\n        position: absolute;\n        top: 150px;\n    }\n\n    .name {\n        position: absolute;\n        top: 270px;\n        left: 35px;\n    }\n\n    .email {\n        position: absolute;\n        top: 330px;\n        left: 35px;\n    }\n\n    .phone {\n        position: absolute;\n        top: 390px;\n        left: 35px;\n    }\n\n    .cpf {\n        position: absolute;\n        top: 450px;\n        left: 35px;\n    }\n\n    .senha {\n        position: absolute;\n        top: 510px;\n        left: 35px;\n    }\n\n    .confirmar-senha{\n        position: absolute;\n        top: 570px;\n        left: 35px;\n    }\n\n    p {\n        position: absolute;\n        top: 660px;\n        left: 150px;\n    }\n\n    .google-enter {\n        position: absolute;\n        top: 710px;\n        left: 35px;\n    }\n\n    .btn-google {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n    .btn-google:focus {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n        background-color: #86a40f;\n    }\n\n    .page2 {\n        position: absolute;\n        top: 790px;\n        left: 35px;\n    }\n\n    .faGoogle {\n        width: 40px;\n        height: 25px;\n        margin-bottom: -5px;\n    }\n\n    span {\n        color: #F47216;\n    }\n\n    .button-create {\n        position: absolute;\n        top: 850px;\n        left: 75px;\n    }\n\n    .criar {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    @media(min-width: 768px){\n\n        height: 118vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-login.svg\");\n        background-repeat: no-repeat;\n\n        form {\n        position: relative;\n        left: 190px;\n        top: 30px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n        width: 400px;\n        height: 710px;\n        border-color: white;\n       }\n\n       h1 {\n        font-size: 1.5em;\n        position: absolute;\n        top: 55px;\n        left: 115px;\n       }\n\n       .name {\n        font-size: 1.3em;\n        position: absolute;\n        top: 105px;\n        left: -40px;\n       }\n\n       .email {\n        font-size: 1.3em;\n        position: absolute;\n        top: 165px;\n        left: -40px;\n       }\n\n       .phone {\n        font-size: 1.3em;\n        position: absolute;\n        top: 215px;\n        left: -40px;\n       }\n\n       .cpf {\n        font-size: 1.3em;\n        position: absolute;\n        top: 275px;\n        left: -40px;\n       }\n\n       .senha {\n        font-size: 1.3em;\n        position: absolute;\n        top: 335px;\n        left: -40px;\n       }\n\n       .confirmar-senha {\n        font-size: 1.3em;\n        position: absolute;\n        top: 395px;\n        left: -40px;\n       }\n\n       p {\n        position: absolute;\n        top: 490px;\n        left: 185px;\n       }\n\n       .google-enter {\n        position: absolute;\n        top: 540px;\n        left: 75px;\n       }\n\n       .btn-google {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n       .btn-google:focus {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n       }\n\n       .page2 {\n        position: absolute;\n        top: 600px;\n        left: 65px;\n       }\n\n       .criar {\n        position: absolute;\n        top: -205px;\n        left: 40px;\n       }\n\n       .criar:focus {\n        position: absolute;\n        top: -205px;\n        left: 40px;\n        background-color: #86a40f;\n       }\n\n       .fox {\n        position: absolute;\n        top: 500px;\n        left: 590px;\n       }\n    }\n\n    @media(min-width: 992px) {\n\n        height: 138vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        background-image: url(\"/images/992px-login.svg\");\n\n        form {\n        position: relative;\n        left: 260px;\n        top: 30px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n        width: 500px;\n        height: 830px;\n        border-color: white;\n       }\n\n        h1 {\n            position: absolute;\n            top: 65px;\n            left: 135px;\n            font-size: 2em;\n        }\n\n        .name {\n            position: absolute;\n            top: 140px;\n            left: -50px;\n        }\n\n        .email {\n            position: absolute;\n            top: 205px;\n            left: -50px;\n        }\n\n        .phone {\n            position: absolute;\n            top: 270px;\n            left: -50px;\n        }\n\n        .cpf {\n            position: absolute;\n            top: 335px;\n            left: -50px;\n        }\n\n        .senha {\n            position: absolute;\n            top: 400px;\n            left: -50px;\n        }\n\n        .confirmar-senha {\n            position: absolute;\n            top: 465px;\n            left: -50px;\n        }\n\n        p {\n            font-size: 1.3em;\n            position: absolute;\n            top: 560px;\n            left: 230px;\n        }\n    }\n\n"])));
var Senha = function () {
};
var Form2 = function () {
    return (React.createElement(FormComponent2, null,
        React.createElement("nav", { className: 'mobile' },
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
                React.createElement("div", { className: 'google-enter' },
                    React.createElement("button", { className: 'btn-google', type: 'button' },
                        React.createElement(fa_1.FaGoogle, { className: 'faGoogle' }),
                        " Entrar com Google")),
                React.createElement("div", { className: 'page2' },
                    React.createElement(link_1["default"], { href: '/page2' },
                        "J\u00E1 tem uma conta? ",
                        React.createElement("span", null, "Clique Aqui!"))),
                React.createElement("div", { className: 'button-create' },
                    React.createElement("button", { className: 'criar', type: 'button', onClick: Senha }, "Criar")))),
        React.createElement("nav", { className: 'tablet' },
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
                React.createElement("div", { className: 'page2' },
                    React.createElement(link_1["default"], { href: '/page2' },
                        "J\u00E1 tem uma conta? ",
                        React.createElement("span", null, "Clique Aqui!"))),
                React.createElement("div", { className: 'button-create' },
                    React.createElement("button", { className: 'criar', type: 'button', onClick: Senha }, "Criar"))),
            React.createElement("img", { src: "/images/Stella2.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'desktop1' },
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
                React.createElement("p", null, "OU")))));
};
exports["default"] = Form2;
var templateObject_1;
