'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var FormComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n.box-container {\n       \n        form {\n            .title {\n                \n            }\n            .login {\n               \n                input {\n                    \n                }\n\n                input::placeholder{\n                    \n                }\n                input:focus{\n                    \n\n                }\n            }\n           div {\n               \n                .submit {\n                    \n                }\n            }\n\n            .forget {\n                \n            } \n            .create_account {\n                \n                span {\n                    \n                }\n            } \n        }\n    }\n"], ["\n\n.box-container {\n       \n        form {\n            .title {\n                \n            }\n            .login {\n               \n                input {\n                    \n                }\n\n                input::placeholder{\n                    \n                }\n                input:focus{\n                    \n\n                }\n            }\n           div {\n               \n                .submit {\n                    \n                }\n            }\n\n            .forget {\n                \n            } \n            .create_account {\n                \n                span {\n                    \n                }\n            } \n        }\n    }\n"])));
var Form = function () {
    return (React.createElement(FormComponent, null,
        React.createElement("nav", { className: 'hide-on-mobile' },
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
                        React.createElement("button", { className: 'submit' }, "Entrar"))))),
        React.createElement("nav", { className: 'show-on-mobile' },
            React.createElement("div", { className: 'box-container-mobile' },
                React.createElement("form", null,
                    React.createElement("h1", { id: 'title-mobile' }, "Login"),
                    React.createElement("div", { className: 'login-mobile' },
                        React.createElement("input", { type: "email", name: "e-mail", id: "e-mail", placeholder: 'E-mail' })),
                    React.createElement("div", { className: 'login-mobile' },
                        React.createElement("input", { type: "password", name: "password", id: "password", placeholder: 'Senha' })),
                    React.createElement("div", { className: 'forget-mobile' },
                        React.createElement("h4", null,
                            React.createElement("span", { className: 'orange' }, "Esqueceu a senha?"))),
                    React.createElement("div", { className: 'create_account-mobile' },
                        React.createElement("h4", null,
                            "N\u00E3o tem uma conta? ",
                            React.createElement("span", { className: 'orange' }, "Crie uma"))),
                    React.createElement("div", { className: 'enter-mobile' },
                        React.createElement("button", { className: 'submit-mobile' }, "Entrar"))))),
        React.createElement("nav", { className: 'show-on-tablet' },
            React.createElement("div", { className: 'box-container-tablet' },
                React.createElement("form", null,
                    React.createElement("h1", { id: 'title-tablet' }, "Login"),
                    React.createElement("div", { className: 'login-tablet' },
                        React.createElement("input", { type: "email", name: "e-mail", id: "e-mail", placeholder: 'E-mail' })),
                    React.createElement("div", { className: 'login-tablet' },
                        React.createElement("input", { type: "password", name: "password", id: "password", placeholder: 'Senha' })),
                    React.createElement("div", { className: 'forget-tablet' },
                        React.createElement("h4", null,
                            React.createElement("span", { className: 'orange' }, "Esqueceu a senha?"))),
                    React.createElement("div", { className: 'create_account-tablet' },
                        React.createElement("h4", null,
                            "N\u00E3o tem uma conta? ",
                            React.createElement("span", { className: 'orange' }, "Crie uma"))),
                    React.createElement("div", { className: 'enter-tablet' },
                        React.createElement("button", { className: 'submit-tablet' }, "Entrar")))))));
};
exports["default"] = Form;
var templateObject_1;
