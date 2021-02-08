alert("Hey there!");
// var initialString=prompt("Please enter the string: ");

function Stuff(){
  var initialString=(document.getElementById('name')).value;
  var output=document.getElementById('result');
  var stuffedString="";
  var c=0;
  alert(initialString);
  for(var i=0;i<initialString.length;i++){
    if(initialString[i]=='1'){
          c++;
          stuffedString+='1';
    }
    else{
          stuffedString+='0';
          c=0;
    }
    if(c==5){
          stuffedString+='0';
          c=0;
    }
  }
  alert(stuffedString);
  // output.innerHTML="The stuffed string: "+ stuffedString.value +" .<br/>";
}
