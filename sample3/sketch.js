//옷색 변수
let r =150;
let g =150;
let b =240;

let eye = 0; //키보드 e
let lip = 0;//키보드 l
let gla = 0; //키보드 g


let x=80,y=120;


function setup() {
  createCanvas(600, 400);
  background('#dfedfb');
}

//마우스 클릭마다 옷 색 바뀜
function mousePressed(){
  r=random(0,255);
  g=random(0,255);
  b=random(0,255);

}
 
//키보드 누를 때마다 눈,안경,입 변화
function keyPressed(){
  if (key==='E'||key=='e'){
    if (eye==0){
      eye=1;
    }else if (eye==1){
      eye=0;
    }
  }
  if (key==='L'||key=='l'){
    if (lip==0){
      lip=1;
    }else if (lip==1){
      lip=0;
    }
  }
  if (key==='G'||key=='g'){
    if (gla==0){
      gla=1;
    }else if (gla==1){
      gla=0;
    }
  }else if (key === 's') {
    saveGif('mySketch.gif', 10);
  }
}


function draw() {
  //배경&구름색상
  if (mouseX<200){
    background('#dfedfb');
    fill(250,250,255);
  } else if (mouseX>=200 && mouseX<=400){
    background('#F08080');
    fill('#FFDAB9');
  }else if (mouseX>400){
    background('#000040');
    fill('#ADD8E6');
  }
  
  //구름
  noStroke();
  
  ellipse(x, y, 90, 50);
  ellipse(x + 35, y - 20, 100, 60);
  ellipse(x + 70, y, 110, 70);
  ellipse(x + 40, y + 20, 105, 65);
  
  ellipse(x+ 400, y-30, 90, 50);
  ellipse(x + 435, y - 50, 100, 60);
  ellipse(x + 470, y, 160, 70);
  ellipse(x + 440, y + 0, 105, 65);
  
  ellipse(x + 230, y+60, 150, 70);
  ellipse(x+ 230, y+30, 90, 50);
  ellipse(x + 215, y +90, 100, 60);
  ellipse(x + 260, y + 80, 105, 65);
  
  //키보드 화살표 구름 이동
  if (keyPressed){
    if (keyCode===RIGHT_ARROW){
      x+=2;
    } else if(keyCode===LEFT_ARROW){
      x-=2;
    } else if (keyCode===UP_ARROW){
      y-=2;
    } else if (keyCode===DOWN_ARROW){
      y+=2;
    }
  }  
  
  
  
  //옷
  noStroke();
  fill(r,g,b);
  rect(225,250,150,200,0);//몸통
  
  rect(175,250,50,80,60,0,0,0);//왼쪽 어깨
  rect(180+260-65,250,50,80,0,60,0,0);//오른쪽 어깨
  
  fill('#FFE1D2');
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
  ellipse(300,240,55,75);
  
  //귀 
  strokeWeight(3);
  noStroke();
  
  fill(255,225,210);
  
  ellipse(230,150,30,40);//왼쪽 귀
  ellipse(370,150,30,40);//오른쪽 귀
  
  
  //얼굴
  stroke('#F5D7C8');
  ellipse(300,150,140,180);
  noStroke();
  
  
  //"E"키를 누르면 눈 감았다 뜸
  if (eye==1){
    fill(0);
    noFill();
    stroke(0);
    arc(272,140,20,15,radians(0),radians(180));
    arc(328,140,20,15,radians(0),radians(180));
  } else if(eye==0){
    fill(0);
    strokeWeight(3);
    circle(272,140,10); // 왼쪽 눈
    circle(328,140,10); // 오른쪽 눈
  }
  
  //키보드 입
  if (lip==1){
    stroke(0);
    strokeWeight(3);
    line(290,200,310,200);//입

  } else if(lip==0){
    strokeWeight(2.5);
    stroke(0);
    fill(255,100,100);
    arc(300,200,30,14,radians(0),radians(180));
    line(285,200,315,200);//입
    
  }
  
if (gla==1){

  } else if(gla==0){
      //안경
    noFill();
    strokeWeight(2.5);
    circle(270,140,48);//왼쪽 알
    circle(330,140,48);//오른쪽 알
    line(270-24,135,250-24,135);
    line(294,135,306,135);
    line(330+24,135,350+24,135);

  }
  
  //눈썹
  stroke(0);
  strokeWeight(4.5);
  line(255,124,282,124); //오른쪽 눈썹 
  line(318,124,345,124); //왼쪽 눈썹
  
  //코
  stroke(0);
  strokeWeight(2.5);
  line(300,150,300,180);
  
  
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

}