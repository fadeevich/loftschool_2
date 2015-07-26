$(document).ready(function() {

/*---------------ACCORDEON--------------*/

	$('.product__group').on('click', function(e){
	  e.preventDefault();

		var _this = $(this),
				item = _this.closest('.product__item'),
				list = _this.closest('.product__list'),
				items = list.find('.product__group'),
				content = item.find('.product__inner-list'),
				otherContent = list.find('.product__inner-list'),
				duration = 300;

		if (!_this.hasClass('active')) {
			items.removeClass('active');
			_this.addClass('active');
			otherContent.stop(true, true).slideUp(duration);
			content.stop(true, true).slideDown(duration);
		} else {
			content.stop(true, true).slideUp(duration);
			_this.stop(true, true).removeClass('active');
		}

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