'use client'
import styled from '@emotion/styled';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import Input from '../Forms/Input/Input';

const FormComponent2 = styled.section `

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
        font-size: 1.3em;
        position: absolute;
        top: 220px;
        left: 90px;
    }

    .fox {
        position: absolute;
        top: 150px;
    }

    .name {
        position: absolute;
        top: 270px;
        left: 35px;
    }

    .date {
        position: absolute;
        top: 330px;
        left: 35px;
        display: flex;
        flex-direction: column;
    }

    .phone {
        position: absolute;
        top: 390px;
        left: 35px;
    }

    .cpf {
        position: absolute;
        top: 450px;
        left: 35px;
    }

    .senha {
        position: absolute;
        top: 510px;
        left: 35px;
    }

    .confirmar-senha{
        position: absolute;
        top: 570px;
        left: 35px;
    }

    .email {
        position: absolute;
        top: 630px;
        left: 35px;
    }

    p {
        position: absolute;
        top: 700px;
        left: 150px;
    }

    .google-enter {
        position: absolute;
        top: 740px;
        left: 35px;
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
        position: absolute;
        top: 795px;
        left: 35px;
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
        position: absolute;
        top: 835px;
        left: 75px;
    }

    .criar {
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

    .fox {
        width: 90px;
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

       .name {
        font-size: 1.3em;
        position: absolute;
        top: 105px;
        left: -40px;
       }

       .date {
        font-size: 1.3em;
        position: absolute;
        top: 165px;
        left: -40px;
       }

       Small {
        margin-left: 16%;
       }

       .email {
        font-size: 1.3em;
        position: absolute;
        top: 225px;
        left: -40px;
       }

       .phone {
        font-size: 1.3em;
        position: absolute;
        top: 285px;
        left: -40px;
       }

       .cpf {
        font-size: 1.3em;
        position: absolute;
        top: 345px;
        left: -40px;
       }

       .senha {
        font-size: 1.3em;
        position: absolute;
        top: 405px;
        left: -40px;
       }

       .confirmar-senha {
        font-size: 1.3em;
        position: absolute;
        top: 465px;
        left: -40px;
       }

       p {
        position: absolute;
        top: 550px;
        left: 185px;
       }

       .google-enter {
        position: absolute;
        top: 590px;
        left: 75px;
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
        background-color: #86a40f;
        border: none;
        border-radius: 39px;
        padding: 8px;
       }

       .page2 {
        position: absolute;
        top: 640px;
        left: 65px;
       }

       .criar {
        position: absolute;
        top: -165px;
        left: 40px;
        background-color: #93B413;
       }

       .criar:active {
        position: absolute;
        top: -165px;
        left: 40px;
        background-color: #86a40f;
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

        .name {
            position: absolute;
            top: 140px;
            left: -21px;
        }

        #name {
            width: 350px;
        }

        .date {
            position: absolute;
            top: 205px;
            left: -21px;
        }

        Small {
        margin-left: 17%;
       }

        #birthday {
            width: 350px;
        }

        .email {
            position: absolute;
            top: 270px;
            left: -21px;
        }

        #email {
            width: 350px;
        }

        .phone {
            position: absolute;
            top: 335px;
            left: -21px;
        }

        #phone {
            width: 350px;
        }

        .cpf {
            position: absolute;
            top: 400px;
            left: -21px;
        }

        #cpf {
            width: 350px;
        }

        .senha {
            position: absolute;
            top: 465px;
            left: -21px;
        }

        #password {
            width: 350px;
        }

        .confirmar-senha {
            position: absolute;
            top: 520px;
            left: -21px;
        }

        #confirm-password {
            width: 350px;
        }

    p {
        font-size: 1.3em;
        position: absolute;
        top: 605px;
        left: 230px;
    }

    .google-enter {
        position: absolute;
        top: 650px;
        left: 120px;
        cursor: pointer;
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

    .btn-google:hover {
        width: 250px;
        height: 40px;
        font-size: 1.1em;
        background-color: #9fc214;
        border: none;
        border-radius: 39px;
        padding: 8px;
        cursor: pointer;
    }

    .btn-google:active {
        width: 250px;
        height: 40px;
        font-size: 1.1em;
        background-color: #86a40f;
        border: none;
        border-radius: 39px;
        padding: 8px;
       }

       .page2 {
        position: absolute;
        top: 715px;
        left: 108px;
       }

       .criar {
        position: absolute;
        top: -80px;
        left: 90px;
        background-color: #93B413;
        cursor: pointer;
       }

       .criar:hover {
        position: absolute;
        top: -80px;
        left: 90px;
        background-color: #9fc214;
       }

       .criar:active {
        position: absolute;
        top: -80px;
        left: 90px;
        background-color: #86a40f;
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

        .name {
            position: absolute;
            top: 165px;
            left: -25px;
        }

        #name {
            font-size: large;
            width: 500px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .date {
            position: absolute;
            top: 240px;
            left: -25px;
        }

        Small {
            margin-top: -4%;
            margin-left: 17%;
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
            position: absolute;
            top: 315px;
            left: -25px;
        }

        #email{
            font-size: large;
            width: 500px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .phone{
            position: absolute;
            top: 390px;
            left: -25px;
        }

        #phone{
            font-size: large;
            width: 500px;
        }

        #phone::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .cpf{
            position: absolute;
            top: 465px;
            left: -25px;
        }

        #cpf{
            font-size: large;
            width: 500px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .senha {
            position: absolute;
            top: 540px;
            left: -25px;
        }

        #password {
            font-size: large;
            width: 500px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .confirmar-senha {
            position: absolute;
            top: 615px;
            left: -25px;
        }

        #confirm-password {
            font-size: large;
            width: 500px;
        }

        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        p {
            font-size: 1.8em;
            position: absolute;
            top: 720px;
            left: 310px;
        }

        .google-enter {
            position: absolute;
            top: 785px;
            cursor: pointer;
        }

        .btn-google {
            width: 450px;
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
            font-size: 1.8em;
            position: absolute;
            top: 890px;
            left: 123px;
        }

        .criar {
            position: absolute;
            top: 140px;
            left: 140px;
            background-color: #93B413;
            width: 250px;
            height: 80px;
            font-size: 2.7em;
            cursor: pointer;
        }

        .criar:hover {
            position: absolute;
            top: 140px;
            left: 140px;
            background-color: #9fc214;
            width: 250px;
            height: 80px;
            font-size: 2.7em;
        }

        .criar:active {
            position: absolute;
            top: 140px;
            left: 140px;
            background-color: #86a40f;
            width: 250px;
            height: 80px;
            font-size: 2.7em;
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

        .name {
            position: absolute;
            top: 195px;
            left: -35px;
        }

        #name {
            width: 650px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .date {
            position: absolute;
            top: 280px;
            left: -35px;
        }

        Small {
            margin-top: -7%;
            margin-left: 17%;
            font-size: 0.8em;
       }

        #birthday {
            width: 650px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .email{
            position: absolute;
            top: 365px;
            left: -35px;
        }

        #email {
            width: 650px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .phone {
            position: absolute;
            top: 450px;
            left: -35px;
        }

        #phone {
            width: 650px;
        }

        #phone::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .cpf {
            position: absolute;
            top: 535px;
            left: -35px;
        }

        #cpf {
            width: 650px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .senha {
            position: absolute;
            top: 620px;
            left: -35px;
        }

        #password {
            width: 650px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .confirmar-senha {
            position: absolute;
            top: 705px;
            left: -35px;
        }

        #confirm-password {
            width: 650px;
        }

        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        p {
            font-size: 2.2em;
            position: absolute;
            top: 820px;
            left: 400px;
        }

        .google-enter {
            position: absolute;
            top: 895px;
            left: 210px;
        }

        .page2 {
            font-size: 2em;
            position: absolute;
            top: 1010px;
            left: 160px;
        }

        .criar {
            position: absolute;
            top: 260px;
            left: 250px;
        }

        .criar:hover {
            position: absolute;
            top: 260px;
            left: 250px;
            background-color: #9fc214;
        }

        .criar:active {
            position: absolute;
            top: 260px;
            left: 250px;
            background-color: #86a40f;
        }

        .fox {
            position: absolute;
            left: 1240px;
            top: 850px;
        }
    }

`;

const Small = styled.small`
font-size: 6px;
margin:0;
position:relative;
top:-20px;
left: 20px;`;

const Form2 = function() {
    return (
        <FormComponent2>
            <nav className='mobile'>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
                    <form>
                        <h1>Criar Usuário</h1>
                        <div className='name'>
                            <Input type="string" name="name" id="name" placeholder='Nome Completo'/>
                        </div>
                        <div className='date'>
                            <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                            <Small>Digite a Data de Nascimento</Small>
                        </div>
                        <div className='email'>
                            <Input type="email" name="email" id="email" placeholder='Email'/>
                        </div>
                        <div className='phone'>
                            <Input type="phone" name="phone" id="phone" placeholder='Celular'/>
                        </div>
                        <div className='cpf'>
                            <Input type="number" name="cpf" id="cpf" placeholder='CPF'/>
                        </div>
                        <div className='senha'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                        </div>
                        <div className='confirmar-senha'>
                            <Input type="password" name="confirm-password" id="confirm-password" placeholder='Confirme sua Senha'/>
                        </div>
                        <p>OU</p>
                            <div className='google-enter'>
                                    <button className='btn-google' type='button'>
                                        <FaGoogle className='faGoogle'/> Entrar com Google
                                    </button>
                            </div>
                            <div className='page2'>
                            Já tem uma conta? <Link href={'/page2'}>
                                <span>Clique Aqui!</span>
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
                    <h1>Criar Usuário</h1>
                    <div className='name'>
                        <Input type="string" name="name" id="name" placeholder='Nome Completo'/>
                    </div>
                    <div className='date'>
                            <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                            <Small>Digite a Data de Nascimento</Small>
                        </div>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className='phone'>
                            <Input type="phone" name="phone" id="phone" placeholder='Celular'/>
                        </div>
                        <div className='cpf'>
                            <Input type="number" name="cpf" id="cpf" placeholder='CPF'/>
                        </div>
                        <div className='senha'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                        </div>
                        <div className='confirmar-senha'>
                            <Input type="password" name="confirm-password" id="confirm-password" placeholder='Confirme sua Senha'/>
                        </div>
                        <p>OU</p>
                        <div className='google-enter'>
                            <button className='btn-google' type='button'>
                                <FaGoogle className='faGoogle'/> Entrar com Google
                            </button>
                        </div>
                        <div className='page2'>
                            Já tem uma conta? <Link href={'/page2'}>
                                <span>Clique Aqui!</span>
                            </Link>
                        </div>
                         <div className='button-create'>
                             <button className='criar' type='button'>
                                Criar
                            </button>
                        </div>
                </form>
                    <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop1'>
            <form>
                    <h1>Criar Usuário</h1>
                    <div className='name'>
                        <Input type="string" name="name" id="name" placeholder='Nome Completo'/>
                    </div>
                    <div className='date'>
                            <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                            <Small>Digite a Data de Nascimento</Small>
                    </div>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className='phone'>
                            <Input type="phone" name="phone" id="phone" placeholder='Celular'/>
                        </div>
                        <div className='cpf'>
                            <Input type="number" name="cpf" id="cpf" placeholder='CPF'/>
                        </div>
                        <div className='senha'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                        </div>
                        <div className='confirmar-senha'>
                            <Input type="password" name="confirm-password" id="confirm-password" placeholder='Confirme sua Senha'/>
                        </div>
                        <p>OU</p>
                        <div className='google-enter'>
                            <button className='btn-google' type='button'>
                                <FaGoogle className='faGoogle'/> Entrar com Google
                            </button>
                        </div>
                        <div className='page2'>
                            Já tem uma conta? <Link href={'/page2'}>
                                <span>Clique Aqui!</span>
                            </Link>
                        </div>
                         <div className='button-create'>
                             <button className='criar' type='button'>
                                Criar
                            </button>
                        </div>
                </form>
                    <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop2'>
                <form>
                    <h1>Criar Usuário</h1>
                    <div className='name'>
                        <Input type="string" name="name" id="name" placeholder='Nome Completo'/>
                    </div>
                    <div className='date'>
                        <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                        <Small>Digite a Data de Nascimento</Small>
                    </div>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className='phone'>
                        <Input type="phone" name="phone" id="phone" placeholder='Celular'/>
                    </div>
                    <div className='cpf'>
                        <Input type="number" name="cpf" id="cpf" placeholder='CPF'/>
                    </div>
                    <div className='senha'>
                        <Input type="password" name="password" id="password" placeholder='Senha'/>
                    </div>
                    <div className='confirmar-senha'>
                        <Input type="password" name="confirm-password" id="confirm-password" placeholder='Confirme sua Senha'/>
                    </div>
                    <p>OU</p>
                    <div className='google-enter'>
                        <button className='btn-google' type='button'>
                            <FaGoogle className='faGoogle'/> Entrar com Google
                        </button>
                    </div>
                    <div className='page2'>
                        Já tem uma conta? <Link href={'/page2'}>
                            <span>Clique Aqui!</span>
                        </Link>
                    </div>
                    <div className='button-create'>
                        <button className='criar' type='button'>
                            Criar
                        </button>
                    </div>
                </form>
                    <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop3'>
                <form>
                    <h1>Criar Usuário</h1>
                    <div className='name'>
                        <Input type="string" name="name" id="name" placeholder='Nome Completo'/>
                    </div>
                    <div className='date'>
                        <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                        <Small>Digite a Data de Nascimento</Small>
                    </div>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className='phone'>
                            <Input type="phone" name="phone" id="phone" placeholder='Celular'/>
                    </div>
                    <div className='cpf'>
                        <Input type="number" name="cpf" id="cpf" placeholder='CPF'/>
                    </div>
                    <div className='senha'>
                        <Input type="password" name="password" id="password" placeholder='Senha'/>
                    </div>
                    <div className='confirmar-senha'>
                            <Input type="password" name="confirm-password" id="confirm-password" placeholder='Confirme sua Senha'/>
                        </div>
                    <p>OU</p>
                    <div className='google-enter'>
                        <button className='btn-google' type='button'>
                            <FaGoogle className='faGoogle'/> Entrar com Google
                        </button>
                    </div>
                    <div className='page2'>
                        Já tem uma conta? <Link href={'/page2'}>
                            <span>Clique Aqui!</span>
                        </Link>
                    </div>
                    <Link href={'/page5'}>
                        <div className='button-create'>
                            <button className='criar' type='button'>
                                Criar
                            </button>
                        </div>
                    </Link>
                </form>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>
        </FormComponent2>
    )
}

export default Form2;