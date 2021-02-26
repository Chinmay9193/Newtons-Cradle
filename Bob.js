class Bob{
    //objects have properties and functions
    //properties in a class(blueprint) is mentioned inside constructor()
    constructor(x,y,radius){
        var options = {
            restitution: 1,
            isStatic:false,
            density: 0.5,
            friction: 0
          }
          this.body = Bodies.circle(x,y,radius,options);
          this.radius= radius;
          
          World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4)
        stroke("green")
        fill("white")
        ellipse(0,0,this.radius,this.radius)
        pop();
    }

}