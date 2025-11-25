let time;
let size=0, ssize = 3;

let mt = 0, mmt = 0.8;

let randomCol;

let x = 1, x2 = 1 , x3 = 1, x4 = 1, x5 =1; // 선이랑 점 이동 

function setup() {
  createCanvas(600,400);
  time = millis();
}

function draw() {
  
  let ttime = millis()-time;
  
  if (ttime > 200){ // 0.2sec
    time=millis();
    size+=ssize; // 배경 원 크기 바꾸기
    mt+=mmt; // 중간 반짝이 크기 바꾸기
    randomCol = random(140,255); //노란색 랜덤바꾸기
        
    if(size>=30){
      ssize=-ssize;
    }else if(size<=0){
      ssize=-ssize;
    }
    
    if (mt>=15){
      mmt=-mmt;
    }else if (mt<0){
      mmt=-mmt;
    }
  }
  
  background('#242a4b');
  
  //biggest
  noStroke();
  fill(56,71,117);
  circle(600,400,1300);
  
  //big
  noStroke();
  fill(65,86,143);//41568f
  circle(600,400,850+size*1.45);

  //small
  noStroke();
  fill('#4d65a7');
  circle(600,400,450+size*1.25);
  
  //smallest
  fill('#c9def9');
  circle(600,400,200+size);
  
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
  arc(600, 400, 612, 612, radians(198.5),radians(270));//r3
  
  //선
  
  //line movement
  if(ttime>5){
    x+=1.5
    x2+=1.2
    x3+=1
    x4+=0.7
    x5+=0.3
  }
  
  strokeWeight(1);
  stroke(255);
  arc(600, 400, 900, 900, radians(224),radians(270));//up6
  arc(600, 400, 830, 830, radians(235),radians(270));//up8
  
  stroke('#fbe964');
  strokeWeight(1);
  arc(600, 400, 1285, 1285, radians(210-x4),radians(270-x4));//up1
  
  strokeWeight(1.5);
  stroke('#f5fbe4');
  noFill();
  arc(600, 400, 550, 550, radians(208),radians(270));//right4
  
  strokeWeight(2);
  stroke('#f5fbe4');
  noFill();
  strokeWeight(0.7);

  strokeWeight(0.3)
  arc(600, 400, 720, 720, radians(200-x3),radians(270-x3));//right1
  arc(600, 400, 880, 880, radians(210),radians(270));//up7
  arc(600, 400, 1070, 1070, radians(180),radians(270));//up3
  arc(600, 400, 1200, 1200, radians(180),radians(270));//up2

  stroke('#fbf5c5');
  arc(600, 400, 330, 330, radians(210-x),radians(359-x));//r7
  arc(600, 400, 345, 345, radians(200-x),radians(330-x));//r6
  strokeWeight(2);
  arc(600, 400, 400, 400, radians(180),radians(270));//r5
  arc(600, 400, 700, 700, radians(180),radians(270));//r2
  strokeWeight(1);
  arc(600, 400, 1055, 1055, radians(200-x3),radians(359-x3));//up4
  
  //중간 반짝이
  stroke(255);
  strokeWeight(1.3);
  arc(600, 400, 986.7, 986.7, radians(197.75),radians(270));//u5
  
  strokeWeight(1.5);
  arc(100-mt,250,60+2*mt,90+3*mt,radians(0),radians(90));
  arc(160+mt,250,60+2*mt,90+3*mt,radians(90),radians(90*2));
  arc(160+mt,340+3*mt,60+2*mt,90+3*mt,radians(180),radians(270));
  arc(100-mt,340+3*mt,60+2*mt,90+3*mt,radians(270),radians(0));
  
  strokeWeight(3);
  point(130,250); //고정
  point(130,340+3*mt);
  point(100-mt,125+170+1.5*mt);
  point(160+mt,125+170+1.5*mt);
  
  //아무데나 점

  strokeWeight(6);
  stroke(255);
  point(600+360*cos(radians(200-x3)),400+360*sin(radians(200-x3)));//right1 301, 199.5
  point(145,9);
  point(550,206);
  
  strokeWeight(4.5);
  point(600+165*cos(radians(210-x)),400+165*sin(radians(210-x)));//r7 b 459,316
  point(34,200);
  
  strokeWeight(3.5);
  point(25,230);
  point(600+165*cos(radians(210-x+19)),400+165*sin(radians(210-x+19)));//r7 s 490, 277
  point(363,60.1);
  
  strokeWeight(3);
  point(219,180);
  
  noStroke();
  point(66,370);
  point(200,200);
  
  strokeWeight(1);

  
  //큰 반짝이:3개 겹치기
  strokeWeight(1);
  stroke(randomCol,randomCol,0);//fbf5c5 

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

function keyPressed() {
  if (key === 's') {
    saveGif('assign4', 10);
  }
}