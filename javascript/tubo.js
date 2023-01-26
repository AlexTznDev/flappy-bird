class Tubo {
  //propriedas de los tubes
  constructor(yPos, isTuboImgUp) {
    this.x = canvas.width + 100;
    this.y = yPos;
    this.w = 50;
    this.h = 200;
    this.speed = 2;
    this.img = new Image();
    if(isTuboImgUp === true){
        this.img.src = "../images/obstacle_top.png" ;
    }else{
        this.img.src = "../images/obstacle_bottom.png"
    }
    
  }

  //methode

  drawTubo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  // que los tubos avencen

  moveTubo = () => {
    this.x -= 2;
  };
}
