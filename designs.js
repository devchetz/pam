// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {
    let pixelCanvas, grid;
    pixelCanvas = $('#pixelCanvas');
    if (pixelCanvas.children().length) {
        pixelCanvas.empty();
    }
    for(let i = 0; i < height; i++) {
        grid += "<tr>";
        for (let j = 0; j < width; j++) {
            grid += "<td></td>";
        }
        grid += "</tr>";
    }
    pixelCanvas.html(grid);
    pixelCanvas.css("background-color", "#ffffff");
    // Add and Remove color
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
};

$(document).ready(function(){
    $('#btn').click(function(evt) {
        let height, width;
        width = $('#inputWeight').val();
        height = $('#inputHeight').val();
        evt.preventDefault();
        makeGrid(width, height);
    })
});

