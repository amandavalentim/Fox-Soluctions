'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BackgroundComponent = styled.html`
    background-image: url("/images/background2.svg");
    background-repeat: no-repeat;
    background-size: 100% ;

    @media((min-width: 1024px) and (max-width: 1100px)){
    background-image: url("/images/background1-2.svg");
    background-color: #0A53B5;
    background-position-y: 25px;
    }

    @media((min-width: 320px) and (max-width: 640px)) {
        background: linear-gradient(180deg, #0A53B5 0%, #07B3FD 100%);
        height: 1200px;
    }
`;

const Background = function() {
    return(
        <BackgroundComponent>

        </BackgroundComponent>
    )
}

export default Background;

