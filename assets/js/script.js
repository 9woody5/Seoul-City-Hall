$(function(){

    $('.btnLang').click(function(){
        const url = $('#langList').val();
        window.open(url);
    })

    /**
     * 메인 슬라이드 영역
     * 
     * 
     * @version 1.0.0
     * @since 2022-08-17
     * @author 정우진
     */

    $('.slider h3').click(function(e){
        e.preventDefault();

        const parent = $(this).parent();

        parent.addClass('active').siblings('.slider').removeClass('active');

        if(parent.hasClass('slider1')){
            slider2.autoplay.stop();

            if (parent.find('.btn-autoplay').hasClass('active')) {
                slider1.autoplay.stop();
            } else {
                slider1.autoplay.start();
            }
        }
    })




























})