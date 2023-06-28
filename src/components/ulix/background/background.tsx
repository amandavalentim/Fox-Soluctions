'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BackgroundComponent = styled.body`
    background-color: #0A53B5;
    position: relative;
    width: 100%;
    height: 1200px;
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
        left: 280px;
    }
    #img6 {
        position: absolute;
        top: 220px;
        left: 970px;
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

    @media ((min-width: 1024px)){
    #img1 {
        position: absolute;
        top: 220px;
        width: 180px;
        height: 130px;
        }
    #img2 {
        position: absolute;
        top: -25px;
        left: 1px;
        width: 120px;
        height: 120px;
    }
    #img3 {   
        position: absolute;
        top: -5px;
        left: 430px;
        width: 180px;
        height: 50px;
    }
    #img4 {
        position: absolute;
        top: -5px;
        left: 853px;
        width: 180px;
        height: 150px;
    }
    #img5 {
        position: absolute;
        top: 120px;
        left: 160px;
        width: 185px;
        height: 120px;
    }
    #img6 {
        position: absolute;
        top: 150px;
        left: 623px;
        width: 250px;
        height: 130px;
    }
    #img7 {
        position: absolute;
        top: 325px;
        left: 723px;
        width: 140px;
        height: 70px;
    }
    #img8 {
        position: absolute;
        top: 650px;
        left: 923px;
        width: 100px;
        height: 100px;
    }
    #img9 {
        position: absolute;
        top: 420px;
        left: 415px;
        width: 220px;
        height: 220px;
    }
    #img10 {
        position: absolute;
        top: 460px;
        width: 250px;
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
        left: 550px;
        top: 505px;
        width: 100px;
        height: 100px;
    }
    }

    @media ((min-width: 1114px)){
        #img1 {
        position: absolute;
        top: 370px;
        width: 280px;
        height: 190px;
        }
    #img2 {
        position: absolute;
        top: -25px;
        left: 1px;
        width: 130px;
        height: 180px;
    }
    #img3 {   
        position: absolute;
        top: -5px;
        left: 430px;
        width: 200px;
        height: 70px;
    }
    #img4 {
        position: absolute;
        top: -5px;
        left: 953px;
        width: 250px;
        height: 190px;
    }
    #img5 {
        position: absolute;
        top: 190px;
        left: 170px;
        width: 250px;
        height: 170px;
    }
    #img6 {
        position: absolute;
        top: 200px;
        left: 615px;
        width: 350px;
        height: 155px;
    }
    #img7 {
        position: absolute;
        top: 415px;
        left: 813px;
        width: 165px;
        height: 80px;
    }
    #img8 {
        position: absolute;
        top: 715px;
        left: 863px;
        width: 250px;
        height: 230px;
    }
    #img9 {
        position: absolute;
        top: 680px;
        left: 415px;
        width: 350px;
        height: 360px;
    }
    #img10 {
        position: absolute;
        top: 730px;
        width: 390px;
        height: 175px;
    }
    #img11 {
        position: absolute;
        left: 200px;
        top: 200px;
        width: 100px;
        height: 100px;
    }
    #img12 {
        position: absolute;
        left: 530px;
        top: 790px;
        width: 140px;
        height: 140px;
    }
    }
`;

const Background = function() {
    return(
        <BackgroundComponent>
            
            <nav>
                <Image src="/images/Ellipse-1.png" width={310} height={225} alt='img-1' id='img1'/>
                <Image src="/images/Rectangle-20.png" width={165} height={200} alt='img-2' id='img2'/>
                <Image src="/images/Ellipse-5.png" width={200} height={65} alt='img-3.8' id='img3'/>
                <Image src="/images/header.png" width={270} height={225} alt='img-4' id='img4'/>
                <Image src="/images/Ellipse-2.png" width={265} height={200} alt='img-5' id='img5'/>
                <Image src="/images/Ellipse-3.png" width={400} height={200} alt='img-6' id='img6'/>
                <Image src="/images/Ellipse-8.png" width={200} height={95} alt='img-7' id='img7'/>
                <Image src="/images/Ellipse-4.png" width={265} height={200} alt='img-8' id='img8'/>
                <Image src="/images/Ellipse-7.png" width={350} height={425} alt='img-9' id='img9'/>
                <Image src="/images/Ellipse-6-1.png" width={450} height={180} alt='img-10' id='img10'/>
                <Image src="/images/Group-82.png" width={1200} height={950} alt='img-11' id='img11'/>
                <Image src="/images/Stella.png" width={130} height={130} alt='img-12' id='img12'/>
            </nav>
            
        </BackgroundComponent>
    )
}

export default Background;