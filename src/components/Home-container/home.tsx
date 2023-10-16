// Developed by Gabriel Marques
'use client'
import styled from '@emotion/styled';
import Link from 'next/link';

const HomeComponent = styled.div `

// Mobile

background: #0A53B5;
background-repeat: no-repeat;
background-size: 100vw;
height: 100.5vh;

    .mobile{
        display: flex;
        justify-content: space-between;
    }

    .tablet-desktops {
        display: none;
    }

    .desktop-3{
            display: none;
        }

    h1 {
        text-align: center;
        position: absolute;
        left: 50px;
        top: 200px;
        color: white;
        margin: 10px;
    }

    #FX {
        color: #F47216;
    }

    p {
        text-align: center;
        position: absolute;
        left: 25px;
        top: 300px;
        font-size: 1.1em;
        color: white;
    }

    .fox {
        width: 120px;
        position: absolute;
        top: 614px;
        left: 190px;
    }

    .start {
        position: absolute;
        width:120px;
        height: 100px;
        border-top-right-radius: 50%;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        top: 510px;
        left: 90px;
        border: none;
        background-color: #93B413;
        font-size: 1.5em;
        color: white;
    }

    .start:active {
        position: absolute;
        width:120px;
        height: 100px;
        border-top-right-radius: 50%;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        top: 510px;
        left: 90px;
        border: none;
        background-color: #86a40f;
        font-size: 1.5em;
        color: white;
    }
    
    * {
        align-items: center;
        box-sizing: border-box;
    }

    // Tablet
    @media(min-width: 768px) {

        height: 93vh;

        .mobile{
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }

        background-image: url("/images/tablet.svg");

        h1 {
            font-size: 1.5em;
            margin-left: 31%;
            margin-top: 3%;
        }

        p {
            font-size: 1.3em;
            margin-left: 13.8%;
            margin-top: 3%;
        }

        .start {
            left: 280px;
            margin-top: -5%;
            height: 90px;
        }

        .start:active {
            left: 280px;
            margin-top: -5%;
            height: 90px;
            background-color: #86a40f;
        }

        .fox {
            margin-top: -7.6%;
            left: 380px;
            width: 135px;
        }
    }

    // Small Screens
    @media(min-width: 992px) {

        height: 88vh;

        .mobile{
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }

        background-image: url("/images/background3.svg");

        h1 {
            font-size: 1.9em;
            margin-left: 34%;
        }

        p {
            font-size: 1.5em;
            margin-left: 19%;
            margin-top: 5%;
        }

        .start {
            width: 130px;
            height: 90px;
            font-size: 1.9em;
            margin-top: 2%;
            margin-left: 10.5%;
            cursor: pointer;
        }

        .start:hover {
            width: 130px;
            height: 90px;
            font-size: 1.9em;
            margin-top: 2%;
            margin-left: 10.5%;
            background-color: #9fc214;
            cursor: pointer;
        }

        .start:active {
            width: 130px;
            height: 90px;
            font-size: 1.9em;
            margin-top: 2%;
            margin-left: 10.5%;
            background-color: #86a40f;
            cursor: pointer;
        }

        .fox {
            width: 150px;
            top: 672.5px;
            left: 510px;
        }
    }

    // Medium Screens
    @media(min-width: 1200px) {

        height: 90.5vh;

        .mobile{
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }

        background-image: url("/images/background-2.svg");

        h1 {
            font-size: 2em;
            margin-left: 37%;
        }

        p {
            font-size: 1.8em;
            margin-left: 22.1%;
        }

        .start {
            margin-top: 2.5%;
            margin-left: 18.5%;
            cursor: pointer;
        }

        .start:hover {
            margin-top: 2.5%;
            margin-left: 18.5%;
            background-color: #9fc214;
            cursor: pointer;
        }

        .start:active {
            margin-top: 2.5%;
            margin-left: 18.5%;
            background-color: #86a40f;
            cursor: pointer;
        }

        .fox {
            margin-left: 10.5%;
            margin-top: -4.55%;
            width: 150px;
        }
    }

    @media(min-width: 1400px) {

        height: 90.2vh;

        h1 {
            margin-left: 39%;
        }

        p{
            margin-left: 24.7%;
        }

        .fox {
            margin-top: -1%;
            margin-left: 13%;
        }

        .start {
            margin-top: 4%;
            margin-left: 20%;
        }

        .start:hover{
            margin-top: 4%;
            margin-left: 20%;
        }

        .start:active{
            margin-top: 4%;
            margin-left: 20%;
        }

    }

    // Large Screens
    @media(min-width: 1600px) {

        height: 94vh;

        .mobile{
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }

        background-image: url("/images/group-144.svg");

        h1 {
            font-size: 2.3em;
            margin-left: 37%;
            margin-top: 5%;
        }

        p {
            font-size: 2em;
            margin-left: 24%;
            margin-top: 7%;
        }

        .start {
            width: 150px;
            height: 120px;
            font-size: 2.3em;
            margin-left: 20%;
            margin-top: 8%;
            cursor: pointer;
        }

        .start:hover {
            width: 150px;
            height: 120px;
            font-size: 2.3em;
            margin-left: 20%;
            margin-top: 8%;
            background-color: #9fc214;
            cursor: pointer;
        }

        .start:active {
            width: 150px;
            height: 120px;
            font-size: 2.3em;
            margin-left: 20%;
            margin-top: 8%;
            background-color: #86a40f;
            cursor: pointer;
        }

        .fox {
            width: 180px;
            margin-left: 14.5%;
            margin-top: 2.85%;
        }
    }

`;

const PgInitial = function() {
    return (
        <HomeComponent>

            <nav className='mobile'>
                {/* Content */}
                    <h1>Bem-Vinde a<br/> <span id='FX'>Fox Solutions</span>!</h1>
                    <p>
                        Aqui nós buscamos sempre<br/> dar a melhor<br/> experiência possível para<br/> quem utiliza nossa<br/> plataforma, onde você pode<br/> realizar o upload e visualizar<br/> seus documentos!
                    </p>
                        <Link href={'/LoginPage'}>
                            <button type='button' className='start'>
                                Start
                            </button>
                        </Link>
                    <img src="/images/Stella.png" alt="fox" className='fox'/>
            </nav>

            <nav className='tablet-desktops'>
                {/* Content */}
                <h1>Bem-Vinde a<br/> <span id='FX'>Fox Solutions</span>!</h1>
                <p>
                     Aqui nós buscamos sempre dar a melhor<br/> experiência possível para quem utiliza nossa<br/> plataforma, onde você pode realizar o upload<br/> e visualizar seus documentos!
                </p>
                    <Link href={'/LoginPage'}>
                                <button type='button' className='start'>
                                    Start
                                </button>
                    </Link>
                    <img src="/images/Stella.png" alt="fox" className='fox'/>
            </nav>
            
        </HomeComponent>
    )
}

export default PgInitial;