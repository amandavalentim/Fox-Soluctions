// Developed code by Gabriel

'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Login/Input/Input';
import Image from 'next/image';

const ProfileComponents = styled.section `
    background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);
    .mobile{ 
        padding: 20px;
        .profile-photo{
            display: grid;
            text-align: center;
            .photo{
                margin: 15px;
            }
        }
        h2{
            color: #ffffff;
            font-family: 'Roboto-Bold';
            padding: 15px;
        }
        button{
            background: #93B413;
            border-radius: 20px;
            width: 250px;
            border: none;
            color: #ffffff;
            font-family:'Poppins-Regular';
            padding: 10px;
            margin: 6px;
            font-size: 1.3em;
        }
    }
`;

const PgProfile = function() {
    return (
        <ProfileComponents>
            {/* Section Mobile */}
            <div className='mobile'>
                <div className='profile-photo'>
                    {/* Profile Photo */}
                    <Link href={"/"}>
                        <Image className='photo' src="/images/profile-photo2.png" width={100} height={104}  alt="profile-photo"/>
                    </Link>
                    <h2>Seu Nome</h2>
                    <Link href={'/CreateUserPage'}>
                        <button className='add-user'>
                            <p id='add-user-txt'>Adicionar usuário</p>
                        </button>
                    </Link>
                    <Link href={'/ProfilePage'}>
                        <button className='users-list'>
                            <p id='users-list-txt'>Lista de usuários</p>
                        </button>
                    </Link>
                    <Link href={'/SettingsPage'}>
                        <button className='settings'>
                            <p id='settings-txt'>Configurações</p>
                        </button>
                    </Link>
                    <Link href={'/HomePage'}>
                        <button className='exit-button'>
                            <p id='exit-txt'>Sair</p>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Section Desktop */}
            <div className="desktop">

            </div>

        </ProfileComponents>
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
    )
}

export default PgProfile;
