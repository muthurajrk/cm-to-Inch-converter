function convert(){
  let value = Number(document.getElementById("input").value);
  let ans = value/2.54;
  let result  = document.getElementById("result");
  if (Number.isNaN(value)) { 
   result.style.color="red";
   result.style.fontSize="16px";
   result.innerHTML = "Please enter Numeric Values Only";
  }
  else{
     result.style.color="white";
     result.style.fontSize="32px";
     result.innerHTML = ans.toFixed(2) + "Inches";
  }
}
