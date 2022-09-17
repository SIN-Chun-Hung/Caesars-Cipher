function rot13(str) {

  let checkRegex = /[a-z]/ig;
  let checkRegex2 = /[a-z\W]/ig; 
  let checkRegex3 = /[\W]/ig;
  let charStr = "abcdefghijklmnopqrstuvwxyz";
  let charStrRot = "nopqrstuvwxyzabcdefghijklm";

  let encodeSet = charStrRot.toUpperCase().match(checkRegex);
  let decodeSet = charStr.toUpperCase().match(checkRegex);
  let strToArray = str.toUpperCase().match(checkRegex2);
  let finalArray = [];

  console.log(strToArray);
  
  for (let i = 0; i < strToArray.length; i++) {
    for (let j = 0; j < encodeSet.length; j++) {
      if (encodeSet[j] == strToArray[i]) {
        finalArray.push(decodeSet[j]);
      }
    }
    
    if (checkRegex3.test(strToArray[i]) == true) {
      finalArray.push(strToArray[i]);
    }
  }

  return finalArray.join("");
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));