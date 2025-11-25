function setup() {
  createCanvas(600, 400);
}

function draw() {
  //배경
  background(235);
  
  //옷
  noStroke();
  fill(150,150,240);
  rect(225,250,150,200,0);//몸통
  
  rect(175,250,50,80,60,0,0,0);//왼팔
  rect(180+260-65,250,50,80,0,60,0,0);//오른팔
  

  fill('#F5D7C8');
  rect(175+2.5,330,45,75);//왼팔
  rect(300+80-5+2.5,330,45,75);//오른팔
  
  
  
  
  
  // 뒷 머리카락
    //반원 x=300, y=150
  noStroke();
  fill(0);
  arc(300,150,200,220,radians(180),radians(0));
  
  rect(200,150,60,210);//왼쪽 옆머리카락
  rect(340,150,60,210);//오른쪽 옆머리카락
  
  
  //목
  stroke('#F5D7C8');
  fill('#FFE1D2');
  ellipse(300,240,55,75);//목
  
  //얼굴형, 귀 neck
  strokeWeight(3);
  noStroke();
  
  fill(255,225,210);
  
  ellipse(230,150,30,40);//왼쪽 귀
  ellipse(370,150,30,40);//오른쪽 귀
  
  
  
  stroke('#F5D7C8');
  ellipse(300,150,140,180);//얼굴형
  noStroke();
  
  
  //눈,코,입, 눈썹
  
  fill(0);
  circle(272,140,10); // 왼쪽 눈
  circle(328,140,10); // 오른쪽 눈
  
  //stroke(0)
  //strokeWeight(4.5)
  //line(260,124,280,124) // 왼쪽 눈썹
  //line(320,124,340,124) // 오른쪽 눈썹
  
   stroke(0);
  strokeWeight(4.5);
  line(255,124,282,124); // 왼쪽 눈썹안경
  line(318,124,345,124); // 오른쪽 눈썹안경
  
  stroke(0);
  strokeWeight(2.5);
  line(300,150,300,180);//코
  
  stroke(0);
  strokeWeight(3);
  line(290,200,310,200);//입
  
  
  //앞머리
  noFill();
  stroke(0);
  strokeWeight(25);
  bezier(300, 60, 230, 65, 260, 110, 215, 130); //왼쪽 앞머리
  stroke(0);
  bezier(300, 60, 370, 65, 340, 110, 385, 130); //오른쪽 앞머리
  
  
  //가르마 
  stroke('#F5D7C8');
  strokeWeight(1.8);
  line(300,41.5,300,72);
  
  //안경
  stroke(0);
  noFill();
  strokeWeight(2.5);
  circle(270,140,48);//왼쪽 알
  circle(330,140,48);//오른쪽 알
  line(270-24,135,250-24,135);
  line(294,135,306,135);
  line(330+24,135,350+24,135);
  
  
  //circle(272,140,10) // 왼쪽 눈
  //circle(328,140,10) // 오른쪽 눈
  
  //점
  
  //입술색
  stroke(0);
  strokeWeight(2.5);
  fill(255,100,100)
  arc(300,200,30,14,radians(0),radians(180));
  line(285,200,315,200);//입
  
  
}