class Pollito {
    constructor(){

this.x= 50 //position x
this.y= 150 //position y
this.h = 35 // height
this.w = 35 // largeur
this.speed = 2;
this.jumpspeed = 50
this.img = new Image()
this.img.src = "./images/flappy.png"

    }
// metodos

//dessin pollito
drawPollito= () =>{
    ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      );
}



// pollitoMovimiento()
gravityPollito = () => {

    if(this.y < canvas.clientHeight - this.h ){
        this.y += this.speed   
    }
 
}

jumpPollito = () =>{
    this.y -= this.jumpspeed
    }


// 1 limpiar el canvas

//
        //que el pollito baje
        //que el pollito sube

}
