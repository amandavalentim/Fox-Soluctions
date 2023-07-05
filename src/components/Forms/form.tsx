'use client'
import styled from '@emotion/styled';

const FormComponent = styled.section`

.box-container {
       
        form {
            .title {
                
            }
            .login {
               
                input {
                    
                }

                input::placeholder{
                    
                }
                input:focus{
                    

                }
            }
           div {
               
                .submit {
                    
                }
            }

            .forget {
                
            } 
            .create_account {
                
                span {
                    
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