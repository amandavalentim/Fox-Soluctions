'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const HeadComponent = styled.head`
    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: relative;
    .logo-Fox {
        position: absolute;
        top: 5px;
        left: -70px;
    }
    .nameLogo {
        font-size: 1em;
        position: absolute;
        left: 40px;
        top: 110px;
        color: white;
    }

    @media (min-width: 768px){
        height: 132px;
    }
`;

const Ul = styled.ul`
        display: flex;
        list-style: none;   
        li {
            width: 100px;
            color: white;
        }
`;
const Head = function() {
  return (
    <HeadComponent>
        <nav className='header'>
            <Image className='logo-Fox' src="/images/logo-fox1.svg" width={310} height={104} alt="logo" />
            <div className='nameLogo'>Fox Soluctions</div>
        </nav>
        <div>
            <Ul>
                <li>Home</li>
                <li>Documentos</li>
            </Ul>
        </div>

    </HeadComponent>
  )
}

export default Head