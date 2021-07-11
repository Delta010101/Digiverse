var homescreen, homescreen_img;
var playbutton, playbutton_img;
var settingsbutton, settingsbutton_img;

var login_button, login_button_img;
var quit_button, quit_button_img;

var buttonPressSound;

function preload(){
    homescreen_img = loadImage('Assets/Digiverse Homescreen.png');
    playbutton_img = loadImage('Assets/Digiverse Play Button.png');
    settingsbutton_img = loadImage('Assets/Digiverse Settings Button.png');
    login_button_img = loadImage('Assets/Digiverse Log in.png');
    quit_button_img = loadImage('Assets/Digiverse Quit.png');
    buttonPressSound = loadSound('Audio Assets/Digiverse Button Press.mp3')
}
function setup(){
    createCanvas(windowWidth, windowHeight);

    homescreen = createSprite(windowWidth/2, windowHeight/2, windowWidth/2, "100%", "100%");
    homescreen.addImage(homescreen_img);
    homescreen.scale=1.1;

    playbutton = createSprite(windowWidth/2, windowHeight/2+50, 200, 100);
    playbutton.addImage(playbutton_img);
    playbutton.scale = 0.3;

    settingsbutton = createSprite(windowWidth/2, windowHeight/2+270, 200, 100);
    settingsbutton.addImage(settingsbutton_img);
    settingsbutton.scale = 0.3;

    login_button = createSprite(windowWidth/2-570, windowHeight/2+270, 50, 50);
    login_button.addImage(login_button_img);
    login_button.scale = 0.3;

    quit_button = createSprite(windowWidth/2+570, windowHeight/2+270, 50, 50);
    quit_button.addImage(quit_button_img);
    quit_button.scale = 0.3;
}

function draw(){
    
    drawSprites();
    playerControls();
    button_control();
    debug();
}

function playerControls(){

    //WASD Moving Controls
    if((keyIsDown(87) || keyIsDown(UP_ARROW))){
        player.y -= 10;
    }
    //S
    if ((keyIsDown(83) || keyIsDown(DOWN_ARROW))) {
        player.y += 10;
      }
    //A
      if ((keyIsDown(65) || keyIsDown(LEFT_ARROW))) {
        player.x -= 10;
      }
    //D
      if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW))) {
        player.x += 10;
      }
      
    //For the player to point to the mouse
    //player.pointTo(100,100);
    //player.pointTo(mouseX,mouseY);
}

function button_control(){
  if(mousePressedOver(playbutton)){
    playbutton.destroy();
    buttonPressSound.play();
  }

  if(mousePressedOver(settingsbutton)){
    settingsbutton.destroy();
    buttonPressSound.play();
  }

  if(mousePressedOver(login_button)){
    login_button.destroy();
    buttonPressSound.play();
  }

  if(mousePressedOver(quit_button)){
    quit_button.destroy();
    buttonPressSound.play();
  }
}

function debug(){
  playbutton.debug = false;
    playbutton.setCollider("rectangle", 0, 0, 1200, 500);

    settingsbutton.debug = false;
    settingsbutton.setCollider("rectangle", 0, 0, 1100, 500);

    login_button.debug = false;
    login_button.setCollider("rectangle", 0, 0, 500,500);

    quit_button.debug = false;
    quit_button.setCollider("rectangle", 0, 0, 500,500);
    
}