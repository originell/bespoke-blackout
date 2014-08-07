/*!
 * bespoke-blackout v0.0.1
 *
 * Copyright 2014, Luis Nell
 * This content is released under the MIT license
 * http://luis.mit-license.org/
 */

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var n=o;n=n.bespoke||(n.bespoke={}),n=n.plugins||(n.plugins={}),n.blackout=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = function() {
    var BLACK_KEYCODE = 66,  // b key
        WHITE_KEYCODE = 87;  // w key

    return function() {
        var shown = false,
            overlay = document.createElement('div');

        overlay.id = 'bespoke-blackout';
        overlay.style.display = 'none';
        overlay.style.position = 'absolute';
        overlay.style.left = overlay.style.top = '0';
        overlay.style.zindex = 255;
        document.body.appendChild(overlay);

        window.addEventListener('keydown', function(e) {
            if (!shown &&
                (e.which === BLACK_KEYCODE || e.which === WHITE_KEYCODE)) {
                    shown = true;
                    overlay.style.background = e.which === BLACK_KEYCODE ? '#000' : '#fff';
                    overlay.style.display = 'block';
                    overlay.style.width = window.innerWidth + 'px';
                    overlay.style.height = window.innerHeight + 'px';
                    e.preventDefault();
            } else if (e.which === 27 || e.which === 13 ||
                       e.which === BLACK_KEYCODE ||
                       e.which === WHITE_KEYCODE) {
                overlay.style.display = 'none';
                shown = false;
                e.preventDefault();
            }
        });

        /* Sometimes it happens to me that I'm falling out of OSX fullscreen
         * mode by pressing ESC too often. This should keep everything
         * blacked/whiten out :) */
        window.addEventListener('resize', function() {
            if (!shown) {
                return;
            }
            overlay.style.width = window.innerWidth + 'px';
            overlay.style.height = window.innerHeight + 'px';
        });
    };
};

},{}]},{},[1])
(1)
});