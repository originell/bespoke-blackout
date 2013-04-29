/*!
 * bespoke-blackout v0.0.1
 *
 * Copyright 2013, Luis Nell
 * This content is released under the MIT license
 * http://luis.mit-license.org/
 */

!(function(bespoke) {
    var BLACK_KEYCODE = 66,  // b key
        WHITE_KEYCODE = 87;  // w key

    var plugin = function() {
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

    bespoke.plugins.blackout = plugin;

}(bespoke));
