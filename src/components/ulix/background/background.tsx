'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BackgroundComponent = styled.body`
    background-color: #0A53B5;
`;

const Background = function() {
    return(
        <BackgroundComponent>
            <div>
                <Image src="/images/Group 77.png" width={81} height={104} alt="background" />
            </div>
        </BackgroundComponent>
    )
}

export default Background;