// Developed by Gabriel Marques
'use client'
import styled from '@emotion/styled';
import Link from 'next/link';

const HomeComponent = styled.div `

// Mobile

background: #0A53B5;
background-repeat: no-repeat;
background-size: 100vw;
height: 73.8vh;

    .mobile{
        display: grid;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
    }

    .tablet-desktops {
        display: none;
    }

    .desktop-3{
            display: none;
        }

    h1 {
        color: white;
        font-size: 1.9em;
        margin: 0;
        padding-left: 18%;
        padding-top: 5%;
    }

    #FX {
        color: #F47216;
    }

    p {
        color: white;
        font-size: 1.5em;
        text-align: center;
        margin: 0;
        padding-left: 0;
        padding-top: 12%;
    }

    .fox {
        width: 150px;
        position: absolute;
        top: 76%;
        left: 57%;
    }

    .start {
        margin-top: 15%;
        margin-left: 28.5%;
        width:130px;
        height: 110px;
        border-top-right-radius: 50%;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        border: none;
        background-color: #93B413;
        font-size: 1.5em;
        color: white;
    }

    .start:active {
        margin-top: 15%;
        margin-left: 28.5%;
        width:120px;
        height: 100px;
        border-top-right-radius: 50%;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
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
            justify-content: center;
            align-items: center;
        }

        background-image: url("/images/tablet.svg");

        h1 {
            font-size: 1.5em;
            margin: 0;
            padding-left: 41%;
            padding-top: 11%;
        }

        p {
            font-size: 1.3em;
            margin-left: 1%;
            margin-top: 3%;
            padding: 0;
        }

        .start {
            margin-left: 45%;
            margin-top: 4%;
            height: 80px;
            width: 100px;
        }

        .start:active {
            margin-left: 45%;
            margin-top: 4%;
            height: 80px;
            width: 100px;
            background-color: #86a40f;
        }

        .fox {
            margin-top: 17.4%;
            margin-left: -1%;
            width: 130px;
        }
    }

    // Small Screens
    @media(min-width: 992px) {

        height: 62.5vh;

        .mobile{
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        background-image: url("/images/background3.svg");

        h1 {
            font-size: 1.6em;
            margin: 0;
            padding-top: 3%;
        }

        p {
            font-size: 1.4em;
            margin-left: -1%;
            margin-top: 2%;
        }

        .start {
            width: 90px;
            height: 60px;
            font-size: 1.7em;
            margin-top: 2%;
            cursor: pointer;
        }

        .start:hover {
            width: 90px;
            height: 60px;
            font-size: 1.7em;
            margin-top: 2%;
            background-color: #9fc214;
            cursor: pointer;
        }

        .start:active {
            width: 90px;
            height: 60px;
            font-size: 1.7em;
            margin-top: 2%;
            background-color: #86a40f;
            cursor: pointer;
        }

        .fox {
            width: 100px;
            margin-top: -1.6%;
            margin-left: -3%;
        }
    }

    // Medium Screens
    @media(min-width: 1200px) {

        height: 70.5vh;

        .mobile{
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        background-image: url("/images/background-2.svg");

        h1 {
            font-size: 1.7em;
            margin-left: 3.7%;
            /* margin-left: 37%; */
        }

        p {
            font-size: 1.5em;
            margin-left: 1.7%;
            /* margin-left: 22.1%; */
        }

        .start {
            margin-left: 48%;
            cursor: pointer;
        }

        .start:hover {
            margin-left: 48%;
            background-color: #9fc214;
            cursor: pointer;
        }

        .start:active {
            margin-left: 48%;
            background-color: #86a40f;
            cursor: pointer;
        }

        .fox {
            width: 125px;
            margin-top: 0.6%;
        }
    }

    @media(min-width: 1400px) {

        height: 75vh;

        h1 {
            /* margin-left: 39%; */
        }

        p{
            /* margin-left: 24.7%; */
        }

        .fox {
            margin-top: 2.6%;
            /* margin-left: 13%; */
        }

        .start {
            margin-top: 2%;
            /* margin-left: 20%; */
        }

        .start:hover{
            margin-top: 4%;
            /* margin-left: 20%; */
        }

        .start:active{
            margin-top: 4%;
            /* margin-left: 20%; */
        }

    }

    // Large Screens
    @media(min-width: 1600px) {

        height: 70vh;

        .mobile{
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        background-image: url("/images/group-144.svg");

        h1 {
            font-size: 1.9em;
            margin-left: 1%;
        }

        p {
            font-size: 1.7em;
            margin-left: -3%;
            /* margin-left: 25.5%;
            margin-top: 7%; */
        }

        .start {
            width: 110px;
            height: 80px;
            font-size: 1.9em;
            margin-left: 45.7%;
            margin-top: 2%;
            cursor: pointer;
        }

        .start:hover {
            width: 110px;
            height: 80px;
            font-size: 1.9em;
            margin-left: 45.7%;
            margin-top: 2%;
            background-color: #9fc214;
            cursor: pointer;
        }

        .start:active {
            width: 110px;
            height: 80px;
            font-size: 1.9em;
            margin-left: 45.7%;
            margin-top: 2%;
            background-color: #86a40f;
            cursor: pointer;
        }

        .fox {
            width: 150px;
            margin-left: -5%;
            margin-top: -1.7%;
        }
    }

`;

const PgInitial = function() {
    return (
        <HomeComponent>

            <nav className='mobile'>
                {/* Content */}
                    <h1>Bem-Vindos a<br/> <span id='FX'>Fox Solutions</span>!</h1>
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
                <h1>Bem-Vindos a<br/> <span id='FX'>Fox Solutions</span>!</h1>
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