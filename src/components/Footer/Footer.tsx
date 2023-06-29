'use client';
import styled from '@emotion/styled';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";


const FooterComponent = styled.footer`
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
            width: 220px;
            color: #FEFEFE;
            font-family: 'Poppins-Regular';
            font-size: 13px;
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
            font-size: 13px;
            color: #FEFEFE;
        }
        .container{
            height: 20vh;
            display: flex;
            width: 30px;
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
`;



const Footer = function (){
    return(
        <FooterComponent>
            <div className='box'>
                <h3>Contatos</h3>
                <p><span>Endereço: </span>Rua Tamoios, 246, Jardim Aeroporto - São Paulo, SP.</p>
                <p><span>Telefone: </span> (11) 99999-9999</p>
                <p><span>Email: </span> foxsoluctions@gmail.com</p>
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
                    <div className='box-FI'>
                        <FaFacebookSquare className='facebook'/>
                        <FaTwitterSquare className='twitter'/>
                    </div>
                    <div className='box-TG'>
                        <FaInstagram className='instagram'/>
                        <FaGithubSquare className='github'/>
                    </div>
               </div>
               
            </div>
        </FooterComponent>
    )
}

export default Footer;