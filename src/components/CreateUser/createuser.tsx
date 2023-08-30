// Developed code by Gabriel

'use client'
import styled from '@emotion/styled';
import Input from '../Login/Input/Input';
import Image from 'next/image';

const CreateUserComponent = styled.section `

    // Mobile
    
    .mobile {
        display: block;
        justify-content: space-between;
    }

    .tablet-desktops {
        display: none;
    }

    * {
        color: white;
        font-family: 'Poppins-Medium';
    }

    height: 200vh;

    background: linear-gradient(180deg, #0A53B5 0%, #0081E8 100%);

    h1 {
        padding-top: 15%;
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

    .profile-photo {
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
            height: 200px;
        }

        .search {
            width: 30px;
            height: 30px;
            margin-top: 9%;
            margin-left: 8%;
        }

        .box-1 {
            margin-top: -9.5%;
            margin-left: 20%;
            text-align: center;
            background-color: #0081E8;
            width: 170px;
            height: 130px;
        }

        .amount-documents {
            font-size: 4em;
        }

        .documents {
            margin-top: -10%;
        }

        .box-2 {
            margin-top: -17%;
            margin-left: 50%;
            text-align: center;
            background-color: #F47216;
            width: 170px;
            height: 130px;
        }

        .amount-users {
            font-size: 4em;
        }

        .users {
            margin-top: -10%;
        }

        .profile-photo {
            position: absolute;
            top: 160px;
            margin-left: 79%;
            width: 110px;
            height: 110px;
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
            font-size: 2em;
            margin-left: 31.5%;
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
            font-size: 1.5em;
            margin-top: 1%;
            margin-left: 10%;
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
            top: 865px;
            font-size: 1.3em;
        }

        .small {
            margin-left: 11%;
            position: absolute;
            top: 870px;
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
            font-weight: bold;
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
            margin-left: 36%;
            width: 170px;
            font-size: 1.8em;
            background-color: #93B413;
        }

        .save:active {
            margin-top: 3%;
            margin-left: 36%;
            width: 170px;
            font-size: 1.8em;
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
            width: 60px;
            height: 60px;
            margin-top: 6%;
            margin-left: 10%;
        }

        .box-1 {
            margin-left: 30%;
        }

        .box-2 {
            margin-left: 55%;
            margin-top: -12.6%;
        }

        .profile-photo {
            width: 150px;
            height: 150px;
            margin-top: 2%;
        }

        #your-name {
            font-size: 1.2em;
            margin-left: 81%;
            margin-top: 0%;
        }

        form {
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0b58bc 100%);
            width: 842px;
            height: 1040px;
        }

        h1 {
            font-size: 2.5em;
            margin-left: 33.5%;
        }

        .name {
            margin-top: 3%;
            margin-left: -3%;
            font-size: 1.4em;
        }

        #name {
            width: 700px;
            height: 45px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .span1 {
            color: #F47216;
            margin-left: -50%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 2.5%;
        }

        .gender-txt {
            font-size: 1.4em;
            margin-left: 8.5%;
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
            margin-left: 9.5%;
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
            margin-left: 28.5%;
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
            margin-left: 46.5%;
            margin-top: -5.6%;
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
            margin-left: 9.5%;
            margin-top: -0.5%;
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
            margin-left: 28.5%;
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
            margin-left: 46.5%;
            margin-top: -5.6%;
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
            margin-left: 9.5%;
            margin-top: -0.5%;
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
            margin-left: -3%;
            font-size: 1.4em;
        }

        #social-name {
            width: 700px;
            height: 45px;
        }

        #social-name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .date {
            margin-top: -3%;
            margin-left: -3%;
            font-size: 1.4em;
        }

        #birthday {
            width: 700px;
            height: 45px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .span3 {
            color: #F47216;
            margin-left: 35%;
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
            margin-left: -3%;
            font-size: 1.4em;
        }

        #cpf {
            width: 700px;
            height: 45px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .span4 {
            color: #F47216;
            margin-left: -63%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 2%;
        }

        .email {
            margin-top: -3%;
            margin-left: -3%;
            font-size: 1.4em;
        }

        #email {
            width: 700px;
            height: 45px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .span5 {
            color: #F47216;
            margin-left: -61%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 2%;
        }

        .country {
            margin-top: -3%;
            margin-left: -3%;
            font-size: 1.4em;
        }

        #country {
            width: 700px;
            height: 45px;
        }

        #country::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 1.4em;
        }

        .span6 {
            color: #F47216;
            margin-left: -63%;
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
            width: 200px;
            height: 60px;
            font-size: 2em;
            background-color: #93B413;
            margin-left: 38%;
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

        height: 280vh;

        .mobile {
            display: none;
        }

        .tablet-desktops {
            display: block;
            justify-content: space-between;
        }

        header {
            height: 270px;
        }

        .search {
            width: 80px;
            height: 80px;
            margin-left: 7%;
        }

        .box-1 {
            width: 290px;
            height: 200px;
            margin-top: -10.5%;
            margin-left: 25%;
        }

        .amount-documents {
            font-size: 6.2em;
        }

        .documents {
            margin-top: -10%;
            font-size: 1.5em;
        }

        .box-2 {
            width: 290px;
            height: 200px;
            margin-top: -14.5%;
            margin-left: 52%;
        }

        .amount-users {
            font-size: 6.2em;
        }

        .users {
            margin-top: -10%;
            font-size: 1.5em;
        }

        .profile-photo {
            width: 190px;
            height: 190px;
            margin-left: 81%;
        }

        #your-name {
            font-size: 1.7em;
            margin-top: -1%;
            margin-left: 82.2%;
        }

        form {
            margin-top: 5%;
            width: 1110px;
            height: 1400px;
        }

        h1 {
            font-size: 4em;
            margin-left: 28.5%;
        }

        .name {
            margin-top: 3%;
            margin-left: -3%;
            font-size: 2.2em;
        }

        #name {
            width: 930px;
            height: 45px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.2em;
        }

        .span1 {
            color: #F47216;
            margin-left: -47%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 0%;
        }

        .gender-txt {
            font-size: 2.2em;
        }

        .man {
            width: 30px;
            margin-left: 10.2%;
            margin-top: -1.5%;
        }

        #man {
            width: 30px;
            cursor: pointer;
        }

        .man-op {
            margin-left: 555%;
            margin-top: -254%;
            font-size: 1.6em;
        }

        .woman {
            width: 30px;
            margin-left: 27.2%;
            margin-top: -4.7%;
        }

        #woman {
            width: 30px;
            cursor: pointer;
        }

        .woman-op {
            margin-left: 555%;
            margin-top: -254%;
            font-size: 1.6em;
        }

        .transvestite {
            width: 30px;
            margin-left: 43.2%;
            margin-top: -4.7%;
        }

        #transvestite {
            width: 30px;
            cursor: pointer;
        }

        .t1-op {
            margin-left: 555%;
            margin-top: -254%;
            font-size: 1.6em;
        }

        .no-binary {
            width: 30px;
            margin-left: 10.2%;
            margin-top: 0%;
        }

        #no-binary {
            width: 30px;
            cursor: pointer;
        }

        .nb-op {
            margin-left: 555%;
            margin-top: -254%;
            font-size: 1.6em;
            width: 168px;
        }

        .trans {
            width: 30px;
            margin-left: 27.2%;
            margin-top: -4.7%;
        }

        #trans {
            width: 30px;
            cursor: pointer;
        }

        .t2-op {
            margin-left: 555%;
            margin-top: -254%;
            font-size: 1.6em;
        }

        .another {
            width: 30px;
            margin-left: 43.2%;
            margin-top: -4.7%;
        }

        #another {
            width: 30px;
            cursor: pointer;
        }

        .a-op {
            margin-left: 555%;
            margin-top: -254%;
            font-size: 1.6em;
        }

        .none {
            width: 30px;
            margin-left: 10.2%;
            margin-top: 0%;
        }

        #none {
            width: 30px;
            cursor: pointer;
        }

        .n-op {
            margin-left: 555%;
            margin-top: -254%;
            font-size: 1.6em;
            width: 234px;
        }

        .social-name {
            margin-top: 3%;
            margin-left: -3%;
            font-size: 2.2em;
        }

        #social-name {
            width: 930px;
            height: 45px;
        }

        #social-name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.2em;
        }

        .date {
            margin-top: -3%;
            margin-left: -3%;
            font-size: 2.2em;
        }

        #birthday {
            width: 930px;
            height: 45px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.2em;
        }

        .span3 {
            color: #F47216;
            margin-left: 39%;
            position: absolute;
            margin-top: 27%;
        }

        .small {
            position: absolute;
            margin-left: 9%;
            top: 1030px;
        }

        .cpf {
            margin-top: 2%;
            margin-left: -3%;
            font-size: 2.2em;
        }

        #cpf {
            width: 930px;
            height: 45px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.2em;
        }

        .span4 {
            color: #F47216;
            margin-left: -62%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 0.2%;
        }

        .email {
            margin-top: -2%;
            margin-left: -3%;
            font-size: 2.2em;
        }

        #email {
            width: 930px;
            height: 45px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.2em;
        }

        .span5 {
            color: #F47216;
            margin-left: -60.5%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 0.2%;
        }

        .country {
            margin-top: -2%;
            margin-left: -3%;
            font-size: 2.2em;
        }

        #country {
            width: 930px;
            height: 45px;
        }

        #country::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.2em;
        }

        .span6 {
            color: #F47216;
            margin-left: -62.5%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 0.2%;
        }

        .profile-photo2 {
            font-size: 2.2em;
        }

        .choose-a-image {
            width: 230px;
            height: 65px;
            background-color: #F47216;
        }

        .choose-a-image:hover {
            width: 230px;
            height: 65px;
            background-color: #ff7818;
        }

        .choose-a-image:active {
            width: 230px;
            height: 65px;
            background-color: #d66515;
        }

        label {
            position: absolute;
            margin-left: 2.1%;
            top: 1653px;
            font-size: 1.5em;
        }

        .save {
            margin-top: 3%;
            width: 250px;
            height: 70px;
            font-size: 2.5em;
            background-color: #93B413;
        }

        .save:hover {
            margin-top: 3%;
            width: 250px;
            height: 70px;
            font-size: 2.5em;
            background-color: #9fc214;
        }

        .save:active {
            margin-top: 3%;
            width: 250px;
            height: 70px;
            font-size: 2.5em;
            background-color: #86a40f;
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

        .search {
            margin-top: 5.5%;
        }

        .box-1 {
            margin-top: -8.6%;
        }

        .box-2 {
            margin-top: -12.8%;
        }

        form {
            width: 1290px;
            height: 1550px;
        }

        h1 {
            margin-left: 32%;
        }

        .name {
            margin-top: 3%;
            margin-left: -3%;
            font-size: 2.3em;
        }

        #name {
            width: 1045px;
            height: 45px;
        }

        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.3em;
        }

        .span1 {
            color: #F47216;
            margin-left: -46.5%;
            position: absolute;
            font-size: 1.4em;
            margin-top: 1.2%;
        }

        .gender-txt {
            font-size: 2.3em;
            margin-left: 9.3%;
            margin-top: -2.5%;
        }

        .man {
            margin-top: -2.5%;
        }

        #man {
            width: 30px;
            cursor: pointer;
        }

        .man-op {
            margin-top: -360%;
            margin-left: 655%;
        }

        .woman {
            margin-top: -5.3%;
            margin-left: 25.2%;
        }

        #woman {
            width: 30px;
            cursor: pointer;
        }

        .woman-op {
            margin-top: -360%;
            margin-left: 655%;
        }

        .transvestite {
            margin-top: -5.2%;
            margin-left: 39.2%;
        }

        #transvestite {
            width: 30px;
            cursor: pointer;
        }

        .t1-op {
            margin-top: -360%;
            margin-left: 655%;
        }

        .no-binary {
            margin-top: -1%;
        }

        #no-binary {
            width: 30px;
            cursor: pointer;
        }

        .nb-op {
            margin-top: -360%;
            margin-left: 655%;
        }

        .trans {
            margin-top: -5.3%;
            margin-left: 25.2%;
        }

        #trans {
            width: 30px;
            cursor: pointer;
        }

        .t2-op {
            margin-top: -360%;
            margin-left: 655%;
        }

        .another {
            margin-top: -5.2%;
            margin-left: 39.2%;
        }

        #another {
            width: 30px;
            cursor: pointer;
        }

        .a-op {
            margin-top: -360%;
            margin-left: 655%;
        }

        .none {
            margin-top: -1%;
        }

        #none {
            width: 30px;
            cursor: pointer;
        }

        .n-op {
            margin-top: -360%;
            margin-left: 655%;
        }

        .social-name {
            margin-top: 0%;
            margin-left: -3%;
            font-size: 2.3em;
        }

        #social-name {
            width: 1045px;
            height: 45px;
        }

        #social-name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.3em;
        }

        .date {
            margin-top: -5%;
            margin-left: -3%;
            font-size: 2.3em;
        }

        #birthday {
            width: 1045px;
            height: 45px;
        }

        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.3em;
        }

        .small {
            position: absolute;
            top: 1070px;
            font-size: 0.6em;
            margin-left: 10%;
        }

        .span3 {
            color: #F47216;
            margin-left: 32.5%;
            position: absolute;
            font-size: 0.8em;
            margin-top: 28.5%;
        }

        .cpf {
            margin-top: -2%;
            margin-left: -3%;
            font-size: 2.3em;
        }

        #cpf {
            width: 1045px;
            height: 45px;
        }

        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.3em;
        }

        .span4 {
            color: #F47216;
            margin-left: -60.5%;
            position: absolute;
            font-size: 1.2em;
            margin-top: 1.5%;
        }

        .email {
            margin-top: -2%;
            margin-left: -3%;
            font-size: 2.3em;
        }

        #email {
            width: 1045px;
            height: 45px;
        }

        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.3em;
        }

        .span5 {
            color: #F47216;
            margin-left: -59.3%;
            position: absolute;
            font-size: 1.2em;
            margin-top: 1.3%;
        }

        .country {
            margin-top: -2%;
            margin-left: -3%;
            font-size: 2.3em;
        }

        #country {
            width: 1045px;
            height: 45px;
        }

        #country::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-size: 2.3em;
        }

        .span6 {
            color: #F47216;
            margin-left: -60.3%;
            position: absolute;
            font-size: 1.2em;
            margin-top: 1.3%;
        }

        .profile-photo2 {
            margin-top: -5%;
            margin-left: 9.3%;
        }

        .choose-a-image {
            margin-left: 9.3%;
            background-color: #F47216;
        }

        .choose-a-image:hover {
            margin-left: 9.3%;
            background-color: #ff7818;
        }

        .choose-a-image:active {
            margin-left: 9.3%;
            background-color: #d66515;
        }

        label {
            position: absolute;
            top: 1830px;
            margin-left: 1.4%;
            cursor: pointer;
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
                    <p className='profile-photo'>Foto de Perfil</p>
                    <div className='choose-a-image'>
                        <label>
                            Adicionar +
                                <span className='photo'>
                                    <input type="file" id='photo-input'/>
                                </span>
                        </label>
                    </div>
                    <button type='button' className='save'>
                        Salvar
                    </button>
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
                    <h2 className='gender-txt'>Gênero <span className='span2'>*</span></h2>
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
                    <button type='button' className='save'>
                        Salvar
                    </button> 
                </form>
            </nav>
        </CreateUserComponent>
    )
}

export default CreateUserPg;