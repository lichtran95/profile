// open sidebar

$(".hamberger").click(function(event){
	event.stopPropagation();
	$(".sidebar").addClass("sidebar-visible");
});


$('body').click(function() {
	$('.sidebar').removeClass("sidebar-visible");
  });
  
  $('#menu-sidebar').click(function(event){
	event.stopPropagation();
});


// js chọn phương thức thanh toán
$(".module-methodPayment ul li").click(function(){
	$(".module-methodPayment ul li").removeClass("active");
	$(this).addClass("active");
});


// faq
$(".bl-faq ul li").click(function(){
	$(".bl-faq ul li").removeClass("active");
	$(this).addClass("active");
})