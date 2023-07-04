'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BodyComponent = styled.body`
    #img1 {
        position: absolute;
        top: 910px;
        left: 200px;
        
    }
    #img2 {
        position: absolute;
        top: 800px;
        left: 310px;
    }
`;

const Body = function() {
    return(
        <BodyComponent>
            
            <div className='hide-on-small-desktops'>
                <Image src="/images/fox_paw1.png" width={150} height={150} alt='img-1' id='img1'/>
                <Image src="/images/fox_paw-2.png" width={150} height={150} alt='img-2' id='img2'/>
            </div>
            
        </BodyComponent>
    )
}

export default Body;

