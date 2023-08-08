//Código desenvolvido por Gustavo Otacílio e Gabriel Marques Correia
'use client';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import Link from 'next/link';

const HeadComponent = styled.head`
    position: relative;
    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);
    height: 170px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .backdrop {
        display: none;
    }


    .hide-on-mobile {
        display: none;
    }

    .show-on-mobile {
        display: flex;
        justify-content: space-between;
    }

    .menu {
        width: 35px;
        height: 35px;
    }

    .button-bars {
        border: none;
        background: none;
    }

    .faBars {
        width: 70px;
        height: 35px;
        color: #fff;
        border: none;
        background: none;
        display: block;
    }

    .close {
        color: #fff;
        font-size: 30px;
        position: absolute;
        top: -5px;
        left: 220px;
    }

    .close:hover {
        color: #F47216;
    }

    .button-close {
        border: none;
        background: none;
        color: #fff;
    }

    .menu .close-menu {
        display: block;
        text-align: right;
        background-color: #eee;
    }
    .menu .close-menu button {
        background: none;
        border: none;
        font-size: 2em;
        padding: .75rem 1rem;
    }
    .menu.open .backdrop {
        opacity: .5;
        display: block;
    }
    .menu .backdrop {
        opacity: 0;
        background-color: #000;
        transition: opacity .15s linear;
        position: fixed;
        width: 20%;
        height: 100vh;
        z-index: 2;
        left: 0;
        top: 0;
    }
    .menu ul {
        display: block;
        position: fixed;
        top: 0;
        right: -80vw;
        width: 80vw;
        height: 100vh;
        background-color: #0081E8;
        z-index: 1;
        margin: 0;
        transition: right .2s linear;
    }
    .menu.open ul {
        right: 0;
    }
    .menu li {
        width: 250px;
    }
    .menu.open a {
        color: #FFF;
        padding: 20px;
        display: block;
        font-weight: 100;
    }
    .menu {
        width: 60px;
        flex: initial;
    }
    .menu .open-menu {
        display: block;
        font-size: 2em;
        padding: .9rem;
        flex: 1;
        background: none;
        border: none;
        color: #fff;
    }

    .logo-Fox {
        position: absolute;
        top: 5px;
        left: 100px;
        top: 40%;
        left: 52%;
        transform: translate(-50%, -50%);
    }

    .nameLogo {
        font-size: 1em;
        position: absolute;
        top: 80%;
        left: 52%;
        transform: translate(-50%, -50%);
        color: white;
        font-family: 'Roboto-Medium';
    }

    .home-button {
        font-size: 23px;
        color: white;
        text-decoration: none;
    }

    .home-button:focus {
        font-size: 23px;
        background-color: #07AFFA;
        border-radius: 41px;
        text-decoration: none;
    }

    .sobre-nos-button {
        font-size: 23px;
        color: white;
        text-decoration: none;
    }

    .sobre-nos-button:focus {
        font-size: 23px;
        background-color: #07AFFA;
        border-radius: 41px;
        text-decoration: none;
    }

    header .hearder-boder {
        justify-content: space-between;
    }

    .profile {
        position: absolute;
        top: 25px;
    }

    .conteudo {
        position: absolute;
        top: 25px;
        width: 255px;
    }

    .name {
        display: inline;
        position: absolute;
        top: 38px;
        left: 95px;
        width: 200px;
    }

    .fox {
        position: absolute;
        top: 30px;
        left: 15px;
        width: 60px;
    }

    .home {
        background: none;
        border: none;
        font-size: 19px;
    }

    .home:active {
        cursor: pointer;
        background: none;
        border: none;
        font-size: 19px;
    }

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

        .home-button {
            font-size: 19px;
        }

        .home-button:focus {
            font-size: 19px;
            color: #F47216;
            background: none;
        }

        .sobre-nos-button {
            font-size: 19px;
        }

        .sobre-nos-button:focus {
            font-size: 19px;
            color: #F47216;
            background: none;
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

const Open = ()=>{
    document.querySelector('.menu')?.classList.add('open');
    
}

const Close = ()=> {
    document.querySelector('.menu')?.classList.remove('open');
}

const Head = function() {
    return (
        
      <HeadComponent>
             
                  <nav className='header'>
                            <Link href={'/page'}>
                            <Image className='logo-Fox' src="/images/logo-fox1.svg" width={100} height={104} alt="logo" />
                            </Link>
                      <div className='nameLogo'>Fox Soluctions</div>
                  </nav> 
  
                  <nav className='show-on-mobile'>
                            <nav className='menu'>
                                <button className='button-bars'>
                                    <FaBars className='faBars' onClick={Open}/>
                                </button>
                                <div className='backdrop' onClick={Close}></div> 
                                    <Ul>
                                        <li>
                                            <div className='conteudo'>
                                            <button className='button-close'>
                                                <FaTimes onClick={Close} className='close'/>
                                            </button>
                                            <li>
                                                <Link href={'/page'} onClick={Close} className='home-button'>
                                                Home
                                            </Link>
                                            </li>
                                            <li>
                                                <Link href={'/Page3'} className='sobre-nos-button' onClick={Close}>
                                                    Sobre Nós
                                                </Link>
                                            </li>
                                            </div>
                                            
                                        </li>
                                    </Ul>
                            </nav>
                        </nav> 

                  <nav className='hide-on-mobile'>
                          <Ul>
                            <li>
                                <Link href={'/page'} className='home-button'>
                                Home
                              </Link>
                              </li>
                              <li>
                                <Link href={'/Page3'} className='sobre-nos-button'>
                                    Sobre Nós
                                </Link>
                              </li>
                              
                          </Ul>
                  </nav>
                  
      </HeadComponent>

    )
  }
  
  export default Head;