
//swaps tiles
function swapTiles(cell1,cell2) {
    let temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  
  //shuffles the sliders
  function shuffle() {
  for (let row=1;row<=4;row++) {
     for (let column=1;column<=6;column++) {
    
      let row2=Math.floor(Math.random()*4 + 1);
      let column2=Math.floor(Math.random()*6 + 1);
       
      swapTiles("cell"+row+column,"cell"+row2+column2);
    } 
  } 
  }
  
  //checks if you are able to swap positions
  function clickTile(row,column) {
    let cell = document.getElementById("cell"+row+column);
    let tile = cell.className;
    if (tile!="tile24") { 
         //Checking if white tile on the right
         if (column<6) {
           if ( document.getElementById("cell"+row+(column+1)).className=="tile24") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="tile24") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="tile24") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
         //Checking if white tile is below
         if (row<6) {
           if ( document.getElementById("cell"+(row+1)+column).className=="tile24") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         }
    }
    
  }