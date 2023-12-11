//Developed for Amanda Valentim and Gabriel Marques

'use client';
import styled from '@emotion/styled';
import Input from '../Login/Input/Input';
import Link from 'next/link';

const RecoveryEmailComponent = styled.section`

    .mobile {
        display: grid;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
    }

    .tablet-desktops {
        display: none;
    }
    
    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);

    height: 50vh;

    .container-center{

        display: grid;
        justify-content: space-between;
        justify-content: center;
        align-items: center;

        .fox{
            margin-left: -12.5%;
            width: 100px;
        }

        h3{
            text-align: center;
            color: #ffffff;
            font-family:'Poppins-Bold';
            padding: 0;
            margin-top: -8%;
            font-size: 1.3em;
            /* margin-top: -45%;
            margin-left: 15%; */
            /* width: 250px; */
        }
        .input-email{
            text-align: center;
            margin-top: 8%;
            font-size: 1.3em;
        }
        #phoneOrCPF::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.3em;
        }
        .btn-confirm{
            text-align: center;
            margin-top: 5%;
            .confirm{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background: #93B413;
                font-size: 1.6em;
                color: #ffffff;
                /* margin: 40px; */
                /* margin-top: 5%; */
                /* margin-left: 28%; */
            }
            .confirm:active{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background-color: #86a40f;
                font-size: 1.6em;
                color: #ffffff;
                /* margin-top: 5%; */
                /* margin: 40px; */
                /* margin-top: 5%; */
                /* margin-left: 28%; */
            }
        }
    }

    //tablet
    @media(min-width: 768px){

        height: 50.5vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        background: #0A53B5;

        form{
            width: 300px;
            height: 214px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            margin-top: 7.5%;
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        .input-email{
            margin-top: 5%;
            margin-left: -28%;
        }

        #PhoneOrCPF{
            width: 200px;
        }

        h3 {
            padding-top: 5%;
            text-align: center;
            /* margin-left: 14.5%; */
        }

        .input-email {
            /* margin-left: -14.5%; */
            text-align: center;
            margin-top: -5%;
        }

        #phoneOrCPF {
            width: 220px;
        }

        .btn-confirm {
            text-align: center;
            .confirm{
            width: 130px;
            height: 40px;
            border-radius: 15px;
            border: none;
            background: #93B413;
            font-size: 1.5em;
            color: #ffffff;
            margin-top: -55%;
        }

        .confirm:active{
            width: 130px;
            height: 40px;
            border-radius: 15px;
            border: none;
            background-color: #86a40f;
            font-size: 1.5em;
            color: #ffffff;
            margin-top: -55%;
        }
        }

        .fox2 {
            width: 70px;
            height: 70px;
            /* position: absolute; */
            /* left: 345px;
            top: 425px; */
            text-align: center;
            margin-left: 40%;
        }

    }

    //Small Screens

    @media(min-width: 992px) {

        display: grid;
        justify-content: space-between;
        justify-content: center;
        align-items: center;

        height: 65vh;

        form {
            /* margin-left: 34.2%; */
            height: 250px;
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        h3 {
            /* margin-left: 13.5%; */
            text-align: center;
        }

        .input-email {
            /* margin-left: -19%; */
            text-align: center;
            margin-top: 3%;
        }

        .btn-confirm{
            text-align: center;
            /* padding-top: 5%; */
            .confirm{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background: #93B413;
                font-size: 1.6em;
                color: #ffffff;
                margin: 0;
                cursor: pointer;
                /* margin-top: 2.5%; */
            }
            .confirm:hover{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background-color: #9fc214;
                font-size: 1.6em;
                color: #ffffff;
                margin: 0;
                cursor: pointer;
                /* margin-top: 2.5%; */
            }
            .confirm:active{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background-color: #86a40f;
                font-size: 1.6em;
                color: #ffffff;
                margin: 0;
                cursor: pointer;
                /* margin-top: 2.5%; */
            }
        }

        .fox2 {
            margin-top: 1%;
            margin-left: 40%;
            text-align: center;
        }
    }

    //Medium Screen 
    @media(min-width: 1200px) {
        
        display: grid;
        justify-content: space-between;
        justify-content: center;
        align-items: center;

        height: 60vh;

        form {
            display: grid;
            justify-content: center;
            align-items: center;
            height: 260px;
            width: 350px;
            margin-top: 5%;
        }

        h3 {
            /* margin-left: 13.5%; */
            text-align: center;
            font-size: 1.4em;
            margin: 0;
            padding: 0;
        }

        .input-email {
            text-align: center;
            padding-top: 2%;
            margin: 0;
        }

        #phoneOrCPF {
            width: 250px;
            margin: 0;
        }

        #phoneOrCPF::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.3em;
        }

        .btn-confirm{
            text-align: center;
            margin: 0;
            .confirm{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background: #93B413;
                font-size: 1.6em;
                color: #ffffff;
                /* margin: 40px; */
                cursor: pointer;
                margin: 0;
            }
            .confirm:hover{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background-color: #9fc214;
                font-size: 1.6em;
                color: #ffffff;
                margin: 0;
                cursor: pointer;
                /* margin-top: -10%; */
            }
            .confirm:active{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background-color: #86a40f;
                font-size: 1.6em;
                color: #ffffff;
                margin: 0;
                cursor: pointer;
                /* margin-top: -10%; */
            }
        }

        .fox2 {
            margin-top: 1.1%;
            margin-left: 40%;
            text-align: center;
        }
    }


    // 1476-708
    @media(min-width: 1400px) {
        height: 72vh;

        display: grid;
        justify-content: space-between;
        justify-content: center;
        align-items: center;

        .form {
            /* margin-left: 38.8%; */
            text-align: center;
            margin-top: 7%;
            width: 420px;
            height: 300px;
        }

        h3 {
            font-size: 1.3em;
            /* margin-left: 10%; */
        }

        .input-email {
            /* margin-left: -28%; */
            width: 100%;
        }

        #phoneOrCPF {
            width: 300px;
        }

        #phoneOrCPF::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.5em;
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
                /* margin-top: -5%; */
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
                /* margin-top: -5%; */
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
                /* margin-top: -5%; */
                cursor: pointer;
            }
        }

        .fox2 {
            margin-left: 40%;
            margin-top: 1%;
            width: 90px;
            height: 90px;
        }
    }
 
    //Large Screen 
    @media(min-width: 1600px) {
        
        height: 69vh;

        display: grid;
        justify-content: space-between;
        justify-content: center;
        align-items: center;

        form {
            /* margin-left: 31.5%; */
            text-align: center;
        }

        .input-email {
            margin-top: -2.5%;
            /* margin-left: -39.5%; */
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
            margin-left: 42%;
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