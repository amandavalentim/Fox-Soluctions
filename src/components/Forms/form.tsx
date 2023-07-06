'use client'
import styled from '@emotion/styled';

const FormComponent = styled.section`

.hide-on-mobile {
        display: flex;
    }
    .show-on-mobile {
        display: flex;
    }
    .show-on-tablet {
        display: flex;
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
            .title {
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
           .enter {
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
        .box-container {
            border-radius: 19px;
            width: 528px;
            height: 100vh;
            position: relative;
            left: -12px;
            top: -950px;
            form {
                #title {
                    margin: 20px 0px 100px 0px;
                }
                .login {
                        margin: 50px 0px 0px 0px;
                    input {
                        width: 250px;
                    }
                }
            .enter {
                    .submit {
                        position: absolute;
                        left: 45px;
                        top: 560px;
                        width: 70%;
                        margin-top: 80px;
                        font-size: 18px; 
                    }
                }

                .forget {
                    font-size: 16px; 
                } 
                .create_account {
                    font-size: 16px;
                    margin-top: 30px;
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
        .box-container {
            height: 100vh;
            margin-left: -12px;
            margin-top: -950px;
            form {
                #title {
                    margin: 20px 0px 100px 0px;
                    font-size: 30px;
                }
                .login {
                        margin: 50px;
                    input {
                        width: 250px;
                    }
                }
            .enter {
                    .submit {
                        position: absolute;
                        left: 45px;
                        top: 560px;
                        width: 70%;
                        margin-top: 80px;
                        font-size: 18px;
                    }
                }

                .forget { 
                    font-size: 16px;   
                } 
                .create_account {
                    font-size: 16px;
                    margin-top: 30px;
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
        width: 490px;
        height: 440px;
          
        form {
            .login {
                margin: 40px;
                input {
                    width: 325px;
                    border-bottom: 2px solid #FFFF;
                }
            }
           .enter {
               width: 400px;
                .submit {
                    position: absolute;
                    left: 140px;
                    top: 320px;
                    width: 200px;
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
        .box-container {
            position:absolute;
            left: 115px;
            top: 170px;
            height: 410px;
            box-shadow: 0px 0px 2px 0px;
            form {
                .login {
                    margin: 40px;
                    input {
                        width: 325px;
                    }
                }
                .enter {
                    width: 400px;
                .submit {
                    position: absolute;
                    left: 160px;
                    top: 320px;
                    width: 200px;
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
        .box-container {
            height: 100vh;
            margin-left: -12px;
            margin-top: -350px;
            form {
                #title {
                    margin: 30px;
                }
                .login {
                        margin: 50px;
                    input {
                        width: 250px;
                    }

                    input::placeholder{
                        font-size: 10px;
                    }
                }
                .enter {
                    .submit {
                        position: absolute;
                        left: 45px;
                        width: 70%;
                        font-size: 15px;
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
                        <h1 className='title'>Login</h1>
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
        </FormComponent>
    )

}

export default Form 