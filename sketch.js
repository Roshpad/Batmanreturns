const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var thunder,thunder1,thunder2,thunder3,thunder4;
var engine,world;
var drops = [];
var rand;
var maxDrops = 100;
var thunderCreatedFrame = 0;


function preload(){
    thunder = loadImage
    thunder2
    thunder3
    thunder4
}

function setup(){
 engine = Engine.created();
 world = engine.world;createCannvas(400,650);
 umberlla = new Umberlla(200,450);
 if(frameCount%150===0){
     for(var i = o; i<maxDrops;i++)
     drops.oush(new drops(random(0,400),random(0,400)))

 }  
    
}

function draw(){
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1.4))
    if(frameCount%80===0)(
        thunderCreatedFrame = frameCount
        thunder = createSprite(random(10,370),random(10,30),10,10)
         switch(rand){
             case 1: thunder.addImage(thunder1)
             break;
             case 2: thunder.addImage(thunder2)
             break;
             case 3: thunder.addImage(thunder3)
             break;
             case 4: thunder.addImage(thunder4)
             break;
              default:break;

         }
         thunder.scale = random(0,3,0.6)

        
        if(thunderCreatedFrame+10===frameCount && thunder){
            thunder.destroy();
        }
        umbrella.display();
        for(var i = 0; i<maxDraps ; i++){
            drops[i].showDrops();
            drops[i].updateY();
        }
        drawSprites();
}


         
    

   

