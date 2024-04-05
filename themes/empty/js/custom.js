(function ($) {
    $(document).ready(function (){

        //autoheight for desktop only
        if ($(window).width() > 1280) {

        var mh = 0;

        //align 1st and 2nd
        $(".main-cards .text-block").each(function () {
            var h_block = parseInt($(this).height());

            if(h_block > mh) {
                mh = h_block;
            };
        });
        $(".main-cards .text-block").height(mh);

        //align 3rd and 4th
        $(".optional-cards .text-block").each(function () {
            var h_block = parseInt($(this).height());

            if(h_block > mh) {
                mh = h_block;
            };
        });
        $(".optional-cards .text-block").height(mh);

        } 

        //tooltips
        $(".image-block").click(function(event) {
            event.stopPropagation();
    
            var headingText = $(this).siblings('.text-block').find('.text-heading').text();
            
            $('.tooltip').remove();

            if ($(this).siblings('.text-block').find('.tooltip').length === 0) {
                var tooltip = $('<div class="tooltip">' + headingText + '</div>');
                $(this).siblings('.text-block').find('.text-cta').after(tooltip);
            } else {
                $(this).siblings('.text-block').find('.tooltip').remove();
            }
        });
    
        $(document).click(function() {
            $('.tooltip').remove();
        });

    });
})(jQuery);