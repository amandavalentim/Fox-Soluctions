'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Forms/Input/Input';

const Formcomponent4 = styled.section `

    height: 80vh;

    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);

    h1 {
        color: white;
        padding-top: 10%;
        font-size: 1.3em;
        margin-left: 9%;
    }

    #password {
        margin-top: 23%;
        margin-left: 14%;
    }

    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    #confirm-password {
        margin-top: 13%;
        margin-left: 14%;
    }

    #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    .confirmar {
        margin-top: 10%;
        margin-left: 24%;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
        color: white;
    }

    .confirmar:active {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 20px;
    }

`;

const NewPassword = function() {
    return (
        <Formcomponent4>
            <nav className='mobile'>
                <h1>Crie a sua nova senha:</h1>
                <Input type="number" name="password" id="password" placeholder='Nova Senha'/>
                <Input type="number" name="confirm-password" id="confirm-password" placeholder='Confirmar nova Senha'/>
                <Link href={'/page2'}>
                        <button className='confirmar' type='button'>
                            Confirmar
                        </button>
                </Link>
            </nav>
        </Formcomponent4>
    )
}

export default NewPassword;