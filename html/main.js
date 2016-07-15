window.onload = function(){

  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;

  // context.fillRect(0, 0, width, height);
  //  alert("THis is a test");

  for(var i = 0; i < 500; i += 1)
  {
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.lineTo(Math.random() * width, Math.random() * height);
    context.stroke();
  }

};