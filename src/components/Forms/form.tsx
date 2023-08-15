'use client'
import styled from '@emotion/styled';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import Input from '../Forms/Input/Input';

const FormComponent = styled.section `

    height: 110vh;

    background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);

    * {
        color: white;
    }

    .mobile {
        display: flex;
        justify-content: space-between;
    }

    .tablet {
        display: none;
    }

    .desktop1 {
            display: none;
    }

    .desktop2{
            display: none;
    }

    .desktop3{
            display: none;
    }

    h1 {
        font-size: 1.8em;
        margin-left: 43%;
        margin-top: 15%;
    }

    .email {
        margin-left: 10%;
        margin-top: 15%;
    }

    #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.2em;
    }

    #forgot-email {
        margin-left: 30%;
        margin-top: -5%;
        color: #C7C7C7;
        font-size: 0.5em;
        font-family: 'Poppins-Medium';
    }

    #forgot-email:active {
        margin-left: 30%;
        margin-top: -5%;
        font-size: 0.5em;
        color: #F47216;
        font-family: 'Poppins-Medium';
    }

    .senha {
        margin-left: 10%;
        margin-top: 10%;
    }

    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.2em;
    }

    #forgot-password {
        margin-left: 30%;
        margin-top: -5%;
        font-size: 0.5em;
        font-family: 'Poppins-Medium';
        color: #C7C7C7;
    }

    #forgot-password:active {
        margin-left: 30%;
        margin-top: -5%;
        font-size: 0.5em;
        font-family: 'Poppins-Medium';
        color: #F47216;
    }

    p {
        font-size: 1.2em;
        margin-top: 15%;
        margin-left: 51%;
    }

    .google-enter {
        margin-top: 10%;
        margin-left: 13%;
    }

    .btn-google {
        width: 250px;
        height: 40px;
        font-size: 1.1em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
    }

    .btn-google:active {
        width: 250px;
        height: 40px;
        font-size: 1.1em;
        border: none;
        border-radius: 39px;
        padding: 8px;
        background-color: #86a40f;
    }

    .faGoogle {
        width: 40px;
        height: 25px;
        margin-bottom: -5px;
    }

    .page2 {
        margin-top: 10%;
        margin-left: 11%;
        width: 280px;
    }

    span {
        color: #F47216;
    }

    .logar {
        margin-top: 10%;
        margin-left: 27%;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
    }

    .logar:active {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 20px;
    }

    @media(min-width: 768px){

        height: 125vh;

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

        .desktop2{
            display: none;
        }

        background-image: url("/images/tablet-login.svg");
        background-repeat: no-repeat;

        form {
        margin-left: 25%;
        margin-top: 3%;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        width: 400px;
        height: 655px;
        border-color: white;
       }

       h1 {
        font-size: 1.5em;
        margin-left: 41%;
        margin-top: 10%;
       }

       .email {
            margin-left: -9%;
            margin-top: 10%;
       }

       #forgot-email {
        margin-left: 38%;
        margin-top: -5%;
        color: #C7C7C7;
        font-size: 1em;
        font-family: 'Poppins-Medium';
    }

    #forgot-email:active {
        margin-left: 38%;
        margin-top: -5%;
        font-size: 1em;
        color: #F47216;
        font-family: 'Poppins-Medium';
    }

       .senha {
            margin-left: -9%;
            margin-top: 5%;
       }

       #forgot-password {
        margin-left: 37%;
        margin-top: -5%;
        font-size: 1em;
        font-family: 'Poppins-Medium';
        color: #C7C7C7;
    }

    #forgot-password:active {
        margin-left: 37%;
        margin-top: -5%;
        font-size: 1em;
        font-family: 'Poppins-Medium';
        color: #F47216;
    }

       p {
        margin-top: 5%;
        margin-left: 46%;
       }

       .google-enter {
        margin-left: 14%;
        margin-top: 5%;
       }

       .btn-google {
        width: 290px;
        height: 50px;
        font-size: 1.1em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
    }

       .btn-google:active {
        width: 290px;
        height: 50px;
        font-size: 1.1em;
        background-color: #86a40f;
        border: none;
        border-radius: 39px;
        padding: 8px;
       }

       .page2 {
        font-size: 1.2em;
        width: 320px;
        margin-left: 12%;
       }

       .logar {
        font-size: 2em;
        width: 200px;
        height: 60px;
        background-color: #93B413;
        margin-left: 25%;
       }

       .logar:active {
        font-size: 2em;
        width: 200px;
        height: 60px;
        background-color: #86a40f;
        margin-left: 25%;
       }

       .fox {
        margin-top: 40%;
        margin-right: 10%;
        width: 120px;
        height: 170px;
       }
    }

    @media(min-width: 992px) {

        height: 120vh;

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

        .desktop2{
            display: none;
        }

        .desktop3{
            display: none;
        }

        background-image: url("/images/992px-login.svg");

        form {
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 520px;
            height: 720px;
            border-color: white;
       }

        h1 {
            font-size: 2.2em;
            margin-left: 40%;
        }

        .email {
            margin-left: -8%;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        #forgot-email {
            font-size: 1.1em;
            margin-left: 40%;
        }

        #forgot-email:active {
            font-size: 1.1em;
            margin-left: 40%;
            color: #F47216;
        }

       .senha {
        margin-left: -8%;
       }

       #password::-webkit-input-placeholder {
        font-size: 1.4em;
       }

       #forgot-password {
            font-size: 1.1em;
            margin-left: 39%;
        }

        #forgot-password:active {
            font-size: 1.1em;
            margin-left: 39%;
            color: #F47216;
        }

        p {
            font-size: 1.5em;
            margin-top: 7%;
        }

        .google-enter {
        margin-left: 17%;
        margin-top: 5%;
       }

       .btn-google {
        width: 340px;
        height: 65px;
        font-size: 1.5em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
    }

       .btn-google:active {
        width: 340px;
        height: 65px;
        font-size: 1.5em;
        background-color: #86a40f;
        border: none;
        border-radius: 39px;
        padding: 8px;
       }

       .faGoogle {
        width: 50px;
        height: 30px;
        margin-bottom: -5px;
    }

    .page2 {
        font-size: 1.5em;
        width: 410px;
        margin-left: 13%;
        margin-top: 7%;
    }

    .logar {
        margin-left: 31%;
        margin-top: 6%;
    }

    .logar:active {
        margin-left: 31%;
        margin-top: 6%;
    }

    .fox {
        width: 146px;
        height: 210px;
        margin-left: -2%;
    }
    }

    @media(min-width: 1200px) {

        height: 158vh;

        .mobile {
            display: none;
        }
    
        .tablet {
            display: none;
        }

        .desktop1{
            display: none;
        }

        .desktop2 {
            display: flex;
            justify-content: space-between;
        }

        .desktop3{
            display: none;
        }

        background-image: url("/images/1200px-login.svg");

        form {
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 700px;
            height: 930px;
            border-color: white;
        }

        h1 {
            font-size: 3em;
            position: absolute;
            margin-left: 20%;
            margin-top: 5%;
        }

        .email {
            margin-top: 25%;
            margin-left: -7%;
        }

        #email {
            width: 550px;
            height: 40px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.7em;
        }

        #forgot-email {
            font-size: 1.3em;
            margin-left: 40%;
        }

        #forgot-email:active {
            font-size: 1.5em;
            margin-left: 40%;
            color: #F47216;
        }

        .senha {
            margin-left: -7%;
        }

        #password {
            width: 550px;
            height: 40px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.7em;
        }

        #forgot-password {
            font-size: 1.3em;
            margin-left: 39%;
        }

        #forgot-password:active {
            font-size: 1.5em;
            margin-left: 39%;
            color: #F47216;
        }

        p {
            font-size: 2em;
            margin-left: 45%;
        }

        .btn-google {
            margin-left: 4%;
            width: 410px;
            height: 70px;
            font-size: 2em;
            background-color: #93B413;
            border: none;
            border-radius: 39px;
            padding: 8px;
        }

        .btn-google:hover {
            width: 450px;
            height: 70px;
            font-size: 2em;
            background-color: #9fc214;
            border: none;
            border-radius: 39px;
            padding: 8px;
        }

        .btn-google:active {
            width: 450px;
            height: 70px;
            font-size: 2em;
            background-color: #86a40f;
            border: none;
            border-radius: 39px;
            padding: 8px;
        }

        .faGoogle{
            width: 60px;
            height: 35px;
        }

        .page2 {
            font-size: 2em;
            width: 550px;
            margin-left: 12%;
        }

        .logar {
            background-color: #93B413;
            width: 270px;
            height: 80px;
            font-size: 2.7em;
            cursor: pointer;
        }

        .logar:hover {
            background-color: #9fc214;
            width: 270px;
            height: 80px;
            font-size: 2.7em;
        }

        .logar:active {
            background-color: #86a40f;
            width: 270px;
            height: 80px;
            font-size: 2.7em;
        }

        .fox {
            width: 186px;
            height: 280px;
        }
    }

    @media(min-width: 1600px) {

        height: 170vh;

        .mobile {
            display: none;
        }
    
        .tablet {
            display: none;
        }

        .desktop1{
            display: none;
        }

        .desktop2{
            display: none;
        }

        .desktop3 {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/1600px-create-user.svg");

        form {
            position: relative;
            left: 350px;
            top: 45px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 890px;
            height: 1220px;
            border-color: white;
        }

        h1 {
            font-size: 3em;
            position: absolute;
            top: 100px;
            left: 275px;
        }

        .fox {
            position: absolute;
            left: 1240px;
            top: 850px;
        }
    }

`;

const Form = function() {
    return (
        <FormComponent>
            <nav className='mobile'>
                    <form>
                        <h1>Login</h1>
                        <div className='email'>
                            <Input type="email" name="email" id="email" placeholder='Email'/>
                            <a href=""><h4 id='forgot-email'>Esqueci o Email</h4></a>
                        </div>
                        <div className='senha'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                            <a href=""><h4 id='forgot-password'>Esqueci a Senha</h4></a>
                        </div>
                        <p>OU</p>
                        <div className='google-enter'>
                            <button className='btn-google' type='button'>
                                <FaGoogle className='faGoogle'/> Entrar com Google
                            </button>
                        </div>
                        <div className='page2'>
                            Não tem uma conta? <Link href={'/page4'}>
                                <span>Crie uma!</span>
                            </Link>
                        </div>
                        <div className='button-create'>
                            <button className='logar' type='button'>
                                Entrar
                            </button>
                        </div>
                    </form>
            </nav>

            <nav className='tablet'>
                <form>
                    <h1>Login</h1>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                        <a href=""><h4 id='forgot-email'>Esqueci o Email</h4></a>
                    </div>
                        <div className='senha'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                            <a href=""><h4 id='forgot-password'>Esqueci a Senha</h4></a>
                        </div>
                        <p>OU</p>
                        <div className='google-enter'>
                            <button className='btn-google' type='button'>
                                <FaGoogle className='faGoogle'/> Entrar com Google
                            </button>
                        </div>
                        <div className='page2'>
                            Não tem uma conta? <Link href={'/page4'}>
                                <span>Crie uma!</span>
                            </Link>
                        </div>
                        <div className='button-create'>
                            <button className='logar' type='button'>
                                Entrar
                            </button>
                        </div>
                </form>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop1'>
            <form>
                    <h1>Login</h1>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                        <a href=""><h4 id='forgot-email'>Esqueci o Email</h4></a>
                    </div>
                        <div className='senha'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                            <a href=""><h4 id='forgot-password'>Esqueci a Senha</h4></a>
                        </div>
                        <p>OU</p>
                        <div className='google-enter'>
                            <button className='btn-google' type='button'>
                                <FaGoogle className='faGoogle'/> Entrar com Google
                            </button>
                        </div>
                        <div className='page2'>
                            Não tem uma conta? <Link href={'/page4'}>
                                <span>Crie uma!</span>
                            </Link>
                        </div>
                        <div className='button-create'>
                            <button className='logar' type='button'>
                                Entrar
                            </button>
                        </div>
                </form>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop2'>
                <form>
                    <h1>Login</h1>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                        <a href=""><h4 id='forgot-email'>Esqueci o Email</h4></a>
                    </div>
                    <div className='senha'>
                        <Input type="password" name="password" id="password" placeholder='Senha'/>
                        <a href=""><h4 id='forgot-password'>Esqueci a Senha</h4></a>
                    </div>
                    <p>OU</p>
                    <div className='google-enter'>
                            <button className='btn-google' type='button'>
                                <FaGoogle className='faGoogle'/> Entrar com Google
                            </button>
                        </div>
                        <div className='page2'>
                            Não tem uma conta? <Link href={'/page4'}>
                                <span>Crie uma!</span>
                            </Link>
                        </div>
                        <div className='button-create'>
                            <button className='logar' type='button'>
                                Entrar
                            </button>
                        </div>
                </form>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop3'>
                <form>
                    <h1>Logar</h1>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className='senha'>
                        <Input type="password" name="password" id="password" placeholder='Senha'/>
                    </div>
                    <div className='confirmar-senha'>
                            <Input type="password" name="confirm-password" id="confirm-password" placeholder='Confirme sua Senha'/>
                    </div>
                </form>
            </nav>
        </FormComponent>
    )
}

export default Form;