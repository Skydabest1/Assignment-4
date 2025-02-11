let img1, img2, img3;
let time = 0; // Time variable for animation
let scaleFactor;

function preload() {
  img1 = loadImage("assets/Ancient_cookie_gacha_reveal.webp");
  img2 = loadImage("assets/Legendary_cookie_gacha_reveal.webp");
  img3 = loadImage("assets/Super_epic_cookie_gacha_reveal.webp");
}

function setup() {
    createCanvas(800, 800);
    scaleFactor = width / 400; // Adjust based on original size
  colorMode(RGB);
  noStroke();
}

function windowResized() {

    // Re-center the canvas after window resize
    let xOffset = (windowWidth - width) / 2;
    let yOffset = (windowHeight - height) / 2;
    canvas.position(xOffset, yOffset);
  }

function draw() {

    scale(scaleFactor); // Scales everything proportionally

  // Redraw gradient background each frame to maintain appearance
  drawGradientBackground();

  // Vertical movement using sine wave
  let yOffset = sin(time) * 10; // Moves up and down by ±10 pixels

  // Draw images with animated vertical movement
  image(img1, 40, 270 + yOffset, 80, 110);
  image(img2, 170, 270 + yOffset, 80, 110);
  image(img3, 300, 270 + yOffset, 80, 110);

  // Increment time to animate smoothly
  time += 0.05;

  fill(255);
  circle(68, 88, 5);
  circle(50, 48, 5);
  circle(205, 51, 5);
  circle(288, 113, 5);
  circle(174, 140, 5);
  circle(154, 95, 5);
  circle(358, 24, 5);
  circle(330, 58, 5);
  circle(250, 75, 5);
  circle(116, 10, 5);
  circle(100, 200, 5);
  circle(25, 150, 5);
  circle(272, 168, 5);
  circle(230, 210, 5);
  circle(336, 146, 5);
  circle(100, 130, 5);
  circle(375, 225, 5);
  circle(5, 70, 5);
  circle(390, 90, 5);
}

// Function to draw gradient background
function drawGradientBackground() {
  let colorA = color(0, 0, 139);
  let colorB = color(255, 0, 0);
  let baseStripeCount = 12; // Original number of stripes at 400px height
  let stripeCount = round(baseStripeCount * (height / 400)); // Scale dynamically
  let stripeHeight = height / stripeCount;

  for (let y = 0; y < height; y += stripeHeight) {
    let fadeAmount = y / height;
    let betweenColor = lerpColor(colorA, colorB, fadeAmount);
    fill(betweenColor);
    rect(0, y, width, stripeHeight);
  }
}