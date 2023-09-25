//developed by Amanda Valentim

'use client';
import styled from'@emotion/styled'
import { FaMagnifyingGlass } from "react-icons/fa6";
import {FaAngleRight} from "react-icons/fa";

const ListComponent = styled.section`
    background: #0C65C2;
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
        }
    }

`;

const List = function (){
    return(
        <ListComponent>
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