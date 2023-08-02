//Código desenvolvido por Gustavo Otacílio
'use client'
import styled from '@emotion/styled';
import Input from './Input/Input'
import { FaGoogle } from "react-icons/fa";

const FormComponent = styled.section`

    * {
        box-sizing: border-box;    
    }
   
    form {
        margin-top: 20px;
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'poppins-bold';
            font-size: 2em;
            color: #ffff;
            position: absolute;
            top: -40%;
            left: 36%;
        }  
        
        /* .css-81eavt {
            margin: 16px;
        } */

        .link-forget {
            padding: 0px;
            border: none;
            outline: none;
            text-align: center;
            font-size: .8em;
            color: #CCC;
            cursor: pointer;
        }

        .link-forget:hover {
            color: #F47216;
        }

        .link-forget:focus{
            color: #F47216;
        }

        #txt-or {
            color: #FFFF;
            font-size: .9em;
            text-align: center;
            margin: 15px;
            /* margin-top: 25px; */
            /* margin-bottom: 10px;  */
        }

        .google-enter {
            position: absolute;
            top: 80%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            background-color: #93B413;
            color: white;
            outline: none;
            align-items: center;
            border-radius: 39px;
            width: 250px;
            height: 40px;
            padding: 20px;
            justify-content: space-around;
            
            .btn-google { 
                background-color: white;
                border: none;
                color: black;  
                outline: none;
                border-radius: 30px;
            }
            .txt-google {
                text-align: center;
            }
        }

        .google-enter:hover{
            background-color: #9fc214;
            font-weight: bold;
        }

        .create_account {
            /* position: absolute;
            top: 105%;
            left: 50%;
            transform: translate(-50%, -50%); */
            text-align: center;
            font-size: 1em;
            color: #FFFF;
            margin: 5px;
            margin-top: 20px;
            padding-top: 55px;
            cursor: pointer;
            span {
                color: #F47216;
            }
        }
        .enter {
            position: absolute;
            top: 125%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 5px;
            .submit {
                border: none;
                background-color: #93B413;
                color: #FFFF;
                border-radius: 20px;
                width: 150px;
                height: 40px;
                font-family: 'poppins-medium';
                font-size: 20px;
                cursor: pointer;
                outline: none;
            }
            .submit:hover {
                background-color: #9fc214;
            }
        }
    }
    
    @media (min-width: 768px) {
        /* .hide-on-desktop {
            display: none;
        } */

        .box-container {
            position: absolute;
            top: 80%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            margin-top: -36px;
            form {
                margin-bottom: 40px;
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
                width: 60%;
                height: 80vh;
                padding: 100px 0px 0px 0px;
                .title {
                    position: absolute;
                    top: 10%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }             
            }
        }
    }

    @media (min-width: 992px) {
        .hide-on-desktop {
            display: flex;
        }
        .box-container {
            top: 75%;
        }
    }

    @media (min-width:1200px) {
        .hide-on-desktop {
            display: flex;
        }
        .box-container {
            top: 73%;  
        }
    }

    @media (min-width: 1600px) {
        .hide-on-desktop {
            display: flex;
        }
        .forget {
            font-size: 1000px;
        }
        .create_account {
            padding-top: 15px;
        }
        .enter {
            border-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 50px;
            .submit {
                border: none;
                background-color: #93B413;
                color: #FFFF;
                border-radius: 20px;
                width: 150px;
                height: 40px;
                font-family: 'poppins-medium';
                font-size: 3em;
            }
        }
    }
`;

const Form = function(){

    return(
        <FormComponent>
                <nav className='hide-on-desktop'>
                    <div className='box-container'>
                        <form>
                            <h1 className='title'>Login</h1>
                            <div className='login'>
                                <Input type="email" name="e-mail" id="e-mail" placeholder='E-mail'/>
                            </div>
                            <a href="#" className='link-forget'>
                                <p>Esqueci o email</p>
                            </a>
                            <div className='login'>
                                <Input type="password" name="password" id="password" placeholder='Senha'/>
                            </div>
                            <a href="#" className='link-forget'>
                                <p>Esqueci a senha</p>
                            </a>
                            <p id='txt-or'>OU</p>
                            <div className='google-enter'>
                                <button className='btn-google'>
                                    <FaGoogle/>
                                </button>
                                <p className='txt-google'>Entrar com Google</p>
                            </div>
                            <div className='create_account'>
                                <h4>Não tem uma conta? <span className='orange'>Crie uma</span></h4>
                            </div>
                            <div className='enter'>
                                <button className='submit'>
                                    Entrar
                                </button>
                            </div>
                        </form>
                    </div>
                </nav>
        </FormComponent>
    )

}

export default Form 