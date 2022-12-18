let n=document.querySelector("textarea").textContent;
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
 
  n=document.querySelector("textarea").textContent=n+"x";
  
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
  let mult;
  let divisor=1;
  let total=0;
  let suMu=1;
  let sudi=1;
  let clas="";
 let user=n.split("");
    if(user.includes("-")){
    console.log("-");
    user=n.split("-");
    clas="-";
  }
  if(user.includes("+")){
    
    user=n.split("+");
    console.log(user+"PPPPPP");
    clas="+";
  }
  if(user.includes("x")){
    console.log("Multiply");
    user=n.split("x");
    clas="x";
  }
  if(user.includes("/")){
    console.log("Divide");
    user=n.split("/");
    clas="/";
  }
  console.log(user+"_____");

 for(let i=0;i<user.length;i++){

  if(user[i].includes("/")){
       

       sudi=user[i];
   sudi=sudi.split("/");
    console.log(sudi+"OOOOOOO");
    for(let i=0;i<sudi.length;i++){
  
      divisor=+sudi[i];
          for(let j=i+1;j<sudi.length;j++){
    divisor=divisor/sudi[j];}
      i=sudi.length;
    console.log(divisor+"@@???@@@@");}
    user[i]=divisor;
    
      }else{
        if(user[i].includes("x")){
          sumu=1;
    mult=user[i];
        mult=  mult.split("x")
          for(let i=0;i<mult.length;i++){
    suMu=+(suMu*mult[i]);}
    user[i]=suMu;
    }else{if(user[i].includes("+")){
      suMu=user[i];
      suMu=suMu.split("+");

     let addo=0;
   for(let i=0;i<user.length;i++){
     
     suMu[i]=+suMu[i]
           console.log(suMu[i]+" sumo");
     addo=addo+suMu[i];
     user[i]=addo;
     console.log(user[i]+"yudons");
   }}}
    }
 }
  if(clas=="-"){
    console.log("chalocho");
    total=user[0];
   for(let i=1;i<user.length;i++){
     user[i]=+user[i]
total=total-user[i];
   
   }}
if(clas=="+"){
   for(let i=0;i<user.length;i++){
     user[i]=+user[i]
total=total+user[i];
   
   }}
if(clas=="x"){
   total=1;
   for(let i=0;i<user.length;i++){
    
     user[i]=+user[i]
total=total*user[i];
   
   }
  
}
  
  if(clas=="/"){
  for(let i=0;i<user.length;i++){
    
     user[i]=+user[i]
    total=user[i];
    for(let j=i+1;j<user.length;j++){
total=total/user[j];
       console.log(total+"DDDDD");
    }
   i=user.length;
   
   }
      }
  document.querySelector("textarea").textContent=total;
  n="";
 }
  
  
 
  

 
 
