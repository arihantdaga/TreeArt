const depth = 5;
 // The angle each new branch level rotates by (branches spin left/right)
 var curl = Math.PI / 3
 var breadth = 4
 var spread = Math.PI / 3
 zoomLevel = 200


function setup() {
    // Start off by creating a canvas to draw on
    createCanvas(window.windowWidth, window.windowHeight)
    zoomLevel = window.windowWidth > window.windowHeight ? window.windowHeight / 2 : window.windowWidth / 2;
}

function draw() {
    // Set the curl angle with the mouse X position
  curl = Math.PI * ((mouseX / width) * 2 - 1)
  // Set the spread angle with the mouse Y position
  spread = Math.PI * ((mouseY / height) * 2 - 1)
    // Draw a black background
    background(246, 152, 1)
   // Set line color to white
   stroke(0)

   // Move to middle-bottom of canvas
   translate(width / 2, height)

   // Turn canvas 180°
   rotate(Math.PI)

   // Zoom way into the canvas
   scale(zoomLevel)

   // Set thickness to a much smaller, zoomed-in value
   strokeWeight(0.1)

   // Draw a line from (0, 0) to (0, 1)
//    line(0, 0, 0, 1)
    branch(depth);
    
}

function branch(d){
    // Set line color to white
    stroke( (255/d))
    line(0,0,0,1)
    if(d > 1){
        translate(0,1)
        scale(0.5)
        rotate(curl)
        // branch(d-1)
        for(let i = 0; i < breadth ; i++){
            branch(d - 1);
            rotate(spread);   
        }
        // Undo the rotations we applied for each "child" branch
        rotate(-spread * breadth)

        // Undo the curl rotation we applied to this branch
        rotate(-curl)

        // Zoom back out from the canvas
        scale(2)

        // Move back to the start of the line we drew with line(0, 0, 0, 1)
        translate(0, -1)
    }
}