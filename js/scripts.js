$( document ).ready(function() {
    var $radios = $('.checkout__radio');
     var $cardDetails = $('.checkout__card');

    $radios.click(function(e){

        console.log(e.target);
        // if(e.target )

        if($(this).hasClass('checkout__radio--checked')){
            return;
        } else{
            $('.checkout__radio--checked').removeClass('checkout__radio--checked');
            $(this).addClass('checkout__radio--checked');

            var $input = $(this).find('input')
            $input.prop('checked', true);
            ;

            // console.log($input.attr('id'));

            if($input.attr('id') === 'credit_card'){
                $cardDetails.addClass('checkout__card--showing');
            } else{
                $cardDetails.removeClass('checkout__card--showing');
            }
        }


    });


});