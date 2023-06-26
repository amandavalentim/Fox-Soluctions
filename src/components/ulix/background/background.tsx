'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BackgroundComponent = styled.body`
    background-color: #0A53B5;
`;

const Imgs1 = styled.div`
    position: absolute;
    top: 390px;
`;
const Imgs2 = styled.div`
    position: absolute;
    top: 95px;
    left: -1px;
`;
const Imgs3 = styled.div`
    position: absolute;
    top: 80px;
    left: 755px;
`;
const Imgs4 = styled.div`
    position: absolute;
    top: 270px;
    left: 295px;
`;
const Imgs5 = styled.div`
    position: absolute;
    top: 270px;
    left: 295px;
`;
const Imgs6 = styled.div`
    position: absolute;
    top: 270px;
    left: 295px;
`;
const Imgs7 = styled.div`
    position: absolute;
    top: 270px;
    left: 295px;
`;
const Imgs8 = styled.div`
    position: absolute;
    top: 270px;
    left: 295px;
`;
const Imgs9 = styled.div`
    position: absolute;
    top: 270px;
    left: 295px;
`;

const Background = function() {
    return(
        <BackgroundComponent>
            <Imgs1>
                <Image src="/images/Ellipse 1.png" width={310} height={225} alt='img-1'/>
            </Imgs1>
            <Imgs2>
                <Image src="/images/Rectangle 20.png" width={165} height={200} alt='img-2'/>
            </Imgs2>
            <Imgs3>
                <Image src="/images/Ellipse 5.png" width={200} height={115} alt='img-3' />
            </Imgs3>
        </BackgroundComponent>
    )
}

export default Background;