// lock screen
const lockScreen = document.getElementById('lock-screen');
  const passwordInput = document.getElementById('password-input');
  const correctPassword = "1"; // Replace with your actual password
  
  // Function to show the lock screen
  function showLockScreen() {
    lockScreen.style.display = 'block';
  }

  // Function to hide the lock screen
  function hideLockScreen() {
    lockScreen.style.display = 'none';
  }

  // Function to unlock the page
  function unlockPage() {
    if (passwordInput.value === correctPassword) {
      hideLockScreen();
    } else {
      alert("Incorrect password. Please try again.");
    }
  }
  
  // Show the lock screen on page load (or any other trigger)
  document.addEventListener('DOMContentLoaded', showLockScreen);


/**** 
 Content section
*****/

// Title/Tab
var title = $("ul.tabs li h2");

// When Browser Resizes (or Loads) Recalculate Everything
$(window).on("resize load", function () {
  // Width of the UL
  var ulWidth = $("ul.tabs").outerWidth();

  // How many LIs are in the UL
  var liCount = $("ul.tabs li").length;

  // UL width devided by how many LIs equals the width of each LI
  var liWidth = ulWidth / liCount;

  //For each H2 add margin-left x its index. This will stagger them appropriately.
  title.each(function (i) {
    $(this).css({
      marginLeft: liWidth * i });

  });
});

// Add the class active to just the first LI
$("ul.tabs li").first().addClass("active");

// Find the SRC of each video and add it as data-url on each LI. This becomes important since we will have to remove the SRC on each IFRAME. A simple show/hide will not stop the video from playing when you click the next tab. You have to remove the URL all together. Unfortunately, this also means each video will start completely over when you click on the tab.
$("ul.tabs li").each(function (i, video) {
  var video_url = $(this).find("iframe").attr("src");
  $(this).attr("data-url", video_url);
});

// Remove the SRC from each IFRAME contained in each LI. See above for explanation.
$("ul.tabs li").not(":first-child").find("iframe").attr("src", "");

// Clicking on a title first removes the class active from all other LIs, then adds it to the one you just clicked on. Next, the SRC is removed for all of the other videos and last, the URL from data-url is then added to the SRC for the video in the current LI. (Did that make sense?)
title.on("click", function () {
  var video_url = $(this).parent().attr("data-url");

  $("ul.tabs li").removeClass("active");
  $(this).parent().addClass("active");
  $("ul.tabs li").find("iframe").attr("src", "");
  $(this).parent().find("iframe").attr("src", video_url);
});
//# sourceURL=pen.js