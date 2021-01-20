class Ball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:1,
			density:1.2

			
      }
    
		this.x=x;
		this.y=y;
    this.r=r
	this.image=loadImage("sprites/paper.png")
	this.scale=0.00000001
		this.body=Bodies.circle(this.x, this.y, this.r/0.4 , options)
		World.add(world, this.body);

	}
	display()
	{
			
			var ballpos=this.body.position;		

			push()
			translate(ballpos.x, ballpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("red")
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
			pop()
			
	}

}
  
  
    