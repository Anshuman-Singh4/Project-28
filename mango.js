class mango{

    constructor(){
    var options = {
    isStatic:false,
    restitution:0,
    density:1
    
    
    }
    this.body = Bodies.rectangle(200 ,580, 30, 30, options)
    World.add(world, this.body)
    this.image = loadImage("sprites/sprites/mango.png")
 
    
    
    
    }
    display(){
        rectMode(CENTER)
    rect(this.image,this.body.position.x,this.body.position.y,30,30)
    
    
    }
    }