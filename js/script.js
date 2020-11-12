$(document).ready(function(){

//Hides the timeline and the skills when the page is loaded
        $('.timeline').hide();
        $('.skill').hide();
        $('.skills').hide();
   
//Click on the expand button in the jumbo makes the rest of the page show
    $('.titanic').on('click',function(){
        $('.timeline').slideToggle();
        $('.skill').slideToggle();
        $('.skills').slideToggle();
    })  

//Blur the rest of the page when hover over the testimonials
    $( ".testimonial-bg" ).mouseenter(function() {
        $( ".card" ).css('filter','blur(4px)');
        $( ".timeline" ).css('filter','blur(4px)');
    });

    $( ".testimonial-bg" ).mouseleave(function() {
        $( ".card" ).css('filter','blur(0)');
        $( ".timeline" ).css('filter','blur(0)');
    });
  
//Makes the social buttons dissapear when scroll to the end of the page
        $('.contact__item').hide()

$(window).on('scroll', function(){
  if($(window).scrollTop() + $(window).height() == $(document).height()){
    $('.social').fadeOut().hide();
    $('.contact__item').fadeIn(5000)
  } 
  else{
    $('.social').show();
   }
}); 


//Click on the buttons to show the full text
$('.hidden_text').hide();
$('.read_less').hide();


$('.btn_dots__fathia').on('click',function(){
    $(this).hide();
    $('.hidden_text__fathia').show();
    $('.read_less__fathia').show();
});

$('.btn_dots__james').on('click',function(){
    $(this).hide();
    $('.hidden_text__james').show();
    $('.read_less__james').show(); 
})

$('.btn_dots__kate').on('click',function(){
    $(this).hide();
    $('.hidden_text__kate').show();
    $('.read_less__kate').show();
     
})

//Click on the read less to hide the text

$('.read_less__fathia').on('click',function(){
    $(this).hide();
    $('.hidden_text__fathia').hide();
    $('.btn_dots__fathia').show(); 
    
});

$('.read_less__james').on('click',function(){
    $(this).hide();
    $('.hidden_text__james').hide();
    $('.btn_dots__james').show(); 
    
});

$('.read_less__kate').on('click',function(){
    $(this).hide();
    $('.hidden_text__kate').hide();
    $('.btn_dots__kate').show(); 
    
});
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

//Expand button to open the rest of the page

var titanic = new Titanic({
    hover: false, // auto animated on hover (default true)
    click: true  // auto animated on click/tap (default false)
  });