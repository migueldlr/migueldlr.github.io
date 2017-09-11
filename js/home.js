$(function() {
	var page1img = 0;

	$("span.highlight").hover(function () {
		$("#intro").attr("class", "page");
		$("#intro").toggleClass($(this)[0].id);
		$(".highlight").each(function() {
			$(this).attr("class", "highlight");
		});
		$(this).toggleClass("extrahighlight");
	});

	$("span.highlight").mouseleave(function() {
		$("#intro").attr("class", "page blank");
		$(".highlight").each(function() {
			$(this).attr("class", "highlight");
		});
	});
});