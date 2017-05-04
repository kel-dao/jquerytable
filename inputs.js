//$(document).ready(function(name){
//  $("input:name").click(function(){
//    alert("You entered name()");
//});

//$(document).ready(function(){
// $("input").change(function() {
//     if ($(this).attr('name') == 'choice') {
//    var input_id = $(this).attr("name");
//    var input_name = input_id.split("-")[0];
//    var output_id = input_name + "-output";
//    var value = $( this ).val();
//    $("#" + output_id).text( value );   
//     } else {
//    var input_id = $(this).attr("id");
//    var input_name = input_id.split("-")[0];
//    var output_id = input_name + "-output";
//    var value = $( this ).val();
//    $("#" + output_id).text( value );   
//     }
//  });
//})
//


$('input, select, textarea').on('input change', valueEntered);

function valueEntered() {
	var element = $(this);
	var row = element.closest("tr");

	if(element.is(':radio')) {
		row.find('input').val([element.val()]);
		row.find('.answer').text(element.val());
	}
	else {
		if(element.is(':checkbox')) {
			row.find('input').prop('checked', element.prop('checked'));
			row.find('.answer').text(element.prop('checked'));
		}
		else {
			row.find('input, select, textarea').val(element.val());
			row.find('.answer').text(element.val());
		}
	}
}