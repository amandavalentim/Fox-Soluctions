'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var Input_1 = require("./Input/Input");
var FormComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    * {\n        box-sizing: border-box;\n        \n        \n    }\n\n    .title {\n        \n        position: absolute;\n        left: 120px;\n        top: 200px;\n        font-family: 'poppins-bold';\n        font-size: 30px;\n        font-style: normal;\n        \n    }    \n\n    .box-container {\n        position: absolute;\n        top: 290px;\n        left: 15px;\n        color: #000;\n        form {\n            .forget {\n                padding-top: 0px 0px 0px 10px;\n                text-align: center;\n                font-size: 15px;\n                color: #F47216;\n            }\n            .create_account {\n                padding-top: 15px;\n                text-align: center;\n                span {\n                    color: #F47216;\n                }\n            }\n            .enter {\n                \n                border-style: none;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                width: 100%;\n                padding-top: 50px;\n                .submit {\n                    border: none;\n                    background-color: #93B413;\n                    color: #FFFF;\n                    border-radius: 20px;\n                    width: 150px;\n                    height: 40px;\n                    font-family: 'poppins-medium';\n                    font-size: 20px;\n                }\n            }\n        }\n    }\n\n    @media (min-width: 768px) {\n        .hide-on-desktop {\n            display: none;\n        }\n    }\n\n    @media (min-width: 992px) {\n        \n    }\n\n    @media (min-width:1200px) {\n\n    }\n\n    @media (min-width: 1600px) {\n        \n    }\n"], ["\n\n    * {\n        box-sizing: border-box;\n        \n        \n    }\n\n    .title {\n        \n        position: absolute;\n        left: 120px;\n        top: 200px;\n        font-family: 'poppins-bold';\n        font-size: 30px;\n        font-style: normal;\n        \n    }    \n\n    .box-container {\n        position: absolute;\n        top: 290px;\n        left: 15px;\n        color: #000;\n        form {\n            .forget {\n                padding-top: 0px 0px 0px 10px;\n                text-align: center;\n                font-size: 15px;\n                color: #F47216;\n            }\n            .create_account {\n                padding-top: 15px;\n                text-align: center;\n                span {\n                    color: #F47216;\n                }\n            }\n            .enter {\n                \n                border-style: none;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                width: 100%;\n                padding-top: 50px;\n                .submit {\n                    border: none;\n                    background-color: #93B413;\n                    color: #FFFF;\n                    border-radius: 20px;\n                    width: 150px;\n                    height: 40px;\n                    font-family: 'poppins-medium';\n                    font-size: 20px;\n                }\n            }\n        }\n    }\n\n    @media (min-width: 768px) {\n        .hide-on-desktop {\n            display: none;\n        }\n    }\n\n    @media (min-width: 992px) {\n        \n    }\n\n    @media (min-width:1200px) {\n\n    }\n\n    @media (min-width: 1600px) {\n        \n    }\n"])));
var Form = function () {
    return (React.createElement(FormComponent, null,
        React.createElement("nav", { className: 'hide-on-desktop' },
            React.createElement("h1", { className: 'title' }, "Login"),
            React.createElement("div", { className: 'box-container' },
                React.createElement("form", null,
                    React.createElement("div", { className: 'login' },
                        React.createElement(Input_1["default"], { type: "email", name: "e-mail", id: "e-mail", placeholder: 'E-mail' })),
                    React.createElement("div", { className: 'login' },
                        React.createElement(Input_1["default"], { type: "password", name: "password", id: "password", placeholder: 'Senha' })),
                    React.createElement("div", { className: 'forget' },
                        React.createElement("h4", null,
                            React.createElement("span", { className: 'orange' }, "Esqueceu a senha?"))),
                    React.createElement("div", { className: 'create_account' },
                        React.createElement("h4", null,
                            "N\u00E3o tem uma conta? ",
                            React.createElement("span", { className: 'orange' }, "Crie uma"))),
                    React.createElement("div", { className: 'enter' },
                        React.createElement("button", { className: 'submit' }, "Entrar")))))));
};
exports["default"] = Form;
var templateObject_1;
