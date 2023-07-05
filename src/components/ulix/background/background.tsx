'use client';
import styled from '@emotion/styled';

const BackgroundComponent = styled.div`
    background-image: url("/images/background2.svg");
    background-repeat: no-repeat;
    background-size: cover ;
    height: 100vh;
    background-position-y: 10000px;

    @media((min-width: 1024px) and (max-width: 1100px)){
    background-image: url("/images/background1.svg");
    background-color: #0A53B5;
    background-position-y: 25px;
    }

    @media((min-width: 1360px) and (max-width: 1460px)){
    background-image: url("/images/background3.svg");
    background-color: #0A53B5;
    background-position-y: 25px;
    }
    
    @media((min-width: 320px) and (max-width: 400px)){
    background-image: url("/images/mobile - cadastro.svg");
    background-repeat: no-repeat;
    }

    @media((min-width: 768px) and (max-width: 1000px)) {
    background-image: url("/images/tablet.svg");
    background-position-y: 35px;
    }
`;

const Background = function() {
    return(
        <BackgroundComponent>

        </BackgroundComponent>
    )
}

export default Background;

