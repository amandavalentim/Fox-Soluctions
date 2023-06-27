'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BackgroundComponent = styled.body`
    background-color: #0A53B5;
    #img1 {
        position: absolute;
        top: 420px;
    }
    #img2 {
        position: absolute;
        top: 95px;
        left: -1px;
    }
    #img3 {   
        position: absolute;
        top: 132px;
        left: 735px;
    }
    #img4 {
        position: absolute;
        top: 135px;
        left: 1355px;
    }
    #img5 {
        position: absolute;
        top: 270px;
        left: 280px;
    }
    #img6 {
        position: absolute;
        top: 250px;
        left: 970px;
    }
    #img7 {
        position: absolute;
        top: 525px;
        left: 1050px;
    }
`;

const Background = function() {
    return(
        <BackgroundComponent>
            <Image src="/images/Ellipse 1.png" width={310} height={225} alt='img-1' id='img1'/>
            <Image src="/images/Rectangle 20.png" width={165} height={200} alt='img-2' id='img2'/>
            <Image src="/images/Ellipse 5-8.png" width={200} height={65} alt='img-3.8' id='img3'/>
            <Image src="/images/header.png" width={270} height={225} alt='img-4' id='img4'/>
            <Image src="/images/Ellipse 2.png" width={265} height={200} alt='img-5' id='img5'/>
            <Image src="/images/Ellipse 3.png" width={400} height={200} alt='img-6' id='img6'/>
            <Image src="/images/Ellipse 8.png" width={200} height={95} alt='img-7' id='img7'/>
        </BackgroundComponent>
    )
}

export default Background;