window.onload = function() {
  var canvas = document.getElementById("canvas"),
      ctx    = canvas.getContext("2d"),
      fullCirc = 2 * Math.PI,
      squaresX = 20,
      squaresY = 5,
      shadowBase = 25,
      //shadowRadiusMult = 0.5,
      shadowOffset = 40,
      speed = .07
      angle = 0,
      circleStartSize = 70;

  render();
     
  
  function render() 
  {
    
   shadowAnim = shadowBase + Math.sin(angle) * shadowOffset;
   ctx.clearRect(0,0, canvas.width, canvas.height);
   
   circle( circleStartSize, "black", shadowAnim, "#141");
   circle( circleStartSize/2, "black", shadowAnim, "#303");
   circle( circleStartSize/3, "black", shadowAnim * .2, "#a6a");
    
   angle += speed;
   requestAnimationFrame(render);
   
  }
  
  function glowSquare(x, y)
    {
         ctx.fillStyle = "#122";
         ctx.shadowBlur = 40;
         ctx.shadowColor = "#112277";
         ctx.fillRect(x, y, 120, 120);
    }
  
  function circle(radius,strokeCol,shadowAnim, color)
    {
      ctx.beginPath();
      ctx.arc(150, 80, radius, 0, fullCirc, false);
      ctx.fillStyle = strokeCol;
      ctx.lineWidth = 8;
      // ctx.stroke();
      ctx.shadowBlur = shadowAnim;
      ctx.shadowColor = color;
      ctx.fill();
    }

}
