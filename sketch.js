/*************************************************************************
    (*)Project 1: Plant Lovers Unanimous
          (*)by Emily Farrow

    (*)Overview - Website created to give tips on plant care based on expertise and skill level. 
    There are 5 pages, the first being the main page, second through fourth being the different skill level pages,
    and the last being the 'Things to buy' page.
 
**************************************************************************/


// variable that is a function 
var drawFunction;

//array variables
var mainPageAssets = [];
var beginnerAssets = [];
var intermediateAssets = [];
var advancedAssets = [];
var thingstobuyAssets = [];
var navAssets = [];

//beginner through advanced variables
var maintitleX = 112;
var maintitleY = 80; 

var plant1X = 110;
var plant1Y = 220;

var plant2X = 574; 
var plant2Y = 220;

var text1X = 574;
var text1Y = 120;

var text2X = 574;
var text2Y = 740;

var button1X = 210;
var button1Y = 550;

var button2X = 680;
var button2Y = 550;

var button3X = 574;
var button3Y = 490;

var button4X = 900;
var button4Y = 110;

var button5X = 680;
var button5Y = 450;

var button6X = 680;
var button6Y = 500;

// next page variables
var nextY = 1270; 


//things to buy variables
var imageleftX = 228;
var row1Y = 240;
var imagerightX = 686;
var row2Y = 810;

var textrow1Y = 245;
var textrow2Y = 1153;


//preload images in array
function preload() {

  //main page images
  mainPageAssets[0] = loadImage('assets/mainpage1.png');
  mainPageAssets[1] = loadImage('assets/mainpage2.png');

 //beginner images
  beginnerAssets[0] = loadImage('assets/beginnertitle.png'); //title
  beginnerAssets[1] = loadImage('assets/cactus.png'); //cactus illustration
  beginnerAssets[2] = loadImage('assets/cactusbodytext.png'); //cactus body text
  beginnerAssets[3] = loadImage('assets/buymister.png'); //suggestion mister button
  beginnerAssets[4] = loadImage('assets/pothos.png'); //pothos illustration
  beginnerAssets[5] = loadImage('assets/pothosbodytext.png'); //pothos body text
  beginnerAssets[6] = loadImage('assets/buymacrame.png'); // suggestion macrame button
  beginnerAssets[7] = loadImage('assets/gotomainpage.png'); //main page button

  
  //intermediate images
  intermediateAssets[0] = loadImage('assets/intermediatetitle.png'); //title
  intermediateAssets[1] = loadImage('assets/monstera.png'); //monstera illustration
  intermediateAssets[2] = loadImage('assets/monsterabodytext.png'); //monstera body text
  intermediateAssets[3] = loadImage('assets/buyhumidifier.png'); //humidifier button
  intermediateAssets[4] = loadImage('assets/africanmask.png'); //african mask plant
  intermediateAssets[5] = loadImage('assets/africanmaskbodytext.png'); //african mask body text
  intermediateAssets[6] = loadImage('assets/buyperlite.png'); //perlite button
  intermediateAssets[7] = loadImage('assets/gotomainpage.png'); //main page button
  
  //advanced images
  advancedAssets[0] = loadImage('assets/advancedtitle.png'); //title
  advancedAssets[1] = loadImage('assets/calathea.png'); //calathea illustration
  advancedAssets[2] = loadImage('assets/calatheabodytext.png'); //calathea body text
  advancedAssets[3] = loadImage('assets/buymister.png'); //mister button
  advancedAssets[4] = loadImage('assets/fiddleleaf.png'); //fiddle leaf illustration
  advancedAssets[5] = loadImage('assets/fiddleleafbodytext.png'); //fiddle leaf body text
  advancedAssets[6] = loadImage('assets/buyhumidifier.png'); //humidifier button
  advancedAssets[7] = loadImage('assets/gotomainpage.png'); //main page button

  //things to buy images
  thingstobuyAssets[0] = loadImage('assets/thingstobuytitle.png'); //title
  thingstobuyAssets[1] = loadImage('assets/macrame.png'); //macrame image
  thingstobuyAssets[2] = loadImage('assets/humidifier.png'); //humidifier image
  thingstobuyAssets[3] = loadImage('assets/perlite.png'); //perlite image
  thingstobuyAssets[4] = loadImage('assets/spritzer.png'); //mister image
  thingstobuyAssets[5] = loadImage('assets/macrametext-01.png'); //macrame text
  thingstobuyAssets[6] = loadImage('assets/humidifiertext-01.png'); //humidifier text
  thingstobuyAssets[7] = loadImage('assets/perlitetext-01.png'); //perlite text
  thingstobuyAssets[8] = loadImage('assets/spritzertext-01.png'); //mister text

  navAssets[0] = loadImage('assets/cactusNav.png'); //cactus
  navAssets[1] = loadImage('assets/pothosNav.png'); //pothos
  navAssets[2] = loadImage('assets/monsteraNav.png'); // monstera
  navAssets[3] = loadImage('assets/africanmaskNav.png'); // african mask plant
  navAssets[4] = loadImage('assets/calatheaNav.png'); // calathea
  navAssets[5] = loadImage('assets/fiddleNav.png'); //fiddle leaf fig
  navAssets[6] = loadImage('assets/misterNav.png'); //mister
  navAssets[7] = loadImage('assets/macrameNav.png'); //macrame
  navAssets[8] = loadImage('assets/humidifierNav.png'); // humidifier
  navAssets[9] = loadImage('assets/perliteNav.png'); //perlite
  navAssets[10] = loadImage('assets/beginnerNav.png'); //beginner
  navAssets[11] = loadImage('assets/intermediateNav.png'); //intermediate
  navAssets[12] = loadImage('assets/advancedNav.png'); //advanced
  navAssets[13] = loadImage('assets/mainpageNav.png'); //main page
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(1280, 710);
  textAlign(CENTER);
  textSize(28);
  noStroke();

//loadButtons();
//beginnerButtons();

  // main page
  drawFunction = drawMainpage;
}

//calls your state machine function
function draw() {
  drawFunction();
}

//draws images from mainpageAssets array
drawMainpage = function() {
   background(239, 237, 180);
   imageMode(CENTER);

   //images in array
   image(mainPageAssets[0], windowWidth/2, windowHeight/2.5);  //plant lovers unanimous title
   image(mainPageAssets[1], windowWidth/2, windowHeight/1.75);  //find your plant care level image
}

//draws images from beginnerAssets array
drawBeginner = function() {

  background(239, 237, 180);  
  imageMode(CORNER);
   //images in array
   image(beginnerAssets[0], maintitleX, maintitleY);  //subtitle
   image(beginnerAssets[1], plant1X, plant1Y); //first plant
   image(beginnerAssets[4], plant2X, plant2Y); //plant 2
   image(navAssets[0], button1X, button1Y); // cactus nav
   image(navAssets[1], button2X, button2Y); // pothos nav
   image(navAssets[13], button4X, button4Y); //
   image(navAssets[11], button4X, button4Y-50); //
}

//draws images from beginnerAssets array
drawCactus = function(){
  background(239, 237, 180); 
  
    image(beginnerAssets[1], plant1X, plant1Y); //first plant
    image(beginnerAssets[2], text1X, text1Y);  //paragraph 1
    image(navAssets[6], button3X, button3Y); //suggestion button
    image(navAssets[10], button4X, button4Y-50); //
}

//draws images from beginnerAssets array
drawPothos = function(){
  background(239, 237, 180); 
  
    image(beginnerAssets[4], plant1X, plant1Y); //plant 2
    image(beginnerAssets[5], text1X, text1Y);  //paragraph 2
    image(navAssets[7], button3X, button3Y); //suggestion button
    image(navAssets[10], button4X, button4Y-50); //
}

//draws images from intermediateAssets array
drawIntermediate = function() {
 background(239, 237, 180); 

   //images in array
   image(intermediateAssets[0], maintitleX, maintitleY);  //subtitle
   image(intermediateAssets[1], plant1X, plant1Y); //first plant
   image(intermediateAssets[4], plant2X, plant2Y); //plant 2
   image(navAssets[2], button1X, button1Y); // monstera nav
   image(navAssets[3], button2X, button2Y); // african mask nav
   image(navAssets[13], button4X, button4Y+50); //
   image(navAssets[10], button4X, button4Y-50); //
   image(navAssets[12], button4X, button4Y); //
}

//draws images from intermediateAssets array
drawMonstera = function(){
  background(239, 237, 180); 
  
    image(intermediateAssets[1], plant1X, plant1Y); //first plant
    image(intermediateAssets[2], text1X, text1Y);  //paragraph 1
    image(navAssets[8], button3X, button3Y); //suggestion button
    image(navAssets[11], button4X, button4Y-50); //
}

//draws images from intermediateAssets array
drawAfricanmask = function(){
  background(239, 237, 180); 
  
    image(intermediateAssets[4], plant1X, plant1Y); //first plant
   image(intermediateAssets[5], text1X, text1Y);  //paragraph 1
   image(navAssets[9], button3X, button3Y); //suggestion button
   image(navAssets[11], button4X, button4Y-50); //
}

//draws images from advancedAssets array
drawAdvanced = function() {
 background(239, 237, 180); 

   //images in array
   image(advancedAssets[0], maintitleX, maintitleY);  //subtitle
   image(advancedAssets[1], plant1X, plant1Y); //first plant
   image(advancedAssets[4], plant2X, plant2Y); //plant 2
   image(navAssets[4], button1X, button1Y); // calathea nav
   image(navAssets[5], button2X, button2Y); // fiddle leaf nav
   image(navAssets[13], button4X, button4Y); //
   image(navAssets[11], button4X, button4Y-50); //
}

//draws images from advancedAssets array
drawCalathea = function(){
  background(239, 237, 180); 
  
    image(advancedAssets[1], plant1X, plant1Y); //first plant
    image(advancedAssets[2], text1X, text1Y);  //paragraph 1
    image(navAssets[6], button3X, button3Y); //suggestion button
    image(navAssets[12], button4X, button4Y-50); //

}

//draws images from advancedAssets array
drawFiddle = function(){
  background(239, 237, 180); 
  
    image(advancedAssets[4], plant1X, plant1Y); //plant 2
    image(advancedAssets[5], text1X, text1Y);  //paragraph 2
    image(navAssets[8], button3X, button3Y); //suggestion button
    image(navAssets[12], button4X, button4Y-50); //
}

//draws images from thingstobuyAssets Array
drawMister = function() {
   background(239, 237, 180);

   //images in array
   image(thingstobuyAssets[0], maintitleX, maintitleY);  //subtitle
   image(thingstobuyAssets[4], imageleftX, row1Y);  //spritzer  
   image(thingstobuyAssets[8], imagerightX, textrow1Y); //spritzer text
   image(navAssets[0], button5X, button5Y); //suggestion button
   image(navAssets[4], button6X, button6Y); //suggestion button
}

//draws images from thingstobuyAssets Array
drawMacrame = function() {
   background(239, 237, 180);

   //images in array
   image(thingstobuyAssets[0], maintitleX, maintitleY);  //subtitle
   image(thingstobuyAssets[1], imageleftX, row1Y); //macrame
   image(thingstobuyAssets[5], imagerightX, textrow1Y);  //macrame text
   image(navAssets[1], button6X, button6Y); //suggestion button
}

//draws images from thingstobuyAssets Array
drawHumidifier = function() {
   background(239, 237, 180);

   //images in array
   image(thingstobuyAssets[0], maintitleX, maintitleY);  //subtitle
   image(thingstobuyAssets[2], imageleftX, row1Y);  //humidifier
   image(thingstobuyAssets[6], imagerightX, textrow1Y); //humidifier text
   image(navAssets[2], button5X, button5Y); //suggestion button
   image(navAssets[5], button6X, button6Y); //suggestion button
}

//draws images from thingstobuyAssets Array
drawPerlite = function() {
   background(239, 237, 180);

   //images in array
   image(thingstobuyAssets[0], maintitleX, maintitleY);  //subtitle
   image(thingstobuyAssets[3], imageleftX, row1Y); //perlite
   image(thingstobuyAssets[7], imagerightX, textrow1Y);  //perlite text
   image(navAssets[3], button6X, button6Y); //suggestion button
}

// Change the drawFunction variable based on your interaction
function keyPressed() {
  // shows which was typed
  //print(key);
  print(keyCode);

   // main page [m]
  if( drawFunction === drawMainpage ) {
    if( key === 'b' ) {
      drawFunction = drawBeginner;
    }
  } 

  // beginner page [b] 
  else if( drawFunction === drawBeginner ) {
    if( key === 'i' ) {
      drawFunction = drawIntermediate;
    }
    if( key === 'u' ) {
      drawFunction = drawCactus;
    }
    if( key === 'p' ) {
      drawFunction = drawPothos;
    }
    if( key === 'm' ) {
      drawFunction = drawMainpage;
      }
  }

  // cactus [c] 
  else if( drawFunction === drawCactus ) {

    if( key === 'e' ) {
      drawFunction = drawMister;
    }
    if( key === 'i' ) {
      drawFunction = drawIntermediate;
      }
    else if( key === 'b' ) {
      drawFunction = drawBeginner;
    }

  }

  // pothos [p] 
  else if( drawFunction === drawPothos ) {

    if( key === 'w' ) {
      drawFunction = drawMacrame;
    }
    if( key === 'i' ) {
      drawFunction = drawIntermediate;
      }
    else if( key === 'b' ) {
      drawFunction = drawBeginner;
    }
  }

    // intermediate [i]
  else if( drawFunction === drawIntermediate ) {

      if( key === 'l' ) {
      drawFunction = drawMonstera;
    }
      if( key === 'a' ) {
      drawFunction = drawAdvanced;
    }
      if( key === 'c' ) {
      drawFunction = drawAfricanmask;
    }
      if( key === 'b' ) {
      drawFunction = drawBeginner;
    }
      else if( key === 'm' ) {
      drawFunction = drawMainpage;
      }
  }

  // monstera [l] 
  else if( drawFunction === drawMonstera ) {

    if( key === 'i' ) {
      drawFunction = drawIntermediate;
    }
    if( key === 'h' ) {
      drawFunction = drawHumidifier;
      }
    else if( key === 'a' ) {
      drawFunction = drawAdvanced;
    }
  }

   // African mask [l] 
  else if( drawFunction === drawAfricanmask ) {

    if( key === 'i' ) {
      drawFunction = drawIntermediate;
      }
    if( key === 'q' ) {
      drawFunction = drawPerlite;
    }
    else if( key === 'a' ) {
      drawFunction = drawAdvanced;
    }
  }

      // advanced [a]
  else if( drawFunction === drawAdvanced ) {

      if( key === 't' ) {
      drawFunction = drawCalathea;
      }
      if( key === 'f' ) {
      drawFunction = drawFiddle;
      }
      if( key === 'i' ) {
      drawFunction = drawIntermediate;
      }
      else if( key === 'm' ) {
      drawFunction = drawMainpage;
      }
  }

     // Calathea [t] 
  else if( drawFunction === drawCalathea ) {

    if( key === 'a' ) {
      drawFunction = drawAdvanced;
      }
    if( key === 'i' ) {
      drawFunction = drawIntermediate;
      }
    else if( key === 'e' ) {
      drawFunction = drawMister;
    }
  }

       // Fiddle [f] 
  else if( drawFunction === drawFiddle ) {

    if( key === 'a' ) {
      drawFunction = drawAdvanced;
      }
    if( key === 'i' ) {
      drawFunction = drawIntermediate;
      }
    else if( key === 'h' ) {
      drawFunction = drawHumidifier;
    }
  }

    // mister [t]
  else if( drawFunction === drawMister ) {
      if( key === 'u' ) {
      drawFunction = drawCactus;
    }
      else if( key === 't' ) {
      drawFunction = drawCalathea;
    }
  }

    //  macrame[w]
  else if( drawFunction === drawMacrame ) {
      if( key === 'p' ) {
      drawFunction = drawPothos;
    }
      else if( key === 't' ) {
      drawFunction = drawCalathea;
    }
  }

    // humidifier [h]
  else if( drawFunction === drawHumidifier ) {
      if( key === 'f' ) {
      drawFunction = drawFiddle;
    }
    if( key === 'l' ) {
      drawFunction = drawMonstera;
    }
  }

  // perlite [q]
  else if( drawFunction === drawPerlite ) {
      if( key === 'c' ) {
      drawFunction = drawAfricanmask;
    }
  }

}