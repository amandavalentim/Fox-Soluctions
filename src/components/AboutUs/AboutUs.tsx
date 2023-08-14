//Desenvolvido por Amanda Valentim
'use client';
import styled from'@emotion/styled'
import React, { useState } from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

//Mobile
const AboutUsComponent = styled.section`
    background-color: #0A53B5;
    padding: 10px;
    h3{
        text-align: center;
        padding-top: 40px;
        font-family: 'Poppins-Bold';
        color: #FFFFFF;
    }

    .container-about-us{
        border-radius: 19px;
        background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);
        margin: 20px;
        .content-center{
            p{
                text-align: center;
                padding: 40px;
                font-family: 'Poppins-Medium';
                color: #ffffff;
            }
        }
    }

    .company-show-on-desktop{
        display: none;
    }

    .container-company{
        border-radius: 19px;
        background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);
        margin: 20px;
        display: flex;
        .slide-company-item{
            .mission-card{
                p{
                    text-align: center;
                    font-family: 'Poppins-Medium';
                    color: #ffffff;
                    padding: 20px;
                }
            }
            .vision-card{
                p{
                    text-align: center;
                    font-family: 'Poppins-Medium';
                    color: #ffffff;
                    padding: 20px;
                }
            }
            .worth-card{
                padding: 28px;
                p{
                    font-family: 'Poppins-Medium';
                    color: #ffffff;
                    padding: 9px;
                }
            }
        }
    }

    .container-visual-identity{
        .container-why-the-fox{
            border-radius: 19px;
            background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);
            margin: 20px;
            text-align: center;
            p{
                padding: 40px;
                font-family: 'Poppins-Medium';
                color: #ffffff; 
            }
            img{
                padding: 10px;
            }
        }
        .color-palette{
            border-radius: 19px;
            background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);
            margin: 20px;
            text-align: center;
            img{
                padding: 40px;
            }
        }
    }

    .container-developers{
        border-radius: 19px;
        background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);
        margin: 20px;
        text-align: center;
        img{
            width: 150px;
            height: 150px;
            margin: 30px;
        }
        h4{
            font-family: 'Poppins-Medium';
            color: #ffffff;
            text-align: center;
        }
        p{
            color: #ffffff;
            font-family: 'Poppins-Regular';
            margin: 10px;
        }
        .card{
            margin: 30px;
            p{
                font-family: 'Poppins-Light';
                font-style: italic;
            }
        }

    }

    //Desktop
    @media(min-width: 992px){
        h3{
            font-size: 30px;
        }
        p{
            font-size: 20px;
        }
        .company-show-on-desktop{
            display: flex;
        }
        .container-company{
            display: none;
        }
        .company-card{
            border-radius: 19px;
            background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);
        }
    }

`;


const AboutUs = function (){

    return(
        <AboutUsComponent>
                {/* Section About Us */}
                <div className='container-about-us'>
                    <h3>Sobre Nós</h3>
                    <div className='content-center'>
                        <p>A Fox Soluctions foi fundada no ano de 2023 e foi desenvolvida para facilitar e auxiliar Pessoas que utilizam nossa plataforma a realizarem o upload e a visualização de documentos de maneira prática, com o objetivo de inovar e trazer criatividade em sua identidade visual.</p>
                    </div>
                </div>

                {/* Section Company in Desktop */}
                <div className='company-show-on-desktop'>
                    <div className='company-card'>
                        <h3>Missão</h3>
                        <div className='content-mission'>
                        <p className='container-show-on-desktop'>Facilitar o cotidiano de Pessoas, sendo um sistema intuitivo e com o objetivo de favorecer a  sustentabilidade, diminuindo o uso de papéis físicos</p>
                        </div>
                    </div>
                    <div className='company-card'>
                        <h3>Visão</h3>
                        <div className='content-vision'>
                            <p className='container-show-on-desktop'>Conseguir atingir o máximo de Pessoas possíveis e ser uma das principais plataformas, a ser utilizada por grandes empresas</p>
                        </div>
                    </div>
                    <div className='company-card'>
                        <h3>Valores</h3>
                        <div className='content-worth'>
                            <p className='container-show-on-desktop'>Inovação</p>
                            <p className='container-show-on-desktop'>Criatividade</p>
                            <p className='container-show-on-desktop'>Respeito a natureza</p>
                            <p className='container-show-on-desktop'>Respeito a diversidade</p>
                        </div>
                    </div>
                </div>

                {/* Section Company in Mobile */}
                <div className="container-company">
                    <Swiper className='swiper-company'>
                        <SwiperSlide className='slide-company-item'>
                            <h3>Missão</h3>
                            <div className='mission-card'>
                                <p>Facilitar o cotidiano de Pessoas, sendo um sistema intuitivo e com o objetivo de favorecer a  sustentabilidade, diminuindo o uso de papéis físicos</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-company-item'>
                            <h3>Visão</h3>
                            <div className='vision-card'>
                                <p>Conseguir atingir o máximo de Pessoas possíveis e ser uma das principais plataformas, a ser utilizada por grandes empresas</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-company-item'>
                            <h3>Valores</h3>
                            <div className='worth-card'>
                                <p>Inovação</p>
                                <p>Criatividade</p>
                                <p>Respeito a natureza</p>
                                <p>Respeito a diversidade</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Section Visual Identity */}
                <div className='container-visual-identity'>
                    <div className="container-why-the-fox">
                        <h3>Por que a Raposa?</h3>
                        <p>Escolhemos a raposa como representação da nossa plataforma, pois este animal possui o símbolo de criatividade, inteligência e solução de problemas. O que queremos transparecer em nosso sistema.</p>
                        <img src="/../images/logo-fox.svg" alt="Logo da Fox Soluctions, raposa laranja e nome do projeto" />
                        <img src="/../images/stella-aboutUs.svg" alt="Nossa mascote, chamada Stella" />
                    </div>
                    <div className="color-palette">
                        <h3>Nossa Paleta de cores: </h3>
                        <img src="/../images/paleta-de-cores.svg" alt="" />
                    </div>
                </div>

                {/* Section Developers in mobile */}
                <div className="container-developers">
                    <h3>Desenvolvedores</h3>
                    <Swiper className='swiper-developers'>
                        <SwiperSlide className='slide-developers-item'>
                            <img src="/../images/desenvolvedor-amanda.svg" alt="" />
                            <h4>Amanda Valentim</h4>
                            <p>Desenvolvedora Fullstack</p>
                            <div className='card'>
                                <p>“A Fox Soluctions foi pensada nos minímos detalhes, para auxiliar e tornar o processo de upload de documentos mais prático”</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-developers-item'>
                            <img src="/../images/desenvolvedor-gustavo.svg" alt="" />
                            <h4>Gustavo Otacílio</h4>
                            <p>Desenvolvedor Fullstack</p>
                            <div className='card'>
                                <p>“Programar essa plataforma foi uma experiência única, e só de imaginar que a Fox Soluctions vai mudar a forma como empresa e candidato interagem, já é uma grande vitória!”</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-developers-item'>
                            <img src="/../images/desenvolvedor-gabriel.svg" alt="" />
                            <h4>Gabriel Correia</h4>
                            <p>Desenvolvedor Fullstack</p>
                            <div className='card'>
                                <p>“Nossa plataforma oferece facilidade e praticidade no envio de documentos, por isso pensamos na raposa, o símbolo da inteligência e resolução de problemas.” </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </AboutUsComponent>
    );
    
}

export default AboutUs;