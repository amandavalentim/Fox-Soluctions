// Developed code by Gabriel

'use client'
import styled from '@emotion/styled';
import Image from 'next/image';
import {FaAngleLeft, FaAngleRight, FaImages, FaTimes} from "react-icons/fa";
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const SendDocumentsComponent = styled.section `

    // Mobile
    
    .mobile {
        display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
    }

    .tablet-desktops {
        display: none;
    }

    .dashboard-mobile{
        background-color: #3A9EB6;
        padding: 10px;
        display: flex;
        flex-direction: column;
        .icon-profile{
            display: flex; 
            justify-content: space-between;
            .search{
                display: flex;
                align-items: center;
                color: #FFFFFF;
                
            }
            .user-profile-mobile {
                min-width: 20px;
                min-height: 20px;
            }
            
        }
        .box-mobile{
            display: flex; 
            align-items: center;
            justify-content: center;
            flex-direction: row;
            .documents{
                background-color: #07B3FD;
                margin: 3px;
                padding: 6px;
                border-radius: 3px;
                width: 120px;
            }
            .number{
                text-align: center;
                color: #FFFFFF;
            }
            p{
                text-align: center;
                font-family: 'Poppins-Semibold';
                color: #FFFFFF;
            }
            .users{
                background-color: #F47216;
                margin: 3px;
                padding: 6px;
                border-radius: 3px;
                width: 120px;
            }
        }
        
    }

    height: 96vh;

    background: linear-gradient(180deg, #0A53B5 0%, #0081E8 100%);

    * {
        color: white;
        font-family: 'Poppins-Medium';
    }

    /* header {
            background-color: #2F99BF;
            height: 195px;
    }

    .search {
        width: 35px;
        height: 35px;
        margin-top: 4%;
        margin-left: 2%;
    }

    .box-1 {
        margin-top: 9%;
        margin-left: 15%;
        text-align: center;
        background-color: #07B3FD;
        width: 100px;
        height: 85px;
        border-radius: 4px;
        z-index: 1;
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
        width: 60px;
        height: 60px;
        position: absolute;
        top: 180px;
        margin-left: 78%;
    } */

    form {
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        height: 525px;
        width: 250px;
        margin-top: 10%;
        margin-left: 17.5%;
        text-align: center;
    }

    h1 {
        /* margin-left: 15.5%; */
        padding-top: 10%;
        font-size: 1.3em;
    }

    .rg {
        border-radius: 8px;
        background: #07AFFA;
        height: 90px;
        margin-top: 10%;
        font-size: 1.1em;
        text-align: center;
    }

    #rg-txt {
        padding-top: 13%;
        /* margin-left: 5%; */
        color: white;
    }

    .button1 {
        background: none;
        border: none;
        position: absolute;
        top: 430px;
        margin-left: 25%;
        font-size: 20px;
    }

    .next1 {
        fill: white;
    }

    .next1:active {
        fill: #dedcdc;
    }

    .cpf {
        padding-top: 12%;
        /* margin-left: 3%; */
        color: white;
        font-size: 1.1em;
        text-align: center;
    }

    .button2 {
        background: none;
        border: none;
        position: absolute;
        top: 515px;
        margin-left: 25%;
        font-size: 20px;
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
        font-size: 0.9em;
    }

    #date-txt {
        padding-top: 14%;
        /* margin-left: 3%; */
        color: white;
        text-align: center;
    }

    .button3 {
        background: none;
        border: none;
        position: absolute;
        top: 600px;
        margin-left: 25%;
        font-size: 20px;
    }

    .next3 {
        fill: white;
    }

    .next3:active {
        fill: #dedcdc;
    }

    .cnh {
        padding-top: 12%;
        /* margin-left: 3%; */
        text-align: center;
        color: white;
        font-size: 0.9em;
    }

    .button4 {
        background: none;
        border: none;
        position: absolute;
        top: 696px;
        margin-left: 25%;
        font-size: 20px;
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
        font-size: 1em;
    }

    #ct-txt {
        padding-top: 14%;
        text-align: center;
        color: white;
    }

    .button5 {
        background: none;
        border: none;
        position: absolute;
        top: 790px;
        margin-left: 25%;
        font-size: 20px;
    }

    .next5 {
        fill: white;
    }

    .next5:active {
        fill: #dedcdc;
    }

    .send-rg ul{
        display: block;
        position: fixed;
        right: -90vw;
        width: 90vw;
        height: 300px;
        border-radius: 20px;
        background: #0A53B5;
        z-index: 1;
        top: 25%;
    }

    .send-rg.open ul{
        right: 5vw;
    }

    .close {
        fill: white;
        font-size: 30px;
        margin-top: 5%;
        margin-left: 70%;
    }

    .button-close {
        border: none;
        background: none;
        color: #fff;
    }

    .backdrop {
        display: none;
    }

    .send-rg.open .backdrop {
        opacity: .5;
        display: block;
    }

    .send-rg .backdrop {
        opacity: 0;
        background-color: #000;
        transition: opacity .15s linear;
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 1;
        left: 0;
        top: 0;
    }

    li {
        width: 350px;
    }

    .rg-txt {
        margin-left: 11%;
        margin-top: -5%;
    }

    .photo {
        display: none;
    }

    .choose-a-image {
        background-color: white;
        width: 250px;
        height: 150px;
        margin-left: 6.5%;
        margin-top: 8%;
        border-radius: 10px;
    }

    .label {
        color: #000;
        font-family: 'Poppins-Medium';
        margin-left: 14%;
        top: 150px;
        position: absolute;
        text-align: center;
        font-size: 1em;
    }

    .image {
        fill: #000;
        margin-top: 40%;
        margin-left: 43%;
        font-size: 1.5em;
    }

    .backdrop2 {
        display: none;
    }

    .send-cpf.open .backdrop2 {
        opacity: .5;
        display: block;
    }

    .send-cpf .backdrop2 {
        opacity: 0;
        background-color: #000;
        transition: opacity .15s linear;
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 1;
        left: 0;
        top: 0;
    }

    .send-cpf ul{
        display: block;
        position: fixed;
        right: -90vw;
        width: 90vw;
        height: 300px;
        border-radius: 20px;
        background: #0A53B5;
        z-index: 1;
        top: 25%;
    }

    .send-cpf.open ul{
        right: 5vw;
    }

    .cpf-txt {
        margin-left: 35.5%;
        margin-top: -5%;
    }

    .choose-a-image2 {
        background-color: white;
        width: 250px;
        height: 150px;
        margin-left: 6.5%;
        margin-top: 7%;
        border-radius: 10px;
    }

    .label2 {
        color: #000;
        font-family: 'Poppins-Medium';
        margin-left: 15%;
        top: 150px;
        position: absolute;
        text-align: center;
        font-size: 1em;
    }

    .image2 {
        fill: #000;
        margin-top: 40%;
        margin-left: 45%;
        font-size: 1.5em;
    }

    .photo2 {
        display: none;
    }

    .backdrop3 {
        display: none;
    }

    .send-date.open .backdrop3 {
        opacity: .5;
        display: block;
    }

    .send-date .backdrop3 {
        opacity: 0;
        background-color: #000;
        transition: opacity .15s linear;
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 1;
        left: 0;
        top: 0;
    }

    .send-date ul{
        display: block;
        position: fixed;
        right: -90vw;
        width: 90vw;
        height: 300px;
        border-radius: 20px;
        background: #0A53B5;
        z-index: 1;
        top: 25%;
    }

    .send-date.open ul{
        right: 5vw;
    }

    .date-txt {
        margin-top: -5%;
        margin-left: 8.5%;
    }

    .choose-a-image3 {
        background-color: white;
        width: 250px;
        height: 150px;
        margin-left: 6.5%;
        margin-top: 8%;
        border-radius: 10px;
    }

    .label3 {
        color: #000;
        font-family: 'Poppins-Medium';
        margin-left: 15%;
        top: 150px;
        position: absolute;
        text-align: center;
        font-size: 1.3em;
    }

    .image3 {
        fill: #000;
        margin-top: 40%;
        margin-left: 45.5%;
        font-size: 1.8em;
    }

    .photo3 {
        display: none;
    }

    .backdrop4 {
        display: none;
    }

    .send-cnh.open .backdrop4 {
        opacity: .5;
        display: block;
    }

    .send-cnh .backdrop4 {
        opacity: 0;
        background-color: #000;
        transition: opacity .15s linear;
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 1;
        left: 0;
        top: 0;
    }

    .send-cnh ul{
        display: block;
        position: fixed;
        right: -90vw;
        width: 90vw;
        height: 300px;
        border-radius: 20px;
        background: #0A53B5;
        z-index: 1;
        top: 25%;
    }

    .send-cnh.open ul{
        right: 5vw;
    }

    .cnh-txt {
        margin-top: -5%;
        margin-left: -17%;
        font-size: 1.2em;
        text-align: center;
    }

    .choose-a-image4 {
        background-color: white;
        width: 250px;
        height: 150px;
        margin-left: 6.5%;
        margin-top: 4%;
        border-radius: 10px;
    }

    .label4 {
        color: #000;
        font-family: 'Poppins-Medium';
        margin-left: 11%;
        top: 160px;
        position: absolute;
        text-align: center;
        font-size: 1.3em;
    }

    .image4 {
        fill: #000;
        margin-top: 40%;
        margin-left: 45.5%;
        font-size: 1.9em;
    }

    .photo4 {
        display: none;
    }

    .backdrop5 {
        display: none;
    }

    .send-ct.open .backdrop5 {
        opacity: .5;
        display: block;
    }

    .send-ct .backdrop5 {
        opacity: 0;
        background-color: #000;
        transition: opacity .15s linear;
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 1;
        left: 0;
        top: 0;
    }

    .send-ct ul{
        display: block;
        position: fixed;
        right: -90vw;
        width: 90vw;
        height: 300px;
        border-radius: 20px;
        background: #0A53B5;
        z-index: 1;
        top: 25%;
    }

    .send-ct.open ul{
        right: 5vw;
    }

    .ct-txt {
        margin-top: -5%;
        margin-left: 12.5%;
        font-size: 1.3em;
    }

    .choose-a-image5 {
        background-color: white;
        width: 250px;
        height: 150px;
        margin-left: 6.5%;
        margin-top: 8%;
        border-radius: 10px;
    }

    .label5 {
        color: #000;
        font-family: 'Poppins-Medium';
        margin-left: 15%;
        top: 150px;
        position: absolute;
        text-align: center;
        font-size: 1.3em;
    }

    .image5 {
        fill: #000;
        margin-top: 40%;
        margin-left: 45.5%;
        font-size: 1.8em;
    }

    .photo5 {
        display: none;
    }

    .previous {
        border: none;
        background-color: #93B413;
        margin-left: 34%;
        margin-top: 10%;
        border-radius: 10px;
        width: 40px;
        height: 40px;
        fill: #fff;
        font-size: 20px;
    }

    .previous:active {
        border: none;
        background-color: #86a40f;
        margin-left: 34%;
        margin-top: 10%;
        border-radius: 10px;
        width: 40px;
        height: 40px;
        fill: #fff;
        font-size: 20px;
    }

    #previous {
        margin-top: 2%;
        margin-left: -1%;
    }

    .next {
        border: none;
        background-color: #93B413;
        margin-left: 12%;
        margin-top: 10%;
        border-radius: 10px;
        width: 40px;
        height: 40px;
        fill: #fff;
        font-size: 20px;
    }

    .next:active {
        border: none;
        background-color: #86a40f;
        margin-left: 12%;
        margin-top: 10%;
        border-radius: 10px;
        width: 40px;
        height: 40px;
        fill: #fff;
        font-size: 20px;
    }

    #next {
        margin-top: 2%;
        margin-left: -1%;
    }

    // Tablet
    @media(min-width: 768px) {

        height: 133vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        background: linear-gradient(180deg, #0A53B5 0%, #0A53B5 100%);

        .dashboard-desktop {
            background-color: #3A9EB6;
            padding: 10px;
            display: flex;
            flex-direction: column;
            height: 23vh;
        }

        .search{
            display: flex;
            align-items: center;
            color: #FFFFFF;
            margin-top: 1%;
        }

        .box-desktop {
            display: flex; 
            align-items: center;
            justify-content: center;
            flex-direction: row;
        }

        .documents{
            background-color: #07B3FD;
            margin: 3px;
            padding: 6px;
            border-radius: 3px;
            width: 120px;
            margin-left: 1%;
        }

        .number {
            text-align: center;
            color: #FFFFFF;
        }
            
        p {
            text-align: center;
            font-family: 'Poppins-Semibold';
            color: #FFFFFF;
        }

        .users {
            background-color: #F47216;
            margin: 3px;
            padding: 6px;
            border-radius: 3px;
            width: 120px;
        }

        .user-profile-desktop {
            min-width: 20px;
            min-height: 20px;
            margin-left: 93%;
            margin-top: -15%;
        }

        .icon-profile{
            display: flex; 
            justify-content: space-between;
        }

        /* header {
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
        } */

        form {
            margin-left: 17%;
            margin-top: 7%;
            width: 500px;
            height: 600px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
            text-align: center;
        }

        h1 {
            font-size: 1.4em;
            /* margin-left: 32.5%; */
        }

        .rg {
            border-radius: 8px;
            background: #07AFFA;
            height: 95px;
            margin-top: 5%;
            font-size: 1.2em;
            text-align: center;
        }

        .rg-txt {
            font-size: 5em;
        }

        #rg-txt {
            padding-top: 6.5%;
            /* margin-left: 3%; */
            color: white;
        }

        .button1 {
            background: none;
            border: none;
            position: absolute;
            top: 492px;
            margin-left: 25%;
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
            font-size: 1.2em;
            text-align: center;
        }

        .button2 {
            background: none;
            border: none;
            position: absolute;
            top: 589px;
            margin-left: 25.1%;
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
            height: 95px;
            margin-top: 5%;
            font-size: 1.1em;
            text-align: center;
        }

        #date-txt {
            padding-top: 6.5%;
            /* margin-left: 3%; */
            color: white;
            text-align: center;
        }

        .button3 {
            background: none;
            border: none;
            position: absolute;
            top: 676px;
            margin-left: 25.2%;
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
            font-size: 1em;
        }

        .button4 {
            background: none;
            border: none;
            position: absolute;
            top: 775px;
            margin-left: 25.7%;
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
            height: 95px;
            margin-top: 5%;
            font-size: 1em;
        }

        #ct-txt {
            padding-top: 6%;
            /* margin-left: 3%; */
            text-align: center;
            color: white;
        }

        .button5 {
            background: none;
            border: none;
            position: absolute;
            top: 855px;
            margin-left: 26%;
            font-size: 1.2em;
        }

        .next5 {
            fill: white;
        }

        .next5:active {
            fill: #dedcdc;
        }

        .backdrop-rg {
            display: none;
        }

        .send-rg2.open .backdrop-rg {
            opacity: .5;
            display: block;
        }

        .send-rg2 .backdrop-rg {
            opacity: 0;
            background-color: #000;
            transition: opacity .15s linear;
            position: fixed;
            width: 100%;
            height: 100vh;
            z-index: 1;
            left: 0;
            top: 0;
        }

        .send-rg2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 60vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 21.5%;
        }

        .send-rg2.open ul{
            right: 19vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .rg-txt {
            font-size: 1.1em;
            margin-left: 29.5%;
            width: 560px;
        }

        .choose-a-image {
            background-color: #fff;
            margin-top: 5%;
            margin-left: 11.6%;
            width: 350px;
        }

        .label {
            margin-top: 5%;
            margin-left: 12.5%;
        }

        .image {
            margin-top: 28%;
            margin-left: 44%;
        }

        .backdrop-cpf {
            display: none;
        }

        .send-cpf2.open .backdrop-cpf {
            opacity: .5;
            display: block;
        }

        .send-cpf2 .backdrop-cpf {
            opacity: 0;
            background-color: #000;
            transition: opacity .15s linear;
            position: fixed;
            width: 100%;
            height: 100vh;
            z-index: 1;
            left: 0;
            top: 0;
        }

        .send-cpf2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 60vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 21.5%;
        }

        .send-cpf2.open ul{
            right: 19vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .cpf-txt {
            font-size: 1.2em;
            margin-left: 57.5%;
        }

        .backdrop-date {
            display: none;
        }

        .send-date2.open .backdrop-date {
            opacity: .5;
            display: block;
        }

        .send-date2 .backdrop-date {
            opacity: 0;
            background-color: #000;
            transition: opacity .15s linear;
            position: fixed;
            width: 100%;
            height: 100vh;
            z-index: 1;
            left: 0;
            top: 0;
        }

        .send-date2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 60vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 21.5%;
        }

        .send-date2.open ul{
            right: 19vw;
        }

        .date-txt {
            font-size: 1.1em;
            width: 340px;
            margin-left: 16%;
        }

        .backdrop-cnh {
            display: none;
        }

        .send-cnh2.open .backdrop-cnh {
            opacity: .5;
            display: block;
        }

        .send-cnh2 .backdrop-cnh {
            opacity: 0;
            background-color: #000;
            transition: opacity .15s linear;
            position: fixed;
            width: 100%;
            height: 100vh;
            z-index: 1;
            left: 0;
            top: 0;
        }

        .send-cnh2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 60vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 21.5%;
        }

        .send-cnh2.open ul{
            right: 19vw;
        }

        .cnh-txt {
            font-size: 1em;
            width: 340px;
            margin-left: 16%;
        }

        .choose-a-image-cnh {
            background-color: white;
            width: 350px;
            height: 150px;
            margin-top: 2.5%;
            margin-left: 11.6%;
            border-radius: 10px;
        }

        .label-cnh {
            padding-top: 5%;
            margin-left: 16.7%;
            color: #000;
            font-size: 1em;
            font-family: 'Poppins-Medium';
        }

        .image-cnh {
            fill: #000;
            font-size: 1.5em;
            margin-left: 44%;
            margin-top: 2%;
        }

        .backdrop-ct {
            display: none;
        }

        .send-ct2.open .backdrop-ct {
            opacity: .5;
            display: block;
        }

        .send-ct2 .backdrop-ct {
            opacity: 0;
            background-color: #000;
            transition: opacity .15s linear;
            position: fixed;
            width: 100%;
            height: 100vh;
            z-index: 1;
            left: 0;
            top: 0;
        }

        .send-ct2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 60vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 20.5%;
        }

        .send-ct2.open ul{
            right: 19vw;
        }

        .ct-txt {
            font-size: 1.1em;
            width: 340px;
            margin-left: 24.5%;
        }

        .previous {
            margin-left: 5%;
            margin-top: 2%;
        }

        .previous:active {
            margin-left: 5%;
            margin-top: 2%;
        }

        #previous {
            margin-top: -3%;
            padding-top: 1%;
            font-size: 1.3em;
        }

        .previous-button {
            border: none;
            background-color: #93B413;
            border-radius: 10px;
            width: 120px;
            height: 40px;
        }

        .previous-button:active {
            border: none;
            background-color: #86a40f;
            border-radius: 10px;
            width: 120px;
            height: 40px;
        }

        .next {
            margin-left: 80%;
            margin-top: -5.1%;
        }

        .next:active {
            margin-left: 80%;
            margin-top: -5.1%;
        }

        #next {
            margin-top: -3%;
            padding-top: 1%;
            font-size: 1.3em;
        }

        .next-button {
            border: none;
            background-color: #93B413;
            border-radius: 10px;
            width: 120px;
            height: 40px;
        }

        .next-button:active {
            border: none;
            background-color: #86a40f;
            border-radius: 10px;
            width: 120px;
            height: 40px;
        }
    }

    // Small Screens
    @media(min-width: 992px) {

        height: 140vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* .search {
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
        } */

            .dashboard-desktop{
            background-color: #3A9EB6;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .search{
                margin: 20px;
                color: #FFFFFF;
                cursor: pointer;
            }
            .search:hover, .search:focus{
                transform: translateX(1px) scale(1.1);
                    
            }
            .box-desktop{
                display: flex;
                text-align: center;
                flex-direction: row;
                .documents{
                    background-color: #07B3FD;
                    margin: 10px;
                    padding: 20px;
                    border-radius: 3px;
                    width: 150px;
                    height: 110px;
                }
                .documents:hover, .documents:focus{
                    transform: translateX(1px) scale(1.1);
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                }
                h2{
                    color: #FFFFFF;
                }
                p{
                    color: #FFFFFF;
                    font-family: 'Poppins-Semibold';
                    margin: 8px;
                }
                .users{
                    background-color: #F47216;
                    margin: 10px;
                    padding: 20px;
                    border-radius: 3px;
                    width:  150px;
                    height: 110px;
                    
                }
                .users:hover, .users:focus{
                    transform: translateX(1px) scale(1.1);
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                    
                }
            }
            .user-profile-desktop{
                margin: 20px;
                cursor: pointer;
            }
            .user-profile-desktop:hover, .user-profile-desktop:focus{
                transform: translateX(1px) scale(1.1);
            }
        }

        form {
            margin-left: 20.1%;
            width: 605px;
            height: 580px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
            margin-top: 5%;
            text-align: center;
        }

        h1 {
            font-size: 1.6em;
            /* margin-left: 34.5%; */
            text-align: center;
        }

        .rg {
            border-radius: 8px;
            background: #07AFFA;
            height: 100px;
            margin-top: 8%;
            font-size: 1.4em;
        }

        #rg-txt {
            padding-top: 5.5%;
            /* margin-left: 4%; */
            text-align: center;
            color: white;
        }

        .button1 {
            background: none;
            border: none;
            position: absolute;
            top: 534px;
            margin-left: 25%;
            font-size: 1.2em;
            cursor: pointer;
        }

        .next1 {
            fill: white;
        }

        .next1:active {
            fill: #dedcdc;
        }

        .cpf {
            margin-top: -6.5%;
            font-size: 1.5em;
            text-align: center;
            /* margin-left: 4%; */
        }

        .button2 {
            background: none;
            border: none;
            position: absolute;
            top: 632px;
            margin-left: 25.1%;
            font-size: 1.2em;
            cursor: pointer;
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
            height: 100px;
            margin-top: 3.5%;
            font-size: 1.5em;
        }

        #date-txt {
            padding-top: 5.3%;
            /* margin-left: 4%; */
            text-align: center;
            color: white;
        }

        .button3 {
            background: none;
            border: none;
            position: absolute;
            top: 722px;
            margin-left: 25.1%;
            font-size: 1.2em;
            cursor: pointer;
        }

        .next3 {
            fill: white;
        }

        .next3:active {
            fill: #dedcdc;
        }

        .cnh {
            margin-top: -6.5%;
            font-size: 1.5em;
            /* margin-left: 4%; */
            text-align: center;
        }

        .button4 {
            background: none;
            border: none;
            position: absolute;
            top: 823px;
            margin-left: 25.1%;
            font-size: 1.2em;
            cursor: pointer;
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
            height: 100px;
            margin-top: 3.5%;
            font-size: 1.5em;
        }

        #ct-txt {
            padding-top: 5%;
            /* margin-left: 4%; */
            text-align: center;
            color: white;
        }

        .button5 {
            background: none;
            border: none;
            position: absolute;
            top: 908px;
            margin-left: 25.2%;
            font-size: 1.2em;
            cursor: pointer;
        }

        .next5 {
            fill: white;
        }

        .next5:active {
            fill: #dedcdc;
        }

        .send-rg2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 45vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-rg2.open ul{
            right: 26vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .rg-txt {
            font-size: 1.1em;
            margin-left: 32.5%;
            width: 560px;
        }

        .choose-a-image {
            background-color: #fff;
            margin-top: 5%;
            margin-left: 11.6%;
            width: 350px;
            cursor: pointer;
        }

        .label {
            margin-top: 4%;
            margin-left: 13.5%;
            cursor: pointer;
        }

        .image {
            margin-top: 28%;
            margin-left: 44%;
            cursor: pointer;
        }

        .send-cpf2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 45vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-cpf2.open ul{
            right: 26vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .cpf-txt {
            font-size: 1.3em;
            margin-left: 57.5%;
            width: 560px;
        }

        .send-date2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 45vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-date2.open ul{
            right: 26vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .date-txt {
            font-size: 1.1em;
            margin-left: 20.5%;
            width: 560px;
        }

        .send-cnh2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 45vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-cnh2.open ul{
            right: 26vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .cnh-txt {
            font-size: 1.1em;
            margin-left: -14.5%;
            width: 560px;
        }

        .choose-a-image-cnh {
            margin-top: 8%;
            cursor: pointer;
        }

        .label-cnh {
            cursor: pointer;
        }

            .image-cnh {
                cursor: pointer;
            }

        .send-ct2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 45vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-ct2.open ul{
            right: 26vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .ct-txt {
            font-size: 1.1em;
            margin-left: 20.5%;
            width: 560px;
        }

        .previous {
            margin-left: 5%;
            margin-top: 8%;
        }

        .previous:active {
            margin-left: 5%;
            margin-top: 8%;
        }

        #previous {
            margin-top: -3%;
            padding-top: 1%;
            font-size: 1.6em;
        }

        .previous-button {
            border: none;
            background-color: #93B413;
            border-radius: 10px;
            width: 150px;
            height: 50px;
        }

        .previous-button:active {
            border: none;
            background-color: #86a40f;
            border-radius: 10px;
            width: 150px;
            height: 50px;
        }

        .next {
            margin-left: 80%;
            margin-top: -3.9%;
        }

        .next:active {
            margin-left: 80%;
            margin-top: -3.9%;
        }

        #next {
            margin-top: -3%;
            padding-top: 1%;
            font-size: 1.6em;
        }

        .next-button {
            border: none;
            background-color: #93B413;
            border-radius: 10px;
            width: 150px;
            height: 50px;
        }

        .next-button:active {
            border: none;
            background-color: #86a40f;
            border-radius: 10px;
            width: 150px;
            height: 50px;
        }
    }

    // Medium Screens
    @media(min-width: 1200px) {

        height: 151vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* header {
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
        } */

        form {
            margin-top: 6%;
            margin-left: 24.5%;
            width: 680px;
            height: 630px;
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
            text-align: center;
        }

        h1 {
            font-size: 1.8em;
            padding-top: 7%;
            /* margin-left: 34.5%; */
            text-align: center;
        }

        .rg {
            border-radius: 8px;
            background: #07AFFA;
            height: 100px;
            margin-top: 6%;
            font-size: 1.6em;
        }

        #rg-txt {
            padding-top: 4.5%;
            /* margin-left: 4%; */
            text-align: center;
            color: white;
        }

        .button1 {
            background: none;
            border: none;
            position: absolute;
            top: 545px;
            margin-left: 21%;
            font-size: 1.2em;
            cursor: pointer;
        }

        .next1 {
            fill: white;
        }

        .next1:active {
            fill: #dedcdc;
        }

        .cpf {
            margin-top: -7%;
            font-size: 1.6em;
            /* margin-left: 4%; */
            text-align: center;
        }

        .button2 {
            background: none;
            border: none;
            position: absolute;
            top: 648px;
            margin-left: 21.1%;
            font-size: 1.2em;
            cursor: pointer;
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
            height: 100px;
            margin-top: 4%;
            font-size: 1.6em;
        }

        #date-txt {
            padding-top: 4.5%;
            /* margin-left: 4%; */
            text-align: center;
            color: white;
        }

        .button3 {
            background: none;
            border: none;
            position: absolute;
            top: 746px;
            margin-left: 21.15%;
            font-size: 1.2em;
            cursor: pointer;
        }

        .next3 {
            fill: white;
        }

        .next3:active {
            fill: #dedcdc;
        }

        .cnh {
            margin-top: -6%;
            font-size: 1.6em;
            /* margin-left: 4%; */
            text-align: center;
        }

        .button4 {
            background: none;
            border: none;
            position: absolute;
            top: 855px;
            margin-left: 21.25%;
            font-size: 1.2em;
            cursor: pointer;
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
            height: 100px;
            margin-top: 4%;
            font-size: 1.6em;
        }

        #ct-txt {
            padding-top: 4.5%;
            /* margin-left: 4%; */
            text-align: center;
            color: white;
        }

        .button5 {
            background: none;
            border: none;
            position: absolute;
            top: 950px;
            margin-left: 21.3%;
            font-size: 1.2em;
            cursor: pointer;
        }

        .next5 {
            fill: white;
        }

        .next5:active {
            fill: #dedcdc;
        }

        .send-rg2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 35vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-rg2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .rg-txt {
            font-size: 1.1em;
            margin-left: 33.5%;
            width: 560px;
        }

        .choose-a-image {
            height: 170px;
            margin-left: 13%;
            cursor: pointer;
        }

        .label {
            margin-top: 2%;
            cursor: pointer;
        }

        .image {
            margin-top: 30%;
            cursor: pointer;
        }

        .send-cpf2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 35vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-cpf2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .cpf-txt {
            font-size: 1.3em;
            margin-left: 58.5%;
            width: 560px;
        }

        .send-date2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 35vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-date2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .date-txt {
            font-size: 1.1em;
            margin-left: 23.5%;
            width: 560px;
        }

        .send-cnh2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 35vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-cnh2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .cnh-txt {
            font-size: 1.1em;
            margin-left: -11.5%;
            width: 560px;
        }

        .choose-a-image-cnh {
            height: 170px;
            margin-left: 13%;
            cursor: pointer;
        }

        .label-cnh {
            margin-top: 2%;
            margin-left: 18.3%;
            cursor: pointer;
        }

        .image-cnh{
            margin-top: 5%;
            cursor: pointer;
        }

        .send-ct2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 35vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-ct2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .ct-txt {
            font-size: 1.1em;
            margin-left: 23.5%;
            width: 560px;
        }

        .previous {
            margin-left: 6%;
            margin-top: 4%;
        }

        .previous:active {
            margin-left: 6%;
            margin-top: 4%;
        }

        #previous {
            margin-top: -3%;
            padding-top: 1%;
            font-size: 1.6em;
        }

        .previous-button {
            border: none;
            background-color: #93B413;
            border-radius: 10px;
            width: 150px;
            height: 50px;
        }

        .previous-button:active {
            border: none;
            background-color: #86a40f;
            border-radius: 10px;
            width: 150px;
            height: 50px;
        }

        .next {
            margin-left: 83%;
            margin-top: -2.8%;
        }

        .next:active {
            margin-left: 83%;
            margin-top: -2.8%;
        }

        #next {
            margin-top: -3%;
            padding-top: 1%;
            font-size: 1.6em;
        }

        .next-button {
            border: none;
            background-color: #93B413;
            border-radius: 10px;
            width: 150px;
            height: 50px;
        }

        .next-button:active {
            border: none;
            background-color: #86a40f;
            border-radius: 10px;
            width: 150px;
            height: 50px;
        }
    }

    @media(min-width: 1400px) {

        height: 155vh;

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        .search {
            margin-top: 5%;
            margin-left: 5%;
        }

        .box-1 {
            margin-top: -7.5%;
        }

        .box-2 {
            margin-left: 55%;
            margin-top: -11.5%;
        }

        .users {
            margin-top: -8%;
        }

        .documents {
            margin-top: -8%;
        }

        form {
            margin-left: 27.8%;
        }

        h1 {
            /* margin-left: 36%; */
        }

        .button1 {
            margin-left: 20%;
            position: absolute;
            top: 550px;
        }

        .button2 {
            margin-left: 20.05%;
            position: absolute;
            top: 653px;
        }

        .button3 {
            margin-left: 20.1%;
            position: absolute;
            top: 750px;
        }

        .button4 {
            margin-left: 20.2%;
            position: absolute;
            top: 860px;
        }

        .button5 {
            margin-left: 20.2%;
            position: absolute;
            top: 958px;
        }

        .send-rg2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 30vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-rg2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .rg-txt {
            font-size: 1.1em;
            margin-left: 33.5%;
            width: 560px;
        }

        .choose-a-image {
            height: 170px;
            margin-left: 10.5%;
            cursor: pointer;
        }

        .label {
            margin-top: 2%;
            cursor: pointer;
            margin-left: 17%;
        }

        .image {
            margin-top: 30%;
            cursor: pointer;
            margin-left: 45%;
        }

        .send-cpf2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 30vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-cpf2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .cpf-txt {
            font-size: 1.1em;
            margin-left: 57.5%;
            width: 560px;
        }

        .send-date2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 30vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-date2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .date-txt {
            font-size: 1.1em;
            margin-left: 24.7%;
            width: 560px;
        }

        .send-ct2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 30vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-ct2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .ct-txt {
            font-size: 1.1em;
            margin-left: 29.5%;
            width: 560px;
        }

        .send-cnh2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 30vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .cnh-txt {
            font-size: 1.1em;
            margin-left: -15.5%;
            width: 560px;
        }

        .choose-a-image-cnh {
            height: 170px;
            margin-left: 11%;
            cursor: pointer;
        }

        .label-cnh {
            margin-top: 2%;
            margin-left: 22.3%;
            cursor: pointer;
        }

        .image-cnh{
            margin-top: 5%;
            cursor: pointer;
        }

        .previous {
            margin-left: 6%;
            margin-top: 4%;
        }

        .previous:active {
            margin-left: 6%;
            margin-top: 4%;
        }

        #previous {
            margin-top: -3%;
            padding-top: 1%;
            font-size: 2em;
        }

        .previous-button {
            border: none;
            background-color: #93B413;
            border-radius: 10px;
            width: 170px;
            height: 60px;
            cursor: pointer;
        }

        .previous-button:active {
            border: none;
            background-color: #86a40f;
            border-radius: 10px;
            width: 170px;
            height: 60px;
            cursor: pointer;
        }

        .next {
            margin-left: 83%;
            margin-top: -2.7%;
        }

        .next:active {
            margin-left: 83%;
            margin-top: -2.7%;
        }

        #next {
            margin-top: -3%;
            padding-top: 1%;
            font-size: 2em;
        }

        .next-button {
            border: none;
            background-color: #93B413;
            border-radius: 10px;
            width: 170px;
            height: 60px;
            cursor: pointer;
        }

        .next-button:active {
            border: none;
            background-color: #86a40f;
            border-radius: 10px;
            width: 170px;
            height: 60px;
            cursor: pointer;
        }
    }

    @media(min-width: 1600px) {

        height: 135vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
            justify-content: center;
            align-items: center;
        }

        /* header {
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
            height: 700px;
        } */

        form {
            margin-left: 27.5%;
            margin-top: 3.5%;
            text-align: center;
        }

        h1 {
            font-size: 2em;
            /* margin-left: 33%; */
        }

        .rg {
            border-radius: 8px;
            background: #07AFFA;
            height: 100px;
            margin-top: 6%;
            font-size: 1.5em;
        }

        #rg-txt {
            padding-top: 5.7%;
            /* margin-left: 4%; */
            text-align: center;
            color: white;
        }

        .button1 {
            background: none;
            border: none;
            position: absolute;
            top: 548px;
            margin-left: 18%;
            font-size: 1.2em;
            cursor: pointer;
        }

        .next1 {
            fill: white;
        }

        .next1:active {
            fill: #dedcdc;
        }

        .cpf {
            margin-top: -6%;
            font-size: 1.5em;
            /* margin-left: 4%; */
            text-align: center;
        }

        .button2 {
            background: none;
            border: none;
            position: absolute;
            top: 650px;
            margin-left: 18.1%;
            font-size: 1.2em;
            cursor: pointer;
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
            height: 100px;
            margin-top: 4.5%;
            font-size: 1.5em;
        }

        #date-txt {
            padding-top: 5.7%;
            /* margin-left: 4%; */
            text-align: center;
            color: white;
        }

        .button3 {
            background: none;
            border: none;
            position: absolute;
            top: 755px;
            margin-left: 18.2%;
            font-size: 1.2em;
            cursor: pointer;
        }

        .next3 {
            fill: white;
        }

        .next3:active {
            fill: #dedcdc;
        }

        .cnh {
            margin-top: -6%;
            font-size: 1.5em;
            /* margin-left: 4%; */
            text-align: center;
        }

        .button4 {
            background: none;
            border: none;
            position: absolute;
            top: 857px;
            margin-left: 18.3%;
            font-size: 1.2em;
            cursor: pointer;
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
            height: 100px;
            margin-top: 4.5%;
            font-size: 1.5em;
        }

        #ct-txt {
            padding-top: 5.7%;
            /* margin-left: 4%; */
            text-align: center;
            color: white;
        }

        .button5 {
            background: none;
            border: none;
            position: absolute;
            top: 961px;
            margin-left: 18.4%;
            font-size: 1.2em;
            cursor: pointer;
        }

        .next5 {
            fill: white;
        }

        .next5:active {
            fill: #dedcdc;
        }

        .send-rg2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 30vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-rg2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .rg-txt {
            font-size: 1.3em;
            margin-left: 35%;
            width: 560px;
        }

        .choose-a-image {
            margin-left: 13%;
            cursor: pointer;
        }

        .label {
            margin-left: 14.5%;
            font-size: 1.1em;
            cursor: pointer;
        }

        .image {
            font-size: 1.7em;
            margin-top: 30%;
            cursor: pointer;
        }

        .send-cpf2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 30vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-cpf2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .cpf-txt {
            font-size: 1.5em;
            margin-left: 60%;
            width: 560px;
        }

        .send-date2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 30vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-date2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .date-txt {
            font-size: 1.3em;
            margin-left: 23%;
            width: 560px;
        }

        .send-cnh2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 30vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-cnh2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .cnh-txt {
            font-size: 1.1em;
            margin-left: -11.5%;
            width: 560px;
        }

        .choose-a-image-cnh {
            height: 170px;
            margin-left: 13%;
            cursor: pointer;
        }

        .label-cnh {
            margin-top: 2%;
            margin-left: 18.3%;
            font-size: 1.2em;
            cursor: pointer;
        }

        .image-cnh{
            margin-top: 5%;
            cursor: pointer;
            font-size: 1.7em;
        }

        .send-ct2 ul{
            display: block;
            position: fixed;
            right: -90vw;
            width: 30vw;
            height: 350px;
            border-radius: 20px;
            background: #0A53B5;
            z-index: 1;
            top: 22.5%;
        }

        .send-ct2.open ul{
            right: 32.5vw;
        }

        .close {
            fill: white;
            font-size: 1.6em;
            margin-top: 7%;
            margin-left: 115%;
            cursor: pointer;
        }

        .button-close {
            border: none;
            background: none;
            color: #fff;
        }

        .ct-txt {
            font-size: 1.5em;
            margin-left: 24%;
            width: 560px;
        }
    }
`;

const Ul = styled.ul`
    display: flex;
    list-style: none; 
    li {
        width: 100px;
        color: white;
        font-family: 'Poppins-Medium';
    }
`;  


// JS for make the block for send the documents be showed
const OpenRg= ()=>{
    document.querySelector('.send-rg')?.classList.add('open');
}
const OpenRg2= ()=>{
    document.querySelector('.send-rg2')?.classList.add('open');
}
const OpenCpf = ()=>{
    document.querySelector('.send-cpf')?.classList.add('open');
}
const OpenCpf2 = ()=>{
    document.querySelector('.send-cpf2')?.classList.add('open');  
}
const OpenDate = ()=>{
    document.querySelector('.send-date')?.classList.add('open');  
}
const OpenDate2 = ()=>{
    document.querySelector('.send-date2')?.classList.add('open');   
}
const OpenCnh = ()=>{
    document.querySelector('.send-cnh')?.classList.add('open');
}
const OpenCnh2 = ()=>{
    document.querySelector('.send-cnh2')?.classList.add('open')
}
const OpenCt = ()=>{
    document.querySelector('.send-ct')?.classList.add('open');
}
const OpenCt2 = ()=>{
    document.querySelector('.send-ct2')?.classList.add('open');
}
const CloseRg = ()=> {
    document.querySelector('.send-rg')?.classList.remove('open');
}
const CloseRg2 = ()=> {
    document.querySelector('.send-rg2')?.classList.remove('open');
}
const CloseCpf = ()=> {
    document.querySelector('.send-cpf')?.classList.remove('open');
}
const CloseCpf2 = ()=> {
    document.querySelector('.send-cpf2')?.classList.remove('open');
}
const CloseDate = ()=> {
    document.querySelector('.send-date')?.classList.remove('open');
}
const CloseDate2 = ()=> {
    document.querySelector('.send-date2')?.classList.remove('open');
}
const CloseCnh = ()=> {
    document.querySelector('.send-cnh')?.classList.remove('open');
}
const CloseCnh2 = ()=> {
    document.querySelector('.send-cnh2')?.classList.remove('open');
}
const CloseCt = ()=> {
    document.querySelector('.send-ct')?.classList.remove('open');
}
const CloseCt2 = ()=> {
    document.querySelector('.send-ct2')?.classList.remove('open');
}

const SendDocumentsPg = function() {
    return (
        <SendDocumentsComponent>
            <nav className='mobile'>
            <div className='dashboard-mobile'>
                    <div className='icon-profile'>
                        <div className='search'>
                            <FaMagnifyingGlass/>
                        </div>
                        <div className='user-profile-mobile'>
                            <img src="/images/fox-mobile.png" alt="" width='40px' height='30px'/>
                        </div>
                    </div>
                    <div className='box-mobile'>
                        <div className='documents'>
                            <h2 className='number'>10</h2>
                            <p>Documentos</p>
                        </div>
                        <div className='users'>
                            <h2 className='number'>10</h2>
                            <p>Usuários</p>
                        </div>
                    </div>
                </div>
            {/* <header>
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
                </header> */}
                <form>
                    <h1>Faça o Upload</h1>
                        <div className='rg'>
                            <p id='rg-txt'>
                                RG - Frente e Verso 
                                <nav className='send-rg'>
                                    <button type='button' className='button1' onClick={OpenRg}><FaAngleRight className='next1'/></button>
                                    <div className="backdrop" onClick={CloseRg}></div>
                                    <Ul>
                                        <li>
                                            <FaTimes className='close' onClick={CloseRg}/>
                                        </li>
                                        <li>
                                            <h1 className='rg-txt'>RG - frente e verso</h1>
                                        </li>
                                        <div className='choose-a-image'>
                                            <label>
                                                <p className='label'>Escolha<br/> sua imagem aqui</p>
                                                <FaImages className='image'/>
                                                    <span className='photo'>
                                                        <input type="file" id='photo-input'/>
                                                    </span>
                                            </label>
                                        </div>
                                    </Ul>
                                </nav>
                            </p> 
                        </div> 
                        <div className='cpf'>
                            <p id='cpf-txt'>
                                CPF 
                                <nav className='send-cpf'>
                                    <button type='button' className='button2' onClick={OpenCpf}><FaAngleRight className='next2'/></button>
                                    <div className='backdrop2' onClick={CloseCpf}></div>
                                    <Ul>
                                        <li>
                                            <FaTimes className='close' onClick={CloseCpf}/>
                                        </li>
                                        <li>
                                            <h1 className='cpf-txt'>CPF</h1>
                                        </li>
                                        <div className='choose-a-image2'>
                                            <label>
                                                <p className='label2'>Escolha<br/> sua imagem aqui</p>
                                                <FaImages className='image2'/>
                                                    <span className='photo2'>
                                                        <input type="file" id='photo-input2'/>
                                                    </span>
                                            </label>
                                        </div>
                                    </Ul>
                                </nav>
                            </p> 
                        </div> 
                        <div className='date'>
                            <p id='date-txt'>
                                Certidão de nascimento 
                                <nav className='send-date'>
                                    <button type='button' className='button3' onClick={OpenDate}><FaAngleRight className='next3'/></button>
                                    <div className='backdrop3' onClick={CloseDate}></div>
                                    <Ul>
                                        <li>
                                            <FaTimes className='close' onClick={CloseDate}/>
                                        </li>
                                        <li>
                                            <h1 className='date-txt'>Certidão de nascimento</h1>
                                        </li>
                                        <div className='choose-a-image3'>
                                            <label>
                                                <p className='label3'>Escolha<br/> sua imagem aqui</p>
                                                <FaImages className='image3'/>
                                                    <span className='photo3'>
                                                        <input type="file" id='photo-input3'/>
                                                    </span>
                                            </label>
                                        </div>
                                    </Ul>
                                </nav>
                            </p> 
                        </div>
                        <div className='cnh'>
                            <p id='cnh-txt'>
                                CNH (opcional) - <br/>frente e verso 
                                <nav className='send-cnh'>
                                    <button type='button' className='button4' onClick={OpenCnh}><FaAngleRight className='next4'/></button>
                                    <div className='backdrop4' onClick={CloseCnh}></div>
                                    <Ul>
                                        <li>
                                            <FaTimes className='close' onClick={CloseCnh}/>
                                        </li>
                                        <li>
                                            <h1 className='cnh-txt'>CNH (opcional) - <br/>frente e verso</h1>
                                        </li>
                                        <div className='choose-a-image4'>
                                            <label>
                                                <p className='label4'>Escolha<br/> sua imagem aqui</p>
                                                <FaImages className='image4'/>
                                                    <span className='photo4'>
                                                        <input type="file" id='photo-input4'/>
                                                    </span>
                                            </label>
                                        </div>
                                    </Ul>
                                </nav>
                            </p> 
                        </div>
                        <div className='ct'>
                            <p id='ct-txt'>
                                Carteira de Trabalho 
                                <nav className='send-ct'>
                                    <button type='button' className='button5' onClick={OpenCt}><FaAngleRight className='next5'/></button>
                                    <div className='backdrop5' onClick={CloseCt}></div>
                                    <Ul>
                                        <li>
                                            <FaTimes className='close' onClick={CloseCt}/>
                                        </li>
                                        <li>
                                            <h1 className='ct-txt'>Carteira de Trabalho</h1>
                                        </li>
                                        <div className='choose-a-image5'>
                                            <label>
                                                <p className='label5'>Escolha<br/> sua imagem aqui</p>
                                                <FaImages className='image5'/>
                                                    <span className='photo5'>
                                                        <input type="file" id='photo-input5'/>
                                                    </span>
                                            </label>
                                        </div>
                                    </Ul>
                                </nav>
                            </p> 
                        </div>
                </form>
                <button type="button" className='previous'>
                    <Link href={'CreateUserPage'}>
                        <FaAngleLeft id='previous'/>
                    </Link>
                </button>
                <button type="button" className='next'>
                    <Link href={'/'}>
                        <FaAngleRight id='next'/>
                    </Link>
                </button>
            </nav>

            <nav className='tablet-desktops'>
            <div className='dashboard-desktop'>
                    <div className='search'>
                        <FaMagnifyingGlass/>
                    </div>
                    <div className='box-desktop'>
                        <div className='documents'>
                            <h2 className='number'>10</h2>
                            <p>Documentos</p>
                        </div>
                        <div className='users'>
                            <h2 className='number'>10</h2>
                            <p>Usuários</p>
                        </div>
                    </div>
                    <div className='user-profile-desktop'>
                        <img src="/images/fox-mobile.png" alt="" width='50px' height='50px'/>
                    </div>
                </div>
                {/* <header>
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
                </header> */}
                <form>
                    <h1>Faça o Upload</h1>
                        <div className='rg'>
                            <p id='rg-txt'>
                                RG - Frente e Verso 
                                <nav className='send-rg2'>
                                    <button type='button' className='button1'><FaAngleRight className='next1' onClick={OpenRg2}/></button>
                                    <div className="backdrop-rg" onClick={CloseRg2}></div>
                                    <Ul>
                                        <li>
                                            <FaTimes className='close' onClick={CloseRg2}/>
                                        </li>
                                        <li>
                                            <h1 className='rg-txt'>RG - frente e verso</h1>
                                        </li>
                                        <div className='choose-a-image'>
                                            <label>
                                                <p className='label'>Escolha ou arraste<br/> sua imagem aqui</p>
                                                <FaImages className='image'/>
                                                    <span className='photo'>
                                                        <input type="file" id='photo-input'/>
                                                    </span>
                                            </label>
                                        </div>
                                    </Ul>
                                </nav>
                            </p> 
                        </div>
                        <div className='cpf'>
                            <p id='cpf-txt'>
                                CPF 
                                <nav className='send-cpf2'>
                                    <button type='button' className='button2' onClick={OpenCpf2}><FaAngleRight className='next2'/></button>
                                    <div className="backdrop-cpf" onClick={CloseCpf2}></div>
                                    <Ul>
                                        <li>
                                            <FaTimes className='close' onClick={CloseCpf2}/>
                                        </li>
                                        <li>
                                            <h1 className='cpf-txt'>CPF</h1>
                                        </li>
                                        <div className='choose-a-image'>
                                            <label>
                                                <p className='label'>Escolha ou arraste<br/> sua imagem aqui</p>
                                                <FaImages className='image'/>
                                                    <span className='photo'>
                                                        <input type="file" id='photo-input'/>
                                                    </span>
                                            </label>
                                        </div>
                                    </Ul>
                                </nav>
                            </p> 
                        </div>
                        <div className='date'>
                            <p id='date-txt'>
                                Certidão de nascimento 
                                <nav className='send-date2'>
                                    <button type='button' className='button3' onClick={OpenDate2}><FaAngleRight className='next3'/></button>
                                    <div className="backdrop-date" onClick={CloseDate2}></div>
                                    <Ul>
                                        <li>
                                            <FaTimes className='close' onClick={CloseDate2}/>
                                        </li>
                                        <li>
                                            <h1 className='date-txt'>Certidão de nascimento</h1>
                                        </li>
                                        <div className='choose-a-image'>
                                            <label>
                                                <p className='label'>Escolha ou arraste<br/> sua imagem aqui</p>
                                                <FaImages className='image'/>
                                                    <span className='photo'>
                                                        <input type="file" id='photo-input'/>
                                                    </span>
                                            </label>
                                        </div>
                                    </Ul>
                                </nav>
                            </p> 
                        </div>
                        <div className='cnh'>
                            <p id='cnh-txt'>
                                CNH (opcional) - frente e verso 
                                <nav className='send-cnh2'>
                                    <button type='button' className='button4' onClick={OpenCnh2}><FaAngleRight className='next4'/></button>
                                    <div className='backdrop-cnh' onClick={CloseCnh2}></div>
                                    <Ul>
                                        <li>
                                            <FaTimes className='close' onClick={CloseCnh2}/>
                                        </li>
                                        <li>
                                            <h1 className='cnh-txt'>CNH (opcional) - frente e verso</h1>
                                        </li>
                                        <div className='choose-a-image-cnh'>
                                            <label>
                                                <p className='label-cnh'>Escolha ou arraste<br/> sua imagem aqui</p>
                                                <FaImages className='image-cnh'/>
                                                    <span className='photo'>
                                                        <input type="file" id='photo-input'/>
                                                    </span>
                                            </label>
                                        </div>
                                    </Ul>
                                </nav>
                            </p> 
                        </div>
                        <div className='ct'>
                            <p id='ct-txt'>
                                Carteira de Trabalho 
                                <nav className='send-ct2'>
                                    <button type='button' className='button5' onClick={OpenCt2}><FaAngleRight className='next5'/></button>
                                    <div className='backdrop-ct' onClick={CloseCt2}></div>
                                    <Ul>
                                        <li>
                                            <FaTimes className='close' onClick={CloseCt2}/>
                                        </li>
                                        <li>
                                            <h1 className='ct-txt'>Carteira de Trabalho</h1>
                                        </li>
                                        <div className='choose-a-image'>
                                            <label>
                                                <p className='label'>Escolha ou arraste<br/> sua imagem aqui</p>
                                                <FaImages className='image'/>
                                                    <span className='photo'>
                                                        <input type="file" id='photo-input'/>
                                                    </span>
                                            </label>
                                        </div>
                                    </Ul>
                                </nav>
                            </p> 
                        </div>
                </form>
                <div className='previous'>
                    <button type="button" className='previous-button'>
                        <Link href={'CreateUserPage'}>
                            <p id='previous'>Anterior</p>
                        </Link>
                    </button>
                </div>
                <div className='next'>
                    <button type="button" className='next-button'>
                        <Link href={'/'}>
                            <p id="next">Próximo</p>
                        </Link>
                    </button>
                </div>
            </nav>
        </SendDocumentsComponent>
    )
}

export default SendDocumentsPg;