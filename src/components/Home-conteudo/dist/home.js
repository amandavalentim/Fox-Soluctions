'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var link_1 = require("next/link");
var HomeComponent = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\nbackground: #0A53B5;\nbackground-repeat: no-repeat;\nbackground-size: 100vw;\nheight: 100vh;\n\n    .mobile{\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop-1 {\n            display: none;\n        }\n\n    h1 {\n        text-align: center;\n        position: absolute;\n        left: 60px;\n        top: 200px;\n        color: white;\n        margin: 10px;\n    }\n\n    #FX {\n        color: #F47216;\n    }\n\n    p {\n        text-align: center;\n        position: absolute;\n        left: 30px;\n        top: 300px;\n        font-size: 1.1em;\n        color: white;\n    }\n\n    .fox {\n        width: 120px;\n        position: absolute;\n        top: 613px;\n        left: 190px;\n    }\n\n    .start {\n        position: absolute;\n        width:120px;\n        height: 100px;\n        border-top-right-radius: 50%;\n        border-top-left-radius: 50%;\n        border-bottom-left-radius: 50%;\n        top: 510px;\n        left: 90px;\n        border: none;\n        background-color: #93B413;\n        font-size: 1.5em;\n        color: white;\n    }\n\n    .start:active {\n        position: absolute;\n        width:120px;\n        height: 100px;\n        border-top-right-radius: 50%;\n        border-top-left-radius: 50%;\n        border-bottom-left-radius: 50%;\n        top: 510px;\n        left: 90px;\n        border: none;\n        background-color: #86a40f;\n        font-size: 1.5em;\n        color: white;\n    }\n    \n    * {\n        align-items: center;\n        box-sizing: border-box;\n    }\n\n    @media(min-width: 768px) {\n        .mobile{\n            display: none;\n        }\n\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop-1 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet.svg\");\n\n        h1 {\n            font-size: 1.7em;\n            left: 265px;\n        }\n\n        p {\n            font-size: 1.5em;\n            left: 95px;\n            top: 330px;\n        }\n\n        .start {\n            left: 280px;\n            height: 90px;\n        }\n\n        .start:hover {\n            left: 280px;\n            height: 90px;\n            background-color: #9fc214;\n        }\n\n        .start:active {\n            left: 280px;\n            height: 90px;\n            background-color: #86a40f;\n        }\n\n        .fox {\n            top: 598px;\n            left: 380px;\n            width: 135px;\n        }\n    }\n\n    @media(min-width: 992px) {\n        .mobile{\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop-1 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        background-image: url(\"/images/background3.svg\");\n\n        h1 {\n            font-size: 2.2em;\n            top: 260px;\n            left: 358px;\n        }\n\n        p {\n            font-size: 1.9em;\n            top: 420px;\n            left: 65px;\n        }\n\n        .start {\n            width: 170px;\n            height: 120px;\n            font-size: 1.9em;\n            top: 660px;\n            left: 350px;\n        }\n\n        .start:hover {\n            width: 170px;\n            height: 120px;\n            font-size: 1.9em;\n            top: 660px;\n            left: 350px;\n            background-color: #9fc214;\n        }\n\n        .start:active {\n            width: 170px;\n            height: 120px;\n            font-size: 1.9em;\n            top: 660px;\n            left: 350px;\n            background-color: #86a40f;\n        }\n\n        .fox {\n            width: 170px;\n            top: 766px;\n            left: 500px;\n        }\n    }\n\n"], ["\n\nbackground: #0A53B5;\nbackground-repeat: no-repeat;\nbackground-size: 100vw;\nheight: 100vh;\n\n    .mobile{\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop-1 {\n            display: none;\n        }\n\n    h1 {\n        text-align: center;\n        position: absolute;\n        left: 60px;\n        top: 200px;\n        color: white;\n        margin: 10px;\n    }\n\n    #FX {\n        color: #F47216;\n    }\n\n    p {\n        text-align: center;\n        position: absolute;\n        left: 30px;\n        top: 300px;\n        font-size: 1.1em;\n        color: white;\n    }\n\n    .fox {\n        width: 120px;\n        position: absolute;\n        top: 613px;\n        left: 190px;\n    }\n\n    .start {\n        position: absolute;\n        width:120px;\n        height: 100px;\n        border-top-right-radius: 50%;\n        border-top-left-radius: 50%;\n        border-bottom-left-radius: 50%;\n        top: 510px;\n        left: 90px;\n        border: none;\n        background-color: #93B413;\n        font-size: 1.5em;\n        color: white;\n    }\n\n    .start:active {\n        position: absolute;\n        width:120px;\n        height: 100px;\n        border-top-right-radius: 50%;\n        border-top-left-radius: 50%;\n        border-bottom-left-radius: 50%;\n        top: 510px;\n        left: 90px;\n        border: none;\n        background-color: #86a40f;\n        font-size: 1.5em;\n        color: white;\n    }\n    \n    * {\n        align-items: center;\n        box-sizing: border-box;\n    }\n\n    @media(min-width: 768px) {\n        .mobile{\n            display: none;\n        }\n\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop-1 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet.svg\");\n\n        h1 {\n            font-size: 1.7em;\n            left: 265px;\n        }\n\n        p {\n            font-size: 1.5em;\n            left: 95px;\n            top: 330px;\n        }\n\n        .start {\n            left: 280px;\n            height: 90px;\n        }\n\n        .start:hover {\n            left: 280px;\n            height: 90px;\n            background-color: #9fc214;\n        }\n\n        .start:active {\n            left: 280px;\n            height: 90px;\n            background-color: #86a40f;\n        }\n\n        .fox {\n            top: 598px;\n            left: 380px;\n            width: 135px;\n        }\n    }\n\n    @media(min-width: 992px) {\n        .mobile{\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop-1 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        background-image: url(\"/images/background3.svg\");\n\n        h1 {\n            font-size: 2.2em;\n            top: 260px;\n            left: 358px;\n        }\n\n        p {\n            font-size: 1.9em;\n            top: 420px;\n            left: 65px;\n        }\n\n        .start {\n            width: 170px;\n            height: 120px;\n            font-size: 1.9em;\n            top: 660px;\n            left: 350px;\n        }\n\n        .start:hover {\n            width: 170px;\n            height: 120px;\n            font-size: 1.9em;\n            top: 660px;\n            left: 350px;\n            background-color: #9fc214;\n        }\n\n        .start:active {\n            width: 170px;\n            height: 120px;\n            font-size: 1.9em;\n            top: 660px;\n            left: 350px;\n            background-color: #86a40f;\n        }\n\n        .fox {\n            width: 170px;\n            top: 766px;\n            left: 500px;\n        }\n    }\n\n"])));
var PgInitial = function () {
    return (React.createElement(HomeComponent, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("h1", null,
                "Bem-Vinde a",
                React.createElement("br", null),
                " ",
                React.createElement("span", { id: 'FX' }, "Fox Soluctions"),
                "!"),
            React.createElement("p", null,
                "Aqui n\u00F3s buscamos sempre",
                React.createElement("br", null),
                " dar a melhor",
                React.createElement("br", null),
                " experi\u00EAncia poss\u00EDvel para",
                React.createElement("br", null),
                " quem utiliza nossa",
                React.createElement("br", null),
                " plataforma, onde voc\u00EA pode",
                React.createElement("br", null),
                " realizar o upload e visualizar",
                React.createElement("br", null),
                " seus documentos!"),
            React.createElement(link_1["default"], { href: '/Page3' },
                React.createElement("button", { type: 'button', className: 'start' }, "Start")),
            React.createElement("img", { src: "/images/Stella.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'tablet' },
            React.createElement("h1", null,
                "Bem-Vinde a",
                React.createElement("br", null),
                " ",
                React.createElement("span", { id: 'FX' }, "Fox Soluctions"),
                "!"),
            React.createElement("p", null,
                "Aqui n\u00F3s buscamos sempre dar a melhor",
                React.createElement("br", null),
                " experi\u00EAncia poss\u00EDvel para quem utiliza nossa",
                React.createElement("br", null),
                " plataforma, onde voc\u00EA pode realizar o upload",
                React.createElement("br", null),
                " e visualizar seus documentos!"),
            React.createElement(link_1["default"], { href: '/Page3' },
                React.createElement("button", { type: 'button', className: 'start' }, "Start")),
            React.createElement("img", { src: "/images/Stella.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'desktop-1' },
            React.createElement("h1", null,
                "Bem-Vinde a",
                React.createElement("br", null),
                " ",
                React.createElement("span", { id: 'FX' }, "Fox Soluctions"),
                "!"),
            React.createElement("p", null,
                "Aqui n\u00F3s buscamos sempre dar a melhor",
                React.createElement("br", null),
                " experi\u00EAncia poss\u00EDvel para quem utiliza nossaplataforma,",
                React.createElement("br", null),
                " onde voc\u00EA pode realizar o upload e visualizar",
                React.createElement("br", null),
                " seus documentos!"),
            React.createElement(link_1["default"], { href: '/Page3' },
                React.createElement("button", { type: 'button', className: 'start' }, "Start")),
            React.createElement("img", { src: "/images/Stella.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'desktop-2' })));
};
exports["default"] = PgInitial;
var templateObject_1;
