let output = document.getElementById('output');

function zero() {
    //output.value += 0
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += 0
}
else{
    output.value ="Turn On the calculator";
}
} 

function one() {
    //output.value += 1
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += 1
}
else{
    output.value ="Turn On the calculator";
}
}

function two() {
    //output.value += 2
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += 2
}
else{
    output.value ="Turn On the calculator";
}
}

function three() {
    //output.value += 3
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += 3
}
else{
    output.value ="Turn On the calculator";
}
}

function four() {
    //output.value += 4
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += 4
}
else{
    output.value ="Turn On the calculator";
}
}

function five() {
    //output.value += 5
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += 5
}
else{
    output.value ="Turn On the calculator";
}
}

function six() {
    //output.value += 6
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += 6
}
else{
    output.value ="Turn On the calculator";
}
}

function seven() {
    //output.value += 7
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += 7
}
else{
    output.value ="Turn On the calculator";
}
}

function eight() {
    //output.value += 8
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += 8
}
else{
    output.value ="Turn On the calculator";
}
}

function nine() {
    //output.value += 9
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += 9
}
else{
    output.value ="Turn On the calculator";
}
}

function ac() {
    //output.value = ""
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value = ""
}
else{
    output.value ="Turn On the calculator";
}
} 


function exponential() {
    //output.value += "**"
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += "**"
}
else{
    output.value ="Turn On the calculator";
}
}

function divide() {
    //output.value += "/"
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += "/"
}
else{
    output.value ="Turn On the calculator";
}
}

function multiply() {
    //output.value += "*"
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += "*"
}
else{
    output.value ="Turn On the calculator";
}
}

function add() {
    //output.value += "+"
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += "+"
}
else{
    output.value ="Turn On the calculator";
}
}

function modulus() {
    //output.value += "%"
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += "%"
}
else{
    output.value ="Turn On the calculator";
}
}

function subtract() {
    //output.value += "-"
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += "-"
}
else{
    output.value ="Turn On the calculator";
}
}

function deletesign() {
    let output = document.getElementById("output");
    let result = output.value
    let slicevalue = result.slice(0, -1); 
    //output.value = slicevalue
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value = slicevalue

}
else{
    output.value ="Turn On the calculator";
}
}

function equalsign() {
let output = document.getElementById("output");
   let result = eval(output.value); 
   output.value = result
}

function onandoff(){
    let output = document.getElementById('output');
   var outputValue = output.value;
    if(outputValue =="Off" || outputValue == "Turn On the calculator"){
        output.value = 0
    }else{
        output.value="Off"
    }
}
