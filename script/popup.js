$(function(){
    //script/popup.js
    
    let $pop = $('#popup'),
        $pop1 = $('#popup .popup-content'),
        $p1 = $pop1.find('.pop-img1'),
        $p2 = $pop1.find('.pop-img2'),
        $c1 = $('.sec2 .img_p a'),
        $c2 = $('.sec2 .img_p1 a');
        
 
    
    $c1.on('click', function(event){
        event.preventDefault();
        $pop.css('display','block');
        $p1.css('display','block');
        $p2.css('display','none');
    });
    $c2.on('click', function(event){
        event.preventDefault();
        $pop.css('display','block');
        $p2.css('display','block');
        $p1.css('display','none');
    });
    
    
    

    $pop.find('.close').on('click',function(){
        $pop.find('img').css("display", "none");
        $pop.css("display", "none");
    });

});