function main(){
   mainTwice();
   mainTwice();
   straightRight135();
   straightRight135();
   putBeeper();
   
   }
   
   
function mainTwice(){
   straightRight135();
   straightRight135();
   TurnAnticlckwise13();
   straightLeft24();
   straightLeft24();
   turnClckwise24();
   }   
   
   
function straightRight135(){
   putBeeper();
   move();
   move();
   //1 2
   //5
   //9
   }
   
function TurnAnticlckwise13(){
   putBeeper();
   turnLeft();
   move();
   turnLeft();
   //move
   //2 1
   //6
   //10
   }  
   
   
function straightLeft24(){
   move();
   putBeeper();
   move();
   //3 2
   //7
   //11
   }   
   
   
function turnClckwise24(){
   turnRight();
   move();
   turnRight();
   //4
   //8
   }   
