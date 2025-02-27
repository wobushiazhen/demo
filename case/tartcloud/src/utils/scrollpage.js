// src/utils/parallax.js
import $ from 'jquery';

export function initParallax() {
    const $window = $(window);
    $('[data-type]').each(function () {
        $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
        $(this).data('Xposition', $(this).attr('data-Xposition'));
        $(this).data('speed', $(this).attr('data-speed'));
    });

    // For each element that has a data-type attribute
    $('section[data-type="background"]').each(function () {
        // Store some variables based on where we are
        const $self = $(this);
        const offsetCoords = $self.offset();
        const topOffset = offsetCoords.top;

        // When the window is scrolled...
        $(window).scroll(function () {
            // If this section is in view
            if (
                $window.scrollTop() + $window.height() > topOffset &&
                topOffset + $self.height() > $window.scrollTop()
            ) {
                let yPos = -($window.scrollTop() / $self.data('speed'));
                if ($self.data('offsetY')) {
                    yPos += $self.data('offsetY');
                }
                const coords = '50% ' + yPos + 'px';

                // Move the background
                $self.css({ backgroundPosition: coords });

                // Check for other sprites in this section
                $('[data-type="sprite"]', $self).each(function () {
                    // Cache the sprite
                    const $sprite = $(this);

                    // Use the same calculation to work out how far to scroll the sprite
                    const yPos = -($window.scrollTop() / $sprite.data('speed'));
                    const coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';

                    $sprite.css({ backgroundPosition: coords });
                });

                // Check for any Videos that need scrolling
                $('[data-type="video"]', $self).each(function () {
                    // Cache the video
                    const $video = $(this);

                    // There's some repetition going on here, so
                    // feel free to tidy this section up.
                    const yPos = -($window.scrollTop() / $video.data('speed'));
                    const coords = yPos + $video.data('offsetY') + 'px';

                    $video.css({ top: coords });
                });
            } // in view
        }); // window scroll
    }); // each data-type
}