'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Login/Input/Input';


const PageComponent = styled.section `

    * {
        color: white;
    }

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

    .fox {
        margin-top: -18%;
        margin-left: 63%;
        width: 100px;
    }

    h1 {
        font-size: 1.2em;
        font-family: 'Poppins-medium';
        margin-left: 11%;
    }

    #op {
        width: 250px;
        margin-left: 11%;
        margin-top: 30%;
    }

    #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1em;
    }

    .enviar {
        margin-top: 13%;
        margin-left: 24%;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
    }

    .enviar:active {
        margin-top: 13%;
        margin-left: 24%;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 20px;
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

        .desktop3 {
            display: none;
        }

        background-image: url("/images/tablet-recuperar-senha.svg");
        background-repeat: no-repeat;

        form {
            margin-top: 7%;
            margin-left: 29%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 320px;
            height: 350px;
            border-color: white;
       }

       h1 {
        margin-top: 10%;
        font-size: 1.1em;
        margin-left: 15%;
       }
       
       #op {
        margin-top: 27%;
        margin-left: 14.2%;
        width: 230px;
       }

       #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 0.8em;
    }

    .enviar {
        margin-top: 13%;
        margin-left: 23%;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
    }

    .enviar:active {
        margin-top: 13%;
        margin-left: 23%;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 20px;
    }

        .fox {
            position: absolute;
            left: 59px;
            top: 500px;
            width: 110px;
            height: 180px;
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

        .desktop3 {
            display: none;
        }

        background-image: url("/images/992px-recuperar-senha.svg");

        form {
            margin-top: 7%;
            margin-left: 27%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 470px;
            height: 350px;
            border-color: white;
        }

        h1 {
            font-size: 1.5em;
            margin-left: 17%;
        }

        #op {
            margin-top: 17%;
            margin-left: 20%;
            width: 280px;
        }

       #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.1em;
        }

        .enviar {
            margin-top: 7%;
            margin-left: 30%;
            width: 190px;
            height: 60px;
            font-size: 2em;
            background-color: #93B413;
            border: none;
            border-radius: 20px;
            cursor: pointer;
        }

        .enviar:hover {
            margin-top: 7%;
            margin-left: 30%;
            width: 190px;
            height: 60px;
            font-size: 2em;
            background-color: #9fc214;
            border: none;
            border-radius: 20px;
        }

        .enviar:active {
            margin-top: 7%;
            margin-left: 30%;
            width: 190px;
            height: 60px;
            font-size: 2em;
            background-color: #86a40f;
            border: none;
        }

        .fox {
            position: absolute;
            left: 101px;
            top: 570px;
        }
    }

    @media (min-width: 1200px) {

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

        background-image: url("/images/1200px-recuperar-senha.svg");

        form {
            margin-top: 4%;
            margin-left: 30.7%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 510px;
            height: 400px;
            border-color: white;
        }

        h1 {
            font-size: 1.9em;
            margin-left: 12%;
        }

        #op {
        margin-top: 18%;
        margin-left: 14.5%;
        width: 370px;
       }

       #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.5em;
        }

        .enviar {
            margin-top: 4%;
            margin-left: 30%;
            width: 200px;
            height: 70px;
            font-size: 2.2em;
            background-color: #93B413;
            border: none;
            border-radius: 20px;
            cursor: pointer;
        }

        .enviar:hover {
            margin-top: 4%;
            margin-left: 30%;
            width: 200px;
            height: 70px;
            font-size: 2.2em;
            background-color: #9fc214;
            border: none;
        }

        .enviar:active {
            margin-top: 4%;
            margin-left: 30%;
            width: 200px;
            height: 70px;
            font-size: 2.2em;
            background-color: #86a40f;
            border: none;
        }

        .fox {
            position: absolute;
            left: 68px;
            top: 650px;
        }
    }

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

        background-image: url("/images/1600px-recuperar-senha.svg");

        form {
            margin-top: 5%;
            margin-left: 30.7%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 570px;
            height: 440px;
            border-color: white;
        }

        h1 {
            margin-left: 15.7%;
        }

        #op {
        margin-top: 18%;
        margin-left: 17.5%;
        width: 370px;
       }

       .enviar {
            margin-top: 1%;
            margin-left: 32.7%;
            width: 200px;
            height: 70px;
            font-size: 2.2em;
            background-color: #93B413;
            border: none;
            border-radius: 20px;
            cursor: pointer;
        }

        .enviar:hover {
            margin-top: 1%;
            margin-left: 32.7%;
            width: 200px;
            height: 70px;
            font-size: 2.2em;
            background-color: #9fc214;
            border: none;
        }

        .enviar:active {
            margin-top: 1%;
            margin-left: 32.7%;
            width: 200px;
            height: 70px;
            font-size: 2.2em;
            background-color: #86a40f;
            border: none;
        }

        .fox {
            position: absolute;
            left: 59px;
            top: 725px;
        }
    }
 
`;

const ForgotPassword = function() {
    return (
        <PageComponent>

            <nav className='mobile'>
                <img src="/images/raposa-recuperar-senha.png" alt="fox" className='fox'/>
                <h1>Recupere a sua senha:</h1>
                <Input type="string" name="email" id="op" placeholder='Digite o seu email ou telefone'/>
                    <Link href={'/NewPasswordPage'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
            </nav>

            <nav className='tablet'>
                <form>
                    <h1>Recupere a sua senha:</h1>
                    <Input type="string" name="email" id="op" placeholder='Digite o seu email ou telefone'/>
                    <Link href={'/NewPasswordPage'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
                </form>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop1'>
                <form>
                    <h1>Recupere a sua senha:</h1>
                    <Input type="string" name="email" id="op" placeholder='Digite o seu email ou telefone'/>
                    <Link href={'/NewPasswordPage'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
                </form>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop2'>
                <form>
                    <h1>Recupere a sua senha:</h1>
                    <Input type="string" name="email" id="op" placeholder='Digite o seu email ou telefone'/>
                    <Link href={'/NewPasswordPage'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
                </form>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop3'>
                <form>
                    <h1>Recupere a sua senha:</h1>
                        <Input type="string" name="email" id="op" placeholder='Digite o seu email ou telefone'/>
                        <Link href={'/NewPasswordPage'}>
                            <button className='enviar' type='button'>
                                Enviar
                            </button>
                        </Link>
                </form>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

        </PageComponent>
    )
}

export default ForgotPassword;