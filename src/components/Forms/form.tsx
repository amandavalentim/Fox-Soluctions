//Código desenvolvido por Gustavo Otacílio
'use client'
import styled from '@emotion/styled';
import Input from './Input/Input'
import { FaGoogle } from "react-icons/fa";

const FormComponent = styled.section`

    * {
        box-sizing: border-box; 
        margin: 0px;
        padding: 0px;
    }

    .box-container {
        form {
            position: relative;
            
            .title {
                
            } 

            #email {
               
            }

            #password {
                
            }

            #link-forget-email {
                
            }

            #link-forget-password {
                
            }

            #link-forget-email, 
            #link-forget-password {
               
            }

            #link-forget-email:hover {
              
            }

            #link-forget-password:hover {
               
            }

            #link-forget-email:focus {
                
            }

            #link-forget-password:focus {
                
            }

            #txt-or {
                
            }

            .google-enter {
                
                
                .btn-google { 
            
                    .txt-google {
                        
                    }
                }
            }

            .btn-google:hover{
                
            } 

            .create_account {
                
                #txt-create {
                    
                }
                span {
                    
                }
            }
            .enter {
                
                .submit {
                    
                }
                .submit:hover {
                    
                }
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
                    top: 8%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 1.5em;
                } 

                #email {
                    position: absolute;
                    top: 23%;
                    left: 40%;
                    transform: translate(-50%, -50%);
                }

                #password {
                    position: absolute;
                    top: 35%;
                    left: 30.3%;
                    transform: translate(-50%, -50%);
                }

                .google-enter {
                    position: absolute;
                    top: 67%;
                    left: 49%;
                }

                #link-forget-email {
                    position: absolute;
                    top: 17%;
                    left: 47%;
                    transform: translate(-50%, -50%);
                    /* padding-top: 100px; */
                }

                #link-forget-password {
                    position: absolute;
                    top: 35.6%;
                    left: 47%;
                    transform: translate(-50%, -50%);
                    /* padding-top: 100px; */
                }

                #txt-or {
                    position: absolute;
                    top: 53%;
                    left: 44%;
                    transform: translate(-50%, -50%);
                    font-size: .7em;
                }

                .create_account {
                    position: absolute;
                    top: 68%;
                    left: 47%;
                    transform: translate(-50%, -50%);
                }

                .enter {
                    position: absolute;
                    top: 90%;
                    left: 48%;
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
                            <div id='email'>
                                <Input type="email" name="e-mail" id="e-mail" placeholder='E-mail'/>
                            </div>
                            <a href="#" id='link-forget-email'>
                                <p>Esqueci o email</p>
                            </a>
                            <div id='password'>
                                <Input type="password" name="password" id="password" placeholder='Senha'/>
                            </div>
                            <a href="#" id='link-forget-password'>
                                <p>Esqueci a senha</p>
                            </a>
                            <p id='txt-or'>OU</p>
                            <div className='google-enter'>
                                <button className='btn-google'>
                                    <FaGoogle/>
                                    <p className='txt-google'>Entrar com Google</p>
                                </button>
                            </div>
                            <div className='create_account'>
                                <h4 id='txt-create'>Não tem uma conta? <span className='orange'>Crie uma</span></h4>
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