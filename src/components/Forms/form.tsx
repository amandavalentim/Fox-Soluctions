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
        
    }
    /* form {
        width: 100px;
        height: 30px;
    }

     input {
        align-items: center;
        justify-content: center;
    }
    #btn-enter {
        display: flex;
    } */
`;

const Form = function(){

    return(
        <FormComponent>

            <div className='box-container'>


            </div>

        </FormComponent>
    )

}

export default Form 