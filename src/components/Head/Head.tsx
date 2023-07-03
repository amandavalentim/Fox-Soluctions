'use client';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FaBars } from "react-icons/fa";

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
        font-family: 'Roboto-Medium';
    }

    .show-on-mobile {
        display: none;
    }

    @media (min-width: 768px) {
        height: 132px;
    }

    @media (min-width: 320px) and (max-width:425px) {
        .hide-on-mobile {
            display: none;
        }
        .show-on-mobile {
            display: flex;
            color: #FFFF;
            cursor: pointer;
            width: 35px;
            height: 0px;
            .faBars {
                width: 30px;
                height: 30px;
            }
        }
        .logo-Fox {
            position: absolute;
            top: 15px;
            left: 2px;
        }
        .nameLogo {
            font-size: 1em;
            position: absolute;
            left: 103px;
            top: 122px;
            color: white;
            font-family: 'Roboto-Medium';
        }    
    }
`;

const Ul = styled.ul`
        display: flex;
        list-style: none;   
        li {
            width: 100px;
            color: white;
            font-family: 'Poppins-Medium';
        }
`;
const Head = function() {
  return (
    <HeadComponent>
           
                <nav className='header'>
                    <Image className='logo-Fox' src="/images/logo-fox1.svg" width={310} height={104} alt="logo" />
                    <div className='nameLogo'>Fox Soluctions</div>
                </nav>
            
                <nav className='hide-on-mobile'>
                    <div>
                        <Ul>
                            <li>Home</li>
                            <li>Documentos</li>
                        </Ul>
                    </div>
                </nav>

                <nav className='show-on-mobile'>
                    <FaBars className='faBars'/>
                </nav>

    </HeadComponent>
  )
}

export default Head