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
            text-align: center;
            color: #FEFEFE;
            font-size: 25px;
            font-family: 'Poppins-bold';
        }
        p{
            padding: 10px;
            width: 255px;
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
        p:hover{
            font-size: 14px;
            span{
                font-size: 16px;
            }
        }
        a{
            padding: 15px;
            display: grid;
            font-family: 'Poppins-Regular';
            font-size: 13px;
            color: #FEFEFE;
        }
        a:hover{
            font-size: 15px;
        }
        .container{
            height: 20vh;
            display: flex;
            width: 30px;
            margin-top: 20px;
            margin-bottom: 10px;
            .facebook{
                width: 50px;
                height: 50px;
                fill: #3a77ff;
                cursor: pointer;
                margin-left: 40px ;
                margin-right: 5px;
            }
            .instagram{
                width: 50px;
                height: 50px;
                fill:  #C82D8E;
                cursor: pointer;
                margin-left: 40px ;
                margin-right: 5px;
            }
            .twitter{
                width: 50px;
                height: 50px;
                fill:  #098BEA;
                cursor: pointer;
                margin-left: 10px ;
                margin-right: 10px;
            }
            .github{
                width: 50px;
                height: 50px;
                fill:  #000000;
                cursor: pointer;
                margin-left: 10px ;
                margin-right: 10px;
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