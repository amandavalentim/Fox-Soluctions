'use client';
import styled from '@emotion/styled';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare} from "react-icons/fa";


const FooterComponent = styled.footer`
    .show-on-desktop{
        background: linear-gradient(180deg, rgba(7, 179, 253, 1), rgba(7, 179, 253, 1));
        height: 300px;
        width: 100%;
        position: relative;
        top: 900px;
        display: flex;
        justify-content: space-between;
        .box{
            padding: auto;
            margin: auto;
            h3{
                margin: 20px;
                text-align: center;
                color: #FEFEFE;
                font-size: 25px;
                font-family: 'Poppins-bold';
            }
            p{
                margin: 20px;
                width: 260px;
                color: #FEFEFE;
                font-family: 'Poppins-Regular';
                font-size: 14px;
                cursor: pointer;

            span{
                font-size: 15px;
                font-family: 'Poppins-Semibold';
                cursor: pointer;
            }
        }
        a{
            margin: 20px;
            height: 31px;
            display: grid;
            font-family: 'Poppins-Regular';
            font-size: 15px;
            color: #FEFEFE;
        }
        .container{
            height: 150px;
            .icon-FI{
                width : 100px ;
                margin-left: auto;
                margin-right: auto;
                .facebook{
                    width: 50px;
                    height: 50px;
                    fill: #3a77ff;
                    cursor: pointer;
                }
                .instagram{
                    width: 50px;
                    height: 50px;
                    fill:  #C82D8E;
                    cursor: pointer;
                }
            }

            .icon-TG{
                width : 100px ;
                margin-left: auto;
                margin-right: auto;
                .twitter{
                    width: 50px;
                    height: 50px;
                    fill:  #098BEA;
                    cursor: pointer;
                }
                .github{
                    width: 50px;
                    height: 50px;
                    fill:  #000000;
                    cursor: pointer;
                }
            }
        
        }
        
    }
    }
    .show-on-mobile{
        display: none;
    }
    
    @media ((min-width: 320px) and (max-width: 425px)){
        background: linear-gradient(180deg, rgba(7, 179, 253, 1), rgba(7, 179, 253, 1));
        height: 400px;
        width: 100%;
        position: relative;
        top: 900px;
        .show-on-mobile{
            display: flex;
            justify-content: space-between;
        }
        .container-center{
                margin: auto;
                padding: auto;
                .box-mobile{
                    width: 250px;
                    height: 78px;
                    border-radius: 5px;
                    border: 3px solid #93B413;
                    background: #93B413;
                    margin: 40px;
                    box-sizing: border-box;
                    h3{
                        text-align: justify ;
                        margin: 20px;
                        font-family: 'Poppins-Bold';
                        font-size: 21px;
                        color: #FEFEFE;
                    }
                    .internal-content{
                        p{
                            margin: 10px;
                        }
                    }
                    
                   
                }
            }
        .show-on-desktop{
            display: none;
        }

    }
`;

const Footer = function (){
    return(
        <FooterComponent>
            <nav className='show-on-desktop'>
                <div className='box'>
                    <h3>Contatos</h3>
                    <p><span>Endereço: </span>Rua Tamoios, 246, Jardim Aeroporto - São Paulo, SP.</p>
                    <p><span>Telefone: </span> (11) 99999-9999</p>
                    <p><span>Email: </span>foxsoluctions@gmail.com</p>
                </div>
                <div className='box'>
                    <h3>Nossa Empresa</h3>
                    <a href="">Home</a>
                    <a href="">Documentos</a>
                    <a href="">Sobre Nós</a>
                </div>
                <div className='box'>
                    <h3>Redes Sociais</h3>
                    <div className='container'>
                        <div className='icon-FI'>
                            <FaFacebookSquare className='facebook'/>
                            <FaInstagram className='instagram'/>
                        </div>
                        <div className='icon-TG'>
                            <FaTwitterSquare className='twitter'/>
                            <FaGithubSquare className='github'/>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className='show-on-mobile'>
                <div className='container-center'>
                    <div className='box-mobile'>
                        <h3>Contatos</h3>
                        {/* <div className='internal-content'>
                            <p><span>Endereço: </span>Rua Tamoios, 246, Jardim Aeroporto - São Paulo, SP.</p>
                            <p><span>Telefone: </span> (11) 99999-9999</p>
                            <p><span>Email: </span>foxsoluctions@gmail.com</p>
                        </div> */}
                    </div>
                    <div className='box-mobile'>
                        <h3>Nossa Empresa</h3>
                    </div>
                    <div className='box-mobile'>
                        <h3>Redes Sociais</h3>
                    </div>
                </div>
            </nav>
        </FooterComponent>
    )
}

export default Footer;