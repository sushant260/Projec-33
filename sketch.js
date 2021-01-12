var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var gamestate="play";
var plinkos = [];
var divisions=[];
var particle,turn=5;
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("500",15,630);
  text("400",95,630);
  text("300",175,630);
  text("200",255,630);
  text("100",335,630);
  text("100",415,630);
  text("200",495,630);
  text("300",575,630);
  text("400",655,630);
  text("500",735,630);
  text("chances : "+turn,20,55)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if (particle!=null){
    particle.display();
    if (particle.body.position.x<80&&particle.body.position.x>0&&
      particle.body.position.y>760||particle.body.position.x>720&&
     particle.body.position.x<800&&particle.body.position.y>760){
       score=score+500;
        particle=null;
        turn--;
           if(turn<=0){
             gamestate="end";
           }
     }
    }

  if (particle!=null){
    particle.display();
  if (particle.body.position.x<160&&particle.body.position.x>80&&
    particle.body.position.y>760||particle.body.position.x>640&&
   particle.body.position.x<720&&particle.body.position.y>760){
     score=score+400;
      particle=null;
      turn--;
         if(turn<=0){
           gamestate="end";
         }
   }
  }
  if (particle!=null){
    particle.display();
  if (particle.body.position.x<240&&particle.body.position.x>160&&
    particle.body.position.y>760||particle.body.position.x>560&&
   particle.body.position.x<640&&particle.body.position.y>760){
     score=score+300;
      particle=null;
      turn--;
         if(turn<=0){
           gamestate="end";
         }
   }
  }
  if (particle!=null){
    particle.display();
  if (particle.body.position.x<320&&particle.body.position.x>240&&
    particle.body.position.y>760||particle.body.position.x>480&&
   particle.body.position.x<560&&particle.body.position.y>760){
     score=score+200;
      particle=null;
      turn--;
         if(turn<=0){
           gamestate="end";
         }
   }
  }
  if (particle!=null){
    particle.display();
  if (particle.body.position.x<380&&particle.body.position.x>300&&
    particle.body.position.y>760||particle.body.position.x>400&&
   particle.body.position.x<480&&particle.body.position.y>760){
     score=score+100;
      particle=null;
      turn--;
         if(turn<=0){
           gamestate="end";
         }
   }
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     ground.display();
   }
   if(score>=2500){
     gamestate="win";
   }
   if(gamestate==="win"){
    textSize(60);
    fill("red");
    text("You Won!!!",220,245);
    world.remove(World,particle)
   }
   if(gamestate==="end"){
    textSize(60);
    fill("yellow");
    text("Game Over!!!",220,245);
   }
}

function mousePressed(){
  
  if(gamestate!="end"){
    particle=new Particle(mouseX,10,10,10);
  }
  }