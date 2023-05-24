$('.tit .btn').click(function(e){
    e.preventDefault(); //이벤트의 기본값을 막아라 (클릭했을때 튕겨서 올라가는걸 막아줌)
    //$('.nav').fadeIn();
    //$('.nav').slideDown();
    $('.nav').slideToggle();
    $('.tit .btn').toggleClass('open') //.tit .btn 에 'open'이라는 클래스 추가

    if($('.tit .btn').hasClass('open')){ // 만약 .tit .btn 이 'open'이라는 클래스를 가지고 있다면
        //A.attr(B) ==> A요소안에 있는 속성 B를 가져와라
        //A.attr(B,C) ==> A요소안에 있는 속성 B를 C로 가져와라
        $('.tit .btn').find('i').attr('class','fas fa-chevron-up') //.tit .btn는 'i'를 찾고,찾은'i'의'class'속성을 'fas fa-chevron-up'로 가져와라
    }else{                                                          // 그게 아니라면
        $('.tit .btn').find('i').attr('class','fas fa-chevron-down')//.tit .btn는 'i'를 찾고,찾은'i'의'class'속성을 'fas fa-chevron-down'로 가져와라
}
})


$(document).ready(function(){
    $('.slider').slick({
        dots:true,
    });
  });


lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],

});

