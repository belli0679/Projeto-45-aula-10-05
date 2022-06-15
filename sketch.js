var gato, gatoImg, gatoBocaAberta;

var fundo;

var zeroCoracoes, umCoracao, doisCoracoes, tresCoracoes;
var zeroCoracoesImg, umCoracaoImg, doisCoracoesImg, tresCoracoesImg;

var zeroEstrelas, umaEstrela, duasEstrelas, tresEstrelas;
var zeroEstrelasImg, umaEstrelaImg, duasEstrelasImg, tresEstrelasImg;

var trofeu;

var grupoComidas;
var bubbleTea, drink, frango, pudim, tortinha;

var obs, grupoObs
var arma, ca, veneno;

var score = 0;


function preload() {
  fundo = loadImage("./assets/elementos/fundo.jpg");

  gatoImg = loadImage("./assets/gato/gato_boca_fechada.png");
  gatoBocaAberta = loadImage("./assets/gato/gato_boca_aberta.png");

  zeroCoracoesImg = loadImage("./assets/elementos/0_coracoes.png");
  umCoracaoImg = loadImage("./assets/elementos/1_coracao.png");
  doisCoracoesImg = loadImage("./assets/elementos/2_coracoes.png");
  tresCoracoesImg = loadImage("./assets/elementos/3_coracoes.png");

  zeroEstrelasImg = loadImage("./assets/elementos/0_estrelas.png");
  umaEstrelaImg = loadImage("./assets/elementos/1_estrela.png");
  duasEstrelasImg = loadImage("./assets/elementos/2_estrelas.png");
  tresEstrelasImg = loadImage("./assets/elementos/3_estrelas.png");

  trofeu = loadImage("./assets/elementos/trofeu.png");

  bubbleTea = loadImage("./assets/obs/food/bubble_tea.png");
  drink = loadImage("./assets/obs/food/drink.png");
  frango = loadImage("./assets/obs/food/frango.png");
  pudim = loadImage("./assets/obs/food/pudim.png");
  tortinha = loadImage("./assets/obs/food/tortinha.png");

  arma = loadImage("./assets/obs/not food/arma.png");
  ca = loadImage("./assets/obs/not food/camera.png");
  veneno = loadImage("./assets/obs/not food/veneno.png");

  grupoComidas = new Group();


}

function setup() {
  createCanvas(1920, 937);

  gato = createSprite(960, 730);
  gato.addImage("normal", gatoImg);
  gato.debug = true;
  gato.setCollider("rectangle", 0, 0, 200, 320);  

  


}

function draw() {
  background(fundo);

  drawSprites();

  moverGato();

  comidasAleatorias();

  fill("white");
  textSize(30);
  text("Score:" + score, 60, 100);

  gatoComendo();



  console.log(mouseY);
  
}

function moverGato() { 
  if(keyDown("LEFT_ARROW") && gato.x >= 0){
    gato.x -= 15;
  }

  if(keyDown("RIGHT_ARROW") && gato.x <= 1900){
    gato.x +=15;
  }


}

function comidasAleatorias() {
  if (frameCount % 50 === 0) {
    comidas = createSprite(random(100, 1910), 0, 100, 100);
    comidas.velocityY = 6;
    comidas.scale = 0.5;
    comidas.debug = true
    comidas.setCollider("rectangle", 0, 0, 150, 220);
    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: comidas.addImage("comida1", bubbleTea);
        break;
        case 2: comidas.addImage("comida2", drink);
        break;
        case 3: comidas.addImage("comida3", frango);
        break;
        case 4: comidas.addImage("comida4", pudim);
        break;
        case 5: comidas.addImage("comida5", tortinha);
        break;
    }

    comidas.lifetime = 180;

    grupoComidas.add(comidas);

  }

}

function gatoComendo() {
  for (var i = 0; i < grupoComidas.length; i++) {
    if (grupoComidas.get(i).isTouching(gato)) {
        grupoComidas.get(i).destroy();
        score++;
      }
    }


}