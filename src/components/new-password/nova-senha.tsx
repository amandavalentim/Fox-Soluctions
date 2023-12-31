// Developed by Gabriel Marques

'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Login/Input/Input';

const Formcomponent4 = styled.section `

    //Mobile
    height: 61vh;

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

    .a {
        margin: 0;
        text-align: center;
    }

    h1 {
        color: white;
        padding-top: 10%;
        font-size: 1.3em;
        /* margin-left: 9.7%; */
        text-align: center;
    }

    #password {
        margin-top: 18%;
        /* margin-left: 15%; */
    }

    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    #confirm-password {
        margin-top: 13%;
        /* margin-left: 15%; */
    }

    #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    .confirmar {
        margin-top: 10%;
        /* margin-left: 4%; */
        text-align: center;
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

    .fox {
        margin-left: -12%;
    }

    //Tablet
    @media(min-width: 768px) {
        
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

        height: 50vh;

        .form {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        form {
            margin-top: 11%;
            /* margin-left: 30%; */
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 290px;
            height: 275px;
            border-color: white;
            text-align: center;
        }

        h1 {
            font-size: 1.2em;
        }

        .css-6w74q7 {
            margin: 0;
            width: 40vw;
        }

        #password {
            margin-top: 10%;
            /* margin-left: 11%; */
            width: 230px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1em;
        }

        #confirm-password {
            margin-top: 15%;
            /* margin-left: 11%; */
            width: 230px;
        }

        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1em;
        }

        .confirmar {
            margin-top: 10%;
            /* margin-left: 27%; */
            width: 140px;
            height: 40px;
            font-size: 1.3em;
            background-color: #93B413;
            border: none;
            border-radius: 10px;
            color: white;
        }

        .confirmar:active {
            margin-top: 10%;
            /* margin-left: 27%; */
            width: 140px;
            height: 40px;
            font-size: 1.3em;
            background-color: #86a40f;
            border: none;
            border-radius: 10px;
            color: white;
        }

        .fox {
            margin-left: -34.5%;
            margin-top: -77%;
            width: 100px;
        }

    //Small Screens
    @media(min-width: 992px) {

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

        .form {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        form {
            margin-top: 12%;
            /* margin-left: 32.5%; */
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 330px;
            height: 330px;
            border-color: white;
        }

        h1 {
            font-size: 1.3em;
            /* margin-left: 11.3%; */
        }

        #password {
            margin-top: 12%;
            /* margin-left: 15%; */
            width: 232px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

            #confirm-password {
                margin-top: 15%;
                /* margin-left: 15%; */
                width: 232px;
            }

            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.2em;
            }

            .confirmar {
                width: 160px;
                height: 50px;
                font-size: 1.6em;
                margin-top: 15%;
                /* margin-left: 25%; */
                background-color: #93B413;
                border: none;
                border-radius: 10px;
                color: white;
            }
            
            .confirmar:hover {
                width: 160px;
                height: 50px;
                font-size: 1.6em;
                margin-top: 15%;
                /* margin-left: 25%; */
                background-color: #9fc214;
                border: none;
                border-radius: 10px;
                color: white;
            }

            .confirmar:active {
                width: 160px;
                height: 50px;
                font-size: 1.6em;
                margin-top: 15%;
                /* margin-left: 25%; */
                background-color: #86a40f;
                border: none;
                border-radius: 10px;
                color: white;
            }

            .fox {
                margin-left: -30.6%;
            }
        }

    //Medium Screens
    @media(min-width: 1200px) {

        height: 64vh;

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

            .form {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            form {
                margin-top: 10%;
                /* margin-left: 34.2%; */
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
                width: 400px;
                height: 355px;
                border-color: white;
            }

            h1 {
                font-size: 1.6em;
                /* margin-left: 10.5%; */
            }

            #password {
                margin-top: 12%;
                /* margin-left: 12%; */
                width: 305px;
                height: 32px;
            }

            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.4em;
            }

            #confirm-password {
                margin-top: 15%;
                /* margin-left: 12%; */
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
                margin-top: 8%;
                /* margin-left: 28%; */
                background-color: #93B413;
                border: none;
                border-radius: 10px;
                color: white;
            }
            
            .confirmar:hover {
                width: 170px;
                height: 55px;
                font-size: 1.7em;
                margin-top: 8%;
                /* margin-left: 28%; */
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
                /* margin-left: 28%; */
                background-color: #86a40f;
                border: none;
                border-radius: 10px;
                color: white;
            }

            .fox {
                margin-left: -25%;
            }
        }

        @media(min-width: 1400px){
            height: 72vh;

            .mobile {
                display: none;
            }

            .tablet-desktops {
                display: grid;
                justify-content: space-between;
                justify-content: center;
                align-items: center;
            }

            /* background-image: url("/images/1400px-recuperar-senha.svg"); */

            form {
                /* margin-left: 35.5%; */
                margin-top: 15%;
            }

            .fox {
                margin-top: -75%;
            }
        }

        //Large Screens
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
            height: 65vh;

            .form {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            form {
                margin-top: 15%;
                /* margin-left: 35.5%; */
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
                width: 400px;
                height: 390px;
                border-color: white;
            }

            h1 {
                font-size: 1.7em;
                /* margin-left: 8.5%; */
            }

            #password {
                width: 320px;
                height: 32px;
            }

            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.4em;
            }

            #confirm-password {
                width: 320px;
                height: 32px;
            }

            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 1.4em;
            }

            .confirmar {
                width: 210px;
                height: 60px;
                margin-top: 10%;
                font-size: 2em;
                background-color: #93B413;
                border: none;
                border-radius: 15px;
                color: white;
                cursor: pointer;
            }

            .confirmar:hover {
                width: 210px;
                height: 60px;
                margin-top: 10%;
                font-size: 2em;
                background-color: #9fc214;
                border: none;
                border-radius: 15px;
                color: white;
                cursor: pointer;
            }

            .confirmar:active {
                width: 210px;
                height: 60px;
                margin-top: 10%;
                font-size: 2em;
                background-color: #86a40f;
                border: none;
                border-radius: 15px;
                color: white;
                cursor: pointer;
            }

            .fox {
                margin-left: -25%;
                margin-top: -95%;
            }
        }
    }

`;

// .button {
//     display: flex;
//     justify-content: center;
// }

const NewPassword = function() {
    return (
        <Formcomponent4>
            <nav className='mobile'>
                <h1>Crie a sua nova senha:</h1>
                {/* Content */}
                <Input type="number" name="password" id="password" placeholder='Nova Senha'/>
                <Input type="number" name="confirm-password" id="confirm-password" placeholder='Confirmar nova Senha'/>
                <Link href={'/LoginPage'} className='a'>
                        <button className='confirmar' type='button'>
                            Confirmar
                        </button>
                </Link>
                {/*Stella our Mascot*/}
                <img src="/images/raposa-new-password.png" alt="fox" className='fox'/>
            </nav>

            <nav className='tablet-desktops'>
                {/* Content */}
                <div className="form">
                    <form>
                        <h1>Crie a sua nova senha:</h1>
                        <Input type="number" name="password" id="password" placeholder='Nova Senha'/>
                        <Input type="number" name="confirm-password" id="confirm-password" placeholder='Confirmar nova Senha'/>
                        <Link href={'/LoginPage'}>
                                <button className='confirmar' type='button'>
                                    Confirmar
                                </button>
                        </Link>
                    </form>
                </div>
                {/*Stella our Mascot*/}
                <img src="/images/Raposa-login.png" alt="fox" className='fox'/>
            </nav>

        </Formcomponent4>
    )
}

export default NewPassword;