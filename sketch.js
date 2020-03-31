var canvas
var form
function setup(){
    canvas=createCanvas(1000,1000)
form =new Form()
}
function draw(){
    background("red")
    form.display()
}