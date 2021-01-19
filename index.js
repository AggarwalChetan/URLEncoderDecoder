// object to get input from console
const readLineSync = require('readline-sync');

// input from user which utility function to use
const funcToUse = readLineSync.question('Hi, Welcome to URL Encoder and Decoder\n\nWe have 2 functions :\n1. urlEncode\n2. urlDecode\n\nPlease Enter 1 if you want to Encode otherwise Enter 2 for Decode : ');

// function for Encoding
function urlEncode(uri){
  if(encodeURIComponent(uri) == uri){
    return 'Please check the URL it\'s already encoded';
  }
  return `Encoded url ${encodeURIComponent(uri)}`;
}

// function for Decoding
function urlDecode(uri){
  if(decodeURIComponent(uri) == uri){
    return 'Please check the URL it\'s already decoded';
  }
  return `Decoded url ${decodeURIComponent(uri)}`;
}

// output according to user input  
if(funcToUse == 1){
  console.log(urlEncode(readLineSync.question('Please enter the url to be encoded\n')));
}else if(funcToUse == 2){
  console.log(urlDecode(readLineSync.question('Please enter the url to be decoded\n')));
}else{
  console.log('Invalid option!! Please try again');
}






