class paper {
    constructor(x, y, r){
    var options={
        isStatic: true,
        'density': 1,
        'friction': 1,
        'restitution': 0.8 
    };

    this.x = x
    this.y = y
    this.r= r
    this.body = Bodies.circle(this.x, this.y, this.r/2, options)
   
    World.add(world,this.body)
    };
    display()
    {
     var pos = this.body.position

      push()
      translate(pos.x, pos.y)
      rectMode(CENTER)
      fill("pink")
      ellipse(0, 0,this.r,this.r)
      pop()
    };
};