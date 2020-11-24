class Paper{
    constructor(x,y){
       var options = {
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
      this.x=x;
      this.y=y;
       this.body=Bodies.circle(this.x,this.y,20,options);
       this.r=20;
       World.add(world,this.body);
    }
    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        ellipseMode(CENTER);
        fill(255,0,255);
        ellipse(0,0,this.r*2,this.r*2);
        pop();
    }
    
       
    
    }