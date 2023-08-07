'use client';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const AboutUsComponent = styled.section`
    background-color: #0A53B5;


`;

const AboutUs = function (){

    return(
        <AboutUsComponent>
            <div className='container-about-us'>
                <h3>Sobre Nós</h3>
                <div className='content-center'>
                    <p>A Fox Soluctions foi fundada no ano de 2023 e foi desenvolvida para facilitar e auxiliar Pessoas que utilizam nossa plataforma a realizarem o upload e a visualização de documentos de maneira prática, com o objetivo de inovar e trazer criatividade em sua identidade visual.</p>
                </div>
            </div>
            <div className="container-company">
                <Carousel>
                    <Carousel.Item>
                        <h3>Missão</h3>
                        <div className='mission-card'>
                            <p>Facilitar o cotidiano de Pessoas, sendo um sistema intuitivo e com o objetivo de favorecer a  sustentabilidade, diminuindo o uso de papéis físicos</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Visão</h3>
                        <div className='vision-card'>
                            <p>Conseguir atingir o máximo de Pessoas possíveis e ser uma das principais plataformas, a ser utilizada por grandes empresas</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Valores</h3>
                        <div className='worth-card'>
                            <p>Inovação</p>
                            <p>Criatividade</p>
                            <p>Respeito a natureza</p>
                            <p>Respeito a diversidade</p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='container-visual-identity'>
                <div className="container-why-the-fox">
                    <h3>Por que a Raposa?</h3>
                    <p>Escolhemos a raposa como representação da nossa plataforma, pois este animal possui o símbolo de criatividade, inteligência e solução de problemas. O que queremos transparecer em nosso sistema.</p>
                </div>
                <div className="color-palette">
                    <h3>Nossa Paleta de cores: </h3>
                    <img src="/../images/paleta-de-cores.png" alt="" />
                </div>
            </div>
            <div className="container-developers">
                <h3>Desenvolvedores</h3>
                <Carousel>
                    <Carousel.Item>
                        <h3>Amanda Valentim</h3>
                        <div className='amanda-card'>
                            <p>Facilitar o cotidiano de Pessoas, sendo um sistema intuitivo e com o objetivo de favorecer a  sustentabilidade, diminuindo o uso de papéis físicos</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Gustavo Otacílio</h3>
                        <div className='gustavo-card'>
                            <p>Conseguir atingir o máximo de Pessoas possíveis e ser uma das principais plataformas, a ser utilizada por grandes empresas</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Gabriel Correia</h3>
                        <div className='gabriel-card'>
                            <p>Inovação</p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </AboutUsComponent>
    );
    
}

export default AboutUs;