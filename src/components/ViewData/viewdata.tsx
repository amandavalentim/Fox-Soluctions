//developed by Amanda Valentim

'use client';
import styled from'@emotion/styled'
import { AiOutlineEye } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Viewdatacomponent = styled.section`
    background-color: #0A53B5;
    display: flex;
    flex-direction: column;
    .dashboard-mobile{
        background-color: #3A9EB6;
        padding: 10px;
        display: flex;
        flex-direction: column;
        .icon-profile{
            display: flex; 
            justify-content: space-between;
            .search{
                display: flex;
                align-items: center;
                color: #FFFFFF;
                
            }
            .user-profile-mobile {
                min-width: 20px;
                min-height: 20px;
            }
            
        }
        .box-mobile{
            display: flex; 
            align-items: center;
            justify-content: center;
            flex-direction: row;
            .documents{
                background-color: #07B3FD;
                margin: 3px;
                padding: 6px;
                border-radius: 3px;
                width: 120px;
            }
            .number{
                text-align: center;
                color: #FFFFFF;
            }
            p{
                text-align: center;
                font-family: 'Poppins-Semibold';
                color: #FFFFFF;
            }
            .users{
                background-color: #F47216;
                margin: 3px;
                padding: 6px;
                border-radius: 3px;
                width: 120px;
            }
        }
        
    }
    .dashboard-desktop{
        display: none;
    }

    //Mobile
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

    //Documents Mobile and desktop
    .table-documents{
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

    //Desktop
    @media (min-width: 992px){
        .dashboard-mobile{
            display: none;
        }
        .dashboard-desktop{
            background-color: #3A9EB6;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            justify-content: space-between;
            .search{
                margin: 20px;
                color: #FFFFFF;
                cursor: pointer;
            }
            .search:hover, .search:focus{
                transform: translateX(1px) scale(1.1);
            }
            .box-desktop{
                display: flex;
                text-align: center;
                flex-direction: row;
                .documents{
                    background-color: #07B3FD;
                    margin: 10px;
                    padding: 20px;
                    border-radius: 3px;
                    width: 150px;
                    height: 110px;
                }
                .documents:hover, .documents:focus{
                    transform: translateX(1px) scale(1.1);
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                }
                h2{
                    color: #FFFFFF;
                }
                p{
                    color: #FFFFFF;
                    font-family: 'Poppins-Semibold';
                    margin: 8px;
                }
                .users{
                    background-color: #F47216;
                    margin: 10px;
                    padding: 20px;
                    border-radius: 3px;
                    width:  150px;
                    
                }
                .users:hover, .users:focus{
                    transform: translateX(1px) scale(1.1);
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                    
                }
            }
            .user-profile-desktop{
                margin: 20px;
                cursor: pointer;
            }
            .user-profile-desktop:hover, .user-profile-desktop:focus{
                transform: translateX(1px) scale(1.1);
            }
        }
        .list-mobile{
            display: none;
        }
        .list-desktop{
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
            border-radius: 20px;
            min-width: 100px;
            margin: 3% 10% 3% 10%;
            display: flex;
            flex-direction: column;
            h3{
                text-align: center;
                margin: 25px;
                color: #FFFFFF;
                font-family: 'Poppins-Bold';
                font-size: 25px;
            }
            .subtitles-desktop{
                color: #FFFFFF;
                font-family: 'Poppins-Semibold';
            }
            #table-users{
                text-align: center;
                color: #FFFFFF;
                font-family: 'Poppins-Regular';
            }
        }
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

             {/* Section Dashboard mobile*/}
             <div className='dashboard-mobile'>
                <div className='icon-profile'>
                    <div className='search'>
                        <FaMagnifyingGlass/>
                    </div>
                    <div className='user-profile-mobile'>
                        <img src="/images/fox-mobile.png" alt="" width='40px' height='30px'/>
                    </div>
                </div>
                <div className='box-mobile'>
                    <div className='documents'>
                        <h2 className='number'>10</h2>
                        <p>Documentos</p>
                    </div>
                    <div className='users'>
                        <h2 className='number'>10</h2>
                        <p>Usuários</p>
                    </div>
                </div>
            </div>

            {/* Section Form Mobile */}
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

            {/* Section Dashboard desktop*/}
            <div className='dashboard-desktop'>
                <div className='search'>
                    <FaMagnifyingGlass/>
                </div>
                <div className='box-desktop'>
                    <div className='documents'>
                        <h2 className='number'>10</h2>
                        <p>Documentos</p>
                    </div>
                    <div className='users'>
                        <h2 className='number'>10</h2>
                        <p>Usuários</p>
                    </div>
                </div>
                <div className='user-profile-desktop'>
                    <img src="/images/fox-mobile.png" alt="" width='50px' height='50px'/>
                </div>
            </div>

            {/* Section Form Desktop */}
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

             {/* Section Table Documents */}
            <div className="table-documents">
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