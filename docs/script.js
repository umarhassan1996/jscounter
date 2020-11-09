var annualTotal = 37470000000;
var amountPerSecond = annualTotal/365/24/60/60; //365 days, 24 hours, 60 minutes, 60 seconds
console.log("per second amount is "+amountPerSecond);

var runningTotal = 0;
document.getElementById("money").innerHTML = runningTotal;

function updateAmount(){
  console.log("updateAmount running");
  console.log(runningTotal);
  runningTotal = runningTotal+amountPerSecond;
   //insert runningTotal into page
  document.getElementById('money').innerHTML = runningTotal.toLocaleString("en-GB",{maximumFractionDigits:2});
}
setInterval(updateAmount,1000);