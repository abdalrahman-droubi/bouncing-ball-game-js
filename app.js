const container = document.getElementById("container");
root = document.documentElement;
const ball = document.getElementById("ball");

function recordClickPosition(event) {
  const containerLocation  = container.getBoundingClientRect();
  const ballLocation = ball.getBoundingClientRect();
  const containerLocationX = event.clientX - containerLocation.left;
  const containerLocationY = event.clientY - containerLocation.top;
  const x = event.clientX;
  const y = event.clientY;


  root.style.setProperty("--start-left", ballLocation.left + "px");
  root.style.setProperty("--start-top", ballLocation.top + "px");
  root.style.setProperty("--mid-left", x - 70 + "px");
  root.style.setProperty("--mid-top", y - 70 + "px");
  ball.style.transform = "scale(0.6)";
  if (containerLocationX <= 760 && containerLocationX >= 670 && y <= 200) {
    root.style.setProperty("--end-left", ballLocation.left + "px");
    root.style.setProperty("--end-top", ballLocation.top + "px");
    ball.style.transform = "scale(0.3)";
    setTimeout(() => {
      ball.style.zIndex = -1;
    }, 1000);
  } else if (containerLocationX > 720) {
    root.style.setProperty("--end-left", x+100 + "px");
    root.style.setProperty("--end-top", ballLocation.top + "px");
  }else if (containerLocationX < 720){
    root.style.setProperty("--end-left", x-100 + "px");
    root.style.setProperty("--end-top", ballLocation.top + "px");
  }
  
  ball.classList.add("moveball");
  ball.classList.add("bounce2")
  setTimeout(() => {
    ball.classList.remove("moveball");
    ball.classList.add("ball");
    ball.style.zIndex = 0;
    ball.style.transform = "scale(1)"
  }, 2000);
}

container.addEventListener("click", recordClickPosition);
