// Código desenvolvido por Gabriel

'use client'
import styled from '@emotion/styled';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import Input from './Input/Input';

const FormComponent = styled.section `

    //Mobile

    height: 110vh;

    background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);

    * {
        color: white;
    }

    .mobile {
        display: flex;
        justify-content: space-between;
    }

    .tablet-desktops {
        display: none;
    }

    h1 {
        font-size: 1.8em;
        margin-left: 43%;
        margin-top: 15%;
    }

    .email {
        margin-left: 10%;
        margin-top: 15%;
    }

    #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.2em;
    }

    #forgot-email {
        margin-left: 25%;
        margin-top: -5%;
        color: #C7C7C7;
        font-size: 1em;
        font-family: 'Poppins-Medium';
        width: 145px;
    }

    #forgot-email:active {
        margin-left: 25%;
        margin-top: -5%;
        font-size: 1em;
        color: #F47216;
        font-family: 'Poppins-Medium';
        width: 155px;
    }

    .senha {
        margin-left: 10%;
        margin-top: 10%;
    }

    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.2em;
    }

    #forgot-password {
        margin-left: 25%;
        margin-top: -5%;
        font-size: 1em;
        font-family: 'Poppins-Regular';
        color: #C7C7C7;
        width: 155px;
    }

    #forgot-password:active {
        margin-left: 25%;
        margin-top: -5%;
        font-size: 1em;
        font-family: 'Poppins-Regular';
        color: #F47216;
        width: 165px;
    }

    p {
        font-size: 1.2em;
        margin-top: 15%;
        margin-left: 51%;
    }

    .google-enter {
        margin-top: 10%;
        margin-left: 13%;
    }

    .btn-google {
        width: 250px;
        height: 40px;
        font-size: 1.1em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
    }

    .btn-google:active {
        width: 250px;
        height: 40px;
        font-size: 1.1em;
        border: none;
        border-radius: 39px;
        padding: 8px;
        background-color: #86a40f;
    }

    .faGoogle {
        width: 40px;
        height: 25px;
        margin-bottom: -5px;
    }

    .page2 {
        margin-top: 10%;
        margin-left: 10%;
        width: 280px;
    }

    span {
        color: #F47216;
    }

    .logar {
        margin-top: 10%;
        margin-left: 27%;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
    }

    .logar:active {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 20px;
    }

    // Tablet
    @media(min-width: 768px){

        height: 111vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }

        background-image: url("/images/tablet-login.svg");
        background-repeat: no-repeat;

        .form {
            position: absolute;
            top: 195px;
            margin-left: 23.3%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 400px;
            height: 580px;
            border-color: white;
       }

       h1 {
        font-size: 25px;
        margin-left: 42.5%;
        margin-top: 10%;
       }

       .email {
            margin-left: -9%;
            margin-top: 10%;
       }

       #forgot-email {
        margin-left: 42%;
        margin-top: -5%;
        color: #C7C7C7;
        font-size: 0.7em;
        font-family: 'Poppins-Regular';
        width: 110px;
    }

    #forgot-email:active {
        margin-left: 42%;
        margin-top: -5%;
        font-size: 0.7em;
        color: #F47216;
        font-family: 'Poppins-Regular';
        width: 120px;
    }

       .senha {
            margin-left: -9%;
            margin-top: 5%;
       }

       #forgot-password {
        margin-left: 42%;
        margin-top: -5%;
        font-size: 0.7em;
        font-family: 'Poppins-Regular';
        color: #C7C7C7;
        width: 120px;
    }

    #forgot-password:active {
        margin-left: 42%;
        margin-top: -5%;
        font-size: 0.7em;
        font-family: 'Poppins-Regular';
        color: #F47216;
        width: 130px;
    }

       p {
        margin-top: 10%;
        margin-left: 47.8%;
       }

       .google-enter {
        margin-left: 19%;
        margin-top: 7.5%;
       }

       .btn-google {
        width: 250px;
        height: 50px;
        font-size: 1em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
    }

       .btn-google:active {
        width: 250px;
        height: 50px;
        font-size: 1em;
        background-color: #86a40f;
        border: none;
        border-radius: 39px;
        padding: 8px;
       }

       .page2 {
        font-size: 1.1em;
        width: 320px;
        margin-left: 14%;
        margin-top: 5%;
       }

       .logar {
        font-size: 1.8em;
        width: 155px;
        height: 45px;
        border-radius: 19px;
        background-color: #93B413;
        margin-left: 31%;
        margin-top: 4%;
       }

       .logar:active {
        font-size: 1.8em;
        width: 155px;
        height: 45px;
        border-radius: 19px;
        background-color: #86a40f;
        margin-left: 31%;
        margin-top: 4%;
       }

       .fox {
        width: 100px;
        height: 150px;
        margin-top: 50%;
        margin-left: 11%;
       }
    }

    // Small Screens
    @media(min-width: 992px) {

        height: 111.5vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/992px-login.svg");

        .form {
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 520px;
            height: 673px;
            border-color: white;
            margin-left: 24.3%;
       }

        h1 {
            font-size: 1.9em;
            margin-left: 42.9%;
            margin-top: 8%;
        }

        .email {
            margin-left: -8%;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        #forgot-email {
            font-size: 1.1em;
            margin-left: 40.8%;
            font-family: 'Poppins-Regular';
            width: 160px;
        }

        #forgot-email:hover {
            font-size: 1.2em;
            margin-left: 39.5%;
            font-family: 'Poppins-Regular';
            color: #dbd7d7;
            width: 170px;
        }

        #forgot-email:active {
            font-size: 1.2em;
            margin-left: 39.5%;
            color: #F47216;
            width: 170px;
        }

       .senha {
        margin-left: -8%;
       }

       #password::-webkit-input-placeholder {
        font-size: 1.4em;
       }

       #forgot-password {
            font-size: 1.1em;
            margin-left: 40%;
            font-family: 'Poppins-Regular';
            width: 170px;
        }

        #forgot-password:hover {
            font-size: 1.2em;
            margin-left: 39.5%;
            font-family: 'Poppins-Regular';
            color: #dbd7d7;
            width: 180px;
        }

        #forgot-password:active {
            font-size: 1.2em;
            margin-left: 39.5%;
            color: #F47216;
            width: 180px;
        }

        p {
            font-size: 1.5em;
            margin-top: 7%;
        }

        .google-enter {
            margin-left: 18.5%;
            margin-top: 5%;
            cursor: pointer;
       }

       .btn-google {
        width: 340px;
        height: 65px;
        font-size: 1.5em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
    }

       .btn-google:active {
        width: 340px;
        height: 65px;
        font-size: 1.5em;
        background-color: #86a40f;
        border: none;
        border-radius: 39px;
        padding: 8px;
       }

       .faGoogle {
        width: 50px;
        height: 30px;
        margin-bottom: -5px;
    }

    .page2 {
        font-size: 1.4em;
        width: 410px;
        margin-left: 15%;
        margin-top: 7%;
    }

    .logar {
        margin-left: 36.4%;
        margin-top: 6%;
        cursor: pointer;
    }

    .logar:active {
        margin-left: 36.4%;
        margin-top: 6%;
    }

    .fox {
        width: 146px;
        height: 210px;
        margin-left: 10%;
        margin-top: 40%;
    }
    }

    // Medium Screens
    @media(min-width: 1200px) {

        height: 143.5vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/1200px-login.svg");

        .form {
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 700px;
            height: 840px;
            border-color: white;
            margin-left: 23.7%;
            margin-top: 1.6%;
        }

        h1 {
            font-size: 2.5em;
            position: absolute;
            margin-left: 42.5%;
            margin-top: 7%;
        }

        .email {
            margin-top: 20%;
            margin-left: -7%;
        }

        #email {
            width: 550px;
            height: 40px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.7em;
        }

        #forgot-email {
            font-size: 1.1em;
            margin-left: 44%;
            margin-top: -6%;
            width: 160px;
        }

        #forgot-email:hover {
            font-size: 1.2em;
            margin-left: 43.5%;
            margin-top: -6.3%;
            color: #dbd7d7;
            width: 170px;
        }

        #forgot-email:active {
            font-size: 1.2em;
            margin-left: 43.5%;
            margin-top: -6.3%;
            color: #F47216;
            width: 170px;
        }

        .senha {
            margin-left: -7%;
        }

        #password {
            width: 550px;
            height: 40px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.7em;
        }

        #forgot-password {
            font-size: 1.1em;
            margin-left: 44%;
            width: 170px;
        }

        #forgot-password:hover {
            font-size: 1.2em;
            margin-left: 43.5%;
            color: #dbd7d7;
            width: 180px;
        }

        #forgot-password:active {
            font-size: 1.2em;
            margin-left: 43.5%;
            color: #F47216;
            width: 180px;
        }

        p {
            font-size: 1.7em;
            margin-left: 48.5%;
        }

        .btn-google {
            margin-left: -0.3%;
            width: 450px;
            height: 70px;
            font-size: 1.8em;
            background-color: #93B413;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .btn-google:hover {
            margin-left: -0.3%;
            width: 450px;
            height: 70px;
            font-size: 1.8em;
            background-color: #9fc214;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .btn-google:active {
            margin-left: -0.3%;
            width: 450px;
            height: 70px;
            font-size: 1.8em;
            background-color: #86a40f;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .faGoogle{
            width: 60px;
            height: 40px;
        }

        .page2 {
            font-size: 1.5em;
            width: 550px;
            margin-left: 23.5%;
        }

        .logar {
            background-color: #93B413;
            width: 200px;
            height: 60px;
            font-size: 2.5em;
            cursor: pointer;
        }

        .logar:hover {
            background-color: #9fc214;
            width: 200px;
            height: 60px;
            font-size: 2.5em;
            cursor: pointer;
        }

        .logar:active {
            background-color: #86a40f;
            width: 200px;
            height: 60px;
            font-size: 2.5em;
            cursor: pointer;
        }

        .fox {
            width: 186px;
            height: 280px;
            margin-left: 10%;
            margin-top: 40%;
        }
    }

    // Large Screens
    @media(min-width: 1600px) {

        height: 124vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/1600px-login.svg");

        .form {
            margin-left: 21.6%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 890px;
            height: 855px;
            border-color: white;
        }

        h1 {
            font-size: 2.4em;
            margin-left: 43%;
            margin-top: 5%;
        }

        .email {
            margin-left: -4%;
            margin-top: 12%;
        }

        #email {
            width: 655px;
        }

        #forgot-email{
            margin-left: 44%;
            margin-top: -8%;
            font-size: 1em;
            width: 150px;
        }

        #forgot-email:hover{
            margin-left: 43.5%;
            margin-top: -8.3%;
            font-size: 1.1em;
            color: #dbd7d7;
            width: 180px;
        }

        #forgot-email:active{
            margin-left: 43.5%;
            margin-top: -8.3%;
            font-size: 1.1em;
            color: #F47216;
            width: 150px;
        }

        .senha {
            margin-left: -4%;
        }

        #password {
            width: 655px;
        }

        #forgot-password{
            margin-left: 43.5%;
            margin-top: -8%;
            font-size: 1em;
            width: 195px;
        }

        #forgot-password:hover{
            margin-left: 42.8%;
            margin-top: -8.3%;
            font-size: 1.1em;
            color: #dbd7d7;
            width: 205px;
        }

        #forgot-password:active{
            margin-left: 42.8%;
            margin-top: -8.3%;
            font-size: 1.1em;
            color: #F47216;
            width: 205px;
        }

        p {
            margin-left: 48.5%;
            font-size: 1.5em;
        }

        .btn-google {
            margin-left: 7.5%;
            width: 455px;
            height: 70px;
            font-size: 2em;
            background-color: #93B413;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .btn-google:hover {
            margin-left: 7.5%;
            width: 455px;
            height: 70px;
            font-size: 2em;
            background-color: #9fc214;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .btn-google:active {
            margin-left: 7.5%;
            width: 455px;
            height: 70px;
            font-size: 2em;
            background-color: #86a40f;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .faGoogle{
            width: 60px;
            height: 39px;
        }

        .page2 {
            font-size: 1.5em;
            width: 580px;
            margin-left: 28%;
        }

        .logar {
            margin-left: 40%;
        }

        .logar:hover {
            margin-left: 40%;
        }

        .logar:active {
            margin-left: 40%;
        }

        .fox {
            margin-left: 4.5%;
        }
    }

`;

const Form = function() {
    return (
        <FormComponent>
            <nav className='mobile'>
                {/* Login Form Content*/}
                    <form>
                        <h1>Login</h1>
                        <div className='email'>
                            <Input type="email" name="email" id="email" placeholder='Email'/>
                            <Link href={'/RecoveryYourEmailPage'}>
                                <h4 id='forgot-email'>Esqueci o Email</h4>
                            </Link>
                        </div>
                        <div className='senha'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                            <Link href={'/RecoveryYourPasswordPage'}>
                                <h4 id='forgot-password'>Esqueci a Senha</h4>
                            </Link>
                        </div>
                        <p>OU</p>
                        <div className='google-enter'>
                            <button className='btn-google' type='button'>
                                <FaGoogle className='faGoogle'/> Entrar com Google
                            </button>
                        </div>
                        <div className='page2'>
                            Não tem uma conta? <Link href={'/CreateAccountPage'}>
                                <span>Crie uma!</span>
                            </Link>
                        </div>
                        <div className='button-create'>
                            <Link href={'/ProfilePage'}>
                                <button className='logar' type='button'>
                                    Entrar
                                </button>
                            </Link>
                        </div>
                    </form>
            </nav>

            <nav className='tablet-desktops'>
            {/* <img src="/images/Raposa-login.png" alt="fox" className='fox'/> */}
                <form className='form'>
                    {/* Login Form Content */}
                    <h1>Login</h1>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                        <Link href={'/RecoveryYourEmailPage'}>
                                <h4 id='forgot-email'>Esqueci o Email</h4>
                        </Link>
                    </div>
                    <div className='senha'>
                        <Input type="password" name="password" id="password" placeholder='Senha'/>
                        <Link href={'/RecoveryYourPasswordPage'}>
                            <h4 id='forgot-password'>Esqueci a Senha</h4>
                        </Link>
                    </div>
                    <p>OU</p>
                    <div className='google-enter'>
                        <button className='btn-google' type='button'>
                            <FaGoogle className='faGoogle'/> Entrar com Google
                        </button>
                    </div>
                    <div className='page2'>
                        Não tem uma conta? <Link href={'/CreateAccountPage'}>
                            <span>Crie uma!</span>
                        </Link>
                    </div>
                    <div className='button-create'>
                        <Link href={'/ProfilePage'}>
                                <button className='logar' type='button'>
                                    Entrar
                                </button>
                            </Link>
                    </div>
                {/*
                    
                    
                    
                    
                    
                */}
                </form>
            </nav>
            
        </FormComponent>
    )
}

export default Form;