//Código desenvolvido por Gustavo Otacílio
'use client';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/Ai";
import ButtonJS from './Button';

const HeadComponent = styled.head`
    position: relative;
    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);
    height: 170px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;


    .hide-on-mobile {
        display: none;
    }

    /* .show-on-mobile {
        display: flex;
        justify-content: space-between;
    } */

    .faBars {
        width: 30px;
        height: 30px;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 88%;
        transform: translate(-50%, -50%);
    }

    .logo-Fox {
        position: absolute;
        top: 5px;
        left: 100px;
        top: 40%;
        left: 48%;
        transform: translate(-50%, -50%);
    }

    .nameLogo {
        font-size: 1em;
        position: absolute;
        top: 80%;
        left: 48%;
        transform: translate(-50%, -50%);
        color: white;
        font-family: 'Roboto-Medium';
    }

    .show-on-mobile{
        display: block;
        font-size: 2em;
        padding: .9rem;
    }

    /* .show-on-mobile Ul {
        display: block;
        position: fixed;
        top: 0;
        right: -80vw;
        width: 80vw;
        height: 100vh;
        background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);
        z-index: 2;
        margin: 0;
        transition: right .2s linear;
    }

    .show-on-mobile.open Ul {
        right: 0;
    }
    .show-on-mobile.open a {
        color: #fff;
        padding: 20px;
        display: block;
        font-weight: 100;
        border-bottom: #93B413 1px solid;
        width: 200px;
    }
    .show-on-mobile.open .backdrop {
        opacity: .5;
        display: block;
    }
    .show-on-mobile .backdrop {
        opacity: 0;
        background-color: #000;
        transition: opacity .15s linear;
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 1;
        left: 0;
        top: 0;
    }
    .show-on-mobile .close-menu {
        display: block;
        text-align: right;
        background-color: #0081E8;
        width: 100%;
    }
    .show-on-mobile .close-menu button {
        background: none;
        border: none;
        font-size: 2em;
        padding: .75rem 1rem;
    }
    .txt-close {
        position: absolute;
        left: 10px;
        top: 10px;
    } */

    @media (min-width: 768px) {

        .hide-on-mobile {
            display: flex;
            justify-content: space-between;
            position: absolute;
            left: 500px;
        }
        /* .hide-on-mobile ul {
            position: absolute;
        } */

        .show-on-mobile {
            display: none;
        }

        .logo-Fox {
            position: absolute;
            top: 45%;
            left: 10%;
        }

        .nameLogo {
            font-size: 1em;
            position: absolute;
            left: 10%;
            top: 85%;
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

//Código JS desenvolvido por Gabriel Marques
 
document.querySelector('.show-on-mobile')?.addEventListener('click', e => {

    document.querySelector('.show-on-mobile')?.classList.add('open');
 
});  

const Head = function() {
    return (
      <HeadComponent>
             
                  <nav className='header'>
                        <a href="/">
                            <Image className='logo-Fox' src="/images/logo-fox1.svg" width={100} height={104} alt="logo" />
                        </a>
                      <div className='nameLogo'>Fox Soluctions</div>
                  </nav> 
  
                  <nav className='show-on-mobile'>
                            <FaBars className='faBars'/>
                            {/* <nav className='menu'>
                            <Ul>
                            <li className='close-menu'>
                                <button type='button'>
                                   <AiOutlineClose className='closeAi'/>
                                </button>
                            </li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Documentos</a></li>
                            <li><a href="/">Sobre Nós</a></li>
                        </Ul>  
                            </nav>
                            */}
                            
                        </nav>

                  <nav className='hide-on-mobile'>
                      <div>
                          <Ul>
                              <li id='home'>Home</li>
                              <li id='documents'>Documentos</li>
                          </Ul>
                      </div>
                  </nav>
  
      </HeadComponent>
    )
  }
  
  export default Head;