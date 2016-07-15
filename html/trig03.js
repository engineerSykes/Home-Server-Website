window.onload = function(){

  var canvas  = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width   = canvas.width = window.innerWidth,
      height  = canvas.height = window.innerHeight;

  var centerY = height * 0.5,
      centerX = width  * 0.5,
            
      offset = 1,
      speed = 0.025;
      angle = 0;

  render();

// **************************************************

  function render() {
      var x = (Math.sin(angle)+ offset)  * centerX,
          y = (Math.cos(angle)+ offset) * centerY;

      context.clearRect(0,0, width, height);
      context.beginPath();
      context.arc(x, y, 80, 0, Math.PI * 2, false);
      context.fillStyle = "blue";
      context.fill();

      angle += speed;

      requestAnimationFrame(render);
  }

};