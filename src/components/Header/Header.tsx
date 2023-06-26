'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const HeaderComponent = styled.header`
    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);
    height: 190px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 768px){
        height: 172px;
    }
`;

const Ul = styled.ul`
        display: flex;
        list-style: none;   
        li {
            width: 100px;
        }
`;
const Header = function() {
  return (
    <HeaderComponent>
        <div>
            <Image src="/images/logo.svg" width={81} height={104} alt="logo" />
        </div>
        <div>
            <Ul>
                <li>Home</li>
                <li>Documentos</li>
            </Ul>
        </div>

    </HeaderComponent>
  )
}

export default Header