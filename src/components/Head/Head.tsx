// Header feita por Gabriel e Gustavo

'use client';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/Ai";

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
        left: 100px;
    }

    .nameLogo {
        font-size: 1em;
        position: absolute;
        left: 90px;
        top: 110px;
        color: white;
        font-family: 'Roboto-Medium';
    }

    /* .open-menu {
        display: block;
        font-size: 2em;
        padding: .9rem;
        flex: 1;
        background: none;
        border: none;
        color: #fff;
    }

    .show-on-mobile Ul {
        display: block;
        position: fixed;
        top: 0;
        right: -80vw;
        width: 80vw;
        height: 100vh;
        background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);
        z-index: 1;
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
  
                  <nav className='show-on-mobile open'>
                        <button className='open-menu'>
                            <FaBars className='faBars'/>
                        </button>
                        {/* <div className="backdrop"></div>
                        <Ul>
                            <li className='close-menu'>
                                <button type='button'>
                                   <AiOutlineClose className='closeAi'/>
                                </button>
                            </li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Documentos</a></li>
                            <li><a href="/">Sobre Nós</a></li>
                        </Ul> */}
                  </nav>

                  <nav className='hide-on-mobile'>
                      <div>
                          <Ul>
                              <li>Home</li>
                              <li>Documentos</li>
                          </Ul>
                      </div>
                  </nav>
  
      </HeadComponent>
    )
  }
  
  export default Head;