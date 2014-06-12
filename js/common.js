head.ready(function() {
	console.log($('body').html()); 

	function tab() {
		$(".js-tab").each(function(){
			var tab_link = $(this).find("a");
			var tab_item = $(this).find("li");
			var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
			tab_cont.hide();
			tab_item.first().addClass("is-active");
			$(this).parents(".js-tab-group").find(".js-tab1").show();
			tab_link.on("click", function() {
				var index = $(this).attr("href");
				tab_item.removeClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.hide();
				$(this).parents(".js-tab-group").find("."+index).show();
				return false;
			});
		});
	}
	tab();

	$.fn.cycle.transitions.scrollVert = {
	    before: function( opts, curr, next, fwd ) {
	        opts.API.stackSlides( opts, curr, next, fwd );
	        var height = opts.container.css('overflow','hidden').height();
	        opts.cssBefore = { top: fwd ? -height : height, left: 0, opacity: 1, display: 'block', visibility: 'visible' };
	        opts.animIn = { top: 0 };
	        opts.animOut = { top: fwd ? height : -height };
	    }
	};


});