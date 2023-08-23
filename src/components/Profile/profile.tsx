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
        font-family: 'Poppins-medium';
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

    .desktop3 {
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
        margin-top: 20%;
        margin-left: -50%;
        background: none;
        border: none;
        height: 60px;
        width: 306px;
    }

    .add-user:active {
        font-size: 1.4em;
        font-family: 'Poppins-Medium';
        margin-top: 20%;
        margin-left: -50%;
        background-color: #07AFFA;
        border: none;
        border-radius: 19px;
        height: 60px;
        width: 306px;
    }

    #add-user-txt {
        margin-left: -13%;
    }

    .users-list {
        font-size: 1.4em;
        font-family: 'Poppins-Medium';
        margin-top: 10%;
        margin-left: -50%;
        background: none;
        border: none;
        height: 60px;
        width: 306px;
    }

    .users-list:active {
        font-size: 1.4em;
        font-family: 'Poppins-Medium';
        margin-top: 10%;
        margin-left: -50%;
        background-color: #07AFFA;
        border: none;
        border-radius: 19px;
        height: 60px;
        width: 306px;
    }

    #users-list-txt {
        margin-left: -17%;
    }

    .settings {
        font-size: 1.4em;
        font-family: 'Poppins-Medium';
        margin-top: 10%;
        margin-left: -50%;
        height: 60px;
        width: 306px;
        background: none;
        border: none;
    }

    #settings-txt {
        margin-left: -25%;
    }

    .settings:active {
        font-size: 1.4em;
        font-family: 'Poppins-Medium';
        margin-top: 10%;
        margin-left: -50%;
        background-color: #07AFFA;
        border: none;
        border-radius: 19px;
        height: 60px;
        width: 306px;
    }

    .exit-button {
        font-size: 1.4em;
        font-family: 'Poppins-Medium';
        margin-top: 10%;
        margin-left: -50%;
        height: 60px;
        width: 306px;
        background: none;
        border: none;
    }

    .exit-button:active {
        font-size: 1.4em;
        font-family: 'Poppins-Medium';
        margin-top: 10%;
        margin-left: -50%;
        background-color: #07AFFA;
        border: none;
        border-radius: 19px;
        height: 60px;
        width: 306px;
    }

    #exit-txt {
        margin-left: -70%;
    }

    #exit-txt:active {
        margin-left: -70%;
        color: red;
    }


    // Tablet
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
            margin-left: 0;
            margin-top: 5%;
            border: none;
            background: none;
        }

        .add-user:active {
            position: absolute;
            margin-left: 0;
            margin-top: 5%;
            background-color: #07AFFA;
            border-radius: 19px;
        }

        #add-user-txt {
            margin-left: -4%;
        }

        .users-list {
            position: absolute;
            margin-left: 0;
            margin-top: 14.5%;
            background: none;
            border: none;
        }

        .users-list:active {
            position: absolute;
            margin-left: 0;
            margin-top: 14.5%;
            background-color: #07AFFA;
            border-radius: 19px;
        }

        #users-list-txt {
            margin-left: -7%;
        }

        .settings {
            position: absolute;
            margin-left: 0;
            margin-top: 24%;
            background-color: #07AFFA;
            border: none;
            border-radius: 19px;
            height: 60px;
            width: 306px;
        }  

        #settings-txt {
            margin-left: -16%;
        }
        
        .exit-button {
            position: absolute;
            margin-left: 0;
            margin-top: 33.5%;
            background: none;
            border: none;
        }

        .exit-button:active {
            position: absolute;
            margin-left: 0;
            margin-top: 33.5%;
            background-color: #07AFFA;
            border: none;
            border-radius: 19px;
        }

        #exit-txt {
            margin-left: -60%;
        }

        #exit-txt:active {
            margin-left: -60%;
            color: red;
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

        // Small Screens
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
                margin-left: 0;
                margin-top: 4.5%;
                background: none;
                border: none;
                height: 60px;
                width: 410px;
                cursor: pointer;
            }

            .add-user:active {
                position: absolute;
                margin-left: 0;
                margin-top: 4.5%;
                background-color: #07AFFA;
                border: none;
                border-radius: 19px;
                height: 60px;
                width: 410px;
            }

            #add-user-txt {
                margin-left: -20%;
            }

            .users-list {
                position: absolute;
                margin-left: 0;
                margin-top: 12.3%;
                background: none;
                border: none;
                height: 60px;
                width: 410px;
                cursor: pointer;
            }

            .users-list:active {
                position: absolute;
                margin-left: 0;
                margin-top: 12.3%;
                background-color: #07AFFA;
                border: none;
                border-radius: 19px;
                height: 60px;
                width: 410px;
            }

            #users-list-txt {
                margin-left: -23%;
            }

            .settings {
                position: absolute;
                margin-left: 0;
                margin-top: 20%;
                background-color: #07AFFA;
                border: none;
                border-radius: 19px;
                height: 60px;
                width: 410px;
                cursor: pointer;
            }  

            #settings-txt {
                margin-left: -30%;
            }

            .exit-button {
                position: absolute;
                margin-left: 0;
                margin-top: 28%;
                background: none;
                border: none;
                height: 60px;
                width: 410px;
                cursor: pointer;
            }

            .exit-button:active {
                position: absolute;
                margin-left: 0;
                margin-top: 28%;
                background-color: #07AFFA;
                border: none;
                border-radius: 19px;
                height: 60px;
                width: 410px;
            }

            #exit-txt {
                margin-left: -63%;
            }

            #exit-txt:active {
                margin-left: -63%;
                color: red;
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
                cursor: pointer;
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
                cursor: pointer;
            }

            .changePassword {
                background-color: #9fc214;
                border: none;
                font-size: 1.7em;
                margin-top: 25%;
                margin-left: 5%;
                border-radius: 19px;
                width: 250px;
                height: 50px;
                cursor: pointer;
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
                cursor: pointer;
            }

            .deleteAccount:hover {
                background-color: #ff0a0a;
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

        // Medium Screens
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
                margin-left: 0;
                margin-top: 4%;
                font-size: 2em;
                background: none;
                border: none;
                height: 60px;
                width: 478px;
                cursor: pointer;
            }

            .add-user:active {
                position: absolute;
                margin-left: 0;
                margin-top: 4%;
                font-size: 2em;
                background-color: #07AFFA;
                border: none;
                border-radius: 19px;
                height: 60px;
                width: 478px;
            }

            #add-user-txt {
                margin-left: -5%;
            }

            .users-list {
                position: absolute;
                margin-left: 0;
                margin-top: 11%;
                font-size: 2em;
                background: none;
                border: none;
                height: 60px;
                width: 478px;
                cursor: pointer;
            }

            .users-list:active {
                position: absolute;
                margin-left: 0;
                margin-top: 11.1%;
                font-size: 2em;
                background-color: #07AFFA;
                border: none;
                border-radius: 19px;
                height: 60px;
                width: 478px;
            }

            #users-list-txt {
                margin-left: -8%;
            }

            .settings {
                position: absolute;
                margin-left: 0;
                margin-top: 18%;
                font-size: 2em;
                background-color: #07AFFA;
                border: none;
                border-radius: 19px;
                height: 60px;
                width: 478px;
                cursor: pointer;
            }  

            #settings-txt {
                margin-left: -17%;
            } 

            .exit-button {
                position: absolute;
                margin-left: 0;
                margin-top: 25%;
                font-size: 2em;
                background: none;
                border: none;
                height: 60px;
                width: 478px;
            }

            #exit-txt {
                margin-left: -58%;
            }

            .exit-button:active {
                position: absolute;
                margin-left: 0;
                margin-top: 25%;
                font-size: 2em;
                background-color: #07AFFA;
                border: none;
                border-radius: 19px;
                height: 60px;
                width: 478px;
                cursor: pointer;
            }

            #exit-txt:active {
                margin-left: -58%;
                color: red;
            }

            form {
                position: absolute;
                background-color: #2F99BF;
                width: 66vw;
                height: 74%;
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
                cursor: pointer;
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
                cursor: pointer;
            }

            .changePassword:hover {
                background-color: #9fc214;
                border: none;
                font-size: 2em;
                margin-top: 19%;
                margin-left: 10%;
                border-radius: 19px;
                width: 320px;
                height: 60px;
                cursor: pointer;
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
                cursor: pointer;
            }

            .deleteAccount:hover {
                background-color: #ff0a0a;
                border: none;
                font-size: 2em;
                margin-top: 19%;
                margin-left: 10%;
                border-radius: 19px;
                width: 320px;
                height: 60px;
                cursor: pointer;
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

        // Large Screens
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
                margin-left: 0;
                margin-top: 4%;
                font-size: 2em;
                background: none;
                border: none;
                height: 60px;
                width: 543px;
                cursor: pointer;
            }

            .add-user:active {
                position: absolute;
                margin-left: 0;
                margin-top: 4%;
                font-size: 2em;
                background-color: #07AFFA;
                border-radius: 19px;
                height: 60px;
                width: 543px;
            }

            #add-user-txt {
                margin-left: -13%;
            }

            .users-list {
                position: absolute;
                margin-left: 0;
                margin-top: 11%;
                font-size: 2em;
                background: none;
                height: 60px;
                width: 543px;
                cursor: pointer;
            }

            .users-list:active {
                position: absolute;
                margin-left: 0;
                margin-top: 11%;
                font-size: 2em;
                background-color: #07AFFA;
                border-radius: 19px;
                height: 60px;
                width: 543px;
            }

            #users-list-txt {
                margin-left: -15%;
            }

            .settings {
                position: absolute;
                margin-left: 0;
                margin-top: 18%;
                font-size: 2em;
                background-color: #07AFFA;
                border: none;
                border-radius: 19px;
                height: 60px;
                width: 543px;
                cursor: pointer;
            }  

            #settings-txt {
                margin-left: -23%;
            }  

            .exit-button {
                position: absolute;
                margin-left: 0;
                margin-top: 25%;
                font-size: 2em;
                background: none;
                border-radius: 19px;
                height: 60px;
                width: 543px;
                cursor: pointer;
            }

            .exit-button:active {
                position: absolute;
                margin-left: 0;
                margin-top: 25%;
                font-size: 2em;
                background-color: #07AFFA;
                border: none;
                border-radius: 19px;
                height: 60px;
                width: 543px;
            }

            #exit-txt:active{
                color: red;
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
                cursor: pointer;
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
                cursor: pointer;
            }

            .changePassword:hover {
                background-color: #9fc214;
                border: none;
                font-size: 2.2em;
                margin-top: 21%;
                margin-left: 13%;
                border-radius: 19px;
                width: 350px;
                height: 70px;
                cursor: pointer;
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
                cursor: pointer;
            }

            .deleteAccount:hover {
                background-color: #ff0a0a;
                border: none;
                font-size: 2.2em;
                margin-top: 21%;
                margin-left: 10%;
                border-radius: 19px;
                width: 350px;
                height: 70px;
                cursor: pointer;
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
                {/* Mobile content Form */}
                <form className='profile-photo'>
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
                </form>
            </nav>

            <nav className='tablet'>
                {/* Menu options */}
                <div>
                    <Link href={'/CreateUserPage'}>
                        <button className='add-user'>
                            <p id='add-user-txt'>Adicionar usuário</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                        <button className='users-list'>
                            <p id='users-list-txt'>Lista de usuários</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <button className='settings'>
                        <p id='settings-txt'>Configurações</p>
                    </button>
                </div>
                <div>
                    <Link href={'/HomePage'}>
                        <button className='exit-button'>
                            <p id='exit-txt'>Sair</p>
                        </button>
                    </Link>
                </div>
                {/* Form content Desktops and Tablets */}
                <form>
                    {/* User data */}
                    <p className='name'><span>Nome:</span> Seu Nome</p>
                    <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
                    <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
                    <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
                    <p className='country'><span>País:</span> Brasil</p>
                    {/* Profile Photo */}
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
                {/* Menu options */}
                <div>
                    <Link href={'/CreateUserPage'}>
                        <button className='add-user'>
                            <p id='add-user-txt'>Adicionar usuário</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                            <button className='users-list'>
                                <p id='users-list-txt'>Lista de usuários</p>
                            </button>
                    </Link>
                </div>
                <div>
                    <button className='settings'>
                        <p id='settings-txt'>Configurações</p>
                    </button>
                </div>
                <div>
                    <Link href={'/HomePage'}>
                            <button className='exit-button'>
                                <p id='exit-txt'>Sair</p>
                            </button>
                    </Link>
                </div>
                {/* Form content Desktops and Tablets */}
                <form>
                    {/* User data */}
                    <p className='name'><span>Nome:</span> Seu Nome</p>
                    <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
                    <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
                    <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
                    <p className='country'><span>País:</span> Brasil</p>
                    {/* Profile Photo */}
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
                {/* Menu options */}
                <div>
                    <Link href={'/CreateUserPage'}>
                            <button className='add-user'>
                                <p id='add-user-txt'>Adicionar usuário</p>
                            </button>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                                <button className='users-list'>
                                    <p id='users-list-txt'>Lista de usuários</p>
                                </button>
                    </Link>
                </div>
                <div>
                    <button className='settings'>
                        <p id='settings-txt'>Configurações</p>
                    </button>
                </div>
                <div>
                    <Link href={'/HomePage'}>
                        <button className='exit-button'>
                            <p id='exit-txt'>Sair</p>
                        </button>
                    </Link>
                </div>
                {/* Form content Desktops and Tablets */}
                <form>
                    {/* User data */}
                    <p className='name'><span>Nome:</span> Seu Nome</p>
                    <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
                    <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
                    <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
                    <p className='country'><span>País:</span> Brasil</p>
                    {/* Profile Photo */}
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
                {/* Menu options */}
                <div>
                    <Link href={'/CreateUserPage'}>
                                <button className='add-user'>
                                    <p id='add-user-txt'>Adicionar usuário</p>
                                </button>
                    </Link>
                </div>
                <div>
                    <Link href={'/ProfilePage'}>
                        <button className='users-list'>
                            <p id='users-list-txt'>Lista de usuários</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <button className='settings'>
                        <p id='settings-txt'>Configurações</p>
                    </button>
                </div>
                <div>
                    <Link href={'/HomePage'}>
                                <button className='exit-button'>
                                    <p id='exit-txt'>Sair</p>
                                </button>
                    </Link>
                </div>
                {/* Form content Desktops and Tablets */}
                <form>
                    {/* User data */}
                    <p className='name'><span>Nome:</span> Seu Nome</p>
                    <p className='email'><span>E-mail:</span> seuemail@gmail.com</p>
                    <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
                    <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
                    <p className='country'><span>País:</span> Brasil</p>
                    {/* Profile Photo */}
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
