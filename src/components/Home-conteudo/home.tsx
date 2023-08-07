'use client'
import styled from '@emotion/styled';
import Link from 'next/link';

const HomeComponent = styled.div `

background: #0A53B5;
background-repeat: no-repeat;
background-size: 100vw;
height: 100vh;

    .mobile{
        display: flex;
        justify-content: space-between;
    }

    .tablet {
        display: none;
    }

    .desktop-1 {
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

    @media(min-width: 768px) {
        .mobile{
            display: none;
        }

        .tablet {
            display: flex;
            justify-content: space-between;
        }

        .desktop-1 {
            display: none;
        }

        background-image: url("/images/tablet.svg");

        h1 {
            font-size: 1.7em;
            left: 265px;
        }

        p {
            font-size: 1.5em;
            left: 95px;
            top: 330px;
        }

        .start {
            left: 280px;
            height: 90px;
        }

        .start:hover {
            left: 280px;
            height: 90px;
            background-color: #9fc214;
        }

        .start:active {
            left: 280px;
            height: 90px;
            background-color: #86a40f;
        }

        .fox {
            top: 598px;
            left: 380px;
            width: 135px;
        }
    }

    @media(min-width: 992px) {
        .mobile{
            display: none;
        }

        .tablet {
            display: none;
        }

        .desktop-1 {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/background3.svg");

        h1 {
            font-size: 2.2em;
            top: 260px;
            left: 358px;
        }

        p {
            font-size: 1.9em;
            top: 420px;
            left: 65px;
        }

        .start {
            width: 170px;
            height: 120px;
            font-size: 1.9em;
            top: 660px;
            left: 350px;
        }

        .start:hover {
            width: 170px;
            height: 120px;
            font-size: 1.9em;
            top: 660px;
            left: 350px;
            background-color: #9fc214;
        }

        .start:active {
            width: 170px;
            height: 120px;
            font-size: 1.9em;
            top: 660px;
            left: 350px;
            background-color: #86a40f;
        }

        .fox {
            width: 170px;
            top: 766px;
            left: 500px;
        }
    }

`;

const PgInitial = function() {
    return (
        <HomeComponent>

            <nav className='mobile'>
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
                     Aqui nós buscamos sempre dar a melhor<br/> experiência possível para quem utiliza nossa<br/> plataforma, onde você pode realizar o upload<br/> e visualizar seus documentos!
                </p>
                    <Link href={'/Page3'}>
                                <button type='button' className='start'>
                                    Start
                                </button>
                    </Link>
                    <img src="/images/Stella.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop-1'>
                <h1>Bem-Vinde a<br/> <span id='FX'>Fox Soluctions</span>!</h1>
                <p>
                    Aqui nós buscamos sempre dar a melhor<br/> experiência possível para quem utiliza nossaplataforma,<br/> onde você pode realizar o upload e visualizar<br/> seus documentos!
                </p>
                <Link href={'/Page3'}>
                    <button type='button' className='start'>
                        Start
                    </button>
                </Link>
                <img src="/images/Stella.png" alt="fox" className='fox'/>
            </nav>

            <nav className='desktop-2'>

            </nav>
            
        </HomeComponent>
    )
}

export default PgInitial;