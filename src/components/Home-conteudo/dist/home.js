'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var link_1 = require("next/link");
var HomeComponent = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\nbackground: #0A53B5;\nbackground-repeat: no-repeat;\nbackground-size: 100vw;\nheight: 100vh;\n\n    .show-on-mobile{\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .small-screens {\n        display: none;       \n    }\n\n    .normal-screens {\n        display: none;   \n    }\n\n    .tall-screens {\n        display: none;    \n    }\n\n    h1 {\n        text-align: center;\n        position: absolute;\n        left: 60px;\n        top: 200px;\n    }\n\n    #FX {\n        color: #F47216;\n    }\n\n    p {\n        text-align: center;\n        position: absolute;\n        left: 30px;\n        top: 300px;\n        font-size: 1.1em;\n    }\n\n    .fox {\n        width: 120px;\n        position: absolute;\n        top: 613px;\n        left: 190px;\n    }\n\n    .start {\n        position: absolute;\n        width:120px;\n        height: 100px;\n        border-top-right-radius: 50%;\n        border-top-left-radius: 50%;\n        border-bottom-left-radius: 50%;\n        top: 510px;\n        left: 90px;\n        border: none;\n        background-color: #93B413;\n        font-size: 1.5em;\n    }\n\n    .start:active{\n        position: absolute;\n        width:120px;\n        height: 100px;\n        border-top-right-radius: 50%;\n        border-top-left-radius: 50%;\n        border-bottom-left-radius: 50%;\n        top: 510px;\n        left: 90px;\n        border: none;\n        font-size: 1.5em;\n       background-color: #9fc214;\n    }\n    \n    * {\n        align-items: center;\n    }\n\n    @media (min-width: 768px) {\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .tall-screens{\n            display: none;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .small-screens {\n            display: none;\n        }\n\n        .normal-screens {\n            display: none;\n        }\n\n        .tall-screens {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet.svg\");\n\n        h1 {\n            text-align: center;\n            position: absolute;\n            left: 280px;\n            top: 230px;\n            font-size: 1.5em;\n        }\n\n        p {\n            text-align: center;\n            position: absolute;\n            left: 95px;\n            top: 350px;\n            font-size: 1.2em;\n        }\n\n        .start {\n            left: 340px;\n        }\n\n        .start:active {\n            left: 340px;\n            background-color: #9fc214;\n        }\n\n        .fox {\n            left: 450px;\n        }\n\n    }\n\n    @media (min-width: 992px) {\n\n        .small-screens {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .normal-screens {\n            display: none;\n        }\n\n        .tall-screens {\n            display: none;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        background-image: url(\"/images/background3.svg\");\n\n        h1 {\n            text-align: center;\n            position: absolute;\n            left: 370px;\n            top: 250px;\n            font-size: 2em;\n        }\n\n        p {\n            text-align: center;\n            position: absolute;\n            left: 70px;\n            top: 400px;\n            font-size: 1.8em;\n        }\n\n        .start {\n            left: 420px;\n            top: 630px;\n            width: 190px;\n            height: 130px;\n            font-size: 2.1em;\n        }\n\n        .start:active {\n            left: 420px;\n            top: 630px;\n            width: 190px;\n            height: 130px;\n            font-size: 2.1em;\n            background-color: #9fc214;\n        }\n\n        .fox {\n            top: 777px;\n            width: 160px;\n            left: 580px;\n        }\n\n    }\n\n    @media (min-width: 1200px) {\n\n        .normal-screens {\n            display: flex;\n            justify-content: space-between;  \n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .small-screens {\n            display: none;\n        }\n\n        .tall-screens {\n            display: none;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        background-image: url(\"/images/background-2.svg\"); \n\n        h1 {\n            text-align: center;\n            position: absolute;\n            left: 570px;\n            top: 250px;\n            font-size: 2em;\n        }\n\n        p {\n            text-align: center;\n            position: absolute;\n            left: 260px;\n            top: 390px;\n            font-size: 1.8em;\n        }\n\n        .start {\n            left: 610px;\n            top: 610px;\n        }\n\n        .start:active {\n            left: 610px;\n            top: 610px;\n            background-color: #9fc214;\n        }\n\n        .fox {\n            left: 760px;\n            width: 190px;\n            top: 747px;\n        }\n    \n    }\n\n    @media (min-width: 1600px) {\n\n        .tall-screens {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .small-screens {\n            display: none;  \n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .normal-screens {\n            display: none;\n        }\n\n        background-image: url(\"/images/group-144.svg\");\n\n        h1 {\n            left: 630px;\n        }\n\n        p {\n            left: 330px;\n            top: 410px;\n        }\n\n        .start {\n            left: 668px;\n            top: 620px;\n        }\n\n        .start:active {\n            left: 668px;\n            top: 620px;\n            background-color: #9fc214;\n        }\n\n        .fox {\n            left: 820px;\n            top: 753px;\n        }\n\n    }\n\n"], ["\n\nbackground: #0A53B5;\nbackground-repeat: no-repeat;\nbackground-size: 100vw;\nheight: 100vh;\n\n    .show-on-mobile{\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .small-screens {\n        display: none;       \n    }\n\n    .normal-screens {\n        display: none;   \n    }\n\n    .tall-screens {\n        display: none;    \n    }\n\n    h1 {\n        text-align: center;\n        position: absolute;\n        left: 60px;\n        top: 200px;\n    }\n\n    #FX {\n        color: #F47216;\n    }\n\n    p {\n        text-align: center;\n        position: absolute;\n        left: 30px;\n        top: 300px;\n        font-size: 1.1em;\n    }\n\n    .fox {\n        width: 120px;\n        position: absolute;\n        top: 613px;\n        left: 190px;\n    }\n\n    .start {\n        position: absolute;\n        width:120px;\n        height: 100px;\n        border-top-right-radius: 50%;\n        border-top-left-radius: 50%;\n        border-bottom-left-radius: 50%;\n        top: 510px;\n        left: 90px;\n        border: none;\n        background-color: #93B413;\n        font-size: 1.5em;\n    }\n\n    .start:active{\n        position: absolute;\n        width:120px;\n        height: 100px;\n        border-top-right-radius: 50%;\n        border-top-left-radius: 50%;\n        border-bottom-left-radius: 50%;\n        top: 510px;\n        left: 90px;\n        border: none;\n        font-size: 1.5em;\n       background-color: #9fc214;\n    }\n    \n    * {\n        align-items: center;\n    }\n\n    @media (min-width: 768px) {\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .tall-screens{\n            display: none;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .small-screens {\n            display: none;\n        }\n\n        .normal-screens {\n            display: none;\n        }\n\n        .tall-screens {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet.svg\");\n\n        h1 {\n            text-align: center;\n            position: absolute;\n            left: 280px;\n            top: 230px;\n            font-size: 1.5em;\n        }\n\n        p {\n            text-align: center;\n            position: absolute;\n            left: 95px;\n            top: 350px;\n            font-size: 1.2em;\n        }\n\n        .start {\n            left: 340px;\n        }\n\n        .start:active {\n            left: 340px;\n            background-color: #9fc214;\n        }\n\n        .fox {\n            left: 450px;\n        }\n\n    }\n\n    @media (min-width: 992px) {\n\n        .small-screens {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .normal-screens {\n            display: none;\n        }\n\n        .tall-screens {\n            display: none;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        background-image: url(\"/images/background3.svg\");\n\n        h1 {\n            text-align: center;\n            position: absolute;\n            left: 370px;\n            top: 250px;\n            font-size: 2em;\n        }\n\n        p {\n            text-align: center;\n            position: absolute;\n            left: 70px;\n            top: 400px;\n            font-size: 1.8em;\n        }\n\n        .start {\n            left: 420px;\n            top: 630px;\n            width: 190px;\n            height: 130px;\n            font-size: 2.1em;\n        }\n\n        .start:active {\n            left: 420px;\n            top: 630px;\n            width: 190px;\n            height: 130px;\n            font-size: 2.1em;\n            background-color: #9fc214;\n        }\n\n        .fox {\n            top: 777px;\n            width: 160px;\n            left: 580px;\n        }\n\n    }\n\n    @media (min-width: 1200px) {\n\n        .normal-screens {\n            display: flex;\n            justify-content: space-between;  \n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .small-screens {\n            display: none;\n        }\n\n        .tall-screens {\n            display: none;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        background-image: url(\"/images/background-2.svg\"); \n\n        h1 {\n            text-align: center;\n            position: absolute;\n            left: 570px;\n            top: 250px;\n            font-size: 2em;\n        }\n\n        p {\n            text-align: center;\n            position: absolute;\n            left: 260px;\n            top: 390px;\n            font-size: 1.8em;\n        }\n\n        .start {\n            left: 610px;\n            top: 610px;\n        }\n\n        .start:active {\n            left: 610px;\n            top: 610px;\n            background-color: #9fc214;\n        }\n\n        .fox {\n            left: 760px;\n            width: 190px;\n            top: 747px;\n        }\n    \n    }\n\n    @media (min-width: 1600px) {\n\n        .tall-screens {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .small-screens {\n            display: none;  \n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .normal-screens {\n            display: none;\n        }\n\n        background-image: url(\"/images/group-144.svg\");\n\n        h1 {\n            left: 630px;\n        }\n\n        p {\n            left: 330px;\n            top: 410px;\n        }\n\n        .start {\n            left: 668px;\n            top: 620px;\n        }\n\n        .start:active {\n            left: 668px;\n            top: 620px;\n            background-color: #9fc214;\n        }\n\n        .fox {\n            left: 820px;\n            top: 753px;\n        }\n\n    }\n\n"])));
var PgInitial = function () {
    return (React.createElement(HomeComponent, null,
        React.createElement("nav", { className: 'show-on-mobile' },
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
                " experi\u00EAncia poss\u00EDvel para quem utiliza nossa plataforma,",
                React.createElement("br", null),
                " onde voc\u00EA pode realizar",
                React.createElement("br", null),
                " o upload e visualizar seus documentos!"),
            React.createElement(link_1["default"], { href: '/Page3' },
                React.createElement("button", { type: 'button', className: 'start' }, "Start")),
            React.createElement("img", { src: "/images/Stella.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'small-screens' },
            React.createElement("h1", null,
                "Bem-Vinde a",
                React.createElement("br", null),
                " ",
                React.createElement("span", { id: 'FX' }, "Fox Soluctions"),
                "!"),
            React.createElement("p", null,
                "Aqui n\u00F3s buscamos sempre dar a melhor",
                React.createElement("br", null),
                " experi\u00EAncia poss\u00EDvel para quem utiliza nossa plataforma,",
                React.createElement("br", null),
                " onde voc\u00EA pode realizar",
                React.createElement("br", null),
                " o upload e visualizar seus documentos!"),
            React.createElement(link_1["default"], { href: '/Page3' },
                React.createElement("button", { type: 'button', className: 'start' }, "Start")),
            React.createElement("img", { src: "/images/Stella.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'normal-screens' },
            React.createElement("h1", null,
                "Bem-Vinde a",
                React.createElement("br", null),
                " ",
                React.createElement("span", { id: 'FX' }, "Fox Soluctions"),
                "!"),
            React.createElement("p", null,
                "Aqui n\u00F3s buscamos sempre dar a melhor",
                React.createElement("br", null),
                " experi\u00EAncia poss\u00EDvel para quem utiliza nossa plataforma,",
                React.createElement("br", null),
                " onde voc\u00EA pode realizar",
                React.createElement("br", null),
                " o upload e visualizar seus documentos!"),
            React.createElement(link_1["default"], { href: '/Page3' },
                React.createElement("button", { type: 'button', className: 'start' }, "Start")),
            React.createElement("img", { src: "/images/Stella.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'tall-screens' },
            React.createElement("h1", null,
                "Bem-Vinde a",
                React.createElement("br", null),
                " ",
                React.createElement("span", { id: 'FX' }, "Fox Soluctions"),
                "!"),
            React.createElement("p", null,
                "Aqui n\u00F3s buscamos sempre dar a melhor",
                React.createElement("br", null),
                " experi\u00EAncia poss\u00EDvel para quem utiliza nossa plataforma,",
                React.createElement("br", null),
                " onde voc\u00EA pode realizar",
                React.createElement("br", null),
                " o upload e visualizar seus documentos!"),
            React.createElement(link_1["default"], { href: '/Page3' },
                React.createElement("button", { type: 'button', className: 'start' }, "Start")),
            React.createElement("img", { src: "/images/Stella.png", alt: "fox", className: 'fox' }))));
};
exports["default"] = PgInitial;
var templateObject_1;
