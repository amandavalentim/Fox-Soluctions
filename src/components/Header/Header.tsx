'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const HeadComponent = styled.head`
    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);
    height: 190px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    .nameLogo {
        color: white;
    }
    .image {
        
    }
    @media (min-width: 768px){
        height: 172px;
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
<<<<<<<< HEAD:src/components/Head/Head.tsx
    <HeadComponent>
        <div>
            <Image src="/images/logo-fox 1.svg" width={81} height={104} alt="logo" />
========
    <HeaderComponent>
        <div className='image'>
            <Image src="/images/logo-fox1.svg" width={81} height={104} alt="logo" />
            <div className='nameLogo'>FoxSoluctions</div>
>>>>>>>> a2bfd676a82c5d1d9e0dc51211ab44269aaa1d67:src/components/Header/Header.tsx
        </div>
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