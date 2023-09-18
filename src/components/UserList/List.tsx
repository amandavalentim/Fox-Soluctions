//developed by Amanda Valentim

'use client';
import styled from'@emotion/styled'
import { FaMagnifyingGlass } from "react-icons/fa6";
import {FaAngleRight} from "react-icons/fa";

const ListComponent = styled.section`
    background: #0C65C2;
    display: flex;
    flex-direction: column;
    .dashboard{
        background-color: #3A9EB6;
        padding: 10px;
        .icon-profile{
            display: flex; 
            justify-content: space-between;
            .search{
                display: flex;
                align-items: center;
                color: #FFFFFF;
            }
            .user-profile-mobile {
                min-width: 40px;
                min-height: 40px;
            }
            
        }
        .box-dashboard{
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

    .list-mobile{
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        border-radius: 20px;
        min-width: 260px;
        margin: 10%;
        display: flex;
        flex-direction: column;
        h3{
            text-align: center;
            margin: 20px;
            font-family: 'Poppins-Bold';
            color: #FFFFFF;
        }
        .subtitles-mobile{
            color: #FFFFFF;
        }
        
        
    }
    .list-desktop{
        display: none;
    }

    //Desktop
    @media (min-width: 922px){
        display: flex;
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
                
            }
            .subtitles-desktop{
                color: #FFFFFF;
                font-family: 'Poppins-Semibold';
            }
            
        }
    }

`;

const Ul = styled.section`

    .container-blue{
        display: flex;
        justify-content: space-around;
        background-color: #07AFFA;
        min-width: 260px;
        
    }
    .name-user{
        display: flex;
        align-items: center;
        font-family: 'Poppins-Regular';
        color: #FFFFFF;
    }
    img{
        margin: 10px;
    }
    .container{
        display: flex; 
        justify-content: space-around;
    }
    .icon{
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }

    @media (min-width: 922px){
        .container-blue-desktop{
            display: flex;
            flex-direction: row;

        }
        .container-desktop{
            display: flex;
        }
    }

`;

const List = function (){
    return(
        <ListComponent>
            {/* Section Dashboard */}
            <div className='dashboard'>
                <div className='icon-profile'>
                    <div className='search'>
                        <FaMagnifyingGlass/>
                    </div>
                    <div className='user-profile-mobile'>
                        <img src="/images/fox-mobile.png" alt=""/>
                    </div>
                </div>
                <div className='box-dashboard'>
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

            {/* Section Mobile */}
            <div className="list-mobile">
                <h3>Lista de Usuários</h3>
                <table className="table-striped-mobile">
                    <thead>
                        <tr>
                            <th className="subtitles-mobile">Foto</th>
                            <th className="subtitles-mobile">Nome</th>
                        </tr>
                    </thead>
                    <tbody id="table-users">


                    </tbody>
              </table>
            </div>

            {/* Section Desktop */}
            <div className="list-desktop">
                <h3>Lista de Usuários</h3>
                <table className="table-striped-desktop">
                    <thead>
                        <tr>
                            <th className="subtitles-desktop">Foto</th>
                            <th className="subtitles-desktop">Nome</th>
                            <th className="subtitles-desktop">Criado em</th>
                            <th className="subtitles-desktop">Atualizado em</th>
                        </tr>
                    </thead>
                    <tbody id="table-users">


                    </tbody>
              </table>
            </div>

        </ListComponent>
    )
}

export default List;