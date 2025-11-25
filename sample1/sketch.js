function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#242a4b');
  
  //biggest원4
  noStroke();
  fill('#384775');
  circle(600,400,1300);
  
  //big원3
  noStroke();
  fill('#41568f');
  circle(600,400,850);

  //small원2
  noStroke();
  fill('#4d65a7');
  circle(600,400,450);
  
  //smallest원1
  fill('#c9def9');
  circle(600,400,200);
  
  //채워진 반짝이 그리기
  fill(255);
  rect(300,300,20);

  noStroke();
  fill('#41568f');
  circle(300,300,20);
  circle(320,320,20);
  circle(300,320,20);
  circle(320,300,20);
  
  strokeWeight(1);
  stroke(255);
  noFill();
  arc(600, 400, 612, 612, radians(198.5),radians(270));
  
  //선
  
  strokeWeight(1);
  stroke(255);
  arc(600, 400, 900, 900, radians(224),radians(270));
  arc(600, 400, 830, 830, radians(235),radians(270));
  
  stroke('#fbe964');
   strokeWeight(1);
  arc(600, 400, 1285, 1285, radians(210),radians(270));
  
  strokeWeight(1.5);
  stroke('#f5fbe4');
  noFill();
  arc(600, 400, 550, 550, radians(208),radians(270));
  
  strokeWeight(2);
  stroke('#f5fbe4');
  noFill();
  strokeWeight(0.7);
  arc(600, 400, 700, 700, radians(180),radians(270));
  strokeWeight(0.3);
  arc(600, 400, 720, 720, radians(200),radians(270));
  arc(600, 400, 880, 880, radians(210),radians(270));
  arc(600, 400, 1070, 1070, radians(180),radians(270));
  arc(600, 400, 1200, 1200, radians(180),radians(205.7));
  arc(600, 400, 1200, 1200, radians(212.5),radians(270));

  stroke('#fbf5c5');
  arc(600, 400, 330, 330, radians(210),radians(270));
  arc(600, 400, 345, 345, radians(200),radians(270));
  strokeWeight(2);
  arc(600, 400, 400, 400, radians(180),radians(270));
  arc(600, 400, 700, 700, radians(180),radians(270));
  strokeWeight(1);
  arc(600, 400, 1055, 1055, radians(200),radians(270));
  
  //중간 반짝이
  stroke(255);
  strokeWeight(1.3);
  arc(600, 400, 986.7, 986.7, radians(197.75),radians(270));
  
  strokeWeight(1.5);
  arc(100,250,60,90,radians(0),radians(90));
  arc(160,250,60,90,radians(90),radians(90*2));
  arc(160,340,60,90,radians(180),radians(270));
  arc(100,340,60,90,radians(270),radians(0));
  
  strokeWeight(3);
  point(130,250);
  point(130,340);
  point(100,125+170);
  point(160,125+170);
  
  //아무데나 점
  strokeWeight(6);
  stroke(255);
  point(301,199.5);
  point(145,9);
  point(550,206);
  
  strokeWeight(4.5);
  point(459,316);
  point(34,200);
  
  strokeWeight(3.5);
  point(25,230);
  point(490,277);
  point(363,60.1);
  
  strokeWeight(3);
  point(219,180);
  
  noStroke();
  point(66,370);
  point(200,200);
  
  strokeWeight(1);

  
  //큰 반짝이:3개 겹치기
  strokeWeight(1);
  stroke('#fbf5c5');

  arc(30,50,100,150,radians(0),radians(90));
  arc(130,50,100,150,radians(90),radians(180));
  arc(130,200,100,150,radians(180),radians(270));
  arc(30,200,100,150,radians(270),radians(0));
  
  arc(40,50,100,150,radians(0),radians(90));
  arc(140,50,100,150,radians(90),radians(180));
  arc(140,200,100,150,radians(180),radians(270));
  arc(40,200,100,150,radians(270),radians(0));
  
  arc(35,50,100,150,radians(0),radians(90));
  arc(135,50,100,150,radians(90),radians(180));
  arc(135,200,100,150,radians(180),radians(270));
  arc(35,200,100,150,radians(270),radians(0));
  

}