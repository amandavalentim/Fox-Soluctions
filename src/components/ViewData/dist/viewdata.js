//developed by Amanda Valentim
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var Viewdatacomponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: #0A53B5;\n    .form-mobile{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        h1{\n            margin: 30px;\n            color: #ffff;\n            font-family: 'Poppins-Bold';\n        }\n        form{\n            .input-mobile{\n                display: flex;\n                flex-direction: column;\n                min-width: 70vw;\n                margin-bottom: 20px;\n                label{\n                    color: #ffff;\n                    margin-bottom: 20px;\n                    font-family: 'Poppins-Medium';\n                }\n                input{\n                    border: none;\n                    border-bottom: 2px solid #ffff;\n                    background-color: rgba(7, 179, 253, 0);\n                    color: #ffff;\n                    font-family: 'Poppins-Light';\n                    outline: none;\n                    &::placeholder{\n                        font-size: 14px;\n                        color: #ffff;\n                    }\n                    &:focus{\n                        border-bottom: 2px solid #93B413;\n                    }\n                }\n                \n            }\n        }\n        \n    }\n    .documents-mobile{\n        table{\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n            margin: 0 auto;\n            width: 80%;\n            tr{\n            }\n            tr:nth-child(even) {\n                background: #07AFFA;\n            }\n        }\n        \n    }\n    .form-desktop{\n        display: none;\n    }\n\n    @media (min-width: 992px){\n        .form-mobile{\n            display: none;\n        }\n        .form-desktop{\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            h1{\n                margin: 30px;\n                color: #ffff;\n                font-family: 'Poppins-Bold';\n            }\n            .input-desktop{\n                display: flex;\n                flex-direction: column;\n                min-width: 50vw;\n                margin-bottom: 50px;\n                input{\n                    border: none;\n                    border-bottom: 2px solid #ffff;\n                    background-color: rgba(7, 179, 253, 0);\n                    color: #ffff;\n                    font-family: 'Poppins-medium';\n                    outline: none;\n                    &::placeholder{\n                        font-size: 14px;\n                        color: #ffff;\n                    }\n                    &:focus{\n                        border-bottom: 2px solid #93B413;\n                    }\n                }\n            }\n        }\n    }\n    \n"], ["\n    background-color: #0A53B5;\n    .form-mobile{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        h1{\n            margin: 30px;\n            color: #ffff;\n            font-family: 'Poppins-Bold';\n        }\n        form{\n            .input-mobile{\n                display: flex;\n                flex-direction: column;\n                min-width: 70vw;\n                margin-bottom: 20px;\n                label{\n                    color: #ffff;\n                    margin-bottom: 20px;\n                    font-family: 'Poppins-Medium';\n                }\n                input{\n                    border: none;\n                    border-bottom: 2px solid #ffff;\n                    background-color: rgba(7, 179, 253, 0);\n                    color: #ffff;\n                    font-family: 'Poppins-Light';\n                    outline: none;\n                    &::placeholder{\n                        font-size: 14px;\n                        color: #ffff;\n                    }\n                    &:focus{\n                        border-bottom: 2px solid #93B413;\n                    }\n                }\n                \n            }\n        }\n        \n    }\n    .documents-mobile{\n        table{\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n            margin: 0 auto;\n            width: 80%;\n            tr{\n            }\n            tr:nth-child(even) {\n                background: #07AFFA;\n            }\n        }\n        \n    }\n    .form-desktop{\n        display: none;\n    }\n\n    @media (min-width: 992px){\n        .form-mobile{\n            display: none;\n        }\n        .form-desktop{\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            h1{\n                margin: 30px;\n                color: #ffff;\n                font-family: 'Poppins-Bold';\n            }\n            .input-desktop{\n                display: flex;\n                flex-direction: column;\n                min-width: 50vw;\n                margin-bottom: 50px;\n                input{\n                    border: none;\n                    border-bottom: 2px solid #ffff;\n                    background-color: rgba(7, 179, 253, 0);\n                    color: #ffff;\n                    font-family: 'Poppins-medium';\n                    outline: none;\n                    &::placeholder{\n                        font-size: 14px;\n                        color: #ffff;\n                    }\n                    &:focus{\n                        border-bottom: 2px solid #93B413;\n                    }\n                }\n            }\n        }\n    }\n    \n"])));
var viewdata = function () {
    return (React.createElement(Viewdatacomponent, null,
        React.createElement("div", { className: 'form-mobile' },
            React.createElement("h1", null, "Dados Pessoais"),
            React.createElement("form", { action: "" },
                React.createElement("div", { className: 'input-mobile' },
                    React.createElement("label", { htmlFor: "" }, "Nome Completo:"),
                    React.createElement("input", { type: "string", name: "name", id: "name" })),
                React.createElement("div", { className: 'input-mobile' },
                    React.createElement("label", { htmlFor: "" }, "Data de Nascimento:"),
                    React.createElement("input", { type: "date", name: "birthday", id: "birthday" })),
                React.createElement("div", { className: 'input-mobile' },
                    React.createElement("label", { htmlFor: "" }, "CPF:"),
                    React.createElement("input", { type: "number", name: "cpf", id: "cpf" })),
                React.createElement("div", { className: 'input-mobile' },
                    React.createElement("label", { htmlFor: "" }, "Email:"),
                    React.createElement("input", { type: "email", name: "email", id: "email" })),
                React.createElement("div", { className: 'input-mobile' },
                    React.createElement("label", { htmlFor: "" }, "Pa\u00EDs:"),
                    React.createElement("input", { type: "string", name: "country", id: "country" })),
                React.createElement("div", { className: 'input-mobile' },
                    React.createElement("label", { htmlFor: "" }, "Criado em:"),
                    React.createElement("input", { type: "date", name: "created-in", id: "created-in" })),
                React.createElement("div", { className: 'input-mobile' },
                    React.createElement("label", { htmlFor: "" }, "Atualizado em:"),
                    React.createElement("input", { type: "date", name: "updated-in", id: "updated-in" })))),
        React.createElement("div", { className: 'form-desktop' },
            React.createElement("h1", null, "Dados Pessoais"),
            React.createElement("form", { action: "" },
                React.createElement("div", { className: 'input-desktop' },
                    React.createElement("input", { type: "string", name: "name", id: "name", placeholder: 'Nome Completo:' })),
                React.createElement("div", { className: 'input-desktop' },
                    React.createElement("input", { type: "", name: "birthday", id: "birthday", placeholder: 'Data de nascimento:' })),
                React.createElement("div", { className: 'input-desktop' },
                    React.createElement("input", { type: "number", name: "cpf", id: "cpf", placeholder: 'CPF:' })),
                React.createElement("div", { className: 'input-desktop' },
                    React.createElement("input", { type: "email", name: "email", id: "email", placeholder: 'Email:' })),
                React.createElement("div", { className: 'input-desktop' },
                    React.createElement("input", { type: "string", name: "country", id: "country", placeholder: 'Pa\u00EDs:' })))),
        React.createElement("div", { className: "documents-mobile" },
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Documentos Enviados"))),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "Wesley"),
                        React.createElement("td", null, "26"),
                        React.createElement("td", null, "26")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Jo\u00E3o"),
                        React.createElement("td", null, "80")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Maria"),
                        React.createElement("td", null, "52")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Tereza"),
                        React.createElement("td", null, "36")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Carlos"),
                        React.createElement("td", null, "29")))))));
};
exports["default"] = viewdata;
var templateObject_1;
