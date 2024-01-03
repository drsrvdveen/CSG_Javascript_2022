class Ufo1{
    constructor(s){
        this.x = random(0,windowWidth);
        this.y = 100;
        this.width = 100
        this.height = 75
        this.rt= 0
        this.raak=0
        this.Kogels = [];
        this.mrt=100
        this.pip=0
        this.ufo1hoef=[];
        this.sprite=s

    }
    TekenEnMove(){
        fill('green');
        image(this.sprite,this.x,this.y,this.width,this.height);  
        this.x= this.x + random(-5,5);
        this.x = constrain(this.x,0,windowWidth - this.width);
    }
    schiet(mrt,xpk,ypk){
        this.rt++
        this.kx=xpk
        this.ky=ypk
        if (this.rt >= mrt) {
            this.Kogels.push(new Kogel(this.kx,this.ky));
            this.rt = 0;
        }
        for (var k=0;k<this.Kogels.length;k++) {
            this.Kogels[k].beweege();
            this.Kogels[k].teken();
        }
    }
    geraakt(vijand){
        var Remove_Array = []

        for(var k=0;k<vijand.Kogels.length;k++){
            if (vijand.Kogels[k].x+12.5 >= this.x && vijand.Kogels[k].x-12.5 <= this.x +this.width
                && vijand.Kogels[k].y >= this.y && vijand.Kogels[k].y <= this.y+this.width) {
                this.raak++;
                Remove_Array.push(k)
            }
      }
      for (var k=0; k<Remove_Array.length;k++) {
        vijand.Kogels.splice(Remove_Array[k], 1);
      }
      }
    ufoen(){
        if (this.pip<spel.hoeveelufo1) {
            this.ufo1hoef.push(new Ufo1(ufooo1));
            this.pip++
        }
    
        for (var k=0;k<this.ufo1hoef.length;k++) {
            this.ufo1hoef[k].schiet( this.ufo1hoef[k].mrt,this.ufo1hoef[k].x + this.ufo1hoef[k].width/2,this.ufo1hoef[k].y+50);
            this.ufo1hoef[k].TekenEnMove();
            this.ufo1hoef[k].geraakt(gorilla1);
            gorilla1.geraakt1(this.ufo1hoef[k]);  
    
            if(this.ufo1hoef[k].raak==1){
                this.ufo1hoef[k].y=1000
                spel.ufodood1++
                this.ufo1hoef[k].raak++
                spel.score= spel.score+100
            }

        }
    }

    }



class Ufo2{
    constructor(s){
        this.x = random(0,windowWidth);
        this.y = 100;
        this.width = 100
        this.height = 75
        this.rt= 0
        this.raak=0
        this.Kogels1 = [];
        this.Kogels2 = [];
        this.Kogels3 = [];
        this.mrt=100
        this.pip=0
        this.ufo2hoef=[];
        this.sprite=s
    }
    TekenEnMove(){
        fill('yellow');
        image(this.sprite,this.x,this.y,this.width,this.height);   
        this.x= this.x + random(-10,10);
        this.x = constrain(this.x,0,windowWidth - this.width);
    }
    schiet1(mrt,xpk,ypk){
        this.rt++
        this.kx=xpk
        this.ky=ypk
        if (this.rt >= mrt) {
            this.Kogels1.push(new Kogel(this.kx,this.ky));
            this.rt = 0;
        }
        for (var k=0;k<this.Kogels1.length;k++) {
            this.Kogels1[k].beweege();
            this.Kogels1[k].teken();
        }
    }
    schiet2(mrt,xpk,ypk){
        this.rt++
        this.kx=xpk
        this.ky=ypk
        if (this.rt >= mrt) {
            this.Kogels2.push(new Kogel(this.kx,this.ky));
            this.rt = 0;
        }
        for (var k=0;k<this.Kogels2.length;k++) {
            this.Kogels2[k].beweegeschl();
            this.Kogels2[k].teken();
        }
    }
    schiet3(mrt,xpk,ypk){
        this.rt++
        this.kx=xpk
        this.ky=ypk
        if (this.rt >= mrt) {
            this.Kogels3.push(new Kogel(this.kx,this.ky));
            this.rt = 0;
        }
        for (var k=0;k<this.Kogels3.length;k++) {
            this.Kogels3[k].beweegeschr();
            this.Kogels3[k].teken();
        }
    }
    geraakt(vijand){
        var Remove_Array = []

        for(var k=0;k<vijand.Kogels.length;k++){
            if (vijand.Kogels[k].x+12.5 >= this.x && vijand.Kogels[k].x-12.5 <= this.x +this.width
                && vijand.Kogels[k].y >= this.y && vijand.Kogels[k].y <= this.y+this.width) {
                this.raak++;
                Remove_Array.push(k)
            }
      }
      for (var k=0; k<Remove_Array.length;k++) {
        vijand.Kogels.splice(Remove_Array[k], 1);
      }
    }
    ufoen(){
        if (this.pip<spel.hoeveelufo2) {
            this.ufo2hoef.push(new Ufo2(ufooo2));
            this.pip++
        }
    
        for (var k=0;k<this.ufo2hoef.length;k++) {
            this.ufo2hoef[k].schiet1( this.ufo2hoef[k].mrt,this.ufo2hoef[k].x + this.ufo2hoef[k].width/2,this.ufo2hoef[k].y+50);
            this.ufo2hoef[k].schiet2( this.ufo2hoef[k].mrt,this.ufo2hoef[k].x + this.ufo2hoef[k].width/2,this.ufo2hoef[k].y+50);
            this.ufo2hoef[k].schiet3( this.ufo2hoef[k].mrt,this.ufo2hoef[k].x + this.ufo2hoef[k].width/2,this.ufo2hoef[k].y+50);
            this.ufo2hoef[k].TekenEnMove();
            this.ufo2hoef[k].geraakt(gorilla1);
            gorilla1.geraakt2(this.ufo2hoef[k]);  
    
            if(this.ufo2hoef[k].raak==1){
                this.ufo2hoef[k].y=1000
                spel.ufodood2++
                this.ufo2hoef[k].raak++
                spel.score= spel.score+300
            }
        }
    }
}



class Ufo3{
    constructor(s){
        this.x = random(0,windowWidth);
        this.y = 100;
        this.width = 100
        this.height = 75
        this.rt= 0
        this.raak=0
        this.Kogels = [];
        this.mrt=100
        this.pip=0
        this.ufo3hoef=[];
        this.sprite=s
    }
    TekenEnMove(){
        fill('orange');
        image(this.sprite,this.x,this.y,this.width,this.height); 
        this.x= this.x + random(-5,5);
        this.x = constrain(this.x,0,windowWidth - this.width);
    }
    schiet(mrt,xpk,ypk){
        this.rt++
        this.kx=xpk
        this.ky=ypk
        if (this.rt >= mrt) {
            this.Kogels.push(new Kogel(this.kx,this.ky));
            this.rt = 0;
        }
        for (var k=0;k<this.Kogels.length;k++) {
            this.Kogels[k].beweegetor();
            this.Kogels[k].teken();
        }
    }
    geraakt(vijand){
        var Remove_Array = []

        for(var k=0;k<vijand.Kogels.length;k++){
            if (vijand.Kogels[k].x+12.5 >= this.x && vijand.Kogels[k].x-12.5 <= this.x +this.width
                && vijand.Kogels[k].y >= this.y && vijand.Kogels[k].y <= this.y+this.width) {
                this.raak++;
                Remove_Array.push(k)
            }
      }
      for (var k=0; k<Remove_Array.length;k++) {
        vijand.Kogels.splice(Remove_Array[k], 1);
      }
    }
    ufoen(){
        if (this.pip<spel.hoeveelufo3) {
            this.ufo3hoef.push(new Ufo3(ufooo3));
            this.pip++
        }
    
        for (var k=0;k<this.ufo3hoef.length;k++) {
            this.ufo3hoef[k].schiet( this.ufo3hoef[k].mrt,this.ufo3hoef[k].x + this.ufo3hoef[k].width/2,this.ufo3hoef[k].y+50);
            this.ufo3hoef[k].TekenEnMove();
            this.ufo3hoef[k].geraakt(gorilla1);
            gorilla1.geraakt1(this.ufo3hoef[k]);  
    
            if(this.ufo3hoef[k].raak==1){
                this.ufo3hoef[k].y=1000
                spel.ufodood3++
                this.ufo3hoef[k].raak++
                spel.score= spel.score+200
            }
        }
    }
}