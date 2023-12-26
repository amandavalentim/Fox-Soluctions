// Código desenvolvido por Gabriel

'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Login/Input/Input';


const PageComponent = styled.section `

    // Mobile

    * {
        color: white;
    }

    height: 46.5vh;

    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);

    .mobile {
        display: grid;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
    }

    .tablet-desktops {
        display: none;
    }

    .fox {
        margin-top: -18%;
        margin-left: 63%;
        width: 100px;
    }

    h1 {
        font-size: 1.2em;
        font-family: 'Poppins-medium';
        text-align: center;
        margin-top: 10%;
    }

    #op {
        width: 250px;
        margin-top: 20%;
    }

    #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1em;
    }

    .button {
        display: flex;
        justify-content: center;
    }

    .enviar {
        margin-top: 13%;
        /* margin-left: 24%; */
        text-align: center;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
    }

    .enviar:active {
        margin-top: 13%;
        /* margin-left: 24%; */
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 20px;
    }

    // Tablet
    @media(min-width: 768px) {

        height: 40vh;

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

        form {
            width: 300px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            margin-top: 6.5%;
            /* margin-left: 29%; */
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        h1 {
            padding-top: 5%;
            /* margin-left: 8.8%; */
        }

        .css-6w74q7 {
            margin: 0;
            width: 40vw;
        }
        
        #op {
            width: 235px;
            margin-top: 15%;
        }

        #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 0.8em;
        }

        .button {
            display: flex;
            justify-content: center;
        }

        .enviar {
            width: 130px;
            height: 40px;
            border-radius: 15px;
            border: none;
            background: #93B413;
            font-size: 1.5em;
            color: #ffffff;
            margin: 40px;
            margin-top: 15%;
            /* margin-left: 24%; */
            text-align: center;
            cursor: pointer;
        }

        .enviar:active {
            width: 130px;
            height: 40px;
            border-radius: 15px;
            border: none;
            background-color: #86a40f;
            font-size: 1.5em;
            color: #ffffff;
            margin: 40px;
            margin-top: 15%;
            text-align: center;
        }

        .fox {
            /* position: absolute;
            left: 39px;
            top: 450px; */
            width: 90px;
            height: 140px;
            margin-top: -55%;
            margin-left: 100%;
        }
    }

    // Small Screens
    @media(min-width: 992px) {

        height: 48vh;
        
        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/992px-recuperar-senha.svg"); */

        form {
            /* margin-left: 31.5%; */
            margin-top: 7%;
            width: 350px;
            height: 280px;
        }

        h1 {
            /* margin-left: 15%; */
        }

        #op {
            /* margin-left: 15%; */
            margin-top: 13%;
            width: 260px;
        }

        #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .button {
            display: flex;
            justify-content: center;
        }

        .enviar {
            cursor: pointer;
            /* margin-left: 32%; */
        }

        .enviar:hover {
            background-color: #9fc214;
            cursor: pointer;
            /* margin-left: 32%; */
        }

        .enviar:active {
            background-color: #86a40f;
            cursor: pointer;
            /* margin-left: 32%; */
        }

        .fox {
            /* position: absolute; */
            /* left: 9px;
            top: 520px; */
        }
    }

    // Medium Screens
    @media (min-width: 1200px) {

        height: 60vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/1200px-recuperar-senha.svg"); */

        form {
            width: 400px;
            height: 295px;
            margin-top: 13%;
            /* margin-left: 33.5%; */
        }

        h1 {
            font-size: 1.5em;
            /* margin-left: 11.2%; */
        }

        #op {
            /* margin-left: 12.5%; */
            margin-top: 6%;
            width: 320px;
       }

       #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .button {
            display: flex;
            justify-content: center;
        }

        .enviar {
            width: 150px;
            height: 50px;
            border-radius: 15px;
            border: none;
            background: #93B413;
            font-size: 1.7em;
            color: #ffffff;
            margin: 40px;
            margin-top: 3%;
            /* margin-left: 27.5%; */
            text-align: center;
            cursor: pointer;
        }

        .enviar:hover {
            width: 150px;
            height: 50px;
            border-radius: 15px;
            border: none;
            background-color: #9fc214;
            font-size: 1.7em;
            color: #ffffff;
            margin: 40px;
            margin-top: 3%;
            /* margin-left: 27.5%; */
            text-align: center;
            cursor: pointer;
        }

        .enviar:active {
            width: 150px;
            height: 50px;
            border-radius: 15px;
            border: none;
            background-color: #86a40f;
            font-size: 1.7em;
            color: #ffffff;
            margin: 40px;
            margin-top: 3%;
            /* margin-left: 27.5%; */
            text-align: center;
            cursor: pointer;
        }

        .fox {
            /* position: absolute; */
            left: -3px;
            top: 600px;
        }

    }

    @media(min-width: 1400px) {
        height: 63vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        form {
            /* margin-left: 36%; */
            margin-top: 17%;
        }

        .fox {
            /* position: absolute; */
            left: 1px;
            top: 620px;
        }

        h1 {
            /* margin-left: 12%; */
            margin-top: 1%;
            text-align: center;
        }

        .button {
            display: flex;
            justify-content: center;
        }
        
        .enviar {
            text-align: center;
            margin-top: -1%;
            /* margin-left: 27%; */
            width: 150px;
            height: 50px;
            font-size: 2em;
            background-color: #93B413;
            border: none;
            border-radius: 15px;
            cursor: pointer;
        }

        .enviar:hover {
            text-align: center;
            margin-top: -1%;
            /* margin-left: 27%; */
            width: 150px;
            height: 50px;
            font-size: 2em;
            background-color: #9fc214;
            border: none;
        }

        .enviar:active {
            text-align: center;
            margin-top: -1%;
            /* margin-left: 27%; */
            width: 150px;
            height: 50px;
            font-size: 2em;
            background-color: #86a40f;
            border: none;
        }
    }

    // Large Screens
    @media(min-width: 1600px) {

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/1600px-recuperar-senha.svg"); */
        height: 60vh;

        form {
            width: 450px;
            height: 330px;
            /* margin-left: 35%; */
            margin-top: 15%;
        }

        h1 {
            font-size: 1.6em;
            /* margin-left: 13.5%; */
        }

        #op {
            /* margin-left: 13.5%; */
            margin-top: -5%;
            width: 330px;
       }

       #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .button {
            display: flex;
            justify-content: center;
        }

       .enviar {
            width: 150px;
            height: 50px;
            border-radius: 15px;
            border: none;
            background: #93B413;
            font-size: 1.7em;
            color: #ffffff;
            margin: 40px;
            margin-top: -15%;
            /* margin-left: 28%; */
            text-align: center;
            cursor: pointer;
        }

        .enviar:hover {
            width: 150px;
            height: 50px;
            border-radius: 15px;
            border: none;
            background-color: #9fc214;
            font-size: 1.7em;
            color: #ffffff;
            margin: 40px;
            margin-top: -15%;
            /* margin-left: 28%; */
            text-align: center;
            cursor: pointer;
        }

        .enviar:active {
            width: 150px;
            height: 50px;
            border-radius: 15px;
            border: none;
            background-color: #86a40f;
            font-size: 1.7em;
            color: #ffffff;
            margin: 40px;
            margin-top: -15%;
            /* margin-left: 28%; */
            text-align: center;
            cursor: pointer;
        }

        .fox {
            /* position: absolute; */
            left: 7px;
            top: 670px;
            width: 105px;
            height: 160px;
        }
    }
 
`;

const ForgotPassword = function() {
    return (
        <PageComponent>

            <nav className='mobile'>
                <img src="/images/raposa-recuperar-senha.png" alt="fox" className='fox'/>
                {/* Mobile page content */}
                <h1>Recupere a sua senha:</h1>
                <Input type="string" name="email" id="op" placeholder='Digite o seu e-mail ou telefone'/>
                    <div className="button">
                        <Link href={'/NewPasswordPage'}>
                            <button className='enviar' type='button'>
                                Enviar
                            </button>
                        </Link>
                    </div>
            </nav>

            <nav className='tablet-desktops'>
                <form>
                    {/* Recovery Password Form Content */}
                    <h1>Recupere a sua senha:</h1>
                    <div className='email'>
                        <Input type="string" name="email" id="op" placeholder='Digite o seu e-mail ou telefone'/>
                    </div>
                    <div className="button">
                        <Link href={'/NewPasswordPage'}>
                            <button className='enviar' type='button'>
                                Enviar
                            </button>
                        </Link>
                    </div>
                </form>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

        </PageComponent>
    )
}

export default ForgotPassword;