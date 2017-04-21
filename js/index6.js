// TASK ONE
$(init)
function init(){
	function myLinkClickHandler(){
		$(".large").hide();
	}
	$(myLinkClickHandler)
	$(".large").hide();
	$("body").on('click','li',appear);
    $(".large").on('click',myLinkClickHandler);
}
function appear(e){
	var url=$(e.target).attr("src");
	$(".pic").attr("src",url);
	$(".large").fadeToggle();
	//$("large img").attr("src".url);
	
}
//TASK TWO
function slide(e){
	$ (".head").click(function(e){
		$(".head").removeClass("choose");
		$(this).addClass("choose");
		$(".cell2-content").addClass("hide");
		$(".cell2-content").eq($(this).index()).removeClass("hide");
});
}
$(choice)
function choice(){
	$(slide)
}


