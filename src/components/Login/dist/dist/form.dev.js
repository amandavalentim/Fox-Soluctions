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

exports.__esModule = true;

var styled_1 = require("@emotion/styled");

var Input_1 = require("./Input/Input");

var FormComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    * {\n        box-sizing: border-box;    \n    }\n   \n    form {\n        position: absolute;\n        top: 80%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        .title {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-family: 'poppins-bold';\n            font-size: 2em;\n            color: #ffff;\n            position: absolute;\n            top: -30%;\n            left: 36%;\n        }         \n\n        .forget {\n            padding: 0px 0px 0px 10px;\n            text-align: center;\n            font-size: 1em;\n            color: #F47216;\n            cursor: pointer;\n        }\n        .create_account {\n            padding-top: 15px;\n            text-align: center;\n            font-size: 1em;\n            color: #FFFF;\n            cursor: pointer;\n            span {\n                color: #F47216;\n            }\n        }\n        .enter {\n            border-style: none;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-top: 50px;\n            .submit {\n                border: none;\n                background-color: #93B413;\n                color: #FFFF;\n                border-radius: 20px;\n                width: 150px;\n                height: 40px;\n                font-family: 'poppins-medium';\n                font-size: 20px;\n                cursor: pointer;\n            }\n            .submit:hover {\n                background-color: #9fc214;\n            }\n        }\n    }\n    \n\n    @media (min-width: 768px) {\n        /* .hide-on-desktop {\n            display: none;\n        } */\n\n        .box-container {\n            position: absolute;\n            top: 80%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 100%;\n            form {\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n                width: 60%;\n                height: 80vh;\n                padding: 100px 0px 0px 0px;\n                .title {\n                    position: absolute;\n                    top: 10%;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                }             \n            }\n        }\n    }\n\n    @media (min-width: 992px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .box-container {\n            top: 75%;\n        }\n    }\n\n    @media (min-width:1200px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .box-container {\n            top: 73%;  \n        }\n    }\n\n    @media (min-width: 1600px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .forget {\n            font-size: 1000px;\n        }\n        .create_account {\n            padding-top: 15px;\n        }\n        .enter {\n            border-style: none;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-top: 50px;\n            .submit {\n                border: none;\n                background-color: #93B413;\n                color: #FFFF;\n                border-radius: 20px;\n                width: 150px;\n                height: 40px;\n                font-family: 'poppins-medium';\n                font-size: 3em;\n            }\n        }\n    }\n"], ["\n\n    * {\n        box-sizing: border-box;    \n    }\n   \n    form {\n        position: absolute;\n        top: 80%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        .title {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-family: 'poppins-bold';\n            font-size: 2em;\n            color: #ffff;\n            position: absolute;\n            top: -30%;\n            left: 36%;\n        }         \n\n        .forget {\n            padding: 0px 0px 0px 10px;\n            text-align: center;\n            font-size: 1em;\n            color: #F47216;\n            cursor: pointer;\n        }\n        .create_account {\n            padding-top: 15px;\n            text-align: center;\n            font-size: 1em;\n            color: #FFFF;\n            cursor: pointer;\n            span {\n                color: #F47216;\n            }\n        }\n        .enter {\n            border-style: none;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-top: 50px;\n            .submit {\n                border: none;\n                background-color: #93B413;\n                color: #FFFF;\n                border-radius: 20px;\n                width: 150px;\n                height: 40px;\n                font-family: 'poppins-medium';\n                font-size: 20px;\n                cursor: pointer;\n            }\n            .submit:hover {\n                background-color: #9fc214;\n            }\n        }\n    }\n    \n\n    @media (min-width: 768px) {\n        /* .hide-on-desktop {\n            display: none;\n        } */\n\n        .box-container {\n            position: absolute;\n            top: 80%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 100%;\n            form {\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n                width: 60%;\n                height: 80vh;\n                padding: 100px 0px 0px 0px;\n                .title {\n                    position: absolute;\n                    top: 10%;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                }             \n            }\n        }\n    }\n\n    @media (min-width: 992px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .box-container {\n            top: 75%;\n        }\n    }\n\n    @media (min-width:1200px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .box-container {\n            top: 73%;  \n        }\n    }\n\n    @media (min-width: 1600px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .forget {\n            font-size: 1000px;\n        }\n        .create_account {\n            padding-top: 15px;\n        }\n        .enter {\n            border-style: none;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-top: 50px;\n            .submit {\n                border: none;\n                background-color: #93B413;\n                color: #FFFF;\n                border-radius: 20px;\n                width: 150px;\n                height: 40px;\n                font-family: 'poppins-medium';\n                font-size: 3em;\n            }\n        }\n    }\n"])));

var Form = function Form() {
  return React.createElement(FormComponent, null, React.createElement("nav", {
    className: 'hide-on-desktop'
  }, React.createElement("div", {
    className: 'box-container'
  }, React.createElement("form", null, React.createElement("h1", {
    className: 'title'
  }, "Login"), React.createElement("div", {
    className: 'login'
  }, React.createElement(Input_1["default"], {
    type: "email",
    name: "e-mail",
    id: "e-mail",
    placeholder: 'E-mail'
  })), React.createElement("div", {
    className: 'login'
  }, React.createElement(Input_1["default"], {
    type: "password",
    name: "password",
    id: "password",
    placeholder: 'Senha'
  })), React.createElement("div", {
    className: 'forget'
  }, React.createElement("h4", null, React.createElement("span", {
    className: 'orange'
  }, "Esqueceu a senha?"))), React.createElement("div", {
    className: 'create_account'
  }, React.createElement("h4", null, "N\xE3o tem uma conta? ", React.createElement("span", {
    className: 'orange'
  }, "Crie uma"))), React.createElement("div", {
    className: 'enter'
  }, React.createElement("button", {
    className: 'submit'
  }, "Entrar"))))));
};

exports["default"] = Form;
var templateObject_1;