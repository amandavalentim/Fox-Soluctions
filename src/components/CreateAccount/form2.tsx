// Developed code by Gabriel

'use client'
import styled from '@emotion/styled';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import Input from '../Login/Input/Input';

const FormComponent2 = styled.section `

    // Mobile
    height: 84vh;

    background: linear-gradient(180deg, #0A53B5 0%, #028fcc 100%);

    * {
        color: white;
    }

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
        font-size: 1.3em;
        margin-top: 20%;
        /* margin-left: 35%; */
        text-align: center;
        /* width: 200px; */
    }

    .fox {
        position: absolute;
        top: 150px;
    }

    .name {
        margin-top: 5%;
        /* margin-left: 11.2%; */
    }

    small {
        font-size: 0.9em;
        margin-top: -5%;
        margin-left: 6.3%;
    }

    .date {
        margin-top: -5%;
        /* margin-left: 11.2%; */
        display: flex;
        flex-direction: column;
    }

    .phone {
        margin-top: -5%;
        /* margin-left: 11.2%; */
    }

    .cpf {
        margin-top: -5%;
        /* margin-left: 11.2%; */
    }

    .password {
        margin-top: -5%;
        /* margin-left: 11.2%; */
    }

    .confirm-password{
        margin-top: -5%;
        /* margin-left: 11.2%; */
    }

    .email {
        margin-top: 1%;
        /* margin-left: 11.2%; */
    }

    /* .adm {
        position: absolute;
        top: 680px;
        left: -35px;
    }
    
    .adm-txt {
        position: absolute;
        top: 17px;
        left: 145px;
    }

    .user {
        position: absolute;
        top: 715px;
        left: 1px;
    }
    
    .user-txt {
        position: absolute;
        top: 17px;
        left: 145px;
    }

    #enterprise-name {
        position: absolute;
        top: 30px;
        left: 130px;
        display: none;
    } */

    p {
        margin-top: 5%;
        /* margin-left: 56%; */
        text-align: center;
    }

    .google-enter {
        margin-top: 6.5%;
        /* margin-left: 13.5%; */
        text-align: center;
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

    .page2 {
        margin-top: 5%;
        /* margin-left: 10%; */
        text-align: center;
        /* width: 270px; */
    }

    .faGoogle {
        width: 40px;
        height: 25px;
        margin-bottom: -5px;
    }

    span {
        color: #F47216;
    }

    .button-create {
        /* margin-top: 5%; */
        /* margin-left: 28%; */
        text-align: center;
    }

    .criar {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 15px;
        margin-top: 6%;
    }

    .criar:active {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 15px;
        margin-top: 6%;
    }

    .fox {
        width: 90px;
    }

    // Tablet
    @media(min-width: 768px){

        height: 120.5vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/tablet-create-user.svg");
        background-repeat: no-repeat; */

        form {
            margin-top: 10%;
            /* margin-left: 23.8%; */
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 400px;
            height: 745px;
            border-color: white;
            display: grid;
            justify-content: center;
            align-items: center;
        }

        h1 {
            font-size: 1.5em;
            margin-top: 8%;
            /* margin-left: 31%; */
            text-align: center;
        }

        .css-6w74q7 {
            margin: 0;
            width: 40vw;
        }

        .name {
            font-size: 1.3em;
            margin-top: -0.5%;
            /* margin-left: -9.8%; */
            text-align: center;
        }

        .date {
            font-size: 1.3em;
            margin-top: 2%;
            /* margin-left: -9.8%; */
            text-align: center;
        }

        small {
            margin-left: -31%; 
            margin-top: 1%;
            font-size: 0.75em;
        } 

        .email {
            font-size: 1.3em;
            margin-top: -0.5%;
            /* margin-left: -9.8%; */
            text-align: center;
        }

        .phone {
            font-size: 1.3em;
            margin-top: -0.5%;
            /* margin-left: -9.8%; */
            text-align: center;
        }

        .cpf {
            font-size: 1.3em;
            margin-top: -0.5%;
            /* margin-left: -9.8%; */
            text-align: center;
        }

        .password {
            font-size: 1.3em;
            margin-top: -0.5%;
            /* margin-left: -9.8%; */
            text-align: center;
        }

        .confirm-password {
            font-size: 1.3em;
            margin-top: -0.5%;
            /* margin-left: -9.8%; */
            text-align: center;
        }

       /* .adm {
        position: absolute;
        top: 530px;
        left: -170px;
    }
    
    .adm-txt {
        position: absolute;
        top: 25px;
        left: 250px;
    }

    .user {
        position: absolute;
        top: 530px;
        left: 20px;
    }
    
    .user-txt {
        position: absolute;
        top: 25px;
        left: 250px;
    }

    #enterprise-name {
        position: absolute;
        top: 30px;
        left: 130px;
        display: none;
    } */

        p {
            margin-top: -0.5%;
            /* margin-left: 47.5%; */
        }

        .google-enter {
            margin-top: -1%;
            /* margin-left: 12%; */
        }

        .btn-google {
            width: 40vw;
            height: 40px;
            font-size: 1.1em;
            background-color: #93B413;
            border: none;
            border-radius: 39px;
            padding-top: 8px;
            padding-left: 0px;
        }

        .btn-google:active {
            width: 40vw;
            height: 40px;
            font-size: 1.1em;
            background-color: #86a40f;
            border: none;
            padding-top: 8px;
            padding-left: 0px;
        }

        .page2 {
            /* margin-left: 19.8%; */
            margin-top: -1%;
            font-size: 1.1em;
        }

        .criar {
            margin-top: -100%;
            /* margin-left: 12%; */
            background-color: #93B413;
            width: 110px;
            height: 40px;
            border-radius: 15px;
        }

        .criar:active {
            margin-top: -2%;
            /* margin-left: 12%; */
            background-color: #86a40f;
            width: 110px;
            height: 40px;
            border-radius: 15px;
        }

        .fox {
            margin-left: 76%;
            margin-top: 55%;
            /* position: absolute;
            top: 500px;
            left: 583px; */
        }
    }

    // small Screens
    @media(min-width: 992px) {

        height: 125.5vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/992px-create-user.svg"); */

        form {
            margin-top: 10%;
            /* margin-left: 25.5%; */
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 500px;
            height: 755px;
            border-color: white;
       }

        h1 {
            margin-top: 5%;
            /* margin-left: 30%; */
            font-size: 2em;
            /* width: 202px; */
        }

        .name {
            margin-top: -0.5%;
            /* margin-left: -5%; */
        }

        #name {
            width: 350px;
        }

        .date {
            margin-top: -5%;
            /* margin-left: -5%; */
        }

        small {
            margin-left: -40%;
        }

        #birthday {
            width: 350px;
        }

        .email {
            margin-top: -5%;
            /* margin-left: -5%; */
        }

        #email {
            width: 350px;
        }

        .phone {
            margin-top: -5%;
            /* margin-left: -5%; */
        }

        #phone {
            width: 350px;
        }

        .cpf {
            margin-top: -5%;
            /* margin-left: -5%; */
        }

        #cpf {
            width: 350px;
        }

        .password {
            margin-top: -5%;
            /* margin-left: -5%; */
        }

        #password {
            width: 350px;
        }

        .confirm-password {
            margin-top: -5%;
            /* margin-left: -5%; */
        }

        #confirm-password {
            width: 350px;
        }

        /* .adm {
        position: absolute;
        top: 570px;
        left: -200px;
    }
    
    .adm-txt {
        position: absolute;
        top: 25.4px;
        left: 320px;
        font-size: 1em;
    }

    .user {
        position: absolute;
        top: 570px;
        left: 43px;
    }
    
    .user-txt {
        position: absolute;
        top: 25.4px;
        left: 320px;
        font-size: 1em;
    }

    #enterprise-name {
        position: absolute;
        top: 30px;
        left: 130px;
        display: none;
    } */

        p {
            font-size: 1.2em;
            margin-top: -1%;
        }

        .google-enter {
            margin-top: -5%;
            /* margin-left: 13%; */
            cursor: pointer;
        }

        .btn-google {
            width: 320px;
            height: 40px;
            font-size: 1.1em;
            background-color: #93B413;
            border: none;
            border-radius: 39px;
            padding: 8px;
            /* margin-left: 5.5%; */
        }

        .btn-google:hover {
            width: 320px;
            height: 40px;
            font-size: 1.1em;
            background-color: #9fc214;
            border: none;
            border-radius: 39px;
            padding: 8px;
            cursor: pointer;
            /* margin-left: 5.5%; */
        }

        .btn-google:active {
            width: 320px;
            height: 40px;
            font-size: 1.1em;
            background-color: #86a40f;
            border: none;
            border-radius: 39px;
            padding: 8px;
            /* margin-left: 5.5%; */
        }

        .page2 {
            margin-top: -3%;
            /* margin-left: 23%; */
            font-size: 1.2em;
        }

        .criar {
            margin-top: -100%;
            /* margin-left: 16%; */
            background-color: #93B413;
            cursor: pointer;
        }

        .criar:hover {
            margin-top: -0.5%;
            /* margin-left: 16%; */
            background-color: #9fc214;
        }

        .criar:active {
            margin-top: -0.5%;
            /* margin-left: 16%; */
            background-color: #86a40f;
        }

        .fox {
            width: 110px;
            margin-top: 45%;
            margin-left: 74.5%;
            /* position: absolute;
            left: 760px;
            top: 600px; */
        }
}

    // Medium Screens
    @media(min-width: 1200px) {

        height: 165vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/1200px-create-user.svg"); */

        form {
            /* margin-left: 24.2%; */
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 690px;
            height: 1020px;
            border-color: white;
        }

        h1 {
            font-size: 2.4em;
            /* width: 250px; */
            /* margin-left: 33%; */
        }

        .name {
            margin-top: 1%;
            /* margin-left: -4.1%; */
        }

        #name {
            font-size: large;
            width: 500px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .date {
            margin-top: -5%;
            /* margin-left: -4.1%; */
        }

        small {
            margin-top: 1%;
            margin-left: -55%;
            font-size: 0.8em;
       }

        #birthday {
            font-size: large;
            width: 500px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .email {
            margin-top: -5%;
            /* margin-left: -4.1%; */
        }

        #email{
            font-size: large;
            width: 500px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .phone{
            margin-top: -5%;
            /* margin-left: -4.1%; */
        }

        #phone{
            font-size: large;
            width: 500px;
        }

        #phone::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .cpf{
            margin-top: -5%;
            /* margin-left: -4.1%; */
        }

        #cpf{
            font-size: large;
            width: 500px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .password {
            margin-top: -5%;
            /* margin-left: -4.1%; */
        }

        #password {
            font-size: large;
            width: 500px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .confirm-password {
            margin-top: -5%;
            /* margin-left: -4.1%; */
        }

        #confirm-password {
            font-size: large;
            width: 500px;
        }

        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        /* .adm {
        position: absolute;
        top: 710px;
        left: -280px;
    }
    
    .adm-txt {
        position: absolute;
        top: 20px;
        left: 415px;
        font-size: 1.5em;
    }

    .user {
        position: absolute;
        top: 710px;
        left: 100px;
    }
    
    .user-txt {
        position: absolute;
        top: 20px;
        left: 415px;
        font-size: 1.5em;
    }

    #enterprise-name {
        position: absolute;
        top: 30px;
        left: 130px;
        display: none;
    } */

        p {
            font-size: 1.7em;
            margin-top: -1%;
            /* margin-left: 48%; */
        }

        .google-enter {
            margin-top: -4.5%;
            /* margin-left: 14.5%; */
            cursor: pointer;
        }

        .btn-google {
            width: 500px;
            height: 70px;
            font-size: 2em;
            background-color: #93B413;
            border: none;
            border-radius: 39px;
            padding: 8px;
            /* margin-left: -0.5%; */
        }

        .btn-google:hover {
            width: 500px;
            height: 70px;
            font-size: 2em;
            background-color: #9fc214;
            border: none;
            border-radius: 39px;
            padding: 8px;
            /* margin-left: -0.5%; */
        }

        .btn-google:active {
            width: 500px;
            height: 70px;
            font-size: 2em;
            background-color: #86a40f;
            border: none;
            border-radius: 39px;
            padding: 8px;
            /* margin-left: -0.5%; */
        }

        .faGoogle{
            width: 60px;
            height: 35px;
        }
        
        .page2 {
            font-size: 1.6em;
            margin-top: -5%;
            /* margin-left: 18.5%; */
            /* width: 430px; */
        }

        .criar {
            margin-top: -5%;
            /* margin-left: 11%; */
            background-color: #93B413;
            width: 200px;
            height: 60px;
            font-size: 2.7em;
            cursor: pointer;
        }

        .criar:hover {
            margin-top: -5%;
            /* margin-left: 11%; */
            background-color: #9fc214;
            width: 200px;
            height: 60px;
            font-size: 2.7em;
        }

        .criar:active {
            margin-top: -5%;
            /* margin-left: 11%; */
            background-color: #86a40f;
            width: 200px;
            height: 60px;
            font-size: 2.7em;
        }

        .fox {
            width: 170px;
            margin-top: 40%;
            margin-left: 75.5%;
            /* position: absolute;
            left: 1021px;
            top: 700px; */
        }
    }

    @media(min-width: 1400px) {
        height: 166.5vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/1400px-create-user.svg"); */

        form {
            /* margin-left: 25.5%; */
            margin-top: 10%;
        }

        .fox {
            width: 170px;
            /* position: absolute;
            left: 1067px;
            top: 700px; */
        }
    }

    // Large Screens
    @media(min-width: 1600px) {

        height: 162vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/1600px-create-user.svg"); */

        form {
            /* margin-left: 22%; */
            margin-top: 10%;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 890px;
            height: 1080px;
            border-color: white;
        }

        h1 {
            font-size: 3em;
            margin-top: 5%;
            /* margin-left: 33.5%; */
            /* width: 305px; */
        }

        .name {
            margin-top: -0.5%;
        }

        #name {
            width: 650px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .date {
            margin-top: -3%;
        }

        small {
            margin-top: 1%;
            margin-left: -57%;
            font-size: 1em;
       }

        #birthday {
            width: 650px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .email{
            margin-top: -5%;
        }

        #email {
            width: 650px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .phone {
            margin-top: -4%;
        }

        #phone {
            width: 650px;
        }

        #phone::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .cpf {
            margin-top: -4%;
        }

        #cpf {
            width: 650px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .password {
            margin-top: -4%;
        }

        #password {
            width: 650px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .confirm-password {
            margin-top: -4%;
        }

        #confirm-password {
            width: 650px;
        }

        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        p {
            font-size: 2.2em;
            margin-top: -5%;
        }

        .google-enter {
            margin-top: -5%;
            /* margin-left: 10%; */
        }

        .btn-google {
            width: 520px;
            height: 70px;
            font-size: 2.2em;
            background-color: #93B413;
            border: none;
            border-radius: 39px;
            padding: 8px;
            /* margin-left: 12%; */
        }

        .btn-google:hover {
            width: 520px;
            height: 70px;
            font-size: 2.2em;
            background-color: #9fc214;
            border: none;
            border-radius: 39px;
            padding: 8px;
            /* margin-left: 12%; */
        }

        .btn-google:active {
            width: 520px;
            height: 70px;
            font-size: 2.2em;
            background-color: #86a40f;
            border: none;
            border-radius: 39px;
            padding: 8px;
            /* margin-left: 12%; */
        }

        .page2 {
            font-size: 1.7em;
            margin-top: -5%;
            /* margin-left: 25%; */
            /* width: 500px; */
        }

        .criar {
            margin-top: -8%;
            /* margin-left: 15.5%; */
        }

        .criar:hover {
            margin-top: -8%;
            /* margin-left: 15.5%; */
            background-color: #9fc214;
            width: 200px;
            height: 60px;
            font-size: 2.7em;
        }

        .criar:active {
            margin-top: -8%;
            /* margin-left: 15.5%; */
            background-color: #86a40f;
            width: 200px;
            height: 60px;
            font-size: 2.7em;
        }

        .fox {
            margin-top: 35%;
            margin-left: 78.3%;
            /* position: absolute;
            left: 1235px;
            top: 850px; */
        }
    }

`;

const Form2 = function() {
    return (
        <FormComponent2>
            <nav className='mobile'>
                {/* Stella our mascot */}
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
                    <form>
                         {/* Create User form content */}
                        <h1>Criar Conta</h1>
                        <div className='name'>
                            <Input type="string" name="name" id="name" placeholder='Nome Completo '/>
                            {/* <span className='span1'>*</span> */}
                        </div>
                        <div className='date'>
                            <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                            <small>Digite a Data de Nascimento</small>
                            {/* <span className='span2'>*</span> */}
                        </div>
                        <div className='email'>
                            <Input type="email" name="email" id="email" placeholder='E-mail'/>
                            {/* <span className='span3'>*</span> */}
                        </div>
                        <div className='phone'>
                            <Input type="phone" name="phone" id="phone" placeholder='Celular'/>
                            {/* <span className='span4'>*</span> */}
                        </div>
                        <div className='cpf'>
                            <Input type="number" name="cpf" id="cpf" placeholder='CPF'/>
                            {/* <span className='span5'>*</span> */}
                        </div>
                        <div className='password'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                            {/* <span className='span6'>*</span> */}
                        </div>
                        <div className='confirm-password'>
                            <Input type="password" name="confirm-password" id="confirm-password" placeholder='Confirme sua Senha'/>
                            {/* <span className='span7'>*</span> */}
                        </div>
                        {/* <label>
                        <div className='adm'>
                            <Input type='radio' name='op' id='adm-enterprise' defaultValue='ADM'/> 
                            <p className='adm-txt'>Administrador</p>
                            <Input type='string' name='enterprise-name' id='enterprise-name' placeholder='Nome da Empresa'/>
                        </div>
                        <div className='user'>
                            <Input type='radio' name='op' id='user-hired' defaultValue='User'/> 
                            <p className='user-txt'>User</p>
                        </div>
                        </label> */}
                        <p>OU</p>
                            <div className='google-enter'>
                                    <button className='btn-google' type='button'>
                                        <FaGoogle className='faGoogle'/> Entrar com Google
                                    </button>
                            </div>
                            <div className='page2'>
                            Já tem uma conta? <Link href={'/LoginPage'}>
                                <span>Clique Aqui!</span>
                            </Link>
                            </div>
                            <div className='button-create'>
                            <button className='criar' type='button'>
                                <Link href={"/ProfilePage"}>Criar</Link>
                            </button>
                            </div>
                    </form>
            </nav>

            <nav className='tablet-desktops'>
                <form>
                    {/* Create User form content */}
                    <h1>Criar Conta</h1>
                    <div className='name'>
                        <Input type="string" name="name" id="name" placeholder='Nome Completo'/>
                        {/* <span className='span1'>*</span> */}
                    </div>
                    <div className='date'>
                            <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                            <small>Digite a Data de Nascimento</small> 
                            {/* <span className='span2'>*</span> */}
                        </div>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='E-mail'/>
                        {/* <span className='span3'>*</span> */}
                    </div>
                    <div className='phone'>
                            <Input type="phone" name="phone" id="phone" placeholder='Celular'/>
                            {/* <span className='span4'>*</span> */}
                        </div>
                        <div className='cpf'>
                            <Input type="number" name="cpf" id="cpf" placeholder='CPF'/>
                            {/* <span className='span5'>*</span> */}
                        </div>
                        <div className='password'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                            {/* <span className='span6'>*</span> */}
                        </div>
                        <div className='confirm-password'>
                            <Input type="password" name="confirm-password" id="confirm-password" placeholder='Confirme sua Senha'/>
                            {/* <span className='span7'>*</span> */}
                        </div>
                        {/* <label>
                        <div className='adm'>
                            <Input type='radio' name='op' id='adm-enterprise' defaultValue='ADM'/> 
                            <p className='adm-txt'>Administrador</p>
                            <Input type='string' name='enterprise-name' id='enterprise-name' placeholder='Nome da Empresa'/>
                        </div>
                        <div className='user'>
                            <Input type='radio' name='op' id='user-hired' defaultValue='User'/> 
                            <p className='user-txt'>User</p>
                        </div>
                        </label> */}
                        <p>OU</p>
                        <div className='google-enter'>
                            <button className='btn-google' type='button'>
                                <FaGoogle className='faGoogle'/> Entrar com Google
                            </button>
                        </div>
                        <div className='page2'>
                            Já tem uma conta? <Link href={'/LoginPage'}>
                                <span>Clique Aqui!</span>
                            </Link>
                        </div>
                         <div className='button-create'>
                            <Link href={'/ProfilePage'}>
                                <button className='criar' type='button'>
                                    Criar
                                </button>
                            </Link>
                        </div>
                </form>
                {/* Stella our mascot */}
                    <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>
        </FormComponent2>
    )
}

export default Form2;