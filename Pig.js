class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
   //255 means it will be visible.
   //in trex we wrote true or false but here we have to write a number between 0 to 255

    this.visibility = 255;
  }
  display(){
    
    //to display the speed of body in console
    console.log(this.body.speed);

  //if the speed of body is less than any number
  //so the pigs will be displayed
  if(this.body.speed < 2.5 ){
    super.display();  
  }
  else{
    //or the body will be removed when the bird touches it
    World.remove(world,this.body);

    //starting point
    push();
    //the visibility will be deducted from 5 every time we can 
    //take any other number also
    this.visibility = this.visibility-5;
    //tint gives a fading effect
    tint(255,this.visibility);
    //we want to give the fading effect to image 
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
  }
   
  }

};