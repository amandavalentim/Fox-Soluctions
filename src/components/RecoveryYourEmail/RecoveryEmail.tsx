//Developed for Amanda Valentim

'use client';
import styled from '@emotion/styled';
import Input from '../Login/Input/Input';

const RecoveryEmailComponent = styled.section`
    
    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);
    .container-center{
        h3{
            padding: 40px;
            text-align: center;
            color: #ffffff;
            font-family:'Poppins-Bold';
        }
        .input-email{
            text-align: center;
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

    //tablet
    @media(min-width: 450px){
        .container-center{
           padding: 30px;
            form{
                margin-left: 30%;
                width: 300px;
                border-radius: 19px;
                background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
                .input-email{
                    #PhoneOrCPF{
                        width: 200px;
                    }
                }
            }
        }
        background-image: url("/images/tablet-recuperar-senha.svg");
    }

    //Desktop

    //Large Screen
`

const RecoveryEmail = function (){
    return(
        <RecoveryEmailComponent>
            <div className='container-center'>
                <form>
                    <h3>Recupere Seu Email:</h3>
                    <div className='input-email'>
                        <Input type="string" name="PhoneOrCPF" id="PhoneOrCPF" placeholder='Digite Seu Telefone ou CPF'/>
                    </div>
                    <div className='btn-confirm'>
                        <button className='confirm' type='button'>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </RecoveryEmailComponent>
    )
}

export default RecoveryEmail;