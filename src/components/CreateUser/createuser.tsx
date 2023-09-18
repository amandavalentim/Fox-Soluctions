// Developed code by Gabriel

'use client'
import styled from '@emotion/styled';
import Input from '../Login/Input/Input';
import Image from 'next/image';
import Link from 'next/link';

const CreateUserComponent = styled.section `

    // Mobile
    
    .mobile {
        display: block;
        justify-content: space-between;
    }

    .tablet-desktops {
        display: none;
    }

    header {
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
    }

    * {
        color: white;
        font-family: 'Poppins-Medium';
    }

    height: 225vh;

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

    .span3 {
        color: #F47216;
        margin-left: 3%;
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
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0b58bc 100%);
            width: 630px;
            height: 790px;
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
            margin-left: 10%;
            font-family: 'Poppins-Medium';
        }

        .span2 {
            color: #F47216;
            margin-left: 0%;
        }

        .man {
            width: 30px;
            margin-left: 10%;
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
            margin-left: 29%;
            margin-top: -7%;
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
            margin-left: 47%;
            margin-top: -7%;
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
            margin-left: 10%;
            margin-top: -3%;
        }

        #no-binary {
            width: 10px;
        }

        .nb-op {
            margin-left: 355%;
            margin-top: -166.5%;
            width: 105px;
        }

        .trans {
            width: 30px;
            margin-left: 29%;
            margin-top: -7%;
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
            margin-left: 47%;
            margin-top: -7%;
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
            margin-left: 10%;
            margin-top: -3%;
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
            margin-top: -5%;
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
            top: 821px;
            font-size: 1.3em;
        }

        .small {
            margin-left: 11%;
            position: absolute;
            top: 830px;
        }

        .cpf {
            margin-top: -2%;
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
            margin-top: -4.5%;
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
            margin-top: -4.5%;
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
            margin-left: 10.5%;
        }

        .choose-a-image {
            background-color: #F47216;
            width: 130px;
            height: 40px;
            margin-left: 10%;
            margin-top: 0%;
        }

        .choose-a-image:active {
            background-color: #d66515;
            width: 130px;
            height: 40px;
            margin-left: 10%;
            margin-top: 0%;
        }

        label {
         position: absolute;
         margin-left: 1.7%;
         margin-top: 0.5%;
         color: white;
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

        height: 221vh;

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
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0b58bc 100%);
            width: 800px;
            height: 1040px;
            margin-left: 10.6%;
        }

        h1 {
            font-size: 2.2em;
            margin-left: 34.5%;
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
            margin-left: -38%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 2.1%;
        }

        .gender-txt {
            font-size: 1.4em;
            margin-left: 14.2%;
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
            margin-top: -183%;
            font-size: 1.3em;
        }

        .woman {
            width: 30px;
            margin-left: 33.5%;
            margin-top: -5.7%;
        }

        #woman {
            width: 25px;
            cursor: pointer;
        }

        .woman-op {
            margin-left: 425%;
            margin-top: -183%;
            font-size: 1.3em;
        }

        .transvestite {
            width: 30px;
            margin-left: 51.5%;
            margin-top: -5.9%;
        }

        #transvestite {
            width: 25px;
            cursor: pointer;
        }

        .t1-op {
            margin-left: 425%;
            margin-top: -183%;
            font-size: 1.3em;
        }

        .no-binary {
            width: 30px;
            margin-left: 14.3%;
            margin-top: -1.5%;
        }

        #no-binary {
            width: 25px;
            cursor: pointer;
        }

        .nb-op {
            margin-left: 425%;
            margin-top: -183%;
            font-size: 1.3em;
            width: 145px;
        }

        .trans {
            width: 30px;
            margin-left: 33.5%;
            margin-top: -5.7%;
        }

        #trans {
            width: 25px;
            cursor: pointer;
        }

        .t2-op {
            margin-left: 425%;
            margin-top: -183%;
            font-size: 1.3em;
        }

        .another {
            width: 30px;
            margin-left: 51.5%;
            margin-top: -5.9%;
        }

        #another {
            width: 25px;
            cursor: pointer;
        }

        .a-op {
            margin-left: 425%;
            margin-top: -183%;
            font-size: 1.3em;
        }

        .none {
            width: 30px;
            margin-left: 14.3%;
            margin-top: -1.5%;
        }

        #none {
            width: 25px;
            cursor: pointer;
        }

        .n-op {
            margin-left: 425%;
            margin-top: -183%;
            font-size: 1.3em;
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
            margin-top: -3%;
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
            margin-top: 16%;
        }

        .small {
            font-size: 0.7em;
            margin-left: 9.5%;
            margin-top: 16%;
        }

        .cpf {
            margin-top: 0%;
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
            margin-top: -3%;
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
            margin-top: -3%;
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
            font-size: 1.4em;
            margin-left: 8.5%;
            margin-top: 0%;
        }

        .choose-a-image {
            margin-left: 8.5%;
            width: 150px;
            height: 45px;
            font-size: 1.2em;
        }

        .choose-a-image:hover {
            margin-left: 8.5%;
            width: 150px;
            height: 45px;
            font-size: 1.2em;
            background-color: #ff7818;
        }

        .choose-a-image:active {
            margin-left: 8.5%;
            width: 150px;
            height: 45px;
            font-size: 1.2em;
            background-color: #d66515;
        }

        label {
            margin-left: 1.2%;
        }

        .save {
            width: 150px;
            height: 50px;
            font-size: 1.6em;
            background-color: #93B413;
            margin-left: 42%;
        }

        .save:hover {
            width: 200px;
            height: 60px;
            font-size: 2em;
            background-color: #9fc214;
            margin-left: 38%;
        }

        .save:active {
            width: 200px;
            height: 60px;
            font-size: 2em;
            background-color: #86a40f;
            margin-left: 38%;
        }
    }

    // Medium Screens
    @media(min-width: 1200px) {

        height: 250vh;

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
            margin-top: 5%;
            width: 1110px;
            height: 1250px;
        }

        h1 {
            font-size: 2.4em;
            margin-left: 35.5%;
        }

        .name {
            margin-top: 3%;
            margin-left: 8.8%;
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
            font-size: 1.3em;
            margin-top: 1%;
        }

        .gender-txt {
            font-size: 1.5em;
            margin-left: 20%;
        }

        .man {
            width: 30px;
            margin-left: 20.2%;
            margin-top: -0.5%;
        }

        #man {
            width: 30px;
            cursor: pointer;
        }

        .man-op {
            margin-left: 555%;
            margin-top: -254%;
            font-size: 1.1em;
        }

        .woman {
            width: 30px;
            margin-left: 35.2%;
            margin-top: -4.1%;
        }

        #woman {
            width: 30px;
            cursor: pointer;
        }

        .woman-op {
            margin-left: 555%;
            margin-top: -240%;
            font-size: 1.1em;
        }

        .transvestite {
            width: 30px;
            margin-left: 49.2%;
            margin-top: -4.2%;
        }

        #transvestite {
            width: 30px;
            cursor: pointer;
        }

        .t1-op {
            margin-left: 555%;
            margin-top: -240%;
            font-size: 1.1em;
        }

        .no-binary {
            width: 30px;
            margin-left: 20.2%;
            margin-top: -0.5%;
        }

        #no-binary {
            width: 30px;
            cursor: pointer;
        }

        .nb-op {
            margin-left: 555%;
            margin-top: -245%;
            font-size: 1.1em;
        }

        .trans {
            width: 30px;
            margin-left: 35.2%;
            margin-top: -4.1%;
        }

        #trans {
            width: 30px;
            cursor: pointer;
        }

        .t2-op {
            margin-left: 555%;
            margin-top: -245%;
            font-size: 1.1em;
        }

        .another {
            width: 30px;
            margin-left: 49.2%;
            margin-top: -4.2%;
        }

        #another {
            width: 30px;
            cursor: pointer;
        }

        .a-op {
            margin-left: 555%;
            margin-top: -245%;
            font-size: 1.1em;
        }

        .none {
            width: 30px;
            margin-left: 20.2%;
            margin-top: 0%;
        }

        #none {
            width: 30px;
            cursor: pointer;
        }

        .n-op {
            margin-left: 555%;
            margin-top: -245%;
            font-size: 1.1em;
            width: 234px;
        }

        .social-name {
            margin-top: -0.5%;
            margin-left: 8.8%;
            font-size: 1.6em;
        }

        #social-name {
            width: 650px;
            height: 45px;
        }

        #social-name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.5em;
        }

        .date {
            margin-top: -3.5%;
            margin-left: 8.8%;
            font-size: 1.6em;
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
            margin-left: 30.5%;
            position: absolute;
            margin-top: 16.5%;
        }

        .small {
            position: absolute;
            margin-left: 9%;
            top: 840px;
        }

        .cpf {
            margin-top: -1.5%;
            margin-left: 8.8%;
            font-size: 1.6em;
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
            margin-left: -43.5%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 0.7%;
        }

        .email {
            margin-top: -2.5%;
            margin-left: 8.8%;
            font-size: 1.6em;
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
            margin-left: -41.5%;
            position: absolute;
            font-size: 1.2em;
            margin-top: 0.9%;
        }

        .country {
            margin-top: -2.5%;
            margin-left: 8.8%;
            font-size: 1.6em;
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
            margin-left: -43.5%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 0.7%;
        }

        .profile-photo2 {
            font-size: 2em;
            margin-left: 20%;
            font-size: 1.5em;
        }

        .choose-a-image {
            width: 200px;
            height: 60px;
            margin-left: 20%;
            background-color: #F47216;
            font-size: 1em;
        }

        .choose-a-image:hover {
            width: 200px;
            height: 60px;
            margin-left: 20%;
            background-color: #ff7818;
            font-size: 1em;
        }

        .choose-a-image:active {
            width: 200px;
            height: 60px;
            margin-left: 20%;
            background-color: #d66515;
            font-size: 1em;
        }

        label {
            position: absolute;
            margin-left: 1.7%;
            top: 1423px;
            font-size: 1.5em;
        }

        .save {
            margin-top: 6%;
            width: 220px;
            height: 70px;
            font-size: 2.5em;
            background-color: #93B413;
            margin-left: 41%;
        }

        .save:hover {
            margin-top: 6%;
            width: 220px;
            height: 70px;
            font-size: 2.5em;
            background-color: #9fc214;
            margin-left: 41%;
        }

        .save:active {
            margin-top: 6%;
            width: 220px;
            height: 70px;
            font-size: 2.5em;
            background-color: #86a40f;
            margin-left: 41%;
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

        form {
            width: 1190px;
            height: 1550px;
            margin-left: 12%;
        }

        h1 {
            margin-left: 35.3%;
            font-size: 2.8em;
        }

        .name {
            margin-top: 3%;
            margin-left: -0.4%;
            font-size: 2.3em;
        }

        #name {
            width: 880px;
            height: 45px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.1em;
        }

        .span1 {
            color: #F47216;
            margin-left: -36.5%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 1.2%;
        }

        .gender-txt {
            font-size: 2.3em;
            margin-left: 13%;
            margin-top: -2.5%;
            font-size: 2.1em;
        }

        .man {
            margin-top: -2.5%;
            margin-left: 12.4%;
        }

        #man {
            width: 30px;
            cursor: pointer;
        }

        .man-op {
            margin-top: -342%;
            margin-left: 655%;
        }

        .woman {
            margin-top: -5.2%;
            margin-left: 28.2%;
        }

        #woman {
            width: 30px;
            cursor: pointer;
        }

        .woman-op {
            margin-top: -342%;
            margin-left: 655%;
        }

        .transvestite {
            margin-top: -5.3%;
            margin-left: 42.5%;
        }

        #transvestite {
            width: 30px;
            cursor: pointer;
        }

        .t1-op {
            margin-top: -342%;
            margin-left: 655%;
        }

        .no-binary {
            margin-top: -2.5%;
            margin-left: 12.4%;
        }

        #no-binary {
            width: 30px;
            cursor: pointer;
        }

        .nb-op {
            margin-top: -342%;
            margin-left: 655%;
        }

        .trans {
            margin-top: -5.2%;
            margin-left: 28.2%;
        }

        #trans {
            width: 30px;
            cursor: pointer;
        }

        .t2-op {
            margin-top: -342%;
            margin-left: 655%;
        }

        .another {
            margin-top: -5.3%;
            margin-left: 42.5%;
        }

        #another {
            width: 30px;
            cursor: pointer;
        }

        .a-op {
            margin-top: -342%;
            margin-left: 655%;
        }

        .none {
            margin-top: -2.5%;
            margin-left: 12.4%;
        }

        #none {
            width: 30px;
            cursor: pointer;
        }

        .n-op {
            margin-top: -342%;
            margin-left: 655%;
        }

        .social-name {
            margin-top: 0%;
            margin-left: -0.4%;
            font-size: 2.3em;
        }

        #social-name {
            width: 880px;
            height: 45px;
        }

        #social-name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 2.1em;
        }

        .date {
            margin-top: -6%;
            margin-left: -0.4%;
            font-size: 2.3em;
        }

        #birthday {
            width: 880px;
            height: 45px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.1em;
        }

        .small {
            position: absolute;
            top: 895px;
            font-size: 0.6em;
            margin-left: 10%;
        }

        .span3 {
            color: #F47216;
            margin-left: 32.5%;
            position: absolute;
            font-size: 0.8em;
            margin-top: 19.5%;
        }

        .cpf {
            margin-top: -2%;
            margin-left: -0.4%;
            font-size: 2.3em;
        }

        #cpf {
            width: 880px;
            height: 45px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.1em;
        }

        .span4 {
            color: #F47216;
            margin-left: -50.5%;
            position: absolute;
            font-size: 1.2em;
            margin-top: 1.5%;
        }

        .email {
            margin-top: -3.5%;
            margin-left: -0.4%;
            font-size: 2.3em;
        }

        #email {
            width: 880px;
            height: 45px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.1em;
        }

        .span5 {
            color: #F47216;
            margin-left: -48.3%;
            position: absolute;
            font-size: 1.2em;
            margin-top: 1.3%;
        }

        .country {
            margin-top: -3.5%;
            margin-left: -0.4%;
            font-size: 2.3em;
        }

        #country {
            width: 880px;
            height: 45px;
        }

        #country::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.1em;
        }

        .span6 {
            color: #F47216;
            margin-left: -50.3%;
            position: absolute;
            font-size: 1.2em;
            margin-top: 1.3%;
        }

        .profile-photo2 {
            margin-top: -3%;
            margin-left: 13%;
            font-size: 2em;
        }

        .choose-a-image {
            margin-left: 12.9%;
            background-color: #F47216;
            width: 260px;
            height: 70px;
        }

        .choose-a-image:hover {
            margin-left: 12.9%;
            background-color: #ff7818;
            width: 260px;
            height: 70px;
        }

        .choose-a-image:active {
            margin-left: 12.9%;
            background-color: #d66515;
            width: 260px;
            height: 70px;
        }

        label {
            position: absolute;
            top: 1650px;
            margin-left: 1.4%;
            cursor: pointer;
            font-size: 2em;
        }

        .save {
            width: 280px;
            height: 80px;
            font-size: 3em;
            background-color: #93B413;
            margin-left: 41%;
            cursor: pointer;
        }

        .save:hover {
            width: 280px;
            height: 80px;
            font-size: 3em;
            background-color: #9fc214;
            margin-left: 41%;
        }

        .save:active {
            width: 280px;
            height: 80px;
            font-size: 3em;
            background-color: #86a40f;
            margin-left: 41%;
        }
    }
`;

const CreateUserPg = function() {
    return (
        <CreateUserComponent>
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
                        <Input type="email" name="email" id="email" placeholder='Email'/><span className='span5'>*</span>
                    </div>
                    <div className='country'>
                        <Input type="string" name="country" id="country" placeholder='País'/><span className='span6'>*</span>
                    </div>
                    <p className='profile-photo2'>Foto de Perfil</p>
                    <div className='choose-a-image'>
                        <label>
                            Adicionar +
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
                        <Input type="email" name="email" id="email" placeholder='Email'/><span className='span5'>*</span>
                    </div>
                    <div className='country'>
                        <Input type="string" name="country" id="country" placeholder='País'/><span className='span6'>*</span>
                    </div>
                    <p className='profile-photo2'>Foto de Perfil</p>
                    <div className='choose-a-image'>
                    <label>
                        Adicionar +
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