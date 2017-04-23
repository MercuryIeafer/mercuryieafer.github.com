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
//TASK THREE
$(_delete)
function _delete(){
	$(deletediv)
}
$(bar_add)
function bar_add(){
	$(_add)
}
function deletediv(e){
	$(".delete").click(function(e){
        $(this).parent().remove();
        $(".number").text(newindex);
    });
}
function newindex(n){
    return n+1;
}
function _add(){
	$(".ui-base-add").click(function() {
        var newitem="<div id='ui-base-tuple' class='ui-base-bar'><div class='number'>1</div><input type='text' class='words'></input><div class='delete'>Delete</div></div>";
        $(".ui-base-main").append(newitem);
        $(".number").text(newindex);
        $(deletediv)
    });
}





