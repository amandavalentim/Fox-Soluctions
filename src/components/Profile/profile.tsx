// Developed code by Gabriel

'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Login/Input/Input';
import Image from 'next/image';

const ProfileComponents = styled.section `

    // Mobile

    height: 100vh;

    background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);

    * {
        color: white;
    }

    #photo-input {
        display: none;
    }

    .profile-photo {
        padding-top: 13%;
        margin-left: 35%;
    }

    h2 {
        margin-top: 5%;
        margin-left: -10%;
    }

    .add-user {
        font-size: 1.4em;
        font-family: 'Poppins-Medium';
        margin-top: 25%;
        margin-left: -40%;
    }

    .users-list {
        font-size: 1.4em;
        font-family: 'Poppins-Medium';
        margin-top: 20%;
        margin-left: -40%;
    }

    .settings {
        font-size: 1.4em;
        font-family: 'Poppins-Medium';
        margin-top: 20%;
        margin-left: -40%;
    }

    .exit {
        font-size: 1.4em;
        font-family: 'Poppins-Medium';
        margin-top: 20%;
        margin-left: -40%;
    }

`;

const PgProfile = function() {
    return (
        <ProfileComponents>
            <nav className='mobile'>
                <form className='profile-photo'>
                    <label>
                    <span className='photo'>
                        a
                        {/* <Image className='photo' src="/images/profile-photo2.png" width={100} height={104} alt="profile-photo"/> */}
                        <input type="file" id='photo-input'/>
                    </span>
                </label>
                <h2>Your Name</h2>
                <Link href={'/ProfilePage'}>
                    <p className='add-user'>Adicionar usuário</p>
                </Link>
                <Link href={'/ProfilePage'}>
                    <p className='users-list'>Lista de usuários</p>
                </Link>
                <Link href={'/ProfilePage'}>
                    <p className='settings'>Configurações</p>
                </Link>
                <Link href={'/HomePage'}>
                    <p className='exit'>Sair</p>
                </Link>
                </form>
            </nav>
        </ProfileComponents>
    )
}

export default PgProfile;
