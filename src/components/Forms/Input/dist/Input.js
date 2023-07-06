"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_1 = require("@emotion/styled");
var InputField = styled_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border: none;\n      width: 250px;\n      border-bottom: 1px solid #FFFF;\n      background-color: rgba(7, 179, 253, 0);\n      justify-content: center;\n      align-items: center;\n      padding-bottom: 20px;\n      outline: none;\n      color: #FFF;\n      font-family: 'Poppins-Medium';\n\n&::placeholder{\n      font-size: 15px;\n      color: #FFFF;\n}\n&:focus{\n      border-bottom: 3px solid #93B413;\n\n}\n\n@media (min-width: 768px){\n      width: 305px;\n\n}\n\n@media (min-width: 992px){\n      width: 325px;\n      border-bottom: 2px solid #FFFF;\n                \n}\n\n@media (min-width:1200px){\n      width: 310px;\n}\n\n"], ["\n      border: none;\n      width: 250px;\n      border-bottom: 1px solid #FFFF;\n      background-color: rgba(7, 179, 253, 0);\n      justify-content: center;\n      align-items: center;\n      padding-bottom: 20px;\n      outline: none;\n      color: #FFF;\n      font-family: 'Poppins-Medium';\n\n&::placeholder{\n      font-size: 15px;\n      color: #FFFF;\n}\n&:focus{\n      border-bottom: 3px solid #93B413;\n\n}\n\n@media (min-width: 768px){\n      width: 305px;\n\n}\n\n@media (min-width: 992px){\n      width: 325px;\n      border-bottom: 2px solid #FFFF;\n                \n}\n\n@media (min-width:1200px){\n      width: 310px;\n}\n\n"])));
function Input(props) {
    return (react_1["default"].createElement(InputField, { type: props.type, name: props.name, id: props.id, placeholder: props.placeholder, value: props.value ? props.value : '' }));
}
exports["default"] = Input;
var templateObject_1;
