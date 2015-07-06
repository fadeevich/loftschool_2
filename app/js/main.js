$(document).ready(function() {

/*---------------ACCORDEON--------------*/

	$('.product__group').on('click', function(e){
	   e.preventDefault();

			var _this = $(this),
					item = _this.closest('.product__item'),
					items = _this.closest('.product__list'),
					content = item.find('.inner-list'),
					duration = 300;

			items.find('.product__group').removeClass('active');
			item.find('.product__group').addClass('active');
			items.find('.inner-list').slideUp(duration);
			content.stop(true, true).slideDown(duration);;
	});

/* ---------------UP BUTTON--------------*/

	$('#to-top').click(function() {
 
	$('body,html').animate({scrollTop:0},800);
 
	});

/*----------------SELECT VIEW------------*/

	$('#content-show').change(function() {

		var val = $(this).val(),
				list_lines = $('.content__list-lines'),
				list_grid = $('.content__list-grid')

		if (val == 'lines') {
			list_lines.show('fast');
			list_grid.hide('fast');
		}

		if (val == 'grid') {
			list_lines.hide('fast');
			list_grid.show('fast');
		}
	});

});