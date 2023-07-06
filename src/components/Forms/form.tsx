'use client'
import styled from '@emotion/styled';

const FormComponent = styled.section`

    .box-container {
        position: absolute;
        top: 300px;
        left: 50px;
    }

    @media (min-width: 768px) {
        
    }

    @media (min-width: 992px) {
        
    }

    @media (min-width:1200px) {

    }

    @media (min-width: 1600px) {
        
    }
`;

const Form = function(){

    return(
        <FormComponent>
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
        </FormComponent>
    )

}

export default Form 