//Código desenvolvido por Gabriel
'use client';
"use strict";

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

exports.__esModule = true;

var styled_1 = require("@emotion/styled");

var fa_1 = require("react-icons/fa");

var link_1 = require("next/link");

var Input_1 = require("../Login/Input/Input");

var FormComponent2 = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    height: 130vh;\n\n    background: linear-gradient(180deg, #0A53B5 0%, #028fcc 100%);\n\n    * {\n        color: white;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n            display: none;\n    }\n\n    .desktop2{\n            display: none;\n    }\n\n    .desktop3{\n            display: none;\n    }\n\n    h1 {\n        font-size: 1.3em;\n        position: absolute;\n        top: 220px;\n        left: 90px;\n    }\n\n    .fox {\n        position: absolute;\n        top: 150px;\n    }\n\n    .name {\n        position: absolute;\n        top: 270px;\n        left: 35px;\n    }\n\n    .date {\n        position: absolute;\n        top: 330px;\n        left: 35px;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .phone {\n        position: absolute;\n        top: 390px;\n        left: 35px;\n    }\n\n    .cpf {\n        position: absolute;\n        top: 450px;\n        left: 35px;\n    }\n\n    .senha {\n        position: absolute;\n        top: 510px;\n        left: 35px;\n    }\n\n    .confirmar-senha{\n        position: absolute;\n        top: 570px;\n        left: 35px;\n    }\n\n    .email {\n        position: absolute;\n        top: 630px;\n        left: 35px;\n    }\n\n    p {\n        position: absolute;\n        top: 700px;\n        left: 150px;\n    }\n\n    .google-enter {\n        position: absolute;\n        top: 740px;\n        left: 35px;\n    }\n\n    .btn-google {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n    .btn-google:active {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n        background-color: #86a40f;\n    }\n\n    .page2 {\n        position: absolute;\n        top: 795px;\n        left: 35px;\n    }\n\n    .faGoogle {\n        width: 40px;\n        height: 25px;\n        margin-bottom: -5px;\n    }\n\n    span {\n        color: #F47216;\n    }\n\n    .button-create {\n        position: absolute;\n        top: 835px;\n        left: 75px;\n    }\n\n    .criar {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .criar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .fox {\n        width: 90px;\n    }\n\n    @media(min-width: 768px){\n\n        height: 140vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2{\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-create-user.svg\");\n        background-repeat: no-repeat;\n\n        form {\n        position: relative;\n        left: 190px;\n        top: 30px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n        width: 400px;\n        height: 735px;\n        border-color: white;\n       }\n\n       h1 {\n        font-size: 1.5em;\n        position: absolute;\n        top: 55px;\n        left: 115px;\n       }\n\n       .name {\n        font-size: 1.3em;\n        position: absolute;\n        top: 105px;\n        left: -40px;\n       }\n\n       .date {\n        font-size: 1.3em;\n        position: absolute;\n        top: 165px;\n        left: -40px;\n       }\n\n       Small {\n        margin-left: 16%;\n       }\n\n       .email {\n        font-size: 1.3em;\n        position: absolute;\n        top: 240px;\n        left: -40px;\n       }\n\n       .phone {\n        font-size: 1.3em;\n        position: absolute;\n        top: 300px;\n        left: -40px;\n       }\n\n       .cpf {\n        font-size: 1.3em;\n        position: absolute;\n        top: 360px;\n        left: -40px;\n       }\n\n       .senha {\n        font-size: 1.3em;\n        position: absolute;\n        top: 420px;\n        left: -40px;\n       }\n\n       .confirmar-senha {\n        font-size: 1.3em;\n        position: absolute;\n        top: 480px;\n        left: -40px;\n       }\n\n       p {\n        position: absolute;\n        top: 550px;\n        left: 185px;\n       }\n\n       .google-enter {\n        position: absolute;\n        top: 590px;\n        left: 40px;\n       }\n\n       .btn-google {\n        width: 40vw;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n       .btn-google:active {\n        width: 40vw;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n       }\n\n       .page2 {\n        position: absolute;\n        top: 640px;\n        left: 65px;\n       }\n\n       .criar {\n        position: absolute;\n        top: -165px;\n        left: 40px;\n        background-color: #93B413;\n       }\n\n       .criar:active {\n        position: absolute;\n        top: -165px;\n        left: 40px;\n        background-color: #86a40f;\n       }\n\n       .fox {\n        position: absolute;\n        top: 500px;\n        left: 590px;\n       }\n    }\n\n    @media(min-width: 992px) {\n\n        height: 138vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop2{\n            display: none;\n        }\n\n        .desktop3{\n            display: none;\n        }\n\n        background-image: url(\"/images/992px-create-user.svg\");\n\n        form {\n            position: relative;\n            left: 260px;\n            top: 30px;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 500px;\n            height: 830px;\n            border-color: white;\n       }\n\n        h1 {\n            position: absolute;\n            top: 65px;\n            left: 140px;\n            font-size: 2em;\n        }\n\n        .name {\n            position: absolute;\n            top: 140px;\n            left: -21px;\n        }\n\n        #name {\n            width: 350px;\n        }\n\n        .date {\n            position: absolute;\n            top: 205px;\n            left: -21px;\n        }\n\n        Small {\n        margin-left: 17%;\n       }\n\n        #birthday {\n            width: 350px;\n        }\n\n        .email {\n            position: absolute;\n            top: 280px;\n            left: -21px;\n        }\n\n        #email {\n            width: 350px;\n        }\n\n        .phone {\n            position: absolute;\n            top: 345px;\n            left: -21px;\n        }\n\n        #phone {\n            width: 350px;\n        }\n\n        .cpf {\n            position: absolute;\n            top: 410px;\n            left: -21px;\n        }\n\n        #cpf {\n            width: 350px;\n        }\n\n        .senha {\n            position: absolute;\n            top: 475px;\n            left: -21px;\n        }\n\n        #password {\n            width: 350px;\n        }\n\n        .confirmar-senha {\n            position: absolute;\n            top: 530px;\n            left: -21px;\n        }\n\n        #confirm-password {\n            width: 350px;\n        }\n\n    p {\n        font-size: 1.3em;\n        position: absolute;\n        top: 605px;\n        left: 230px;\n    }\n\n    .google-enter {\n        position: absolute;\n        top: 650px;\n        left: 70px;\n        cursor: pointer;\n    }\n\n    .btn-google {\n        width: 350px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n    .btn-google:hover {\n        width: 350px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #9fc214;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n        cursor: pointer;\n    }\n\n    .btn-google:active {\n        width: 350px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n       }\n\n       .page2 {\n        position: absolute;\n        top: 715px;\n        left: 108px;\n       }\n\n       .criar {\n        position: absolute;\n        top: -80px;\n        left: 90px;\n        background-color: #93B413;\n        cursor: pointer;\n       }\n\n       .criar:hover {\n        position: absolute;\n        top: -80px;\n        left: 90px;\n        background-color: #9fc214;\n       }\n\n       .criar:active {\n        position: absolute;\n        top: -80px;\n        left: 90px;\n        background-color: #86a40f;\n       }\n\n       .fox {\n        width: 110px;\n        position: absolute;\n        left: 760px;\n        top: 600px;\n    }\n}\n\n    @media(min-width: 1200px) {\n\n        height: 178vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: none;\n        }\n\n        .desktop1{\n            display: none;\n        }\n\n        .desktop2 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop3{\n            display: none;\n        }\n\n        background-image: url(\"/images/1200px-create-user.svg\");\n\n        form {\n            position: relative;\n            left: 345px;\n            top: 30px;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 690px;\n            height: 1090px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 2.8em;\n            position: absolute;\n            left: 185px;\n        }\n\n        .name {\n            position: absolute;\n            top: 165px;\n            left: -25px;\n        }\n\n        #name {\n            font-size: large;\n            width: 500px;\n        }\n\n        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .date {\n            position: absolute;\n            top: 240px;\n            left: -25px;\n        }\n\n        Small {\n            margin-top: -4%;\n            margin-left: 17%;\n            font-size: 0.8em;\n       }\n\n        #birthday {\n            font-size: large;\n            width: 500px;\n        }\n\n        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.4em;\n        }\n\n        .email {\n            position: absolute;\n            top: 335px;\n            left: -25px;\n        }\n\n        #email{\n            font-size: large;\n            width: 500px;\n        }\n\n        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .phone{\n            position: absolute;\n            top: 410px;\n            left: -25px;\n        }\n\n        #phone{\n            font-size: large;\n            width: 500px;\n        }\n\n        #phone::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .cpf{\n            position: absolute;\n            top: 485px;\n            left: -25px;\n        }\n\n        #cpf{\n            font-size: large;\n            width: 500px;\n        }\n\n        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .senha {\n            position: absolute;\n            top: 560px;\n            left: -25px;\n        }\n\n        #password {\n            font-size: large;\n            width: 500px;\n        }\n\n        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .confirmar-senha {\n            position: absolute;\n            top: 635px;\n            left: -25px;\n        }\n\n        #confirm-password {\n            font-size: large;\n            width: 500px;\n        }\n\n        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        p {\n            font-size: 1.8em;\n            position: absolute;\n            top: 740px;\n            left: 310px;\n        }\n\n        .google-enter {\n            position: absolute;\n            top: 805px;\n            left: 100px;\n            cursor: pointer;\n        }\n\n        .btn-google {\n            width: 500px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .btn-google:hover {\n            width: 500px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #9fc214;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .btn-google:active {\n            width: 500px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #86a40f;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .faGoogle{\n            width: 60px;\n            height: 35px;\n        }\n        \n        .page2 {\n            font-size: 1.8em;\n            position: absolute;\n            top: 910px;\n            left: 123px;\n        }\n\n        .criar {\n            position: absolute;\n            top: 140px;\n            left: 140px;\n            background-color: #93B413;\n            width: 250px;\n            height: 80px;\n            font-size: 2.7em;\n            cursor: pointer;\n        }\n\n        .criar:hover {\n            position: absolute;\n            top: 140px;\n            left: 140px;\n            background-color: #9fc214;\n            width: 250px;\n            height: 80px;\n            font-size: 2.7em;\n        }\n\n        .criar:active {\n            position: absolute;\n            top: 140px;\n            left: 140px;\n            background-color: #86a40f;\n            width: 250px;\n            height: 80px;\n            font-size: 2.7em;\n        }\n\n        .fox {\n            width: 170px;\n            position: absolute;\n            left: 1035px;\n            top: 700px;\n        }\n    }\n\n    @media(min-width: 1600px) {\n\n        height: 170vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: none;\n        }\n\n        .desktop1{\n            display: none;\n        }\n\n        .desktop2{\n            display: none;\n        }\n\n        .desktop3 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        background-image: url(\"/images/1600px-create-user.svg\");\n\n        form {\n            position: relative;\n            left: 350px;\n            top: 45px;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 890px;\n            height: 1220px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 3em;\n            position: absolute;\n            top: 100px;\n            left: 275px;\n        }\n\n        .name {\n            position: absolute;\n            top: 195px;\n            left: -35px;\n        }\n\n        #name {\n            width: 650px;\n        }\n\n        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .date {\n            position: absolute;\n            top: 280px;\n            left: -35px;\n        }\n\n        Small {\n            margin-top: -7%;\n            margin-left: 17%;\n            font-size: 0.8em;\n       }\n\n        #birthday {\n            width: 650px;\n        }\n\n        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .email{\n            position: absolute;\n            top: 365px;\n            left: -35px;\n        }\n\n        #email {\n            width: 650px;\n        }\n\n        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .phone {\n            position: absolute;\n            top: 450px;\n            left: -35px;\n        }\n\n        #phone {\n            width: 650px;\n        }\n\n        #phone::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .cpf {\n            position: absolute;\n            top: 535px;\n            left: -35px;\n        }\n\n        #cpf {\n            width: 650px;\n        }\n\n        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .senha {\n            position: absolute;\n            top: 620px;\n            left: -35px;\n        }\n\n        #password {\n            width: 650px;\n        }\n\n        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .confirmar-senha {\n            position: absolute;\n            top: 705px;\n            left: -35px;\n        }\n\n        #confirm-password {\n            width: 650px;\n        }\n\n        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        p {\n            font-size: 2.2em;\n            position: absolute;\n            top: 820px;\n            left: 400px;\n        }\n\n        .google-enter {\n            position: absolute;\n            top: 895px;\n            left: 120px;\n        }\n\n        .btn-google {\n            width: 650px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .btn-google:hover {\n            width: 650px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #9fc214;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .btn-google:active {\n            width: 650px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #86a40f;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .page2 {\n            font-size: 2em;\n            position: absolute;\n            top: 1010px;\n            left: 160px;\n        }\n\n        .criar {\n            position: absolute;\n            top: 260px;\n            left: 250px;\n        }\n\n        .criar:hover {\n            position: absolute;\n            top: 260px;\n            left: 250px;\n            background-color: #9fc214;\n        }\n\n        .criar:active {\n            position: absolute;\n            top: 260px;\n            left: 250px;\n            background-color: #86a40f;\n        }\n\n        .fox {\n            position: absolute;\n            left: 1240px;\n            top: 850px;\n        }\n    }\n\n"], ["\n\n    height: 130vh;\n\n    background: linear-gradient(180deg, #0A53B5 0%, #028fcc 100%);\n\n    * {\n        color: white;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n            display: none;\n    }\n\n    .desktop2{\n            display: none;\n    }\n\n    .desktop3{\n            display: none;\n    }\n\n    h1 {\n        font-size: 1.3em;\n        position: absolute;\n        top: 220px;\n        left: 90px;\n    }\n\n    .fox {\n        position: absolute;\n        top: 150px;\n    }\n\n    .name {\n        position: absolute;\n        top: 270px;\n        left: 35px;\n    }\n\n    .date {\n        position: absolute;\n        top: 330px;\n        left: 35px;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .phone {\n        position: absolute;\n        top: 390px;\n        left: 35px;\n    }\n\n    .cpf {\n        position: absolute;\n        top: 450px;\n        left: 35px;\n    }\n\n    .senha {\n        position: absolute;\n        top: 510px;\n        left: 35px;\n    }\n\n    .confirmar-senha{\n        position: absolute;\n        top: 570px;\n        left: 35px;\n    }\n\n    .email {\n        position: absolute;\n        top: 630px;\n        left: 35px;\n    }\n\n    p {\n        position: absolute;\n        top: 700px;\n        left: 150px;\n    }\n\n    .google-enter {\n        position: absolute;\n        top: 740px;\n        left: 35px;\n    }\n\n    .btn-google {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n    .btn-google:active {\n        width: 250px;\n        height: 40px;\n        font-size: 1.1em;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n        background-color: #86a40f;\n    }\n\n    .page2 {\n        position: absolute;\n        top: 795px;\n        left: 35px;\n    }\n\n    .faGoogle {\n        width: 40px;\n        height: 25px;\n        margin-bottom: -5px;\n    }\n\n    span {\n        color: #F47216;\n    }\n\n    .button-create {\n        position: absolute;\n        top: 835px;\n        left: 75px;\n    }\n\n    .criar {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .criar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .fox {\n        width: 90px;\n    }\n\n    @media(min-width: 768px){\n\n        height: 140vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2{\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-create-user.svg\");\n        background-repeat: no-repeat;\n\n        form {\n        position: relative;\n        left: 190px;\n        top: 30px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n        width: 400px;\n        height: 735px;\n        border-color: white;\n       }\n\n       h1 {\n        font-size: 1.5em;\n        position: absolute;\n        top: 55px;\n        left: 115px;\n       }\n\n       .name {\n        font-size: 1.3em;\n        position: absolute;\n        top: 105px;\n        left: -40px;\n       }\n\n       .date {\n        font-size: 1.3em;\n        position: absolute;\n        top: 165px;\n        left: -40px;\n       }\n\n       Small {\n        margin-left: 16%;\n       }\n\n       .email {\n        font-size: 1.3em;\n        position: absolute;\n        top: 240px;\n        left: -40px;\n       }\n\n       .phone {\n        font-size: 1.3em;\n        position: absolute;\n        top: 300px;\n        left: -40px;\n       }\n\n       .cpf {\n        font-size: 1.3em;\n        position: absolute;\n        top: 360px;\n        left: -40px;\n       }\n\n       .senha {\n        font-size: 1.3em;\n        position: absolute;\n        top: 420px;\n        left: -40px;\n       }\n\n       .confirmar-senha {\n        font-size: 1.3em;\n        position: absolute;\n        top: 480px;\n        left: -40px;\n       }\n\n       p {\n        position: absolute;\n        top: 550px;\n        left: 185px;\n       }\n\n       .google-enter {\n        position: absolute;\n        top: 590px;\n        left: 40px;\n       }\n\n       .btn-google {\n        width: 40vw;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n       .btn-google:active {\n        width: 40vw;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n       }\n\n       .page2 {\n        position: absolute;\n        top: 640px;\n        left: 65px;\n       }\n\n       .criar {\n        position: absolute;\n        top: -165px;\n        left: 40px;\n        background-color: #93B413;\n       }\n\n       .criar:active {\n        position: absolute;\n        top: -165px;\n        left: 40px;\n        background-color: #86a40f;\n       }\n\n       .fox {\n        position: absolute;\n        top: 500px;\n        left: 590px;\n       }\n    }\n\n    @media(min-width: 992px) {\n\n        height: 138vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop2{\n            display: none;\n        }\n\n        .desktop3{\n            display: none;\n        }\n\n        background-image: url(\"/images/992px-create-user.svg\");\n\n        form {\n            position: relative;\n            left: 260px;\n            top: 30px;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 500px;\n            height: 830px;\n            border-color: white;\n       }\n\n        h1 {\n            position: absolute;\n            top: 65px;\n            left: 140px;\n            font-size: 2em;\n        }\n\n        .name {\n            position: absolute;\n            top: 140px;\n            left: -21px;\n        }\n\n        #name {\n            width: 350px;\n        }\n\n        .date {\n            position: absolute;\n            top: 205px;\n            left: -21px;\n        }\n\n        Small {\n        margin-left: 17%;\n       }\n\n        #birthday {\n            width: 350px;\n        }\n\n        .email {\n            position: absolute;\n            top: 280px;\n            left: -21px;\n        }\n\n        #email {\n            width: 350px;\n        }\n\n        .phone {\n            position: absolute;\n            top: 345px;\n            left: -21px;\n        }\n\n        #phone {\n            width: 350px;\n        }\n\n        .cpf {\n            position: absolute;\n            top: 410px;\n            left: -21px;\n        }\n\n        #cpf {\n            width: 350px;\n        }\n\n        .senha {\n            position: absolute;\n            top: 475px;\n            left: -21px;\n        }\n\n        #password {\n            width: 350px;\n        }\n\n        .confirmar-senha {\n            position: absolute;\n            top: 530px;\n            left: -21px;\n        }\n\n        #confirm-password {\n            width: 350px;\n        }\n\n    p {\n        font-size: 1.3em;\n        position: absolute;\n        top: 605px;\n        left: 230px;\n    }\n\n    .google-enter {\n        position: absolute;\n        top: 650px;\n        left: 70px;\n        cursor: pointer;\n    }\n\n    .btn-google {\n        width: 350px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n    }\n\n    .btn-google:hover {\n        width: 350px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #9fc214;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n        cursor: pointer;\n    }\n\n    .btn-google:active {\n        width: 350px;\n        height: 40px;\n        font-size: 1.1em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 39px;\n        padding: 8px;\n       }\n\n       .page2 {\n        position: absolute;\n        top: 715px;\n        left: 108px;\n       }\n\n       .criar {\n        position: absolute;\n        top: -80px;\n        left: 90px;\n        background-color: #93B413;\n        cursor: pointer;\n       }\n\n       .criar:hover {\n        position: absolute;\n        top: -80px;\n        left: 90px;\n        background-color: #9fc214;\n       }\n\n       .criar:active {\n        position: absolute;\n        top: -80px;\n        left: 90px;\n        background-color: #86a40f;\n       }\n\n       .fox {\n        width: 110px;\n        position: absolute;\n        left: 760px;\n        top: 600px;\n    }\n}\n\n    @media(min-width: 1200px) {\n\n        height: 178vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: none;\n        }\n\n        .desktop1{\n            display: none;\n        }\n\n        .desktop2 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop3{\n            display: none;\n        }\n\n        background-image: url(\"/images/1200px-create-user.svg\");\n\n        form {\n            position: relative;\n            left: 345px;\n            top: 30px;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 690px;\n            height: 1090px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 2.8em;\n            position: absolute;\n            left: 185px;\n        }\n\n        .name {\n            position: absolute;\n            top: 165px;\n            left: -25px;\n        }\n\n        #name {\n            font-size: large;\n            width: 500px;\n        }\n\n        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .date {\n            position: absolute;\n            top: 240px;\n            left: -25px;\n        }\n\n        Small {\n            margin-top: -4%;\n            margin-left: 17%;\n            font-size: 0.8em;\n       }\n\n        #birthday {\n            font-size: large;\n            width: 500px;\n        }\n\n        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.4em;\n        }\n\n        .email {\n            position: absolute;\n            top: 335px;\n            left: -25px;\n        }\n\n        #email{\n            font-size: large;\n            width: 500px;\n        }\n\n        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .phone{\n            position: absolute;\n            top: 410px;\n            left: -25px;\n        }\n\n        #phone{\n            font-size: large;\n            width: 500px;\n        }\n\n        #phone::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .cpf{\n            position: absolute;\n            top: 485px;\n            left: -25px;\n        }\n\n        #cpf{\n            font-size: large;\n            width: 500px;\n        }\n\n        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .senha {\n            position: absolute;\n            top: 560px;\n            left: -25px;\n        }\n\n        #password {\n            font-size: large;\n            width: 500px;\n        }\n\n        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .confirmar-senha {\n            position: absolute;\n            top: 635px;\n            left: -25px;\n        }\n\n        #confirm-password {\n            font-size: large;\n            width: 500px;\n        }\n\n        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        p {\n            font-size: 1.8em;\n            position: absolute;\n            top: 740px;\n            left: 310px;\n        }\n\n        .google-enter {\n            position: absolute;\n            top: 805px;\n            left: 100px;\n            cursor: pointer;\n        }\n\n        .btn-google {\n            width: 500px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .btn-google:hover {\n            width: 500px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #9fc214;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .btn-google:active {\n            width: 500px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #86a40f;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .faGoogle{\n            width: 60px;\n            height: 35px;\n        }\n        \n        .page2 {\n            font-size: 1.8em;\n            position: absolute;\n            top: 910px;\n            left: 123px;\n        }\n\n        .criar {\n            position: absolute;\n            top: 140px;\n            left: 140px;\n            background-color: #93B413;\n            width: 250px;\n            height: 80px;\n            font-size: 2.7em;\n            cursor: pointer;\n        }\n\n        .criar:hover {\n            position: absolute;\n            top: 140px;\n            left: 140px;\n            background-color: #9fc214;\n            width: 250px;\n            height: 80px;\n            font-size: 2.7em;\n        }\n\n        .criar:active {\n            position: absolute;\n            top: 140px;\n            left: 140px;\n            background-color: #86a40f;\n            width: 250px;\n            height: 80px;\n            font-size: 2.7em;\n        }\n\n        .fox {\n            width: 170px;\n            position: absolute;\n            left: 1035px;\n            top: 700px;\n        }\n    }\n\n    @media(min-width: 1600px) {\n\n        height: 170vh;\n\n        .mobile {\n            display: none;\n        }\n    \n        .tablet {\n            display: none;\n        }\n\n        .desktop1{\n            display: none;\n        }\n\n        .desktop2{\n            display: none;\n        }\n\n        .desktop3 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        background-image: url(\"/images/1600px-create-user.svg\");\n\n        form {\n            position: relative;\n            left: 350px;\n            top: 45px;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 890px;\n            height: 1220px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 3em;\n            position: absolute;\n            top: 100px;\n            left: 275px;\n        }\n\n        .name {\n            position: absolute;\n            top: 195px;\n            left: -35px;\n        }\n\n        #name {\n            width: 650px;\n        }\n\n        #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .date {\n            position: absolute;\n            top: 280px;\n            left: -35px;\n        }\n\n        Small {\n            margin-top: -7%;\n            margin-left: 17%;\n            font-size: 0.8em;\n       }\n\n        #birthday {\n            width: 650px;\n        }\n\n        #birthday::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .email{\n            position: absolute;\n            top: 365px;\n            left: -35px;\n        }\n\n        #email {\n            width: 650px;\n        }\n\n        #email::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .phone {\n            position: absolute;\n            top: 450px;\n            left: -35px;\n        }\n\n        #phone {\n            width: 650px;\n        }\n\n        #phone::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .cpf {\n            position: absolute;\n            top: 535px;\n            left: -35px;\n        }\n\n        #cpf {\n            width: 650px;\n        }\n\n        #cpf::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .senha {\n            position: absolute;\n            top: 620px;\n            left: -35px;\n        }\n\n        #password {\n            width: 650px;\n        }\n\n        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        .confirmar-senha {\n            position: absolute;\n            top: 705px;\n            left: -35px;\n        }\n\n        #confirm-password {\n            width: 650px;\n        }\n\n        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.2em;\n        }\n\n        p {\n            font-size: 2.2em;\n            position: absolute;\n            top: 820px;\n            left: 400px;\n        }\n\n        .google-enter {\n            position: absolute;\n            top: 895px;\n            left: 120px;\n        }\n\n        .btn-google {\n            width: 650px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .btn-google:hover {\n            width: 650px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #9fc214;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .btn-google:active {\n            width: 650px;\n            height: 70px;\n            font-size: 2em;\n            background-color: #86a40f;\n            border: none;\n            border-radius: 39px;\n            padding: 8px;\n        }\n\n        .page2 {\n            font-size: 2em;\n            position: absolute;\n            top: 1010px;\n            left: 160px;\n        }\n\n        .criar {\n            position: absolute;\n            top: 260px;\n            left: 250px;\n        }\n\n        .criar:hover {\n            position: absolute;\n            top: 260px;\n            left: 250px;\n            background-color: #9fc214;\n        }\n\n        .criar:active {\n            position: absolute;\n            top: 260px;\n            left: 250px;\n            background-color: #86a40f;\n        }\n\n        .fox {\n            position: absolute;\n            left: 1240px;\n            top: 850px;\n        }\n    }\n\n"])));
var Small = styled_1["default"].small(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nfont-size: 6px;\nmargin:0;\nposition:relative;\ntop:-20px;\nleft: 20px;"], ["\nfont-size: 6px;\nmargin:0;\nposition:relative;\ntop:-20px;\nleft: 20px;"])));

var Form2 = function Form2() {
  return React.createElement(FormComponent2, null, React.createElement("nav", {
    className: 'mobile'
  }, React.createElement("img", {
    src: "/images/Stella2.png",
    alt: "fox",
    className: 'fox'
  }), React.createElement("form", null, React.createElement("h1", null, "Criar Usu\xE1rio"), React.createElement("div", {
    className: 'name'
  }, React.createElement(Input_1["default"], {
    type: "string",
    name: "name",
    id: "name",
    placeholder: 'Nome Completo'
  })), React.createElement("div", {
    className: 'date'
  }, React.createElement(Input_1["default"], {
    type: 'date',
    name: 'birthday',
    id: 'birthday',
    placeholder: 'Data de nascimento'
  }), React.createElement(Small, null, "Digite a Data de Nascimento")), React.createElement("div", {
    className: 'email'
  }, React.createElement(Input_1["default"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: 'Email'
  })), React.createElement("div", {
    className: 'phone'
  }, React.createElement(Input_1["default"], {
    type: "phone",
    name: "phone",
    id: "phone",
    placeholder: 'Celular'
  })), React.createElement("div", {
    className: 'cpf'
  }, React.createElement(Input_1["default"], {
    type: "number",
    name: "cpf",
    id: "cpf",
    placeholder: 'CPF'
  })), React.createElement("div", {
    className: 'senha'
  }, React.createElement(Input_1["default"], {
    type: "password",
    name: "password",
    id: "password",
    placeholder: 'Senha'
  })), React.createElement("div", {
    className: 'confirmar-senha'
  }, React.createElement(Input_1["default"], {
    type: "password",
    name: "confirm-password",
    id: "confirm-password",
    placeholder: 'Confirme sua Senha'
  })), React.createElement("p", null, "OU"), React.createElement("div", {
    className: 'google-enter'
  }, React.createElement("button", {
    className: 'btn-google',
    type: 'button'
  }, React.createElement(fa_1.FaGoogle, {
    className: 'faGoogle'
  }), " Entrar com Google")), React.createElement("div", {
    className: 'page2'
  }, "J\xE1 tem uma conta? ", React.createElement(link_1["default"], {
    href: '/LoginPage'
  }, React.createElement("span", null, "Clique Aqui!"))), React.createElement("div", {
    className: 'button-create'
  }, React.createElement("button", {
    className: 'criar',
    type: 'button'
  }, "Criar")))), React.createElement("nav", {
    className: 'tablet'
  }, React.createElement("form", null, React.createElement("h1", null, "Criar Usu\xE1rio"), React.createElement("div", {
    className: 'name'
  }, React.createElement(Input_1["default"], {
    type: "string",
    name: "name",
    id: "name",
    placeholder: 'Nome Completo'
  })), React.createElement("div", {
    className: 'date'
  }, React.createElement(Input_1["default"], {
    type: 'date',
    name: 'birthday',
    id: 'birthday',
    placeholder: 'Data de nascimento'
  }), React.createElement(Small, null, "Digite a Data de Nascimento")), React.createElement("div", {
    className: 'email'
  }, React.createElement(Input_1["default"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: 'Email'
  })), React.createElement("div", {
    className: 'phone'
  }, React.createElement(Input_1["default"], {
    type: "phone",
    name: "phone",
    id: "phone",
    placeholder: 'Celular'
  })), React.createElement("div", {
    className: 'cpf'
  }, React.createElement(Input_1["default"], {
    type: "number",
    name: "cpf",
    id: "cpf",
    placeholder: 'CPF'
  })), React.createElement("div", {
    className: 'senha'
  }, React.createElement(Input_1["default"], {
    type: "password",
    name: "password",
    id: "password",
    placeholder: 'Senha'
  })), React.createElement("div", {
    className: 'confirmar-senha'
  }, React.createElement(Input_1["default"], {
    type: "password",
    name: "confirm-password",
    id: "confirm-password",
    placeholder: 'Confirme sua Senha'
  })), React.createElement("p", null, "OU"), React.createElement("div", {
    className: 'google-enter'
  }, React.createElement("button", {
    className: 'btn-google',
    type: 'button'
  }, React.createElement(fa_1.FaGoogle, {
    className: 'faGoogle'
  }), " Entrar com Google")), React.createElement("div", {
    className: 'page2'
  }, "J\xE1 tem uma conta? ", React.createElement(link_1["default"], {
    href: '/LoginPage'
  }, React.createElement("span", null, "Clique Aqui!"))), React.createElement("div", {
    className: 'button-create'
  }, React.createElement("button", {
    className: 'criar',
    type: 'button'
  }, "Criar"))), React.createElement("img", {
    src: "/images/Stella2.png",
    alt: "fox",
    className: 'fox'
  })), React.createElement("nav", {
    className: 'desktop1'
  }, React.createElement("form", null, React.createElement("h1", null, "Criar Usu\xE1rio"), React.createElement("div", {
    className: 'name'
  }, React.createElement(Input_1["default"], {
    type: "string",
    name: "name",
    id: "name",
    placeholder: 'Nome Completo'
  })), React.createElement("div", {
    className: 'date'
  }, React.createElement(Input_1["default"], {
    type: 'date',
    name: 'birthday',
    id: 'birthday',
    placeholder: 'Data de nascimento'
  }), React.createElement(Small, null, "Digite a Data de Nascimento")), React.createElement("div", {
    className: 'email'
  }, React.createElement(Input_1["default"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: 'Email'
  })), React.createElement("div", {
    className: 'phone'
  }, React.createElement(Input_1["default"], {
    type: "phone",
    name: "phone",
    id: "phone",
    placeholder: 'Celular'
  })), React.createElement("div", {
    className: 'cpf'
  }, React.createElement(Input_1["default"], {
    type: "number",
    name: "cpf",
    id: "cpf",
    placeholder: 'CPF'
  })), React.createElement("div", {
    className: 'senha'
  }, React.createElement(Input_1["default"], {
    type: "password",
    name: "password",
    id: "password",
    placeholder: 'Senha'
  })), React.createElement("div", {
    className: 'confirmar-senha'
  }, React.createElement(Input_1["default"], {
    type: "password",
    name: "confirm-password",
    id: "confirm-password",
    placeholder: 'Confirme sua Senha'
  })), React.createElement("p", null, "OU"), React.createElement("div", {
    className: 'google-enter'
  }, React.createElement("button", {
    className: 'btn-google',
    type: 'button'
  }, React.createElement(fa_1.FaGoogle, {
    className: 'faGoogle'
  }), " Entrar com Google")), React.createElement("div", {
    className: 'page2'
  }, "J\xE1 tem uma conta? ", React.createElement(link_1["default"], {
    href: '/LoginPage'
  }, React.createElement("span", null, "Clique Aqui!"))), React.createElement("div", {
    className: 'button-create'
  }, React.createElement("button", {
    className: 'criar',
    type: 'button'
  }, "Criar"))), React.createElement("img", {
    src: "/images/Stella2.png",
    alt: "fox",
    className: 'fox'
  })), React.createElement("nav", {
    className: 'desktop2'
  }, React.createElement("form", null, React.createElement("h1", null, "Criar Usu\xE1rio"), React.createElement("div", {
    className: 'name'
  }, React.createElement(Input_1["default"], {
    type: "string",
    name: "name",
    id: "name",
    placeholder: 'Nome Completo'
  })), React.createElement("div", {
    className: 'date'
  }, React.createElement(Input_1["default"], {
    type: 'date',
    name: 'birthday',
    id: 'birthday',
    placeholder: 'Data de nascimento'
  }), React.createElement(Small, null, "Digite a Data de Nascimento")), React.createElement("div", {
    className: 'email'
  }, React.createElement(Input_1["default"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: 'Email'
  })), React.createElement("div", {
    className: 'phone'
  }, React.createElement(Input_1["default"], {
    type: "phone",
    name: "phone",
    id: "phone",
    placeholder: 'Celular'
  })), React.createElement("div", {
    className: 'cpf'
  }, React.createElement(Input_1["default"], {
    type: "number",
    name: "cpf",
    id: "cpf",
    placeholder: 'CPF'
  })), React.createElement("div", {
    className: 'senha'
  }, React.createElement(Input_1["default"], {
    type: "password",
    name: "password",
    id: "password",
    placeholder: 'Senha'
  })), React.createElement("div", {
    className: 'confirmar-senha'
  }, React.createElement(Input_1["default"], {
    type: "password",
    name: "confirm-password",
    id: "confirm-password",
    placeholder: 'Confirme sua Senha'
  })), React.createElement("p", null, "OU"), React.createElement("div", {
    className: 'google-enter'
  }, React.createElement("button", {
    className: 'btn-google',
    type: 'button'
  }, React.createElement(fa_1.FaGoogle, {
    className: 'faGoogle'
  }), " Entrar com Google")), React.createElement("div", {
    className: 'page2'
  }, "J\xE1 tem uma conta? ", React.createElement(link_1["default"], {
    href: '/LoginPage'
  }, React.createElement("span", null, "Clique Aqui!"))), React.createElement("div", {
    className: 'button-create'
  }, React.createElement("button", {
    className: 'criar',
    type: 'button'
  }, "Criar"))), React.createElement("img", {
    src: "/images/Stella2.png",
    alt: "fox",
    className: 'fox'
  })), React.createElement("nav", {
    className: 'desktop3'
  }, React.createElement("form", null, React.createElement("h1", null, "Criar Usu\xE1rio"), React.createElement("div", {
    className: 'name'
  }, React.createElement(Input_1["default"], {
    type: "string",
    name: "name",
    id: "name",
    placeholder: 'Nome Completo'
  })), React.createElement("div", {
    className: 'date'
  }, React.createElement(Input_1["default"], {
    type: 'date',
    name: 'birthday',
    id: 'birthday',
    placeholder: 'Data de nascimento'
  }), React.createElement(Small, null, "Digite a Data de Nascimento")), React.createElement("div", {
    className: 'email'
  }, React.createElement(Input_1["default"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: 'Email'
  })), React.createElement("div", {
    className: 'phone'
  }, React.createElement(Input_1["default"], {
    type: "phone",
    name: "phone",
    id: "phone",
    placeholder: 'Celular'
  })), React.createElement("div", {
    className: 'cpf'
  }, React.createElement(Input_1["default"], {
    type: "number",
    name: "cpf",
    id: "cpf",
    placeholder: 'CPF'
  })), React.createElement("div", {
    className: 'senha'
  }, React.createElement(Input_1["default"], {
    type: "password",
    name: "password",
    id: "password",
    placeholder: 'Senha'
  })), React.createElement("div", {
    className: 'confirmar-senha'
  }, React.createElement(Input_1["default"], {
    type: "password",
    name: "confirm-password",
    id: "confirm-password",
    placeholder: 'Confirme sua Senha'
  })), React.createElement("p", null, "OU"), React.createElement("div", {
    className: 'google-enter'
  }, React.createElement("button", {
    className: 'btn-google',
    type: 'button'
  }, React.createElement(fa_1.FaGoogle, {
    className: 'faGoogle'
  }), " Entrar com Google")), React.createElement("div", {
    className: 'page2'
  }, "J\xE1 tem uma conta? ", React.createElement(link_1["default"], {
    href: '/LoginPage'
  }, React.createElement("span", null, "Clique Aqui!"))), React.createElement(link_1["default"], {
    href: '/page5'
  }, React.createElement("div", {
    className: 'button-create'
  }, React.createElement("button", {
    className: 'criar',
    type: 'button'
  }, "Criar")))), React.createElement("img", {
    src: "/images/Stella2.png",
    alt: "fox",
    className: 'fox'
  })));
};

exports["default"] = Form2;
var templateObject_1, templateObject_2;