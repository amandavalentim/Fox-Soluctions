// Developed by Gabriel Marques

'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Login/Input/Input';

const Formcomponent4 = styled.section `

    //Mobile
    height: 98vh;

    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);

    .mobile{
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
        color: white;
        padding-top: 10%;
        font-size: 1.3em;
        margin-left: 9%;
    }

    #password {
        margin-top: 20%;
        margin-left: 14%;
    }

    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    #confirm-password {
        margin-top: 13%;
        margin-left: 14%;
    }

    #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    .confirmar {
        margin-top: 12%;
        margin-left: 23%;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
        color: white;
    }

    .confirmar:active {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 20px;
    }

    //Tablet
    @media(min-width: 768px) {
        
        .mobile{
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

        height: 62vh;

        form {
            margin-top: 4%;
            margin-left: 30%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 290px;
            height: 275px;
            border-color: white;
        }

        h1 {
            font-size: 1.2em;
        }

        #password {
            margin-top: 15%;
            margin-left: 11%;
            width: 230px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1em;
        }

        #confirm-password {
            margin-top: 5%;
            margin-left: 11%;
            width: 230px;
        }

        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1em;
        }

        .confirmar {
            margin-top: -1%;
            margin-left: 27%;
            width: 140px;
            height: 40px;
            font-size: 1.3em;
            background-color: #93B413;
            border: none;
            border-radius: 10px;
            color: white;
        }

        .confirmar:active {
            margin-top: -1%;
            margin-left: 27%;
            width: 140px;
            height: 40px;
            font-size: 1.3em;
            background-color: #86a40f;
            border: none;
            border-radius: 10px;
            color: white;
        }

        .fox {
            margin-left: -110%;
            margin-top: -50%;
            width: 100px;
        }

        //Small Screens
        @media(min-width: 992px) {

            .mobile{
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
            height: 65vh;

            form {
                margin-top: 4.3%;
                margin-left: 32.5%;
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
                width: 330px;
                height: 330px;
                border-color: white;
            }

            h1 {
                font-size: 1.3em;
                margin-left: 11%;
            }

            #password {
                margin-top: 15%;
                margin-left: 15%;
                width: 232px;
            }

            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.2em;
            }

            #confirm-password {
                margin-top: 5%;
                margin-left: 15%;
                width: 232px;
            }

            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.2em;
            }

            .confirmar {
                width: 160px;
                height: 50px;
                font-size: 1.6em;
                margin-top: 2%;
                margin-left: 24.8%;
                background-color: #93B413;
                border: none;
                border-radius: 10px;
                color: white;
            }
            
            .confirmar:hover {
                width: 160px;
                height: 50px;
                font-size: 1.6em;
                margin-top: 2%;
                margin-left: 24.8%;
                background-color: #9fc214;
                border: none;
                border-radius: 10px;
                color: white;
            }

            .confirmar:active {
                width: 160px;
                height: 50px;
                font-size: 1.6em;
                margin-top: 2%;
                margin-left: 24.8%;
                background-color: #86a40f;
                border: none;
                border-radius: 10px;
                color: white;
            }

            .fox {
                margin-left: -103.5%;
            }
        }

        //Medium Screens
        @media(min-width: 1200px) {

            .mobile{
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
                margin-top: 2.5%;
                margin-left: 34.2%;
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
                width: 400px;
                height: 355px;
                border-color: white;
            }

            h1 {
                font-size: 1.6em;
                margin-left: 10.5%;
            }

            #password {
                margin-top: 12%;
                margin-left: 12%;
                width: 305px;
                height: 32px;
            }

            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.4em;
            }

            #confirm-password {
                margin-top: 1%;
                margin-left: 12%;
                width: 305px;
                height: 32px;
            }

            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.4em;
            }

            .confirmar {
                width: 170px;
                height: 55px;
                font-size: 1.7em;
                margin-top: -4%;
                margin-left: 28%;
                background-color: #93B413;
                border: none;
                border-radius: 10px;
                color: white;
            }
            
            .confirmar:hover {
                width: 170px;
                height: 55px;
                font-size: 1.7em;
                margin-top: -4%;
                margin-left: 28%;
                background-color: #9fc214;
                border: none;
                border-radius: 10px;
                color: white;
            }

            .confirmar:active {
                width: 170px;
                height: 55px;
                font-size: 1.7em;
                margin-top: -4%;
                margin-left: 28%;
                background-color: #86a40f;
                border: none;
                border-radius: 10px;
                color: white;
            }

            .fox {
                margin-left: -95.5%;
            }
        }

        @media(min-width: 1400px){
            height: 72vh;

            background-image: url("/images/1400px-recuperar-senha.svg");

            form {
                margin-left: 32%;
            }

            .fox {
                margin-top: -35%;
            }
        }

        //Large Screens
        @media(min-width: 1600px) {

            .mobile{
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
            height: 60vh;

            form {
                margin-top: 2%;
                margin-left: 35.5%;
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
                width: 400px;
                height: 390px;
                border-color: white;
            }

            h1 {
                font-size: 1.7em;
                margin-left: 8.5%;
            }

            #password {
                position: absolute;
                margin-left: 2.5%;
                top: 140px;
                width: 320px;
                height: 32px;
            }

            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.4em;
            }

            #confirm-password {
                position: absolute;
                margin-left: 2.5%;
                top: 391px;
                width: 320px;
                height: 32px;
            }

            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.4em;
            }

            .confirmar {
                width: 210px;
                height: 60px;
                font-size: 2em;
                position: absolute;
                margin-left: 5.8%;
                top: 550px;
                background-color: #93B413;
                border: none;
                border-radius: 15px;
                color: white;
                cursor: pointer;
            }

            .confirmar:hover {
                width: 210px;
                height: 60px;
                font-size: 2em;
                position: absolute;
                margin-left: 5.8%;
                top: 550px;
                background-color: #9fc214;
                border: none;
                border-radius: 15px;
                color: white;
                cursor: pointer;
            }

            .confirmar:active {
                width: 210px;
                height: 60px;
                font-size: 2em;
                position: absolute;
                margin-left: 5.8%;
                top: 550px;
                background-color: #86a40f;
                border: none;
                border-radius: 15px;
                color: white;
                cursor: pointer;
            }

            .fox {
                margin-left: -25%;
                margin-top: 15%;
            }
        }
    }

`;

const NewPassword = function() {
    return (
        <Formcomponent4>
            <nav className='mobile'>
                <h1>Crie a sua nova senha:</h1>
                {/* Content */}
                <Input type="number" name="password" id="password" placeholder='Nova Senha'/>
                <Input type="number" name="confirm-password" id="confirm-password" placeholder='Confirmar nova Senha'/>
                <Link href={'/LoginPage'}>
                        <button className='confirmar' type='button'>
                            Confirmar
                        </button>
                </Link>
                {/*Stella our Mascot*/}
                <img src="/images/raposa-new-password.png" alt="fox" className='fox'/>
            </nav>

            <nav className='tablet'>
                {/* Content */}
                <form>
                    <h1>Crie a sua nova senha:</h1>
                    <Input type="number" name="password" id="password" placeholder='Nova Senha'/>
                    <Input type="number" name="confirm-password" id="confirm-password" placeholder='Confirmar nova Senha'/>
                    <Link href={'/LoginPage'}>
                            <button className='confirmar' type='button'>
                                Confirmar
                            </button>
                    </Link>
                    {/*Stella our Mascot*/}
                    <img src="/images/Raposa-login.png" alt="fox" className='fox'/>
                </form>
            </nav>

            <nav className='desktop1'>
                {/* Content */}
                <form>
                    <h1>Crie a sua nova senha:</h1>
                        <Input type="number" name="password" id="password" placeholder='Nova Senha'/>
                        <Input type="number" name="confirm-password" id="confirm-password" placeholder='Confirmar nova Senha'/>
                        <Link href={'/LoginPage'}>
                            <button className='confirmar' type='button'>
                                Confirmar
                            </button>
                        </Link>
                        {/*Stella our Mascot*/}
                        <img src="/images/Raposa-login.png" alt="fox" className='fox'/>
                </form>
            </nav>

            <nav className='desktop2'>
                {/* Content */}
                <form>
                    <h1>Crie a sua nova senha:</h1>
                        <Input type="number" name="password" id="password" placeholder='Nova Senha'/>
                        <Input type="number" name="confirm-password" id="confirm-password" placeholder='Confirmar nova Senha'/>
                        <Link href={'/LoginPage'}>
                            <button className='confirmar' type='button'>
                                Confirmar
                            </button>
                        </Link>
                        {/*Stella our Mascot*/}
                        <img src="/images/Raposa-login.png" alt="fox" className='fox'/>
                </form>
            </nav>

            <nav className='desktop3'>
                {/* Content */}
                <form>
                    <h1>Crie a sua nova senha:</h1>
                        <Input type="number" name="password" id="password" placeholder='Nova Senha'/>
                        <Input type="number" name="confirm-password" id="confirm-password" placeholder='Confirmar nova Senha'/>
                        <Link href={'/LoginPage'}>
                            <button className='confirmar' type='button'>
                                Confirmar
                            </button>
                        </Link>
                        {/*Stella our Mascot*/}
                        <img src="/images/Raposa-login.png" alt="fox" className='fox'/>
                </form>
            </nav>
        </Formcomponent4>
    )
}

export default NewPassword;