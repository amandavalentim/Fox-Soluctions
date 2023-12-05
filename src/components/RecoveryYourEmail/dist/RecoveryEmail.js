//Developed for Amanda Valentim and Gabriel Marques
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var Input_1 = require("../Login/Input/Input");
var link_1 = require("next/link");
var RecoveryEmailComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    .mobile {\n        display: grid;\n        justify-content: space-between;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .tablet-desktops {\n        display: none;\n    }\n    \n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    height: 50vh;\n\n    .container-center{\n\n        .fox{\n            margin-left: -12.5%;\n            width: 100px;\n        }\n\n        h3{\n            text-align: center;\n            color: #ffffff;\n            font-family:'Poppins-Bold';\n            padding: 0;\n            margin-top: -8%;\n            font-size: 1.3em;\n            /* margin-top: -45%;\n            margin-left: 15%; */\n            /* width: 250px; */\n        }\n        .input-email{\n            text-align: center;\n            margin-top: 8%;\n            font-size: 1.3em;\n        }\n        #phoneOrCPF::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.3em;\n        }\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin-top: 5%;\n                /* margin: 40px; */\n                /* margin-top: 5%; */\n                /* margin-left: 28%; */\n            }\n            .confirm:active{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #86a40f;\n                font-size: 1.6em;\n                color: #ffffff;\n                /* margin: 40px; */\n                /* margin-top: 5%; */\n                /* margin-left: 28%; */\n            }\n        }\n    }\n\n    //tablet\n    @media(min-width: 450px){\n\n        height: 70vh;\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet-desktops {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        form{\n            width: 300px;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            margin-top: 5.5%;\n            margin-left: 29%;\n        }\n\n        .input-email{\n            margin-top: 5%;\n            margin-left: -28%;\n        }\n\n        #PhoneOrCPF{\n            width: 200px;\n        }\n\n        h3 {\n            padding-top: 10%;\n            margin-left: 14.5%;\n        }\n\n        .input-email {\n            margin-left: -14.5%;\n            margin-top: 3.5%;\n        }\n\n        #phoneOrCPF {\n            width: 220px;\n        }\n\n        .btn-confirm {\n            text-align: center;\n        }\n\n        .confirm{\n            width: 130px;\n            height: 40px;\n            border-radius: 15px;\n            border: none;\n            background: #93B413;\n            font-size: 1.5em;\n            color: #ffffff;\n            margin: 40px;\n            margin-top: 5%;\n            margin-left: 15%;\n        }\n\n        .confirm:active{\n            width: 130px;\n            height: 40px;\n            border-radius: 15px;\n            border: none;\n                background-color: #86a40f;\n            font-size: 1.5em;\n            color: #ffffff;\n            margin: 40px;\n            margin-top: 5%;\n            margin-left: 15%;\n        }\n        \n        background-image: url(\"/images/tablet-recuperar-email.svg\");\n        background-repeat: no-repeat;\n\n        .fox2 {\n            width: 70px;\n            height: 70px;\n            position: absolute;\n            left: 345px;\n            top: 460px;\n        }\n\n    }\n\n    //Small Screens\n\n    @media(min-width: 992px) {\n        background-image: url(\"/images/992px-recuperar-senha.svg\");\n        height: 65vh;\n\n        form {\n            margin-left: 34.2%;\n            height: 250px;\n        }\n\n        h3 {\n            margin-left: 13.5%;\n        }\n\n        .input-email {\n            margin-left: -19%;\n            margin-top: 3%;\n        }\n\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 2.5%;\n            }\n            .confirm:hover{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #9fc214;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 2.5%;\n            }\n            .confirm:active{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #86a40f;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 2.5%;\n            }\n        }\n\n        .fox2 {\n            margin-top: 1%;\n            margin-left: 12.5%;\n        }\n    }\n\n    //Medium Screen \n    @media(min-width: 1200px) {\n        background-image: url(\"/images/1200px-recuperar-senha.svg\");\n\n        form {\n            margin-left: 37%;\n            height: 230px;\n        }\n\n        h3 {\n            margin-left: 13.5%;\n        }\n\n        .input-email {\n            margin-left: -28%;\n            margin-top: 5%;\n        }\n\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: -10%;\n            }\n            .confirm:hover{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #9fc214;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: -10%;\n            }\n            .confirm:active{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #86a40f;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: -10%;\n            }\n        }\n\n        .fox2 {\n            margin-top: 1.1%;\n            margin-left: 20.5%;\n        }\n    }\n\n\n    // 1476-708\n    @media(min-width: 1400px) {\n        height: 72vh;\n\n        background-image: url(\"/images/1400px-recuperar-senha.svg\");\n\n        .form {\n            margin-left: 38.8%;\n            margin-top: 7%;\n        }\n\n        h3 {\n            font-size: 1.3em;\n            margin-left: 10%;\n        }\n\n        .input-email {\n            margin-left: -28%;\n        }\n\n        #phoneOrCPF::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1em;\n        }\n\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 140px;\n                height: 50px;\n                border-radius: 15px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin-top: -5%;\n                cursor: pointer;\n            }\n\n            .confirm:hover{\n                width: 140px;\n                height: 50px;\n                border-radius: 15px;\n                border: none;\n                background-color: #9fc214;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin-top: -5%;\n                cursor: pointer;\n            }\n\n            .confirm:active{\n                width: 140px;\n                height: 50px;\n                border-radius: 15px;\n                border: none;\n                background-color: #86a40f;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin-top: -5%;\n                cursor: pointer;\n            }\n        }\n\n        .fox2 {\n            margin-left: 23%;\n            margin-top: 3%;\n            width: 90px;\n            height: 90px;\n        }\n    }\n \n    //Large Screen \n    @media(min-width: 1600px) {\n        background-image: url(\"/images/1600px-recuperar-email.svg\");\n        height: 69vh;\n\n        form {\n            margin-left: 31.5%;\n        }\n\n        .input-email {\n            margin-top: -2.5%;\n            margin-left: -39.5%;\n        }\n\n        .btn-confirm{\n            text-align: center;\n            margin-top: -23%;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 5%;\n            }\n\n            .confirm:hover{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #9fc214;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 5%;\n            }\n\n            .confirm:active{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #86a40f;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 5%;\n            }\n        }\n\n        .fox2 {\n            margin-left: 24%;\n        }\n    }\n"], ["\n\n    .mobile {\n        display: grid;\n        justify-content: space-between;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .tablet-desktops {\n        display: none;\n    }\n    \n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    height: 50vh;\n\n    .container-center{\n\n        .fox{\n            margin-left: -12.5%;\n            width: 100px;\n        }\n\n        h3{\n            text-align: center;\n            color: #ffffff;\n            font-family:'Poppins-Bold';\n            padding: 0;\n            margin-top: -8%;\n            font-size: 1.3em;\n            /* margin-top: -45%;\n            margin-left: 15%; */\n            /* width: 250px; */\n        }\n        .input-email{\n            text-align: center;\n            margin-top: 8%;\n            font-size: 1.3em;\n        }\n        #phoneOrCPF::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.3em;\n        }\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin-top: 5%;\n                /* margin: 40px; */\n                /* margin-top: 5%; */\n                /* margin-left: 28%; */\n            }\n            .confirm:active{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #86a40f;\n                font-size: 1.6em;\n                color: #ffffff;\n                /* margin: 40px; */\n                /* margin-top: 5%; */\n                /* margin-left: 28%; */\n            }\n        }\n    }\n\n    //tablet\n    @media(min-width: 450px){\n\n        height: 70vh;\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet-desktops {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        form{\n            width: 300px;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            margin-top: 5.5%;\n            margin-left: 29%;\n        }\n\n        .input-email{\n            margin-top: 5%;\n            margin-left: -28%;\n        }\n\n        #PhoneOrCPF{\n            width: 200px;\n        }\n\n        h3 {\n            padding-top: 10%;\n            margin-left: 14.5%;\n        }\n\n        .input-email {\n            margin-left: -14.5%;\n            margin-top: 3.5%;\n        }\n\n        #phoneOrCPF {\n            width: 220px;\n        }\n\n        .btn-confirm {\n            text-align: center;\n        }\n\n        .confirm{\n            width: 130px;\n            height: 40px;\n            border-radius: 15px;\n            border: none;\n            background: #93B413;\n            font-size: 1.5em;\n            color: #ffffff;\n            margin: 40px;\n            margin-top: 5%;\n            margin-left: 15%;\n        }\n\n        .confirm:active{\n            width: 130px;\n            height: 40px;\n            border-radius: 15px;\n            border: none;\n                background-color: #86a40f;\n            font-size: 1.5em;\n            color: #ffffff;\n            margin: 40px;\n            margin-top: 5%;\n            margin-left: 15%;\n        }\n        \n        background-image: url(\"/images/tablet-recuperar-email.svg\");\n        background-repeat: no-repeat;\n\n        .fox2 {\n            width: 70px;\n            height: 70px;\n            position: absolute;\n            left: 345px;\n            top: 460px;\n        }\n\n    }\n\n    //Small Screens\n\n    @media(min-width: 992px) {\n        background-image: url(\"/images/992px-recuperar-senha.svg\");\n        height: 65vh;\n\n        form {\n            margin-left: 34.2%;\n            height: 250px;\n        }\n\n        h3 {\n            margin-left: 13.5%;\n        }\n\n        .input-email {\n            margin-left: -19%;\n            margin-top: 3%;\n        }\n\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 2.5%;\n            }\n            .confirm:hover{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #9fc214;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 2.5%;\n            }\n            .confirm:active{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #86a40f;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 2.5%;\n            }\n        }\n\n        .fox2 {\n            margin-top: 1%;\n            margin-left: 12.5%;\n        }\n    }\n\n    //Medium Screen \n    @media(min-width: 1200px) {\n        background-image: url(\"/images/1200px-recuperar-senha.svg\");\n\n        form {\n            margin-left: 37%;\n            height: 230px;\n        }\n\n        h3 {\n            margin-left: 13.5%;\n        }\n\n        .input-email {\n            margin-left: -28%;\n            margin-top: 5%;\n        }\n\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: -10%;\n            }\n            .confirm:hover{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #9fc214;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: -10%;\n            }\n            .confirm:active{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #86a40f;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: -10%;\n            }\n        }\n\n        .fox2 {\n            margin-top: 1.1%;\n            margin-left: 20.5%;\n        }\n    }\n\n\n    // 1476-708\n    @media(min-width: 1400px) {\n        height: 72vh;\n\n        background-image: url(\"/images/1400px-recuperar-senha.svg\");\n\n        .form {\n            margin-left: 38.8%;\n            margin-top: 7%;\n        }\n\n        h3 {\n            font-size: 1.3em;\n            margin-left: 10%;\n        }\n\n        .input-email {\n            margin-left: -28%;\n        }\n\n        #phoneOrCPF::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1em;\n        }\n\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 140px;\n                height: 50px;\n                border-radius: 15px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin-top: -5%;\n                cursor: pointer;\n            }\n\n            .confirm:hover{\n                width: 140px;\n                height: 50px;\n                border-radius: 15px;\n                border: none;\n                background-color: #9fc214;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin-top: -5%;\n                cursor: pointer;\n            }\n\n            .confirm:active{\n                width: 140px;\n                height: 50px;\n                border-radius: 15px;\n                border: none;\n                background-color: #86a40f;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin-top: -5%;\n                cursor: pointer;\n            }\n        }\n\n        .fox2 {\n            margin-left: 23%;\n            margin-top: 3%;\n            width: 90px;\n            height: 90px;\n        }\n    }\n \n    //Large Screen \n    @media(min-width: 1600px) {\n        background-image: url(\"/images/1600px-recuperar-email.svg\");\n        height: 69vh;\n\n        form {\n            margin-left: 31.5%;\n        }\n\n        .input-email {\n            margin-top: -2.5%;\n            margin-left: -39.5%;\n        }\n\n        .btn-confirm{\n            text-align: center;\n            margin-top: -23%;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 5%;\n            }\n\n            .confirm:hover{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #9fc214;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 5%;\n            }\n\n            .confirm:active{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background-color: #86a40f;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n                cursor: pointer;\n                margin-top: 5%;\n            }\n        }\n\n        .fox2 {\n            margin-left: 24%;\n        }\n    }\n"])));
var RecoveryEmail = function () {
    return (React.createElement(RecoveryEmailComponent, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("div", { className: 'container-center' },
                React.createElement("form", null,
                    React.createElement("img", { src: "/images/Stella-3.png", alt: "fox", className: 'fox' }),
                    React.createElement("h3", null, "Recupere Seu E-mail:"),
                    React.createElement("div", { className: 'input-email' },
                        React.createElement(Input_1["default"], { type: "string", name: "PhoneOrCPF", id: "phoneOrCPF", placeholder: 'Digite Seu Telefone ou CPF' })),
                    React.createElement("div", { className: 'btn-confirm' },
                        React.createElement("button", { className: 'confirm', type: 'button' },
                            React.createElement(link_1["default"], { href: '/ViewEmailPage' }, "Enviar")))))),
        React.createElement("nav", { className: 'tablet-desktops' },
            React.createElement("form", { className: 'form' },
                React.createElement("h3", null, "Recupere Seu E-mail:"),
                React.createElement("div", { className: 'input-email' },
                    React.createElement(Input_1["default"], { type: "string", name: "PhoneOrCPF", id: "phoneOrCPF", placeholder: 'Digite Seu Telefone ou CPF' })),
                React.createElement("div", { className: 'btn-confirm' },
                    React.createElement(link_1["default"], { href: '/ViewEmailPage' },
                        React.createElement("button", { className: 'confirm', type: 'button' }, "Enviar")))),
            React.createElement("div", { className: 'fox1' },
                React.createElement("img", { src: "/images/raposa-code-mobile.png", alt: "fox", className: 'fox2' })))));
};
exports["default"] = RecoveryEmail;
var templateObject_1;
