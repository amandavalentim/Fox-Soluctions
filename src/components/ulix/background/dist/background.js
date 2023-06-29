'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var image_1 = require("next/image");
var BackgroundComponent = styled_1["default"].body(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: #0A53B5;\n    position: relative;\n    width: 100%;\n    height: 1200px;\n        .hide-on-small-desktops {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    .desktop-1098-screens {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 420px;\n    }\n    #img2 {\n        position: absolute;\n        top: -40px;\n        left: -1px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 735px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 1355px;\n    }\n    #img5 {\n        position: absolute;\n        top: 280px;\n        left: 280px;\n    }\n    #img6 {\n        position: absolute;\n        top: 220px;\n        left: 970px;\n    }\n    #img7 {\n        position: absolute;\n        top: 500px;\n        left: 1150px;\n    }\n    #img8 {\n        position: absolute;\n        top: 660px;\n        left: 1320px;\n    }\n    #img9 {\n        position: absolute;\n        top: 655px;\n        left: 635px;\n    }\n    #img10 {\n        position: absolute;\n        top: 720px;\n    }\n    #img11 {\n        position: absolute;\n        left: 200px;\n        top: -10px;\n    }\n    #img12 {\n        position: absolute;\n        left: 750px;\n        top: 805px;\n    }\n        \n    @media ((min-width: 1024px) and (max-width: 1180px)){\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktop-1098-screens {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 430px;\n        width: 300px;\n        height: 250px;\n        }\n    #img2 {\n        position: absolute;\n        top: -25px;\n        left: 1px;\n        width: 150px;\n        height: 250px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 410px;\n        width: 230px;\n        height: 90px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 853px;\n        width: 280px;\n        height: 250px;\n    }\n    #img5 {\n        position: absolute;\n        top: 320px;\n        left: 210px;\n        width: 265px;\n        height: 180px;\n    }\n    #img6 {\n        position: absolute;\n        top: 280px;\n        left: 563px;\n        width: 360px;\n        height: 180px;\n    }\n    #img7 {\n        position: absolute;\n        top: 525px;\n        left: 723px;\n        width: 170px;\n        height: 90px;\n    }\n    #img8 {\n        position: absolute;\n        top: 700px;\n        left: 773px;\n        width: 250px;\n        height: 220px;\n    }\n    #img9 {\n        position: absolute;\n        top: 720px;\n        left: 420px;\n        width: 320px;\n        height: 320px;\n    }\n    #img10 {\n        position: absolute;\n        top: 780px;\n        width: 350px;\n        height: 120px;\n    }\n    #img11 {\n        position: absolute;\n        left: 200px;\n        top: 120px;\n        width: 100px;\n        height: 100px;\n    }\n    #img12 {\n        position: absolute;\n        left: 460px;\n        top: 805px;\n        width: 130px;\n        height: 130px;\n    }\n    }\n\n    @media((min-width: 1360px) and (max-width: 1550px)) {\n    .hide-on-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    .desktop-1098-screens {\n        display: flex;\n        justify-content: space-between;\n    }\n        #img1 {\n        position: absolute;\n        top: 370px;\n        width: 360px;\n        height: 220px;\n        }\n    #img2 {\n        position: absolute;\n        top: -25px;\n        left: -1px;\n        width: 150px;\n        height: 230px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 605px;\n        width: 230px;\n        height: 60px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 1153px;\n        width: 250px;\n        height: 190px;\n    }\n    #img5 {\n        position: absolute;\n        top: 230px;\n        left: 250px;\n        width: 310px;\n        height: 190px;\n    }\n    #img6 {\n        position: absolute;\n        top: 200px;\n        left: 830px;\n        width: 450px;\n        height: 215px;\n    }\n    #img7 {\n        position: absolute;\n        top: 465px;\n        left: 1015px;\n        width: 235px;\n        height: 95px;\n    }\n    #img8 {\n        position: absolute;\n        top: 625px;\n        left: 1023px;\n        width: 340px;\n        height: 310px;\n    }\n    #img9 {\n        position: absolute;\n        top: 580px;\n        left: 525px;\n        width: 420px;\n        height: 440px;\n    }\n    #img10 {\n        position: absolute;\n        top: 690px;\n        width: 490px;\n        height: 210px;\n    }\n    #img11 {\n        position: absolute;\n        left: 120px;\n        top: 5px;\n        width: 1200px;\n        height: 1150px;\n    }\n    #img12 {\n        position: absolute;\n        left: 650px;\n        top: 760px;\n        width: 180px;\n        height: 180px;\n    }\n    }\n"], ["\n    background-color: #0A53B5;\n    position: relative;\n    width: 100%;\n    height: 1200px;\n        .hide-on-small-desktops {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    .desktop-1098-screens {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 420px;\n    }\n    #img2 {\n        position: absolute;\n        top: -40px;\n        left: -1px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 735px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 1355px;\n    }\n    #img5 {\n        position: absolute;\n        top: 280px;\n        left: 280px;\n    }\n    #img6 {\n        position: absolute;\n        top: 220px;\n        left: 970px;\n    }\n    #img7 {\n        position: absolute;\n        top: 500px;\n        left: 1150px;\n    }\n    #img8 {\n        position: absolute;\n        top: 660px;\n        left: 1320px;\n    }\n    #img9 {\n        position: absolute;\n        top: 655px;\n        left: 635px;\n    }\n    #img10 {\n        position: absolute;\n        top: 720px;\n    }\n    #img11 {\n        position: absolute;\n        left: 200px;\n        top: -10px;\n    }\n    #img12 {\n        position: absolute;\n        left: 750px;\n        top: 805px;\n    }\n        \n    @media ((min-width: 1024px) and (max-width: 1180px)){\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktop-1098-screens {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 430px;\n        width: 300px;\n        height: 250px;\n        }\n    #img2 {\n        position: absolute;\n        top: -25px;\n        left: 1px;\n        width: 150px;\n        height: 250px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 410px;\n        width: 230px;\n        height: 90px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 853px;\n        width: 280px;\n        height: 250px;\n    }\n    #img5 {\n        position: absolute;\n        top: 320px;\n        left: 210px;\n        width: 265px;\n        height: 180px;\n    }\n    #img6 {\n        position: absolute;\n        top: 280px;\n        left: 563px;\n        width: 360px;\n        height: 180px;\n    }\n    #img7 {\n        position: absolute;\n        top: 525px;\n        left: 723px;\n        width: 170px;\n        height: 90px;\n    }\n    #img8 {\n        position: absolute;\n        top: 700px;\n        left: 773px;\n        width: 250px;\n        height: 220px;\n    }\n    #img9 {\n        position: absolute;\n        top: 720px;\n        left: 420px;\n        width: 320px;\n        height: 320px;\n    }\n    #img10 {\n        position: absolute;\n        top: 780px;\n        width: 350px;\n        height: 120px;\n    }\n    #img11 {\n        position: absolute;\n        left: 200px;\n        top: 120px;\n        width: 100px;\n        height: 100px;\n    }\n    #img12 {\n        position: absolute;\n        left: 460px;\n        top: 805px;\n        width: 130px;\n        height: 130px;\n    }\n    }\n\n    @media((min-width: 1360px) and (max-width: 1550px)) {\n    .hide-on-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    .desktop-1098-screens {\n        display: flex;\n        justify-content: space-between;\n    }\n        #img1 {\n        position: absolute;\n        top: 370px;\n        width: 360px;\n        height: 220px;\n        }\n    #img2 {\n        position: absolute;\n        top: -25px;\n        left: -1px;\n        width: 150px;\n        height: 230px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 605px;\n        width: 230px;\n        height: 60px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 1153px;\n        width: 250px;\n        height: 190px;\n    }\n    #img5 {\n        position: absolute;\n        top: 230px;\n        left: 250px;\n        width: 310px;\n        height: 190px;\n    }\n    #img6 {\n        position: absolute;\n        top: 200px;\n        left: 830px;\n        width: 450px;\n        height: 215px;\n    }\n    #img7 {\n        position: absolute;\n        top: 465px;\n        left: 1015px;\n        width: 235px;\n        height: 95px;\n    }\n    #img8 {\n        position: absolute;\n        top: 625px;\n        left: 1023px;\n        width: 340px;\n        height: 310px;\n    }\n    #img9 {\n        position: absolute;\n        top: 580px;\n        left: 525px;\n        width: 420px;\n        height: 440px;\n    }\n    #img10 {\n        position: absolute;\n        top: 690px;\n        width: 490px;\n        height: 210px;\n    }\n    #img11 {\n        position: absolute;\n        left: 120px;\n        top: 5px;\n        width: 1200px;\n        height: 1150px;\n    }\n    #img12 {\n        position: absolute;\n        left: 650px;\n        top: 760px;\n        width: 180px;\n        height: 180px;\n    }\n    }\n"])));
var Background = function () {
    return (React.createElement(BackgroundComponent, null,
        React.createElement("nav", { className: 'hide-on-small-desktops' },
            React.createElement(image_1["default"], { src: "/images/Ellipse-1.png", width: 310, height: 225, alt: 'img-1', id: 'img1' }),
            React.createElement(image_1["default"], { src: "/images/Rectangle-20.png", width: 165, height: 200, alt: 'img-2', id: 'img2' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-5.png", width: 200, height: 65, alt: 'img-3.8', id: 'img3' }),
            React.createElement(image_1["default"], { src: "/images/header.png", width: 270, height: 225, alt: 'img-4', id: 'img4' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-8.png", width: 200, height: 95, alt: 'img-7', id: 'img7' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-4.png", width: 265, height: 200, alt: 'img-8', id: 'img8' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-7.png", width: 350, height: 425, alt: 'img-9', id: 'img9' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-6-1.png", width: 450, height: 180, alt: 'img-10', id: 'img10' }),
            React.createElement(image_1["default"], { src: "/images/Stella.png", width: 130, height: 130, alt: 'img-12', id: 'img12' })),
        React.createElement("nav", { className: 'desktops-1024-1100-screens' },
            React.createElement(image_1["default"], { src: "/images/Ellipse-1.png", width: 310, height: 225, alt: 'img-1', id: 'img1' }),
            React.createElement(image_1["default"], { src: "/images/Rectangle-20.png", width: 165, height: 200, alt: 'img-2', id: 'img2' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-5.png", width: 200, height: 65, alt: 'img-3.8', id: 'img3' }),
            React.createElement(image_1["default"], { src: "/images/header.png", width: 270, height: 225, alt: 'img-4', id: 'img4' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-8.png", width: 200, height: 95, alt: 'img-7', id: 'img7' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-4.png", width: 265, height: 200, alt: 'img-8', id: 'img8' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-7.png", width: 350, height: 425, alt: 'img-9', id: 'img9' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-6-1.png", width: 450, height: 180, alt: 'img-10', id: 'img10' }),
            React.createElement(image_1["default"], { src: "/images/Stella.png", width: 130, height: 130, alt: 'img-12', id: 'img12' })),
        React.createElement("nav", { className: 'desktop-1098-screens' },
            React.createElement(image_1["default"], { src: "/images/Ellipse-1.png", width: 310, height: 225, alt: 'img-1', id: 'img1' }),
            React.createElement(image_1["default"], { src: "/images/Rectangle-20.png", width: 165, height: 200, alt: 'img-2', id: 'img2' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-5.png", width: 200, height: 65, alt: 'img-3.8', id: 'img3' }),
            React.createElement(image_1["default"], { src: "/images/header.png", width: 270, height: 225, alt: 'img-4', id: 'img4' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-8.png", width: 200, height: 95, alt: 'img-7', id: 'img7' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-4.png", width: 265, height: 200, alt: 'img-8', id: 'img8' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-7.png", width: 350, height: 425, alt: 'img-9', id: 'img9' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-6-1.png", width: 450, height: 180, alt: 'img-10', id: 'img10' }),
            React.createElement(image_1["default"], { src: "/images/Stella.png", width: 130, height: 130, alt: 'img-12', id: 'img12' }))));
};
exports["default"] = Background;
var templateObject_1;
