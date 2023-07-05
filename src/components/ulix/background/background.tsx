'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BackgroundComponent = styled.div`
    background-repeat: no-repeat;
    background-size: cover ;
    height: 100vh;
    background-color: linear-gradient(180deg, #0A53B5 0%, #07B3FD 100%);

    @media (min-width: 768px){
    background-image: url("/images/background.svg");
    background-position-y: -105px;
    }

    @media (min-width: 992px){
    background-image: url("/images/background3.svg");
    background-position-y: -110px;
    }
`;

const Background = function() {
    return(
        <BackgroundComponent>

        </BackgroundComponent>
    )
}

export default Background;

