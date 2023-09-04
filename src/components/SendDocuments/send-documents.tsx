// Developed code by Gabriel

'use client'
import styled from '@emotion/styled';
import Input from '../Login/Input/Input';
import Image from 'next/image';
import {FaAngleRight} from "react-icons/fa";

const SendDocumentsComponent = styled.section `

    // Mobile
    
    .mobile {
        display: block;
        justify-content: space-between;
    }

    .tablet-desktops {
        display: none;
    }

    height: 142vh;

    background: linear-gradient(180deg, #0A53B5 0%, #0081E8 100%);

    * {
        color: white;
        font-family: 'Poppins-Medium';
    }

    header {
            background-color: #2F99BF;
            height: 195px;
    }

    .search {
        width: 50px;
        height: 50px;
        margin-top: 4%;
        margin-left: 2%;
    }

    .box-1 {
        margin-top: 7%;
        margin-left: 15%;
        text-align: center;
        background-color: #07B3FD;
        width: 100px;
        height: 85px;
        border-radius: 4px;
    }

    .amount-documents {
        font-size: 2.7em;
    }

    .documents {
        margin-top: -11.5%;
        font-size: 0.2em;
    }

    .box-2 {
        margin-top: -26.5%;
        margin-left: 53.7%;
        text-align: center;
        background-color: #F47216;
        width: 100px;
        height: 85px;
        border-radius: 4px;
    }

    .amount-users {
        font-size: 2.7em;
    }

    .users {
        margin-top: -11.5%;
        font-size: 0.2em;
    }

    .profile-photo {
        width: 70px;
        height: 70px;
        position: absolute;
        top: 180px;
        margin-left: 75%;
    }

    form {
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        height: 540px;
        width: 250px;
        margin-top: 10%;
        margin-left: 11%;
    }

    h1 {
        margin-left: 15.5%;
        padding-top: 10%;
        font-size: 1.3em;
    }

    .rg {
        border-radius: 8px;
        background: #07AFFA;
        height: 90px;
        margin-top: 10%;
        font-size: 1em;
    }

    #rg-txt {
        padding-top: 13%;
        margin-left: 5%;
        color: white;
    }

    .button1 {
        background: none;
        border: none;
        position: absolute;
        top: 516px;
        margin-left: 11%;
        font-size: 1.2em;
    }

    .next1 {
        fill: white;
    }

    .next1:active {
        fill: #dedcdc;
    }

    .cpf {
        padding-top: 12%;
        margin-left: 3%;
        color: white;
        font-size: 1em;
    }

    .button2 {
        background: none;
        border: none;
        position: absolute;
        top: 605.4px;
        margin-left: 56.5%;
        font-size: 1.2em;
    }

    .next2 {
        fill: white;
    }

    .next2:active {
        fill: #dedcdc;
    }

    .date {
        border-radius: 8px;
        background: #07AFFA;
        height: 90px;
        margin-top: 10%;
        font-size: 0.8em;
    }

    #date-txt {
        padding-top: 14%;
        margin-left: 3%;
        color: white;
    }

    .button3 {
        background: none;
        border: none;
        position: absolute;
        top: 687px;
        margin-left: 12%;
        font-size: 1.5em;
    }

    .next3 {
        fill: white;
    }

    .next3:active {
        fill: #dedcdc;
    }

    .cnh {
        padding-top: 12%;
        margin-left: 3%;
        color: white;
        font-size: 0.9em;
    }

    .button4 {
        background: none;
        border: none;
        position: absolute;
        top: 790px;
        margin-left: 32.5%;
        font-size: 1.4em;
    }

    .next4 {
        fill: white;
    }

    .next4:active {
        fill: #dedcdc;
    }

    .ct {
        border-radius: 8px;
        background: #07AFFA;
        height: 90px;
        margin-top: 10%;
        font-size: 0.8em;
    }

    #ct-txt {
        padding-top: 14%;
        margin-left: 3%;
        color: white;
    }

    .button5 {
        background: none;
        border: none;
        position: absolute;
        top: 880px;
        margin-left: 20%;
        font-size: 1.7em;
    }

    .next5 {
        fill: white;
    }

    .next5:active {
        fill: #dedcdc;
    }

    // Tablet
    @media(min-width: 768px) {

        height: 180vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }

        background: linear-gradient(180deg, #0A53B5 0%, #0A53B5 100%);

        header {
            background-color: #2F99BF;
            height: 165px;
        }

        .search {
            width: 50px;
            height: 50px;
            margin-top: 6.5%;
            margin-left: 7%;
        }

        .box-1 {
            margin-top: -11%;
            margin-left: 26%;
            text-align: center;
            background-color: #07B3FD;
            width: 140px;
            height: 120px;
            border-radius: 4px;
        }

        .amount-documents {
            font-size: 3.5em;
        }

        .documents {
            margin-top: -10%;
            font-size: 0.9em;
        }

        .box-2 {
            margin-top: -15.5%;
            margin-left: 52%;
            text-align: center;
            background-color: #F47216;
            width: 140px;
            height: 120px;
            border-radius: 4px;
        }

        .amount-users {
            font-size: 3.5em;
        }

        .users {
            margin-top: -10%;
            font-size: 0.9em;
        }

        .profile-photo {
            position: absolute;
            top: 185px;
            margin-left: 80%;
            width: 100px;
            height: 100px;
        }

        #your-name {
            margin-left: 80%;
            margin-top: -3%;
        }

        form {
            margin-left: 12%;
            width: 580px;
            height: 680px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        }

        h1 {
            font-size: 1.8em;
            margin-left: 28.8%;
        }

        .rg {
            border-radius: 8px;
            background: #07AFFA;
            height: 105px;
            margin-top: 10%;
            font-size: 1.4em;
        }

        #rg-txt {
            padding-top: 6.5%;
            margin-left: 3%;
            color: white;
        }

        .button1 {
            background: none;
            border: none;
            position: absolute;
            top: 612px;
            margin-left: 33%;
            font-size: 1.2em;
        }

        .next1 {
            fill: white;
        }

        .next1:active {
            fill: #dedcdc;
        }

        .cpf {
            margin-top: -5%;
            font-size: 1.4em;
        }

        .button2 {
            background: none;
            border: none;
            position: absolute;
            top: 720px;
            margin-left: 58.5%;
            font-size: 1.2em;
        }

        .next2 {
            fill: white;
        }

        .next2:active {
            fill: #dedcdc;
        }

        .date {
            border-radius: 8px;
            background: #07AFFA;
            height: 105px;
            margin-top: 5%;
            font-size: 1.4em;
        }

        #date-txt {
            padding-top: 6.5%;
            margin-left: 3%;
            color: white;
        }

        .button3 {
            background: none;
            border: none;
            position: absolute;
            top: 827px;
            margin-left: 24.7%;
            font-size: 1.2em;
        }

        .next3 {
            fill: white;
        }

        .next3:active {
            fill: #dedcdc;
        }

        .cnh {
            margin-top: -5%;
            font-size: 1.4em;
        }

        .button4 {
            background: none;
            border: none;
            position: absolute;
            top: 935px;
            margin-left: 13%;
            font-size: 1.2em;
        }

        .next4 {
            fill: white;
        }

        .next4:active {
            fill: #dedcdc;
        }

        .ct {
            border-radius: 8px;
            background: #07AFFA;
            height: 105px;
            margin-top: 5%;
            font-size: 1.4em;
        }

        #ct-txt {
            padding-top: 6%;
            margin-left: 3%;
            color: white;
        }

        .button5 {
            background: none;
            border: none;
            position: absolute;
            top: 1037px;
            margin-left: 30.6%;
            font-size: 1.2em;
        }

        .next5 {
            fill: white;
        }

        .next5:active {
            fill: #dedcdc;
        }
    }

    // Small Screens
    @media(min-width: 992px) {

        height: 165vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }

        .search {
            width: 40px;
            height: 40px;
            margin-top: 6%;
            margin-left: 8%;
        }

        .box-1 {
            margin-left: 32%;
            margin-top: -8.5%;
        }

        .box-2 {
            margin-left: 52%;
            margin-top: -11.6%;
        }

        .profile-photo {
            width: 110px;
            height: 110px;
            margin-top: 0%;
            margin-left: 81%;
        }

        #your-name {
            font-size: 1.2em;
            margin-left: 80.5%;
            margin-top: -1.5%;
        }

        form {
            margin-left: 15.1%;
            width: 705px;
            height: 680px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        }

        h1 {
            font-size: 1.9em;
            margin-left: 32%;
        }

        .rg {
            border-radius: 8px;
            background: #07AFFA;
            height: 115px;
            margin-top: 8%;
            font-size: 1.3em;
        }

        #rg-txt {
            padding-top: 5.5%;
            margin-left: 4%;
            color: white;
        }

        .button1 {
            background: none;
            border: none;
            position: absolute;
            top: 664px;
            margin-left: 37%;
            font-size: 1.2em;
        }

        .next1 {
            fill: white;
        }

        .next1:active {
            fill: #dedcdc;
        }

        .cpf {
            margin-top: -6.5%;
            font-size: 1.3em;
            margin-left: 4%;
        }

        .button2 {
            background: none;
            border: none;
            position: absolute;
            top: 777px;
            margin-left: 55.1%;
            font-size: 1.2em;
        }

        .next2 {
            fill: white;
        }

        .next2:active {
            fill: #dedcdc;
        }

        .date {
            border-radius: 8px;
            background: #07AFFA;
            height: 105px;
            margin-top: 3.5%;
            font-size: 1.3em;
        }

        #date-txt {
            padding-top: 5.3%;
            margin-left: 4%;
            color: white;
        }

        .button3 {
            background: none;
            border: none;
            position: absolute;
            top: 865px;
            margin-left: 31.5%;
            font-size: 1.2em;
        }

        .next3 {
            fill: white;
        }

        .next3:active {
            fill: #dedcdc;
        }

        .cnh {
            margin-top: -6.5%;
            font-size: 1.3em;
            margin-left: 4%;
        }

        .button4 {
            background: none;
            border: none;
            position: absolute;
            top: 976px;
            margin-left: 23.5%;
            font-size: 1.2em;
        }

        .next4 {
            fill: white;
        }

        .next4:active {
            fill: #dedcdc;
        }

        .ct {
            border-radius: 8px;
            background: #07AFFA;
            height: 105px;
            margin-top: 3.5%;
            font-size: 1.3em;
        }

        #ct-txt {
            padding-top: 5%;
            margin-left: 4%;
            color: white;
        }

        .button5 {
            background: none;
            border: none;
            position: absolute;
            top: 1070px;
            margin-left: 35.8%;
            font-size: 1.2em;
        }

        .next5 {
            fill: white;
        }

        .next5:active {
            fill: #dedcdc;
        }
    }

    // Medium Screens
    @media(min-width: 1200px) {

        height: 181.5vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }

        header {
            height: 230px;
        }

        .search {
            width: 60px;
            height: 60px;
            margin-left: 7%;
        }

        .box-1 {
            width: 210px;
            height: 170px;
            margin-top: -8.5%;
            margin-left: 30%;
        }

        .amount-documents {
            font-size: 5.3em;
        }

        .documents {
            margin-top: -17%;
            font-size: 1.5em;
        }

        .box-2 {
            width: 210px;
            height: 170px;
            margin-top: -12.5%;
            margin-left: 51.5%;
        }

        .amount-users {
            font-size: 5.3em;
        }

        .users {
            margin-top: -17%;
            font-size: 1.5em;
        }

        .profile-photo {
            width: 150px;
            height: 150px;
            margin-left: 81%;
            margin-top: 0.5%;
        }

        #your-name {
            font-size: 1.6em;
            margin-top: -2%;
            margin-left: 81.3%;
        }

        form {
            margin-top: 7%;
            margin-left: 17%;
            width: 890px;
            height: 750px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        }

        h1 {
            font-size: 2.1em;
            padding-top: 7%;
            margin-left: 33.2%;
        }

        .rg {
            border-radius: 8px;
            background: #07AFFA;
            height: 115px;
            margin-top: 6%;
            font-size: 1.3em;
        }

        #rg-txt {
            padding-top: 4.5%;
            margin-left: 4%;
            color: white;
        }

        .button1 {
            background: none;
            border: none;
            position: absolute;
            top: 712px;
            margin-left: 40%;
            font-size: 1.2em;
        }

        .next1 {
            fill: white;
        }

        .next1:active {
            fill: #dedcdc;
        }

        .cpf {
            margin-top: -7%;
            font-size: 1.3em;
            margin-left: 4%;
        }

        .button2 {
            background: none;
            border: none;
            position: absolute;
            top: 829px;
            margin-left: 53.5%;
            font-size: 1.2em;
        }

        .next2 {
            fill: white;
        }

        .next2:active {
            fill: #dedcdc;
        }

        .date {
            border-radius: 8px;
            background: #07AFFA;
            height: 115px;
            margin-top: 4%;
            font-size: 1.3em;
        }

        #date-txt {
            padding-top: 4.5%;
            margin-left: 4%;
            color: white;
        }

        .button3 {
            background: none;
            border: none;
            position: absolute;
            top: 941px;
            margin-left: 35.9%;
            font-size: 1.2em;
        }

        .next3 {
            fill: white;
        }

        .next3:active {
            fill: #dedcdc;
        }

        .cnh {
            margin-top: -6%;
            font-size: 1.3em;
            margin-left: 4%;
        }

        .button4 {
            background: none;
            border: none;
            position: absolute;
            top: 1070px;
            margin-left: 30%;
            font-size: 1.2em;
        }

        .next4 {
            fill: white;
        }

        .next4:active {
            fill: #dedcdc;
        }

        .ct {
            border-radius: 8px;
            background: #07AFFA;
            height: 115px;
            margin-top: 4%;
            font-size: 1.3em;
        }

        #ct-txt {
            padding-top: 4.5%;
            margin-left: 4%;
            color: white;
        }

        .button5 {
            background: none;
            border: none;
            position: absolute;
            top: 1180px;
            margin-left: 39.3%;
            font-size: 1.2em;
        }

        .next5 {
            fill: white;
        }

        .next5:active {
            fill: #dedcdc;
        }
    }

    @media(min-width: 1600px) {

        height: 257vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }

        header {
            height: 210px;
        }

        .search {
            margin-top: 4.3%;
        }

        .box-1 {
            margin-top: -7%;
            width: 200px;
            height: 160px;
        }

        .box-2 {
            margin-top: -10.1%;
            width: 200px;
            height: 160px;
        }

        .profile-photo {
            margin-top: 0%;
            margin-left: 81.5%;
        }

        #your-name {
            margin-top: -1.5%;
        }
    }
`;

const SendDocumentsPg = function() {
    return (
        <SendDocumentsComponent>
            <nav className='mobile'>
            <header>
                 <Image className='search' src="/images/search.png" width={100} height={104}  alt="search"/>
                    <div className='box-1'>
                        <p className='amount-documents'>0</p>
                        <p className='documents'>documentos</p>
                    </div>
                    <div className='box-2'>
                        <p className='amount-users'>0</p>
                        <p className='users'>usuários</p>
                    </div>
                    <Image className='profile-photo' src="/images/profile-photo2.png" width={100} height={104}  alt="profile-photo"/>
                </header>
                <form>
                    <h1>Faça o Upload</h1>
                        <div className='rg'>
                            <p id='rg-txt'>
                                RG - Frente e Verso 
                                <button type='button' className='button1'><FaAngleRight className='next1'/></button>
                            </p> 
                        </div> 
                        <div className='cpf'>
                            <p id='cpf-txt'>
                                CPF 
                                <button type='button' className='button2'><FaAngleRight className='next2'/></button>
                            </p> 
                        </div> 
                        <div className='date'>
                            <p id='date-txt'>
                                Certidão de nascimento 
                                <button type='button' className='button3'><FaAngleRight className='next3'/></button>
                            </p> 
                        </div>
                        <div className='cnh'>
                            <p id='cnh-txt'>
                                CNH (opcional) - <br/>frente e verso 
                                <button type='button' className='button4'><FaAngleRight className='next4'/></button>
                            </p> 
                        </div>
                        <div className='ct'>
                            <p id='ct-txt'>
                                Carteira de Trabalho 
                                <button type='button' className='button5'><FaAngleRight className='next5'/></button>
                            </p> 
                        </div>
                </form>
            </nav>

            <nav className='tablet-desktops'>
                <header>
                 <Image className='search' src="/images/search.png" width={100} height={104}  alt="search"/>
                    <div className='box-1'>
                        <p className='amount-documents'>0</p>
                        <p className='documents'>documentos</p>
                    </div>
                    <div className='box-2'>
                        <p className='amount-users'>0</p>
                        <p className='users'>usuários</p>
                    </div>
                    <Image className='profile-photo' src="/images/profile-photo2.png" width={100} height={104}  alt="profile-photo"/>
                    <p id='your-name'>Seu Nome</p>
                </header>
                <form>
                    <h1>Faça o Upload</h1>
                        <div className='rg'>
                            <p id='rg-txt'>
                                RG - Frente e Verso 
                                <button type='button' className='button1'><FaAngleRight className='next1'/></button>
                            </p> 
                        </div>
                        <div className='cpf'>
                            <p id='cpf-txt'>
                                CPF 
                                <button type='button' className='button2'><FaAngleRight className='next2'/></button>
                            </p> 
                        </div>
                        <div className='date'>
                            <p id='date-txt'>
                                Certidão de nascimento 
                                <button type='button' className='button3'><FaAngleRight className='next3'/></button>
                            </p> 
                        </div>
                        <div className='cnh'>
                            <p id='cnh-txt'>
                                CNH (opcional) - frente e verso 
                                <button type='button' className='button4'><FaAngleRight className='next4'/></button>
                            </p> 
                        </div>
                        <div className='ct'>
                            <p id='ct-txt'>
                                Carteira de Trabalho 
                                <button type='button' className='button5'><FaAngleRight className='next5'/></button>
                            </p> 
                        </div>
                </form>
            </nav>
        </SendDocumentsComponent>
    )
}

export default SendDocumentsPg;