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

        height: 97vh;

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
            margin-left: 23.8%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 400px;
            height: 490px;
            border-color: white;
       }

       h1 {
        font-size: 23px;
        margin-left: 42.5%;
        margin-top: 6%;
       }

       .email {
            margin-left: -5%;
            margin-top: 3%;
       }

       #email {
        width: 270px;
       }

       #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 17px;
        }

       #forgot-email {
        margin-left: 40.5%;
        margin-top: -5%;
        color: #C7C7C7;
        font-size: 0.7em;
        font-family: 'Poppins-Regular';
        width: 110px;
    }

    #forgot-email:active {
        margin-left: 40.5%;
        margin-top: -5%;
        font-size: 0.7em;
        color: #F47216;
        font-family: 'Poppins-Regular';
        width: 110px;
    }

    .senha {
        margin-left: -5%;
        margin-top: 3%;
        font-size: 14px;
    }

    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 17px;
    }

    #password {
        width: 270px;
    }

    #forgot-password {
        margin-left: 40%;
        margin-top: -5%;
        font-size: 0.7em;
        font-family: 'Poppins-Regular';
        color: #C7C7C7;
        width: 120px;
    }

    #forgot-password:active {
        margin-left: 40%;
        margin-top: -5%;
        font-size: 0.7em;
        font-family: 'Poppins-Regular';
        color: #F47216;
        width: 130px;
    }

    p {
        margin-top: 5%;
        margin-left: 47.8%;
        font-size: 1em;
    }

    .google-enter {
        margin-left: 15.5%;
        margin-top: 4.5%;
    }

    .btn-google {
        width: 280px;
        height: 50px;
        font-size: 1em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
    }

    .btn-google:active {
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
        margin-left: 14%;
        margin-top: 5%;
    }

    .logar {
        font-size: 1.6em;
        width: 140px;
        height: 40px;
        border-radius: 19px;
        background-color: #93B413;
        margin-left: 33%;
        margin-top: 4%;
    }

    .logar:active {
        font-size: 1.6em;
        width: 140px;
        height: 40px;
        border-radius: 19px;
        background-color: #86a40f;
        margin-left: 33%;
        margin-top: 4%;
    }

    .fox {
        width: 100px;
        height: 150px;
        margin-top: 40%;
        margin-left: 11%;
    }
}

    // Small Screens
    @media(min-width: 992px) {

        height: 78.5vh;

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
            width: 450px;
            height: 460px;
            border-color: white;
            margin-left: 27%;
       }

        h1 {
            font-size: 1.6em;
            margin-left: 42.3%;
            margin-top: 4%;
        }

        .email {
            margin-left: -11%;
            margin-top: 2%;
        }

        #email {
            width: 360px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        #forgot-email {
            font-size: 0.8em;
            margin-left: 43.8%;
            font-family: 'Poppins-Regular';
            width: 160px;
        }

        #forgot-email:hover {
            font-size: 0.8em;
            margin-left: 43.8%;
            font-family: 'Poppins-Regular';
            color: #dbd7d7;
            width: 160px;
        }

        #forgot-email:active {
            font-size: 0.8em;
            margin-left: 43.8%;
            color: #F47216;
            width: 160px;
        }

       .senha {
            margin-left: -11%;
            margin-top: 2%;
        }

        #password {
            width: 360px;
        }

       #password::-webkit-input-placeholder {
        font-size: 1.2em;
       }

       #forgot-password {
            font-size: 0.8em;
            margin-left: 43.8%;
            font-family: 'Poppins-Regular';
            width: 160px;
        }

        #forgot-password:hover {
            font-size: 0.8em;
            margin-left: 43.8%;
            font-family: 'Poppins-Regular';
            color: #dbd7d7;
            width: 180px;
        }

        #forgot-password:active {
            font-size: 0.8em;
            margin-left: 43.8%;
            color: #F47216;
            width: 180px;
        }

        p {
            font-size: 1em;
            margin-top: 3%;
        }

        .google-enter {
            margin-left: 10.5%;
            margin-top: 4%;
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
        margin-left: 21%;
        margin-top: 4%;
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
        width: 116px;
        height: 170px;
        margin-left: 15.5%;
        margin-top: 27%;
    }
    }

    // Medium Screens
    @media(min-width: 1200px) {

        height: 86.5vh;

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
            width: 527px;
            height: 500px;
            border-color: white;
            margin-left: 29.3%;
            margin-top: 0.5%;
        }

        h1 {
            font-size: 1.4em;
            position: absolute;
            margin-left: 43.5%;
            margin-top: 5%;
        }

        .email {
            margin-top: 10%;
            margin-left: -13%;
        }

        #email {
            width: 420px;
            height: 40px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        #forgot-email {
            font-size: 0.9em;
            margin-left: 44%;
            margin-top: -6%;
            width: 160px;
        }

        #forgot-email:hover {
            font-size: 1em;
            margin-left: 43%;
            margin-top: -6.3%;
            color: #dbd7d7;
            width: 170px;
        }

        #forgot-email:active {
            font-size: 1em;
            margin-left: 43%;
            margin-top: -6.3%;
            color: #F47216;
            width: 170px;
        }

        .senha {
            margin-top: -1%;
            margin-left: -13%;
        }

        #password {
            width: 420px;
            height: 40px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        #forgot-password {
            font-size: 1.2em;
            margin-left: 44%;
            width: 170px;
        }

        #forgot-password:hover {
            font-size: 1.3em;
            margin-left: 43%;
            color: #dbd7d7;
            width: 180px;
        }

        #forgot-password:active {
            font-size: 1.3em;
            margin-left: 43%;
            color: #F47216;
            width: 180px;
        }

        p {
            font-size: 1.1em;
            margin-left: 47.5%;
        }

        .btn-google {
            margin-left: 3.5%;
            margin-top: -1%;
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
            margin-left: 3.5%;
            margin-top: -1%;
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
            margin-left: 3.5%;
            margin-top: -1%;
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
            margin-left: -4%;
        }

        .page2 {
            font-size: 1.2em;
            width: 550px;
            margin-left: 20%;
        }

        .logar {
            background-color: #93B413;
            width: 130px;
            height: 45px;
            font-size: 1.6em;
            cursor: pointer;
            margin-left: 38%;
            margin-top: 2.5%;
        }

        .logar:hover {
            background-color: #9fc214;
            width: 150px;
            height: 50px;
            font-size: 1.8em;
            cursor: pointer;
            margin-left: 38%;
        }

        .logar:active {
            background-color: #86a40f;
            width: 150px;
            height: 50px;
            font-size: 1.8em;
            cursor: pointer;
            margin-left: 38%;
        }

        .fox {
            width: 120px;
            height: 190px;
            margin-left: 20.5%;
            margin-top: 22%;
        }
    }

    // Large Screens
    @media(min-width: 1600px) {

        height: 87vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/1600px-login.svg");

        .form {
            margin-left: 30%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 620px;
            height: 605px;
            border-color: white;
        }

        h1 {
            font-size: 1.8em;
            margin-left: 43%;
            margin-top: 5%;
        }

        .email {
            margin-left: -18%;
            margin-top: 8.5%;
        }

        #email {
            width: 525px;
        }

        #forgot-email{
            margin-left: 48%;
            margin-top: -8%;
            font-size: 1em;
            width: 150px;
        }

        #forgot-email:hover{
            margin-left: 47.5%;
            margin-top: -8.3%;
            font-size: 1.1em;
            color: #dbd7d7;
            width: 180px;
        }

        #forgot-email:active{
            margin-left: 47.5%;
            margin-top: -8.3%;
            font-size: 1.1em;
            color: #F47216;
            width: 150px;
        }

        .senha {
            margin-left: -18%;
        }

        #password {
            width: 525px;
        }

        #forgot-password{
            margin-left: 47.5%;
            margin-top: -8%;
            font-size: 1.3em;
            width: 195px;
        }

        #forgot-password:hover{
            margin-left: 46.8%;
            margin-top: -8.3%;
            font-size: 1.4em;
            color: #dbd7d7;
            width: 205px;
        }

        #forgot-password:active{
            margin-left: 46.8%;
            margin-top: -8.3%;
            font-size: 1.4em;
            color: #F47216;
            width: 205px;
        }

        p {
            margin-left: 48%;
            font-size: 1.2em;
        }

        .btn-google {
            margin-left: 7.5%;
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
            margin-left: 7.5%;
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
            margin-left: 7.5%;
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
            margin-left: 23%;
        }

        .logar {
            margin-left: 38%;
            width: 160px;
            height: 50px;
            font-size: 1.7em;
            margin-top: 3.5%;
        }

        .logar:hover {
            margin-left: 38%;
            width: 160px;
            height: 50px;
            font-size: 1.7em;
            margin-top: 3.5%;
        }

        .logar:active {
            margin-left: 38%;
            width: 160px;
            height: 50px;
            font-size: 1.7em;
            margin-top: 3.5%;
        }

        .fox {
            margin-left: 21.8%;
            width: 130px;
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
            <img src="/images/Raposa-login.png" alt="fox" className='fox'/>
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
                </form>
            </nav>
            
        </FormComponent>
    )
}

export default Form;