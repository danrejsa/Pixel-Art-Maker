// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {	
	var  grid_Height, grid_Width, rows, canvas, cell;	
	
	grid_Height = $('#inputHeight').val();
	grid_Width = $('#inputWeight').val();
	canvas = $('#pixelCanvas');
	canvas.children().remove()
	
	for (i = 0; i < grid_Height; i++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (j = 0; j < grid_Width; j++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
	
	cell.click(function() {
	
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}


var submit;

submit = $('input[type="submit"]')

submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});




