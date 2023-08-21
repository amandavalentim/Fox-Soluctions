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

    .mobile {
        display: block;
        justify-content: space-between;
    }

    .tablet {
        display: none;
    }

    .desktop1 {
        display: none;
    }

    .desktop2 {
        display: none;
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

    @media(min-width: 768px) {

        height: 63vh;

        .mobile {
            display: none;
        }

        .tablet {
            display: block;
            justify-content: space-between;
        }

        .desktop1 {
            display: none;
        }

        .desktop2 {
            display: none;
        }

        .desktop3 {
            display: none;
        }

        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);

        .add-user {
            position: absolute;
            margin-left: 5%;
            margin-top: 5%;
        }

        .users-list {
            position: absolute;
            margin-left: 5%;
            margin-top: 15%;
        }

        .settings {
            position: absolute;
            margin-left: 5%;
            margin-top: 25%;
        }  
        
        .exit {
            position: absolute;
            margin-left: 5%;
            margin-top: 35%;
        }

        form {
            position: absolute;
            background-color: #2F99BF;
            width: 60vw;
            height: 63%;
            margin-left: 40%;
        }

        p {
            font-family: 'Poppins-Regular';
        }

        .name {
            position: absolute;
            margin-top: 10%;
            margin-left: 5%;
            font-weight: 300;
        }

        .email {
            position: absolute;
            margin-top: 20%;
            margin-left: 5%;
            font-weight: 300;
        }

        .birthday {
            position: absolute;
            margin-top: 30%;
            margin-left: 5%;
            font-weight: 300;
        }

        .cpf {
            position: absolute;
            margin-top: 40%;
            margin-left: 5%;
            font-weight: 300;
        }

        .country {
            position: absolute;
            margin-top: 50%;
            margin-left: 5%;
            font-weight: 300;
        }

        .photo {
            margin-left: 35%;
            margin-top: 6%;
        }

        .changePassword {
            background-color: #93B413;
            border: none;
            font-size: 1.1em;
            margin-top: 35%;
            margin-left: 5%;
            border-radius: 19px;
            width: 150px;
            height: 30px;
        }

        .changePassword:active {
            background-color: #86a40f;
            border: none;
            font-size: 1.1em;
            margin-top: 35%;
            margin-left: 5%;
            border-radius: 19px;
            width: 150px;
            height: 30px;
        }

        .deleteAccount {
            background-color: red;
            border: none;
            font-size: 1.1em;
            margin-top: 35%;
            margin-left: 25%;
            border-radius: 19px;
            width: 150px;
            height: 30px;
        }

        .deleteAccount:active {
            background-color: #cf0000;
            border: none;
            font-size: 1.1em;
            margin-top: 35%;
            margin-left: 25%;
            border-radius: 19px;
            width: 150px;
            height: 30px;
        }

        span {
            font-weight: bold;
        }

        @media(min-width: 992px) {

            height: 63vh;

            .mobile {
                display: none;
            }

            .tablet {
                display: none;
            }

            .desktop1 {
                display: block;
                justify-content: space-between;
            }

            .desktop2 {
                display: none;
            }

            .desktop3 {
                display: none;
            }

            background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);

            .add-user {
                position: absolute;
                margin-left: 5%;
                margin-top: 5%;
            }

            .users-list {
                position: absolute;
                margin-left: 5%;
                margin-top: 13%;
            }

            .settings {
                position: absolute;
                margin-left: 5%;
                margin-top: 21%;
            }  

            .exit {
                position: absolute;
                margin-left: 5%;
                margin-top: 29%;
            }

            form {
                position: absolute;
                background-color: #2F99BF;
                width: 60vw;
                height: 63%;
                margin-left: 40%;
            }

            p {
                font-family: 'Poppins-Regular';
            }

            .name {
                position: absolute;
                margin-top: 5%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.3em;
            }

            .email {
                position: absolute;
                margin-top: 15%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.3em;
            }

            .birthday {
                position: absolute;
                margin-top: 25%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.3em;
            }

            .cpf {
                position: absolute;
                margin-top: 35%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.3em;
            }

            .country {
                position: absolute;
                margin-top: 45%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.3em;
            }

            .photo {
                margin-left: 35%;
                margin-top: 6%;
                width: 150px;
                height: 150px;
            }

            .changePassword {
                background-color: #93B413;
                border: none;
                font-size: 1.7em;
                margin-top: 25%;
                margin-left: 5%;
                border-radius: 19px;
                width: 250px;
                height: 50px;
            }

            .changePassword:active {
                background-color: #86a40f;
                border: none;
                font-size: 1.7em;
                margin-top: 25%;
                margin-left: 5%;
                border-radius: 19px;
                width: 250px;
                height: 50px;
            }

            .deleteAccount {
                background-color: red;
                border: none;
                font-size: 1.7em;
                margin-top: 25%;
                margin-left: 9%;
                border-radius: 19px;
                width: 250px;
                height: 50px;
            }

            .deleteAccount:active {
                background-color: #cf0000;
                border: none;
                font-size: 1.7em;
                margin-top: 25%;
                margin-left: 9%;
                border-radius: 19px;
                width: 250px;
                height: 50px;
            }
        }

        @media(min-width: 1200px) {

            height: 75vh;

            .mobile {
                display: none;
            }

            .tablet {
                display: none;
            }

            .desktop1 {
                display: none;
            }

            .desktop2 {
                display: block;
                justify-content: space-between;
            }

            .desktop3 {
                display: none;
            }

            background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);

            .add-user {
                position: absolute;
                margin-left: 5%;
                margin-top: 4%;
                font-size: 2em;
            }

            .users-list {
                position: absolute;
                margin-left: 5%;
                margin-top: 11%;
                font-size: 2em;
            }

            .settings {
                position: absolute;
                margin-left: 5%;
                margin-top: 18%;
                font-size: 2em;
            }  

            .exit {
                position: absolute;
                margin-left: 5%;
                margin-top: 25%;
                font-size: 2em;
            }

            form {
                position: absolute;
                background-color: #2F99BF;
                width: 65vw;
                height: 75%;
                margin-left: 35%;
            }

            p {
                font-family: 'Poppins-Regular';
            }

            .name {
                position: absolute;
                margin-top: 5%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.7em;
            }

            .email {
                position: absolute;
                margin-top: 13%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.7em;
            }

            .birthday {
                position: absolute;
                margin-top: 21%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.7em;
            }

            .cpf {
                position: absolute;
                margin-top: 29%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.7em;
            }

            .country {
                position: absolute;
                margin-top: 37%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.7em;
            }

            .photo {
                margin-left: 35%;
                margin-top: 6%;
                width: 180px;
                height: 180px;
            }

            .changePassword {
                background-color: #93B413;
                border: none;
                font-size: 2em;
                margin-top: 19%;
                margin-left: 10%;
                border-radius: 19px;
                width: 320px;
                height: 60px;
            }

            .changePassword:active {
                background-color: #86a40f;
                border: none;
                font-size: 2em;
                margin-top: 19%;
                margin-left: 10%;
                border-radius: 19px;
                width: 320px;
                height: 60px;
            }

            .deleteAccount {
                background-color: red;
                border: none;
                font-size: 2em;
                margin-top: 19%;
                margin-left: 10%;
                border-radius: 19px;
                width: 320px;
                height: 60px;
            }

            .deleteAccount:active {
                background-color: #cf0000;
                border: none;
                font-size: 2em;
                margin-top: 19%;
                margin-left: 10%;
                border-radius: 19px;
                width: 320px;
                height: 60px;
            }
        }

        @media(min-width: 1600px) {

            height: 73.4vh;

            .mobile {
                display: none;
            }

            .tablet {
                display: none;
            }

            .desktop1 {
                display: none;
            }

            .desktop2 {
                display: none;
            }

            .desktop3 {
                display: block;
                justify-content: space-between;
            }

            background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);

            .add-user {
                position: absolute;
                margin-left: 5%;
                margin-top: 4%;
                font-size: 2em;
            }

            .users-list {
                position: absolute;
                margin-left: 5%;
                margin-top: 11%;
                font-size: 2em;
            }

            .settings {
                position: absolute;
                margin-left: 5%;
                margin-top: 18%;
                font-size: 2em;
            }  

            .exit {
                position: absolute;
                margin-left: 5%;
                margin-top: 25%;
                font-size: 2em;
            }

            form {
                position: absolute;
                background-color: #2F99BF;
                width: 65vw;
                height: 73.4%;
                margin-left: 34.3%;
            }

            p {
                font-family: 'Poppins-Regular';
            }

            .name {
                position: absolute;
                margin-top: 5%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.7em;
            }

            .email {
                position: absolute;
                margin-top: 13%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.7em;
            }

            .birthday {
                position: absolute;
                margin-top: 21%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.7em;
            }

            .cpf {
                position: absolute;
                margin-top: 29%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.7em;
            }

            .country {
                position: absolute;
                margin-top: 37%;
                margin-left: 5%;
                font-weight: 300;
                font-size: 1.7em;
            }

            .photo {
                margin-left: 35%;
                margin-top: 6%;
                width: 180px;
                height: 180px;
            }

            .changePassword {
                background-color: #93B413;
                border: none;
                font-size: 2.2em;
                margin-top: 21%;
                margin-left: 13%;
                border-radius: 19px;
                width: 350px;
                height: 70px;
            }

            .changePassword:active {
                background-color: #86a40f;
                border: none;
                font-size: 2.2em;
                margin-top: 21%;
                margin-left: 13%;
                border-radius: 19px;
                width: 350px;
                height: 70px;
            }

            .deleteAccount {
                background-color: red;
                border: none;
                font-size: 2.2em;
                margin-top: 21%;
                margin-left: 10%;
                border-radius: 19px;
                width: 350px;
                height: 70px;
            }

            .deleteAccount:active {
                background-color: #cf0000;
                border: none;
                font-size: 2.2em;
                margin-top: 21%;
                margin-left: 10%;
                border-radius: 19px;
                width: 350px;
                height: 70px;
            }
        }
    }

`;

const PgProfile = function() {
    return (
        <ProfileComponents>
            <nav className='mobile'>
                <form className='profile-photo'>
                    <Link href={"/"}>
                        <Image className='photo' src="/images/profile-photo2.png" width={100} height={104}  alt="profile-photo"/>
                    </Link>
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

            <nav className='tablet'>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='add-user'>Adicionar usuário</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='users-list'>Lista de usuários</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='settings'>Configurações</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/HomePage'}>
                        <p className='exit'>Sair</p>
                    </Link>
                </div>
                <form>
                    <p className='name'><span>Nome:</span> Seu Nome</p>
                    <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
                    <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
                    <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
                    <p className='country'><span>País:</span> Brasil</p>
                    <label>
                    <span className='photo'>
                        <Image className='photo' src="/images/profile-photo2.png" width={100} height={104} alt="profile-photo"/>
                        <input type="file" id='photo-input'/>
                    </span>
                </label>
                <button type='button' className='changePassword'>
                    Alterar Senha
                </button>
                <button type='button' className='deleteAccount'>
                    Excluir Conta
                </button>
                </form>
            </nav>

            <nav className='desktop1'>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='add-user'>Adicionar usuário</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='users-list'>Lista de usuários</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='settings'>Configurações</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/HomePage'}>
                        <p className='exit'>Sair</p>
                    </Link>
                </div>
                <form>
                    <p className='name'><span>Nome:</span> Seu Nome</p>
                    <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
                    <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
                    <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
                    <p className='country'><span>País:</span> Brasil</p>
                    <label>
                    <span className='photo'>
                        <Image className='photo' src="/images/profile-photo2.png" width={100} height={104} alt="profile-photo"/>
                        <input type="file" id='photo-input'/>
                    </span>
                </label>
                <button type='button' className='changePassword'>
                    Alterar Senha
                </button>
                <button type='button' className='deleteAccount'>
                    Excluir Conta
                </button>
                </form>
            </nav>

            <nav className='desktop2'>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='add-user'>Adicionar usuário</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='users-list'>Lista de usuários</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='settings'>Configurações</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/HomePage'}>
                        <p className='exit'>Sair</p>
                    </Link>
                </div>
                <form>
                    <p className='name'><span>Nome:</span> Seu Nome</p>
                    <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
                    <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
                    <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
                    <p className='country'><span>País:</span> Brasil</p>
                    <label>
                    <span className='photo'>
                        <Image className='photo' src="/images/profile-photo2.png" width={100} height={104} alt="profile-photo"/>
                        <input type="file" id='photo-input'/>
                    </span>
                </label>
                <button type='button' className='changePassword'>
                    Alterar Senha
                </button>
                <button type='button' className='deleteAccount'>
                    Excluir Conta
                </button>
                </form>
            </nav>

            <nav className='desktop3'>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='add-user'>Adicionar usuário</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='users-list'>Lista de usuários</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                        <p className='settings'>Configurações</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/HomePage'}>
                        <p className='exit'>Sair</p>
                    </Link>
                </div>
                <form>
                    <p className='name'><span>Nome:</span> Seu Nome</p>
                    <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
                    <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
                    <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
                    <p className='country'><span>País:</span> Brasil</p>
                    <label>
                    <span className='photo'>
                        <Image className='photo' src="/images/profile-photo2.png" width={100} height={104} alt="profile-photo"/>
                        <input type="file" id='photo-input'/>
                    </span>
                </label>
                <button type='button' className='changePassword'>
                    Alterar Senha
                </button>
                <button type='button' className='deleteAccount'>
                    Excluir Conta
                </button>
                </form>
            </nav>
        </ProfileComponents>
    )
}

export default PgProfile;
