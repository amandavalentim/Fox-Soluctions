// Developed code by 
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var link_1 = require("next/link");
//mobile and tablet
var ProfileComponents = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: #2F99BF;\n    .profile-mobile{\n        padding: 20%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n        .menu{\n            .menu-btn{\n                text-align:center;\n                background: #93B413;\n                margin: 10px;\n                padding: 5px;\n                width: 250px;\n                border-radius: 20px;\n                color: #ffffff;\n                font-family: 'Poppins-Regular';\n                font-size: 1.3em;\n            }\n        }\n    }\n    \n    .profile-desktop{\n        display: none;\n    }\n\n    //Desktop\n    @media(min-width: 992px){\n        \n        .profile-desktop{\n            display: flex;\n            .menu-desktop{\n                background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n                .menu-btn-desktop{\n                font-size: 1.6em;\n                text-align:center;\n                margin: 50px;\n                padding: 10px;\n                width: 270px;\n                color: #ffffff;\n                font-family: 'Poppins-Regular';\n                cursor: pointer;\n                }\n                .menu-btn-desktop:hover{\n                background: #93B413;\n                border-radius: 20px;\n                }\n            }\n            .container-settings{\n                margin: 5%;\n                font-size: 1.4em;\n                .box-container{\n                    width: 150%;\n                    color: #ffffff;\n                    font-family: 'poppins-Light';\n                    margin: 15px;\n                    span{\n                        font-family: 'poppins-Medium';\n                    }\n                }\n                .settings-btn{\n                    display: flex;\n                    color: #ffffff;\n                    .change-password{\n                        background: #93B413;\n                        padding: 10px;\n                        border-radius: 20px;\n                        justify-content: space-around;\n                    }\n                    .Delete{\n                        background: #FF0000;\n                        padding: 10px;\n                        border-radius: 20px; \n                    }\n                }\n            }\n        }\n        .profile-mobile{\n            display: none;\n        }\n    }\n\n"], ["\n    background: #2F99BF;\n    .profile-mobile{\n        padding: 20%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n        .menu{\n            .menu-btn{\n                text-align:center;\n                background: #93B413;\n                margin: 10px;\n                padding: 5px;\n                width: 250px;\n                border-radius: 20px;\n                color: #ffffff;\n                font-family: 'Poppins-Regular';\n                font-size: 1.3em;\n            }\n        }\n    }\n    \n    .profile-desktop{\n        display: none;\n    }\n\n    //Desktop\n    @media(min-width: 992px){\n        \n        .profile-desktop{\n            display: flex;\n            .menu-desktop{\n                background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n                .menu-btn-desktop{\n                font-size: 1.6em;\n                text-align:center;\n                margin: 50px;\n                padding: 10px;\n                width: 270px;\n                color: #ffffff;\n                font-family: 'Poppins-Regular';\n                cursor: pointer;\n                }\n                .menu-btn-desktop:hover{\n                background: #93B413;\n                border-radius: 20px;\n                }\n            }\n            .container-settings{\n                margin: 5%;\n                font-size: 1.4em;\n                .box-container{\n                    width: 150%;\n                    color: #ffffff;\n                    font-family: 'poppins-Light';\n                    margin: 15px;\n                    span{\n                        font-family: 'poppins-Medium';\n                    }\n                }\n                .settings-btn{\n                    display: flex;\n                    color: #ffffff;\n                    .change-password{\n                        background: #93B413;\n                        padding: 10px;\n                        border-radius: 20px;\n                        justify-content: space-around;\n                    }\n                    .Delete{\n                        background: #FF0000;\n                        padding: 10px;\n                        border-radius: 20px; \n                    }\n                }\n            }\n        }\n        .profile-mobile{\n            display: none;\n        }\n    }\n\n"])));
var PgProfile = function () {
    return (React.createElement(ProfileComponents, null,
        React.createElement("nav", { className: 'profile-mobile' },
            React.createElement("div", { className: 'menu' },
                React.createElement("div", { className: 'menu-btn' },
                    React.createElement(link_1["default"], { href: '/CreateUserPage', className: 'create-user' }, "Criar Usu\u00E1rio")),
                React.createElement("div", { className: 'menu-btn' },
                    React.createElement(link_1["default"], { href: '/HomePage', className: 'user-list' }, "Lista de Usu\u00E1rios")),
                React.createElement("div", { className: 'menu-btn' },
                    React.createElement(link_1["default"], { href: '/', className: 'settings' }, "Configura\u00E7\u00F5es")),
                React.createElement("div", { className: 'menu-btn' },
                    React.createElement(link_1["default"], { href: '/HomePage', className: 'exit' }, "Sair")))),
        React.createElement("nav", { className: 'profile-desktop' },
            React.createElement("div", { className: 'menu-desktop' },
                React.createElement("div", { className: 'menu-btn-desktop' },
                    React.createElement(link_1["default"], { href: '/CreateUserPage', className: 'create-user' }, "Criar Usu\u00E1rio")),
                React.createElement("div", { className: 'menu-btn-desktop' },
                    React.createElement(link_1["default"], { href: '/HomePage', className: 'user-list' }, "Lista de Usu\u00E1rios")),
                React.createElement("div", { className: 'menu-btn-desktop' },
                    React.createElement(link_1["default"], { href: '/', className: 'settings' }, "Configura\u00E7\u00F5es")),
                React.createElement("div", { className: 'menu-btn-desktop' },
                    React.createElement(link_1["default"], { href: '/HomePage', className: 'exit' }, "Sair"))),
            React.createElement("div", { className: "container-settings" },
                React.createElement("p", { className: 'box-container' },
                    React.createElement("span", null, "Nome: "),
                    "Usu\u00E1rio Fulano De Tal"),
                React.createElement("p", { className: 'box-container' },
                    React.createElement("span", null, "E-mail: "),
                    "fulanodetal@gmail.com"),
                React.createElement("p", { className: 'box-container' },
                    React.createElement("span", null, "Nascimento: "),
                    "19/07/1995"),
                React.createElement("p", { className: 'box-container' },
                    React.createElement("span", null, "CPF: "),
                    "000.000.000-00"),
                React.createElement("p", { className: 'box-container' },
                    React.createElement("span", null, "Pa\u00EDs: "),
                    "Brasil"),
                React.createElement("div", { className: 'settings-btn' },
                    React.createElement("div", { className: 'password-btn' },
                        React.createElement(link_1["default"], { href: '/NewPasswordPage', className: 'change-password' }, "Alterar Senha")),
                    React.createElement("div", { className: 'delete-btn' },
                        React.createElement(link_1["default"], { href: '/', className: 'Delete' }, "Excluir Conta")))))));
};
exports["default"] = PgProfile;
var templateObject_1;
