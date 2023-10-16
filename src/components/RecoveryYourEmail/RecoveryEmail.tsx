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
            margin-top: 5.5%;
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
            margin-left: 14.5%;
        }

        .input-email {
            margin-left: -14.5%;
            margin-top: 3.5%;
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
        background-image: url("/images/992px-recuperar-senha.svg");
        height: 65vh;

        form {
            margin-left: 34.2%;
            height: 250px;
        }

        h3 {
            margin-left: 13.5%;
        }

        .input-email {
            margin-left: -19%;
            margin-top: 3%;
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
                cursor: pointer;
                margin-top: 2.5%;
            }
            .confirm:hover{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background-color: #9fc214;
                font-size: 1.6em;
                color: #ffffff;
                margin: 40px;
                cursor: pointer;
                margin-top: 2.5%;
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
                cursor: pointer;
                margin-top: 2.5%;
            }
        }

        .fox2 {
            margin-top: 1%;
            margin-left: 12.5%;
        }
    }

    //Medium Screen 
    @media(min-width: 1200px) {
        background-image: url("/images/1200px-recuperar-senha.svg");

        form {
            margin-left: 37%;
            height: 230px;
        }

        h3 {
            margin-left: 13.5%;
        }

        .input-email {
            margin-left: -28%;
            margin-top: 5%;
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
                cursor: pointer;
                margin-top: -10%;
            }
            .confirm:hover{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background-color: #9fc214;
                font-size: 1.6em;
                color: #ffffff;
                margin: 40px;
                cursor: pointer;
                margin-top: -10%;
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
                cursor: pointer;
                margin-top: -10%;
            }
        }

        .fox2 {
            margin-top: 1.1%;
            margin-left: 20.5%;
        }
    }


    // 1476-708
    @media(min-width: 1400px) {
        height: 72vh;

        background-image: url("/images/1400px-recuperar-senha.svg");

        .form {
            margin-left: 38.8%;
            margin-top: 7%;
        }

        h3 {
            font-size: 1.3em;
            margin-left: 10%;
        }

        .input-email {
            margin-left: -28%;
        }

        #phoneOrCPF::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1em;
        }

        .btn-confirm{
            text-align: center;
            .confirm{
                width: 140px;
                height: 50px;
                border-radius: 15px;
                border: none;
                background: #93B413;
                font-size: 1.6em;
                color: #ffffff;
                margin-top: -5%;
                cursor: pointer;
            }

            .confirm:hover{
                width: 140px;
                height: 50px;
                border-radius: 15px;
                border: none;
                background-color: #9fc214;
                font-size: 1.6em;
                color: #ffffff;
                margin-top: -5%;
                cursor: pointer;
            }

            .confirm:active{
                width: 140px;
                height: 50px;
                border-radius: 15px;
                border: none;
                background-color: #86a40f;
                font-size: 1.6em;
                color: #ffffff;
                margin-top: -5%;
                cursor: pointer;
            }
        }

        .fox2 {
            margin-left: 23%;
            margin-top: 3%;
            width: 90px;
            height: 90px;
        }
    }
 
    //Large Screen 
    @media(min-width: 1600px) {
        background-image: url("/images/1600px-recuperar-email.svg");
        height: 69vh;

        form {
            margin-left: 31.5%;
        }

        .input-email {
            margin-top: -2.5%;
            margin-left: -39.5%;
        }

        .btn-confirm{
            text-align: center;
            margin-top: -23%;
            .confirm{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background: #93B413;
                font-size: 1.6em;
                color: #ffffff;
                margin: 40px;
                cursor: pointer;
                margin-top: 5%;
            }

            .confirm:hover{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background-color: #9fc214;
                font-size: 1.6em;
                color: #ffffff;
                margin: 40px;
                cursor: pointer;
                margin-top: 5%;
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
                cursor: pointer;
                margin-top: 5%;
            }
        }

        .fox2 {
            margin-left: 24%;
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
                        <h3>Recupere Seu E-mail:</h3>
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
                    <form className='form'>
                        <h3>Recupere Seu E-mail:</h3>
                        <div className='input-email'>
                            <Input type="string" name="PhoneOrCPF" id="phoneOrCPF" placeholder='Digite Seu Telefone ou CPF'/>
                        </div>
                        <div className='btn-confirm'>
                            <Link href={'/ViewEmailPage'}>
                                <button className='confirm' type='button'>
                                        Enviar
                                </button>
                            </Link>
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