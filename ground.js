class ground {

    constructor(x,y)
    {
        var options={
            'isStatic' : true,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
    };
    this.x = x;
    this.y = y;
    this.body = Bodies.rect(x,y,800,30,options);
    World.add(world, this.body);
    };
    
    display()
    {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x, pos.y, 800,30);
        };
    };