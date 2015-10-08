var howManyColumns = 3;

function makeGrid(gridrows, gridcols, defaultColour) {

  var newGrid = [];

  for(var row=0; row<gridrows; ++row) {

    var thisRow = [];

    for(var col=0; col<gridcols; ++col) {

      thisRow.push(defaultColour);

    }
    newGrid.push(thisRow);
  }
  return newGrid;
}


function drawGrid(withGrid,tileSize) {

  var ctx = document.getElementById('cnv').getContext('2d');
  // var tileDiv = 0;

  for(var row=0; row<withGrid.length; ++row) {

    for(var col=0; col<withGrid[row].length; ++col) {

      // console.log('col is ' + col + ' row is ' + row);
      // console.log( 'withGrid[row][col] is ' + withGrid[row][col] );
      //console.log('tileDiv is ' + tileDiv++);

      // tileDiv++
      // $( ".hero-tile-wrap .hero-tile:nth-child(" + tileDiv + ")" ).css( "background-color", withGrid[row][col] );

      ctx.fillStyle = withGrid[row][col];
      ctx.fillRect(row*tileSize, col*tileSize, tileSize, tileSize);
    }
  }
}

    function genFilterFunc(takenValues) {
       var takenLookup = {};
       for(var i=0; i < takenValues.length; ++i) {
          takenLookup[takenValues[i]] = 1;
       }
       var filterFunc = function(val) {
         return takenLookup[val] ? 0 : 1;
       };
       return filterFunc;
    }

    // filteredIndex returns nth (0-index) element satisfying filterFunc
    //   returns undefined if insufficient options
    function filteredIndex(options, filterFunc, n) {
       var i=-1, j=0;
       for(;j<options.length && i<n; ++j) {
         i += filterFunc(options[j]);
         if(i==n)
           break;
       }
       return options[j];
    }


function randomColourNotUpOrLeft(grid, row, col, options, ignoreColour) {
  var takenlist = [];
  if(row > 0 && grid[row-1][col] != ignoreColour) {
    takenlist.push(grid[row-1][col]);
  }
  if(col > 0 && grid[row][col-1] != ignoreColour) {
    takenlist.push(grid[row][col-1]);
  }
  var filt = genFilterFunc(takenlist);
  var randomIndex = Math.floor(Math.random()*(options.length-takenlist.length));
  var randomColour = filteredIndex(options, filt, randomIndex);
  return randomColour;
}

function fillGridSpeckled(grid, options, nullColour) {

  for(var row=0; row<grid.length; ++row) {
    for(var col=0; col<grid[row].length; ++col) {
      grid[row][col] = randomColourNotUpOrLeft(grid,row,col,options,nullColour);

      console.log( 'col is ' + col + " row is " + row + ' grid[row][col] is ' + grid[row][col] );

      var tilesAcross = howManyColumns;
      
      if (tilesAcross === 4) {
          if (col === 0 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 1 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 0 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 2 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 0 && row === 2) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 3 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 0 && row === 3) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 4 + ")" ).css( "background-color", grid[row][col] );
          }

          if (col === 1 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 5 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 1 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 6 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 1 && row === 2) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 7 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 1 && row === 3) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 8 + ")" ).css( "background-color", grid[row][col] );
          }

          if (col === 2 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 9 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 2 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 10 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 2 && row === 2) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 11 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 2 && row === 3) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 12 + ")" ).css( "background-color", grid[row][col] );
          }
      }

      if (tilesAcross === 3) {
          if (col === 0 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 1 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 0 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 2 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 0 && row === 2) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 3 + ")" ).css( "background-color", grid[row][col] );
          }

          if (col === 1 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 4 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 1 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 5 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 1 && row === 2) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 6 + ")" ).css( "background-color", grid[row][col] );
          }

         if (col === 2 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 7 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 2 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 8 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 2 && row === 2) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 9 + ")" ).css( "background-color", grid[row][col] );
          }

          if (col === 3 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 10 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 3 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 11 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 3 && row === 2) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 12 + ")" ).css( "background-color", grid[row][col] );
          }
      }

      if (tilesAcross === 2) {
          if (col === 0 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 1 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 0 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 2 + ")" ).css( "background-color", grid[row][col] );
          }

          if (col === 1 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 3 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 1 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 4 + ")" ).css( "background-color", grid[row][col] );
          }
    
         if (col === 2 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 5 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 2 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 6 + ")" ).css( "background-color", grid[row][col] );
          }

          if (col === 3 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 7 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 3 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 8 + ")" ).css( "background-color", grid[row][col] );
          }

          if (col === 4 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 9 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 4 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 10 + ")" ).css( "background-color", grid[row][col] );
          }

          if (col === 5 && row === 0) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 1 + ")" ).css( "background-color", grid[row][col] );
          }
          if (col === 5 && row === 1) {
            $( ".hero-tile-wrap .hero-tile:nth-child(" + 12 + ")" ).css( "background-color", grid[row][col] );
          }
      }


      
    }
  }
}


var nullColour = 'black';
var grid = makeGrid(howManyColumns,6,nullColour);

// drawGrid(grid, 25);
var fewOptions = ['red', 'green', 'blue', 'purple', 'yellow', 'white' ]; // never less than 3!
var manyOptions = 'AliceBlue,AntiqueWhite,Aqua,Aquamarine,Azure,Beige,Bisque,Black,BlanchedAlmond,Blue,BlueViolet,Brown,BurlyWood,CadetBlue,Chartreuse,Chocolate,Coral,CornflowerBlue,Cornsilk,Crimson,Cyan,DarkBlue,DarkCyan,DarkGoldenRod,DarkGray,DarkGreen,DarkKhaki,DarkMagenta,DarkOliveGreen,DarkOrange,DarkOrchid,DarkRed,DarkSalmon,DarkSeaGreen,DarkSlateBlue,DarkSlateGray,DarkTurquoise,DarkViolet,DeepPink,DeepSkyBlue,DimGray,DodgerBlue,FireBrick,FloralWhite,ForestGreen,Fuchsia,Gainsboro,GhostWhite,Gold,GoldenRod,Gray,Green,GreenYellow,HoneyDew,HotPink,IndianRed,Indigo,Ivory,Khaki,Lavender,LavenderBlush,LawnGreen,LemonChiffon,LightBlue,LightCoral,LightCyan,LightGoldenRodYellow,LightGray,LightGreen,LightPink,LightSalmon,LightSeaGreen,LightSkyBlue,LightSlateGray,LightSteelBlue,LightYellow,Lime,LimeGreen,Linen,Magenta,Maroon,'.split(",");

fillGridSpeckled(grid, fewOptions, nullColour);
drawGrid(grid, 50);


// var ntv = setInterval(function() { 
//   fillGridSpeckled(grid, fewOptions, nullColour); 
//   drawGrid(grid, 50);
// }, 200);


// fillGridSpeckled(grid, fewOptions, nullColour); 
// drawGrid(grid, 50);




















