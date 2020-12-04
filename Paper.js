class Paper {
    constructor(x, y,radius) {
      var options = {
          'isStatic':false,
        'restitution':0.3,
          'friction':0.5,
          'density':1.2
         
      }
      this.Paper1 = loadImage('sprites/paper.png');
    
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
     
      
      World.add(world, this.body);
    }
    display(){
      image(this.Paper1,400,20);
      
      var pos =this.body.position;
      var angle=this.body.angle;
    push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      //fill("purple");
      ellipse(0, 0, this.radius);
      pop();
    }
  };