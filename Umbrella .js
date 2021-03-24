class Umbrella {
    constructor(x,y){
        var option = {
            isState:true
        }

        this.Image = loadImage("walking_1.png")
        this.umbrella = Bodies.circle(x,y,50,option);
        this.radius = 50;
        AudioWorkletNode.add(world,this.umbrella)
    }
    display(){
        var pos = this.umbrella.postion
        ImageMode(CENTRE)
        Image(this.Image,pos,pos.x,pos.y+70,300,300);
        
    }
}