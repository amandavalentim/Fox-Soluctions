'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var Input_1 = require("../Forms/Input/Input");
var FormComponent2 = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    * {\n        box-sizing: border-box; \n        margin: 0px;\n        padding: 0px;\n    }\n\n    h1 {\n        font-size: 1.5em;\n        position: absolute;\n        top: -280px;\n        left: 73px;\n    }\n\n    #name {\n        position: absolute;\n        top: -170px;\n        left: 50px;\n    }\n\n    .box-container {\n        position: absolute;\n            top: 80%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 100%;\n            margin-top: -36px;\n    }\n\n\n"], ["\n\n    * {\n        box-sizing: border-box; \n        margin: 0px;\n        padding: 0px;\n    }\n\n    h1 {\n        font-size: 1.5em;\n        position: absolute;\n        top: -280px;\n        left: 73px;\n    }\n\n    #name {\n        position: absolute;\n        top: -170px;\n        left: 50px;\n    }\n\n    .box-container {\n        position: absolute;\n            top: 80%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 100%;\n            margin-top: -36px;\n    }\n\n\n"])));
var Form2 = function () {
    return (React.createElement(FormComponent2, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("div", { className: 'box-container' },
                React.createElement("form", null,
                    React.createElement("h1", null, "Criar Usu\u00E1rio"),
                    React.createElement("div", { className: 'name' },
                        React.createElement(Input_1["default"], { type: "string", name: "name", id: "name", placeholder: 'Nome Completo' })))))));
};
exports["default"] = Form2;
var templateObject_1;
