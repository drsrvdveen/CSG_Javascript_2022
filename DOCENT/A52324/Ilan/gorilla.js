class Gorilla{
    constructor(s){
        this.x = null;
        this.y = null;
        this.width = 75
        this.height = 75
        this.rt= 0;
        this.rt2= 0;
        this.Kogels = [];
        this.kx = null;
        this.ky = null;
        this.mrt=10
        this.raak=0
        this.sprite = s;
        this.rt=0
        this.mrt2=50
        this.stinky=[]
    }

    teken(x,y){
        fill('red');

        this.x = constrain(x,0,windowWidth - this.width);
        this.y = constrain(y,windowHeight/2,windowHeight - this.height);
        image(this.sprite,this.x,this.y,this.width,this.height);  
    }

   

    geraakt1(vijand){
        var Remove_Array = []

        for(var k=0;k<vijand.Kogels.length;k++){
            if (vijand.Kogels[k].x+12.5 >= this.x && vijand.Kogels[k].x-12.5 <= this.x +this.width
                && vijand.Kogels[k].y >= this.y && vijand.Kogels[k].y <= this.y+this.width) {
                this.raak++;
                Remove_Array.push(k)
                    }
            
            if (vijand.Kogels[k].y>windowHeight){
                Remove_Array.push(k)
            }
            }
            for (var k=0; k<Remove_Array.length;k++) {
                vijand.Kogels.splice(Remove_Array[k], 1);
            }}

    geraakt2(vijand1){
        var Remove_Array1 = []
        var Remove_Array2 = []
        var Remove_Array3 = []
        for(var k=0;k<vijand1.Kogels1.length;k++){
            if (vijand1.Kogels1[k].x+12.5 >= this.x && vijand1.Kogels1[k].x-12.5 <= this.x +this.width
                && vijand1.Kogels1[k].y >= this.y && vijand1.Kogels1[k].y <= this.y+this.width) {
                this.raak++;
                Remove_Array1.push(k)
            }
            if (vijand1.Kogels1[k].y>windowHeight){
                Remove_Array1.push(k)
            }
      }
        for(var k=0;k<vijand1.Kogels2.length;k++){
            if (vijand1.Kogels2[k].x+12.5 >= this.x && vijand1.Kogels2[k].x-12.5 <= this.x +this.width
                && vijand1.Kogels2[k].y >= this.y && vijand1.Kogels2[k].y <= this.y+this.width) {
                this.raak++;
                Remove_Array2.push(k)
        }
        if (vijand1.Kogels2[k].y>windowHeight){
            Remove_Array2.push(k)
        }
        }
        for(var k=0;k<vijand1.Kogels3.length;k++){
            if (vijand1.Kogels3[k].x+12.5 >= this.x && vijand1.Kogels3[k].x-12.5 <= this.x +this.width
                && vijand1.Kogels3[k].y >= this.y && vijand1.Kogels3[k].y <= this.y+this.width) {
                this.raak++;
                Remove_Array3.push(k)
        }
        if (vijand1.Kogels3[k].y>windowHeight){
            Remove_Array3.push(k)
        }
  }
            for (var k=0; k<Remove_Array1.length;k++) {
        vijand1.Kogels1.splice(Remove_Array1[k], 1);
        }
        for (var k=0; k<Remove_Array2.length;k++) {
            vijand1.Kogels2.splice(Remove_Array2[k], 1);
        }
        for (var k=0; k<Remove_Array3.length;k++) {
            vijand1.Kogels3.splice(Remove_Array3[k], 1);
        }


    }
    schiet(mrt,xpk,ypk){
        this.rt++
        this.kx=xpk
        this.ky=ypk
        if (mouseIsPressed && this.rt >= mrt) {
            this.Kogels.push(new Kogel(this.kx,this.ky));
            this.rt = 0;
        }
        for (var k=0;k<this.Kogels.length;k++) {
            this.Kogels[k].beweegm();
            this.Kogels[k].teken();
        }
    }

}

class Kogel{
    constructor(x,pipo){
        this.x= x
        this.y= pipo
        this.snelheid= 5
        this.width=25
    }
    
    teken(){
        fill('black')
        ellipse(this.x,this.y,this.width);
    }
    beweegm() {
        this.y-=this.snelheid*2;

    } 
    beweege() {
        this.y+=this.snelheid;

    }    
    beweegeschl() {
        this.y+=this.snelheid;
        this.x-=this.snelheid;
    }   
    beweegeschr() {
        this.y+=this.snelheid;
        this.x+=this.snelheid;
    }   
    beweegetor() {
        this.y+=this.snelheid;
        this.x+=random(-15,15);
    }

}
