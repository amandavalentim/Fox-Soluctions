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
    #img1 {
        position: absolute;
        top: 910px;
        left: 230px;
        
    }
    #img2 {
        position: absolute;
        top: 800px;
        left: 310px;
    }
    #img3 {
        position: absolute;
        top: 690px;
        left: 310px;
    }

    @media((min-width: 1024px) and (max-width: 1100px)) {
    .hide-on-small-desktops {
        display: none;
    }
    .desktop-1024 {
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
                <Image src="/images/fox_paw-3.png" width={10} height={150} alt='img-3' id='img3'/>
            </div>
            <div className='desktop-1024'>
                
            </div>
            
        </BodyComponent>
    )
}

export default Body;

