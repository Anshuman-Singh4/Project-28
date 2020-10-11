class tree{

constructor(){
var options = {
isStatic:true


}
this.body = Bodies.rectangle(600, 300, 350,350, options)
World.add(world, this.body)
this.image = loadImage("sprites/sprites/tree.png")



}
display(){
    rectMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,350,350)



}





}