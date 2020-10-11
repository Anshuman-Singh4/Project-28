class boy{
    constructor(){
    var options = {
    isStatic:true
    
    
    }
    this.body = Bodies.rectangle(300,300, 60, 60, options)
    World.add(world, this.body)
    this.image = loadImage("sprites/sprites/boy.png")
 
    
    
    
    }
    display(){
        rectMode(CENTER)
    rect(this.image,this.body.position.x,this.body.position.y,60,60)
    
    
    }
    }