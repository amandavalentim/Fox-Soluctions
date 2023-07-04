'use client'
import styled from '@emotion/styled';

const FormComponent = styled.section`

    .hide-on-mobile {
        display: flex;
    }
    .show-on-mobile {
        display: none;
    }
    .show-on-tablet {
        display: none;
    }
    .box-container {
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        width: 528px;
        height: 490px;
        display: flex;
        justify-content: center;
        margin-left: 550px;
        margin-top: -200px;
        form {
            #title {
                color: #FFFF;
                text-align: center;
                margin: 30px;
                font-family: 'Poppins-Bold';
            }
            .login {
                margin: 50px;
                display: flex;
                input {
                    border: none;
                    width: 100px;
                    border-bottom: 1px solid #FFFF;
                    background-color: rgba(7, 179, 253, 0);
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 20px;
                }

                input::placeholder{
                    font-size: 15px;
                    font-family: 'Poppins-Medium';
                    color: #FFFF;
                }
            }
           div {
               width: 100%;
                .submit {
                    position: absolute;
                    left: 45px;
                    width: 50px;
                    height: 40px;
                    margin-top: 30px;
                    border-radius: 20px;
                    border: none;
                    background-color: #93B413;
                    justify-content: center;
                    align-items: center;
                    color: #FFFF;
                    font-family: 'Poppins-Medium';
                    font-size: 20px; 
                    cursor: pointer;
                }
            }

            .forget {
                color: #F47216;
                font-size: 24px;
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-align: center;
                margin-bottom: 10px;
                cursor: pointer;
            } 
            .create_account {
                color: #FFF;
                font-size: 24px;
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-align: center;
                cursor: pointer;
                span {
                    color: #F47216;
                }
            } 
        }
    }
    //Amanda
    @media (min-width: 1024px) and (max-width: 1180px) {
        .hide-on-mobile {
            display: flex;
        }
        .show-on-mobile {
            display: none;
        }
        .show-on-tablet {
            display: none;
        }
    .box-container {
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        width: 528px;
        height: 490px;
        display: flex;
        justify-content: center;
        margin-left: 240px;
        margin-top: -200px;  
        form {
            #title {
                color: #FFFF;
                text-align: center;
                margin: 30px;
                font-family: 'Poppins-Bold';
            }
            .login {
                margin: 50px;
                display: flex;
                input {
                    border: none;
                    width: 300px;
                    border-bottom: 1px solid #FFFF;
                    background-color: rgba(7, 179, 253, 0);
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 20px;
                }

                input::placeholder{
                    font-size: 15px;
                    font-family: 'Poppins-Medium';
                    color: #FFFF;
                }
            }
           .enter {
               width: 400px;
                .submit {
                    position: absolute;
                    left: 405px;
                    /* width: 100%; */
                    width: 200px;
                    height: 40px;
                    margin-top: 30px;
                    border-radius: 20px;
                    border: none;
                    background-color: #93B413;
                    /* justify-content: center; */
                    align-items: center;
                    color: #FFFF;
                    font-family: 'Poppins-Medium';
                    font-size: 20px; 
                    cursor: pointer;
                }
            }

            .forget {
                color: #F47216;
                font-size: 24px;
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-align: center;
                margin-bottom: 10px;
                cursor: pointer;
            } 
            .create_account {
                color: #FFF;
                font-size: 24px;
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-align: center;
                cursor: pointer;
                span {
                    color: #F47216;
                }
            } 
        }
    } 
}
    //Gabriel
    @media (min-width: 1335px) and (max-width: 1355px) {
        .show-on-mobile {
            display: none;
        }
        .hide-on-mobile {
            display: flex;
        }
        .show-on-tablet {
            display: none;
        }
        .box-container {
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
            width: 528px;
            height: 100vh;
            display: flex;
            justify-content: center;
            margin-left: 410px;
            margin-top: -190px;
            form {
                #title {
                    color: #FFFF;
                    text-align: center;
                    margin: 30px;
                    font-family: 'Poppins-Bold';
                }
                .login {
                    margin: 50px;
                    display: flex;
                input {
                    border: none;
                    width: 300px;
                    border-bottom: 1px solid #FFFF;
                    background-color: rgba(7, 179, 253, 0);
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 20px;
                }

                input::placeholder{
                    font-size: 15px;
                    font-family: 'Poppins-Medium';
                    color: #FFFF;
                }
            }
            .enter {
               width: 400px;
                .submit {
                    position: absolute;
                    left: 405px;
                    /* width: 100%; */
                    width: 200px;
                    height: 40px;
                    margin-top: 30px;
                    border-radius: 20px;
                    border: none;
                    background-color: #93B413;
                    /* justify-content: center; */
                    align-items: center;
                    color: #FFFF;
                    font-family: 'Poppins-Medium';
                    font-size: 20px; 
                    cursor: pointer;
                }
            }

            .forget {
                color: #F47216;
                font-size: 24px;
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-align: center;
                margin-bottom: 10px;
                cursor: pointer;
            } 
            .create_account {
                color: #FFF;
                font-size: 24px;
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-align: center;
                cursor: pointer;
                span {
                    color: #F47216;
                }
            } 
        }
    }
}
    //Mobile
    @media (min-width: 320px) and (max-width: 768px){
        .show-on-mobile {
            display: flex;
            justify-content: space-between;
        }
        .hide-on-mobile{
            display: none;
        }
        .show-on-tablet {
            display: none;
        }
        .box-container-mobile {
            border-radius: 19px;
            width: 528px;
            height: 100vh;
            display: flex;
            justify-content: center;
            margin-left: -12px;
            margin-top: -350px;
            form {
                #title-mobile {
                    color: #FFFF;
                    text-align: center;
                    margin: 30px;
                    font-family: 'Poppins-Bold';
                }
                .login-mobile {
                        margin: 50px;
                        display: flex;
                    input {
                        border: none;
                        width: 250px;
                        border-bottom: 1px solid #FFFF;
                        background-color: rgba(7, 179, 253, 0);
                        justify-content: center;
                        align-items: center;
                        padding-bottom: 20px;
                    }

                    input::placeholder{
                        font-size: 10px;
                        font-family: 'Poppins-Medium';
                        color: #FFFF;
                    }
                }
            .enter-mobile {
                    width: 100%;
                    .submit-mobile {
                        position: absolute;
                        left: 45px;
                        width: 70%;
                        height: 40px;
                        margin-top: 30px;
                        border-radius: 20px;
                        border: none;
                        background-color: #93B413;
                        justify-content: center;
                        align-items: center;
                        color: #FFFF;
                        font-family: 'Poppins-Medium';
                        font-size: 15px; 
                        cursor: pointer;
                    }
                }

                .forget-mobile {
                    color: #F47216;
                    font-size: 15px;
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    text-align: center;
                    margin-bottom: 10px;
                    cursor: pointer;
                    
                } 
                .create_account-mobile {
                    color: #FFF;
                    font-size: 15px;
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    text-align: center;
                    cursor: pointer;
                    span {
                        color: #F47216;
                    }
                } 
            }
        }
    }

    //Tablet
    @media (min-width: 768px) and (max-width: 773px) {
        .hide-on-mobile{
            display: none;
        }
        .show-on-mobile{
            display: none;
        }
        .show-on-tablet{
            display:flex;
        }
        .box-container-tablet {
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
            width: 528px;
            height: 490px;
            box-shadow: 0px 0px 2px 0px;
            display: flex;
            justify-content: center;
            margin-left: 121px;
            margin-top: -190px;
            form {
                #title-tablet {
                    color: #FFFF;
                    text-align: center;
                    /* font-size: ; */
                    margin: 30px;
                    font-family: 'Poppins-Bold';
                }
                .login-tablet {
                    margin: 50px;
                    display: flex;
                    input {
                        border: none;
                        width: 300px;
                        border-bottom: 1px solid #FFFF;
                        background-color: rgba(7, 179, 253, 0);
                        justify-content: center;
                        align-items: center;
                        padding-bottom: 20px;
                    }

                    input::placeholder{
                        font-size: 15px;
                        font-family: 'Poppins-Medium';
                        color: #FFFF;
                    }
                }
                .enter-tablet {
                    width: 400px;
                .submit-tablet {
                    position: absolute;
                    left: 405px;
                    /* width: 100%; */
                    width: 200px;
                    height: 40px;
                    margin-top: 30px;
                    border-radius: 20px;
                    border: none;
                    background-color: #93B413;
                    /* justify-content: center; */
                    align-items: center;
                    color: #FFFF;
                    font-family: 'Poppins-Medium';
                    font-size: 20px; 
                    cursor: pointer;
                }
            }

                .forget-tablet {
                    color: #F47216;
                    font-size: 24px;
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    text-align: center;
                    margin-bottom: 10px;
                    cursor: pointer;
                } 
                .create_account-tablet {
                    color: #FFF;
                    font-size: 24px;
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    text-align: center;
                    cursor: pointer;
                    span {
                        color: #F47216;
                    }
                } 
            }
        }
    }
`;

const Form = function(){

    return(
        <FormComponent>

            <nav className='hide-on-mobile'>
                <div className='box-container'>
                    <form>
                        <h1 id='title'>Login</h1>
                        <div className='login'>
                            <input type="email" name="e-mail" id="e-mail" placeholder='E-mail'/>
                        </div>
                        <div className='login'>
                            <input type="password" name="password" id="password" placeholder='Senha'/>
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
            <nav className='show-on-mobile'>
                <div className='box-container-mobile'>
                    <form>
                        <h1 id='title-mobile'></h1>
                        <div className='login-mobile'>
                            <input type="email" name="e-mail" id="e-mail" placeholder='E-mail'/>
                        </div>
                        <div className='login-mobile'>
                            <input type="password" name="password" id="password" placeholder='Senha'/>
                        </div>
                        <div className='forget-mobile'>
                            <h4><span className='orange'>Esqueceu a senha?</span></h4>
                        </div>
                        <div className='create_account-mobile'>
                            <h4>Não tem uma conta? <span className='orange'>Crie uma</span></h4>
                        </div>
                        <div className='enter-mobile'>
                            <button className='submit-mobile'>
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
            <nav className='show-on-tablet'>
                <div className='box-container-tablet'>
                    <form>
                        <h1 id='title-tablet'>Login</h1>
                        <div className='login-tablet'>
                            <input type="email" name="e-mail" id="e-mail" placeholder='E-mail'/>
                        </div>
                        <div className='login-tablet'>
                            <input type="password" name="password" id="password" placeholder='Senha'/>
                        </div>
                        <div className='forget-tablet'>
                            <h4><span className='orange'>Esqueceu a senha?</span></h4>
                        </div>
                        <div className='create_account-tablet'>
                            <h4>Não tem uma conta? <span className='orange'>Crie uma</span></h4>
                        </div>
                        <div className='enter-tablet'>
                            <button className='submit-tablet'>
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