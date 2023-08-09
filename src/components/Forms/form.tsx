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
                top: -456px;
                left: 46px;
            }

            #password {
                position: absolute; 
                top: -181px;
                left: 22px;
            }

            #link-forget-email {
                position: absolute;
                top: -427px;
                left: 110px;
            }

            #link-forget-password {
                position: absolute;
                top: -337px;
                left: 107px;
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
                top: -285px;
                left: 45%;
                color: white;
                font-size: 14px;
                font-family: 'Poppins-Medium';
            }

            .google-enter {
                position: absolute;
                top: -220px;
                left: 59px;
                display: flex;
                width: 200px;
    
                .btn-google { 
                    padding: 12px;
                    border-radius: 39px;
                    background-color: #93B413;
                    outline: none;
                    color: white;
                    border: none;
                    font-family: 'Poppins-Medium';
                    font-size: 15px;
                    .google-icon {
                        width: 30px;
                        height: 20px;
                        margin-bottom: -5px;
                        margin-right: 5px;
                    }
                }
            }

            .btn-google:hover{
                color: #86a40f;
            } 

            .create_account {
                position: absolute;
                top: -140px;
                left: 54px;
                /* transform: translate(-50%, -50%); */

                #txt-create {
                    color: white;
                    font-size: 14px;
                }
                span {
                    color: #F47216;
                }
            }
            .enter {
                position: absolute;
                top: -74px;
                left: 81px;
                .submit {
                    padding: 7px;
                    border-radius: 20px;
                    background-color: #93B413;
                    outline: none;
                    color: white;
                    border: none;
                    font-family: 'Poppins-Medium';
                    font-size: 17px;
                    width: 150px;
                    height: 40px;
                }
                .submit:hover {
                    
                }
            }
        }
    }
    
    @media (min-width: 768px) {
        .hide-on-desktop {
            display: none;

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
}

    @media (min-width: 992px) {
        .hide-on-desktop {
            display: none;
        }
        .box-container {
            
        }
    }

    @media (min-width:1200px) {
        .hide-on-desktop {
            display: none;
        }
        .box-container {
            
        }
    }

    @media (min-width: 1600px) {
        .hide-on-desktop {
            display: none;
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
                                    <FaGoogle className='google-icon'/>
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