//anamation intro

// setup canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 750;
cnv.height = 750;

//global variables'
let rectX = 300;
let rectdia = 300;
let rectX2 = 350;
let rectdia2 = 350;

let wKeyIsPressed = false;
let aKeyIsPressed = false;
let sKeyIsPressed = false;
let dKeyIsPressed = false;
let ArrowUpKeyIsPressed = false;
let ArrowDownKeyIsPressed = false;
let ArrowRightKeyIsPressed = false;
let ArrowLeftKeyIsPressed = false;

setInterval(10);

// event stuff
document.addEventListener("keydown", KeydownHandler);
document.addEventListener("keydown", KeydownHandler2);

// draw a square
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(rectX2, rectdia2, 50, 50);

// draw a square
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(rectX, rectdia, 50, 50);

requestAnimationFrame();
function KeydownHandler(event) {
  if (event.code == "KeyW" && rectdia > 0) {
    wKeyIsPressed = true;
    rectdia += -20;
    rectX += 0;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (wKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX, rectdia, 50, 50);
    }
  } else if (event.code == "KeyA" && rectX > 0) {
    aKeyIsPressed = true;
    rectdia += 0;
    rectX += -20;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (aKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX, rectdia, 50, 50);
    }
  } else if (event.code == "KeyS" && rectdia < 700) {
    sKeyIsPressed = true;
    rectdia += 20;
    rectX += 0;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (sKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX, rectdia, 50, 50);
    }
  } else if (event.code == "KeyD" && rectX < 700) {
    dKeyIsPressed = true;
    rectdia += 0;
    rectX += 20;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (dKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX, rectdia, 50, 50);
    }
  } else if (event.code == "ArrowUp" && rectdia2 > 0) {
    ArrowUpKeyIsPressed = true;
    rectdia2 += -20;
    rectX2 += 0;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (ArrowUpKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX2, rectdia2, 50, 50);
    }
  } else if (event.code == "ArrowLeft" && rectX2 > 0) {
    ArrowLeftKeyIsPressed = true;
    rectdia2 += 0;
    rectX2 += -20;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (ArrowLeftKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX2, rectdia2, 50, 50);
    }
  } else if (event.code == "ArrowDown" && rectdia2 < 700) {
    ArrowDownKeyIsPressed = true;
    rectdia2 += 20;
    rectX2 += 0;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (ArrowDownKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX2, rectdia2, 50, 50);
    }
  } else if (event.code == "ArrowRight" && rectX2 < 700) {
    ArrowRightKeyIsPressed = true;
    rectdia2 += 0;
    rectX2 += 20;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (ArrowRightKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX2, rectdia2, 50, 50);
    }
  }

  requestAnimationFrame();
}

requestAnimationFrame();
function KeydownHandler2(event) {
  if (event.code == "ArrowUp" && rectdia2 > 0) {
    ArrowUpKeyIsPressed = true;
    rectdia2 += -20;
    rectX2 += 0;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (ArrowUpKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX2, rectdia2, 50, 50);
    }
  } else if (event.code == "ArrowLeft" && rectX2 > 0) {
    ArrowLeftKeyIsPressed = true;
    rectdia2 += 0;
    rectX2 += -20;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (ArrowLeftKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX2, rectdia2, 50, 50);
    }
  } else if (event.code == "ArrowDown" && rectdia2 < 700) {
    ArrowDownKeyIsPressed = true;
    rectdia2 += 20;
    rectX2 += 0;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (ArrowDownKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX2, rectdia2, 50, 50);
    }
  } else if (event.code == "ArrowRight" && rectX2 < 700) {
    ArrowRightKeyIsPressed = true;
    rectdia2 += 0;
    rectX2 += 20;

    //draw a backround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (ArrowRightKeyIsPressed) {
      // draw a square
      ctx.fillStyle = "rgb(0, 255, 0)";
      ctx.fillRect(rectX2, rectdia2, 50, 50);
    }
  }

  requestAnimationFrame();
}
