'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BackgroundComponent = styled.body`
    background-color: #0A53B5;
    position: relative;
    width: 100%;
    height: 1200px;
        .hide-on-small-desktops {
        display: flex;
        justify-content: space-between;
    }
    .desktops-1024-1100-screens {
        display: none;
    }
    .desktop-1098-screens {
        display: none;
    }
    #img1 {
        position: absolute;
        top: 350px;
    }
    #img2-3 {
        position: absolute;
        top: -40px;
        left: -1px;
    }
    #img3 {   
        position: absolute;
        top: -5px;
        left: 935px;
    }
    #img4 {
        position: absolute;
        top: -5px;
        left: 1355px;
    }
    #img5-3 {
        position: absolute;
        top: 320px;
        left: 1283px;
    }
    #img6-3 {
        position: absolute;
        top: 660px;
        left: 1260px;
    }
    #img7-3 {
        position: absolute;
        top: 595px;
        left: 635px;
    }
    #img8-2 {
        position: absolute;
        top: 720px;
    }
    #img9-3 {
        position: absolute;
        left: 740px;
        top: 760px;
    }
    #img10 {
        position: absolute;
        top: -35px;
        left: 435px;
    }
    #img11 {
        position: absolute;
        top: 770px;
        left: 230px;
        transition: tranform 1s;
    }
    #img12 {
        position: absolute;
        top: 670px;
        left: 310px;
    }
    #img13 {
        position: absolute;
        top: 505px;
        left: 290px;
    }
    
    #img14 {
        position: absolute;
        top: 370px;
        left: 220px;
    }
    #img15 {
        position: absolute;
        top: 90px;
        left: 120px;
    }
    #img16 {
        position: absolute;
        top: -15px;
        left: 300px;
    }
        
    @media ((min-width: 1024px) and (max-width: 1180px)){
        .hide-on-small-desktops {
        display: none;
    }
    .desktops-1024-1100-screens {
        display: flex;
        justify-content: space-between;
    }
    .desktop-1098-screens {
        display: none;
    }
    #img1 {
        position: absolute;
        top: 380px;
        width: 250px;
        height: 190px;
        }
    #img2-3 {
        position: absolute;
        top: -25px;
        left: 1px;
        width: 150px;
        height: 210px;
    }
    #img3 {   
        position: absolute;
        top: -5px;
        left: 610px;
        width: 230px;
        height: 80px;
    }
    #img4 {
        position: absolute;
        top: -5px;
        left: 853px;
        width: 280px;
        height: 250px;
    }
    #img5-3 {
        position: absolute;
        top: 425px;
        left: 783px;
        width: 240px;
        height: 130px;
    }
    #img6-3 {
        position: absolute;
        top: 700px;
        left: 773px;
        width: 250px;
        height: 220px;
    }
    #img7-3 {
        position: absolute;
        top: 620px;
        left: 420px;
        width: 310px;
        height: 380px;
    }
    #img8-2 {
        position: absolute;
        top: 710px;
        width: 390px;
        height: 200px;
    }
    #img9-3 {
        position: absolute;
        left: 490px;
        top: 775px;
        width: 160px;
        height: 160px;
    }
    #img10 {
        position: absolute;
        left: 210px;
    }
    }

    @media((min-width: 1360px) and (max-width: 1550px)) {
    .hide-on-small-desktops {
        display: none;
    }
    .desktops-1024-1100-screens {
        display: none;
    }
    .desktop-1098-screens {
        display: flex;
        justify-content: space-between;
    }
    #img3 {
        position: absolute;
        left: 840px;
    }
    #img4 {
        position: absolute;
        left: 1100px;
    }
    #img5-3 {
        position: absolute;
        left: 1060px;
        width: 300px;
    }
    #img6-3 {
        position: absolute;
        left: 1040px;
    }
    #img7-3 {
        position: absolute;
        left: 600px;
    }
    #img8-2 {
        position: absolute;
        width: 560px;
    }
    #img9-3 {
        position: absolute;
        left: 710px;
    }
    #img10 {
        position: absolute;
        left: 330px;
    }
}
`;

const Background = function() {
    return(
        <BackgroundComponent>
            
            <nav className='hide-on-small-desktops'>
                <Image src="/images/Ellipse-1.png" width={390} height={225} alt='img-1' id='img1'/>
                <Image src="/images/Rectangle-21.png" width={175} height={285} alt='img-2' id='img2-3'/>
                <Image src="/images/Ellipse-5.png" width={200} height={65} alt='img-3.8' id='img3'/>
                <Image src="/images/header.png" width={270} height={225} alt='img-4' id='img4'/>
                <Image src="/images/Ellipse-8.png" width={350} height={165} alt='img-5' id='img5-3'/>
                <Image src="/images/Ellipse-9.png" width={325} height={290} alt='img-6' id='img6-3'/>
                <Image src="/images/Ellipse-7.png" width={400} height={455} alt='img-7' id='img7-3'/>
                <Image src="/images/Ellipse-6-1.png" width={450} height={180} alt='img-8' id='img8-2'/>
                <Image src="/images/Stella.png" width={180} height={180} alt='img-9' id='img9-3'/>
                <Image src="/images/Ellipse-18.png" width={230} height={80} alt='img-10' id='img10'/>
                <Image src="/images/fox_paw-4.png" width={140} height={140} alt='img-11' id='img11'/>
                <Image src="/images/fox_paw-5.png" width={140} height={140} alt='img-12' id='img12'/>
                <Image src="/images/fox_paw-6.png" width={180} height={180} alt='img-13' id='img13'/>
                <Image src="/images/fox_paw6-2.png" width={190} height={190} alt='img-14' id='img14'/>
                <Image src="/images/fox_paw2-4.png" width={320} height={320} alt='img-15' id='img15'/>
                <Image src="/images/fox_paw-1.png" width={180} height={180} alt='img-16' id='img16'/>
            </nav>

            <nav className='desktops-1024-1100-screens'>
                <Image src="/images/Ellipse-1.png" width={390} height={225} alt='img-1' id='img1'/>
                <Image src="/images/Rectangle-21.png" width={175} height={285} alt='img-2' id='img2-3'/>
                <Image src="/images/Ellipse-5.png" width={200} height={65} alt='img-3.8' id='img3'/>
                <Image src="/images/header.png" width={270} height={225} alt='img-4' id='img4'/>
                <Image src="/images/Ellipse-8.png" width={350} height={165} alt='img-5' id='img5-3'/>
                <Image src="/images/Ellipse-9.png" width={325} height={290} alt='img-6' id='img6-3'/>
                <Image src="/images/Ellipse-7.png" width={400} height={455} alt='img-7' id='img7-3'/>
                <Image src="/images/Ellipse-6-1.png" width={450} height={180} alt='img-8' id='img8-2'/>
                <Image src="/images/Stella.png" width={180} height={180} alt='img-9' id='img9-3'/>
                <Image src="/images/Ellipse-18.png" width={230} height={90} alt='img-10' id='img10'/>
                <Image src="/images/fox_paw-4.png" width={140} height={140} alt='img-11' id='img11'/>
                <Image src="/images/fox_paw-5.png" width={140} height={140} alt='img-12' id='img12'/>
                <Image src="/images/fox_paw-6.png" width={180} height={180} alt='img-13' id='img13'/>
                <Image src="/images/fox_paw6-2.png" width={190} height={190} alt='img-14' id='img14'/>
                <Image src="/images/fox_paw2-4.png" width={320} height={320} alt='img-15' id='img15'/>
                <Image src="/images/fox_paw-1.png" width={180} height={180} alt='img-16' id='img16'/>
            </nav>

            <nav className='desktop-1098-screens'>
                <Image src="/images/Ellipse-1.png" width={390} height={225} alt='img-1' id='img1'/>
                <Image src="/images/Rectangle-21.png" width={175} height={285} alt='img-2' id='img2-3'/>
                <Image src="/images/Ellipse-5.png" width={200} height={65} alt='img-3.8' id='img3'/>
                <Image src="/images/header.png" width={270} height={225} alt='img-4' id='img4'/>
                <Image src="/images/Ellipse-8.png" width={350} height={165} alt='img-5' id='img5-3'/>
                <Image src="/images/Ellipse-9.png" width={325} height={290} alt='img-6' id='img6-3'/>
                <Image src="/images/Ellipse-7.png" width={400} height={455} alt='img-7' id='img7-3'/>
                <Image src="/images/Ellipse-6-1.png" width={450} height={180} alt='img-8' id='img8-2'/>
                <Image src="/images/Stella.png" width={180} height={180} alt='img-9' id='img9-3'/>
                <Image src="/images/Ellipse-18.png" width={230} height={80} alt='img-10' id='img10'/>
                <Image src="/images/fox_paw-4.png" width={140} height={140} alt='img-11' id='img11'/>
                <Image src="/images/fox_paw-5.png" width={140} height={140} alt='img-12' id='img12'/>
                <Image src="/images/fox_paw-6.png" width={180} height={180} alt='img-13' id='img13'/>
                <Image src="/images/fox_paw6-2.png" width={190} height={190} alt='img-14' id='img14'/>
                <Image src="/images/fox_paw2-4.png" width={320} height={320} alt='img-15' id='img15'/>
                <Image src="/images/fox_paw-1.png" width={180} height={180} alt='img-16' id='img16'/>
            </nav>
            
        </BackgroundComponent>
    )
}

export default Background;