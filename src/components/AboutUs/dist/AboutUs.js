'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var react_1 = require("react");
require("bootstrap/dist/css/bootstrap.css");
var Carousel_1 = require("react-bootstrap/Carousel");
var AboutUsComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: #0A53B5;\n\n\n"], ["\n    background-color: #0A53B5;\n\n\n"])));
var AboutUs = function () {
    return (react_1["default"].createElement(AboutUsComponent, null,
        react_1["default"].createElement("div", { className: 'container-about-us' },
            react_1["default"].createElement("h3", null, "Sobre N\u00F3s"),
            react_1["default"].createElement("div", { className: 'content-center' },
                react_1["default"].createElement("p", null, "A Fox Soluctions foi fundada no ano de 2023 e foi desenvolvida para facilitar e auxiliar Pessoas que utilizam nossa plataforma a realizarem o upload e a visualiza\u00E7\u00E3o de documentos de maneira pr\u00E1tica, com o objetivo de inovar e trazer criatividade em sua identidade visual."))),
        react_1["default"].createElement("div", { className: "container-company" },
            react_1["default"].createElement(Carousel_1["default"], null,
                react_1["default"].createElement(Carousel_1["default"].Item, null,
                    react_1["default"].createElement("h3", null, "Miss\u00E3o"),
                    react_1["default"].createElement("div", { className: 'mission-card' },
                        react_1["default"].createElement("p", null, "Facilitar o cotidiano de Pessoas, sendo um sistema intuitivo e com o objetivo de favorecer a  sustentabilidade, diminuindo o uso de pap\u00E9is f\u00EDsicos"))),
                react_1["default"].createElement(Carousel_1["default"].Item, null,
                    react_1["default"].createElement("h3", null, "Vis\u00E3o"),
                    react_1["default"].createElement("div", { className: 'vision-card' },
                        react_1["default"].createElement("p", null, "Conseguir atingir o m\u00E1ximo de Pessoas poss\u00EDveis e ser uma das principais plataformas, a ser utilizada por grandes empresas"))),
                react_1["default"].createElement(Carousel_1["default"].Item, null,
                    react_1["default"].createElement("h3", null, "Valores"),
                    react_1["default"].createElement("div", { className: 'worth-card' },
                        react_1["default"].createElement("p", null, "Inova\u00E7\u00E3o"),
                        react_1["default"].createElement("p", null, "Criatividade"),
                        react_1["default"].createElement("p", null, "Respeito a natureza"),
                        react_1["default"].createElement("p", null, "Respeito a diversidade"))))),
        react_1["default"].createElement("div", { className: 'container-visual-identity' },
            react_1["default"].createElement("div", { className: "container-why-the-fox" },
                react_1["default"].createElement("h3", null, "Por que a Raposa?"),
                react_1["default"].createElement("p", null, "Escolhemos a raposa como representa\u00E7\u00E3o da nossa plataforma, pois este animal possui o s\u00EDmbolo de criatividade, intelig\u00EAncia e solu\u00E7\u00E3o de problemas. O que queremos transparecer em nosso sistema.")),
            react_1["default"].createElement("div", { className: "color-palette" },
                react_1["default"].createElement("h3", null, "Nossa Paleta de cores: "),
                react_1["default"].createElement("img", { src: "/../images/paleta-de-cores.png", alt: "" }))),
        react_1["default"].createElement("div", { className: "container-developers" },
            react_1["default"].createElement("h3", null, "Desenvolvedores"),
            react_1["default"].createElement(Carousel_1["default"], null,
                react_1["default"].createElement(Carousel_1["default"].Item, null,
                    react_1["default"].createElement("h3", null, "Amanda Valentim"),
                    react_1["default"].createElement("div", { className: 'amanda-card' },
                        react_1["default"].createElement("p", null, "Facilitar o cotidiano de Pessoas, sendo um sistema intuitivo e com o objetivo de favorecer a  sustentabilidade, diminuindo o uso de pap\u00E9is f\u00EDsicos"))),
                react_1["default"].createElement(Carousel_1["default"].Item, null,
                    react_1["default"].createElement("h3", null, "Gustavo Otac\u00EDlio"),
                    react_1["default"].createElement("div", { className: 'gustavo-card' },
                        react_1["default"].createElement("p", null, "Conseguir atingir o m\u00E1ximo de Pessoas poss\u00EDveis e ser uma das principais plataformas, a ser utilizada por grandes empresas"))),
                react_1["default"].createElement(Carousel_1["default"].Item, null,
                    react_1["default"].createElement("h3", null, "Gabriel Correia"),
                    react_1["default"].createElement("div", { className: 'gabriel-card' },
                        react_1["default"].createElement("p", null, "Inova\u00E7\u00E3o")))))));
};
exports["default"] = AboutUs;
var templateObject_1;
