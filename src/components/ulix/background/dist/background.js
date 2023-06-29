'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var image_1 = require("next/image");
var BackgroundComponent = styled_1["default"].body(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: #0A53B5;\n    position: relative;\n    width: 100%;\n    height: 1200px;\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .show-in-small-desktops {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 420px;\n    }\n    #img2 {\n        position: absolute;\n        top: -40px;\n        left: -1px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 735px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 1355px;\n    }\n    #img5 {\n        position: absolute;\n        top: 280px;\n        left: 280px;\n    }\n    #img6 {\n        position: absolute;\n        top: 220px;\n        left: 970px;\n    }\n    #img7 {\n        position: absolute;\n        top: 500px;\n        left: 1150px;\n    }\n    #img8 {\n        position: absolute;\n        top: 660px;\n        left: 1320px;\n    }\n    #img9 {\n        position: absolute;\n        top: 655px;\n        left: 635px;\n    }\n    #img10 {\n        position: absolute;\n        top: 720px;\n    }\n    #img11 {\n        position: absolute;\n        left: 200px;\n        top: -10px;\n    }\n    #img12 {\n        position: absolute;\n        left: 750px;\n        top: 805px;\n    }\n\n    @media ((min-width: 1114px) and (max-width: 1200px)){\n        .hide-on-small-desktops {\n            display: flex;\n        justify-content: space-between;\n    }\n    .show-in-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n        #img1 {\n        position: absolute;\n        top: 370px;\n        width: 250px;\n        height: 170px;\n        }\n    #img2 {\n        position: absolute;\n        top: -25px;\n        left: -1px;\n        width: 110px;\n        height: 160px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 535px;\n        width: 180px;\n        height: 50px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 973px;\n        width: 250px;\n        height: 190px;\n    }\n    #img5 {\n        position: absolute;\n        top: 190px;\n        left: 170px;\n        width: 250px;\n        height: 170px;\n    }\n    #img6 {\n        position: absolute;\n        top: 200px;\n        left: 765px;\n        width: 350px;\n        height: 155px;\n    }\n    #img7 {\n        position: absolute;\n        top: 415px;\n        left: 955px;\n        width: 165px;\n        height: 80px;\n    }\n    #img8 {\n        position: absolute;\n        top: 715px;\n        left: 863px;\n        width: 280px;\n        height: 260px;\n    }\n    #img9 {\n        position: absolute;\n        top: 680px;\n        left: 445px;\n        width: 350px;\n        height: 360px;\n    }\n    #img10 {\n        position: absolute;\n        top: 730px;\n        width: 390px;\n        height: 175px;\n    }\n    #img11 {\n        position: absolute;\n        left: 120px;\n        top: 5px;\n        width: 1200px;\n        height: 1150px;\n    }\n    #img12 {\n        position: absolute;\n        left: 550px;\n        top: 790px;\n        width: 140px;\n        height: 140px;\n    }\n    }\n    \n    @media ((min-width: 1024px) and (max-width: 1110px)){\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .show-in-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: flex;\n        justify-content: space-between;\n    }\n    #img1 {\n        position: absolute;\n        top: 430px;\n        width: 300px;\n        height: 250px;\n        }\n    #img2 {\n        position: absolute;\n        top: -25px;\n        left: 1px;\n        width: 150px;\n        height: 250px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 410px;\n        width: 230px;\n        height: 90px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 853px;\n        width: 280px;\n        height: 250px;\n    }\n    #img5 {\n        position: absolute;\n        top: 320px;\n        left: 210px;\n        width: 265px;\n        height: 180px;\n    }\n    #img6 {\n        position: absolute;\n        top: 280px;\n        left: 563px;\n        width: 360px;\n        height: 180px;\n    }\n    #img7 {\n        position: absolute;\n        top: 525px;\n        left: 723px;\n        width: 170px;\n        height: 90px;\n    }\n    #img8 {\n        position: absolute;\n        top: 700px;\n        left: 773px;\n        width: 250px;\n        height: 220px;\n    }\n    #img9 {\n        position: absolute;\n        top: 720px;\n        left: 420px;\n        width: 320px;\n        height: 320px;\n    }\n    #img10 {\n        position: absolute;\n        top: 780px;\n        width: 350px;\n        height: 120px;\n    }\n    #img11 {\n        position: absolute;\n        left: 200px;\n        top: 120px;\n        width: 100px;\n        height: 100px;\n    }\n    #img12 {\n        position: absolute;\n        left: 460px;\n        top: 805px;\n        width: 130px;\n        height: 130px;\n    }\n    }\n"], ["\n    background-color: #0A53B5;\n    position: relative;\n    width: 100%;\n    height: 1200px;\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .show-in-small-desktops {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 420px;\n    }\n    #img2 {\n        position: absolute;\n        top: -40px;\n        left: -1px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 735px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 1355px;\n    }\n    #img5 {\n        position: absolute;\n        top: 280px;\n        left: 280px;\n    }\n    #img6 {\n        position: absolute;\n        top: 220px;\n        left: 970px;\n    }\n    #img7 {\n        position: absolute;\n        top: 500px;\n        left: 1150px;\n    }\n    #img8 {\n        position: absolute;\n        top: 660px;\n        left: 1320px;\n    }\n    #img9 {\n        position: absolute;\n        top: 655px;\n        left: 635px;\n    }\n    #img10 {\n        position: absolute;\n        top: 720px;\n    }\n    #img11 {\n        position: absolute;\n        left: 200px;\n        top: -10px;\n    }\n    #img12 {\n        position: absolute;\n        left: 750px;\n        top: 805px;\n    }\n\n    @media ((min-width: 1114px) and (max-width: 1200px)){\n        .hide-on-small-desktops {\n            display: flex;\n        justify-content: space-between;\n    }\n    .show-in-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n        #img1 {\n        position: absolute;\n        top: 370px;\n        width: 250px;\n        height: 170px;\n        }\n    #img2 {\n        position: absolute;\n        top: -25px;\n        left: -1px;\n        width: 110px;\n        height: 160px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 535px;\n        width: 180px;\n        height: 50px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 973px;\n        width: 250px;\n        height: 190px;\n    }\n    #img5 {\n        position: absolute;\n        top: 190px;\n        left: 170px;\n        width: 250px;\n        height: 170px;\n    }\n    #img6 {\n        position: absolute;\n        top: 200px;\n        left: 765px;\n        width: 350px;\n        height: 155px;\n    }\n    #img7 {\n        position: absolute;\n        top: 415px;\n        left: 955px;\n        width: 165px;\n        height: 80px;\n    }\n    #img8 {\n        position: absolute;\n        top: 715px;\n        left: 863px;\n        width: 280px;\n        height: 260px;\n    }\n    #img9 {\n        position: absolute;\n        top: 680px;\n        left: 445px;\n        width: 350px;\n        height: 360px;\n    }\n    #img10 {\n        position: absolute;\n        top: 730px;\n        width: 390px;\n        height: 175px;\n    }\n    #img11 {\n        position: absolute;\n        left: 120px;\n        top: 5px;\n        width: 1200px;\n        height: 1150px;\n    }\n    #img12 {\n        position: absolute;\n        left: 550px;\n        top: 790px;\n        width: 140px;\n        height: 140px;\n    }\n    }\n    \n    @media ((min-width: 1024px) and (max-width: 1110px)){\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .show-in-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: flex;\n        justify-content: space-between;\n    }\n    #img1 {\n        position: absolute;\n        top: 430px;\n        width: 300px;\n        height: 250px;\n        }\n    #img2 {\n        position: absolute;\n        top: -25px;\n        left: 1px;\n        width: 150px;\n        height: 250px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 410px;\n        width: 230px;\n        height: 90px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 853px;\n        width: 280px;\n        height: 250px;\n    }\n    #img5 {\n        position: absolute;\n        top: 320px;\n        left: 210px;\n        width: 265px;\n        height: 180px;\n    }\n    #img6 {\n        position: absolute;\n        top: 280px;\n        left: 563px;\n        width: 360px;\n        height: 180px;\n    }\n    #img7 {\n        position: absolute;\n        top: 525px;\n        left: 723px;\n        width: 170px;\n        height: 90px;\n    }\n    #img8 {\n        position: absolute;\n        top: 700px;\n        left: 773px;\n        width: 250px;\n        height: 220px;\n    }\n    #img9 {\n        position: absolute;\n        top: 720px;\n        left: 420px;\n        width: 320px;\n        height: 320px;\n    }\n    #img10 {\n        position: absolute;\n        top: 780px;\n        width: 350px;\n        height: 120px;\n    }\n    #img11 {\n        position: absolute;\n        left: 200px;\n        top: 120px;\n        width: 100px;\n        height: 100px;\n    }\n    #img12 {\n        position: absolute;\n        left: 460px;\n        top: 805px;\n        width: 130px;\n        height: 130px;\n    }\n    }\n"])));
var Background = function () {
    return (React.createElement(BackgroundComponent, null,
        React.createElement("nav", { className: 'hide-on-small-desktops' },
            React.createElement(image_1["default"], { src: "/images/Ellipse-1.png", width: 310, height: 225, alt: 'img-1', id: 'img1' }),
            React.createElement(image_1["default"], { src: "/images/Rectangle-20.png", width: 165, height: 200, alt: 'img-2', id: 'img2' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-5.png", width: 200, height: 65, alt: 'img-3.8', id: 'img3' }),
            React.createElement(image_1["default"], { src: "/images/header.png", width: 270, height: 225, alt: 'img-4', id: 'img4' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-2.png", width: 265, height: 200, alt: 'img-5', id: 'img5' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-3.png", width: 400, height: 200, alt: 'img-6', id: 'img6' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-8.png", width: 200, height: 95, alt: 'img-7', id: 'img7' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-4.png", width: 265, height: 200, alt: 'img-8', id: 'img8' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-7.png", width: 350, height: 425, alt: 'img-9', id: 'img9' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-6-1.png", width: 450, height: 180, alt: 'img-10', id: 'img10' }),
            React.createElement(image_1["default"], { src: "/images/Stella.png", width: 130, height: 130, alt: 'img-12', id: 'img12' }),
            React.createElement("h1", null, "1111111111111")),
        React.createElement("nav", { className: 'show-in-small-desktops' },
            React.createElement(image_1["default"], { src: "/images/Ellipse-1.png", width: 310, height: 225, alt: 'img-1', id: 'img1' }),
            React.createElement(image_1["default"], { src: "/images/Rectangle-20.png", width: 165, height: 200, alt: 'img-2', id: 'img2' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-5.png", width: 200, height: 65, alt: 'img-3.8', id: 'img3' }),
            React.createElement(image_1["default"], { src: "/images/header.png", width: 270, height: 225, alt: 'img-4', id: 'img4' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-2.png", width: 265, height: 200, alt: 'img-5', id: 'img5' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-3.png", width: 400, height: 200, alt: 'img-6', id: 'img6' }),
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
            React.createElement(image_1["default"], { src: "/images/Ellipse-2.png", width: 265, height: 200, alt: 'img-5', id: 'img5' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-3.png", width: 400, height: 200, alt: 'img-6', id: 'img6' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-8.png", width: 200, height: 95, alt: 'img-7', id: 'img7' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-4.png", width: 265, height: 200, alt: 'img-8', id: 'img8' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-7.png", width: 350, height: 425, alt: 'img-9', id: 'img9' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-6-1.png", width: 450, height: 180, alt: 'img-10', id: 'img10' }),
            React.createElement(image_1["default"], { src: "/images/Stella.png", width: 130, height: 130, alt: 'img-12', id: 'img12' }))));
};
exports["default"] = Background;
var templateObject_1;
