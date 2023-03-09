if (true) {
   const $slides = $('#onlyone > .slides-container > article');

   const $btnPrev = $('#onlyone > .slides-navigation.slides-prev');
   const $btnNext = $('#onlyone > .slides-navigation.slides-next');

   const $btn = $('#library > .library-container > .frame > a');
   let nowIdx = 0;

   
   $btnNext.on('click', function(evt){
      evt.preventDefault();

      if(nowIdx<3){
         nowIdx++;
      }else{
         nowIdx=0;
      }

      
      $slides.eq(nowIdx).fadeIn(200).siblings().fadeOut(200);
   });
   
   $btnPrev.on('click', function(evt){
      evt.preventDefault();

      if(nowIdx>0){
         nowIdx--;
      }else{
         nowIdx=3;
      }

      
      $slides.eq(nowIdx).fadeIn(200).siblings().fadeOut(200);    
   });

   const swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
    
      loop: true,
    
         
         pagination: {
          el: '.swiper-pagination',
          clickable:true,
       },
    
    
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    $btn.on('click', function(evt){
      evt.preventDefault();
    });
}

