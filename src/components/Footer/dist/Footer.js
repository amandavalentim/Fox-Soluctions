//Desenvolvido por Amanda
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
//Mobile
var FooterComponent = styled_1["default"].footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: rgba(7, 179, 253, 1);\n    box-sizing: border-box;\n    .container-center{\n        padding: 10px;\n        .box{\n            margin: 20px;\n            position: relative;\n            h3{\n                margin: 10px;\n                padding: 15px;\n                border-radius: 5px;\n                border: 3px solid #93B413;\n                background: #93B413;\n                height: 70px;\n                font-family: 'Poppins-Bold';\n                font-size: 21px;\n                color: #fff;\n                cursor: default;\n                .btn-icon{\n                    padding: 7px;\n                    position: absolute;\n                    left: 80%;\n                    transform: translate(20%, 7%);\n                    color: #fff;\n                    font-size: 20px;\n                    border: none;\n                    background: none;\n                }\n            }\n            p{\n                margin: 20px;\n                width: auto;\n                font-family: 'Poppins-Regular';\n                color: #fff;\n                cursor: default;\n                span{\n                    font-family: 'Poppins-Bold';\n                    font-size: 15px;\n                }\n            }\n            a{\n                display: grid;\n                margin: 20px;\n                font-family: 'Poppins-Regular';\n                color: #fff;\n            }\n            .container-icons{\n                margin: 10px;\n                display: flex;\n                .facebook{\n                    width: 50px;\n                    height: 60px;\n                    fill: #1877F2;\n                    margin:5px;\n                }\n                .instagram{\n                    width: 50px;\n                    height: 60px;\n                    fill: #C82D8E;\n                    margin:5px;\n                }\n                .twitter{\n                    width: 50px;\n                    height: 60px;\n                    fill: #098BEA;\n                    margin:5px;\n                }\n                .github{\n                    width: 50px;\n                    height: 60px;\n                    fill: #000;\n                    margin:5px;\n                }\n            }\n        }\n    }\n\n    //Tablet\n    @media(min-width: 450px){\n        .container-center {\n            .box{\n                h3{\n                    .btn-icon{\n                    position: absolute;\n                    left: 91%;\n                    transform: translate(20%, 7%);\n                    }\n                }\n            }\n        }\n    }\n\n    //Desktop\n    @media(min-width: 992px){\n        .container-center{\n            display: flex;\n            justify-content: space-between;\n            .box{\n                h3{\n                    background:none;\n                    border: none;\n                    width: 250px;\n                    text-align: center;\n                    font-size: 25px;\n                    .btn-icon{\n                        display: none;\n                    }\n                }\n                h3:hover, h3:focus{\n                transform: translateX(10px) scale(1.2);\n                }\n                p{\n                    margin: 10px;\n                    width: 290px;\n                }\n                p:hover, p:focus{\n                transform: translateX(10px) scale(1.2);\n                }\n                a{\n                    margin: 17px;\n                }\n                a:hover, a:focus{\n                transform: translateX(10px) scale(1.2);\n                }\n                .container-icons{\n                    \n                    .facebook:hover, .facebook:focus{\n                        transform: translateX(10px) scale(1.2);\n                    }\n                    .instagram:hover, .instagram:focus{\n                    transform: translateX(10px) scale(1.2);\n                    }\n                    .twitter:hover, .twitter:focus{\n                        transform: translateX(10px) scale(1.2);\n                    }\n                    .github:hover, .github:focus{\n                        transform: translateX(10px) scale(1.2);\n                    }\n                }\n            }\n        }\n    }\n\n    //Large Screen\n    @media(min-width:1200px){\n        .container-center{\n            justify-content: space-between;\n        }\n    }\n"], ["\n    background: rgba(7, 179, 253, 1);\n    box-sizing: border-box;\n    .container-center{\n        padding: 10px;\n        .box{\n            margin: 20px;\n            position: relative;\n            h3{\n                margin: 10px;\n                padding: 15px;\n                border-radius: 5px;\n                border: 3px solid #93B413;\n                background: #93B413;\n                height: 70px;\n                font-family: 'Poppins-Bold';\n                font-size: 21px;\n                color: #fff;\n                cursor: default;\n                .btn-icon{\n                    padding: 7px;\n                    position: absolute;\n                    left: 80%;\n                    transform: translate(20%, 7%);\n                    color: #fff;\n                    font-size: 20px;\n                    border: none;\n                    background: none;\n                }\n            }\n            p{\n                margin: 20px;\n                width: auto;\n                font-family: 'Poppins-Regular';\n                color: #fff;\n                cursor: default;\n                span{\n                    font-family: 'Poppins-Bold';\n                    font-size: 15px;\n                }\n            }\n            a{\n                display: grid;\n                margin: 20px;\n                font-family: 'Poppins-Regular';\n                color: #fff;\n            }\n            .container-icons{\n                margin: 10px;\n                display: flex;\n                .facebook{\n                    width: 50px;\n                    height: 60px;\n                    fill: #1877F2;\n                    margin:5px;\n                }\n                .instagram{\n                    width: 50px;\n                    height: 60px;\n                    fill: #C82D8E;\n                    margin:5px;\n                }\n                .twitter{\n                    width: 50px;\n                    height: 60px;\n                    fill: #098BEA;\n                    margin:5px;\n                }\n                .github{\n                    width: 50px;\n                    height: 60px;\n                    fill: #000;\n                    margin:5px;\n                }\n            }\n        }\n    }\n\n    //Tablet\n    @media(min-width: 450px){\n        .container-center {\n            .box{\n                h3{\n                    .btn-icon{\n                    position: absolute;\n                    left: 91%;\n                    transform: translate(20%, 7%);\n                    }\n                }\n            }\n        }\n    }\n\n    //Desktop\n    @media(min-width: 992px){\n        .container-center{\n            display: flex;\n            justify-content: space-between;\n            .box{\n                h3{\n                    background:none;\n                    border: none;\n                    width: 250px;\n                    text-align: center;\n                    font-size: 25px;\n                    .btn-icon{\n                        display: none;\n                    }\n                }\n                h3:hover, h3:focus{\n                transform: translateX(10px) scale(1.2);\n                }\n                p{\n                    margin: 10px;\n                    width: 290px;\n                }\n                p:hover, p:focus{\n                transform: translateX(10px) scale(1.2);\n                }\n                a{\n                    margin: 17px;\n                }\n                a:hover, a:focus{\n                transform: translateX(10px) scale(1.2);\n                }\n                .container-icons{\n                    \n                    .facebook:hover, .facebook:focus{\n                        transform: translateX(10px) scale(1.2);\n                    }\n                    .instagram:hover, .instagram:focus{\n                    transform: translateX(10px) scale(1.2);\n                    }\n                    .twitter:hover, .twitter:focus{\n                        transform: translateX(10px) scale(1.2);\n                    }\n                    .github:hover, .github:focus{\n                        transform: translateX(10px) scale(1.2);\n                    }\n                }\n            }\n        }\n    }\n\n    //Large Screen\n    @media(min-width:1200px){\n        .container-center{\n            justify-content: space-between;\n        }\n    }\n"])));
var Footer = function () {
    //Action Toggle
    var _a = react_1.useState(false), containerContacts = _a[0], setContainerContacts = _a[1];
    var _b = react_1.useState(false), containerCompany = _b[0], setContainerCompany = _b[1];
    var _c = react_1.useState(false), containerIcons = _c[0], setContainerIcons = _c[1];
    return (react_1["default"].createElement(FooterComponent, null,
        react_1["default"].createElement("div", { className: 'container-center' },
            react_1["default"].createElement("div", { className: 'box' },
                react_1["default"].createElement("h3", null,
                    "Contatos",
                    react_1["default"].createElement("button", { type: 'button', className: 'btn-icon', onClick: function () { return setContainerContacts(!containerContacts); } }, containerContacts ? react_1["default"].createElement(fa_1.FaAngleDown, null) : react_1["default"].createElement(fa_1.FaAngleRight, null))),
                containerContacts && react_1["default"].createElement("div", { className: 'container-contacts' },
                    react_1["default"].createElement("p", null,
                        react_1["default"].createElement("span", null, "Endere\u00E7o: "),
                        "Rua Tamoios, 246, Jardim Aeroporto - S\u00E3o Paulo, SP."),
                    react_1["default"].createElement("p", null,
                        react_1["default"].createElement("span", null, "Telefone: "),
                        " (11) 99999-9999"),
                    react_1["default"].createElement("p", null,
                        react_1["default"].createElement("span", null, "Email: "),
                        "foxsoluctions@gmail.com"))),
            react_1["default"].createElement("div", { className: 'box' },
                react_1["default"].createElement("h3", null,
                    "Nossa Empresa",
                    react_1["default"].createElement("button", { type: 'button', className: 'btn-icon', onClick: function () { return setContainerCompany(!containerCompany); } }, containerCompany ? react_1["default"].createElement(fa_1.FaAngleDown, null) : react_1["default"].createElement(fa_1.FaAngleRight, null))),
                containerCompany && react_1["default"].createElement("div", { className: 'container-company' },
                    react_1["default"].createElement("a", { href: "" }, "Home"),
                    react_1["default"].createElement("a", { href: "" }, "Documentos"),
                    react_1["default"].createElement("a", { href: "" }, "Sobre N\u00F3s"))),
            react_1["default"].createElement("div", { className: 'box' },
                react_1["default"].createElement("h3", null,
                    "Redes Sociais",
                    react_1["default"].createElement("button", { type: 'button', className: 'btn-icon', onClick: function () { return setContainerIcons(!containerIcons); } }, containerIcons ? react_1["default"].createElement(fa_1.FaAngleDown, null) : react_1["default"].createElement(fa_1.FaAngleRight, null))),
                containerIcons && react_1["default"].createElement("div", { className: 'container-icons' },
                    react_1["default"].createElement(fa_1.FaFacebookSquare, { className: 'facebook' }),
                    react_1["default"].createElement(fa_1.FaInstagram, { className: 'instagram' }),
                    react_1["default"].createElement(fa_1.FaTwitterSquare, { className: 'twitter' }),
                    react_1["default"].createElement(fa_1.FaGithubSquare, { className: 'github' }))))));
};
exports["default"] = Footer;
var templateObject_1;
