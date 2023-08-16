'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Forms/Input/Input';
import { useEffect } from 'react';

const FormComponent3 = styled.section `

    height: 80vh;

    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);

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

    h1 {
        text-align: center;
        font-size: 1.2em;
        font-family: 'Poppins-medium';
        margin-left: 1%;
        padding-top: 10%;
    }

    #code {
        padding-top: 20%;
        margin-left: 15%;
    }

    p{
        margin-left: 68%;
        margin-top: -3%;
    }

    .resend {
        margin-top: 5%;
        font-size: 0.7em;
        text-align: center;
        margin-left: -55%;
        color: #93B413;
    }

    .resend:active {
        font-size: 0.7em;
        text-align: center;
        margin-left: -55%;
        color: #86a40f;
    }

    .rename {
        font-size: 0.7em;
        text-align: center;
        margin-left: 45%;
        margin-top: -10.2%;
        color: #93B413;
    }

    .rename:active {
        font-size: 0.7em;
        text-align: center;
        margin-left: 45%;
        margin-top: -10.2%;
        color: #86a40f;
    }

    .enviar {
        margin-top: 10%;
        margin-left: 24%;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
    }

    .enviar:active {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 20px;
    }

    .fox {
        margin-left: 40%;
        margin-top: 0.1%;
    }

    @media(min-width: 768px) {

        .mobile {
            display: none;
        }

        .tablet {
            display: flex;
            justify-content: space-between;
        }

        .desktop1 {
            display: none;
        }

        .desktop2 {
            display: none;
        }

        background-image: url("/images/tablet-recuperar-senha.svg");
        background-repeat: no-repeat;

        form {
            margin-top: 6%;
            margin-left: 29%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 320px;
            height: 350px;
            border-color: white;
        }

        h1 {
            font-size: 1.1em;
            margin-left: 3%;
        }

        .input {
            margin-top: -12%;
        }

        #code {
            width: 230px;
        }

        p {
            margin-top: -7%;
        }

        .resends {
            margin-top: -4%;
        }

        .enviar {
            margin-top: 11%;
        }

        .fox {
            width: 80px;
            height: 120px;
            margin-left: 10%;
            margin-top: 20%;
        }
    }

    @media(min-width: 992px) {

        .mobile {
            display: none;
        }

        .tablet {
            display: none;
        }

        .desktop1 {
            display: flex;
            justify-content: space-between;
        }

        .desktop2 {
            display: none;
        }

        background-image: url("/images/992px-recuperar-senha.svg");

        form {
            margin-top: 8%;
            margin-left: 30%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 420px;
            height: 350px;
            border-color: white;
        }

        .input {
            margin-top: -16%;
            margin-left: -5%;
        }

        #code {
            width: 330px;
        }

        h1 {
            margin-left: -1%;
        }

        p {
            margin-left: 78%;
        }

        .resend {
            margin-top: 6%;
            font-size: 0.9em;
            text-align: center;
            margin-left: -55%;
            color: #93B413;
            cursor: pointer;
        }

        .resend:active {
            font-size: 0.9em;
            text-align: center;
            margin-left: -55%;
            margin-top: 6%;
            color: #86a40f;
        }

        .rename {
            font-size: 0.9em;
            text-align: center;
            margin-left: 45%;
            margin-top: -9.5%;
            color: #93B413;
            cursor: pointer;
        }

        .rename:active {
            font-size: 0.9em;
            text-align: center;
            margin-top: -10.5%;
            margin-left: 45%;
            color: #86a40f;
        }

        .enviar {
            margin-top: 8%;
            margin-left: 30%;
            cursor: pointer;
        }

        .enviar:hover {
            margin-top: 8%;
            margin-left: 30%;
            background-color: #9fc214;
            cursor: pointer;
        }

        .enviar:active {
            margin-top: 8%;
            margin-left: 30%;
            background-color: #86a40f;
            cursor: pointer;
        }

        @media(min-width: 1200px) {

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
                display: flex;
                justify-content: space-between;
            }

            form {
                margin-top: 3%;
                margin-left: 31%;
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
                width: 550px;
                height: 430px;
                border-color: white;
            }

            background-image: url("/images/1200px-recuperar-senha.svg");

            h1 {
                font-size: 1.4em;
                margin-top: -2%;
            }

            #code {
                width: 430px;
            }

            .resend {
                margin-top: 6%;
                font-size: 1.1em;
                text-align: center;
                margin-left: -55%;
                color: #93B413;
                cursor: pointer;
            }

            .resend:active {
                font-size: 1.1em;
                text-align: center;
                margin-left: -55%;
                margin-top: 6%;
                color: #86a40f;
            }

            .rename {
                font-size: 1.1em;
                text-align: center;
                margin-left: 45%;
                margin-top: -8.6%;
                color: #93B413;
                cursor: pointer;
            }

            .rename:active {
                font-size: 1.1em;
                text-align: center;
                margin-top: -10.5%;
                margin-left: 45%;
                color: #86a40f;
            }

            .enviar {
                width: 200px;
                height: 60px;
                font-size: 2em;
                margin-left: 35%;
            }

            .fox {
                width: 100px;
                margin-top: 15%;
            }
        }
    }
`;

const RecoveryCode = function() {
    return (
        <FormComponent3>
            <nav className='mobile'>
                <h1>Digite o código que<br/> enviamos para você:</h1>
                <div className='input'>
                    <Input type="number" name="code" id="code"/>
                    <p>01:00</p>
                </div>
                <div className='resend'>
                    <a href="" id='a1'>Não recebeu?<br/> Reenviar</a>
                </div>
                <div className='rename'>
                    <a href="" id='a2'>Não é o seu email?<br/> Reescreva</a>
                </div>
                <Link href={'/page7'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                </Link>
                <img src="/images/raposa-code-mobile.png" alt="fox" className='fox'/>
            </nav>

            <nav className='tablet'>
                <form>
                    <h1>Digite o código que<br/> enviamos para você:</h1>
                    <div className='input'>
                        <Input type="number" name="code" id="code"/>
                        <p>01:00</p>
                    </div>
                    <div className='resends'>
                    <div className='resend'>
                        <a href="" id='a1'>Não recebeu?<br/> Reenviar</a>
                    </div>
                    <div className='rename'>
                        <a href="" id='a2'>Não é o seu email?<br/> Reescreva</a>
                    </div>
                    </div>
                    <Link href={'/page7'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
                </form>
                <img src="/images/raposa-code.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop1'>
            <form>
                    <h1>Digite o código que<br/> enviamos para você:</h1>
                    <div className='input'>
                        <Input type="number" name="code" id="code"/>
                        <p>01:00</p>
                    </div>
                    <div className='resends'>
                    <div className='resend'>
                        <a href="" id='a1'>Não recebeu?<br/> Reenviar</a>
                    </div>
                    <div className='rename'>
                        <a href="" id='a2'>Não é o seu email?<br/> Reescreva</a>
                    </div>
                    </div>
                    <Link href={'/page7'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
                </form>
                <img src="/images/raposa-code.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop2'>
                <form>
                    <h1>Digite o código que<br/> enviamos para você:</h1>
                    <div className='input'>
                        <Input type="number" name="code" id="code"/>
                        <p>01:00</p>
                    </div>
                    <div className='resends'>
                    <div className='resend'>
                        <a href="" id='a1'>Não recebeu?<br/> Reenviar</a>
                    </div>
                    <div className='rename'>
                        <a href="" id='a2'>Não é o seu email?<br/> Reescreva</a>
                    </div>
                    </div>
                    <Link href={'/page7'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
                </form>
                <img src="/images/raposa-code.png" alt="fox" className='fox'/>
            </nav>
        </FormComponent3>
    )
}

export default RecoveryCode;

function getTimeRemaining(e: any): { total: any; hours: any; minutes: any; seconds: any; } {
    throw new Error('Function not implemented.');
}
function setTimer(arg0: string) {
    throw new Error('Function not implemented.');
}

