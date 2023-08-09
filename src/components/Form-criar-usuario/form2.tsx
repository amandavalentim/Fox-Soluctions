'use client'
import styled from '@emotion/styled';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import Input from '../Forms/Input/Input';

const FormComponent2 = styled.section `

    height: 137vh;

    background: linear-gradient(180deg, #0A53B5 0%, #028fcc 100%);

    .mobile {
        display: flex;
        justify-content: space-between;
    }

    .tablet {
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
        left: 170px;
    }

    .google-enter {
        position: absolute;
        top: 710px;
        left: 60px;
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

    .page2 {
        position: absolute;
        top: 790px;
        left: 48px;
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
        left: 100px;
    }

    .criar {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
    }

    /* 

    .faGoogle {
        width: 40px;
        height: 25px;
        margin-bottom: -5px;
    }

    span {
        color: #F47216;
    }

    .button-create {
        padding: 30px;
    }

    .criar {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
    }

    .fox {
        position: absolute;
        width: 100px;
        top: 150px;
    }

    .buttons {
        padding-left: 28px;
    } */

    @media(min-width: 768px){

        .mobile {
            display: none;
        }
    
        .tablet {
            display: flex;
            justify-content: space-between;
        }
    

        /* * {
        box-sizing: border-box; 
        margin: 0px;
        padding: 0px;
    }

        .mobile {
            display: none;
        }
    
        .tablet {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/tablet-login.svg");
        background-repeat: no-repeat;

       form {
        position: relative;
        left: 175px;
        top: 30px;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        width: 400px;
        height: 760px;
       }

       h1 {
        padding-top: 30px;
       }

       .name {
        padding-left: 4px;
       }

       .email {
        padding-left: 4px;
       }

       .phone {
        padding-left: 4px;
       }

       .cpf {
        padding-left: 4px;
       }

       .senha {
        padding-left: 4px;
       }

       .confirmar-senha {
        padding-left: 4px;
       }

       p {
        padding-left: 5px;
       } */
    }

`;

const Senha = () => {
    
}

const Form2 = function() {
    return (
        <FormComponent2>
            <nav className='mobile'>
                <div className='box-container'>
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
                </div>
            </nav>

            <nav className='tablet'>

            </nav>
        </FormComponent2>
    )
}

export default Form2;