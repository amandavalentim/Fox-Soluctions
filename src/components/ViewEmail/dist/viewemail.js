// Developed by Gabriel Marques
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var link_1 = require("next/link");
var ViewEmailComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n// Mobile\n\n.mobile {\n    display: block;\n    justify-content: space-between;\n}\n\n.tablet-desktops {\n    display: none;\n}\n\nbackground: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\nheight: 70vh;\n\nh1 {\n    font-size: 1.4em;\n    padding: 8%;\n}\n\np {\n    text-decoration: underline 3px;\n    font-size: 1.1em;\n    margin: 15%;\n}\n\n#ok {\n    margin-top: 6.5%;\n    margin-left: 20%;\n    width: 70px;\n    height: 40px;\n    font-size: 1.1em;\n    background-color: #93B413;\n    border: none;\n    border-radius: 10px;\n}\n\n#ok:active {\n    margin-top: 6.5%;\n    margin-left: 20%;\n    width: 70px;\n    height: 40px;\n    font-size: 1.1em;\n    background-color: #86a40f;\n    border: none;\n    border-radius: 10px;\n}\n\n#change {\n    margin-top: 6.5%;\n    margin-left: 14%;\n    width: 80px;\n    height: 40px;\n    font-size: 1.1em;\n    background-color: #93B413;\n    border: none;\n    border-radius: 10px;\n}\n\n#change:active {\n    margin-top: 6.5%;\n    margin-left: 14%;\n    width: 80px;\n    height: 40px;\n    font-size: 1.1em;\n    background-color: #86a40f;\n    border: none;\n    border-radius: 10px;\n}\n\n.fox {\n    width: 130px;\n    height: 100px;\n    margin-top: 9.8%;\n    margin-left: 32%;\n}\n\n// Tablets\n@media(min-width: 768px) {\n\n    .mobile {\n        display: none;\n    }\n\n    .tablet-desktops {\n        display: block;\n        justify-content: space-between;\n    }\n\n    height: 70vh;\n    background-image: url(\"/images/tablet-recuperar-email.svg\");\n    background-repeat: no-repeat;\n\n    .form {\n        padding-top: 6.2%;\n    }\n\n    form{\n        width: 300px;\n        height: 300px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n        margin-left: 30%;\n    }\n\n    h1 {\n        font-size: 1.3em;\n        margin-left: 1%;\n        padding-top: 10%;\n    }\n\n    p {\n        margin-left: 13%;\n    }\n\n    #ok {\n        background-color: #93B413;\n    }\n\n    #ok:active {\n        background-color: #86a40f;\n    }\n\n    #change {\n        margin-left: 10%;\n        background-color: #93B413;\n    }\n\n    #change:active {\n        margin-left: 10%;\n        background-color: #86a40f;\n    }\n\n    .fox {\n        width: 90px;\n        height: 90px;\n        position: absolute;\n        top: 220px;\n        margin-left: 0%;\n        transform: rotate(180deg);\n    }\n\n}\n\n// Small Screens\n@media(min-width: 992px) {\n\n    .mobile {\n        display: none;\n    }\n\n    .tablet-desktops {\n        display: block;\n        justify-content: space-between;\n    }\n\n    background-image: url(\"/images/992px-recuperar-email.svg\");\n    height: 65vh;\n\n    form {\n        margin-top: -0.5%;\n        margin-left: 34.5%;\n    }\n\n    #ok {\n        background-color: #93B413;\n        cursor: pointer;\n    }\n\n    #ok:hover {\n        background-color: #9fc214;\n        cursor: pointer;\n    }\n\n    #ok:active {\n        background-color: #86a40f;\n        cursor: pointer;\n    }\n\n    #change {\n        margin-left: 10.5%;\n        background-color: #93B413;\n        cursor: pointer;\n    }\n\n    #change:hover {\n        margin-left: 10.5%;\n        background-color: #9fc214;\n        cursor: pointer;\n    }\n\n    #change:active {\n        margin-left: 10.5%;\n        background-color: #86a40f;\n        cursor: pointer;\n    }\n\n}\n\n//Medium Screen \n@media(min-width: 1200px) {\n\n    .mobile {\n        display: none;\n    }\n\n    .tablet-desktops {\n        display: block;\n        justify-content: space-between;\n    }\n\n    background-image: url(\"/images/1200px-recuperar-email.svg\");\n    height: 72vh;\n\n    form {\n        width: 350px;\n        height: 350px;\n        margin-top: -1.7%;\n        margin-left: 35.5%;\n    }\n\n    h1 {\n        margin-left: 4.5%;\n        font-size: 1.4em;\n    }\n\n    p {\n        font-size: 1.3em;\n        margin-left: 12%;\n    }\n\n    #ok {\n        background-color: #93B413;\n        width: 80px;\n        height: 50px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #ok:hover {\n        background-color: #9fc214;\n        width: 80px;\n        height: 50px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #ok:active {\n        background-color: #86a40f;\n        width: 80px;\n        height: 50px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #change {\n        margin-left: 10%;\n        background-color: #93B413;\n        width: 90px;\n        height: 50px;\n        font-size: 1.3em;\n        margin-top: 5%;\n        margin-left: 12.5%;\n        cursor: pointer;\n    }\n\n    #change:hover {\n        margin-left: 10%;\n        background-color: #9fc214;\n        width: 90px;\n        height: 50px;\n        font-size: 1.3em;\n        margin-top: 5%;\n        margin-left: 12.5%;\n        cursor: pointer;\n    }\n\n    #change:active {\n        margin-left: 10%;\n        background-color: #86a40f;\n        width: 90px;\n        height: 50px;\n        font-size: 1.3em;\n        margin-top: 5%;\n        margin-left: 12.5%;\n        cursor: pointer;\n    }\n\n    .fox {\n        width: 110px;\n        height: 110px;\n        position: absolute;\n        top: 200px;\n    }\n}\n\n//Large Screen \n@media(min-width: 1600px) {\n\n    .mobile {\n        display: none;\n    }\n\n    .tablet-desktops {\n        display: block;\n        justify-content: space-between;\n    }\n\n    background-image: url(\"/images/1600px-recuperar-email.svg\");\n    height: 69vh;\n\n    form {\n        width: 390px;\n        height: 390px;\n        margin-top: -1.7%;\n        margin-left: 37%;\n    }\n\n    h1 {\n        margin-left: 3.5%;\n        font-size: 1.6em;\n    }\n\n    p {\n        font-size: 1.4em;\n        margin-left: 13.5%;\n    }\n\n    #ok {\n        background-color: #93B413;\n        width: 90px;\n        height: 60px;\n        font-size: 1.5em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #ok:hover {\n        background-color: #9fc214;\n        width: 90px;\n        height: 60px;\n        font-size: 1.5em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #ok:active {\n        background-color: #86a40f;\n        width: 90px;\n        height: 60px;\n        font-size: 1.5em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #change {\n        margin-left: 10%;\n        background-color: #93B413;\n        width: 100px;\n        height: 60px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        margin-left: 12%;\n        cursor: pointer;\n    }\n\n    #change:hover {\n        margin-left: 10%;\n        background-color: #9fc214;\n        width: 100px;\n        height: 60px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        margin-left: 12%;\n        cursor: pointer;\n    }\n\n    #change:active {\n        margin-left: 10%;\n        background-color: #86a40f;\n        width: 100px;\n        height: 60px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        margin-left: 12%;\n        cursor: pointer;\n    }\n\n    .fox {\n        width: 110px;\n        height: 110px;\n        position: absolute;\n        top: 200px;\n    }\n    \n}\n\n"], ["\n\n// Mobile\n\n.mobile {\n    display: block;\n    justify-content: space-between;\n}\n\n.tablet-desktops {\n    display: none;\n}\n\nbackground: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\nheight: 70vh;\n\nh1 {\n    font-size: 1.4em;\n    padding: 8%;\n}\n\np {\n    text-decoration: underline 3px;\n    font-size: 1.1em;\n    margin: 15%;\n}\n\n#ok {\n    margin-top: 6.5%;\n    margin-left: 20%;\n    width: 70px;\n    height: 40px;\n    font-size: 1.1em;\n    background-color: #93B413;\n    border: none;\n    border-radius: 10px;\n}\n\n#ok:active {\n    margin-top: 6.5%;\n    margin-left: 20%;\n    width: 70px;\n    height: 40px;\n    font-size: 1.1em;\n    background-color: #86a40f;\n    border: none;\n    border-radius: 10px;\n}\n\n#change {\n    margin-top: 6.5%;\n    margin-left: 14%;\n    width: 80px;\n    height: 40px;\n    font-size: 1.1em;\n    background-color: #93B413;\n    border: none;\n    border-radius: 10px;\n}\n\n#change:active {\n    margin-top: 6.5%;\n    margin-left: 14%;\n    width: 80px;\n    height: 40px;\n    font-size: 1.1em;\n    background-color: #86a40f;\n    border: none;\n    border-radius: 10px;\n}\n\n.fox {\n    width: 130px;\n    height: 100px;\n    margin-top: 9.8%;\n    margin-left: 32%;\n}\n\n// Tablets\n@media(min-width: 768px) {\n\n    .mobile {\n        display: none;\n    }\n\n    .tablet-desktops {\n        display: block;\n        justify-content: space-between;\n    }\n\n    height: 70vh;\n    background-image: url(\"/images/tablet-recuperar-email.svg\");\n    background-repeat: no-repeat;\n\n    .form {\n        padding-top: 6.2%;\n    }\n\n    form{\n        width: 300px;\n        height: 300px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n        margin-left: 30%;\n    }\n\n    h1 {\n        font-size: 1.3em;\n        margin-left: 1%;\n        padding-top: 10%;\n    }\n\n    p {\n        margin-left: 13%;\n    }\n\n    #ok {\n        background-color: #93B413;\n    }\n\n    #ok:active {\n        background-color: #86a40f;\n    }\n\n    #change {\n        margin-left: 10%;\n        background-color: #93B413;\n    }\n\n    #change:active {\n        margin-left: 10%;\n        background-color: #86a40f;\n    }\n\n    .fox {\n        width: 90px;\n        height: 90px;\n        position: absolute;\n        top: 220px;\n        margin-left: 0%;\n        transform: rotate(180deg);\n    }\n\n}\n\n// Small Screens\n@media(min-width: 992px) {\n\n    .mobile {\n        display: none;\n    }\n\n    .tablet-desktops {\n        display: block;\n        justify-content: space-between;\n    }\n\n    background-image: url(\"/images/992px-recuperar-email.svg\");\n    height: 65vh;\n\n    form {\n        margin-top: -0.5%;\n        margin-left: 34.5%;\n    }\n\n    #ok {\n        background-color: #93B413;\n        cursor: pointer;\n    }\n\n    #ok:hover {\n        background-color: #9fc214;\n        cursor: pointer;\n    }\n\n    #ok:active {\n        background-color: #86a40f;\n        cursor: pointer;\n    }\n\n    #change {\n        margin-left: 10.5%;\n        background-color: #93B413;\n        cursor: pointer;\n    }\n\n    #change:hover {\n        margin-left: 10.5%;\n        background-color: #9fc214;\n        cursor: pointer;\n    }\n\n    #change:active {\n        margin-left: 10.5%;\n        background-color: #86a40f;\n        cursor: pointer;\n    }\n\n}\n\n//Medium Screen \n@media(min-width: 1200px) {\n\n    .mobile {\n        display: none;\n    }\n\n    .tablet-desktops {\n        display: block;\n        justify-content: space-between;\n    }\n\n    background-image: url(\"/images/1200px-recuperar-email.svg\");\n    height: 72vh;\n\n    form {\n        width: 350px;\n        height: 350px;\n        margin-top: -1.7%;\n        margin-left: 35.5%;\n    }\n\n    h1 {\n        margin-left: 4.5%;\n        font-size: 1.4em;\n    }\n\n    p {\n        font-size: 1.3em;\n        margin-left: 12%;\n    }\n\n    #ok {\n        background-color: #93B413;\n        width: 80px;\n        height: 50px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #ok:hover {\n        background-color: #9fc214;\n        width: 80px;\n        height: 50px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #ok:active {\n        background-color: #86a40f;\n        width: 80px;\n        height: 50px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #change {\n        margin-left: 10%;\n        background-color: #93B413;\n        width: 90px;\n        height: 50px;\n        font-size: 1.3em;\n        margin-top: 5%;\n        margin-left: 12.5%;\n        cursor: pointer;\n    }\n\n    #change:hover {\n        margin-left: 10%;\n        background-color: #9fc214;\n        width: 90px;\n        height: 50px;\n        font-size: 1.3em;\n        margin-top: 5%;\n        margin-left: 12.5%;\n        cursor: pointer;\n    }\n\n    #change:active {\n        margin-left: 10%;\n        background-color: #86a40f;\n        width: 90px;\n        height: 50px;\n        font-size: 1.3em;\n        margin-top: 5%;\n        margin-left: 12.5%;\n        cursor: pointer;\n    }\n\n    .fox {\n        width: 110px;\n        height: 110px;\n        position: absolute;\n        top: 200px;\n    }\n}\n\n//Large Screen \n@media(min-width: 1600px) {\n\n    .mobile {\n        display: none;\n    }\n\n    .tablet-desktops {\n        display: block;\n        justify-content: space-between;\n    }\n\n    background-image: url(\"/images/1600px-recuperar-email.svg\");\n    height: 69vh;\n\n    form {\n        width: 390px;\n        height: 390px;\n        margin-top: -1.7%;\n        margin-left: 37%;\n    }\n\n    h1 {\n        margin-left: 3.5%;\n        font-size: 1.6em;\n    }\n\n    p {\n        font-size: 1.4em;\n        margin-left: 13.5%;\n    }\n\n    #ok {\n        background-color: #93B413;\n        width: 90px;\n        height: 60px;\n        font-size: 1.5em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #ok:hover {\n        background-color: #9fc214;\n        width: 90px;\n        height: 60px;\n        font-size: 1.5em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #ok:active {\n        background-color: #86a40f;\n        width: 90px;\n        height: 60px;\n        font-size: 1.5em;\n        margin-top: 5%;\n        cursor: pointer;\n    }\n\n    #change {\n        margin-left: 10%;\n        background-color: #93B413;\n        width: 100px;\n        height: 60px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        margin-left: 12%;\n        cursor: pointer;\n    }\n\n    #change:hover {\n        margin-left: 10%;\n        background-color: #9fc214;\n        width: 100px;\n        height: 60px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        margin-left: 12%;\n        cursor: pointer;\n    }\n\n    #change:active {\n        margin-left: 10%;\n        background-color: #86a40f;\n        width: 100px;\n        height: 60px;\n        font-size: 1.4em;\n        margin-top: 5%;\n        margin-left: 12%;\n        cursor: pointer;\n    }\n\n    .fox {\n        width: 110px;\n        height: 110px;\n        position: absolute;\n        top: 200px;\n    }\n    \n}\n\n"])));
var ViewEmail = function () {
    return (React.createElement(ViewEmailComponent, null,
        React.createElement("nav", { className: "mobile" },
            React.createElement("form", null,
                React.createElement("h1", null, "Seu e-mail de login \u00E9:"),
                React.createElement("p", null, "********fox@gmail.com"),
                React.createElement(link_1["default"], { href: '/LoginPage', className: "ok" },
                    React.createElement("button", { type: "button", id: "ok" }, "OK")),
                React.createElement(link_1["default"], { href: '/NewEmailPage', className: "change" },
                    React.createElement("button", { type: "button", id: "change" }, "Alterar"))),
            React.createElement("img", { src: "/images/Stella-view-email.png", alt: "fox", className: "fox" })),
        React.createElement("nav", { className: "tablet-desktops" },
            React.createElement("div", { className: "form" },
                React.createElement("form", null,
                    React.createElement("h1", null, "Seu e-mail de login \u00E9:"),
                    React.createElement("p", null, "********fox@gmail.com"),
                    React.createElement(link_1["default"], { href: '/LoginPage', className: "ok" },
                        React.createElement("button", { type: "button", id: "ok" }, "OK")),
                    React.createElement(link_1["default"], { href: '/NewEmailPage', className: "change" },
                        React.createElement("button", { type: "button", id: "change" }, "Alterar")))),
            React.createElement("img", { src: "/images/Raposa-code.png", alt: "fox", className: "fox" }))));
};
exports["default"] = ViewEmail;
var templateObject_1;
