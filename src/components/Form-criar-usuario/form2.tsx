'use client'
import styled from '@emotion/styled';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import Input from '../Forms/Input/Input';

const FormComponent2 = styled.section `

    height: 120vh;

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

    h1 {
        font-size: 1.3em;
        position: absolute;
        top: 220px;
        left: 110px;
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

    .email {
        position: absolute;
        top: 330px;
        left: 35px;
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

    p {
        position: absolute;
        top: 660px;
        left: 150px;
    }

    .google-enter {
        position: absolute;
        top: 710px;
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

    .btn-google:focus {
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
        top: 790px;
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
        top: 850px;
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

    @media(min-width: 768px){

        height: 118vh;

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

        background-image: url("/images/tablet-login.svg");
        background-repeat: no-repeat;

        form {
        position: relative;
        left: 190px;
        top: 30px;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        width: 400px;
        height: 710px;
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

       .email {
        font-size: 1.3em;
        position: absolute;
        top: 165px;
        left: -40px;
       }

       .phone {
        font-size: 1.3em;
        position: absolute;
        top: 215px;
        left: -40px;
       }

       .cpf {
        font-size: 1.3em;
        position: absolute;
        top: 275px;
        left: -40px;
       }

       .senha {
        font-size: 1.3em;
        position: absolute;
        top: 335px;
        left: -40px;
       }

       .confirmar-senha {
        font-size: 1.3em;
        position: absolute;
        top: 395px;
        left: -40px;
       }

       p {
        position: absolute;
        top: 490px;
        left: 185px;
       }

       .google-enter {
        position: absolute;
        top: 540px;
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

       .btn-google:focus {
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
        top: 600px;
        left: 65px;
       }

       .criar {
        position: absolute;
        top: -205px;
        left: 40px;
       }

       .criar:focus {
        position: absolute;
        top: -205px;
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

        background-image: url("/images/992px-login.svg");

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
            left: 135px;
            font-size: 2em;
        }

        .name {
            position: absolute;
            top: 140px;
            left: -50px;
        }

        .email {
            position: absolute;
            top: 205px;
            left: -50px;
        }

        .phone {
            position: absolute;
            top: 270px;
            left: -50px;
        }

        .cpf {
            position: absolute;
            top: 335px;
            left: -50px;
        }

        .senha {
            position: absolute;
            top: 400px;
            left: -50px;
        }

        .confirmar-senha {
            position: absolute;
            top: 465px;
            left: -50px;
        }

        p {
            font-size: 1.3em;
            position: absolute;
            top: 560px;
            left: 230px;
        }
    }

`;

const Senha = () => {
    
}

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
                                <Link href={'/page2'}>
                                    Já tem uma conta? <span>Clique Aqui!</span>
                                </Link>
                            </div>
                            <div className='button-create'>
                                <button className='criar' type='button' onClick={Senha}>
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
                            <Link href={'/page2'}>
                                Já tem uma conta? <span>Clique Aqui!</span>
                            </Link>
                         </div>
                         <div className='button-create'>
                             <button className='criar' type='button' onClick={Senha}>
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
                </form>
            </nav>
        </FormComponent2>
    )
}

export default Form2;