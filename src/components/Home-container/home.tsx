// Developed by Gabriel Marques
'use client'
import styled from '@emotion/styled';
import Link from 'next/link';

const HomeComponent = styled.div `

// Mobile

background: #0A53B5;
background-repeat: no-repeat;
background-size: 100vw;
height: 84.2vh;

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
        padding-top: 20%;
        text-align: center;
    }

    #FX {
        color: #F47216;
    }

    p {
        display: flex;
        justify-content: center;
        color: white;
        font-size: 1.5em;
        text-align: center;
        margin: 0;
        padding-top: 13%;
    }

    .fox {
        width: 150px;
        position: absolute;
        top: 83%;
        left: 60%;
    }

    .button {
        display: flex;
        justify-content: center;
    }

    .start {
        margin-top: 20%;
        justify-content: center;
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
        margin-top: 20%;
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

        height: 71.55vh;

        .mobile{
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/tablet.svg"); */

        h1 {
            font-size: 1.5em;
            margin: 0;
            padding-top: 5%;
            display: flex;
            justify-content: center;
        }

        span{
            margin-left: 0.6%;
        }

        p {
            font-size: 1.5em;
            display: flex;
            justify-content: center;
            margin-top: 4%;
            padding: 0;
        }

        .button {
            display: flex;
            justify-content: center;
        }

        .start {
            display: flex;
            justify-content: center;
            margin-top: 30%;
            height: 100px;
            width: 120px;
        }

        .start:active {
            margin-top: 30%;
            height: 100px;
            width: 120px;
            background-color: #86a40f;
        }

        .fox {
            margin-top: -9%;
            margin-left: -3%;
            width: 130px;
        }
    }

    // Small Screens
    @media(min-width: 992px) {

        height: 79.3vh;

        .mobile{
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/background3.svg"); */

        h1 {
            font-size: 2em;
            margin: 0;
            padding-top: 5%;
            display: flex;
            justify-content: center;
        }

        p {
            font-size: 1.9em;
            display: flex;
            justify-content: center;
            text-align: center;
            margin-top: 3%;
        }

        .button {
            display: flex;
            justify-content: center;
        }

        .start {
            width: 120px;
            height: 80px;
            font-size: 1.7em;
            margin-top: 30%;
            cursor: pointer;
        }

        .start:hover {
            width: 120px;
            height: 80px;
            font-size: 1.7em;
            margin-top: 30%;
            cursor: pointer;
            background-color: #9fc214;
        }

        .start:active {
            width: 120px;
            height: 80px;
            font-size: 1.7em;
            margin-top: 30%;
            cursor: pointer;
            background-color: #86a40f;
        }

        .fox {
            width: 150px;
            margin-top: -3.5%;
            margin-left: -6.5%;
        }
    }

    // Medium Screens
    @media(min-width: 1200px) {

        height: 80vh;

        .mobile{
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/background-2.svg"); */

        h1 {
            font-size: 1.9em;
            margin: 0;
            padding-top: 3.5%;
            display: flex;
            justify-content: center;
        }

        p {
            font-size: 2em;
            display: flex;
            justify-content: center;
            text-align: center;
        }

        .button {
            display: flex;
            justify-content: center;
        }

        .start {
            margin-top: 30%;
            cursor: pointer;
        }

        .start:hover {
            margin-top: 30%;
            background-color: #9fc214;
            cursor: pointer;
        }

        .start:active {
            margin-top: 30%;
            background-color: #86a40f;
            cursor: pointer;
        }

        .fox {
            width: 140px;
            margin-top: -1.6%;
        }
    }

    @media(min-width: 1400px) {

        height: 80vh;

        h1 {
            text-align: center;
            display: flex;
            justify-content: center;
            font-size: 2.1em;
        }

        p{
            text-align: center;
            display: flex;
            justify-content: center;
            font-size: 2.2em;
            margin-top: 2.5%;
        }

        .fox {
            margin-top: -1.5%;
        }

        .button {
            display: flex;
            justify-content: center;
        }

        .start {
            margin-top: 30%;
            display: flex;
            justify-content: center;
            cursor: pointer;
        }

        .start:hover{
            margin-top: 30%;
            display: flex;
            justify-content: center;
            cursor: pointer;
        }

        .start:active{
            margin-top: 30%;
            display: flex;
            justify-content: center;
            cursor: pointer;
        }

    }

    // Large Screens
    @media(min-width: 1600px) {

        height: 82vh;

        .mobile{
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* background-image: url("/images/group-144.svg"); */

        h1 {
            font-size: 2.3em;
            display: flex;
            justify-content: center;
        }

        p {
            font-size: 2.2em;
            display: flex;
            justify-content: center;
        }

        .button {
            display: flex;
            justify-content: center;
        }

        .start {
            width: 130px;
            height: 100px;
            font-size: 1.9em;
            margin-top: 28%;
            display: flex;
            justify-content: center;
            cursor: pointer;
        }

        .start:hover {
            width: 130px;
            height: 100px;
            font-size: 1.9em;
            display: flex;
            justify-content: center;
            margin-top: 28%;
            background-color: #9fc214;
            cursor: pointer;
        }

        .start:active {
            width: 130px;
            height: 100px;
            font-size: 1.9em;
            display: flex;
            justify-content: center;
            margin-top: 28%;
            background-color: #86a40f;
            cursor: pointer;
        }

        .fox {
            width: 180px;
            margin-left: -8%;
            margin-top: -3.1%;
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
                <div className='button'>
                    <Link href={'/LoginPage'}>
                        <button type='button' className='start'>
                            Start
                        </button>
                    </Link>
                </div>
                    <img src="/images/Stella.png" alt="fox" className='fox'/>
            </nav>

            <nav className='tablet-desktops'>
                {/* Content */} 
                <h1>Bem-Vindos a <span id='FX'>Fox Solutions</span>!</h1>
                <p>
                     Aqui nós buscamos sempre dar a melhor<br/> experiência possível para quem utiliza nossa<br/> plataforma, onde você pode realizar o upload<br/> e visualizar seus documentos!
                </p>
                <div className='button'>
                    <Link href={'/LoginPage'}>
                        <button type='button' className='start'>
                            Start
                        </button>
                    </Link>
                </div>
                <img src="/images/Stella.png" alt="fox" className='fox'/>
            </nav>
            
        </HomeComponent>
    )
}

export default PgInitial;