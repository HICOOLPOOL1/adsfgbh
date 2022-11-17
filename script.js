var messageElement = document.getElementById("message");
var circleElement = document.getElementById("circle");

const refreshStatus = () => {
    // Set the current time
    let currentDate = new Date().getHours();
    // If the time is between 8 am and 10 pm
    if (currentDate >= 8 && currentDate <= 22) {
      // Change text and add styles
      messageElement.innerHTML = "We are open until 10 PM";
      circleElement.className = 'open-circle';
      messageElement.className = 'open-p';
  } else { 
      // 23 pm to 7 am
      messageElement.innerHTML = "We are closed until 8 AM";
      circleElement.className = 'closed-circle';
      messageElement.className = 'closed-p';
  }
}

// run when starting
refreshStatus();

// updates every 8 seconds
setInterval(refreshStatus, 8000);