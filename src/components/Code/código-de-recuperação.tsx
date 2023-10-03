//Código desenvolvido por Gabriel
'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Login/Input/Input';

const FormComponent3 = styled.section `

    //Mobile
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

    .desktop3 {
        display: none;
    }

    h1 {
        text-align: center;
        font-size: 1.2em;
        font-family: 'Poppins-medium';
        margin-left: 1%;
        padding-top: 10%;
        color: white;
    }

    #code {
        padding-top: 20%;
        margin-left: 15%;
        color: white;
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
        color: #C7C7C7;
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
        color: #C7C7C7;
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
        color: white;
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

    // Tablet
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

        .desktop3 {
            display: none;
        }

        background-image: url("/images/tablet-recovery-code.svg");
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
            color: white;
        }

        .input {
            margin-top: -12%;
            color: white;
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
            color: white;
        }

        .fox {
            width: 95px;
            height: 120px;
            margin-left: 10%;
            margin-top: 20%;
        }
    }

    // Small Screens
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

        .desktop3 {
                display: none;
        }

        background-image: url("/images/992px-recovery-code.svg");
        height: 75vh;

        form {
            margin-top: 6.5%;
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
            color: white;
        }

        #code {
            width: 330px;
        }

        h1 {
            margin-left: -1%;
            color: white;
        }

        p {
            margin-left: 78%;
        }

        .resend {
            margin-top: 6%;
            font-size: 0.9em;
            text-align: center;
            margin-left: -55%;
            color: #C7C7C7;
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
            color: #C7C7C7;
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

        // Medium Screens
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

            .desktop3 {
                display: none;
            }

            form {
                margin-top: 4%;
                margin-left: 34.5%;
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
                width: 400px;
                height: 350px;
                border-color: white;
            }

            background-image: url("/images/1200px-recovery-code.svg");
            height: 70vh;

            h1 {
                font-size: 1.2em;
                margin-top: -2%;
                margin-left: 0.4%;
                color: white;
            }

            #code {
                width: 350px;
                color: white;
                margin-left: 11%;
                margin-top: 10%;
            }

            .resend {
                margin-top: 4%;
                font-size: 0.95em;
                text-align: center;
                margin-left: -55%;
                color: #C7C7C7;
                cursor: pointer;
            }

            .resend:active {
                margin-top: 4%;
                font-size: 0.95em;
                text-align: center;
                margin-left: -55%;
                color: #86a40f;
                cursor: pointer;
            }

            .rename {
                font-size: 0.9em;
                text-align: center;
                margin-left: 47%;
                margin-top: -10.3%;
                color: #C7C7C7;
                cursor: pointer;
            }

            .rename:active {
                font-size: 0.9em;
                text-align: center;
                margin-left: 47%;
                margin-top: -10.3%;
                color: #86a40f;
                cursor: pointer;
            }

            .enviar {
                width: 140px;
                height: 40px;
                font-size: 1.7em;
                margin-left: 32.5%;
                cursor: pointer;
                color: white;
                border-radius: 12px;
                margin-top: 5.5%;
            }

            .enviar:hover {
                width: 140px;
                height: 40px;
                font-size: 1.7em;
                margin-left: 32.5%;
                background-color: #9fc214;
                cursor: pointer;
                border-radius: 12px;
                margin-top: 5.5%;
            }

            .enviar:focus {
                width: 140px;
                height: 40px;
                font-size: 1.7em;
                margin-left: 32.5%;
                background-color: #86a40f;
                cursor: pointer;
                border-radius: 12px;
                margin-top: 5.5%;
            }

            .fox {
                width: 100px;
                margin-top: 13%;
            }
        }

        @media(min-width: 1400px) {

            background-image: url("/images/1400px-recovery-code.svg");
            height: 70vh;

            form {
                margin-top: 4.5%;
                margin-left: 35.5%;
            }

            .rename {
                font-size: 0.95em;
                text-align: center;
                margin-left: 47%;
                margin-top: -8.8%;
                color: #C7C7C7;
                cursor: pointer;
            }

            .rename:active {
                font-size: 0.95em;
                text-align: center;
                margin-left: 47%;
                margin-top: -8.8%;
                color: #86a40f;
                cursor: pointer;
            }

        }

        // Large Screens
        @media(min-width: 1600px) {

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
                display: flex;
                justify-content: space-between;
            }

            background-image: url("/images/1600px-recovery-code.svg");

            form {
                margin-top: 3.5%;
                margin-left: 33.5%;
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
                width: 480px;
                height: 400px;
                border-color: white;
            }

            h1 {
                font-size: 1.4em;
                margin-top: -2%;
                color: white;
            }

            p {
                margin-top: -13%;
            }

            #code {
                width: 430px;
                color: white;
            }

            .resend {
                margin-top: 6%;
                font-size: 1em;
                text-align: center;
                margin-left: -55%;
                color: #C7C7C7;
                cursor: pointer;
            }

            .resend:active {
                font-size: 1em;
                text-align: center;
                margin-left: -55%;
                margin-top: 6%;
                color: #86a40f;
                cursor: pointer;
            }

            .rename {
                font-size: 0.95em;
                text-align: center;
                margin-left: 46.5%;
                margin-top: -8.9%;
                color: #C7C7C7;
                cursor: pointer;
            }

            .rename:active {
                font-size: 0.95em;
                text-align: center;
                margin-left: 46.5%;
                margin-top: -8.9%;
                color: #86a40f;
                cursor: pointer;
            }

            .enviar {
                width: 150px;
                height: 50px;
                font-size: 1.8em;
                margin-left: 35%;
                cursor: pointer;
                color: white;
            }

            .enviar:hover {
                width: 150px;
                height: 50px;
                font-size: 1.8em;
                margin-left: 35%;
                background-color: #9fc214;
                cursor: pointer;
            }

            .enviar:focus {
                width: 150px;
                height: 50px;
                font-size: 1.8em;
                margin-left: 35%;
                background-color: #86a40f;
                cursor: pointer;
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
                {/* Content */}
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
                <Link href={'/'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                </Link>
                {/* Stella our Mascot */}
                <img src="/images/raposa-code-mobile.png" alt="fox" className='fox'/>
            </nav>

            <nav className='tablet'>
                {/* Content */}
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
                    <Link href={'/'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
                </form>
                {/* Stella our Mascot */}
                <img src="/images/raposa-code.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop1'>
                {/* Content */}
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
                    <Link href={'/'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
                </form>
                {/* Stella our Mascot */}
                <img src="/images/raposa-code.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop2'>
                {/* Content */}
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
                    <Link href={'/'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
                </form>
                {/* Stella our Mascot */}
                <img src="/images/raposa-code.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop3'>
                {/* Content */}
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
                    <Link href={'/'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
                </form>
                {/* Stella our Mascot */}
                <img src="/images/raposa-code.png" alt="fox" className='fox'/>
            </nav>
        </FormComponent3>
    )
}

export default RecoveryCode;
