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
        top: 910px;
        left: 100px;
        
    }
    #img2 {
        position: absolute;
        top: 800px;
        left: 180px;
    }
    #img3 {
        position: absolute;
        top: 640px;
        left: 160px;
    }
    #img4 {
        position: absolute;
        top: 360px;
        left: 60px;
    }
    #img5 {
        position: absolute;
        top: 60px;
        left: 160px;
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
                <Image src="/images/fox_paw1.png" width={150} height={150} alt='img-1' id='img1'/>
                <Image src="/images/fox_paw-2.png" width={150} height={150} alt='img-2' id='img2'/>
                <Image src="/images/fox_paw-3.png" width={190} height={190} alt='img-3' id='img3'/>
                <Image src="/images/fox_paw4.png" width={320} height={320} alt='img-4' id='img4'/>
                <Image src="/images/fox_paw6.png" width={320} height={320} alt='img-5' id='img5'/>
            </div>

            <div className='desktop-1024'>
                
            </div>

            <div className='mobile'>
                
            </div>
            
        </BodyComponent>
    )
}

export default Body;

