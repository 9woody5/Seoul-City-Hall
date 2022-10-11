$(function(){//로드 후에 실행

    //lang 선택 시 새창 열기
    $('#btnLang').click(function(){
        const url = $('#langList').val();
        window.open(url);
    })

    

    //메인 슬라이드 재생 정지
    $('.slider h3').click(function(e){//클릭된 후가 아니라 클릭되기 직전 시점
        e.preventDefault();
        const parent = $(this).parent();

        parent.addClass('active').siblings('.slider').removeClass('active');

        if (parent.hasClass('slider1')) {
            slider2.autoplay.stop();

            if (parent.find('.btn-autoplay').hasClass('active')) {
                slider1.autoplay.stop();
            } else {
                slider1.autoplay.start();
            }
        } else {
            slider1.autoplay.stop();

            if (parent.find('.btn-autoplay').hasClass('active')) {
                slider2.autoplay.stop();
            } else {
                slider2.autoplay.start();
            }
        }

    })

    const slider1 = new Swiper(".slider1 .swiper", {
        navigation: {
            nextEl: ".slider1 .btn-next",
            prevEl: ".slider1 .btn-prev",
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.slider1 .fraction',
            type:"custom",
            renderCustom:function(swiper, current, total){
                return `<span class="current">${current}</span>/<span class="pages">${total}</span>`;
            }
          }
      });

    const slider2 = new Swiper(".slider2 .swiper", {
        navigation: {
            nextEl: ".slider2 .btn-next",
            prevEl: ".slider2 .btn-prev",
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.slider2 .fraction',
            type:"custom",
            renderCustom:function(swiper, current, total){
                return `<span class="current">${current}</span>/<span class="pages">${total}</span>`;
            }
          }
      });
      slider2.autoplay.stop();
      


      //자동재생, 정지 버튼
      $('.slider1 .btn-autoplay').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('active')) { //->active 상태일 때 재생
            slider1.autoplay.start();
            $(this).removeClass('active')
            
        } else {
            slider1.autoplay.stop();
            $(this).addClass('active')
        }

      })

      $('.slider2 .btn-autoplay').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('active')) { //->active 상태일 때 재생
            slider2.autoplay.start();
            $(this).removeClass('active')
            
        } else {
            slider2.autoplay.stop();
            $(this).addClass('active')
        }

      })



      //하단 배너 슬라이드 영역
     const popupSlide = new Swiper(".sc-popup .swiper", {
        slidesPerView: 3,
        spaceBetween: 43,
        navigation: {
            nextEl: ".sc-popup .btn-next",
            prevEl: ".sc-popup .btn-prev",
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.sc-popup .fraction',
            type:"custom",
            renderCustom:function(swiper, current, total){
                return `<span class="current">${current}</span>/<span class="pages">${total}</span>`;
            }
          }
      });

    //   popupSlide.autoplay.stop()
    //   popupSlide.autoplay.start()

      $('.sc-popup .btn-autoplay').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('active')) { //->active 상태일 때 재생
            popupSlide.autoplay.start();
            $(this).removeClass('active')
            
        } else {
            popupSlide.autoplay.stop();
            $(this).addClass('active')
        }

      })
      

      

      //top버튼 스크립트
    $(window).scroll(function(){

        if ($(this).scrollTop() > 100) {
            $('.btn-top').addClass('on');
        } else {
            $('.btn-top').removeClass('on');
            
        }
        
    });

    $('.btn-top').click(function(){
        window.scrollTo({top:0, behavior: 'smooth'});
    });





    //btn-sitemap 스크립트
    $('.btn-related').click(function(e){
        e.preventDefault();
        
        if ($(this).hasClass('on')) {
            $('.sitemap-list').stop().slideUp(200);
            $('.btn-related').removeClass('on');
        } else {
            $('.btn-related').removeClass('on');
            $('.sitemap-list').stop().slideUp(200);//사라짐
            $(this).addClass('on');
            $(this).siblings().stop().slideDown(200);//나오는거

        }
    })

    $('.sitemap-list li:first-child').keydown(function(e){

        if (e.keyCode === 9 && e.shiftKey) {
            $('.sitemap-list').stop().slideUp(200);
        }
    })

    $('.sitemap-list li:last-child').keydown(function(e){

        if (e.keyCode === 9 && !e.shiftKey) {
            $('.sitemap-list').stop().slideUp(200);
        }
    })


})