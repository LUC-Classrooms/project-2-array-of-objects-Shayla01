/*
 Project 2 - Array of Objects
 Name: Shyala Salvatori 
 Comments: Array of red mushrooms with white dots and a white stem, the mushrooms will change design to red top and yellow stem with black vertical lines on it when the mouse is pressed. 
 It seems like there are less mushrooms in the array when the mouse is pressed, but I believe that is just in the spacing of the mushrooms on the canvas. 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var mushrooms = new Array (12); // array of 12 mushrooms 
var black = 0; //black
var white = 255; //white
var r = [255, 0, 0]; //red
var yellow  = [255, 255, 150]; //yellow
var g = [144, 238, 144] //light green 
this.direction = 1; // movement of the mushrooms 

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
  for(let i =0; i < mushrooms.length; i++){ //loop
    mushrooms[i] = new Mushroom(random (width), random (height)); //random width and height 
     mushrooms[i].shrink(random(.3,.8)) //scale of the mushrooms between .3 and .8
   } // end of for function 
  } // end of setup function 

function draw(){
  background(g); //light gray background
  for(let i = 0; i < mushrooms.length; i++){ //loop
    mushrooms[i].display(); // display the mushrooms 
    mushrooms[i].move(); // mushroom movement on the canvas 
  } // end of for function 
  } // end of draw function 

function Mushroom(tempX, tempY) { // mushroom function variables 
  this.x = tempX; // x value
  this.y = tempY; // y value
  this.direction = 1; // direction of movement
  this.s = 1; // scale

  this.move = function(){
  //* mushroom moves horoznally across the canvas 
  this.x += 2 *this.direction;
  //* reverse direction when the mushroom reaches the end 
  if (this.x >= width - 50 || this.x <= 50) {
  this.direction *= -1; 
  } // end of if function to reverse when the mushroom reaches the end 
} // end of move function 

  this.shrink = function(s){ //shrinking effect on mushrooms 
    this.s = s; // scale 
  } // end of shrink function 


  this.display = function(){ //display fucntion; mushroom template for the mushrooms in array 

    push();
    translate (this.x, this.y) // translate on the canvas 
    if(mouseIsPressed){ // if mouse is pressed, display code below 
    //check each frame to see if the mouse is pressed, then do something
    //red cap 
    scale(this.s); // scale
    fill(r); //red fill 
    noStroke(); //no outline
    arc(0, 25, 100, 100, PI, TWO_PI); // semi-circle cap  

    //yellow stem
    fill(yellow); //yellow fill 
    stroke(black); //black outline
    strokeWeight(1.2);
    rect(- 13, 25, 30, 70); //stem 

    //vertical lines on stem 
    stroke(black); // black outline 
    strokeWeight(0.7);
    line(- 10, 25, - 10, 95); //first line on stem 
    line(-6, 25, -6, 95); // second line on stem 
    line(-2, 25, -2, 95); //third line on stem 
    line(1.5, 25, 1.5, 95); //fourth line on stem 
    line(5, 25, 5, 95); //fifth line on stem 
    line(9, 25, 9, 95); //sixth line on stem 
    line (13, 25, 13, 95); //seventh line on stem 

  } else { // if mouse is not pressed, display code below 
    // do something here if the mouse is NOT pressed
    scale(this.s);// scale 
 //red cap 
 fill(r); //red fill
 noStroke(); //no outline
 arc(0, 25, 100, 100, PI, TWO_PI); // semi-circle cap 

 // larger white dots with outline 
 fill(white); // dot fill
 stroke(black); // outline
 strokeWeight(0.5);
 ellipse (- 23, - 5, 10, 10); 
 ellipse(20,- 6, 10, 10); 
 ellipse(0, 10, 10, 10);
 
 //smaller white dots with outline 
 fill(white); //fill 
 stroke(black); //outline
 strokeWeight(0.5);
 ellipse (- 32 , 13, 6, 6);
 ellipse(30, 15, 6, 6);
  
 //white stem 
 fill(white); //white fill 
 stroke(black); //outline
 strokeWeight(1.2);
 rect(- 13, 25, 30, 70); //stem 

 pop();
  }// end of else function 
} // end of display function 
} // end of mushroom function 
