head.ready(function() {
	console.log($('body').html()); 

	$('.scrollblock').jScrollPane({
		hideFocus: true,
		mouseWheelSpeed: 40
	});

});