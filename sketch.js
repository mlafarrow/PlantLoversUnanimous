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

//beginner through advanced variables
var maintitleX = 112;
var maintitleY = 80; 

var plant1X = 110;
var plant1Y = 220;

var plant2X = 110; 
var plant2Y = 740;

var text1X = 574;
var text1Y = 220;

var text2X = 574;
var text2Y = 740;

var button1X = 574;
var button1Y = 587;

var button2X = 574;
var button2Y = 1121;

// next page variables
var nextY = 1270; 


//things to buy variables
var imageleftX = 228;
var row1Y = 240;
var imagerightX = 686;
var row2Y = 810;

var textrow1Y = 583;
var textrow2Y = 1153;

//navigation
var navKey = [];

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
  thingstobuyAssets[5] = loadImage('assets/macrametext.png'); //macrame text
  thingstobuyAssets[6] = loadImage('assets/humidifiertext.png'); //humidifier text
  thingstobuyAssets[7] = loadImage('assets/perlitetext.png'); //perlite text
  thingstobuyAssets[8] = loadImage('assets/spritzertext.png'); //mister text

}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(1280, 1422);
  textAlign(CENTER);
  textSize(28);
  noStroke();

  //setting the navigation key array
  navKey[0] = ('[m]');
  navKey[1] = ('[b]');
  navKey[2] = ('[i]');
  navKey[3] = ('[a]');
  navKey[4] = ('[t]');

  // startup room
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
   image(beginnerAssets[2], text1X, text1Y);  //paragraph 1
   image(beginnerAssets[3], button1X, button1Y); //suggestion button
   image(beginnerAssets[4], plant2X, plant2Y); //plant 2
   image(beginnerAssets[5], text2X, text2Y);  //paragraph 2
   image(beginnerAssets[6], button2X, button2Y); //suggestion button
   image(beginnerAssets[7], button2X, nextY); //next page button
}

//draws images from intermediateAssets array
drawIntermediate = function() {
 background(239, 237, 180); 

   //images in array
   image(intermediateAssets[0], maintitleX, maintitleY);  //subtitle
   image(intermediateAssets[1], plant1X, plant1Y); //first plant
   image(intermediateAssets[2], text1X, text1Y);  //paragraph 1
   image(intermediateAssets[3], button1X, button1Y); //suggestion button
   image(intermediateAssets[4], plant2X, plant2Y); //plant 2
   image(intermediateAssets[5], text2X, text2Y);  //paragraph 2
   image(intermediateAssets[6], button2X, button2Y); //suggestion button
   image(intermediateAssets[7], button2X, nextY); //next page button
}

//draws images from advancedAssets array
drawAdvanced = function() {
 background(239, 237, 180); 

   //images in array
   image(advancedAssets[0], maintitleX, maintitleY);  //subtitle
   image(advancedAssets[1], plant1X, plant1Y); //first plant
   image(advancedAssets[2], text1X, text1Y);  //paragraph 1
   image(advancedAssets[3], button1X, button1Y); //suggestion button
   image(advancedAssets[4], plant2X, plant2Y); //plant 2
   image(advancedAssets[5], text2X, text2Y);  //paragraph 2
   image(advancedAssets[6], button2X, button2Y); //suggestion button
   image(advancedAssets[7], button2X, nextY); //next page button
}

//draws images from thingstobuyArray
drawThingstobuy = function() {
   background(239, 237, 180);

   //images in array
   image(thingstobuyAssets[0], maintitleX, maintitleY);  //subtitle
   image(thingstobuyAssets[1], imageleftX, row1Y); //macrame
   image(thingstobuyAssets[2], imagerightX, row1Y);  //humidifier
   image(thingstobuyAssets[3], imageleftX, row2Y); //perlite
   image(thingstobuyAssets[4], imagerightX, row2Y);  //spritzer  
   image(thingstobuyAssets[5], imageleftX, textrow1Y);  //macrame text
   image(thingstobuyAssets[6], imageleftX, textrow2Y); //humidifier text
   image(thingstobuyAssets[7], imagerightX, textrow1Y);  //perlite text
   image(thingstobuyAssets[8], imagerightX, textrow2Y); //spritzer text
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
      if( key === 't' ) {
      drawFunction = drawThingstobuy;
    }
    if( key === 'i' ) {
      drawFunction = drawIntermediate;
    }
    else if( key === 'm' ) {
      drawFunction = drawMainpage;
      }
  }

    // intermediate [i]
  else if( drawFunction === drawIntermediate ) {

      if( key === 't' ) {
      drawFunction = drawThingstobuy;
    }
      if( key === 'a' ) {
      drawFunction = drawAdvanced;
    }
      if( key === 'm' ) {
      drawFunction = drawMainpage;
    }
      else if( key === 'b' ) {
      drawFunction = drawBeginner;
    }
  }

      // advanced [a]
  else if( drawFunction === drawAdvanced ) {

      if( key === 't' ) {
      drawFunction = drawThingstobuy;
      }
      if( key === 'i' ) {
      drawFunction = drawIntermediate;
      }
      if( key === 'm' ) {
      drawFunction = drawMainpage;
      }
  }

    // Things to buy [t]
  else if( drawFunction === drawThingstobuy ) {
      if( key === 'm') {
      drawFunction = drawMainpage;
    }
      if( key === 'b' ) {
      drawFunction = drawBeginner;
    }
      if( key === 'i' ) {
      drawFunction = drawIntermediate;
    }
      else if( key === 'a' ) {
      drawFunction = drawAdvanced;
    }
  }
}