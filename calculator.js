function dis(val){
    document.getElementById("text").value+=val;
}

function myFunction(event){
    if(event.key == '0'||event.key == '1'||event.key == '2'||event.key == '3'||event.key == '4'||event.key == '5'||
        event.key == '6'||event.key == '7'||event.key == '8'||event.key == '9'||event.key == '+'||
        event.key == '-'||event.key == '*'||event.key == '/'||event.key == '00' ){
            document.getElementById("text").value+=event.key
        }

}


function solve(){
    let x=document.getElementById("text").value;
    document.getElementById("text").value=eval(x);
}

function clr(){
    document.getElementById("text").value="0";
}

function on(){
    document.getElementById("text").value="0";
}

function off(){
    document.getElementById("text").value="";
}