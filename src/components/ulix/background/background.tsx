'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BackgroundComponent = styled.body`
    background-color: #0A53B5;
    #img1 {
        position: absolute;
        top: 390px;
    }
    #img2 {
        position: absolute;
        top: 95px;
        left: -1px;
    }
    #img3 {
        position: absolute;
        top: 130px;
        left: 735px;
    }
    #img4 {
        position: absolute;
        top: 1355px;
        left: 1355px;
    }
`;



const Background = function() {
    return(
        <BackgroundComponent>
                <div id='img1'>
                    <Image src="/images/Ellipse-1.png" width={310} height={225} alt='img-1'/>
                </div>
                <div id='img2'>
                    <Image src="/images/Rectangle 20.png" width={165} height={200} alt='img-2'/>
                </div>
                <div id='img3'>
                    <Image src="/images/Ellipse 5-8.png" width={200} height={65} alt='img-3.8'/>
                </div>
                <div id='img4'>
                    <Image src="/images/header.png" width={270} height={225} alt='img-4'/>
                </div>
        </BackgroundComponent>
    )
}

export default Background;