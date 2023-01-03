let n="";
function one(){
 
  n=document.querySelector("textarea").textContent=n+"1";
  
}

function two(){

 n= document.querySelector("textarea").textContent=n+"2";
}
function three(){

  n=document.querySelector("textarea").textContent=n+"3";
}
function four(){

  n=document.querySelector("textarea").textContent=n+"4";
}
function five(){
   
  n=document.querySelector("textarea").textContent=n+"5";
}
function six(){

  n=document.querySelector("textarea").textContent=n+"6";
}
function seven(){
 
  n=document.querySelector("textarea").textContent=n+"7";
}
function eight(){
 n=document.querySelector("textarea").textContent;
  n=document.querySelector("textarea").textContent=n+"8";
}
function nine(){

  n=document.querySelector("textarea").textContent=n+"9";
}
function zero(){
 
  n=document.querySelector("textarea").textContent=n+"0";
  console.log(n);
}
function mul(){
 
  n=document.querySelector("textarea").textContent=n+"*";
 
  
}
function div(){
 n=document.querySelector("textarea").textContent=n+"/";
  
}
function add(){
 n=document.querySelector("textarea").textContent=n+"+";
  
}
function perc(){
 n=document.querySelector("textarea").textContent=n+"%";
  
}
function sub(){
 n=document.querySelector("textarea").textContent=n+"-";
  
}
function point(){
 n=document.querySelector("textarea").textContent=n+".";
  
}
function brack1(){
 
  n=document.querySelector("textarea").textContent=n+"(";
  console.log(n);
 
}
function cut(){
 let cut=n.split("");
  cut[cut.length-1]="";
  n=cut.join("");
  console.log(n+"fsdkljs");
  n=document.querySelector("textarea").textContent=n;
  console.log(cut);
}
 
function cle(){
 
 n= document.querySelector("textarea").textContent="";
}

//*** ALL THING START FROM HERE**//

function equalTo(){
  console.log(n);
 n=eval(n);
  document.querySelector("textarea").textContent=n;
 }
  
  
 
  

 
 
