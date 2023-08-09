'use client'
import styled from '@emotion/styled';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import Input from '../Forms/Input/Input';

const FormComponent2 = styled.section `

    * {
        box-sizing: border-box; 
        margin: 0px;
        padding: 0px;
    }

    background: linear-gradient(180deg, #0A53B5 0%, #028fcc 100%);

    .mobile {
        display: flex;
        justify-content: space-between;
    }
    
    .tablet {
        display: none;
    }

    h1{
        padding-top: 50px;
        padding-bottom: 60px;
        text-align: center;
        font-size: 1.4em;
        padding-left: 40px;
    }

    form {
        text-align: center;
    }

    .name {
        padding-bottom: 40px;
        padding-left: 30px;
    }

    .email {
        padding-bottom: 40px;
        padding-left: 30px;
    }

    .phone {
        padding-bottom: 40px;
        padding-left: 30px;
    }

    .cpf {
        padding-bottom: 40px;
        padding-left: 30px;
    }

    .senha {
        padding-bottom: 40px;
        padding-left: 30px;
    }

    .confirmar-senha {
        padding-bottom: 30px;
        padding-left: 30px;
    }

    p {
        padding-top: 2px;
        padding-bottom: 20px;
        padding-left: 30px;
    }

    .google-enter {
        padding-bottom: 30px;
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
    }

    @media(min-width: 768px){

        * {
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
        
       }
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

                        <div className='buttons'>
                            <div className='google-enter'>
                                    <button className='btn-google' type='button'>
                                        <FaGoogle className='faGoogle'/> Entrar com Google
                                    </button>
                            </div>

                            <Link href={'/page2'}>
                                Já tem uma conta? <span>Clique Aqui!</span>
                            </Link>

                            <div className='button-create'>
                                <button className='criar' type='button' onClick={Senha}>
                                    Criar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>

            <nav className='tablet'>
            <div className='box-container'>
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
                    <div className='form2'>
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

                            <div className='link-login'>
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
                </div>
            </nav>
        </FormComponent2>
    )
}

export default Form2;