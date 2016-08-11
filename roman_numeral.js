function findNumeral(datNumber){
	var numeralArr = [];
  var remain;
  if(datNumber < 1){
  	alert("Error, must insert a number of value");
  } else {
	if(datNumber >= 1000){
		remain = Math.floor(datNumber/1000);
		for(var i = 0; i < remain; i++){
			numeralArr.push("M");
			datNumber -= 1000;
		}
	}
  if(datNumber < 1000 || datNumber >= 500){
  	remain = Math.floor(datNumber/500);
    console.log(datNumber);
    console.log(remain);
    for(var i = 0; i < remain; i++){
    	numeralArr.push("D");
      datNumber -= 500;
    }
  }
  if(datNumber < 500 || datNumber >= 100) {
  	remain = Math.floor(datNumber/100);
    for(var i = 0; i < remain; i++){
   		numeralArr.push("C");
      datNumber -= 100;
    }
 }
 if(datNumber < 100 || datNumber >= 50){
 		remain = Math.floor(datNumber/50);
    for(var i = 0; i < remain; i++){
    	numeralArr.push("L");
      datNumber -= 50;
    }
 }
 if(datNumber < 50 || datNumber >= 10){
 		remain = Math.floor(datNumber/10);
    for(var i = 0; i < remain; i++){
    	numeralArr.push("X");
      datNumber -= 10;
    }
 }
 if(datNumber < 10 || datNumber >= 5){
 	remain = Math.floor(datNumber/5);
  for(var i = 0; i < remain; i++){
  		numeralArr.push("V");
      datNumber -= 5;
  }
 }
 if(datNumber < 5 || datNumber >= 1){
 	remain = Math.floor(datNumber/1);
  for(var i = 0; i < remain; i++){
  	numeralArr.push("I");
    datNumber -= 1;
  }
 }
	numeralArr = numeralArr.join("");
  console.log("User has successfully interpreted the Roman Numeral " + numeralArr);
  alert("Your number in Roman Numerals is " + numeralArr);
}
}