// Developed by Gabriel Marques

'use client';
import styled from "@emotion/styled";
import Link from "next/link";

const ViewEmailComponent = styled.section `

// Mobile

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
height: 46.5vh;

h1 {
    font-size: 1.4em;
    /* padding: 8.5%; */
    text-align: center;
    margin-top: 20%;
}

p {
    text-decoration: underline 3px;
    font-size: 1.5em;
    margin-top: 23%;
    text-align: center;
}

.buttons {
    text-align: center;
    margin-left: -23%;
    margin-top: 5%;
}

#ok {
    margin-top: 5%;
    margin-left: 20%;
    width: 70px;
    height: 40px;
    font-size: 1.1em;
    background-color: #93B413;
    border: none;
    border-radius: 10px;
}

#ok:active {
    margin-top: 5%;
    margin-left: 20%;
    width: 70px;
    height: 40px;
    font-size: 1.1em;
    background-color: #86a40f;
    border: none;
    border-radius: 10px;
}

#change {
    margin-top: 5%;
    margin-left: 14%;
    width: 80px;
    height: 40px;
    font-size: 1.1em;
    background-color: #93B413;
    border: none;
    border-radius: 10px;
}

#change:active {
    margin-top: 5%;
    margin-left: 14%;
    width: 80px;
    height: 40px;
    font-size: 1.1em;
    background-color: #86a40f;
    border: none;
    border-radius: 10px;
}

.fox {
    width: 130px;
    height: 100px;
    margin-top: 18.9%;
    margin-left: 28%;
}

// Tablets
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

    height: 70vh;
    /* background-image: url("/images/tablet-recuperar-email.svg");
    background-repeat: no-repeat; */

    .form {
        padding-top: 6.2%;
        text-align: center;
    }

    form{
        width: 300px;
        height: 300px;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        /* margin-left: 30%; */
        text-align: center;
        margin-top: -0.2%;
    }

    h1 {
        font-size: 1.3em;
        /* margin-left: 1%; */
        padding-top: 10%;
    }

    p {
        /* margin-left: 13%; */
    }

    .buttons {
        text-align: center;
    }

    #ok {
        background-color: #93B413;
        /* margin-left: 20.3%; */
    }

    #ok:active {
        background-color: #86a40f;
        margin-left: 20.3%;
    }

    #change {
        /* margin-left: 10%; */
        background-color: #93B413;
    }

    #change:active {
        margin-left: 10%;
        background-color: #86a40f;
    }

    .fox {
        width: 90px;
        height: 90px;
        position: absolute;
        top: 220px;
        margin-left: 0%;
        transform: rotate(180deg);
    }

}

// Small Screens
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

    height: 65vh;

    form {
        margin-top: -0.5%;
        /* margin-left: 34.5%; */
    }

    #ok {
        background-color: #93B413;
        cursor: pointer;
    }

    #ok:hover {
        background-color: #9fc214;
        cursor: pointer;
    }

    #ok:active {
        background-color: #86a40f;
        cursor: pointer;
    }

    #change {
        margin-left: 10.5%;
        background-color: #93B413;
        cursor: pointer;
    }

    #change:hover {
        margin-left: 10.5%;
        background-color: #9fc214;
        cursor: pointer;
    }

    #change:active {
        margin-left: 10.5%;
        background-color: #86a40f;
        cursor: pointer;
    }

    .fox {
        margin-top: 7%;
    }

}

//Medium Screen 
@media(min-width: 1200px) {

    .mobile {
        display: none;
    }

    .tablet-desktops {
        display: grid;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
    }

    /* background-image: url("/images/1200px-recuperar-email.svg"); */
    height: 72vh;

    form {
        width: 350px;
        height: 350px;
        margin-top: -1.7%;
        /* margin-left: 35.5%; */
    }

    h1 {
        /* margin-left: 4.3%; */
        font-size: 1.4em;
    }

    p {
        font-size: 1.3em;
        margin-top: 20%;
        /* margin-left: 12%; */
    }

    .buttons {
        margin-top: 10%;
    }

    #ok {
        background-color: #93B413;
        width: 80px;
        height: 50px;
        font-size: 1.4em;
        margin-top: 5%;
        cursor: pointer;
    }

    #ok:hover {
        background-color: #9fc214;
        width: 80px;
        height: 50px;
        font-size: 1.4em;
        margin-top: 5%;
        cursor: pointer;
    }

    #ok:active {
        background-color: #86a40f;
        width: 80px;
        height: 50px;
        font-size: 1.4em;
        margin-top: 5%;
        cursor: pointer;
    }

    #change {
        margin-left: 10%;
        background-color: #93B413;
        width: 90px;
        height: 50px;
        font-size: 1.3em;
        margin-top: 5%;
        margin-left: 12.5%;
        cursor: pointer;
    }

    #change:hover {
        margin-left: 10%;
        background-color: #9fc214;
        width: 90px;
        height: 50px;
        font-size: 1.3em;
        margin-top: 5%;
        margin-left: 12.5%;
        cursor: pointer;
    }

    #change:active {
        margin-left: 10%;
        background-color: #86a40f;
        width: 90px;
        height: 50px;
        font-size: 1.3em;
        margin-top: 5%;
        margin-left: 12.5%;
        cursor: pointer;
    }

    .fox {
        width: 110px;
        height: 110px;
        position: absolute;
        top: 200px;
    }
}

@media(min-width: 1400px) {

    .mobile {
        display: none;
    }

    .tablet-desktops {
        display: grid;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
    }

    /* background-image: url("/images/1400px-recuperar-email.svg");     */

    form {
        /* margin-left: 37%; */
        margin-top: -5%;
    }

    h1 {
        /* margin-left: 2%; */
        font-size: 1.5em;
        width: 345px;
    }

    p {
        /* margin-left: 13%; */
        font-size: 1.3em;
    }

}

//Large Screen 
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

    /* background-image: url("/images/1600px-recuperar-email.svg"); */
    height: 69vh;

    form {
        width: 390px;
        height: 390px;
        margin-top: -6%;
        /* margin-left: 37%; */
    }

    h1 {
        /* margin-left: 3.5%; */
        font-size: 1.6em;
        width: 400px;
    }

    p {
        font-size: 1.4em;
        /* margin-left: 13.5%; */
    }

    #ok {
        background-color: #93B413;
        width: 90px;
        height: 60px;
        font-size: 1.5em;
        margin-top: 5%;
        cursor: pointer;
    }

    #ok:hover {
        background-color: #9fc214;
        width: 90px;
        height: 60px;
        font-size: 1.5em;
        margin-top: 5%;
        cursor: pointer;
    }

    #ok:active {
        background-color: #86a40f;
        width: 90px;
        height: 60px;
        font-size: 1.5em;
        margin-top: 5%;
        cursor: pointer;
    }

    #change {
        margin-left: 10%;
        background-color: #93B413;
        width: 100px;
        height: 60px;
        font-size: 1.4em;
        margin-top: 5%;
        margin-left: 12%;
        cursor: pointer;
    }

    #change:hover {
        margin-left: 10%;
        background-color: #9fc214;
        width: 100px;
        height: 60px;
        font-size: 1.4em;
        margin-top: 5%;
        margin-left: 12%;
        cursor: pointer;
    }

    #change:active {
        margin-left: 10%;
        background-color: #86a40f;
        width: 100px;
        height: 60px;
        font-size: 1.4em;
        margin-top: 5%;
        margin-left: 12%;
        cursor: pointer;
    }

    .fox {
        width: 110px;
        height: 110px;
        position: absolute;
        top: 200px;
    }
    
}

`;

const ViewEmail = function() {
    
    return (
        <ViewEmailComponent>

            <nav className="mobile">
                <form>
                    <h1>Seu e-mail de login é:</h1>
                    <p>********fox@gmail.com</p>
                    <div className="buttons">
                        <Link href={'/LoginPage'} className="ok">
                            <button type="button" id="ok">
                                OK
                            </button>
                        </Link>
                        <Link href={'/NewEmailPage'} className="change">
                            <button type="button" id="change">
                                Alterar
                            </button>
                        </Link>
                    </div>
                </form>
                <img src="/images/Stella-view-email.png" alt="fox" className="fox"/>
            </nav>

            <nav className="tablet-desktops">
                <div className="form">
                    <form>
                        <h1>Seu e-mail de login é:</h1>
                        <p>********fox@gmail.com</p>
                        <div className="buttons">
                        <Link href={'/LoginPage'} className="ok">
                            <button type="button" id="ok">
                                OK
                            </button>
                        </Link>
                        <Link href={'/NewEmailPage'} className="change">
                            <button type="button" id="change">
                                Alterar
                            </button>
                        </Link>
                    </div>
                    </form>
                </div>
                <img src="/images/Raposa-code.png" alt="fox" className="fox"/>
            </nav>

        </ViewEmailComponent>
    )
}

export default ViewEmail;