'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Input from '../Forms/Input/Input';

const FormComponent3 = styled.section `

    height: 80vh;

    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);

    .mobile {
        display: block;
        justify-content: space-between;
    }

    h1 {
        text-align: center;
        font-size: 1.2em;
        font-family: 'Poppins-medium';
        margin-left: 1%;
        padding-top: 10%;
    }

    #code {
        padding-top: 20%;
        margin-left: 15%;
    }

    p{
        margin-left: 68%;
        margin-top: -3%;
    }

    .resend {
        margin-top: 5%;
        font-size: 0.7em;
        text-align: center;
        margin-left: -55%;
        color: #93B413;
    }

    .resend:active {
        font-size: 0.7em;
        text-align: center;
        margin-left: -55%;
        color: #86a40f;
    }

    .rename {
        font-size: 0.7em;
        text-align: center;
        margin-left: 45%;
        margin-top: -10.2%;
        color: #93B413;
    }

    .rename:active {
        font-size: 0.7em;
        text-align: center;
        margin-left: 45%;
        margin-top: -10.2%;
        color: #86a40f;
    }

    .enviar {
        margin-top: 23%;
        margin-left: 24%;
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 20px;
    }

    .enviar:active {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 20px;
    }
`;

const RecoveryCode = function() {
    return (
        <FormComponent3>
            <nav className='mobile'>
                <h1>Digite o código que<br/> enviamos para você:</h1>
                <div className='input'>
                <Input type="number" name="code" id="code"/>
                <p>00:10</p>
                </div>
                <div className='resend'>
                    <a href="" id='a1'>Não recebeu?<br/> Reenviar</a>
                </div>
                <div className='rename'>
                    <a href="" id='a2'>Não é o seu email?<br/> Reescreva</a>
                </div>
                <Link href={'/page7'}>
                        <button className='enviar' type='button'>
                            Enviar
                        </button>
                    </Link>
            </nav>
        </FormComponent3>
    )
}

export default RecoveryCode;