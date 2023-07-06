'use client';
import styled from '@emotion/styled';

const BackgroundComponent = styled.div`
    background-color: linear-gradient(180deg, #0A53B5 0%, #07B3FD 100%);
    background-repeat: no-repeat;
    background-size: cover ;
    height: 100vh;
    

    @media (min-width: 768px){
    background-image: url("/images/background-tablet-2.svg");
    background-position-y: -85px;
    }

    @media (min-width: 992px){
    background-image: url("/images/background3.svg");
    background-position-y: -110px;
    }

    @media (min-width: 1200px){
    background-image: url("/images/background-2.svg");
    background-position-y: -110px;
    }

    @media (min-width: 1600px) {
        background-image: url("/images/background-tall-screens.svg");
        background-position-y: -100px;
    }
`;

const Background = function() {
    return(
        <BackgroundComponent>

        </BackgroundComponent>
    )
}

export default Background;

