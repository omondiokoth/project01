$(function(){
//script/popup.js
    let $pop = $('#popup'),
        $pop1 = $('#popup .pic1'),
        $pop2 = $('#popup .pic2'),
        $p01 = $('.partner .pop01 a'),
        $p02 = $('.partner .pop02 a');
    
    
    $p01.on('click', function(event){
        event.preventDefault();
        $pop2.css("display", "none");
        $pop.css("display", "block");
        
    });
    $p02.on('click', function(event){
        event.preventDefault();
        $pop1.css("display", "none");
        $pop.css("display", "block");
    });
    $pop.find('.close').on('click',function(){
        $pop.find('img').css("display", "block");
        $pop.css("display", "none");
    });
 
});