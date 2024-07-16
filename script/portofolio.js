
//check number
var gg = "";
var isnum = "";

function check_num(){
    let num = document.getElementById("angka");
    let res = document.getElementById("text_return");
    z = num.value % 2;
    let x = 5;

    if (z == 0) {
        gg = "genap";
        isnum = "an integer";
        res.innerText="";
        res.innerText="angka anda (" + num.value + ") adalah " + gg+"\n";
    } else if (z > 0) {
        gg = "ganjil";
        isnum = "an integer";
        res.innerText="";
        res.innerText="angka anda (" + num.value + ") adalah " + gg+"\n";
    } else {
        gg = "";  
        res.innerText=""; 
        isnum = "not an integer";
    }

    // if (Number.isInteger(x)) {
    //     isnum = "an integer";
    // } else {
    //     isnum = "not an integer";
    // }

    
    res.innerText+="your number is "+isnum;
    // res.innerText+="\n"+Number.isInteger(x);
}

//encrypt password

 function removeSpaces(text) {
  let noSpace = text.replace(/\s/g, '');
  return noSpace;
 }

 function reverseText(text) {
  var reversed_text="";
  const n=text.length;
  console.log(n);
  /*optional for index forward, arry index backward
  for ( var i = 0; i < n; i++) {
    reversed_text+= text[n-1-i];
    console.log(text[n-1-i]);
    // console.log
  }
   */ 

  for ( var i = text.length ; i > 0; i--) {
    reversed_text+= text[i-1];
    // console.log
  }
  return reversed_text;
 }

 function updateVowels(text) {
  var nvowel ="";
  for ( var i = 0; i < text.length; i++) {
    if (text[i]=="a") {nvowel+="b";} 
    else if (text[i]=="i") {nvowel+="j";} 
    else if (text[i]=="u") {nvowel+="v";} 
    else if (text[i]=="e") {nvowel+="f";} 
    else if (text[i]=="o") {nvowel+="p";} 
    else if (text[i]=="A") {nvowel+="B";} 
    else if (text[i]=="E") {nvowel+="F";} 
    else if (text[i]=="I") {nvowel+="J";} 
    else if (text[i]=="O") {nvowel+="P";} 
    else if (text[i]=="U") {nvowel+="V";} 
    else {nvowel+=text[i];}
  }
    // text.forEach(update_vowel => {
        
    // });
    return nvowel;
 }

 function rupdateVowels(text){
    let rnvowel="";
    rnvowel = text.replace('a', 'b');
    rnvowel = text.replace('A', 'B');
    rnvowel = text.replace('e', 'f');
    rnvowel = text.replace('E', 'F');
    rnvowel = text.replace('i', 'j');
    rnvowel = text.replace('I', 'J');
    rnvowel = text.replace('o', 'p');
    rnvowel = text.replace('O', 'P');
    rnvowel = text.replace('u', 'v');
    rnvowel = text.replace('U', 'V');
    return rnvowel;
 }

 function switchCase_vowel(text){
    let hasil = "";

    for (let index = 0; index < text.length; index++) {
        switch (text[index]) {
            case "a": hasil += "b"; break;
            case "e": hasil += "f"; break;
            case "i": hasil += "j"; break;
            case "o": hasil += "p"; break;
            case "u": hasil += "v"; break;
            case "A": hasil += "B"; break;
            case "E": hasil += "F"; break;
            case "I": hasil += "J"; break;
            case "O": hasil += "P"; break;
            case "U": hasil += "V"; break;
            default: hasil += text[index];
        }
    }

    return hasil;
 };

 function encrypt_pw(){
    encryptPw_return.innerText = "";
    // encryptPw_return.innerText += document.getElementById("pw").value;
    var password = document.getElementById("pw").value;
    encryptPw_return.innerText += "current password (" + password +")\n";
    var noSpaces = removeSpaces(password); // Abcdef
    encryptPw_return.innerText += "password with no space (" + noSpaces +")\n";
    encryptPw_return.innerText += "nospace pw length (" + noSpaces.length +")\n";
    var reversed = reverseText(noSpaces); // fedcbA
    encryptPw_return.innerText += "reversed pw "+reversed+"\n";
    var encryptedPassword = updateVowels(reversed);
    encryptPw_return.innerText += "encrypted pw1 "+encryptedPassword+"\n";
    var scencryptedPassword = switchCase_vowel(reversed);
    encryptPw_return.innerText += "encrypted pw sc "+scencryptedPassword+"\n";
    // var rencryptedPassword = rupdateVowels(reversed);
    // encryptPw_return.innerText += "encrypted pw2 "+rencryptedPassword;
 }

//  var encryptedPassword = updateVowels(reversed);
 // ffdcbB => yang akan dicetak / tampil

//  console.log(encryptedPassword);