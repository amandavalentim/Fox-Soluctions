'use client'
import styled from '@emotion/styled';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import Input from '../Forms/Input/Input';

const FormComponent = styled.section `

    height: 130vh;

    background: linear-gradient(180deg, #0A53B5 0%, #028fcc 100%);

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
        margin-left: 46%;
    }

    .email {
        margin-left: 10%;
        margin-top: 15%;
    }

    #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.2em;
    }

    #h41 {
        margin-left: 27%;
        margin-top: -5%;
        color: #C7C7C7;
    }

    #h41:active {
        margin-left: 27%;
        margin-top: -5%;
        color: #F47216;
    }

    .senha {
        margin-left: 10%;
        margin-top: 10%;
    }

    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.2em;
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
        position: relative;
        left: 190px;
        top: 30px;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        width: 400px;
        height: 735px;
        border-color: white;
       }

       h1 {
        font-size: 1.5em;
        position: absolute;
        top: 55px;
        left: 115px;
       }

       .fox {
        position: absolute;
        top: 500px;
        left: 590px;
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
                            <a href=""><h4 id='h41'>Esqueci o Email</h4></a>
                        </div>
                        <div className='senha'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                        </div>
                    </form>
            </nav>

            <nav className='tablet'>
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