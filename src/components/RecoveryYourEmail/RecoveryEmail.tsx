//Developed for Amanda Valentim

'use client';
import styled from '@emotion/styled';
import Input from '../Login/Input/Input';

const RecoveryEmailComponent = styled.section`
    height: 70vh;
    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);
    .mobile{
        h3{
            padding: 40px;
            text-align: center;
            color: #ffffff;
            font-family:'Poppins-Bold';
        }
        #PhoneOrCPF{
            margin: 50px;
            padding: 4px;
        }
        .btn-confirm{
            text-align: center;
            .confirm{
                width: 170px;
                height: 50px;
                border-radius: 20px;
                border: none;
                background: #93B413;
                font-size: 1.6em;
                color: #ffffff;
                margin: 40px;
            }
        }
    }
`

const RecoveryEmail = function (){
    return(
        <RecoveryEmailComponent>
            <nav className='mobile'>
                <h3>Recupere Seu Email:</h3>
                <Input type="string" name="PhoneOrCPF" id="PhoneOrCPF" placeholder='Digite Seu Telefone ou CPF'/>
                <div className='btn-confirm'>
                    <button className='confirm' type='button'>
                        Enviar
                    </button>
                </div>
            </nav>

            <nav className='desktop'>
            </nav>
        </RecoveryEmailComponent>
    )
}

export default RecoveryEmail;