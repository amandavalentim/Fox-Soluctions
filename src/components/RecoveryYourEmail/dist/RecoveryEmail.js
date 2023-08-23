//Developed for Amanda Valentim
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var Input_1 = require("../Login/Input/Input");
var RecoveryEmailComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    \n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n    .container-center{\n        h3{\n            padding: 40px;\n            text-align: center;\n            color: #ffffff;\n            font-family:'Poppins-Bold';\n        }\n        .input-email{\n            text-align: center;\n        }\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n            }\n        }\n    }\n\n    //tablet\n    @media(min-width: 450px){\n        .container-center{\n           padding: 30px;\n            form{\n                margin-left: 30%;\n                width: 300px;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n                .input-email{\n                    #PhoneOrCPF{\n                        width: 200px;\n                    }\n                }\n            }\n        }\n        background-image: url(\"/images/tablet-recuperar-senha.svg\");\n    }\n\n    //Desktop\n\n    //Large Screen\n"], ["\n    \n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n    .container-center{\n        h3{\n            padding: 40px;\n            text-align: center;\n            color: #ffffff;\n            font-family:'Poppins-Bold';\n        }\n        .input-email{\n            text-align: center;\n        }\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n            }\n        }\n    }\n\n    //tablet\n    @media(min-width: 450px){\n        .container-center{\n           padding: 30px;\n            form{\n                margin-left: 30%;\n                width: 300px;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n                .input-email{\n                    #PhoneOrCPF{\n                        width: 200px;\n                    }\n                }\n            }\n        }\n        background-image: url(\"/images/tablet-recuperar-senha.svg\");\n    }\n\n    //Desktop\n\n    //Large Screen\n"])));
var RecoveryEmail = function () {
    return (React.createElement(RecoveryEmailComponent, null,
        React.createElement("div", { className: 'container-center' },
            React.createElement("form", null,
                React.createElement("h3", null, "Recupere Seu Email:"),
                React.createElement("div", { className: 'input-email' },
                    React.createElement(Input_1["default"], { type: "string", name: "PhoneOrCPF", id: "PhoneOrCPF", placeholder: 'Digite Seu Telefone ou CPF' })),
                React.createElement("div", { className: 'btn-confirm' },
                    React.createElement("button", { className: 'confirm', type: 'button' }, "Enviar"))))));
};
exports["default"] = RecoveryEmail;
var templateObject_1;
