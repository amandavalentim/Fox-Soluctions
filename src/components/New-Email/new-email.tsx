// Developed by Gabriel Marques

'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Login/Input/Input';

const NewEmailComponent = styled.section `

// Mobile

height: 51.5vh;
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

h1 {
    font-size: 1.4em;
    padding-top: 10%;
    text-align: center;
}

.email {
    text-align: center;
    margin: 0;
}

.email2 {
    text-align: center;
    margin: 0;
}

#email {
    margin-top: 20%;
    width: 260px;
}

#email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-size: 1.1em;
}

#confirm {
    margin-top: 11.5%;
    width: 260px;
}

#confirm::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-size: 1.1em;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
}

.confirmar {
    margin-top: 12%;
    text-align: center;
    width: 170px;
    height: 50px;
    font-size: 1.6em;
    background-color: #93B413;
    border: none;
    border-radius: 15px;
    color: white;
}

.confirmar:active {
    width: 170px;
    height: 50px;
    font-size: 1.6em;
    background-color: #86a40f;
    border: none;
    border-radius: 15px;
}

.fox {
    width: 110px;
    height: 140px;
    transform: rotatey(160deg);
    /* position: absolute; */
    margin-left: 80%;
    margin-top: -5%;
}

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
    height: 52.5vh;

    .form {
        padding-top: 4.5%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    form {
        /* margin-left: 30%; */
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        width: 290px;
        height: 275px;
        border-color: white;
        margin-top: 10%;
    }

    h1 {
        font-size: 1.2em;
    }

    .css-6w74q7 {
        margin: 0;
    }

    #email {
        margin-top: 11%;
        /* margin-left: 11%; */
        width: 230px;
    }

    #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1em;
    }

    #confirm {
        margin-top: 13%;
        /* margin-left: 11%; */
        width: 230px;
    }

    #confirm::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1em;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .confirmar {
        margin-top: 25%;
        width: 140px;
        height: 40px;
        font-size: 1.4em;
        background-color: #93B413;
        border: none;
        border-radius: 10px;
        color: white;
    }

    .confirmar:active {
        margin-top: -2%;
        width: 140px;
        height: 40px;
        font-size: 1.4em;
        background-color: #86a40f;
        border: none;
        border-radius: 10px;
        color: white;
    }

    .fox2 {
        width: 90px;
        height: 115px;
        position: absolute;
        left: 69%;
        top: 320px;
    }

}

//Medium Screens
@media(min-width: 992px) {

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
    height: 52.5vh;

    .form {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    form {
        margin-top: 5.5%;
        /* margin-left: 33%; */
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        width: 330px;
        height: 295px;
        border-color: white;
    }

    h1 {
        font-size: 1.4em;
        /* margin-left: 2%; */
    }

    #email {
        margin-top: 10%;
        /* margin-left: 11.5%; */
        width: 255px;
    }

    #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    #confirm {
        margin-top: 15%;
        /* margin-left: 11.5%; */
        width: 255px;
    }

    #confirm::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    .confirmar {
        margin-top: 25%;
        /* margin-left: 29%; */
        width: 140px;
        height: 40px;
        font-size: 1.4em;
        background-color: #93B413;
        border: none;
        border-radius: 10px;
        color: white;
        cursor: pointer;
    }

    .confirmar:hover {
        margin-top: 25%;
        /* margin-left: 29%; */
        width: 140px;
        height: 40px;
        font-size: 1.4em;
        background-color: #9fc214;
        border: none;
        border-radius: 10px;
        color: white;
        cursor: pointer;
    }

    .confirmar:active {
        margin-top: 25%;
        /* margin-left: 29%; */
        width: 140px;
        height: 40px;
        font-size: 1.4em;
        background-color: #86a40f;
        border: none;
        border-radius: 10px;
        color: white;
        cursor: pointer;
    }

    .fox2 {
        margin-left: -3%;
        text-align: center;
    }

}

//Medium Screens
@media(min-width: 1200px) {

    .mobile {
        display: none;
    }

    .tablet-desktops {
        display: grid;
        justify-content: center;
        align-items: center;
    }

    /* background-image: url("/images/1200px-recuperar-senha.svg"); */

    .form{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    form {
        margin-top: -1%;
        /* margin-left: 36.5%; */
        width: 360px;
        height: 325px;
    }

    h1 {
        /* margin-left: 5.1%; */
    }

    #email {
        margin-top: 10%;
        /* margin-left: 11%; */
        width: 283px;
    }

    #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    #confirm {
        margin-top: 15%;
        /* margin-left: 11%; */
        width: 283px;
    }

    #confirm::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    .confirmar {
        margin-top: 22%;
        width: 160px;
        height: 55px;
        font-size: 1.6em;
        cursor: pointer;
    }

    .confirmar:hover {
        margin-top: 22%;
        width: 160px;
        height: 55px;
        font-size: 1.6em;
        cursor: pointer;
    }

    .confirmar:active {
        margin-top: 22%;
        width: 160px;
        height: 55px;
        font-size: 1.6em;
        cursor: pointer;
    }

    .fox2 {
        margin-left: -5.8%;
    }

}

@media(min-width: 1400px) {

    display: grid;
    justify-content: space-between;
    justify-content: center;
    align-items: center;

    height: 70vh;

    form {
        margin-top: -5%;
    }

    .fox2 {
        margin-left: -6.4%;
    }

}

//Large Screens
@media(min-width: 1600px) {

    
    .mobile {
        display: none;
    }

    .tablet-desktops {
        display: grid;
        justify-content: center;
        align-items: center;
    }

    height: 60vh;

    .form{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    form {
        /* margin-left: 38%; */
        margin-top: 0%;
    }

    .fox2 {
        margin-left: -7.6%;
    }

    #email {
        margin-top: 10%;
        /* margin-left: 11%; */
        width: 283px;
    }

    #confirm {
        width: 283px;
    }

    .confirmar {
        cursor: pointer;
    }

    .confirmar:hover {
        cursor: pointer;
    }

    .confirmar:active {
        cursor: pointer;
    }

}

`;

const NewEmail = function() {

    return(
        <NewEmailComponent>

            <nav className='mobile'>
                <form>
                    <h1>Crie o seu novo E-mail:</h1>
                    <div className='email'>
                        <Input type="email" placeholder='Digite o seu novo E-mail' id='email'/>
                    </div>
                    <div className='email2'>
                        <Input type="email" placeholder='Confirmar novo E-mail' id='confirm'/>
                    </div>
                    <div className="button">
                        <Link href={'/LoginPage'}>
                            <button className='confirmar' type='button'>
                                Confirmar
                            </button>
                        </Link>
                    </div>
                </form>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

            <nav className='tablet-desktops'>
                <div className='form'>
                    <form>
                        <h1>Crie o seu novo E-mail:</h1>
                        <Input type="email" placeholder='Digite o seu novo E-mail' id='email'/>
                        <Input type="email" placeholder='Confirmar novo E-mail' id='confirm'/>
                        <div className="button">
                            <Link href={'/LoginPage'}>
                                <button className='confirmar' type='button'>
                                    Confirmar
                                </button>
                            </Link>
                        </div>
                    </form>
                    <img src="/images/raposa-new-password.png" alt="fox" className='fox2'/>
                </div>
            </nav>

        </NewEmailComponent>
    )
};

export default NewEmail;