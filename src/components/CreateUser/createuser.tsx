// Developed code by Gabriel and Amanda 

'use client'
import styled from '@emotion/styled';
import Input from '../Login/Input/Input';
import Link from 'next/link';
import { FaMagnifyingGlass, FaPlus } from 'react-icons/fa6';

const CreateUserComponent = styled.section `

    // Mobile
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

    .tablet-desktops {
        display: none;
    }
        
    * {
        color: white;
        font-family: 'Poppins-Medium';
    }

    height: 215vh;

    background: linear-gradient(180deg, #0A53B5 0%, #0081E8 100%);

    h1 {
        padding-top: 10%;
        margin-left: 26%;
        font-size: 1.3em;
    }

    form {
        margin-top: 10%;
        margin-left: 9%;
    }

    .span1 {
        color: #F47216;
        margin-left: -32%;
    }

    .span2 {
        color: #F47216;
        margin-left: 0%;
    }

    #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    .gender {
        margin-left: -15%;
        font-family: 'Poppins-Regular';
    }

    .gender-txt {
        font-size: 1.1em;
        margin-top: 8%;
        margin-left: 7%;
        font-family: 'Poppins-Medium';
    }

    .man {
        margin-left: -15%;
    }

    .man-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .woman {
        margin-left: -15%;
    }

    .woman-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .transvestite {
        margin-left: -15%;
    }

    .t1-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .no-binary {
        margin-left: -15%;
    }

    .nb-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .trans {
        margin-left: -15%;
    }

    .t2-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .another {
        margin-left: -15%;
    }

    .a-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .none {
        margin-left: -15%;
    }

    .n-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .social-name {
        margin-top: 7%;
    }

    #social-name::-webkit-input-placeholder {
        font-size: 1.1em;
    }

    Small {
        margin-left: 7%;
    }

    .date {
        margin-top: 7%;
    }

    #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    small {
        position: absolute;
        top: 905px;
        margin-left: -77%;
    }

    .span3 {
        position: absolute;
        color: #F47216;
        margin-left: -10%;
        top: 900px;
    }

    #cpf::-webkit-input-placeholder {
        font-size: 1.1em;
    }

    .span4 {
        color: #F47216;
        margin-left: -70%;
    }

    #email::-webkit-input-placeholder {
        font-size: 1.1em;
    }

    .span5 {
        color: #F47216;
        margin-left: -65%;
    }

    #country::-webkit-input-placeholder {
        font-size: 1.1em;
    }

    .span6 {
        color: #F47216;
        margin-left: -68%;
    }

    .photo {
        display: none;
    }

    .profile-photo2 {
        margin-top: 5%;
    }

    .choose-a-image {
        background-color: #F47216;
        width: 130px;
        height: 40px;
        margin-left: -0.5%;
        margin-top: 0%;
        border-radius: 10px;
    }

    .choose-a-image:active {
        background-color: #d66515;
        width: 130px;
        height: 40px;
        margin-left: -0.5%;
        margin-top: 0%;
        border-radius: 10px;
    }

    label {
        position: absolute;
        margin-left: 3.5%;
        margin-top: 1.5%;
        color: white;
    }

    .save {
        background-color: #93B413;
        border: none;
        margin-top: 12%;
        margin-left: 18%;
        width: 150px;
        height: 50px;
        font-size: 1.5em;
        border-radius: 19px;
    }

    .save:active {
        background-color: #86a40f;
        border: none;
        margin-top: 12%;
        margin-left: 18%;
        width: 150px;
        height: 50px;
        font-size: 1.5em;
        border-radius: 19px;
    }

    // Tablet
    @media(min-width: 768px) {

        height: 202vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: flex;
            flex-direction: column;
        }

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

        background: linear-gradient(180deg, #0A53B5 0%, #0A53B5 100%);

        form {
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0b58bc 100%);
            width: 630px;
            height: 875px;
        }
    
        h1 {
            font-size: 1.8em;
            margin-left: 33.5%;
            padding-top: 5%;
        }

        .name {
            margin-top: 1%;
            margin-left: -3%;
        }

        #name {
            width: 500px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.3em;
        }

        .span1 {
            color: #F47216;
            margin-left: -50%;
            font-size: 1.3em;
        }

        .gender-txt {
            font-size: 1.3em;
            margin-top: 1%;
            margin-left: -62%;
            font-family: 'Poppins-Medium';
        }

        .span2 {
            color: #F47216;
            margin-left: 0%;
        }

        .man {
            width: 30px;
            margin-left: 11%;
            margin-top: -3%;
        }

        #man {
            width: 10px;
        }

        .man-op {
            margin-left: 355%;
            margin-top: -166.5%;
        }

        .woman {
            width: 30px;
            margin-left: 32%;
            margin-top: -6.9%;
        }

        #woman {
            width: 10px;
        }

        .woman-op {
            margin-left: 355%;
            margin-top: -166.5%;
        }

        .transvestite {
            width: 30px;
            margin-left: 51.5%;
            margin-top: -6.8%;
        }

        #transvestite {
            width: 10px;
        }

        .t1-op {
            margin-left: 355%;
            margin-top: -166.5%;
        }

        .no-binary {
            width: 30px;
            margin-left: 11%;
            margin-top: -1%;
        }

        #no-binary {
            width: 10px;
        }

        .nb-op {
            margin-left: 355%;
            margin-top: -166.5%;
            width: 108px;
        }

        .trans {
            width: 30px;
            margin-left: 32%;
            margin-top: -6.9%;
        }

        #trans {
            width: 10px;
        }

        .t2-op {
            margin-left: 355%;
            margin-top: -166.5%;
        }

        .another {
            width: 30px;
            margin-left: 51.5%;
            margin-top: -6.8%;
        }

        #another {
            width: 10px;
        }

        .a-op {
            margin-left: 355%;
            margin-top: -166.5%;
        }

        .none {
            width: 30px;
            margin-left: 11%;
            margin-top: -1%;
        }

        #none {
            width: 10px;
        }

        .n-op {
            margin-left: 355%;
            margin-top: -166.5%;
            width: 150px;
        }

        .social-name {
            margin-top: 1%;
            margin-left: -3%;
        }

        #social-name {
            width: 500px;
        }

        #social-name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.3em;
        }

        .date {
            margin-top: 2%;
            margin-left: -3%;
        }

        #birthday {
            width: 500px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.3em;
        }

        .span3 {
            color: #F47216;
            margin-left: 39%;
            position: absolute;
            top: 800px;
            font-size: 1.3em;
        }

        .small {
            margin-left: 11%;
            position: absolute;
            top: 810px;
        }

        .cpf {
            margin-top: -1.8%;
            margin-left: -3%;
        }

        #cpf {
            width: 500px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.3em;
        }

        .span4 {
            color: #F47216;
            margin-left: -59%;
            position: absolute;
            font-size: 1.3em;
            margin-top: 2.5%;
        }

        .email {
            margin-top: -1.8%;
            margin-left: -3%;
        }

        #email {
            width: 500px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.3em;
        }

        .span5 {
            color: #F47216;
            margin-left: -57%;
            position: absolute;
            font-size: 1.3em;
            margin-top: 2.5%;
        }

        .country {
            margin-top: -1.8%;
            margin-left: -3%;
        }

        #country {
            width: 500px;
        }

        #country::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.3em;
        }

        .span6 {
            color: #F47216;
            margin-left: -59%;
            position: absolute;
            font-size: 1.3em;
            margin-top: 2.5%;
        }

        .profile-photo2 {
            margin-top: -2%;
            margin-left: -60.5%;
        }

        .choose-a-image {
            background-color: #F47216;
            width: 130px;
            height: 40px;
            margin-left: 10.4%;
            margin-top: 0%;
        }

        .choose-a-image:active {
            background-color: #d66515;
            width: 130px;
            height: 40px;
            margin-left: 10.4%;
            margin-top: 0%;
        }

        label {
         position: absolute;
         margin-left: 1.7%;
         margin-top: 0.6%;
         color: white;
        }

        .plus {
            padding-top: 3.5%;
        }

        .save {
            margin-top: 3%;
            margin-left: 40%;
            width: 140px;
            height: 40px;
            border-radius: 15px;
            font-size: 1.5em;
            background-color: #93B413;
        }

        .save:active {
            margin-top: 3%;
            margin-left: 40%;
            width: 140px;
            height: 40px;
            border-radius: 15px;
            font-size: 1.5em;
            background-color: #86a40f;
        }
    }

    // Small Screens
    @media(min-width: 992px) {

        height: 198vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: flex;
            flex-direction: column;
            .dashboard-desktop{
            background-color: #3A9EB6;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
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
        }
        
        form {
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0b58bc 100%);
            width: 800px;
            height: 1040px;
            margin-left: 10.6%;
            margin-top: 5%;
        }

        h1 {
            font-size: 2.1em;
            margin-left: 35%;
        }

        .name {
            margin-top: 3%;
            margin-left: 2.2%;
            font-size: 1.4em;
        }

        #name {
            width: 580px;
            height: 45px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .span1 {
            color: #F47216;
            margin-left: -38.5%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 2.1%;
        }

        .gender-txt {
            font-size: 1.3em;
            margin-left: -60%;
            margin-top: -1%;
        }

        .span2 {
            color: #F47216;
            margin-left: 1%;
            position: absolute;
            font-size: 1.4em;
            margin-top: -0.6%;
        }

        .man {
            width: 30px;
            margin-left: 14.3%;
            margin-top: -1.5%;
        }

        #man {
            width: 25px;
            cursor: pointer;
        }

        .man-op {
            margin-left: 425%;
            margin-top: -167%;
            font-size: 1em;
        }

        .woman {
            width: 30px;
            margin-left: 32.6%;
            margin-top: -5.4%;
        }

        #woman {
            width: 25px;
            cursor: pointer;
        }

        .woman-op {
            margin-left: 425%;
            margin-top: -166%;
            font-size: 1em;
        }

        .transvestite {
            width: 30px;
            margin-left: 50.8%;
            margin-top: -5.4%;
        }

        #transvestite {
            width: 25px;
            cursor: pointer;
        }

        .t1-op {
            margin-left: 425%;
            margin-top: -166%;
            font-size: 1em;
        }

        .no-binary {
            width: 30px;
            margin-left: 14.3%;
            margin-top: -0.5%;
        }

        #no-binary {
            width: 25px;
            cursor: pointer;
        }

        .nb-op {
            margin-left: 425%;
            margin-top: -166%;
            font-size: 1em;
            width: 109px;
        }

        .trans {
            width: 30px;
            margin-left: 32.6%;
            margin-top: -5.4%;
        }

        #trans {
            width: 25px;
            cursor: pointer;
        }

        .t2-op {
            margin-left: 425%;
            margin-top: -166%;
            font-size: 1em;
        }

        .another {
            width: 30px;
            margin-left: 50.8%;
            margin-top: -5.4%;
        }

        #another {
            width: 25px;
            cursor: pointer;
        }

        .a-op {
            margin-left: 425%;
            margin-top: -166%;
            font-size: 1em;
        }

        .none {
            width: 30px;
            margin-left: 14.3%;
            margin-top: -0.5%;
        }

        #none {
            width: 25px;
            cursor: pointer;
        }

        .n-op {
            margin-left: 360%;
            margin-top: -166%;
            font-size: 1em;
            width: 190px;
        }

        .social-name {
            margin-top: 0%;
            margin-left: 2.2%;
            font-size: 1.4em;
        }

        #social-name {
            width: 580px;
            height: 45px;
        }

        #social-name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .date {
            margin-top: 1%;
            margin-left: 2.2%;
            font-size: 1.4em;
        }

        #birthday {
            width: 580px;
            height: 45px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .span3 {
            color: #F47216;
            margin-left: 34%;
            position: absolute;
            font-size: 1em;
            margin-top: 11%;
        }

        .small {
            font-size: 0.7em;
            margin-left: 9.5%;
            margin-top: 11%;
        }

        .cpf {
            margin-top: -2.2%;
            margin-left: 2.2%;
            font-size: 1.4em;
        }

        #cpf {
            width: 580px;
            height: 45px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .span4 {
            color: #F47216;
            margin-left: -52%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 2%;
        }

        .email {
            margin-top: -2.5%;
            margin-left: 2.2%;
            font-size: 1.4em;
        }

        #email {
            width: 580px;
            height: 45px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .span5 {
            color: #F47216;
            margin-left: -50%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 2%;
        }

        .country {
            margin-top: -2.5%;
            margin-left: 2.2%;
            font-size: 1.4em;
        }

        #country {
            width: 580px;
            height: 45px;
        }

        #country::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .span6 {
            color: #F47216;
            margin-left: -52%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 2%;
        }

        .profile-photo2 {
            font-size: 1.2em;
            margin-left: -53.8%;
            margin-top: -2%;
        }

        .choose-a-image {
            margin-left: 14%;
            width: 150px;
            height: 45px;
            font-size: 1.2em;
            cursor: pointer;
        }

        .choose-a-image:hover {
            margin-left: 14%;
            width: 150px;
            height: 45px;
            font-size: 1.2em;
            background-color: #ff7818;
            cursor: pointer;
        }

        .choose-a-image:active {
            margin-left: 14%;
            width: 150px;
            height: 45px;
            font-size: 1.2em;
            background-color: #d66515;
            cursor: pointer;
        }

        label {
            margin-left: 1.2%;
            cursor: pointer;
        }

        .save {
            width: 150px;
            height: 50px;
            font-size: 1.6em;
            background-color: #93B413;
            margin-left: 42%;
            cursor: pointer;
        }

        .save:hover {
            width: 200px;
            height: 60px;
            font-size: 2em;
            background-color: #9fc214;
            margin-left: 38%;
            cursor: pointer;
        }

        .save:active {
            width: 200px;
            height: 60px;
            font-size: 2em;
            background-color: #86a40f;
            margin-left: 38%;
            cursor: pointer;
        }
    }

    // Medium Screens
    @media(min-width: 1200px) {

        height: 235vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }

        #your-name {
            font-size: 1.6em;
            margin-top: -2%;
            margin-left: 81.3%;
        }

        form {
            margin-top: 5%;
            margin-left: 18.4%;
            width: 850px;
            height: 1250px;
        }

        h1 {
            font-size: 2.4em;
            margin-left: 33%;
        }

        .name {
            margin-top: 3%;
            margin-left: -2.5%;
            font-size: 1.4em;
        }

        #name {
            width: 650px;
            height: 45px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.5em;
        }

        .span1 {
            color: #F47216;
            margin-left: -33%;
            position: absolute;
            font-size: 1.5em;
            margin-top: 1.3%;
        }

        .gender-txt {
            font-size: 1.3em;
            margin-left: -65%;
            margin-top: -2%;
        }

        .span2 {
            font-size: 1.4em;
            margin-left: 0.5%;
        }

        .man {
            width: 30px;
            margin-left: 10.3%;
            margin-top: -0.5%;
        }

        #man {
            width: 30px;
            cursor: pointer;
        }

        .man-op {
            margin-left: 555%;
            margin-top: -237%;
            font-size: 1.1em;
        }

        .woman {
            width: 30px;
            margin-left: 30.5%;
            margin-top: -5.1%;
        }

        #woman {
            width: 30px;
            cursor: pointer;
        }

        .woman-op {
            margin-left: 555%;
            margin-top: -237%;
            font-size: 1.1em;
        }

        .transvestite {
            width: 30px;
            margin-left: 49.1%;
            margin-top: -5.2%;
        }

        #transvestite {
            width: 30px;
            cursor: pointer;
        }

        .t1-op {
            margin-left: 555%;
            margin-top: -237%;
            font-size: 1.1em;
        }

        .no-binary {
            width: 30px;
            margin-left: 10.3%;
            margin-top: -0.5%;
        }

        #no-binary {
            width: 30px;
            cursor: pointer;
        }

        .nb-op {
            margin-left: 555%;
            margin-top: -237%;
            font-size: 1.1em;
            width: 119px;
        }

        .trans {
            width: 30px;
            margin-left: 30.5%;
            margin-top: -5.1%;
        }

        #trans {
            width: 30px;
            cursor: pointer;
        }

        .t2-op {
            margin-left: 555%;
            margin-top: -237%;
            font-size: 1.1em;
        }

        .another {
            width: 30px;
            margin-left: 49.1%;
            margin-top: -5.2%;
        }

        #another {
            width: 30px;
            cursor: pointer;
        }

        .a-op {
            margin-left: 555%;
            margin-top: -237%;
            font-size: 1.1em;
        }

        .none {
            width: 30px;
            margin-left: 10.3%;
            margin-top: -0.5%;
        }

        #none {
            width: 30px;
            cursor: pointer;
        }

        .n-op {
            margin-left: 525%;
            margin-top: -237%;
            font-size: 1.1em;
            width: 180px;
        }

        .social-name {
            margin-top: 3%;
            margin-left: -2.5%;
            font-size: 1.4em;
        }

        #social-name {
            width: 650px;
            height: 45px;
        }

        #social-name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.5em;
        }

        .date {
            margin-top: 1%;
            margin-left: -2.5%;
            font-size: 1.4em;
        }

        #birthday {
            width: 650px;
            height: 45px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.5em;
        }

        .span3 {
            color: #F47216;
            margin-left: 27.3%;
            position: absolute;
            margin-top: 11.8%;
        }

        .small {
            position: absolute;
            margin-left: 9%;
            top: 820px;
        }

        .cpf {
            margin-top: -3%;
            margin-left: -2.5%;
            font-size: 1.4em;
        }

        #cpf {
            width: 650px;
            height: 45px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.5em;
        }

        .span4 {
            color: #F47216;
            margin-left: -44%;
            position: absolute;
            font-size: 1.3em;
            margin-top: 1.3%;
        }

        .email {
            margin-top: -3.5%;
            margin-left: -2.5%;
            font-size: 1.4em;
        }

        #email {
            width: 650px;
            height: 45px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.5em;
        }

        .span5 {
            color: #F47216;
            margin-left: -42.5%;
            position: absolute;
            font-size: 1.2em;
            margin-top: 1.4%;
        }

        .country {
            margin-top: -3.4%;
            margin-left: -2.5%;
            font-size: 1.4em;
        }

        #country {
            width: 650px;
            height: 45px;
        }

        #country::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.5em;
        }

        .span6 {
            color: #F47216;
            margin-left: -44%;
            position: absolute;
            font-size: 1.3em;
            margin-top: 1.5%;
        }

        .profile-photo2 {
            font-size: 2em;
            margin-left: -56%;
            font-size: 1.4em;
            margin-top: -3.5%;
        }

        .choose-a-image {
            width: 200px;
            height: 60px;
            margin-left: 12.5%;
            background-color: #F47216;
            font-size: 1em;
            cursor: pointer;
        }

        .choose-a-image:hover {
            width: 200px;
            height: 60px;
            margin-left: 12.5%;
            background-color: #ff7818;
            font-size: 1em;
            cursor: pointer;
        }

        .choose-a-image:active {
            width: 200px;
            height: 60px;
            margin-left: 12.5%;
            background-color: #d66515;
            font-size: 1em;
            cursor: pointer;
        }

        label {
            position: absolute;
            margin-left: 1.5%;
            top: 1395px;
            font-size: 1.5em;
            cursor: pointer;
        }

        .save {
            margin-top: 6%;
            width: 220px;
            height: 70px;
            font-size: 2.5em;
            background-color: #93B413;
            margin-left: 39%;
            margin-left: 41%;
            cursor: pointer;
        }

        .save:hover {
            margin-top: 6%;
            width: 220px;
            height: 70px;
            font-size: 2.5em;
            background-color: #9fc214;
            margin-left: 39%;
            margin-left: 41%;
        }

        .save:active {
            margin-top: 6%;
            width: 220px;
            height: 70px;
            font-size: 2.5em;
            background-color: #86a40f;
            margin-left: 39%;
            margin-left: 41%;
        }
    }

    @media(min-width: 1400px) {

        height: 208vh;

        form {
            margin-left: 21%;
            height: 1180px;
        }

        h1 {
            margin-left: 37%;
        }

        .span1 {
            margin-left: -32%;
        }

        .small {
            position: absolute;
            margin-left: 8.5%;
            top: 785px;
            font-size: 0.8em;
        }

        .date {
            margin-top: -1%;
            margin-left: -2.5%;
            font-size: 1.4em;
        }

        #birthday {
            width: 650px;
            height: 45px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.5em;
        }

        .span3 {
            color: #F47216;
            margin-left: 26%;
            position: absolute;
            margin-top: 9.5%;
        }

        .span4 {
            margin-left: -41%;
            margin-top: 1.5%;
        }

        .span5 {
            margin-left: -39%;
            margin-top: 1.5%;
        }

        .span6 {
            margin-left: -40.5%;
            margin-top: 1.5%;
        }

        label {
            position: absolute;
            margin-left: 1.2%;
            top: 1357px;
            font-size: 1.7em;
            cursor: pointer;
        }

    }

    @media(min-width: 1600px) {

        height: 205vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }


        #your-name {
            margin-top: -1.5%;
        }

        form {
            width: 1000px;
            height: 1250px;
            margin-left: 17.8%;
        }

        h1 {
            margin-left: 36.5%;
            font-size: 2.3em;
        }

        .name {
            margin-top: 3%;
            margin-left: -8%;
            font-size: 1.7em;
        }

        #name {
            width: 840px;
            height: 45px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.6em;
        }

        .span1 {
            color: #F47216;
            margin-left: -39.5%;
            position: absolute;
            font-size: 1.3em;
            margin-top: 2%;
        }

        .gender-txt {
            font-size: 2.3em;
            margin-left: -72.5%;
            margin-top: -6%;
            font-size: 1.7em;
        }

        .man {
            margin-top: -2.5%;
            margin-left: 5.5%;
        }

        #man {
            width: 30px;
            cursor: pointer;
        }

        .man-op {
            margin-top: -338%;
            margin-left: 655%;
        }

        .woman {
            margin-top: -6.2%;
            margin-left: 23%;
        }

        #woman {
            width: 30px;
            cursor: pointer;
        }

        .woman-op {
            margin-top: -338%;
            margin-left: 655%;
        }

        .transvestite {
            margin-top: -6.2%;
            margin-left: 40%;
        }

        #transvestite {
            width: 30px;
            cursor: pointer;
        }

        .t1-op {
            margin-top: -338%;
            margin-left: 655%;
        }

        .no-binary {
            margin-top: -2.5%;
            margin-left: 5.5%;
        }

        #no-binary {
            width: 30px;
            cursor: pointer;
        }

        .nb-op {
            margin-top: -338%;
            margin-left: 655%;
        }

        .trans {
            margin-top: -6.2%;
            margin-left: 23%;
        }

        #trans {
            width: 30px;
            cursor: pointer;
        }

        .t2-op {
            margin-top: -338%;
            margin-left: 655%;
        }

        .another {
            margin-top: -6.2%;
            margin-left: 40%;
        }

        #another {
            width: 30px;
            cursor: pointer;
        }

        .a-op {
            margin-top: -338%;
            margin-left: 655%;
        }

        .none {
            margin-top: -2.5%;
            margin-left: 5.5%;
        }

        #none {
            width: 30px;
            cursor: pointer;
        }

        .n-op {
            margin-top: -338%;
            margin-left: 655%;
        }

        .social-name {
            margin-top: -2%;
            margin-left: -8%;
            font-size: 1.7em;
        }

        #social-name {
            width: 840px;
            height: 45px;
        }

        #social-name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.6em;
        }

        .date {
            margin-top: -2.5%;
            margin-left: -8%;
            font-size: 2.3em;
        }

        #birthday {
            width: 840px;
            height: 45px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.6em;
        }

        .small {
            position: absolute;
            top: 820px;
            font-size: 0.5em;
            margin-left: 10%;
        }

        .span3 {
            color: #F47216;
            margin-left: 28.5%;
            position: absolute;
            font-size: 0.8em;
            margin-top: 11.6%;
        }

        .cpf {
            margin-top: -7%;
            margin-left: -8%;
            font-size: 2.3em;
        }

        #cpf {
            width: 840px;
            height: 45px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.6em;
        }

        .span4 {
            color: #F47216;
            margin-left: -49.5%;
            position: absolute;
            font-size: 0.8em;
            margin-top: 2.5%;
        }

        .email {
            margin-top: -7%;
            margin-left: -8%;
            font-size: 2.3em;
        }

        #email {
            width: 840px;
            height: 45px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.6em;
        }

        .span5 {
            color: #F47216;
            margin-left: -48.3%;
            position: absolute;
            font-size: 0.8em;
            margin-top: 2.3%;
        }

        .country {
            margin-top: -7%;
            margin-left: -8%;
            font-size: 2.3em;
        }

        #country {
            width: 840px;
            height: 45px;
        }

        #country::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.6em;
        }

        .span6 {
            color: #F47216;
            margin-left: -49.3%;
            position: absolute;
            font-size: 0.8em;
            margin-top: 2.3%;
        }

        .profile-photo2 {
            margin-top: -4.5%;
            margin-left: -65.3%;
            font-size: 1.6em;
        }

        .choose-a-image {
            margin-left: 7.9%;
            background-color: #F47216;
            width: 220px;
            height: 60px;
            cursor: pointer;
        }

        .choose-a-image:hover {
            margin-left: 7.9%;
            background-color: #ff7818;
            width: 220px;
            height: 60px;
            cursor: pointer;
        }

        .choose-a-image:active {
            margin-left: 7.9%;
            background-color: #d66515;
            width: 220px;
            height: 60px;
            cursor: pointer;
        }

        label {
            position: absolute;
            top: 1475px;
            margin-left: 1.4%;
            cursor: pointer;
            font-size: 1.6em;
        }

        .save {
            width: 200px;
            height: 65px;
            font-size: 2.3em;
            background-color: #93B413;
            margin-left: 41%;
            cursor: pointer;
        }

        .save:hover {
            width: 200px;
            height: 65px;
            font-size: 2.3em;
            background-color: #9fc214;
            margin-left: 41%;
            margin-top: 3%;
        }

        .save:active {
            width: 200px;
            height: 65px;
            font-size: 2.3em;
            background-color: #86a40f;
            margin-left: 41%;
            margin-top: 3%;
        }
    }
`;

const CreateUserPg = function() {
    return (
        <CreateUserComponent>
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
                <h1>Criar Usuário</h1>
                <form>
                    <div className='name'>
                        <Input type="string" name="name" id="name" placeholder='Nome Completo'/><span className='span1'>*</span>
                    </div>
                    <p className='gender-txt'>Gênero <span className='span2'>*</span></p>
                    <div className='gender'>
                        <div  className='man'>
                            <Input type='radio' name='gender' id='man' defaultValue='M'/>
                            <p className='man-op'>Masculino</p>
                        </div>
                        <div  className='woman'>
                            <Input type='radio' name='gender' id='woman' defaultValue='F'/>
                            <p className='woman-op'>Feminino</p>
                        </div>
                        <div  className='transvestite'>
                            <Input type='radio' name='gender' id='transvestite' defaultValue='T1'/>
                            <p className='t1-op'>Travesti</p>
                        </div>
                        <div className='no-binary'>
                            <Input type='radio' name='gender' id='no-binary' defaultValue='NB'/>
                            <p className='nb-op'>Não Binário</p>
                        </div>
                        <div  className='trans'>
                            <Input type='radio' name='gender' id='trans' defaultValue='T2'/>
                            <p className='t2-op'>Trans</p>
                        </div>
                        <div  className='another'>
                            <Input type='radio' name='gender' id='another' defaultValue='A'/>
                            <p className='a-op'>Outros</p>
                        </div>
                        <div  className='none'>
                            <Input type='radio' name='gender' id='none' defaultValue='N'/>
                            <p className='n-op'>Prefiro não dizer</p>
                        </div>
                    </div>
                    <div className='social-name'>
                        <Input type="string" name="social-name" id="social-name" placeholder='Nome Social'/>
                    </div>
                    <div className='date'>
                        <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                        <small>Digite a data de aniversário</small><span className='span3'>*</span>
                    </div>
                    <div className='cpf'>
                        <Input type="number" name="cpf" id="cpf" placeholder='CPF'/><span className='span4'>*</span>
                    </div>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='E-mail'/><span className='span5'>*</span>
                    </div>
                    <div className='country'>
                        <Input type="string" name="country" id="country" placeholder='País'/><span className='span6'>*</span>
                    </div>
                    <p className='profile-photo2'>Foto de Perfil</p>
                    <div className='choose-a-image'>
                        <label>
                            Adicionar <FaPlus className='plus'/>
                                <span className='photo'>
                                    <input type="file" id='photo-input'/>
                                </span>
                        </label>
                    </div>
                    <Link href={"/SendDocumentsPage"}>
                        <button type='button' className='save'>
                            Salvar
                        </button>
                    </Link>
                </form>
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
                    <h1>Criar Usuário</h1>
                    <div className='name'>
                        <Input type="string" name="name" id="name" placeholder='Nome Completo'/><span className='span1'>*</span>
                    </div>
                    <p className='gender-txt'>Gênero <span className='span2'>*</span></p>
                    <div className='gender'>
                        <div  className='man'>
                            <Input type='radio' name='gender' id='man' defaultValue='M'/>
                            <p className='man-op'>Masculino</p>
                        </div>
                        <div  className='woman'>
                            <Input type='radio' name='gender' id='woman' defaultValue='F'/>
                            <p className='woman-op'>Feminino</p>
                        </div>
                        <div  className='transvestite'>
                            <Input type='radio' name='gender' id='transvestite' defaultValue='T1'/>
                            <p className='t1-op'>Travesti</p>
                        </div>
                        <div className='no-binary'>
                            <Input type='radio' name='gender' id='no-binary' defaultValue='NB'/>
                            <p className='nb-op'>Não Binário</p>
                        </div>
                        <div className='trans'>
                            <Input type='radio' name='gender' id='trans' defaultValue='T2'/>
                            <p className='t2-op'>Trans</p>
                        </div>
                        <div  className='another'>
                            <Input type='radio' name='gender' id='another' defaultValue='A'/>
                            <p className='a-op'>Outros</p>
                        </div>
                        <div  className='none'>
                            <Input type='radio' name='gender' id='none' defaultValue='N'/>
                            <p className='n-op'>Prefiro não dizer</p>
                        </div>
                    </div>
                    <div className='social-name'>
                        <Input type="string" name="social-name" id="social-name" placeholder='Nome Social'/>
                    </div>
                    <div className='date'>
                        <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/><br/>
                        <small className='small'>Digite a data de aniversário</small><span className='span3'>*</span>
                    </div>
                    <div className='cpf'>
                        <Input type="number" name="cpf" id="cpf" placeholder='CPF'/><span className='span4'>*</span>
                    </div>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='E-mail'/><span className='span5'>*</span>
                    </div>
                    <div className='country'>
                        <Input type="string" name="country" id="country" placeholder='País'/><span className='span6'>*</span>
                    </div>
                    <p className='profile-photo2'>Foto de Perfil</p>
                    <div className='choose-a-image'>
                        <label>
                            Adicionar <FaPlus className='plus'/>
                                <span className='photo'>
                                    <input type="file" id='photo-input'/>
                                </span>
                        </label>
                    </div>
                    <Link href={"/SendDocumentsPage"}>
                        <button type='button' className='save'>
                            Salvar
                        </button>
                    </Link>
                </form>
            </nav>
        </CreateUserComponent>
    )
}

export default CreateUserPg;