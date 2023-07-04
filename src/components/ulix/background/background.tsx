'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BackgroundComponent = styled.html`
    background-image: url("/images/background2.svg");
    position: relative;
    background-color: #0A53B5;
    background-repeat: no-repeat;
    background-size: cover ;

    @media((min-width: 1024px) and (max-width: 1100px)){
    background-image: url("/images/background1.svg");
    background-color: #0A53B5;
    background-size: cover ;
    background-position-y: 10px;
    }
`;

const Background = function() {
    return(
        <BackgroundComponent>

        </BackgroundComponent>
    )
}

export default Background;

