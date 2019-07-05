//Select color input
var color = document.querySelector("#colorPicker");

//Select size input
var height = document.querySelector("#inputHeight");
var width = document.querySelector("#inputWidth");
var grid = document.querySelector("#pixelCanvas");

//user submits grid size
document.addEventListener("submit", function(event) {
  event.preventDefault();
  var heightVal = height.value;
  var widthVal = width.value;
  //makeGrid function is called
  makeGrid(heightVal, widthVal);
});

function makeGrid(h, w) {
  // clears any previous grid
  grid.innerHTML = "";
  //creates new grid
  for (x = 1; x <= h; x++) {
    const row = document.createElement("tr");
    grid.appendChild(row);
    for (y = 1; y <= w; y++) {
      const column = document.createElement("td");
      row.appendChild(column);
    }
  }
}

//responds to click on grid
function actToClick(evt) {
  if (evt.target.tagName == "TD") {
    evt.target.style.backgroundColor = color.value;
  }
}
//event listener that colors the grid
grid.addEventListener("click", actToClick);
