'use client';
import styled from '@emotion/styled';

const FooterComponent = styled.footer`
    background: linear-gradient(180deg, rgba(7, 179, 253, 1), rgba(7, 179, 253, 1));
    height: 190px;
    width: 100%;
`;

const Footer = function (){
    return(
        <FooterComponent>
            <footer className='Contacts'>
                <h3>Contatos</h3>
                <p><span>Endereço:</span> </p>
            </footer>
        </FooterComponent>
    )
}

export default Footer