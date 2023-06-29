'use client'
import styled from '@emotion/styled';

const FormComponent = styled.div`

    .box-container {
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        width: 528px;
        height: 490px;
        display: flex;
        justify-content: center;
        margin-left: 600px;
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
           div {
               width: 100%;
                .submit {
                    width: 100%;
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
`;

const Form = function(){

    return(
        <FormComponent>

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

                    <div>
                        <button className='submit'>
                            Entrar
                        </button>
                    </div>

                </form>

            </div>

        </FormComponent>
    )

}

export default Form 