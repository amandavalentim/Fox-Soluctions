'use client'
import styled from '@emotion/styled';
import Input from './Input/Input'

const FormComponent = styled.section`

    * {
        box-sizing: border-box;    
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'poppins-bold';
        font-size: 30px;
        font-style: normal;
    }    

    .box-container {
        position: absolute;
        top: 240px;
        left: 15px;
        color: #000;
        form {
            .forget {
                padding-top: 0px 0px 0px 10px;
                text-align: center;
                font-size: 13px;
                color: #F47216;
            }
            .create_account {
                padding-top: 15px;
                text-align: center;
                font-size: 13px;
                span {
                    color: #F47216;
                }
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
                    font-size: 20px;
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
            top: 213px;
            left: 157px;
            width: 428px;
            height: 450px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
            form {
                .forget {
                    color: #FFFF;
                }
                .create_account {
                    color: #FFFF;
                }
            }
        }
    }

    @media (min-width: 992px) {
        .hide-on-desktop {
            display: none;
        }
    }

    @media (min-width:1200px) {
        .hide-on-desktop {
            display: none;
        }
    }

    @media (min-width: 1600px) {
        .hide-on-desktop {
            display: none;
        }
    }
`;

const Form = function(){

    return(
        <FormComponent>
                <nav className='hide-on-desktop'>
                    <div className='box-container'>
                    <h1 className='title'>Login</h1>
                        <form>
                            <div className='login'>
                                <Input type="email" name="e-mail" id="e-mail" placeholder='E-mail'/>
                            </div>
                            <div className='login'>
                                <Input type="password" name="password" id="password" placeholder='Senha'/>
                            </div>
                            <div className='forget'>
                                <h4><span className='orange'>Esqueceu a senha?</span></h4>
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