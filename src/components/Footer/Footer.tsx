//developed for Amanda Valentim

'use client';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare, FaAngleDown, FaAngleRight} from "react-icons/fa";

//Mobile
const FooterComponent = styled.footer`
    background: rgba(7, 179, 253, 1);
    box-sizing: border-box;

    .container-contacts-desktop{
        display: none;
    }
    .container-company-desktop{
        display: none;
    }
    .container-icons-desktop{
        display: none;
    }
    

    .container-center{
        padding: 10px;
        .box{
            margin: 20px;
            position: relative;
            h3{
                margin: 10px;
                padding: 15px;
                border-radius: 5px;
                border: 3px solid #93B413;
                background: #93B413;
                height: 70px;
                font-family: 'Poppins-Bold';
                font-size: 21px;
                color: #fff;
                cursor: default;
                .btn-icon{
                    padding: 7px;
                    position: absolute;
                    left: 80%;
                    transform: translate(20%, 7%);
                    color: #fff;
                    font-size: 20px;
                    border: none;
                    background: none;
                }
            }
            p{
                margin: 20px;
                width: auto;
                font-family: 'Poppins-Regular';
                color: #fff;
                cursor: default;
                span{
                    font-family: 'Poppins-Bold';
                    font-size: 15px;
                }
            }
            a{
                display: grid;
                margin: 20px;
                font-family: 'Poppins-Regular';
                color: #fff;
            }
            .container-icons{
                margin: 10px;
                display: flex;
                .facebook{
                    width: 50px;
                    height: 60px;
                    fill: #1877F2;
                    margin:5px;
                }
                .instagram{
                    width: 50px;
                    height: 60px;
                    fill: #C82D8E;
                    margin:5px;
                }
                .twitter{
                    width: 50px;
                    height: 60px;
                    fill: #098BEA;
                    margin:5px;
                }
                .github{
                    width: 50px;
                    height: 60px;
                    fill: #000;
                    margin:5px;
                }
            }
        }
    }

    //Tablet
    @media(min-width: 450px){
        .container-center {
            .box{
                h3{
                    .btn-icon{
                    position: absolute;
                    left: 91%;
                    transform: translate(20%, 7%);
                    }
                }
            }
        }
    }

    //Desktop
    @media(min-width: 992px){

        .container-contacts-desktop{
            display: flex;
            flex-direction: column;
        }
        .container-company-desktop{
            display: flex;
            flex-direction: column;
        }
        .container-icons-desktop{
            display: flex;
            margin: 10px;
                display: flex;
                .facebook{
                    width: 50px;
                    height: 60px;
                    fill: #1877F2;
                    margin:5px;
                    cursor: pointer;
                }
                .facebook:hover, .facebook:focus{
                    transform: translateX(10px) scale(1.2);
                }
                .instagram{
                    width: 50px;
                    height: 60px;
                    fill: #C82D8E;
                    margin:5px;
                    cursor: pointer;
                }
                .instagram:hover, .instagram:focus{
                    transform: translateX(10px) scale(1.2);
                }
                .twitter{
                    width: 50px;
                    height: 60px;
                    fill: #098BEA;
                    margin:5px;
                    cursor: pointer;
                }
                .twitter:hover, .twitter:focus{
                    transform: translateX(10px) scale(1.2);
                }
                .github{
                    width: 50px;
                    height: 60px;
                    fill: #000;
                    margin:5px;
                    cursor: pointer;
                }
                .github:hover, .github:focus{
                    transform: translateX(10px) scale(1.2);
                }
        }

        .container-center{
            display: flex;
            justify-content: space-between;
            .box{
                h3{
                    background:none;
                    border: none;
                    width: 250px;
                    text-align: center;
                    font-size: 25px;
                    .btn-icon{
                        display: none;
                    }
                }
                h3:hover, h3:focus{
                    transform: translateX(10px) scale(1.2);
                }
                p{
                    margin: 10px;
                    width: 290px;
                }
                p:hover, p:focus{
                transform: translateX(10px) scale(1.2);
                }
                a{
                    margin: 17px;
                }
                a:hover, a:focus{
                transform: translateX(10px) scale(1.2);
                }
                .container-icons{
                    
                    .facebook:hover, .facebook:focus{
                        transform: translateX(10px) scale(1.2);
                    }
                    .instagram:hover, .instagram:focus{
                    transform: translateX(10px) scale(1.2);
                    }
                    .twitter:hover, .twitter:focus{
                        transform: translateX(10px) scale(1.2);
                    }
                    .github:hover, .github:focus{
                        transform: translateX(10px) scale(1.2);
                    }
                }
            }
        }
    }

    //Large Screen
    @media(min-width:1200px){
        .container-center{
            justify-content: space-between;
        }
    }
`;

const Footer = function (){

    //Action Toggle
    const [containerContacts, setContainerContacts] = useState(false);
    const [containerCompany, setContainerCompany] = useState(false);
    const [containerIcons, setContainerIcons] = useState(false);

    return(
        <FooterComponent>
            <div className='container-center'>

                {/* Section Contacts*/}
                <div className='box'>
                    <h3>Contatos 
                        <button type='button' className='btn-icon' onClick={()=> setContainerContacts(!containerContacts)}>{containerContacts?<FaAngleDown/>:<FaAngleRight/>}</button>
                    </h3>
                    <div className='container-contacts-desktop'>
                        <p><span>Endereço: </span>Rua Tamoios, 246, Jardim Aeroporto - São Paulo, SP.</p>
                        <p><span>Telefone: </span> (11) 99999-9999</p>
                        <p><span>Email: </span>foxsoluctions@gmail.com</p>
                    </div>
                {containerContacts &&   <div className='container-contacts'>
                        <p><span>Endereço: </span>Rua Tamoios, 246, Jardim Aeroporto - São Paulo, SP.</p>
                        <p><span>Telefone: </span> (11) 99999-9999</p>
                        <p><span>Email: </span>foxsoluctions@gmail.com</p>
                    </div>}
                </div>

                {/* Section Our Company */}
                <div className='box'>
                    <h3>Nossa Empresa
                        <button type='button' className='btn-icon' onClick={()=> setContainerCompany(!containerCompany)}>{containerCompany?<FaAngleDown/>:<FaAngleRight/>}</button>
                    </h3>
                    <div className='container-company-desktop'>
                        <a href="">Home</a>
                        <a href="">Sobre Nós</a>
                    </div>
                { containerCompany && <div className='container-company'>
                    <a href="">Home</a>
                    <a href="">Sobre Nós</a>
                    </div>}
                </div>

                {/* Section Social Media */}
                <div className='box'>
                    <h3>Redes Sociais
                        <button type='button' className='btn-icon' onClick={()=> setContainerIcons(!containerIcons)}>{containerIcons?<FaAngleDown/>:<FaAngleRight/>}</button>
                    </h3>
                    <div className='container-icons-desktop'>
                        <FaFacebookSquare className='facebook'/>
                        <FaInstagram className='instagram'/>
                        <FaTwitterSquare className='twitter'/>
                        <FaGithubSquare className='github'/>
                    </div>
                { containerIcons && <div className='container-icons'>
                        <FaFacebookSquare className='facebook'/>
                        <FaInstagram className='instagram'/>
                        <FaTwitterSquare className='twitter'/>
                        <FaGithubSquare className='github'/>
                    </div>}
                    
                </div>
            </div>
        </FooterComponent>
    )
}

export default Footer;