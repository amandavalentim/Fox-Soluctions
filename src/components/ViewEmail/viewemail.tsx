// Developed by Gabriel Marques

'use client';
import styled from "@emotion/styled";
import Link from "next/link";

const ViewEmailComponent = styled.section `

// Mobile

.mobile {
    display: block;
    justify-content: space-between;
}

.tablet-desktops {
    display: none;
}

background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);
height: 70vh;

h1 {
    font-size: 1.4em;
    padding: 8%;
}

p {
    text-decoration: underline 3px;
    font-size: 1.1em;
    margin: 15%;
}

#ok {
    margin-top: 6.5%;
    margin-left: 20%;
    width: 70px;
    height: 40px;
    font-size: 1.1em;
    background-color: #93B413;
    border: none;
    border-radius: 10px;
}

#ok:active {
    margin-top: 6.5%;
    margin-left: 20%;
    width: 70px;
    height: 40px;
    font-size: 1.1em;
    background-color: #86a40f;
    border: none;
    border-radius: 10px;
}

#change {
    margin-top: 6.5%;
    margin-left: 14%;
    width: 80px;
    height: 40px;
    font-size: 1.1em;
    background-color: #93B413;
    border: none;
    border-radius: 10px;
}

#change:active {
    margin-top: 6.5%;
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
    margin-top: 9.8%;
    margin-left: 32%;
}

// Tablets
@media(min-width: 768px) {

    .mobile {
        display: none;
    }

    .tablet-desktops {
        display: block;
        justify-content: space-between;
    }

    height: 70vh;
    background-image: url("/images/tablet-recuperar-email.svg");
    background-repeat: no-repeat;

    .form {
        padding-top: 6.2%;
    }

    form{
        width: 300px;
        height: 300px;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        margin-left: 30%;
    }

    h1 {
        font-size: 1.3em;
        margin-left: 1%;
        padding-top: 10%;
    }

    p {
        margin-left: 13%;
    }

    #ok {
        background-color: #93B413;
    }

    #ok:active {
        background-color: #86a40f;
    }

    #change {
        margin-left: 10%;
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
        display: block;
        justify-content: space-between;
    }

    background-image: url("/images/992px-recuperar-email.svg");
    height: 65vh;

    form {
        margin-top: -0.5%;
        margin-left: 34.5%;
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

}

//Medium Screen 
@media(min-width: 1200px) {

    .mobile {
        display: none;
    }

    .tablet-desktops {
        display: block;
        justify-content: space-between;
    }

    background-image: url("/images/1200px-recuperar-email.svg");
    height: 72vh;

    form {
        width: 350px;
        height: 350px;
        margin-top: -1.7%;
        margin-left: 35.5%;
    }

    h1 {
        margin-left: 4.5%;
        font-size: 1.4em;
    }

    p {
        font-size: 1.3em;
        margin-left: 12%;
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

    background-image: url("/images/1400px-recuperar-email.svg");    

    form {
        margin-left: 37%;
    }

    h1 {
        margin-left: 6.5%;
        font-size: 1.5em;
    }

    p {
        margin-left: 16%;
        font-size: 1.3em;
    }

}

//Large Screen 
@media(min-width: 1600px) {

    .mobile {
        display: none;
    }

    .tablet-desktops {
        display: block;
        justify-content: space-between;
    }

    background-image: url("/images/1600px-recuperar-email.svg");
    height: 69vh;

    form {
        width: 390px;
        height: 390px;
        margin-top: -1.7%;
        margin-left: 37%;
    }

    h1 {
        margin-left: 3.5%;
        font-size: 1.6em;
    }

    p {
        font-size: 1.4em;
        margin-left: 13.5%;
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
                </form>
                <img src="/images/Stella-view-email.png" alt="fox" className="fox"/>
            </nav>

            <nav className="tablet-desktops">
                <div className="form">
                    <form>
                        <h1>Seu e-mail de login é:</h1>
                        <p>********fox@gmail.com</p>
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
                    </form>
                </div>
                <img src="/images/Raposa-code.png" alt="fox" className="fox"/>
            </nav>

        </ViewEmailComponent>
    )
}

export default ViewEmail;