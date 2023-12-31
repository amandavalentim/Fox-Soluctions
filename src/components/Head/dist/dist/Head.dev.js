//Código desenvolvido por Gustavo Otacílio
'use client';
"use strict";

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var _a;

exports.__esModule = true;

var styled_1 = require("@emotion/styled");

var image_1 = require("next/image");

var fa_1 = require("react-icons/fa");

var Ai_1 = require("react-icons/Ai");

var HeadComponent = styled_1["default"].head(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);\n    height: 170px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n\n    .hide-on-mobile {\n        display: none;\n    }\n\n    /* .show-on-mobile {\n        display: flex;\n        justify-content: space-between;\n    } */\n\n    .faBars {\n        width: 30px;\n        height: 30px;\n        color: #fff;\n        position: absolute;\n        top: 50%;\n        left: 88%;\n        transform: translate(-50%, -50%);\n    }\n\n    .logo-Fox {\n        position: absolute;\n        top: 5px;\n        left: 100px;\n        top: 40%;\n        left: 48%;\n        transform: translate(-50%, -50%);\n    }\n\n    .nameLogo {\n        font-size: 1em;\n        position: absolute;\n        top: 80%;\n        left: 48%;\n        transform: translate(-50%, -50%);\n        color: white;\n        font-family: 'Roboto-Medium';\n    }\n\n    .show-on-mobile .open-menu {\n        display: block;\n        font-size: 2em;\n        padding: .9rem;\n        flex: 1;\n        background: none;\n        border: none;\n        color: #fff;\n    }\n\n    .show-on-mobile Ul {\n        display: block;\n        position: fixed;\n        top: 0;\n        right: -80vw;\n        width: 80vw;\n        height: 100vh;\n        background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);\n        z-index: 2;\n        margin: 0;\n        transition: right .2s linear;\n    }\n\n    .show-on-mobile.open Ul {\n        right: 0;\n    }\n    .show-on-mobile.open a {\n        color: #fff;\n        padding: 20px;\n        display: block;\n        font-weight: 100;\n        border-bottom: #93B413 1px solid;\n        width: 200px;\n    }\n    .show-on-mobile.open .backdrop {\n        opacity: .5;\n        display: block;\n    }\n    .show-on-mobile .backdrop {\n        opacity: 0;\n        background-color: #000;\n        transition: opacity .15s linear;\n        position: fixed;\n        width: 100%;\n        height: 100vh;\n        z-index: 1;\n        left: 0;\n        top: 0;\n    }\n    .show-on-mobile .close-menu {\n        display: block;\n        text-align: right;\n        background-color: #0081E8;\n        width: 100%;\n    }\n    .show-on-mobile .close-menu button {\n        background: none;\n        border: none;\n        font-size: 2em;\n        padding: .75rem 1rem;\n    }\n    .txt-close {\n        position: absolute;\n        left: 10px;\n        top: 10px;\n    }\n\n    @media (min-width: 768px) {\n\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 500px;\n        }\n        /* .hide-on-mobile ul {\n            position: absolute;\n        } */\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .logo-Fox {\n            position: absolute;\n            top: 45%;\n            left: 10%;\n        }\n\n        .nameLogo {\n            font-size: 1em;\n            position: absolute;\n            left: 10%;\n            top: 85%;\n            color: white;\n            font-family: 'Roboto-Medium';\n        }\n    }\n\n    @media (min-width: 922px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 740px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }      \n    }\n\n    @media (min-width: 1200px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1070px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n\n    @media (min-width: 1600px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1295px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n"], ["\n    position: relative;\n    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);\n    height: 170px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n\n    .hide-on-mobile {\n        display: none;\n    }\n\n    /* .show-on-mobile {\n        display: flex;\n        justify-content: space-between;\n    } */\n\n    .faBars {\n        width: 30px;\n        height: 30px;\n        color: #fff;\n        position: absolute;\n        top: 50%;\n        left: 88%;\n        transform: translate(-50%, -50%);\n    }\n\n    .logo-Fox {\n        position: absolute;\n        top: 5px;\n        left: 100px;\n        top: 40%;\n        left: 48%;\n        transform: translate(-50%, -50%);\n    }\n\n    .nameLogo {\n        font-size: 1em;\n        position: absolute;\n        top: 80%;\n        left: 48%;\n        transform: translate(-50%, -50%);\n        color: white;\n        font-family: 'Roboto-Medium';\n    }\n\n    .show-on-mobile .open-menu {\n        display: block;\n        font-size: 2em;\n        padding: .9rem;\n        flex: 1;\n        background: none;\n        border: none;\n        color: #fff;\n    }\n\n    .show-on-mobile Ul {\n        display: block;\n        position: fixed;\n        top: 0;\n        right: -80vw;\n        width: 80vw;\n        height: 100vh;\n        background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);\n        z-index: 2;\n        margin: 0;\n        transition: right .2s linear;\n    }\n\n    .show-on-mobile.open Ul {\n        right: 0;\n    }\n    .show-on-mobile.open a {\n        color: #fff;\n        padding: 20px;\n        display: block;\n        font-weight: 100;\n        border-bottom: #93B413 1px solid;\n        width: 200px;\n    }\n    .show-on-mobile.open .backdrop {\n        opacity: .5;\n        display: block;\n    }\n    .show-on-mobile .backdrop {\n        opacity: 0;\n        background-color: #000;\n        transition: opacity .15s linear;\n        position: fixed;\n        width: 100%;\n        height: 100vh;\n        z-index: 1;\n        left: 0;\n        top: 0;\n    }\n    .show-on-mobile .close-menu {\n        display: block;\n        text-align: right;\n        background-color: #0081E8;\n        width: 100%;\n    }\n    .show-on-mobile .close-menu button {\n        background: none;\n        border: none;\n        font-size: 2em;\n        padding: .75rem 1rem;\n    }\n    .txt-close {\n        position: absolute;\n        left: 10px;\n        top: 10px;\n    }\n\n    @media (min-width: 768px) {\n\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 500px;\n        }\n        /* .hide-on-mobile ul {\n            position: absolute;\n        } */\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .logo-Fox {\n            position: absolute;\n            top: 45%;\n            left: 10%;\n        }\n\n        .nameLogo {\n            font-size: 1em;\n            position: absolute;\n            left: 10%;\n            top: 85%;\n            color: white;\n            font-family: 'Roboto-Medium';\n        }\n    }\n\n    @media (min-width: 922px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 740px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }      \n    }\n\n    @media (min-width: 1200px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1070px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n\n    @media (min-width: 1600px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1295px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n"])));
var Ul = styled_1["default"].ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    list-style: none; \n    li {\n        width: 100px;\n        color: white;\n        font-family: 'Poppins-Medium';\n    }\n"], ["\n    display: flex;\n    list-style: none; \n    li {\n        width: 100px;\n        color: white;\n        font-family: 'Poppins-Medium';\n    }\n"])));
(_a = document.querySelector('.show-on-mobile')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
  var _a;

  (_a = document.querySelector('.show-on-mobile')) === null || _a === void 0 ? void 0 : _a.classList.add('open');
});

var Head = function Head() {
  return React.createElement(HeadComponent, null, React.createElement("nav", {
    className: 'header'
  }, React.createElement("a", {
    href: "/"
  }, React.createElement(image_1["default"], {
    className: 'logo-Fox',
    src: "/images/logo-fox1.svg",
    width: 100,
    height: 104,
    alt: "logo"
  })), React.createElement("div", {
    className: 'nameLogo'
  }, "Fox Soluctions")), React.createElement("nav", {
    className: 'show-on-mobile'
  }, React.createElement("button", {
    className: 'open-menu'
  }, React.createElement(fa_1.FaBars, {
    className: 'faBars'
  })), React.createElement("nav", {
    className: 'show-on-mobile'
  }, React.createElement("button", {
    type: "button",
    className: 'open-menu'
  }, React.createElement(fa_1.FaBars, {
    className: 'faBars'
  })), React.createElement(Ul, null, React.createElement("li", {
    className: 'close-menu'
  }, React.createElement("button", {
    type: 'button'
  }, React.createElement(Ai_1.AiOutlineClose, {
    className: 'closeAi'
  }))), React.createElement("li", null, React.createElement("a", {
    href: "/"
  }, "Home")), React.createElement("li", null, React.createElement("a", {
    href: "/"
  }, "Documentos")), React.createElement("li", null, React.createElement("a", {
    href: "/"
  }, "Sobre N\xF3s")))), React.createElement("nav", {
    className: 'hide-on-mobile'
  }, React.createElement("div", null, React.createElement(Ul, null, React.createElement("li", {
    id: 'home'
  }, "Home"), React.createElement("li", {
    id: 'documents'
  }, "Documentos"))))));
};

exports["default"] = Head;
var templateObject_1, templateObject_2;