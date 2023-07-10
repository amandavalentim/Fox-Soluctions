'use client';
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
document.querySelector('.open-menu').addEventListener('click', e => {

  document.querySelector('header .menu').classList.add('open');

});

document.querySelector('.close-menu button').addEventListener('click', e => {

  document.querySelector('header .menu').classList.remove('open');

});

document.querySelector('.menu .backdrop').addEventListener('click', e => {

  document.querySelector('header .menu').classList.remove('open');

});
var _default = HeaderJS;
exports["default"] = _default;

