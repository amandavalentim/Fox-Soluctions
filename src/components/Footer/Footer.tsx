'use client';
import styled from '@emotion/styled';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare} from "react-icons/fa";

const FooterComponent = styled.footer`
    background: rgba(7, 179, 253, 1);
    box-sizing: border-box;
    .container-center{
        padding: 10px;
        .box{
            margin: 20px;
            h3{
                margin: 10px;
                padding: 20px;
                border-radius: 5px;
                border: 3px solid #93B413;
                background: #93B413;
                height: 70px;
            }
            p{
                margin: 20px;
                width: 250px;
            }
            a{
                display: grid;
                margin: 20px;
            }
            .container-icons{
                margin: 20px;
            }
        }
    }
    //Desktop
    @media(min-width: 992px){
          
    }
    
    
    

`;

const Footer = function (){
    return(
        <FooterComponent>
            <div className='container-center'>
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
                    <div className='container-icons'>
                        <FaFacebookSquare className='facebook'/>
                        <FaInstagram className='instagram'/>
                        <FaTwitterSquare className='twitter'/>
                        <FaGithubSquare className='github'/>
                    </div>
                    
                </div>
            </div>
        </FooterComponent>
    )
}

export default Footer;