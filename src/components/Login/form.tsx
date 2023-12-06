// Developed by Gabriel Marques Correia

'use client'
import styled from '@emotion/styled';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import Input from './Input/Input';

const FormComponent = styled.section `

    //Mobile

    height: 49vh;

    background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);

    * {
        color: white;
    }

    .mobile {
        display: grid;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
    }

    .tablet-desktops {
        display: none;
    }

    form {
        display: grid;
        justify-content: center;
        align-items: center;
    }

    h1 {
        text-align: center;
        font-size: 1.8em;
        margin-left: 4%;
        padding-top: 5%;
    }

    #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.2em;
    }

    h4 {
        /* margin-top: -5%; */
        padding: 0;
        text-align: center;
    }

    #forgot-email {
        margin-top: -5%;
        padding: 0;
        color: #C7C7C7;
        font-size: 1em;
        font-family: 'Poppins-Medium';
    }

    #forgot-email:active {
        margin-top: -5%;
        padding: 0;
        font-size: 1em;
        color: #F47216;
        font-family: 'Poppins-Medium';
    }

    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.2em;
    }

    #forgot-password {
        margin-top: -5%;
        padding: 0;
        font-size: 1em;
        font-family: 'Poppins-Regular';
        color: #C7C7C7;
        text-align: center;
    }

    #forgot-password:active {
        margin-top: -5%;
        padding: 0;
        font-size: 1em;
        font-family: 'Poppins-Regular';
        color: #F47216;
    }

    p {
        font-size: 1.2em;
        margin-top: 5%;
        text-align: center;
    }

    .button-create {
        text-align: center;
        margin: 0;
        padding: 0;
    }

    .google-enter {
        margin-top: 5%;
        text-align: center;
    }

    .btn-google {
        width: 250px;
        height: 40px;
        font-size: 1.1em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
        text-align: center;
    }

    .btn-google:active {
        width: 250px;
        height: 40px;
        font-size: 1.1em;
        border: none;
        border-radius: 39px;
        padding: 8px;
        background-color: #86a40f;
        text-align: center;
    }

    .faGoogle {
        width: 40px;
        height: 25px;
        margin-bottom: -5px;
    }

    .page2 {
        margin-top: 5%;
        /* width: 280px; */
        text-align: center;
        /* margin-left: 5.5%; */
    }

    span {
        color: #F47216;
    }

    .logar {
        margin-top: 5%;
        /* margin-left: 25%; */
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
        text-align: center;
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
    @media(min-width: 704px){

        height: 79.6vh;

        background: #0A53B5;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/tablet-login.svg");
        background-repeat: no-repeat; */

        .form {
            display: grid;
            text-align: center;
            align-items: center;
            justify-content: center;
            margin-top: -69.5%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 400px;
            height: 490px;
            border-color: white;
       }

       h1 {
        font-size: 23px;
        margin-left: 2%;
       }

       #email {
        width: 270px;
        margin: 0;
       }

       #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 17px;
        }

       #forgot-email {
        text-align: center;
        padding: 0;
        margin-top: -15%;
        margin-left: 3%;
        color: #C7C7C7;
        font-size: 0.9em;
        font-family: 'Poppins-Regular';
        width: 125px;
    }

    #forgot-email:active {
        margin-top: -15%;
        margin-left: 3%;
        font-size: 0.7em;
        color: #F47216;
        font-family: 'Poppins-Regular';
        width: 125px;
    }

    .senha {
        font-size: 14px;
    }

    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 17px;
    }

    #password {
        width: 270px;
        margin: 0;
    }

    #forgot-password {
        margin-top: -15%;
        margin-left: 3%;
        font-size: 1em;
        font-family: 'Poppins-Regular';
        color: #C7C7C7;
        width: 120px;
    }

    #forgot-password:active {
        margin-top: -15%;
        margin-left: 3%;
        font-size: 1em;
        font-family: 'Poppins-Regular';
        color: #F47216;
        width: 120px;
    }

    p {
        text-align: center;
        margin-left: 4.5%;
        font-size: 1em;
        margin-top: -5%;
    }

    .google-enter {
        margin-top: 4%;
        text-align: center;
        margin-top: -5%;
    }

    .btn-google {
        text-align: center;
        width: 280px;
        height: 50px;
        font-size: 1em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
    }

    .btn-google:active {
        text-align: center;
        width: 280px;
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
        margin-left: 0.3%;
        margin-top: 5%;
        text-align: center;
        margin-top: -5%;
    }

    .logar {
        font-size: 1.6em;
        width: 140px;
        height: 40px;
        border-radius: 19px;
        background-color: #93B413;
        text-align: center;
        margin-top: -5%;
        margin-left: 4.5%;
    }

    .logar:active {
        font-size: 1.6em;
        width: 140px;
        height: 40px;
        border-radius: 19px;
        background-color: #86a40f;
        margin-left: 4.5%;
    }

    .fox {
        width: 100px;
        height: 150px;
        margin-top: 40%;
        margin-left: -25%;
        padding: 0;
    }
}

    // Small Screens
    @media(min-width: 992px) {

        height: 79.6vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/992px-login.svg"); */

        .form {
            display: grid;
            justify-content: center;
            align-items: center;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 450px;
            height: 460px;
            border-color: white;
            margin-top: -67.3%;
       }

        h1 {
            font-size: 1.6em;
            /* /* margin-left: 42%; */
            margin-top: -6%; 
        }

        .email {
            margin-top: -2%;
        }

        #email {
            width: 360px;
            margin: 0;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        #forgot-email {
            text-align: center;
            font-size: 0.9em;
            margin-top: 0.5%;
            font-family: 'Poppins-Regular';
            width: 135px;
            color: #C7C7C7;
        }

        #forgot-email:hover {
            font-size: 0.9em;
            margin-top: 0.5%;
            text-align: center;
            font-family: 'Poppins-Regular';
            color: #dbd7d7;
            width: 150px;
        }

        #forgot-email:active {
            font-size: 0.9em;
            margin-top: 0.5%;
            text-align: center;
            color: #F47216;
            width: 150px;
        }

        .senha {
            margin-top: 4%;
        }

        #password {
            width: 360px;
            margin: 0;
        }

       #password::-webkit-input-placeholder {
        font-size: 1.2em;
       }

       #forgot-password {
            margin-top: 0.5%;
            text-align: center;
            font-size: 1em;
            font-family: 'Poppins-Regular';
            color: #C7C7C7;
            width: 120px;
        }

        #forgot-password:hover {
            text-align: center;
            margin-top: 0.5%;
            font-size: 1.1em;
            font-family: 'Poppins-Regular';
            color: #dbd7d7;
            width: 130px;
        }

        #forgot-password:active {
            text-align: center;
            margin-top: 0.5%;
            font-size: 1.1em;
            font-family: 'Poppins-Regular';
            color: #F47216;
            width: 130px;
        }

        p {
            font-size: 1em;
        }

        .google-enter {
            cursor: pointer;
       }

       .btn-google {
        width: 362px;
        height: 45px;
        font-size: 1.2em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
    }

       .btn-google:active {
        width: 362px;
        height: 45px;
        font-size: 1.2em;
        background-color: #86a40f;
        border: none;
        border-radius: 39px;
        padding: 8px;
       }

       .faGoogle {
        width: 25px;
        height: 25px;
        margin-bottom: -5px;
        margin-right: 10%;
    }

    .page2 {
        font-size: 1em;
        width: 410px;
    }

    .logar {
        cursor: pointer;
    }

    .fox {
        width: 116px;
        height: 170px;
    }
    }

    // Medium Screens
    @media(min-width: 1200px) {

        height: 79.6vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/1200px-login.svg"); */

        .form {
            display: grid;
            justify-content: center;
            align-items: center;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 527px;
            height: 500px;
            border-color: white;
            margin-top: -71.2%;
        }

        h1 {
            font-size: 1.8em;
        }

        .email {
            font-size: 1.3em;
        }

        #email {
            width: 420px;
            height: 40px;
            margin: 0;
            font-size: 0.9em;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        #forgot-email {
            font-size: 0.9em;
            width: 160px;
        }

        #forgot-email:hover {
            font-size: 1em;
            color: #dbd7d7;
            width: 185px;
        }

        #forgot-email:active {
            font-size: 1em;
            color: #F47216;
            width: 185px;
        }

        .senha {
            font-size: 1.3em;
            margin-top: -1.5%;
        }

        #password {
            width: 420px;
            height: 40px;
            margin: 0;
            font-size: 0.9em;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        #forgot-password {
            font-size: 0.9em;
            width: 170px;
        }

        #forgot-password:hover {
            font-size: 1em;
            color: #dbd7d7;
            width: 195px;
        }

        #forgot-password:active {
            font-size: 1em;
            color: #F47216;
            width: 195px;
        }

        p {
            font-size: 1.1em;
        }

        .btn-google {
            width: 380px;
            height: 45px;
            font-size: 1.5em;
            background-color: #93B413;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .btn-google:hover {
            width: 380px;
            height: 45px;
            font-size: 1.5em;
            background-color: #9fc214;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .btn-google:active {
            width: 380px;
            height: 45px;
            font-size: 1.5em;
            background-color: #86a40f;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .faGoogle{
            width: 50px;
            height: 30px;
        }

        .page2 {
            font-size: 1.2em;
            width: 550px;
        }

        .logar {
            background-color: #93B413;
            width: 130px;
            height: 45px;
            font-size: 1.6em;
            cursor: pointer;
        }

        .logar:hover {
            background-color: #9fc214;
            width: 130px;
            height: 45px;
            font-size: 1.6em;
            cursor: pointer;
        }

        .logar:active {
            background-color: #86a40f;
            width: 130px;
            height: 45px;
            font-size: 1.6em;
            cursor: pointer;
        }

        .fox {
            width: 120px;
            height: 190px;
            margin-left: -22.5%;
        }
    }

    // 1476-708
    @media(min-width: 1400px) {

        height: 79.6vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/1400px-login.svg"); */

        .form {
            margin-top: -71.2%;
            display: grid;
            justify-content: center;
            align-items: center;
        }

        #forgot-password {
            font-size: 0.9em;
            width: 170px;
        }

        #forgot-password:hover {
            font-size: 0.9em;
            color: #dbd7d7;
            width: 195px;
        }

        #forgot-password:active {
            font-size: 0.9em;
            color: #F47216;
            width: 195px;
        }
    }

    // Large Screens
    @media(min-width: 1600px) {

        height: 81.9vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/1600px-login.svg"); */

        .form {
            display: grid;
            justify-content: center;
            align-items: center;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 620px;
            height: 605px;
            border-color: white;
            margin-top: -68%;
        }

        h1 {
            font-size: 1.8em;
        }

        #email {
            width: 525px;
        }

        #forgot-email{
            font-size: 1em;
            width: 150px;
        }

        #forgot-email:hover{
            font-size: 1.1em;
            width: 165px;
            color: #dbd7d7;
        }

        #forgot-email:active{
            font-size: 1.1em;
            width: 165px;
            color: #F47216;
        }

        #password {
            width: 525px;
        }

        #forgot-password{
            font-size: 1em;
            width: 195px;
        }

        #forgot-password:hover{
            font-size: 1.1em;
            width: 210px;
            color: #dbd7d7;
        }

        #forgot-password:active{
            font-size: 1.1em;
            width: 210px;
            color: #F47216;
        }

        p {
            font-size: 1.2em;
        }

        .btn-google {
            width: 405px;
            height: 55px;
            font-size: 1.7em;
            background-color: #93B413;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .btn-google:hover {
            width: 405px;
            height: 55px;
            font-size: 1.7em;
            background-color: #9fc214;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .btn-google:active {
            width: 405px;
            height: 55px;
            font-size: 1.7em;
            background-color: #86a40f;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
        }

        .faGoogle{
            width: 55px;
            height: 35px;
        }

        .page2 {
            font-size: 1.3em;
            width: 580px;
        }

        .logar {
            width: 160px;
            height: 50px;
            font-size: 1.7em;
        }

        .logar:hover {
            width: 160px;
            height: 50px;
            font-size: 1.7em;
        }

        .logar:active {
            width: 160px;
            height: 50px;
            font-size: 1.7em;
        }

        .fox {
            width: 130px;
            margin-left: -20.5%;
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
                            <Input type="email" name="email" id="email" placeholder='E-mail'/>
                            <Link href={'/RecoveryYourEmailPage'}>
                                <h4 id='forgot-email'>Esqueci o E-mail</h4>
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
                            Não tem uma conta? 
                            <Link href={'/CreateAccountPage'}>
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
            <img src="/images/Raposa-login.png" alt="fox" className='fox'/>
                <form className='form'>
                    {/* Login Form Content */}
                    <h1>Login</h1>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='E-mail'/>
                        <h4>
                            <Link href={'/RecoveryYourEmailPage'} id='forgot-email'>
                                Esqueci o E-mail
                            </Link>
                        </h4>
                    </div>
                    <div className='senha'>
                        <Input type="password" name="password" id="password" placeholder='Senha'/>
                        <h4>
                            <Link href={'/RecoveryYourPasswordPage'} id='forgot-password'>
                                Esqueci a Senha
                            </Link>
                        </h4>
                        
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
            
        </FormComponent>
    )
}

export default Form;