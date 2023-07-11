'use client'
import styled from '@emotion/styled';
import Input from './Input/Input'

const FormComponent = styled.section`

    * {
        box-sizing: border-box;    
    }
   
    form {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'poppins-bold';
            font-size: 30px;
            color: #ffff;
            position: absolute;
            top: -30%;
            left: 33%;
        }         

        .forget {
            padding: 0px 0px 0px 10px;
            text-align: center;
            font-size: 13px;
            color: #F47216;
        }
        .create_account {
            padding-top: 15px;
            text-align: center;
            font-size: 13px;
            color: #FFFF;
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
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
            width: 100%;
            form {
                width: 100%;
                height: 66vh;
                .login {
                    text-align: center;
                }
                .title {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: 'poppins-bold';
                    font-size: 30px;
                    color: #ffff;
                    position: absolute;
                    top: -10%;
                    left: 40%;
                }         
            }
        }
    }

    @media (min-width: 992px) {
        .hide-on-desktop {
            display: flex;
        }
    }

    @media (min-width:1200px) {
        .hide-on-desktop {
            display: flex;
        }
    }

    @media (min-width: 1600px) {
        .hide-on-desktop {
            display: flex;
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