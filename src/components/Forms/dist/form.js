'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var FormComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    @media (min-width: 768px) {\n        \n    }\n\n    @media (min-width: 992px) {\n        \n    }\n\n    @media (min-width:1200px) {\n\n    }\n\n    @media (min-width: 1600px) {\n        \n    }\n"], ["\n\n    @media (min-width: 768px) {\n        \n    }\n\n    @media (min-width: 992px) {\n        \n    }\n\n    @media (min-width:1200px) {\n\n    }\n\n    @media (min-width: 1600px) {\n        \n    }\n"])));
var Form = function () {
    return (React.createElement(FormComponent, null,
        React.createElement("div", { className: 'box-container' },
            React.createElement("form", null,
                React.createElement("h1", { className: 'title' }, "Login"),
                React.createElement("div", { className: 'login' },
                    React.createElement("input", { type: "email", name: "e-mail", id: "e-mail", placeholder: 'E-mail' })),
                React.createElement("div", { className: 'login' },
                    React.createElement("input", { type: "password", name: "password", id: "password", placeholder: 'Senha' })),
                React.createElement("div", { className: 'forget' },
                    React.createElement("h4", null,
                        React.createElement("span", { className: 'orange' }, "Esqueceu a senha?"))),
                React.createElement("div", { className: 'create_account' },
                    React.createElement("h4", null,
                        "N\u00E3o tem uma conta? ",
                        React.createElement("span", { className: 'orange' }, "Crie uma"))),
                React.createElement("div", { className: 'enter' },
                    React.createElement("button", { className: 'submit' }, "Entrar"))))));
};
exports["default"] = Form;
var templateObject_1;
