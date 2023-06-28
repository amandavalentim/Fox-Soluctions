'use client'
import styled from '@emotion/styled';

const FormComponent = styled.div`

    .box-container {
        background-color: #FFFF;
        width: 628px;
        height: 573px;
        display: none;
        align-items: center;
        justify-content: center;
<<<<<<< HEAD
        
    }
    /* form {
=======
        text-align: center;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        h1 {
            padding: 5px;
            color: #FFFF;
        }
    }
    
     form {
>>>>>>> c2c514cffb1a960c2b3a6beabd9e0525a6bcc4a4
        width: 100px;
        height: 30px;
    }

     input {
        align-items: center;
        justify-content: center;
<<<<<<< HEAD
    }
    #btn-enter {
        display: flex;
    } */
=======
    } 

    #btn-enter {
        width: 80px;
        height: 30px;
    }  
>>>>>>> c2c514cffb1a960c2b3a6beabd9e0525a6bcc4a4
`;

const Form = function(){

    return(
        <FormComponent>

            <div className='box-container'>

<<<<<<< HEAD
=======
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
>>>>>>> c2c514cffb1a960c2b3a6beabd9e0525a6bcc4a4

            </div>

        </FormComponent>
    )

}

export default Form 