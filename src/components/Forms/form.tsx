'use client'
import styled from '@emotion/styled';

const FormComponent = styled.div`

    .box-container {
        background-color: #FFFF;
        width: 428px;
        height: 373px;
        display: flex;
        margin-left: 450px;
        margin-top: 300px;
        /* align-items: center; */
        justify-content: center;
        text-align: center;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        h1 {
            padding: 5px;
            color: #FFFF;
        }
    }
    
     form {
        width: 100px;
        height: 30px;
    }

     input {
        align-items: center;
        justify-content: center;
    } 

    #btn-enter {
        width: 80px;
        height: 30px;
    }  
`;

const Form = function(){

    return(
        <FormComponent>

            <div className='box-container'>

                <form>

                    <h1>Login</h1>
                    <input type="email" name="e-mail" id="e-mail"/>
                    <input type="password" name="password" id="password"/>

                    <div id='button'>

                        <button type='button'>

                            <input type="submit" value="Entrar" />  

                        </button>   

                    </div>

                </form>

            </div>

        </FormComponent>
    )

}

export default Form 