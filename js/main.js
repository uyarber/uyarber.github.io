document.querySelector("#rotate").addEventListener('click', function() {
   document.querySelector("#sample").classList.add('rotating')
});

$('.oldk').hover(function() {
    $('.oldk_active').fadeTo(1,1);
},function() {
    $('.oldk_active').fadeTo(1,0);
});



////
////$('.oldk').hide();
////$('.oldk_active').hide();
//
////When the Image is hovered upon, show the hidden div using Mouseover
//$('.oldk').mouseover(function() {
//$('.oldk_active').show();
//});
//
////When the Image is hovered away from, hide the div using Mouseout
//$('.oldk').mouseout(function() {
//$('.oldk').hide();
//});


//$(document).ready(function() {
//     $('.oldk','.oldk_activate').hide();
//
//
////When the Image is hovered upon, show the hidden div using Mouseover
// $('img[id^="picture"]').hover(function() {
//   $('.'+ $(this).prop('class')).show();
//},function() {
//  $('.'+ $(this).prop('class')).hide();
//});
