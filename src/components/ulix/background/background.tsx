'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BackgroundComponent = styled.html`
    background-image: url("/images/background2.svg");
    background-repeat: no-repeat;
    background-size: cover ;
    height: 100vh;
    background-position-y: -130px;

    @media((min-width: 1024px) and (max-width: 1100px)){
    background-image: url("/images/background.svg");
    background-color: #0A53B5;
    background-position-y: -105px;
    }

    @media((min-width: 1360px) and (max-width: 1460px)){
    background-image: url("/images/background3.svg");
    background-color: #0A53B5;
    background-position-y: -145px;
    }
    
    @media((min-width: 320px) and (max-width: 500px)){
    background-image: url("/images/mobile - cadastro.svg");
    background-repeat: no-repeat;
    }

    @media((min-width: 768px) and (max-width: 1000px)) {
    background-image: url("/images/tablet1.svg");
    background-position-y: -85px;
    }
`;
const BodyComponent = styled.body`
    .hide-on-small-desktops {
        display: flex;
        justify-content: space-between;
    }
    .desktop-1024 {
        display: none;
    }
    .desktop-1360 {
        display: none;
    }
    .mobile {
        display: none;
    }
    .tablet {
        display: none;
    }
    #img1 {
        position: absolute;
        top: 920px;
        left: 70px;
        
    }
    #img2 {
        position: absolute;
        top: 810px;
        left: 150px;
    }
    #img3 {
        position: absolute;
        top: 650px;
        left: 130px;
    }
    #img4 {
        position: absolute;
        top: 390px;
        left: 30px;
    }
    #img5 {
        position: absolute;
        top: 310px;
        left: 210px;
    }
    #img6 {
        position: absolute;
        top: 210px;
        left: 290px;
    }
    #img7 {
        position: absolute;
        top: 150px;
        left: 330px;
    }
    #img8 {
        position: absolute;
        top: 130px;
        left: 1280px;
    }
    #img9 {
        position: absolute;
        top: 240px;
        left: 1220px;
    }
    #img10 {
        position: absolute;
        top: 370px;
        left: 1250px;
    }
    #img11 {
        position: absolute;
        top: 480px;
        left: 1250px;
    }
    #img12 {
        position: absolute;
        top: 720px;
        left: 1290px;
    }
    #img13 {
        position: absolute;
        top: 800px;
        left: 740px;
    }

    @media((min-width: 1024px) and (max-width: 1100px)) {
    .hide-on-small-desktops {
        display: none;
    }
    .desktop-1024 {
        display: flex;
        justify-content: space-between;
    }
    .mobile {
        display: none;
    }
    .tablet {
        display: none;
    }
    .desktop-1360 {
        display: none;
    }
    #img1 {
        position: absolute;
        top: 680px;
        left: 20px;
    }
    }

    @media((min-width: 1360px) and (max-width: 1500px)) {
    .hide-on-small-desktops {
        display: none;
    }
    .desktop-1024 {
        display: none;
    }
    .mobile {
        display: none;
    }
    .tablet {
        display: none;
    }
    .desktop-1360 {
        display: flex;
        justify-content: space-between;
    }
    }

    @media((min-width: 320px) and (max-width: 500px)) {
        .hide-on-small-desktops {
        display: none;
    }
    .desktop-1024 {
        display: none;
    }
    .desktop-1360 {
        display: none;
    }
    .mobile {
        display: flex;
        justify-content: space-between;
    }
    .mobile {
        display: none;
    }
    }

    @media((min-width: 768px) and (max-width: 1000px)) {
        .hide-on-small-desktops {
        display: none;
    }
    .desktop-1024 {
        display: none;
    }
    .desktop-1360 {
        display: none;
    }
    .mobile {
        display: none;
    }
    .tablet {
        display: flex;
        justify-content: space-between;
    }
    }
`;

const Background = function() {
    return(
        <BackgroundComponent>

            <BodyComponent>
            
                <div className='hide-on-small-desktops'>
                    <Image src="/images/fox_paw1.png" width={130} height={130} alt='img-1' id='img1'/>
                    <Image src="/images/fox_paw-2.png" width={130} height={130} alt='img-2' id='img2'/>
                    <Image src="/images/fox_paw-3.png" width={170} height={170} alt='img-3' id='img3'/>
                    <Image src="/images/fox_paw4.png" width={300} height={300} alt='img-4' id='img4'/>
                    <Image src="/images/fox_paw8.png" width={150} height={150} alt='img-5' id='img5'/>
                    <Image src="/images/fox_paw-2.png" width={130} height={130} alt='img-6' id='img6'/>
                    <Image src="/images/fox_paw10.png" width={100} height={100} alt='img-7' id='img7'/>
                    <Image src="/images/fox_paw11.png" width={145} height={145} alt='img-8' id='img8'/>
                    <Image src="/images/fox_paw12.png" width={145} height={145} alt='img-9' id='img9'/>
                    <Image src="/images/fox_paw-13.png" width={135} height={135} alt='img-10' id='img10'/>
                    <Image src="/images/fox_paw14.png" width={290} height={290} alt='img-11' id='img11'/>
                    <Image src="/images/fox_paw15-2.png" width={190} height={190} alt='img-12' id='img12'/>
                    <Image src="/images/Stella.png" width={150} height={150} alt='img-13' id='img13'/>
            </div>

            <div className='desktop-1024'>
                <Image src="/images/fox_paw1.png" width={110} height={110} alt='img-1' id='img1'/>
            </div>

            <div className='desktop-1360'>
                
            </div>

            <div className='mobile'>
                
            </div>

            <div className='tablet'>
                
            </div>
            
            </BodyComponent>

        </BackgroundComponent>
    )
}

export default Background;

