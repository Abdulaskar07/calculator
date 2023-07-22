sum=0;
string="";

function BY_ADD(){
    data1 =document.getElementById("text1").value;
    sum+=parseInt(data1);
  if(string.length==0){
     string+=data1;
  }else{
     string+="+"+data1;
  }
     document.getElementById("print").innerHTML = string;
     document.getElementById("result").innerHTML = sum;
 
 }
 function BY_SUB(){
    data1 =document.getElementById("text1").value;
    sum-=parseInt(data1);
  if(string.length==0){
     string+=data1;
  }else{
     string+="-"+data1;
  }
     document.getElementById("print").innerHTML = string;
     document.getElementById("result").innerHTML = sum;
 
 }
 function BY_MUL(){
    data1 =document.getElementById("text1").value;
    sum=sum*parseInt(data1);
  if(string.length==0){
     string+=data1;
  }else{
     string+="*"+data1;
  }
     document.getElementById("print").innerHTML = string;
     document.getElementById("result").innerHTML = sum;
 
 }
 function BY_DIV(){
    data1 =document.getElementById("text1").value;
    sum=sum/parseInt(data1);
  if(string.length==0){
     string+=data1;
  }else{
     string+="/"+data1;
  }
     document.getElementById("print").innerHTML = string;
     document.getElementById("result").innerHTML = sum;
 
 }
// function BY_ADD(){
   
//     data1 =parseInt(document.getElementById("text1").value);
//      data2 = parseInt(document.getElementById("text2").value);
//      document.getElementById("print").innerHTML = data1-data2;
 
//  }
//  function BY_ADD(){
   
//     data1 =parseInt(document.getElementById("text1").value);
//      data2 = parseInt(document.getElementById("text2").value);
//      document.getElementById("print").innerHTML = data1*data2;
 
//  }
//  function BY_ADD(){
   
//     data1 =parseInt(document.getElementById("text1").value);
//      data2 = parseInt(document.getElementById("text2").value);
//      document.getElementById("print").innerHTML = data1/data2;
 
//  }