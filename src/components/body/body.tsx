'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BodyComponent = styled.body`
    #img1 {
        position: absolute;
        top: 50px;
    }
`;

const Body = function() {
    return(
        <BodyComponent>
            
            <div className='hide-on-small-desktops'>
                <Image src="/images/fox_paw1.png" width={140} height={140} alt='img-1' id='img1'/>
            </div>
            
        </BodyComponent>
    )
}

export default Body;

