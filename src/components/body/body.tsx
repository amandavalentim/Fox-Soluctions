'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BodyComponent = styled.body`
    .hide-on-small-desktops {
        display: flex;
        justify-content: space-between;
    }
    .desktop-1024 {
        display: none;
    }
    .mobile {
        display: none;
    }
    #img1 {
        position: absolute;
        top: 920px;
        left: 120px;
        
    }
    #img2 {
        position: absolute;
        top: 810px;
        left: 200px;
    }
    #img3 {
        position: absolute;
        top: 650px;
        left: 180px;
    }
    #img4 {
        position: absolute;
        top: 390px;
        left: 80px;
    }
    #img5 {
        position: absolute;
        top: 310px;
        left: 260px;
    }
    #img6 {
        position: absolute;
        top: 210px;
        left: 340px;
    }
    #img7 {
        position: absolute;
        top: 150px;
        left: 380px;
    }
    #img8 {
        position: absolute;
        top: 130px;
        left: 1280px;
    }
    #img9 {
        position: absolute;
        top: 260px;
        left: 1280px;
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
    }

    @media((min-width: 320px) and (max-width: 640px)) {
        .hide-on-small-desktops {
        display: none;
    }
    .desktop-1024 {
        display: none;
    }
    .mobile {
        display: flex;
        justify-content: space-between;
    }
    }
`;

const Body = function() {
    return(
        <BodyComponent>
            
            <div className='hide-on-small-desktops'>
                <Image src="/images/fox_paw1.png" width={130} height={130} alt='img-1' id='img1'/>
                <Image src="/images/fox_paw-2.png" width={130} height={130} alt='img-2' id='img2'/>
                <Image src="/images/fox_paw-3.png" width={170} height={170} alt='img-3' id='img3'/>
                <Image src="/images/fox_paw4.png" width={300} height={300} alt='img-4' id='img4'/>
                <Image src="/images/fox_paw8.png" width={150} height={150} alt='img-5' id='img5'/>
                <Image src="/images/fox_paw-2.png" width={130} height={130} alt='img-6' id='img6'/>
                <Image src="/images/fox_paw10.png" width={100} height={100} alt='img-7' id='img7'/>
                <Image src="/images/fox_paw11.png" width={155} height={155} alt='img-8' id='img8'/>
                <Image src="/images/fox_paw12.png" width={155} height={155} alt='img-9' id='img9'/>
            </div>

            <div className='desktop-1024'>
                
            </div>

            <div className='mobile'>
                
            </div>
            
        </BodyComponent>
    )
}

export default Body;

