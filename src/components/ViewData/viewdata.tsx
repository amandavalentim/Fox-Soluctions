//developed by Amanda Valentim

'use client';
import styled from'@emotion/styled'
import { AiOutlineEye } from "react-icons/ai";
import Input from '../Login/Input/Input';


const Viewdatacomponent = styled.section`
    background-color: #0A53B5;
    .form-mobile{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1{
            margin: 30px;
            color: #ffff;
            font-family: 'Poppins-Bold';
        }
        form{
            .input-mobile{
                display: flex;
                flex-direction: column;
                min-width: 70vw;
                margin-bottom: 20px;
                label{
                    color: #ffff;
                    margin-bottom: 20px;
                    font-family: 'Poppins-Medium';
                }
                input{
                    border: none;
                    border-bottom: 2px solid #ffff;
                    background-color: rgba(7, 179, 253, 0);
                    color: #ffff;
                    font-family: 'Poppins-Light';
                    outline: none;
                    &::placeholder{
                        font-size: 14px;
                        color: #ffff;
                    }
                    &:focus{
                        border-bottom: 2px solid #93B413;
                    }
                }
                
            }
        }
        
    }

    .documents{
        margin: 0 auto;
        width: 70%;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        h3{
            text-align: center;
            padding: 20px;
            color: #FFF;
        }
        .container-blue{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background: #07AFFA;
            height: 50px;
        }
        p{
            color: #FFF;
            margin: 15px;
        }
        .view-icon{
            margin: 15px;
            color: #FFF;
        }
        .container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 50px;
        }
    }
    
    .form-desktop{
        display: none;
    }

    @media (min-width: 992px){
        .form-mobile{
            display: none;
        }
        .form-desktop{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h1{
                margin: 30px;
                color: #ffff;
                font-family: 'Poppins-Bold';
            }
            .input-desktop{
                display: flex;
                flex-direction: column;
                min-width: 50vw;
                margin-bottom: 50px;
                input{
                    border: none;
                    border-bottom: 2px solid #ffff;
                    background-color: rgba(7, 179, 253, 0);
                    color: #ffff;
                    font-family: 'Poppins-medium';
                    outline: none;
                    &::placeholder{
                        font-size: 14px;
                        color: #ffff;
                    }
                    &:focus{
                        border-bottom: 2px solid #93B413;
                    }
                }
            }
        }
    }
    
`;

const viewdata = function (){
    return(
        <Viewdatacomponent>
            <div className='form-mobile'>
                <h1>Dados Pessoais</h1>
                <form action="">
                    <div className='input-mobile'>
                        <label htmlFor="">Nome Completo:</label>
                        <input  type="string" name="name" id="name"></input>
                    </div>
                    <div className='input-mobile'>
                        <label htmlFor="">Data de Nascimento:</label>
                        <input  type="date" name="birthday" id="birthday"></input>
                    </div>
                    <div className='input-mobile'>
                        <label htmlFor="">CPF:</label>
                        <input  type="number" name="cpf" id="cpf"></input>
                    </div>
                    <div className='input-mobile'>
                        <label htmlFor="">Email:</label>
                        <input  type="email" name="email" id="email"></input>
                    </div>
                    <div className='input-mobile'>
                        <label htmlFor="">País:</label>
                        <input  type="string" name="country" id="country"></input>
                    </div>
                    <div className='input-mobile'>
                        <label htmlFor="">Criado em:</label>
                        <input  type="date" name="created-in" id="created-in"></input>
                    </div>
                    <div className='input-mobile'>
                        <label htmlFor="">Atualizado em:</label>
                        <input  type="date" name="updated-in" id="updated-in"></input>
                    </div>
                </form>
            </div>
            
            
            <div className='form-desktop'>
                <h1>Dados Pessoais</h1>
                <form action="">
                    <div className='input-desktop'>
                        <input  type="string" name="name" id="name" placeholder='Nome Completo:'></input>
                    </div>
                    <div className='input-desktop'>
                        <input  type="" name="birthday" id="birthday" placeholder='Data de nascimento:'></input>
                    </div>
                    <div className='input-desktop'>
                        <input  type="number" name="cpf" id="cpf" placeholder='CPF:'></input>
                    </div>
                    <div className='input-desktop'>
                        <input  type="email" name="email" id="email" placeholder='Email:'></input>
                    </div>
                    <div className='input-desktop'>
                        <input  type="string" name="country" id="country" placeholder='País:'></input>
                    </div>
                </form>
            </div>

            <div className="documents">
                <h3>Documentos Enviados</h3>
                <div className='container-blue'>
                    <p className='document-type'>CPF</p>
                    <AiOutlineEye className='view-icon'/>
                </div>
                <div className='container'>
                    <p className='document-type'>CPF</p>
                    <AiOutlineEye className='view-icon'/>
                </div>
            </div>

        </Viewdatacomponent>
    )
}

export default viewdata;