// Developed by Gabriel Marques

'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Login/Input/Input';

const NewEmailComponent = styled.section `

// Mobile

height: 70vh;
background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);

.mobile {
    display: block;
    justify-content: space-between;
}

.tablet-desktops {
    display: none;
}

h1 {
    font-size: 1.4em;
    padding-left: 5%;
    padding-top: 10%;
}

#email {
    margin-top: 20%;
    margin-left: 9%;
    width: 260px;
}

#email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-size: 1.1em;
}

#confirm {
    margin-top: 15%;
    margin-left: 9%;
    width: 260px;
}

#confirm::-webkit-input-placeholder { /* Chrome/Opera/Safari */
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
    position: absolute;
    margin-left: 66.5%;
    top: 420px;
}

@media(min-width: 768px) {

    .mobile {
        display: none;
    }

    .tablet-desktops {
        display: block;
        justify-content: space-between;
    }

    background-image: url("/images/tablet-recuperar-senha.svg");
    background-repeat: no-repeat;
    height: 62vh;

    .form {
        padding-top: 4.5%;
    }

    form {
        margin-left: 30%;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        width: 290px;
        height: 275px;
        border-color: white;
    }

    h1 {
        font-size: 1.2em;
        margin-left: 3.5%;
    }

    #email {
        margin-top: 15%;
        margin-left: 11%;
        width: 230px;
    }

    #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1em;
    }

    #confirm {
        margin-top: 5%;
        margin-left: 11%;
        width: 230px;
    }

    #confirm::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1em;
    }

    .confirmar {
        margin-top: -2%;
        margin-left: 26%;
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
        margin-left: 26%;
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
        left: 67.7%;
        top: 330px;
    }

}

//Medium Screens
@media(min-width: 992px) {

    .mobile {
        display: none;
    }

    .tablet-desktops {
        display: block;
        justify-content: space-between;
    }

    background-image: url("/images/992px-recuperar-senha.svg");
    height: 65vh;

    form {
        margin-top: 1.5%;
        margin-left: 33%;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        width: 330px;
        height: 295px;
        border-color: white;
    }

    h1 {
        font-size: 1.4em;
        margin-left: 2.3%;
    }

    #email {
        margin-top: 10%;
        margin-left: 11%;
        width: 255px;
    }

    #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    #confirm {
        margin-top: 5%;
        margin-left: 11%;
        width: 255px;
    }

    #confirm::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    .confirmar {
        margin-top: 1%;
        margin-left: 28.5%;
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
        margin-top: 1%;
        margin-left: 28.5%;
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
        margin-top: 1%;
        margin-left: 28.5%;
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
        margin-left: -2.5%;
    }

}

//Medium Screens
@media(min-width: 1200px) {

    .mobile {
        display: none;
    }

    .tablet-desktops {
        display: block;
        justify-content: space-between;
    }

    background-image: url("/images/1200px-recuperar-senha.svg");

    form {
        margin-top: -1%;
        margin-left: 36.5%;
        width: 360px;
        height: 325px;
    }

    h1 {
        margin-left: 5.5%;
    }

    #email {
        margin-top: 10%;
        margin-left: 11%;
        width: 283px;
    }

    #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    #confirm {
        margin-top: 1%;
        margin-left: 11%;
        width: 283px;
    }

    #confirm::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    .confirmar {
        margin-top: -5%;
        width: 160px;
        height: 55px;
        font-size: 1.6em;
        cursor: pointer;
    }

    .confirmar:hover {
        margin-top: -5%;
        width: 160px;
        height: 55px;
        font-size: 1.6em;
        cursor: pointer;
    }

    .confirmar:active {
        margin-top: -5%;
        width: 160px;
        height: 55px;
        font-size: 1.6em;
        cursor: pointer;
    }

    .fox2 {
        margin-left: -4.8%;
    }

}

//Large Screens
@media(min-width: 1600px) {

    background-image: url("/images/1600px-recuperar-senha.svg");
    height: 60vh;

    form {
        margin-left: 38%;
    }

    .fox2 {
        margin-left: -7%;
    }

    #confirm {
        position: absolute;
        top: 381px;
        margin-left: -18%;
        width: 283px;
    }

    .confirmar {
        position: absolute;
        top: 530px;
        margin-left: -14%;
        cursor: pointer;
    }

    .confirmar:hover {
        position: absolute;
        top: 530px;
        margin-left: -14%;
        cursor: pointer;
    }

    .confirmar:active {
        position: absolute;
        top: 530px;
        margin-left: -14%;
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
                    <Input type="email" placeholder='Digite o seu novo E-mail' id='email'/>
                    <Input type="email" placeholder='Confirmar novo E-mail' id='confirm'/>
                    <Link href={'/LoginPage'}>
                        <button className='confirmar' type='button'>
                            Confirmar
                        </button>
                    </Link>
                </form>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

            <nav className='tablet-desktops'>
                <div className='form'>
                    <form>
                        <h1>Crie o seu novo E-mail:</h1>
                        <Input type="email" placeholder='Digite o seu novo E-mail' id='email'/>
                        <Input type="email" placeholder='Confirmar novo E-mail' id='confirm'/>
                        <Link href={'/LoginPage'}>
                            <button className='confirmar' type='button'>
                                Confirmar
                            </button>
                        </Link>
                    </form>
                    <img src="/images/raposa-new-password.png" alt="fox" className='fox2'/>
                </div>
            </nav>

        </NewEmailComponent>
    )
};

export default NewEmail;