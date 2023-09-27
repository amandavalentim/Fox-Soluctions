// Developed code by Gabriel

'use client'
import styled from '@emotion/styled';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import Input from '../Login/Input/Input';

const FormComponent2 = styled.section `

    // Mobile
    height: 130vh;

    background: linear-gradient(180deg, #0A53B5 0%, #028fcc 100%);

    * {
        color: white;
    }

    .mobile {
        display: flex;
        justify-content: space-between;
    }

    .tablet-desktops {
            display: none;
        }

    h1 {
        font-size: 1.3em;
        position: absolute;
        top: 220px;
        left: 110px;
    }

    .fox {
        position: absolute;
        top: 150px;
    }

    .name {
        position: absolute;
        top: 270px;
        left: 35px;
    }

    .span1 {
        margin-left: -45%;
        font-size: 1.05em;
    }

    .span2 {
        margin-left: 1%;
        font-size: 1.05em;
    }

    .span3 {
        margin-left: -71%;
        font-size: 1.05em;
    }

    .span4 {
        margin-left: -70%;
        font-size: 1.05em;
    }

    .span5 {
        margin-left: -78%;
        font-size: 1.05em;
    }

    .span6 {
        margin-left: -72%;
        font-size: 1.05em;
    }

    .span7 {
        margin-left: -35%;
        font-size: 1.05em;
    }

    .date {
        position: absolute;
        top: 320px;
        left: 35px;
        display: flex;
        flex-direction: column;
    }

    .phone {
        position: absolute;
        top: 390px;
        left: 35px;
    }

    .cpf {
        position: absolute;
        top: 450px;
        left: 35px;
    }

    .password {
        position: absolute;
        top: 510px;
        left: 35px;
    }

    .confirm-password{
        position: absolute;
        top: 570px;
        left: 35px;
    }

    .email {
        position: absolute;
        top: 630px;
        left: 35px;
    }

    /* .adm {
        position: absolute;
        top: 680px;
        left: -35px;
    }
    
    .adm-txt {
        position: absolute;
        top: 17px;
        left: 145px;
    }

    .user {
        position: absolute;
        top: 715px;
        left: 1px;
    }
    
    .user-txt {
        position: absolute;
        top: 17px;
        left: 145px;
    }

    #enterprise-name {
        position: absolute;
        top: 30px;
        left: 130px;
        display: none;
    } */

    p {
        position: absolute;
        top: 700px;
        left: 150px;
    }

    .google-enter {
        position: absolute;
        top: 735px;
        left: 35px;
    }

    .btn-google {
        width: 250px;
        height: 40px;
        font-size: 1.1em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
    }

    .btn-google:active {
        width: 250px;
        height: 40px;
        font-size: 1.1em;
        border: none;
        border-radius: 39px;
        padding: 8px;
        background-color: #86a40f;
    }

    .page2 {
        position: absolute;
        top: 790px;
        left: 35px;
    }

    .faGoogle {
        width: 40px;
        height: 25px;
        margin-bottom: -5px;
    }

    span {
        color: #F47216;
    }

    .button-create {
        position: absolute;
        top: 825px;
        left: 75px;
    }

    .criar {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #93B413;
        border: none;
        border-radius: 15px;
    }

    .criar:active {
        width: 170px;
        height: 50px;
        font-size: 1.6em;
        background-color: #86a40f;
        border: none;
        border-radius: 15px;
    }

    .fox {
        width: 90px;
    }

    // Tablet
    @media(min-width: 768px){

        height: 145vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/tablet-create-user.svg");
        background-repeat: no-repeat;

        form {
        position: relative;
        left: 190px;
        top: 30px;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        width: 400px;
        height: 735px;
        border-color: white;
       }

       .span1 {
            margin-left: -46%;
            font-size: 1em;
        }

        .span2 {
            margin-left: 70%;
            font-size: 1.05em;
            margin-top: -11%;
        }

        .span3 {
            margin-left: -63%;
            font-size: 1.05em;
        }

        .span4 {
            margin-left: -62%;
            font-size: 1.05em;
        }

        .span5 {
            margin-left: -68%;
            font-size: 1.05em;
        }

        .span6 {
            margin-left: -63%;
            font-size: 1.05em;
        }

        .span7 {
            margin-left: -39%;
            font-size: 1.05em;
        }

       h1 {
        font-size: 1.5em;
        position: absolute;
        top: 55px;
        left: 135px;
       }

       .name {
        font-size: 1.3em;
        position: absolute;
        top: 105px;
        left: -40px;
       }

       .date {
        font-size: 1.3em;
        position: absolute;
        top: 165px;
        left: -40px;
       }

       Small {
        margin-left: 16%;
       }

       .email {
        font-size: 1.3em;
        position: absolute;
        top: 240px;
        left: -40px;
       }

       .phone {
        font-size: 1.3em;
        position: absolute;
        top: 300px;
        left: -40px;
       }

       .cpf {
        font-size: 1.3em;
        position: absolute;
        top: 360px;
        left: -40px;
       }

       .password {
        font-size: 1.3em;
        position: absolute;
        top: 420px;
        left: -40px;
       }

       .confirm-password {
        font-size: 1.3em;
        position: absolute;
        top: 480px;
        left: -40px;
       }

       /* .adm {
        position: absolute;
        top: 530px;
        left: -170px;
    }
    
    .adm-txt {
        position: absolute;
        top: 25px;
        left: 250px;
    }

    .user {
        position: absolute;
        top: 530px;
        left: 20px;
    }
    
    .user-txt {
        position: absolute;
        top: 25px;
        left: 250px;
    }

    #enterprise-name {
        position: absolute;
        top: 30px;
        left: 130px;
        display: none;
    } */

       p {
        position: absolute;
        top: 560px;
        left: 185px;
       }

       .google-enter {
        position: absolute;
        top: 590px;
        left: 40px;
       }

       .btn-google {
        width: 40vw;
        height: 40px;
        font-size: 1.1em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
    }

       .btn-google:active {
        width: 40vw;
        height: 40px;
        font-size: 1.1em;
        background-color: #86a40f;
        border: none;
        border-radius: 39px;
        padding: 8px;
       }

       .page2 {
        margin-left: 10.5%;
        margin-top: -36%;
        font-size: 0.9em;
       }

       .criar {
        position: absolute;
        top: -145px;
        left: 70px;
        background-color: #93B413;
        width: 110px;
        height: 40px;
        border-radius: 15px;
       }

       .criar:active {
        position: absolute;
        top: -145px;
        left: 70px;
        background-color: #86a40f;
        width: 110px;
        height: 40px;
        border-radius: 15px;
       }

       .fox {
        position: absolute;
        top: 500px;
        left: 590px;
       }
    }

    // Small Screens
    @media(min-width: 992px) {

        height: 127.5vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/992px-create-user.svg");

        form {
            position: relative;
            left: 260px;
            top: 30px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 500px;
            height: 780px;
            border-color: white;
       }

        h1 {
            position: absolute;
            top: 35px;
            left: 160px;
            font-size: 2em;
        }

        .span1 {
            margin-left: -50%;
            font-size: 1em;
        }

        .span2 {
            margin-left: 65%;
            font-size: 1.05em;
            margin-top: -10%;
        }

        .span3 {
            margin-left: -65%;
            font-size: 1.05em;
        }

        .span4 {
            margin-left: -64%;
            font-size: 1.05em;
        }

        .span5 {
            margin-left: -69%;
            font-size: 1.05em;
        }

        .span6 {
            margin-left: -65%;
            font-size: 1.05em;
        }

        .span7 {
            margin-left: -43%;
            font-size: 1.05em;
        }

        .name {
            position: absolute;
            top: 90px;
            left: -21px;
        }

        #name {
            width: 350px;
        }

        .date {
            position: absolute;
            top: 155px;
            left: -21px;
        }

        Small {
        margin-left: 17%;
       }

        #birthday {
            width: 350px;
        }

        .email {
            position: absolute;
            top: 245px;
            left: -21px;
        }

        #email {
            width: 350px;
        }

        .phone {
            position: absolute;
            top: 310px;
            left: -21px;
        }

        #phone {
            width: 350px;
        }

        .cpf {
            position: absolute;
            top: 370px;
            left: -21px;
        }

        #cpf {
            width: 350px;
        }

        .password {
            position: absolute;
            top: 430px;
            left: -21px;
        }

        #password {
            width: 350px;
        }

        .confirm-password {
            position: absolute;
            top: 490px;
            left: -21px;
        }

        #confirm-password {
            width: 350px;
        }

        /* .adm {
        position: absolute;
        top: 570px;
        left: -200px;
    }
    
    .adm-txt {
        position: absolute;
        top: 25.4px;
        left: 320px;
        font-size: 1em;
    }

    .user {
        position: absolute;
        top: 570px;
        left: 43px;
    }
    
    .user-txt {
        position: absolute;
        top: 25.4px;
        left: 320px;
        font-size: 1em;
    }

    #enterprise-name {
        position: absolute;
        top: 30px;
        left: 130px;
        display: none;
    } */

    p {
        font-size: 1.2em;
        position: absolute;
        top: 570px;
        left: 230px;
    }

    .google-enter {
        position: absolute;
        top: 611px;
        left: 70px;
        cursor: pointer;
    }

    .btn-google {
        width: 320px;
        height: 40px;
        font-size: 1.1em;
        background-color: #93B413;
        border: none;
        border-radius: 39px;
        padding: 8px;
        margin-left: 5.5%;
    }

    .btn-google:hover {
        width: 320px;
        height: 40px;
        font-size: 1.1em;
        background-color: #9fc214;
        border: none;
        border-radius: 39px;
        padding: 8px;
        cursor: pointer;
        margin-left: 5.5%;
    }

    .btn-google:active {
        width: 320px;
        height: 40px;
        font-size: 1.1em;
        background-color: #86a40f;
        border: none;
        border-radius: 39px;
        padding: 8px;
        margin-left: 5.5%;
       }

       .page2 {
        margin-top: -24%;
        margin-left: 17%;
        font-size: 1em;
       }

       .criar {
        position: absolute;
        top: -115px;
        left: 120px;
        background-color: #93B413;
        cursor: pointer;
       }

       .criar:hover {
        position: absolute;
        top: -115px;
        left: 90px;
        background-color: #9fc214;
       }

       .criar:active {
        position: absolute;
        top: -115px;
        left: 90px;
        background-color: #86a40f;
       }

       .fox {
        width: 110px;
        position: absolute;
        left: 760px;
        top: 600px;
    }
}

    // Medium Screens
    @media(min-width: 1200px) {

        height: 165vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/1200px-create-user.svg");

        form {
            position: relative;
            left: 345px;
            top: 30px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 690px;
            height: 1020px;
            border-color: white;
        }

        .span1 {
            margin-left: -44%;
            font-size: 1.5em;
        }

        .span2 {
            margin-left: 62%;
            font-size: 1.2em;
            margin-top: -8%;
        }

        .span3 {
            margin-left: -63%;
            font-size: 1.5em;
        }

        .span4 {
            margin-left: -62%;
            font-size: 1.5em;
        }

        .span5 {
            margin-left: -69%;
            font-size: 1.5em;
        }

        .span6 {
            margin-left: -64%;
            font-size: 1.5em;
        }

        .span7 {
            margin-left: -34%;
            font-size: 1.5em;
        }

        h1 {
            font-size: 2.4em;
            position: absolute;
            left: 220px;
        }

        .name {
            position: absolute;
            top: 105px;
            left: -25px;
        }

        #name {
            font-size: large;
            width: 500px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .date {
            position: absolute;
            top: 185px;
            left: -25px;
        }

        Small {
            margin-top: -4%;
            margin-left: 17%;
            font-size: 0.8em;
       }

        #birthday {
            font-size: large;
            width: 500px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .email {
            position: absolute;
            top: 285px;
            left: -25px;
        }

        #email{
            font-size: large;
            width: 500px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .phone{
            position: absolute;
            top: 365px;
            left: -25px;
        }

        #phone{
            font-size: large;
            width: 500px;
        }

        #phone::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .cpf{
            position: absolute;
            top: 450px;
            left: -25px;
        }

        #cpf{
            font-size: large;
            width: 500px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .password {
            position: absolute;
            top: 535px;
            left: -25px;
        }

        #password {
            font-size: large;
            width: 500px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .confirm-password {
            position: absolute;
            top: 620px;
            left: -25px;
        }

        #confirm-password {
            font-size: large;
            width: 500px;
        }

        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        /* .adm {
        position: absolute;
        top: 710px;
        left: -280px;
    }
    
    .adm-txt {
        position: absolute;
        top: 20px;
        left: 415px;
        font-size: 1.5em;
    }

    .user {
        position: absolute;
        top: 710px;
        left: 100px;
    }
    
    .user-txt {
        position: absolute;
        top: 20px;
        left: 415px;
        font-size: 1.5em;
    }

    #enterprise-name {
        position: absolute;
        top: 30px;
        left: 130px;
        display: none;
    } */

        p {
            font-size: 1.7em;
            position: absolute;
            top: 710px;
            left: 320px;
        }

        .google-enter {
            position: absolute;
            top: 765px;
            left: 100px;
            cursor: pointer;
        }

        .btn-google {
            width: 500px;
            height: 70px;
            font-size: 2em;
            background-color: #93B413;
            border: none;
            border-radius: 39px;
            padding: 8px;
            margin-left: -0.5%;
        }

        .btn-google:hover {
            width: 500px;
            height: 70px;
            font-size: 2em;
            background-color: #9fc214;
            border: none;
            border-radius: 39px;
            padding: 8px;
            margin-left: -0.5%;
        }

        .btn-google:active {
            width: 500px;
            height: 70px;
            font-size: 2em;
            background-color: #86a40f;
            border: none;
            border-radius: 39px;
            padding: 8px;
            margin-left: -0.5%;
        }

        .faGoogle{
            width: 60px;
            height: 35px;
        }
        
        .page2 {
            font-size: 1.6em;
            margin-top: 10%;
            margin-left: 14%;
        }

        .criar {
            position: absolute;
            top: 95px;
            left: 175px;
            background-color: #93B413;
            width: 200px;
            height: 60px;
            font-size: 2.7em;
            cursor: pointer;
        }

        .criar:hover {
            position: absolute;
<<<<<<< HEAD
            top: 125px;
            left: 155px;
=======
            top: 95px;
            left: 175px;
>>>>>>> 44d15eb027fe80023e9fce4574d0256db45427d4
            background-color: #9fc214;
            width: 200px;
            height: 60px;
            font-size: 2.7em;
        }

        .criar:active {
            position: absolute;
<<<<<<< HEAD
            top: 125px;
            left: 155px;
=======
            top: 95px;
            left: 175px;
>>>>>>> 44d15eb027fe80023e9fce4574d0256db45427d4
            background-color: #86a40f;
            width: 200px;
            height: 60px;
            font-size: 2.7em;
        }

        .fox {
            width: 170px;
            position: absolute;
            left: 1035px;
            top: 700px;
        }
    }

    @media(min-width: 1400px) {
        height: 162vh;

        .mobile {
            display: none;
        }
    
        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/1400px-create-user.svg");

        form {
            margin-left: 3.5%;
        }

        .fox {
            width: 170px;
            position: absolute;
            left: 1087px;
            top: 700px;
        }
    }

    // Large Screens
    @media(min-width: 1600px) {

        height: 152vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: flex;
            justify-content: space-between;
        }

        background-image: url("/images/1600px-create-user.svg");

        form {
            position: relative;
            left: 350px;
            top: 45px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 890px;
            height: 1080px;
            border-color: white;
        }

        h1 {
            font-size: 3em;
            position: absolute;
            top: 40px;
            left: 290px;
        }

        .name {
            position: absolute;
            top: 115px;
            left: -35px;
        }

        #name {
            width: 650px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .date {
            position: absolute;
            top: 200px;
            left: -35px;
        }

        Small {
            margin-top: -7%;
            margin-left: 17%;
            font-size: 0.8em;
       }

        #birthday {
            width: 650px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .email{
            position: absolute;
            top: 310px;
            left: -35px;
        }

        #email {
            width: 650px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .phone {
            position: absolute;
            top: 390px;
            left: -35px;
        }

        #phone {
            width: 650px;
        }

        #phone::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .cpf {
            position: absolute;
            top: 470px;
            left: -35px;
        }

        #cpf {
            width: 650px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .password {
            position: absolute;
            top: 550px;
            left: -35px;
        }

        #password {
            width: 650px;
        }

        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        .confirm-password {
            position: absolute;
            top: 630px;
            left: -35px;
        }

        #confirm-password {
            width: 650px;
        }

        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.2em;
        }

        p {
            font-size: 2.2em;
            position: absolute;
            top: 750px;
            left: 415px;
        }

        .google-enter {
            position: absolute;
            top: 815px;
            left: 120px;
        }

        .btn-google {
            width: 520px;
            height: 70px;
            font-size: 2.2em;
            background-color: #93B413;
            border: none;
            border-radius: 39px;
            padding: 8px;
            margin-left: 12%;
        }

        .btn-google:hover {
            width: 520px;
            height: 70px;
            font-size: 2.2em;
            background-color: #9fc214;
            border: none;
            border-radius: 39px;
            padding: 8px;
            margin-left: 12%;
        }

        .btn-google:active {
            width: 520px;
            height: 70px;
            font-size: 2.2em;
            background-color: #86a40f;
            border: none;
            border-radius: 39px;
            padding: 8px;
            margin-left: 12%;
        }

        .page2 {
            font-size: 1.7em;
            margin-top: 14%;
            margin-left: 20%;
        }

        .criar {
            position: absolute;
            top: 155px;
            left: 270px;
        }

        .criar:hover {
            position: absolute;
            top: 155px;
            left: 270px;
            background-color: #9fc214;
            width: 200px;
            height: 60px;
            font-size: 2.7em;
        }

        .criar:active {
            position: absolute;
            top: 155px;
            left: 270px;
            background-color: #86a40f;
            width: 200px;
            height: 60px;
            font-size: 2.7em;
        }

        .fox {
            position: absolute;
            left: 1240px;
            top: 850px;
        }
    }

`;

const Small = styled.small`
font-size: 6px;
margin:0;
position:relative;
top:-20px;
left: 20px;`;

const Form2 = function() {
    return (
        <FormComponent2>
            <nav className='mobile'>
                {/* Stella our mascot */}
                <img src="/images/Stella2.png" alt="fox" className='fox'/>
                    <form>
                         {/* Create User form content */}
                        <h1>Criar Conta</h1>
                        <div className='name'>
                            <Input type="string" name="name" id="name" placeholder='Nome Completo '/>
                            {/* <span className='span1'>*</span> */}
                        </div>
                        <div className='date'>
                            <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                            <Small>Digite a Data de Nascimento</Small>
                            {/* <span className='span2'>*</span> */}
                        </div>
                        <div className='email'>
                            <Input type="email" name="email" id="email" placeholder='E-mail'/>
                            {/* <span className='span3'>*</span> */}
                        </div>
                        <div className='phone'>
                            <Input type="phone" name="phone" id="phone" placeholder='Celular'/>
                            {/* <span className='span4'>*</span> */}
                        </div>
                        <div className='cpf'>
                            <Input type="number" name="cpf" id="cpf" placeholder='CPF'/>
                            {/* <span className='span5'>*</span> */}
                        </div>
                        <div className='password'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                            {/* <span className='span6'>*</span> */}
                        </div>
                        <div className='confirm-password'>
                            <Input type="password" name="confirm-password" id="confirm-password" placeholder='Confirme sua Senha'/>
                            {/* <span className='span7'>*</span> */}
                        </div>
                        {/* <label>
                        <div className='adm'>
                            <Input type='radio' name='op' id='adm-enterprise' defaultValue='ADM'/> 
                            <p className='adm-txt'>Administrador</p>
                            <Input type='string' name='enterprise-name' id='enterprise-name' placeholder='Nome da Empresa'/>
                        </div>
                        <div className='user'>
                            <Input type='radio' name='op' id='user-hired' defaultValue='User'/> 
                            <p className='user-txt'>User</p>
                        </div>
                        </label> */}
                        <p>OU</p>
                            <div className='google-enter'>
                                    <button className='btn-google' type='button'>
                                        <FaGoogle className='faGoogle'/> Entrar com Google
                                    </button>
                            </div>
                            <div className='page2'>
                            Já tem uma conta? <Link href={'/LoginPage'}>
                                <span>Clique Aqui!</span>
                            </Link>
                            </div>
                            <div className='button-create'>
                            <button className='criar' type='button'>
                                <Link href={"/ProfilePage"}>Criar</Link>
                            </button>
                            </div>
                    </form>
            </nav>

            <nav className='tablet-desktops'>
                <form>
                    {/* Create User form content */}
                    <h1>Criar Conta</h1>
                    <div className='name'>
                        <Input type="string" name="name" id="name" placeholder='Nome Completo'/>
                        {/* <span className='span1'>*</span> */}
                    </div>
                    <div className='date'>
                            <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                            <Small>Digite a Data de Nascimento</Small> 
                            {/* <span className='span2'>*</span> */}
                        </div>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='E-mail'/>
                        {/* <span className='span3'>*</span> */}
                    </div>
                    <div className='phone'>
                            <Input type="phone" name="phone" id="phone" placeholder='Celular'/>
                            {/* <span className='span4'>*</span> */}
                        </div>
                        <div className='cpf'>
                            <Input type="number" name="cpf" id="cpf" placeholder='CPF'/>
                            {/* <span className='span5'>*</span> */}
                        </div>
                        <div className='password'>
                            <Input type="password" name="password" id="password" placeholder='Senha'/>
                            {/* <span className='span6'>*</span> */}
                        </div>
                        <div className='confirm-password'>
                            <Input type="password" name="confirm-password" id="confirm-password" placeholder='Confirme sua Senha'/>
                            {/* <span className='span7'>*</span> */}
                        </div>
                        {/* <label>
                        <div className='adm'>
                            <Input type='radio' name='op' id='adm-enterprise' defaultValue='ADM'/> 
                            <p className='adm-txt'>Administrador</p>
                            <Input type='string' name='enterprise-name' id='enterprise-name' placeholder='Nome da Empresa'/>
                        </div>
                        <div className='user'>
                            <Input type='radio' name='op' id='user-hired' defaultValue='User'/> 
                            <p className='user-txt'>User</p>
                        </div>
                        </label> */}
                        <p>OU</p>
                        <div className='google-enter'>
                            <button className='btn-google' type='button'>
                                <FaGoogle className='faGoogle'/> Entrar com Google
                            </button>
                        </div>
                        <div className='page2'>
                            Já tem uma conta? <Link href={'/LoginPage'}>
                                <span>Clique Aqui!</span>
                            </Link>
                        </div>
                         <div className='button-create'>
<<<<<<< HEAD
                            <Link href={'/ProfilePage'}>
                                <button className='criar' type='button'>
                                    Criar
                                </button>
                            </Link>
=======
                             <button className='criar' type='button'>
                                <Link href={"/ProfilePage"}>Criar</Link>
                            </button>
>>>>>>> 44d15eb027fe80023e9fce4574d0256db45427d4
                        </div>
                </form>
                {/* Stella our mascot */}
                    <img src="/images/Stella2.png" alt="fox" className='fox'/>
            </nav>
        </FormComponent2>
    )
}

export default Form2;