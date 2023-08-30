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
var ProfileComponents = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n    .profile-mobile{\n        padding: 20%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        .menu{\n            .menu-btn{\n                text-align:center;\n                background: #93B413;\n                margin: 10px;\n                padding: 5px;\n                width: 250px;\n                border-radius: 20px;\n                color: #ffffff;\n                font-family: 'Poppins-Regular';\n                font-size: 1.3em;\n            }\n        }\n    }\n    \n    .profile-desktop{\n        display: none;\n    }\n\n    @media(min-width: 992px){\n        width: 500px;\n        height: 80vh;\n        padding: 4%;\n        .profile-desktop{\n            display: flex;\n            .menu-btn-desktop{\n                font-size: 1.6em;\n                text-align:center;\n                margin: 50px;\n                padding: 10px;\n                width: 270px;\n                cursor: pointer;\n            }\n            .menu-btn-desktop:hover{\n                background: #93B413;\n                border-radius: 20px;\n            }\n        }\n        .profile-mobile{\n            display: none;\n        }\n    }\n\n"], ["\n    background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n    .profile-mobile{\n        padding: 20%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        .menu{\n            .menu-btn{\n                text-align:center;\n                background: #93B413;\n                margin: 10px;\n                padding: 5px;\n                width: 250px;\n                border-radius: 20px;\n                color: #ffffff;\n                font-family: 'Poppins-Regular';\n                font-size: 1.3em;\n            }\n        }\n    }\n    \n    .profile-desktop{\n        display: none;\n    }\n\n    @media(min-width: 992px){\n        width: 500px;\n        height: 80vh;\n        padding: 4%;\n        .profile-desktop{\n            display: flex;\n            .menu-btn-desktop{\n                font-size: 1.6em;\n                text-align:center;\n                margin: 50px;\n                padding: 10px;\n                width: 270px;\n                cursor: pointer;\n            }\n            .menu-btn-desktop:hover{\n                background: #93B413;\n                border-radius: 20px;\n            }\n        }\n        .profile-mobile{\n            display: none;\n        }\n    }\n\n"])));
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
                    React.createElement(link_1["default"], { href: '/HomePage', className: 'exit' }, "Sair"))))));
};
exports["default"] = PgProfile;
{ /* <Link href={'/HomePage'}>
                        <button className='exit-button'>
                            <p id='exit-txt'>Sair</p>
                        </button>
                    </Link> */
}
var templateObject_1;
