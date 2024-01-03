class Levels {
    constructor(s) {
    this.actief = false;
    this.afgelopen = false;
    this.sprite = s;
    this.hoeveelufo2 = 0
    this.ufodood2=0
    this.hoeveelufo1 = 1
    this.ufodood1= 0
    this.hoeveelufo3 = 0
    this.ufodood3= 0
    this.l1=false
    this.level=1
    this.score=0
  }




  nieuwspel(){
    this.actief=false;
    this.afgelopen = false;
    this.hoeveelufo2 = 0
    this.ufodood2=0
    this.hoeveelufo1 = 1
    this.ufodood1= 0
    this.hoeveelufo3 = 0
    this.ufodood3= 0
    gorilla1.raak=0
    this.level=1
    ufo11.pip=0
    ufo21.pip=0
    ufo31.pip=0
    this.score=0
  }

  beginScherm() {
    
    background('green')
    textSize(140)
    textAlign(CENTER,0)
    text("Gorilla VS Alien ",windowWidth/2,300);
    textSize(50)
    text("Je bent de laatste hoop voor de Gorilla`s! \n gebruik je muis om met je jetpack te vliegen  \n  schiet met linker muisknop de ufo`s van de Aliens uit de lucht!   \n  druk op een knop om te beginnen ",windowWidth/2,350);
    for (var k=0;k<ufo11.ufo1hoef.length;k++) {
      ufo11.ufo1hoef[k].y=1000
    }
    for (var k=0;k<ufo21.ufo2hoef.length;k++) {
      ufo21.ufo2hoef[k].y=1000
    }
    for (var k=0;k<ufo31.ufo3hoef.length;k++) {
      ufo31.ufo3hoef[k].y=1000
    }
  }
  eindScherm() {
    background('green')
    textSize(140)
    textAlign(CENTER,0)
    fill("black")
    text(" Goed Gedaan! ",windowWidth/2,300);
    textSize(50)
    text("Level: " +this.level+ " \n  Score: "+this.score+"   \n  Totaal vernietigde Ufos: "+(this.ufodood1+this.ufodood2+this.ufodood3)+"   \n  druk op een knop om het nog een keer te proberen",windowWidth/2,350);
  } 
  scorebord(){
    fill("black")
    text("Level: " +this.level+ "       Score: "+this.score+"          levens: "+(5-gorilla1.raak),windowWidth/2,50)

  }
  tekenAnimatie() {
    background(this.sprite,0,0,windowWidth,windowHeight);
    gorilla1.teken(mouseX - gorilla1.width/2,mouseY);
    gorilla1.schiet(gorilla1.mrt,gorilla1.x + gorilla1.width/2,gorilla1.y);
    
    
    ufo11.ufoen();
    ufo31.ufoen()
    ufo21.ufoen();
    if(this.ufodood1==this.hoeveelufo1&&this.ufodood2==this.hoeveelufo2&&this.ufodood3==this.hoeveelufo3){
      this.level++
    }
    if (this.ufodood1==this.hoeveelufo1&&this.ufodood2==this.hoeveelufo2&&this.ufodood3==this.hoeveelufo3&& this.level>3) {
        
        
        this.hoeveelufo1= this.hoeveelufo1+ this.level*2
        this.hoeveelufo2= this.hoeveelufo2+ this.level*1
        this.hoeveelufo3= this.hoeveelufo3+ this.level*1
        
    }
    if (this.ufodood1==this.hoeveelufo1&&this.ufodood2==this.hoeveelufo2&&this.ufodood3==this.hoeveelufo3&& this.level==2) {
        
        
      this.hoeveelufo1= 2
      this.hoeveelufo2= 0
      this.hoeveelufo3= 1
      
  }
  if (this.ufodood1==this.hoeveelufo1&&this.ufodood2==this.hoeveelufo2&&this.ufodood3==this.hoeveelufo3&& this.level==3) {
        
        
    this.hoeveelufo1= 3
    this.hoeveelufo2= 1
    this.hoeveelufo3= 2
    
}
    this.scorebord()
    if (gorilla1.raak==5){
      spel.afgelopen = true;
    }
  }

  teken() {
    if (!this.actief) {
        this.beginScherm();
    }
    else {
      if (this.afgelopen) {
        this.eindScherm();
      }
      else {
        this.tekenAnimatie();
        
     }

            
        }
    }
  }
  function keyTyped() {
    if(spel.actief==false ){
      spel.actief=true
      
    }

    if(spel.afgelopen == true){
      spel.nieuwspel()
    }
  }
