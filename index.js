var selectedRating;

$('.rate-btn').click(function () {
	$('.rate-btn').removeClass('pressed');
	$('#'+ this.id).addClass('pressed');
	selectedRating = this.id;
})

$('.submit').click(function(){
	$('.card').addClass('hidden');
	$('.thank-you').removeClass('hidden');
	$('.selected-btn').text(selectedRating);
})