var canvas;
var blueBlock,orangeBlock,redBlock,greenBlock;
var ball, edges;
var music;

function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,550);

    blueBlock = createSprite(0,530,360,30);
    blueBlock.shapeColor = "blue";

    orangeBlock = createSprite(295,530,200,30);
    orangeBlock.shapeColor = "orange";

    redBlock=createSprite(510,530,200,30);
    redBlock.shapeColor="red";

    greenBlock=createSprite(725,530,200,30);
    greenBlock.shapeColor="green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=5;
    ball.velocityY=5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(blueBlock.isTouching(ball) && ball.bounceOff(blueBlock)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(orangeBlock.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX=0;
        ball.velocityY=0

        //write code to stop music
    }

    /*if(isTouching(ball,redBlock)&&ball.bounceOff(redBlock)){
        
        ball.shapeColor="red";
        music.play();
    }

    if(isTouching(ball,greenBlock)&&ball.bounceOff(greenBlock)){
        
        ball.shapeColor="green";
        music.play();
    }*/

    if(redBlock.isTouching(ball)&&ball.bounceOff(redBlock)){
        ball.shapeColor="red";
        music.play();
    }

    if(greenBlock.isTouching(ball)&&ball.bounceOff(greenBlock)){
        ball.shapeColor="green";
        music.play();
    }

    drawSprites();
}