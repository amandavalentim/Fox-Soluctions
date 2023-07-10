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

    .hide-on-mobile {
        display: none;
    }

    .show-on-mobile {
        display: flex;
        justify-content: space-between;
    }

    .faBars {
        width: 30px;
        height: 30px;
        color: #fff;
    }

    .logo-Fox {
        position: absolute;
        top: 5px;
        left: 110px;
    }

    .nameLogo {
        font-size: 1em;
        position: absolute;
        left: 100px;
        top: 110px;
        color: white;
        font-family: 'Roboto-Medium';
    }

    @media (min-width: 768px) {

        .hide-on-mobile {
                display: flex;
                justify-content: space-between;
                position: absolute;
                left: 500px;
            }

            .show-on-mobile {
                display: none;
            }

            .logo-Fox {
                position: absolute;
                top: 5px;
                left: 70px;
    }

    .nameLogo {
        font-size: 1em;
        position: absolute;
        left: 60px;
        top: 110px;
        color: white;
        font-family: 'Roboto-Medium';
    }
    }

    @media (min-width: 922px) {

        .hide-on-mobile {
                display: flex;
                justify-content: space-between;
                position: absolute;
                left: 740px;
            }

            .show-on-mobile {
                display: none;
            }      
    }

    @media (min-width: 1200px) {
        .hide-on-mobile {
                display: flex;
                justify-content: space-between;
                position: absolute;
                left: 1070px;
            }

            .show-on-mobile {
                display: none;
            } 
    }

    @media (min-width: 1600px) {
        .hide-on-mobile {
                display: flex;
                justify-content: space-between;
                position: absolute;
                left: 1295px;
            }

            .show-on-mobile {
                display: none;
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
                        <a href="/">
                        <Image className='logo-Fox' src="/images/logo-fox1.svg" width={100} height={104} alt="logo" />
                        </a>
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
  
  export default Head;