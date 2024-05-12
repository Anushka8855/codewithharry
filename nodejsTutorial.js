// console.log("Hellp World");
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Box Model</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          background-color: #edd4f6;
        }
        .container {
          background-color: rgb(231, 230, 241);
          border: 3px solid rgb(64, 6, 119);
  
          /*We can set margin/padding for top, bottom, left, right like this*/
          /* padding-top: 79px;
          padding-bottom: 79px;
          padding-left: 34px;
          padding-right: 79px; */
  
          /* margin-top: 3px;
          margin-bottom: 5px;
          margin-left: 34px;
          margin-right: 5px; */
  
          /*margin = top right bottom left */
          /*padding = top right bottom left */
  
          /* padding: 23px 56px 6px 78px; */
          /* margin: 23px 56px 6px 78px; */
  
          /* padding: y(top/bottom) x(left/right); */
          /* margin: y(top/bottom) x(left/right); */
  
          padding: 34px 19px;
          margin: 14px 19px;
          border-radius: 23px;
          width: 533px;
          box-sizing: border-box;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h3>This is my heading</h3>
        <p id="first">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iure quo
          qui porro, voluptatum mollitia quibusdam soluta consectetur, nesciunt,
          nihil aperiam autem iusto.
        </p>
      </div>
  
      <div class="container">
        <h3>This is my second heading</h3>
        <p id="second">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iure quo
          qui porro, voluptatum mollitia quibusdam soluta consectetur, nesciunt,
          nihil aperiam autem iusto.
        </p>
      </div>
  
      <div class="container">
        <h3>This is my third heading</h3>
        <p id="third">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iure quo
          qui porro, voluptatum mollitia quibusdam soluta consectetur, nesciunt,
          nihil aperiam autem iusto.
        </p>
      </div>
    </body>
  </html>
  `);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});