// Code your solutions in this file
function writeCards(name,message){
    var v=[]
    for (var i=0;i<name.length;i++){
      v.push(`Thank you, ${name[i]}, for the wonderful ${message} gift!`)
    }return v
  }
  function countDown(number){
    for(var i=number; i>=0; i--){
        console.log(i);
    }
    
  }
countDown(10);