# String to Binary to Image Encrypter/Decrypter

This project is a web-based tool for encrypting and decrypting a message using an image generated from binary data. The user enters a message, and the tool converts it to binary data, which is then used to generate an image. The resulting image can be saved and shared with others. To decrypt the message, the recipient loads the image into the tool, and the tool decodes the binary data to reveal the original message.

## Usage


To use the tool, simply open `index.html` in your web browser. You will see a form with an input field for the message, a slider to set the number of rows and columns for the image (which must be a power of 2), and a button to save the image. 

Once you have entered a message and set the number of rows and columns, the tool will generate an image based on the binary data derived from the message. You can save the image by clicking the "Save" button.

To decrypt a message that has been encoded in an image, simply load the image into the tool and the decrypted message will be displayed below the image.

## File structure

- `index.html`: The HTML file for the web page
- `sketch.js`: The JavaScript file that contains the code for the tool
- `style.css`: The CSS file that styles the web page
- `README.md`: This file

## Dependencies

- [p5.js](https://p5js.org/): A JavaScript library for creative coding
- [p5.sound](https://p5js.org/reference/#/libraries/p5.sound): A p5.js library for working with sound
- [cdnjs.cloudflare.com/ajax/libs/p5.js](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js): A CDN for the p5.js library
- [cdnjs.cloudflare.com/ajax/libs/p5.js](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/addons/p5.sound.min.js): A CDN for the p5.sound library

## Credits

This project was created by [lazy-coder-03](https://github.com/lazy-coder-03)