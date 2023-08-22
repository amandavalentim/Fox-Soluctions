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
var RecoveryEmailComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 70vh;\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n    .mobile{\n        h3{\n            padding: 40px;\n            text-align: center;\n            color: #ffffff;\n            font-family:'Poppins-Bold';\n        }\n        #PhoneOrCPF{\n            margin: 50px;\n            padding: 4px;\n        }\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n            }\n        }\n    }\n"], ["\n    height: 70vh;\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n    .mobile{\n        h3{\n            padding: 40px;\n            text-align: center;\n            color: #ffffff;\n            font-family:'Poppins-Bold';\n        }\n        #PhoneOrCPF{\n            margin: 50px;\n            padding: 4px;\n        }\n        .btn-confirm{\n            text-align: center;\n            .confirm{\n                width: 170px;\n                height: 50px;\n                border-radius: 20px;\n                border: none;\n                background: #93B413;\n                font-size: 1.6em;\n                color: #ffffff;\n                margin: 40px;\n            }\n        }\n    }\n"])));
var RecoveryEmail = function () {
    return (React.createElement(RecoveryEmailComponent, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("h3", null, "Recupere Seu Email:"),
            React.createElement(Input_1["default"], { type: "string", name: "PhoneOrCPF", id: "PhoneOrCPF", placeholder: 'Digite Seu Telefone ou CPF' }),
            React.createElement("div", { className: 'btn-confirm' },
                React.createElement("button", { className: 'confirm', type: 'button' }, "Enviar"))),
        React.createElement("nav", { className: 'desktop' })));
};
exports["default"] = RecoveryEmail;
var templateObject_1;
