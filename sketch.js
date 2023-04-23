let stringInput, numRectsSlider, numRectsValue, decryptedMessage, saveButton;

let numRects = 4;

function setup() {
  let s=min(windowWidth,windowHeight)
  let canvas = createCanvas(s/2, s/2);
  canvas.parent("canvas-container");
  frameRate(1);

  // Get the HTML elements
  stringInput = document.getElementById("string-input");
  numRectsSlider = document.getElementById("num-rects-slider");
  numRectsValue = document.getElementById("num-rects-value");
  decryptedMessage = document.getElementById("decrypted-message");
  saveButton = document.getElementById("save-button");

  // Set the initial values of the HTML elements
  stringInput.value = "www.github.com/lazy-coder-03";
  numRectsSlider.value = numRects;

  // Add event listeners to the HTML elements
  stringInput.addEventListener("input", draw);
  numRectsSlider.addEventListener("input", updateNumRects);
  saveButton.addEventListener("click", saveCanvasAsPNG);
}

function draw() {
  background(220);

  let stringToEncode = stringInput.value;
  let binaryData = "";

  // Convert the string to binary
  for (let i = 0; i < stringToEncode.length; i++) {
    // Convert each character to its ASCII code
    let asciiCode = stringToEncode.charCodeAt(i);
    // Convert the ASCII code to binary and add leading zeros to make it 8 bits
    let binaryCode = ("00000000" + asciiCode.toString(2)).slice(-8);
    binaryData += binaryCode;
  }

  // Update the number of rectangles value
  numRectsValue.innerHTML =
    "Resolution : " + pow(2, numRects) + "x" + pow(2, numRects);

  // Draw the grid and fill in black for 0 and white for 1
  let rectSize = width / pow(2, numRects);
  for (let x = 0; x < width; x += rectSize) {
    for (let y = 0; y < height; y += rectSize) {
      let index = (y / rectSize) * pow(2, numRects) + x / rectSize;
      if (binaryData.charAt(index) === "0") {
        fill(0);
      } else {
        fill(255);
      }

      stroke(200);
      rect(x, y, rectSize, rectSize);
    }
  }

  decryptedMessage.innerHTML = "Decrypted String : " + decryptString();
}

function updateNumRects() {
  numRects = numRectsSlider.value;
  draw();
}

function decryptString() {
  let binaryData = "";
  let rectSize = width / pow(2, numRects);
  for (let y = 0; y < height; y += rectSize) {
    for (let x = 0; x < width; x += rectSize) {
      let index = (y / rectSize) * pow(2, numRects) + x / rectSize;
      let col = get(x + rectSize / 2, y + rectSize / 2);
      if (red(col) < 128) {
        binaryData += "0";
      } else {
        binaryData += "1";
      }
    }
  }
  let binaryCodes = [];
  for (let i = 0; i < binaryData.length; i += 8) {
    binaryCodes.push(binaryData.slice(i, i + 8));
  }
  let asciiChars = binaryCodes.map((code) =>
    String.fromCharCode(parseInt(code, 2))
  );

  asciiChars = asciiChars.join("");
  asciiChars = asciiChars.replace(/\u00FF+$/, "");
  return asciiChars;
}
function saveCanvasAsPNG() {
  let stringToEncode = stringInput.value;
  let filename;
  fileName =
    stringInput.value.slice(0, 16) +
    "_" +
    pow(2, numRects) +
    "X" +
    pow(2, numRects) +
    ".png";
  saveCanvas(fileName, "png");
}
