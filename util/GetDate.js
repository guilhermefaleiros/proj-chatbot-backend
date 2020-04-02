module.exports = function GetTime(){
  const now = new Date()
  var minutes;
  var hours;
  if(now.getMinutes() < 10){
    minutes = "0" + now.getMinutes();
  }
  else{
    minutes = now.getMinutes();
  }
  if(now.getHours() < 10){
    hours = "0" + now.getHours();
  }
  else{
    hours = now.getHours();
  }

  return hours + ":" + minutes; 
}