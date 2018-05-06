$("nav").on("click", "a", function () {
   $(this).addClass("current").siblings().removeClass("current")
   $(".photo img").attr("src", $(this).prop("href"))
   return false;
})
var fixOwl = function(){
        var $stage = $('.owl-stage'),
            stageW = $stage.width(),
            $el = $('.owl-item'),
            elW = 0;
        $el.each(function() {
            elW += $(this).width()+ +($(this).css("margin-right").slice(0, -2))
        });
        if ( elW > stageW ) {
            $stage.width( elW );
        };
    }
$(function() {

	// Custom JS
	$(".owl-carousel").owlCarousel({
        // margin:10,
        // autoWidth:true,
        items:1,
        loop:true,
        nav: true,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        onInitialized: fixOwl,
        onRefreshed: fixOwl
    
	});




});
