'use client';
import styled from '@emotion/styled';

const FooterComponent = styled.footer`
    background: linear-gradient(180deg, rgba(7, 179, 253, 1), rgba(7, 179, 253, 1));
    height: 300px;
    width: 100%;
    position: absolute;
    top: 900px;
`;

const Footer = function (){
    return(
        <FooterComponent>
            <div className='box'>
                <h3>Contatos</h3>
                <p><span>Endereço: </span>Rua Tamoios, 246, Jardim Aeroporto - São Paulo, SP.</p>
            </div>
            <div className='box'>

            </div>
            <div className='box'>

            </div>
        </FooterComponent>
    )
}

export default Footer;