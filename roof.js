class roof {
	constructor(x,y,w,h) {
		var options = {
			isStatic:true			
		}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body = Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
		this.image = loadImage("NCtopBar.png");

	}
	display() {	
		var groundPos = this.body.position;		
		push();
		translate(groundPos.x, groundPos.y);
		rectMode(CENTER);
		fill(128, 128, 128);
		rect(0,0,this.w, this.h);
		imageMode(CENTER);
        image(this.image, 0, 50, this.w, this.h+100);
		pop();
	}
}