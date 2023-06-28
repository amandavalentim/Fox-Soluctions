'use client';
import styled from '@emotion/styled';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";


const FooterComponent = styled.footer`
    background: linear-gradient(180deg, rgba(7, 179, 253, 1), rgba(7, 179, 253, 1));
    height: 300px;
    width: 100%;
    position: relative;
    top: 226px;
    display: flex;
    justify-content: space-between;
    .box{
        padding: auto;
        margin: auto;
        h3{
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 20px;
            padding-bottom: 20px;

            text-align: center;
        }
        p{
            padding: 10px;
            width: 250px;
        }
        a{
            padding: 13px;
            display: grid;
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
                <h3>Nossa Empressa</h3>
                <a href="">Home</a>
                <a href="">Documentos</a>
                <a href="">Sobre Nós</a>
            </div>
            <div className='box'>
               <h3>Redes Sociais</h3>
               <i><FaFacebookSquare></FaFacebookSquare></i>
               <i><FaInstagram></FaInstagram></i>
               <i><FaTwitterSquare></FaTwitterSquare></i>
               <i><FaGithubSquare></FaGithubSquare></i>
            </div>
        </FooterComponent>
    )
}

export default Footer;