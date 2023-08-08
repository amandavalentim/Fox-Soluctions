'use client'
import styled from '@emotion/styled';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import Input from '../Forms/Input/Input';

const FormComponent2 = styled.section `

    * {
        box-sizing: border-box; 
        margin: 0px;
        padding: 0px;
    }

    h1 {
        font-size: 1.5em;
        position: absolute;
        top: -280px;
        left: 73px;
    }

    #name {
        position: absolute;
        top: -170px;
        left: 50px;
    }

    .box-container {
        position: absolute;
            top: 80%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            margin-top: -36px;
    }


`;

const Form2 = function() {
    return (
        <FormComponent2>
            <nav className='mobile'>
                <div className='box-container'>
                    <form>
                        <h1>Criar Usuário</h1>
                        <div className='name'>
                            <Input type="string" name="name" id="name" placeholder='Nome Completo'/>
                        </div>
                    </form>
                </div>
            </nav>
        </FormComponent2>
    )
}

export default Form2;