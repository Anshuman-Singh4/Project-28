class ground{

    constructor(){
    var options = {
    isStatic:true
    
    
    }
    this.body = Bodies.rectangle(400, 650, 1000,5, options)
    World.add(world, this.body)
 
    
    
    
    }
    display(){
        rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,1000,5)
    
    
    }
    }