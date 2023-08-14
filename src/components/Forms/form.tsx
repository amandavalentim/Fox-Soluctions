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

    .criar {
        margin-top: 10%;
        margin-left: 27%;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
    }

    .criar:active {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 20px;
    }

    @media(min-width: 768px){

        height: 140vh;

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

        background-image: url("/images/tablet-create-user.svg");
        background-repeat: no-repeat;

        form {
        margin-left: 25%;
        margin-top: 3%;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        width: 400px;
        height: 735px;
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
        margin-top: 2%;
        margin-left: 46%;
       }

       .google-enter {
        margin-left: 14%;
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
    }

    @media(min-width: 992px) {

        height: 138vh;

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

        background-image: url("/images/992px-create-user.svg");

        form {
            position: relative;
            left: 260px;
            top: 30px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 500px;
            height: 830px;
            border-color: white;
       }

        h1 {
            position: absolute;
            top: 65px;
            left: 140px;
            font-size: 2em;
        }

       .fox {
        width: 110px;
        position: absolute;
        left: 760px;
        top: 600px;
    }
}

    @media(min-width: 1200px) {

        height: 178vh;

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

        background-image: url("/images/1200px-create-user.svg");

        form {
            position: relative;
            left: 345px;
            top: 30px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 690px;
            height: 1090px;
            border-color: white;
        }

        h1 {
            font-size: 2.8em;
            position: absolute;
            left: 185px;
        }

        .fox {
            width: 170px;
            position: absolute;
            left: 1035px;
            top: 700px;
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
                            <button className='criar' type='button'>
                                Criar
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
                </form>
            </nav>

            <nav className='desktop1'>
            <form>
                    <h1>Criar Usuário</h1>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                        <div className='senha'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                        </div>
                </form>
            </nav>

            <nav className='desktop2'>
                <form>
                    <h1>Criar Usuário</h1>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className='senha'>
                        <Input type="password" name="password" id="password" placeholder='Senha'/>
                    </div>
                </form>
            </nav>

            <nav className='desktop3'>
                <form>
                    <h1>Criar Usuário</h1>
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