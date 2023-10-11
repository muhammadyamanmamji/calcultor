var display = document.getElementById("display");

function getbtnValue(val){
display.value += val
  
}
function calculate(){
    var val = eval(display.value)
    display.value = val
}
function rem(){
    display.value = ""
}

function dlt(){
    display.value = display.value.slice(0,-1);
}