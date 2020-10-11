class stone{

    constructor(){
    var options = {
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
    
    
    
    }
    this.body = Bodies.rectangle(600, 300, 350,350, options)
    World.add(world, this.body)
    this.image = loadImage("sprites/sprites/stone.png")
    
    
    
    }
    display(){
        rectMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,350,350)
    
    
    
    }
}