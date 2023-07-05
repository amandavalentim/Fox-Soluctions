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
        position: absolute;
        left: 400px;
        top: 175px;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        width: 528px;
        height: 450px;
        display: flex;
        justify-content: center;
        form {
            #title {
                color: #FFFF;
                text-align: center;
                margin: 20px;
                font-size: 30px;
                font-family: 'Poppins-Bold';
            }
            .login {
                margin: 45px;
                display: flex;
                input {
                    border: none;
                    width: 305px;
                    border-bottom: 1px solid #FFFF;
                    background-color: rgba(7, 179, 253, 0);
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 20px;
                    outline: none;
                    color: #FFF;
                    font-family: 'Poppins-Medium';
                }

                input::placeholder{
                    font-size: 15px;
                    font-family: 'Poppins-Medium';
                    color: #FFFF;
                }
                input:focus{
                    border-bottom: 3px solid #93B413;

                }
            }
           div {
               width: 100%;
                .submit {
                    position: absolute;
                    left: 185px;
                    width: 150px;
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
                font-size: 20px;
                font-family: 'Roboto-medium';
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-align: center;
                margin-bottom: 10px;
                cursor: pointer;
            } 
            .create_account {
                color: #FFF;
                font-size: 20px;
                font-family: 'Roboto-medium';
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
        position: absolute;
        left: 263px;
        top: 170px;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        width: 490px;
        height: 440px;
        display: flex;
        justify-content: center;
          
        form {
            #title {
                color: #FFFF;
                text-align: center;
                margin: 20px;
                font-family: 'Poppins-Bold';
                font-size: 30px;
            }
            .login {
                margin: 40px;
                display: flex;
                input {
                    border: none;
                    width: 325px;
                    border-bottom: 2px solid #FFFF;
                    background-color: rgba(7, 179, 253, 0);
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 20px;
                    outline: none;
                    color: #FFF;
                    font-family: 'Poppins-Medium';
                }

                input::placeholder{
                    font-size: 15px;
                    font-family: 'Poppins-Medium';
                    color: #FFFF;
                }
                input:focus{
                    border-bottom: 3px solid #93B413;

                }
            }
           .enter {
               width: 400px;
                .submit {
                    position: absolute;
                    left: 140px;
                    top: 320px;
                    /* width: 100%; */
                    width: 200px;
                    height: 40px;
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
                font-size: 20px;
                font-family: 'Roboto-medium';
                font-weight: 500;
                line-height: normal;
                text-align: center;
                margin-bottom: 10px;
                cursor: pointer;
            } 
            .create_account {
                color: #FFF;
                font-size: 20px;
                font-family: 'Roboto-medium';
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
    @media (min-width: 1600px) and (max-width: 1700px) {
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
            position: absolute;
            left: 548px;
            top: 180px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
            width: 528px;
            height: 480px;
            display: flex;
            justify-content: center;
            form {
                #title {
                    color: #FFFF;
                    text-align: center;
                    margin: 30px;
                    font-family: 'Poppins-Bold';
                }
                .login {
                    margin: 45px;
                    display: flex;
                input {
                    border: none;
                    width: 310px;
                    border-bottom: 1px solid #FFFF;
                    background-color: rgba(7, 179, 253, 0);
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 20px;
                    outline: none;
                    color: #FFF;
                    font-family: 'Poppins-Medium';
                }

                input::placeholder{
                    font-size: 15px;
                    font-family: 'Poppins-Medium';
                    color: #FFFF;
                }
                input:focus{
                    border-bottom: 3px solid #93B413;

                }

            }
            .enter {
               width: 400px;
                .submit {
                    position: absolute;
                    left: 160px;
                    top: 370px;
                    /* width: 100%; */
                    width: 200px;
                    height: 40px;
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
                font-size: 20px;
                font-family: 'Roboto-medium';
                font-weight: 500;
                line-height: normal;
                text-align: center;
                margin-bottom: 10px;
                cursor: pointer;
            } 
            .create_account {
                color: #FFF;
                font-size: 20px;
                font-family: 'Roboto-medium';
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
    @media (min-width: 320px) and (max-width: 375px){
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
                        outline: none;
                        color: #FFF;
                        font-family: 'Poppins-Medium';
                    }

                    input::placeholder{
                        font-size: 15px;
                        font-family: 'Poppins-Medium';
                        color: #FFFF;
                    }
                    input:focus{
                    border-bottom: 3px solid #93B413;
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
                        font-size: 18px; 
                        cursor: pointer;
                    }
                }

                .forget-mobile {
                    color: #F47216;
                    font-size: 16px;
                    font-family: 'Roboto-Medium';
                    font-weight: 500;
                    text-align: center;
                    margin-bottom: 10px;
                    cursor: pointer;
                    
                } 
                .create_account-mobile {
                    color: #FFF;
                    font-size: 16px;
                    font-family: 'Roboto-Medium';
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
    @media (min-width: 768px) and (max-width: 1022px) {
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
            position:absolute;
            left: 115px;
            top: 170px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
            width: 528px;
            height: 410px;
            box-shadow: 0px 0px 2px 0px;
            display: flex;
            justify-content: center;
            form {
                #title-tablet {
                    color: #FFFF;
                    text-align: center;
                    margin: 20px;
                    font-family: 'Poppins-Bold';
                }
                .login-tablet {
                    margin: 40px;
                    display: flex;
                    input {
                        border: none;
                        width: 325px;
                        border-bottom: 1px solid #FFFF;
                        background-color: rgba(7, 179, 253, 0);
                        justify-content: center;
                        align-items: center;
                        padding-bottom: 20px;
                        outline: none;
                        color: #FFF;
                        font-family: 'Poppins-Medium';
                    }

                    input::placeholder{
                        font-size: 15px;
                        font-family: 'Poppins-Medium';
                        color: #FFFF;
                    }
                    input:focus{
                    border-bottom: 3px solid #93B413;
                    }
                    
                }
                .enter-tablet {
                    width: 400px;
                .submit-tablet {
                    position: absolute;
                    left: 160px;
                    top: 320px;
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
                    font-size: 20px;
                    font-family: 'Roboto-medium';
                    font-style: normal;
                    font-weight: 500;
                    text-align: center;
                    margin-bottom: 10px;
                    cursor: pointer;
                } 
                .create_account-tablet {
                    color: #FFF;
                    font-size: 20px;
                    font-family: 'Roboto-medium';
                    font-style: normal;
                    font-weight: 500;
                    text-align: center;
                    cursor: pointer;
                    span {
                        color: #F47216;
                    }
                } 
            }
        }
    }

    //Mobile-375px
    @media (min-width:375px) and (max-width:425px) {
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
                        outline: none;
                        color: #FFF;
                        font-family: 'Poppins-Medium';
                    }

                    input::placeholder{
                        font-size: 10px;
                        font-family: 'Poppins-Medium';
                        color: #FFFF;
                    }
                    input:focus{
                    border-bottom: 3px solid #93B413;
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
                    font-size: 20px;
                    font-family: 'Roboto-medium';
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    text-align: center;
                    margin-bottom: 10px;
                    cursor: pointer;
                    
                } 
                .create_account-mobile {
                    color: #FFF;
                    font-size: 20px;
                    font-family: 'Roboto-medium';
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

    //Mobile-426px
    @media (min-width:426px) and (max-width:767px) {
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
                        outline: none;
                        color: #FFF;
                        font-family: 'Poppins-Medium';
                    }

                    input::placeholder{
                        font-size: 10px;
                        font-family: 'Poppins-Medium';
                        color: #FFFF;
                    }
                    input:focus{
                    border-bottom: 3px solid #93B413;
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
                    font-size: 20px;
                    font-family: 'Roboto-medium';
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    text-align: center;
                    margin-bottom: 10px;
                    cursor: pointer;
                    
                } 
                .create_account-mobile {
                    color: #FFF;
                    font-size: 20px;
                    font-family: 'Roboto-medium';
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
                        <h1 id='title-mobile'>
                            Login
                        </h1>
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