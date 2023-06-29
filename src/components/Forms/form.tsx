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
        margin-left: 350px;
        margin-top: -200px;
        form {
            #title {
                color: #FFFF;
                text-align: center;
                margin: 10px;
            }
            .login {
                margin: 20px;
                display: flex;
                input {
                    border: none;
                    border-bottom: 1px solid #FFFF;
                    background-color: rgba(7, 179, 253, 0);
                    justify-content: center;
                    align-items: center;
                        #e-mail {
                            border-bottom: 1px solid #93d413;
                        }
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

                        <input type="email" name="e-mail" id="e-mail"/>

                    </div>

                    <div className='login'>

                        <input type="password" name="password" id="password"/>

                    </div>

                    <div id='enter'>

                        <button className='button'>

                            <input type="submit" value="Entrar"/>

                        </button>

                    </div>

                </form>

            </div>

        </FormComponent>
    )

}

export default Form 