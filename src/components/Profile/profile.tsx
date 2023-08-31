// Developed code by 

'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

//mobile and tablet
const ProfileComponents = styled.section `
    background: #2F99BF;
    .profile-mobile{
        padding: 20%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);
        .menu{
            .menu-btn{
                text-align:center;
                background: #93B413;
                margin: 10px;
                padding: 5px;
                width: 250px;
                border-radius: 20px;
                color: #ffffff;
                font-family: 'Poppins-Regular';
                font-size: 1.3em;
            }
        }
    }
    
    .profile-desktop{
        display: none;
    }

    //Desktop
    @media(min-width: 992px){
        
        .profile-desktop{
            display: flex;
            .menu-desktop{
                background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);
                .menu-btn-desktop{
                font-size: 1.6em;
                text-align:center;
                margin: 50px;
                padding: 10px;
                width: 270px;
                color: #ffffff;
                font-family: 'Poppins-Regular';
                cursor: pointer;
                }
                .menu-btn-desktop:hover{
                background: #93B413;
                border-radius: 20px;
                }
            }
            .container-settings{
                margin: 5%;
                font-size: 1.4em;
                .box-container{
                    width: 150%;
                    color: #ffffff;
                    font-family: 'poppins-Light';
                    margin: 15px;
                    span{
                        font-family: 'poppins-Medium';
                    }
                }
                .settings-btn{
                    display: flex;
                    color: #ffffff;
                    .change-password{
                        background: #93B413;
                        padding: 10px;
                        border-radius: 20px;
                        justify-content: space-around;
                    }
                    .Delete{
                        background: #FF0000;
                        padding: 10px;
                        border-radius: 20px; 
                    }
                }
            }
        }
        .profile-mobile{
            display: none;
        }
    }

`;

const PgProfile = function() {
    return (
        <ProfileComponents>
            {/* Section profile mobile */}
            <nav className='profile-mobile'>
                <div className='menu'>
                    <div className='menu-btn'>
                        <Link href={'/CreateUserPage'} className='create-user'>
                            Criar Usuário
                        </Link>
                    </div>
                    <div className='menu-btn'>
                        <Link href={'/HomePage'} className='user-list'>
                            Lista de Usuários
                        </Link>
                    </div>
                    <div className='menu-btn'>
                        <Link href={'/'} className='settings'>
                            Configurações
                        </Link>
                    </div>
                    <div className='menu-btn'>
                        <Link href={'/HomePage'} className='exit'>
                            Sair
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Section profile desktop */}
            <nav className='profile-desktop'>
                <div className='menu-desktop'>
                    <div className='menu-btn-desktop'>
                        <Link href={'/CreateUserPage'} className='create-user'>
                            Criar Usuário
                        </Link>
                    </div>
                    <div className='menu-btn-desktop'>
                        <Link href={'/HomePage'} className='user-list'>
                            Lista de Usuários
                        </Link>
                    </div>
                    <div className='menu-btn-desktop'>
                        <Link href={'/'} className='settings'>
                            Configurações
                        </Link>
                    </div>
                    <div className='menu-btn-desktop'>
                        <Link href={'/HomePage'} className='exit'>
                            Sair
                        </Link>
                    </div>
                </div>

                {/* Section Settings */}
                <div className="container-settings">
                    <p className='box-container'><span>Nome: </span>Usuário Fulano De Tal</p>
                    <p className='box-container'><span>E-mail: </span>fulanodetal@gmail.com</p>
                    <p className='box-container'><span>Nascimento: </span>19/07/1995</p>
                    <p className='box-container'><span>CPF: </span>000.000.000-00</p>
                    <p className='box-container'><span>País: </span>Brasil</p>
                    <div className='settings-btn'>
                        <div className='password-btn'>
                            <Link href={'/NewPasswordPage'} className='change-password'>
                                Alterar Senha
                            </Link>
                        </div>
                        <div className='delete-btn'>
                            <Link href={'/'} className='Delete'>
                                Excluir Conta
                            </Link>
                        </div>
                    </div>
                </div>
                
            </nav>
        </ProfileComponents>

    )
}

export default PgProfile;
