
var check=false;
function changecolor(e){
  check=!check
   let x=e.id;
   if(check){
    document.getElementById(x).style.color="white"
    document.getElementById(x).style.backgroundColor="green"
   }else{
    document.getElementById(x).style.color="black"
    document.getElementById(x).style.backgroundColor="white"
   }
 
}