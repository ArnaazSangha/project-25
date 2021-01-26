

class Dustbin {
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.width=200;
		this.height=100;
		this.thickness=20;
		this.angle=0;
        var options={
			isStatic:true,
			
		}
		this.bottom=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
		World.add(world,this.bottom);

		this.left=Bodies.rectangle(this.x-this.width/2,this.y-this.width/2,this.thickness,this.height,options);
		Matter.Body.setAngle(this.left,this.angle)
		W
		


		
	}
}



