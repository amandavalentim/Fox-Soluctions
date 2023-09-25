//Developed for Amanda Valentim and Gabriel Marques

'use client';
import styled from '@emotion/styled';
import Input from '../Login/Input/Input';
import Link from 'next/link';

const RecoveryEmailComponent = styled.section`

    .mobile {
        display: flex;
        justify-content: space-between;
    }

    .tablet-desktops {
        display: none;
    }
    
    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);
    .container-center{
        h3{
            text-align: center;
            color: #ffffff;
            font-family:'Poppins-Bold';
            margin-top: -45%;
            margin-left: 15%;
            width: 250px;
        }
        .input-email{
            text-align: center;
            margin-top: 15%;
            margin-left: 11%;
        }
        .btn-confirm{
            text-align: center;
            .confirm{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background: #93B413;
                font-size: 1.6em;
                color: #ffffff;
                margin: 40px;
                margin-top: 5%;
                margin-left: 28%;
            }
            .confirm:active{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background-color: #86a40f;
                font-size: 1.6em;
                color: #ffffff;
                margin: 40px;
                margin-top: 5%;
                margin-left: 28%;
            }
        }
    }

    //tablet
    @media(min-width: 450px){

        height: 70vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        form{
            width: 300px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            margin-top: 5%;
            margin-left: 29%;
        }

        .input-email{
            margin-top: 5%;
            margin-left: -28%;
        }

        #PhoneOrCPF{
            width: 200px;
        }

        h3 {
            padding-top: 10%;
            margin-left: 15.5%;
        }

        .input-email {
            margin-left: -15%;
            margin-top: 5%;
        }

        #phoneOrCPF {
            width: 220px;
        }

        .btn-confirm {
            text-align: center;
        }

        .confirm{
            width: 130px;
            height: 40px;
            border-radius: 15px;
            border: none;
            background: #93B413;
            font-size: 1.5em;
            color: #ffffff;
            margin: 40px;
            margin-top: 5%;
            margin-left: 15%;
        }

        .confirm:active{
            width: 130px;
            height: 40px;
            border-radius: 15px;
            border: none;
                background-color: #86a40f;
            font-size: 1.5em;
            color: #ffffff;
            margin: 40px;
            margin-top: 5%;
            margin-left: 15%;
        }
        
        background-image: url("/images/tablet-recuperar-email.svg");
        background-repeat: no-repeat;

        .fox2 {
            width: 70px;
            height: 70px;
            position: absolute;
            left: 345px;
            top: 460px;
        }

    }

    //Small Screens

    @media(min-width: 992px) {
        background-image: url("/images/992px-recuperar-email.svg");
        height: 65vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        form {
            margin-left: 34%;
        }

        .fox2 {
            left: 468px;
            top: 470px;
        }

        .input-email {
            margin-left: -24%;
            margin-top: 5%;
        }

        #phoneOrCPF {
            width: 250px;
        }

        .confirm {
            cursor: pointer;
        }

        .confirm:hover {
            background-color: #9fc214;
            cursor: pointer;
        }

        .confirm:active {
            background-color: #86a40f;
            cursor: pointer;
        }

    }

    //Medium Screen 
    @media(min-width: 1200px) {
        background-image: url("/images/1200px-recuperar-email.svg");
        height: 72vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        form {
            width: 400px;
            height: 295px;
        }

        h3 {
            font-size: 1.5em;
            margin-left: 16%;
        }

        .input-email {
            margin-left: -18.8%;
            margin-top: 10%;
        }

        #phoneOrCPF {
            width: 300px;
        }

        #phoneOrCPF::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.1em;
        }

        
        .btn-confirm {
            text-align: center;
        }

        .confirm{
            width: 130px;
            height: 40px;
            border-radius: 15px;
            border: none;
            background: #93B413;
            font-size: 1.5em;
            color: #ffffff;
            margin: 40px;
            margin-top: -1%;
            margin-left: 10%;
            cursor: pointer;
        }

        .confirm:hover{
            width: 130px;
            height: 40px;
            border-radius: 15px;
            border: none;
            background-color: #9fc214;
            font-size: 1.5em;
            color: #ffffff;
            margin: 40px;
            margin-top: -1%;
            margin-left: 10%;
            cursor: pointer;
        }

        .confirm:active{
            width: 130px;
            height: 40px;
            border-radius: 15px;
            border: none;
            background-color: #86a40f;
            font-size: 1.5em;
            color: #ffffff;
            margin: 40px;
            margin-top: -1%;
            margin-left: 10%;
            cursor: pointer;
        }

        .fox2 {
            left: 640px;
            top: 530px;
        }

    }

    //Large Screen 
    @media(min-width: 1600px) {
        background-image: url("/images/1600px-recuperar-email.svg");
        height: 69vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        form {
            width: 450px;
            height: 330px;
            margin-left: 35%;
            margin-top: 4%;
        }

        h3 {
            font-size: 1.6em;
            margin-left: 18.3%;
        }

        .input-email {
            margin-left: -22.5%;
            margin-top: 5%;
        }

        #phoneOrCPF {
            width: 330px;
        }

        #phoneOrCPF::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .confirm{
            width: 150px;
            height: 50px;
            border-radius: 15px;
            border: none;
            background: #93B413;
            font-size: 1.7em;
            color: #ffffff;
            margin: 40px;
            margin-top: -15%;
            margin-left: 11%;
            cursor: pointer;
        }

        .confirm:hover{
            width: 150px;
            height: 50px;
            border-radius: 15px;
            border: none;
            background-color: #9fc214;
            font-size: 1.7em;
            color: #ffffff;
            margin: 40px;
            margin-top: -15%;
            margin-left: 11%;
            cursor: pointer;
        }

        .confirm:active{
            width: 150px;
            height: 50px;
            border-radius: 15px;
            border: none;
            background-color: #86a40f;
            font-size: 1.7em;
            color: #ffffff;
            margin: 40px;
            margin-top: -15%;
            margin-left: 11%;
            cursor: pointer;
        }

        .fox2 {
            left: 740px;
            top: 565px;
            width: 90px;
            height: 90px;
        }
    }
`

const RecoveryEmail = function (){
    return(
        <RecoveryEmailComponent>
            <nav className='mobile'>
                <div className='container-center'>
                    <form>
                    <img src="/images/Stella-3.png" alt="fox" className='fox'/>
                        <h3>Recupere Seu Email:</h3>
                        <div className='input-email'>
                            <Input type="string" name="PhoneOrCPF" id="phoneOrCPF" placeholder='Digite Seu Telefone ou CPF'/>
                        </div>
                        <div className='btn-confirm'>
                            <button className='confirm' type='button'>
                                <Link href={'/ViewEmailPage'}>
                                    Enviar
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </nav>

            <nav className='tablet-desktops'>
                    <form>
                        <h3>Recupere Seu Email:</h3>
                        <div className='input-email'>
                            <Input type="string" name="PhoneOrCPF" id="phoneOrCPF" placeholder='Digite Seu Telefone ou CPF'/>
                        </div>
                        <div className='btn-confirm'>
                            <button className='confirm' type='button'>
                                <Link href={'/ViewEmailPage'}>
                                    Enviar
                                </Link>
                            </button>
                        </div>
                    </form>
                    <div className='fox1'>
                        <img src="/images/raposa-code-mobile.png" alt="fox" className='fox2'/>
                    </div>
            </nav>
        </RecoveryEmailComponent>
    )
}

export default RecoveryEmail;