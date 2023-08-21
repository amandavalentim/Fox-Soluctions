// Developed code by Gabriel
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var link_1 = require("next/link");
var ProfileComponents = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    // Mobile\n\n    height: 100vh;\n\n    background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n\n    * {\n        color: white;\n    }\n\n    #photo-input {\n        display: none;\n    }\n\n    .profile-photo {\n        padding-top: 13%;\n        margin-left: 35%;\n    }\n\n    h2 {\n        margin-top: 5%;\n        margin-left: -10%;\n    }\n\n    .add-user {\n        font-size: 1.4em;\n        font-family: 'Poppins-Medium';\n        margin-top: 25%;\n        margin-left: -40%;\n    }\n\n    .users-list {\n        font-size: 1.4em;\n        font-family: 'Poppins-Medium';\n        margin-top: 20%;\n        margin-left: -40%;\n    }\n\n    .settings {\n        font-size: 1.4em;\n        font-family: 'Poppins-Medium';\n        margin-top: 20%;\n        margin-left: -40%;\n    }\n\n    .exit {\n        font-size: 1.4em;\n        font-family: 'Poppins-Medium';\n        margin-top: 20%;\n        margin-left: -40%;\n    }\n\n"], ["\n\n    // Mobile\n\n    height: 100vh;\n\n    background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n\n    * {\n        color: white;\n    }\n\n    #photo-input {\n        display: none;\n    }\n\n    .profile-photo {\n        padding-top: 13%;\n        margin-left: 35%;\n    }\n\n    h2 {\n        margin-top: 5%;\n        margin-left: -10%;\n    }\n\n    .add-user {\n        font-size: 1.4em;\n        font-family: 'Poppins-Medium';\n        margin-top: 25%;\n        margin-left: -40%;\n    }\n\n    .users-list {\n        font-size: 1.4em;\n        font-family: 'Poppins-Medium';\n        margin-top: 20%;\n        margin-left: -40%;\n    }\n\n    .settings {\n        font-size: 1.4em;\n        font-family: 'Poppins-Medium';\n        margin-top: 20%;\n        margin-left: -40%;\n    }\n\n    .exit {\n        font-size: 1.4em;\n        font-family: 'Poppins-Medium';\n        margin-top: 20%;\n        margin-left: -40%;\n    }\n\n"])));
var PgProfile = function () {
    return (React.createElement(ProfileComponents, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("form", { className: 'profile-photo' },
                React.createElement("label", null,
                    React.createElement("span", { className: 'photo' },
                        "a",
                        React.createElement("input", { type: "file", id: 'photo-input' }))),
                React.createElement("h2", null, "Your Name"),
                React.createElement(link_1["default"], { href: '/ProfilePage' },
                    React.createElement("p", { className: 'add-user' }, "Adicionar usu\u00E1rio")),
                React.createElement(link_1["default"], { href: '/ProfilePage' },
                    React.createElement("p", { className: 'users-list' }, "Lista de usu\u00E1rios")),
                React.createElement(link_1["default"], { href: '/ProfilePage' },
                    React.createElement("p", { className: 'settings' }, "Configura\u00E7\u00F5es")),
                React.createElement(link_1["default"], { href: '/HomePage' },
                    React.createElement("p", { className: 'exit' }, "Sair"))))));
};
exports["default"] = PgProfile;
var templateObject_1;
