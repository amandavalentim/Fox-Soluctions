// Background feito por Gabriel Marques Correia

'use client';
import styled from '@emotion/styled';

const BackgroundComponent = styled.div`

    //Mobile Background

    background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
    position: relative;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover ;
    height: 100vh;

    // Tablet Background
    @media (min-width: 768px){
    background-image: url("/images/tablet.svg");
    height: 100vh;
    width: 100%;
    }

    // Small Screens Background
    @media (min-width: 992px){
    background-image: url("/images/background3.svg");
    height: 100vh;
    width: 100%;
    }

    // Medium Screens Background
    @media (min-width: 1200px){
    background-image: url("/images/background-2.svg"); 
    background-position: bottom;
    height: 100vh;
    width: 100%;
    }

    //Large Screens Background
    @media (min-width: 1600px) {
        background-image: url("/images/group-144.svg");
        height: 100vh;
        width: 100%;
    }
`;

const Background = function() {
    return(
        <BackgroundComponent>
        </BackgroundComponent>
    )
}

export default Background;

