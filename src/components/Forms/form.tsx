//Código desenvolvido por Gustavo Otacílio
'use client'
import styled from '@emotion/styled';
import Input from './Input/Input'
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';

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
                position: absolute; 
                top: -538px;
                left: 115px;
                color: white;
                font-family: 'Poppins-Bold';
                font-size: 2em;
            } 

            #email {
                position: absolute; 
                top: -489px;
                left: 9%;
            }

            #password {
                position: absolute; 
                top: -201px;
                left: 9%;
            }

            #link-forget-email {
                position: absolute;
                top: -446px;
                left: 112px;
            }

            #link-forget-password {
                position: absolute;
                top: -359px;
                left: 112px;
            }

            #link-forget-email, 
            #link-forget-password {
                color: #CCC;
                font-size: 12px;
            }

            #link-forget-email:hover {
                color: #F47216;
            }

            #link-forget-password:hover {
                color: #F47216;
            }

            #link-forget-email:focus {
                color: #F47216;
            }

            #link-forget-password:focus {
                color: #F47216;
            }

            #txt-or {
                position: absolute;
                top: -289px;
                left: 45%;
                color: white;
                font-size: 14px;
                font-family: 'Poppins-Medium';
            }

            .google-enter {
                position: absolute;
                top: -237px;
                left: 82px;
                display: flex;
                width: 160px;
    
                .btn-google { 
                    padding: 10px;
                    border-radius: 39px;
                }
            }

            .btn-google:hover{
                
            } 

            .create_account {
                position: absolute;
                top: -132px;
                left: 12%;

                #txt-create {
                    color: white;
                }
                span {
                    color: #F47216;
                }
            }
            .enter {
                position: absolute;
                top: -71px;
                left: 133px;

                .submit {
                    /* position: absolute; */
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
            
            form {
                
                .title {
                   
                } 

                #email {
                    
                }

                #password {
                    
                }

                .google-enter {
                    
                }

                #link-forget-email {
                    
                }

                #link-forget-password {
                    
                }

                #txt-or {
                    
                }

                .create_account {
                    
                }

                .enter {
                    
                }
            }
        }
    }

    @media (min-width: 992px) {
        .hide-on-desktop {
            display: flex;
        }
        .box-container {
            
        }
    }

    @media (min-width:1200px) {
        .hide-on-desktop {
            display: flex;
        }
        .box-container {
            
        }
    }

    @media (min-width: 1600px) {
        .hide-on-desktop {
            display: flex;
        }
        .forget {
            
        }
        .create_account {
            
        }
        .enter {
            
            .submit {
                
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
                                Esqueci o email
                            </a>
                            <div id='password'>
                                <Input type="password" name="password" id="password" placeholder='Senha'/>
                            </div>
                            <a href="#" id='link-forget-password'>
                                Esqueci a senha
                            </a>
                            <p id='txt-or'>OU</p>
                            <div className='google-enter'>
                                <button className='btn-google'>
                                    <FaGoogle/>
                                    Entrar com Google
                                </button>
                            </div>
                            <div className='create_account'>
                                <Link href={'/page4'}>
                                <h4 id='txt-create'>Não tem uma conta? <span className='orange'>Crie uma</span></h4>
                                </Link>
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

export default Form;