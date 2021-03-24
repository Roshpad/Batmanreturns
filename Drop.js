class Drop{
    constructor(x,y){
        var options ={
            friction:0.001,
            restitution:0.1

        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
       World.add(world,thos.rain)

    }
    updateY(){
        if(this.rain.postion.y>height){
            Matter.Body.setPostion(this.rain,{x:random(0,400),y:random(0,400)})

        }

    }
    showDrop(){
        Fill("blue");
        ellipseMode(CENTTR)
        ellipse(this.rain.postion.x,this.postion.y,this.radius,this.radius)
    }
}