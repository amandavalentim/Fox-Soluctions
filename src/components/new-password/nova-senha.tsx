// Código desenvolvido por Gabriel

'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Login/Input/Input';

const Formcomponent4 = styled.section `

    //Mobile
    height: 92.5vh;

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
        margin-top: 23%;
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

        height: 80vh;
        
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

        form {
            margin-top: 6%;
            margin-left: 29%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 320px;
            height: 350px;
            border-color: white;
        }

        #password {
            margin-top: 20%;
            margin-left: 13.6%;
            width: 230px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1em;
        }

        #confirm-password {
            margin-top: 5%;
            margin-left: 13.6%;
            width: 230px;
        }

        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1em;
        }

        .confirmar {
            margin-top: 5%;
            margin-left: 24%;
            width: 170px;
            height: 50px;
            font-size: 1.6em;
            background-color: #93B413;
            border: none;
            border-radius: 20px;
            color: white;
        }

        .confirmar:active {
            margin-top: 5%;
            margin-left: 24%;
            width: 170px;
            height: 50px;
            font-size: 1.6em;
            background-color: #86a40f;
            border: none;
            border-radius: 20px;
            color: white;
        }

        .fox {
            margin-left: -108%;
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

            form {
                margin-top: 5%;
                margin-left: 31%;
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
                width: 370px;
                height: 410px;
                border-color: white;
            }

            h1 {
                font-size: 1.5em;
                margin-left: 11%;
            }

            #password {
                margin-top: 20%;
                margin-left: 13.6%;
                width: 272px;
            }

            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.2em;
            }

            #confirm-password {
                margin-top: 5%;
                margin-left: 13.6%;
                width: 272px;
            }

            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.2em;
            }

            .confirmar {
                width: 210px;
                height: 60px;
                font-size: 2em;
                margin-top: 8%;
                margin-left: 22%;
                background-color: #93B413;
                border: none;
                border-radius: 20px;
                color: white;
            }
            
            .confirmar:hover {
                width: 210px;
                height: 60px;
                font-size: 2em;
                margin-top: 8%;
                margin-left: 22%;
                background-color: #9fc214;
                border: none;
                border-radius: 20px;
                color: white;
            }

            .confirmar:active {
                width: 210px;
                height: 60px;
                font-size: 2em;
                margin-top: 8%;
                margin-left: 22%;
                background-color: #86a40f;
                border: none;
                border-radius: 20px;
                color: white;
            }

            .fox {
                margin-left: -105.5%;
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
                margin-left: 32%;
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
                width: 500px;
                height: 440px;
                border-color: white;
            }

            h1 {
                font-size: 2em;
                margin-left: 11%;
            }

            #password {
                margin-top: 15%;
                margin-left: 12.6%;
                width: 375px;
                height: 32px;
            }

            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.6em;
            }

            #confirm-password {
                margin-top: 3%;
                margin-left: 12.6%;
                width: 375px;
                height: 32px;
            }

            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.6em;
            }

            .confirmar {
                width: 210px;
                height: 60px;
                font-size: 2em;
                margin-top: 1%;
                margin-left: 28%;
                background-color: #93B413;
                border: none;
                border-radius: 20px;
                color: white;
            }
            
            .confirmar:hover {
                width: 210px;
                height: 60px;
                font-size: 2em;
                margin-top: 1%;
                margin-left: 28%;
                background-color: #9fc214;
                border: none;
                border-radius: 20px;
                color: white;
            }

            .confirmar:active {
                width: 210px;
                height: 60px;
                font-size: 2em;
                margin-top: 1%;
                margin-left: 28%;
                background-color: #86a40f;
                border: none;
                border-radius: 20px;
                color: white;
            }

            .fox {
                margin-left: -90%;
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

            form {
                margin-top: 3%;
                margin-left: 33%;
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
                width: 500px;
                height: 500px;
                border-color: white;
            }

            h1 {
                font-size: 2em;
                margin-left: 11%;
            }

            #password {
                margin-top: 15%;
                margin-left: 12.6%;
                width: 375px;
                height: 32px;
            }

            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.6em;
            }

            #confirm-password {
                margin-top: 3%;
                margin-left: 12.6%;
                width: 375px;
                height: 32px;
            }

            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.6em;
            }

            .confirmar {
                width: 210px;
                height: 60px;
                font-size: 2em;
                margin-top: -1%;
                margin-left: 28%;
                background-color: #93B413;
                border: none;
                border-radius: 20px;
                color: white;
            }

            .confirmar:hover {
                width: 210px;
                height: 60px;
                font-size: 2em;
                margin-top: -1%;
                margin-left: 28%;
                background-color: #9fc214;
                border: none;
                border-radius: 20px;
                color: white;
            }

            .confirmar:active {
                width: 210px;
                height: 60px;
                font-size: 2em;
                margin-top: -1%;
                margin-left: 28%;
                background-color: #86a40f;
                border: none;
                border-radius: 20px;
                color: white;
            }

            .fox {
                margin-left: -90%;
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