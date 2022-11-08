let show_custom_scrollbar = true;

if(Modernizr == undefined || Modernizr.touchevents){  
    show_custom_scrollbar = false;
}

$(document).ready(function () {

    $('.lazy').Lazy({
        beforeLoad: function(element) {
            console.log('beforeLoad');
            // called before an elements gets handled
        },
        afterLoad: function(element) {
            console.log('afterLoad');
            // called after an element was successfully handled
        },
        onError: function(element) {
            console.log('onError');
            // called whenever an element could not be handled
        },
        onFinishedAll: function() {
            console.log('onFinishedAll');
            // called once all elements was handled
        }
    });

    $(window).scroll(function() {
        stickNavbar();
    });
    


    $(document).on("click","a[href^='#']",function(e){
      const href = $(this).attr("href");
      let extraTop = 0;
      fragmentScroll(href,e,extraTop);
    });

    $('body').on('click','.open-popup',function(){
        let popop_title = '';
        let popop_body = '';

        popop_title = $(this).closest('.popup-content-parent').find('.popup-content-title').text();

        $(this).closest('.popup-content-parent').find('.popup-content-image').each(function(){
            popop_body += $(this)[0].outerHTML;
        });
        popop_body += $(this).closest('.popup-content-parent').find('.popup-content-body')[0].outerHTML;

        $('.popup .modal-body > .title').text(popop_title);
        $('.popup .modal-body > .body').html(popop_body);

        $('.popup .modal-body > .body').find('font').removeAttr('size');

        $('.popup').modal('show');
    });

    $('body').on('click', '.go-to-top', function(){
        $('body').animate({
            scrollTop: 0
        }, 500);
    });

    loaded();
});

function loaded(){

}


/*
 * ================================= Fragment scroll Start =================================
 */
function fragmentScroll(href,e,extraTop){
    if(e == undefined){
        e = null
    }
    if(extraTop == undefined){
        extraTop = 0;   
    }
    
    const target = $(href).parents("body"); 
    if(target.length){
      if(e){
        e.preventDefault();
      }

      target.animate({
          scrollTop: $(href).offset().top + target.scrollTop() - extraTop
      }, 500);
    }
}

/*
 * ================================= Fragment scroll End =================================
 */


/*
 * ================================= Sticky Menu Start =================================
 */
stickNavbar();
function stickNavbar(){

    sticky = $("body").scrollTop();

    if ($("body .navbar-section").height() <= sticky) {
        $("body .navbar-section").addClass("sticky");
        if(!$("body .navbar-section").hasClass('fixed')){
            $("body .navbar-section").parent().css('padding-top',$("body .navbar-section").height()+'px')
        }

        if($('.go-to-top').length){
            $('.go-to-top').addClass('shown');
        }
    } else {
        $("body .navbar-section").removeClass("sticky");

        if(!$("body .navbar-section").hasClass('fixed')){
            $("body .navbar-section").parent().css('padding-top',0)
        }


        if($('.go-to-top').length){
            $('.go-to-top').removeClass('shown');
        }
    }
}
/*
 * ================================= Sticky Menu End =================================
 */
