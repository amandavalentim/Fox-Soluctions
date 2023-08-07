'use client'
import styled from '@emotion/styled';
import Link from 'next/link';

const HomeComponent = styled.div `

background: #0A53B5;
background-repeat: no-repeat;
background-size: 100vw;
height: 100vh;

    .show-on-mobile{
        display: flex;
        justify-content: space-between;
    }

    .tablet {
        display: none;
    }

    .small-screens {
        display: none;       
    }

    .normal-screens {
        display: none;   
    }

    .tall-screens {
        display: none;    
    }

    h1 {
        text-align: center;
        position: absolute;
        left: 60px;
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
        left: 30px;
        top: 300px;
        font-size: 1.1em;
        color: white;
    }

    .fox {
        width: 120px;
        position: absolute;
        top: 613px;
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
    }

    .start:active{
        position: absolute;
        width:120px;
        height: 100px;
        border-top-right-radius: 50%;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        top: 510px;
        left: 90px;
        border: none;
        font-size: 1.5em;
       background-color: #9fc214;
    }
    
    * {
        align-items: center;
        box-sizing: border-box;
    }

    @media (min-width: 768px) {
        .tablet {
            display: flex;
            justify-content: space-between;
        }

        .tall-screens{
            display: none;
        }

        .show-on-mobile {
            display: none;
        }

        .small-screens {
            display: none;
        }

        .normal-screens {
            display: none;
        }

        .tall-screens {
            display: none;
        }

        background-image: url("/images/tablet.svg");

        h1 {
            text-align: center;
            position: absolute;
            left: 280px;
            top: 230px;
            font-size: 1.5em;
            color: white;
        }

        p {
            text-align: center;
            position: absolute;
            left: 95px;
            top: 350px;
            font-size: 1.2em;
            color: white;
        }

        .start {
            left: 340px;
        }

        .start:active {
            left: 340px;
            background-color: #9fc214;
        }

        .fox {
            left: 450px;
        }

    }

    @media (min-width: 992px) {

        .small-screens {
            display: flex;
            justify-content: space-between;
        }

        .normal-screens {
            display: none;
        }

        .tall-screens {
            display: none;
        }

        .show-on-mobile {
            display: none;
        }

        .tablet {
            display: none;
        }

        background-image: url("/images/background3.svg");

        h1 {
            text-align: center;
            position: absolute;
            left: 370px;
            top: 250px;
            font-size: 2em;
            color: white;
        }

        p {
            text-align: center;
            position: absolute;
            left: 70px;
            top: 400px;
            font-size: 1.8em;
            color: white;
        }

        .start {
            left: 420px;
            top: 630px;
            width: 190px;
            height: 130px;
            font-size: 2.1em;
        }

        .start:active {
            left: 420px;
            top: 630px;
            width: 190px;
            height: 130px;
            font-size: 2.1em;
            background-color: #9fc214;
        }

        .fox {
            top: 777px;
            width: 160px;
            left: 580px;
        }

    }

    @media (min-width: 1200px) {

        .normal-screens {
            display: flex;
            justify-content: space-between;  
        }

        .tablet {
            display: none;
        }

        .small-screens {
            display: none;
        }

        .tall-screens {
            display: none;
        }

        .show-on-mobile {
            display: none;
        }

        background-image: url("/images/background-2.svg"); 

        h1 {
            text-align: center;
            position: absolute;
            left: 575px;
            top: 240px;
            font-size: 1.7em;
            color: white;
        }

        p {
            text-align: center;
            position: absolute;
            left: 355px;
            top: 370px;
            font-size: 1.6em;
            color: white;
        }

        .start {
            left: 610px;
            top: 570px;
            width: 120px;
            height: 90px;
            color: white;
        }

        .start:active {
            left: 610px;
            top: 570px;
            width: 120px;
            height: 90px;
            color: white;
            background-color: #9fc214;
        }

        .fox {
            left: 690px;
            width: 160px;
            top: 660px;
        }
    
    }

    @media (min-width: 1600px) {

        .tall-screens {
            display: flex;
            justify-content: space-between;
        }

        .small-screens {
            display: none;  
        }

        .tablet {
            display: none;
        }

        .show-on-mobile {
            display: none;
        }

        .normal-screens {
            display: none;
        }

        background-image: url("/images/group-144.svg");

        h1 {
            left: 630px;
            color: white;
        }

        p {
            left: 330px;
            top: 410px;
            color: white;
        }

        .start {
            left: 668px;
            top: 620px;
        }

        .start:active {
            left: 668px;
            top: 620px;
            background-color: #9fc214;
        }

        .fox {
            left: 820px;
            top: 753px;
        }

    }

`;

const PgInitial = function() {
    return (
        <HomeComponent>

            <nav className='show-on-mobile'>
                    <h1>Bem-Vinde a<br/> <span id='FX'>Fox Soluctions</span>!</h1>
                    <p>
                        Aqui nós buscamos sempre<br/> dar a melhor<br/> experiência possível para<br/> quem utiliza nossa<br/> plataforma, onde você pode<br/> realizar o upload e visualizar<br/> seus documentos!
                    </p>
                        <Link href={'/Page3'}>
                            <button type='button' className='start'>
                                Start
                            </button>
                        </Link>
                    <img src="/images/Stella.png" alt="fox" className='fox'/>
            </nav>

            <nav className='tablet'>
                <h1>Bem-Vinde a<br/> <span id='FX'>Fox Soluctions</span>!</h1>
                <p>
                 Aqui nós buscamos sempre dar a melhor<br/> experiência possível para quem utiliza nossa plataforma,<br/> onde você pode realizar<br/> o upload e visualizar seus documentos!
                </p>
                        <Link href={'/Page3'}>
                            <button type='button' className='start'>
                                Start
                            </button>
                        </Link>
                    <img src="/images/Stella.png" alt="fox" className='fox'/>
            </nav>

            <nav className='small-screens'>
                <h1>Bem-Vinde a<br/> <span id='FX'>Fox Soluctions</span>!</h1>
                <p>
                        Aqui nós buscamos sempre dar a melhor<br/> experiência possível para quem utiliza nossa plataforma,<br/> onde você pode realizar<br/> o upload e visualizar seus documentos!
                    </p>
                <Link href={'/Page3'}>
                            <button type='button' className='start'>
                                Start
                            </button>
                </Link>
                <img src="/images/Stella.png" alt="fox" className='fox'/>
            </nav>

            <nav className='normal-screens'>
            <h1>Bem-Vinde a<br/> <span id='FX'>Fox Soluctions</span>!</h1>
            <p>
                Aqui nós buscamos sempre dar a melhor<br/> experiência possível para quem utiliza nossa plataforma,<br/> onde você pode realizar<br/> o upload e visualizar seus documentos!
            </p>
            <Link href={'/Page3'}>
                <button type='button' className='start'>
                    Start
                </button>
            </Link>
            <img src="/images/Stella.png" alt="fox" className='fox'/>
            </nav>

            <nav className='tall-screens'>
            <h1>Bem-Vinde a<br/> <span id='FX'>Fox Soluctions</span>!</h1>
            <p>
                Aqui nós buscamos sempre dar a melhor<br/> experiência possível para quem utiliza nossa plataforma,<br/> onde você pode realizar<br/> o upload e visualizar seus documentos!
            </p>
            <Link href={'/Page3'}>
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