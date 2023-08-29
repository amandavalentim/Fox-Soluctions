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
var image_1 = require("next/image");
var ProfileComponents = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n    .mobile{ \n        padding: 20px;\n        .profile-photo{\n            display: grid;\n            text-align: center;\n            .photo{\n                margin: 15px;\n            }\n        }\n        h2{\n            color: #ffffff;\n            font-family: 'Roboto-Bold';\n            padding: 15px;\n        }\n        button{\n            background: #93B413;\n            border-radius: 20px;\n            width: 250px;\n            border: none;\n            color: #ffffff;\n            font-family:'Poppins-Regular';\n            padding: 10px;\n            margin: 6px;\n            font-size: 1.3em;\n        }\n    }\n"], ["\n    background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);\n    .mobile{ \n        padding: 20px;\n        .profile-photo{\n            display: grid;\n            text-align: center;\n            .photo{\n                margin: 15px;\n            }\n        }\n        h2{\n            color: #ffffff;\n            font-family: 'Roboto-Bold';\n            padding: 15px;\n        }\n        button{\n            background: #93B413;\n            border-radius: 20px;\n            width: 250px;\n            border: none;\n            color: #ffffff;\n            font-family:'Poppins-Regular';\n            padding: 10px;\n            margin: 6px;\n            font-size: 1.3em;\n        }\n    }\n"])));
var PgProfile = function () {
    return (React.createElement(ProfileComponents, null,
        React.createElement("div", { className: 'mobile' },
            React.createElement("div", { className: 'profile-photo' },
                React.createElement(link_1["default"], { href: "/" },
                    React.createElement(image_1["default"], { className: 'photo', src: "/images/profile-photo2.png", width: 100, height: 104, alt: "profile-photo" })),
                React.createElement("h2", null, "Seu Nome"),
                React.createElement(link_1["default"], { href: '/CreateUserPage' },
                    React.createElement("button", { className: 'add-user' },
                        React.createElement("p", { id: 'add-user-txt' }, "Adicionar usu\u00E1rio"))),
                React.createElement(link_1["default"], { href: '/ProfilePage' },
                    React.createElement("button", { className: 'users-list' },
                        React.createElement("p", { id: 'users-list-txt' }, "Lista de usu\u00E1rios"))),
                React.createElement(link_1["default"], { href: '/SettingsPage' },
                    React.createElement("button", { className: 'settings' },
                        React.createElement("p", { id: 'settings-txt' }, "Configura\u00E7\u00F5es"))),
                React.createElement(link_1["default"], { href: '/HomePage' },
                    React.createElement("button", { className: 'exit-button' },
                        React.createElement("p", { id: 'exit-txt' }, "Sair"))))),
        React.createElement("div", { className: "desktop" }))
    // <ProfileComponents>
    //     <nav className='mobile'>
    //         {/* Mobile content Form */}
    //         <div className='profile-photo'>
    //             {/* Profile Photo */}
    //             <Link href={"/"}>
    //                 <Image className='photo' src="/images/profile-photo2.png" width={100} height={104}  alt="profile-photo"/>
    //             </Link>
    //         <h2>Seu Nome</h2>
    //         <Link href={'/CreateUserPage'}>
    //             <button className='add-user'>
    //                 <p id='add-user-txt'>Adicionar usuário</p>
    //             </button>
    //         </Link>
    //         <Link href={'/ProfilePage'}>
    //             <button className='users-list'>
    //                 <p id='users-list-txt'>Lista de usuários</p>
    //             </button>
    //         </Link>
    //         <Link href={'/SettingsPage'}>
    //         <button className='settings'>
    //                 <p id='settings-txt'>Configurações</p>
    //             </button>
    //         </Link>
    //         <Link href={'/HomePage'}>
    //             <button className='exit-button'>
    //                 <p id='exit-txt'>Sair</p>
    //             </button>
    //         </Link>
    //         </div>
    //     </nav>
    //     <nav className='tablet'>
    //         {/* Menu options */}
    //         <div>
    //             <Link href={'/CreateUserPage'}>
    //                 <button className='add-user'>
    //                     <p id='add-user-txt'>Adicionar usuário</p>
    //                 </button>
    //             </Link>
    //         </div>
    //         <div>
    //             <Link href={'/ProfilePage'}>
    //                 <button className='users-list'>
    //                     <p id='users-list-txt'>Lista de usuários</p>
    //                 </button>
    //             </Link>
    //         </div>
    //         <div>
    //             <button className='settings'>
    //                 <p id='settings-txt'>Configurações</p>
    //             </button>
    //         </div>
    //         <div>
    //             <Link href={'/HomePage'}>
    //                 <button className='exit-button'>
    //                     <p id='exit-txt'>Sair</p>
    //                 </button>
    //             </Link>
    //         </div>
    //         {/* Form content Desktops and Tablets */}
    //         <div>
    //             {/* User data */}
    //             <p className='name'><span>Nome:</span> Seu Nome</p>
    //             <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
    //             <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
    //             <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
    //             <p className='country'><span>País:</span> Brasil</p>
    //             {/* Profile Photo */}
    //             <label>
    //             <span className='photo'>
    //                 <Image className='photo' src="/images/profile-photo2.png" width={100} height={104} alt="profile-photo"/>
    //                 <input type="file" id='photo-input'/>
    //             </span>
    //         </label>
    //         <button type='button' className='changePassword'>
    //             Alterar Senha
    //         </button>
    //         <button type='button' className='deleteAccount'>
    //             Excluir Conta
    //         </button>
    //         </div>
    //     </nav>
    //     <nav className='desktop1'>
    //         {/* Menu options */}
    //         <div>
    //             <Link href={'/CreateUserPage'}>
    //                 <button className='add-user'>
    //                     <p id='add-user-txt'>Adicionar usuário</p>
    //                 </button>
    //             </Link>
    //         </div>
    //         <div>
    //             <Link href={'/ProfilePage'}>
    //                     <button className='users-list'>
    //                         <p id='users-list-txt'>Lista de usuários</p>
    //                     </button>
    //             </Link>
    //         </div>
    //         <div>
    //             <button className='settings'>
    //                 <p id='settings-txt'>Configurações</p>
    //             </button>
    //         </div>
    //         <div>
    //             <Link href={'/HomePage'}>
    //                     <button className='exit-button'>
    //                         <p id='exit-txt'>Sair</p>
    //                     </button>
    //             </Link>
    //         </div>
    //         {/* Form content Desktops and Tablets */}
    //         <div>
    //             {/* User data */}
    //             <p className='name'><span>Nome:</span> Seu Nome</p>
    //             <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
    //             <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
    //             <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
    //             <p className='country'><span>País:</span> Brasil</p>
    //             {/* Profile Photo */}
    //             <label>
    //             <span className='photo'>
    //                 <Image className='photo' src="/images/profile-photo2.png" width={100} height={104} alt="profile-photo"/>
    //                 <input type="file" id='photo-input'/>
    //             </span>
    //         </label>
    //         <button type='button' className='changePassword'>
    //             Alterar Senha
    //         </button>
    //         <button type='button' className='deleteAccount'>
    //             Excluir Conta
    //         </button>
    //         </div>
    //     </nav>
    //     <nav className='desktop2'>
    //         {/* Menu options */}
    //         <div>
    //             <Link href={'/CreateUserPage'}>
    //                     <button className='add-user'>
    //                         <p id='add-user-txt'>Adicionar usuário</p>
    //                     </button>
    //             </Link>
    //         </div>
    //         <div>
    //             <Link href={'/ProfilePage'}>
    //                         <button className='users-list'>
    //                             <p id='users-list-txt'>Lista de usuários</p>
    //                         </button>
    //             </Link>
    //         </div>
    //         <div>
    //             <button className='settings'>
    //                 <p id='settings-txt'>Configurações</p>
    //             </button>
    //         </div>
    //         <div>
    //             <Link href={'/HomePage'}>
    //                 <button className='exit-button'>
    //                     <p id='exit-txt'>Sair</p>
    //                 </button>
    //             </Link>
    //         </div>
    //         {/* Form content Desktops and Tablets */}
    //         <div>
    //             {/* User data */}
    //             <p className='name'><span>Nome:</span> Seu Nome</p>
    //             <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
    //             <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
    //             <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
    //             <p className='country'><span>País:</span> Brasil</p>
    //             {/* Profile Photo */}
    //             <label>
    //             <span className='photo'>
    //                 <Image className='photo' src="/images/profile-photo2.png" width={100} height={104} alt="profile-photo"/>
    //                 <input type="file" id='photo-input'/>
    //             </span>
    //         </label>
    //         <button type='button' className='changePassword'>
    //             Alterar Senha
    //         </button>
    //         <button type='button' className='deleteAccount'>
    //             Excluir Conta
    //         </button>
    //         </div>
    //     </nav>
    //     <nav className='desktop3'>
    //         {/* Menu options */}
    //         <div>
    //             <Link href={'/CreateUserPage'}>
    //                         <button className='add-user'>
    //                             <p id='add-user-txt'>Adicionar usuário</p>
    //                         </button>
    //             </Link>
    //         </div>
    //         <div>
    //             <Link href={'/ProfilePage'}>
    //                 <button className='users-list'>
    //                     <p id='users-list-txt'>Lista de usuários</p>
    //                 </button>
    //             </Link>
    //         </div>
    //         <div>
    //             <button className='settings'>
    //                 <p id='settings-txt'>Configurações</p>
    //             </button>
    //         </div>
    //         <div>
    //             <Link href={'/HomePage'}>
    //                         <button className='exit-button'>
    //                             <p id='exit-txt'>Sair</p>
    //                         </button>
    //             </Link>
    //         </div>
    //         {/* Form content Desktops and Tablets */}
    //         <div>
    //             {/* User data */}
    //             <p className='name'><span>Nome:</span> Seu Nome</p>
    //             <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
    //             <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
    //             <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
    //             <p className='country'><span>País:</span> Brasil</p>
    //             {/* Profile Photo */}
    //             <label>
    //                 <span className='photo'>
    //                     <Image className='photo' src="/images/profile-photo2.png" width={100} height={104} alt="profile-photo"/>
    //                     <input type="file" id='photo-input'/>
    //                 </span>
    //             </label>
    //             <button type='button' className='changePassword'>
    //                 Alterar Senha
    //             </button>
    //             <button type='button' className='deleteAccount'>
    //                 Excluir Conta
    //             </button>
    //         </div>
    //     </nav>
    // </ProfileComponents>
    );
};
exports["default"] = PgProfile;
var templateObject_1;
