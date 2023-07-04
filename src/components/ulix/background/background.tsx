'use client';
import styled from '@emotion/styled';

const BackgroundComponent = styled.body`
    background-image: url("/images/background3.svg");
    background-color: #0A53B5;
    background-repeat: no-repeat;
    background-size: 100% ;
`;

const Background = function() {
    return(
        <BackgroundComponent>
            
        </BackgroundComponent>
    )
}

export default Background;

