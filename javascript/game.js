class Game {
  // propiedades

  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";

    this.tuboSeparation = 330;
    this.tubosArray = [];
    this.pollito = new Pollito();
    this.frame = 1; // quantité de frame passé dans le jeux
    this.isGameon = true
    
    //que los tubos avances

    //colission con el tubo
    //colision con el suelo
    // que los tubos apaecen y desaparecen
    // game over
    // pause btn
  }
  
  //métodos

checkColition = () => {
    this.tubosArray.forEach((eachTubo) => {
      if (
        eachTubo.x < this.pollito.x + this.pollito.w &&
        eachTubo.x + eachTubo.w > this.pollito.x &&
        eachTubo.y < this.pollito.y + this.pollito.h &&
        eachTubo.h + eachTubo.y > this.pollito.y
      ) {
        // Collision detected!
        this.gameOver()

      }
    });
  };

gameOver = () => {
    this.isGameon = false

    canvas.style.display= "none"

    gameOverScrreenDOM.style.display = "flex"
}

removeTube = () => {
    if(this.tubosArray[0].x + this.tubosArray[0].w < 0 ){
        this.tubosArray.shift()
    }
}

  drawBg = () => {
    //image background
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  tubosApparecen = () => {

    if (this.tubosArray.length === 0 || this.frame % 120 === 0) {
      let randomPosY = Math.random() * (-100);  
      let tuboArriba = new Tubo(randomPosY, true);
      this.tubosArray.push(tuboArriba);

      let tuboBajo = new Tubo(tuboArriba.y + this.tuboSeparation, false);
      this.tubosArray.push(tuboBajo);
    }
  };

  gameLoop = () => {
    this.frame++;

    // 1. limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 2. movimientos y acciones de todos los elementos

    this.checkColition()
    this.pollito.gravityPollito();

    //mover todos los tubos
    this.tubosArray.forEach((eachTubo) => {
      eachTubo.moveTubo();
    });

    // this.tuboTEst.tuboMovimiento()

    this.tubosApparecen();
    // 3. dibujado de los elementos
    //bg image
    this.drawBg();

    this.tubosArray.forEach((eachTubo) => {
      eachTubo.drawTubo();
    });

    //image pollito
    this.pollito.drawPollito();

    //image tubos
    this.removeTube()

    // 4. recursión y control

    if(this.isGameon === true){
        requestAnimationFrame(this.gameLoop);
    }

  };
}
