// Developed code by 

'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

//mobile and tablet
const ProfileComponents = styled.section `
    background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);
    .profile-mobile{
        padding: 20%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
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

    @media(min-width: 992px){
        width: 500px;
        height: 80vh;
        padding: 4%;
        .profile-desktop{
            display: flex;
            .menu-btn-desktop{
                font-size: 1.6em;
                text-align:center;
                margin: 50px;
                padding: 10px;
                width: 270px;
                cursor: pointer;
            }
            .menu-btn-desktop:hover{
                background: #93B413;
                border-radius: 20px;
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
                
            </nav>
        </ProfileComponents>

    )
}

export default PgProfile;

{/* <Link href={'/HomePage'}>
                        <button className='exit-button'>
                            <p id='exit-txt'>Sair</p>
                        </button>
                    </Link> */}