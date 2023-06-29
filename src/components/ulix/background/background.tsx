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
        top: 420px;
    }
    #img2 {
        position: absolute;
        top: -40px;
        left: -1px;
    }
    #img3 {   
        position: absolute;
        top: -5px;
        left: 735px;
    }
    #img4 {
        position: absolute;
        top: -5px;
        left: 1355px;
    }
    #img5 {
        position: absolute;
        top: 280px;
        left: 165px;
    }
    #img6 {
        position: absolute;
        top: 220px;
        left: 958px;
    }
    #img7 {
        position: absolute;
        top: 500px;
        left: 1150px;
    }
    #img8 {
        position: absolute;
        top: 660px;
        left: 1320px;
    }
    #img9 {
        position: absolute;
        top: 655px;
        left: 635px;
    }
    #img10 {
        position: absolute;
        top: 720px;
    }
    #img11 {
        position: absolute;
        left: 200px;
        top: -10px;
    }
    #img12 {
        position: absolute;
        left: 750px;
        top: 805px;
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
        top: 430px;
        width: 300px;
        height: 250px;
        }
    #img2 {
        position: absolute;
        top: -25px;
        left: 1px;
        width: 150px;
        height: 250px;
    }
    #img3 {   
        position: absolute;
        top: -5px;
        left: 410px;
        width: 230px;
        height: 90px;
    }
    #img4 {
        position: absolute;
        top: -5px;
        left: 853px;
        width: 280px;
        height: 250px;
    }
    #img5 {
        position: absolute;
        top: 320px;
        left: 210px;
        width: 265px;
        height: 180px;
    }
    #img6 {
        position: absolute;
        top: 280px;
        left: 563px;
        width: 360px;
        height: 180px;
    }
    #img7 {
        position: absolute;
        top: 525px;
        left: 723px;
        width: 170px;
        height: 90px;
    }
    #img8 {
        position: absolute;
        top: 700px;
        left: 773px;
        width: 250px;
        height: 220px;
    }
    #img9 {
        position: absolute;
        top: 720px;
        left: 420px;
        width: 320px;
        height: 320px;
    }
    #img10 {
        position: absolute;
        top: 780px;
        width: 350px;
        height: 120px;
    }
    #img11 {
        position: absolute;
        left: 200px;
        top: 120px;
        width: 100px;
        height: 100px;
    }
    #img12 {
        position: absolute;
        left: 460px;
        top: 805px;
        width: 130px;
        height: 130px;
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
        #img1 {
        position: absolute;
        top: 370px;
        width: 360px;
        height: 220px;
        }
    #img2 {
        position: absolute;
        top: -25px;
        left: -1px;
        width: 150px;
        height: 230px;
    }
    #img3 {   
        position: absolute;
        top: -5px;
        left: 605px;
        width: 230px;
        height: 60px;
    }
    #img4 {
        position: absolute;
        top: -5px;
        left: 1153px;
        width: 250px;
        height: 190px;
    }
    #img5 {
        position: absolute;
        top: 230px;
        left: 200px;
        width: 230px;
        height: 190px;
    }
    #img6 {
        position: absolute;
        top: 200px;
        left: 83=90px;
        width: 400px;
        height: 215px;
    }
    #img7 {
        position: absolute;
        top: 465px;
        left: 1015px;
        width: 235px;
        height: 95px;
    }
    #img8 {
        position: absolute;
        top: 625px;
        left: 1023px;
        width: 340px;
        height: 310px;
    }
    #img9 {
        position: absolute;
        top: 580px;
        left: 525px;
        width: 420px;
        height: 440px;
    }
    #img10 {
        position: absolute;
        top: 690px;
        width: 490px;
        height: 210px;
    }
    #img11 {
        position: absolute;
        left: 120px;
        top: 5px;
        width: 1200px;
        height: 1150px;
    }
    #img12 {
        position: absolute;
        left: 650px;
        top: 760px;
        width: 180px;
        height: 180px;
    }
    }
`;

const Background = function() {
    return(
        <BackgroundComponent>
            
            <nav className='hide-on-small-desktops'>
                <Image src="/images/Ellipse-1.png" width={310} height={225} alt='img-1' id='img1'/>
                <Image src="/images/Rectangle-20.png" width={165} height={200} alt='img-2' id='img2'/>
                <Image src="/images/Ellipse-5.png" width={200} height={65} alt='img-3.8' id='img3'/>
                <Image src="/images/header.png" width={270} height={225} alt='img-4' id='img4'/>
                <Image src="/images/Ellipse-2-1.png" width={265} height={200} alt='img-5' id='img5'/>
                <Image src="/images/Ellipse-3-1.png" width={400} height={200} alt='img-6' id='img6'/>
                <Image src="/images/Ellipse-8.png" width={200} height={95} alt='img-7' id='img7'/>
                <Image src="/images/Ellipse-4.png" width={265} height={200} alt='img-8' id='img8'/>
                <Image src="/images/Ellipse-7.png" width={350} height={425} alt='img-9' id='img9'/>
                <Image src="/images/Ellipse-6-1.png" width={450} height={180} alt='img-10' id='img10'/>
                <Image src="/images/Stella.png" width={130} height={130} alt='img-12' id='img12'/>
            </nav>

            <nav className='desktops-1024-1100-screens'>
                <Image src="/images/Ellipse-1.png" width={310} height={225} alt='img-1' id='img1'/>
                <Image src="/images/Rectangle-20.png" width={165} height={200} alt='img-2' id='img2'/>
                <Image src="/images/Ellipse-5.png" width={200} height={65} alt='img-3.8' id='img3'/>
                <Image src="/images/header.png" width={270} height={225} alt='img-4' id='img4'/>
                <Image src="/images/Ellipse-2-1.png" width={265} height={200} alt='img-5' id='img5'/>
                <Image src="/images/Ellipse-3-1.png" width={400} height={200} alt='img-6' id='img6'/>
                <Image src="/images/Ellipse-8.png" width={200} height={95} alt='img-7' id='img7'/>
                <Image src="/images/Ellipse-4.png" width={265} height={200} alt='img-8' id='img8'/>
                <Image src="/images/Ellipse-7.png" width={350} height={425} alt='img-9' id='img9'/>
                <Image src="/images/Ellipse-6-1.png" width={450} height={180} alt='img-10' id='img10'/>
                <Image src="/images/Stella.png" width={130} height={130} alt='img-12' id='img12'/>
            </nav>

            <nav className='desktop-1098-screens'>
            <Image src="/images/Ellipse-1.png" width={310} height={225} alt='img-1' id='img1'/>
                <Image src="/images/Rectangle-20.png" width={165} height={200} alt='img-2' id='img2'/>
                <Image src="/images/Ellipse-5.png" width={200} height={65} alt='img-3.8' id='img3'/>
                <Image src="/images/header.png" width={270} height={225} alt='img-4' id='img4'/>
                <Image src="/images/Ellipse-2-1.png" width={265} height={200} alt='img-5' id='img5'/>
                <Image src="/images/Ellipse-3-1.png" width={400} height={200} alt='img-6' id='img6'/>
                <Image src="/images/Ellipse-8.png" width={200} height={95} alt='img-7' id='img7'/>
                <Image src="/images/Ellipse-4.png" width={265} height={200} alt='img-8' id='img8'/>
                <Image src="/images/Ellipse-7.png" width={350} height={425} alt='img-9' id='img9'/>
                <Image src="/images/Ellipse-6-1.png" width={450} height={180} alt='img-10' id='img10'/>
                <Image src="/images/Stella.png" width={130} height={130} alt='img-12' id='img12'/>
            </nav>
            
        </BackgroundComponent>
    )
}

export default Background;