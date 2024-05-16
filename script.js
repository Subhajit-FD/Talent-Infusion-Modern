function theme() {
  document.addEventListener("DOMContentLoaded", function () {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      if (savedTheme === "dark-theme") {
        document.getElementById("theme-switcher").checked = true;
        document.getElementById("theme-switcher-mobile").checked = true;
      }
    } else {
      // Default to light theme
      document.body.classList.add("light-theme");
    }

    // Switch theme button functionality
    const themeSwitchers = document.querySelectorAll(
      "#theme-switcher, #theme-switcher-mobile"
    );

    themeSwitchers.forEach((switcher) => {
      switcher.addEventListener("click", function () {
        if (document.body.classList.contains("light-theme")) {
          document.body.classList.remove("light-theme");
          document.body.classList.add("dark-theme");
          localStorage.setItem("theme", "dark-theme");
          themeSwitchers.forEach((sw) => (sw.checked = true));
        } else {
          document.body.classList.remove("dark-theme");
          document.body.classList.add("light-theme");
          localStorage.setItem("theme", "light-theme");
          themeSwitchers.forEach((sw) => (sw.checked = false));
        }
      });
    });
  });
}

function menuAnimation() {
  var menu = document.querySelector("header p");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("header img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-200%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });

  document.querySelectorAll("#full-div1 a").forEach((link) => {
    link.addEventListener("click", () => {
      const fullScr = document.getElementById("full-scr");
      var navimg = document.querySelector("header img");

      fullScr.style.top = "-200%";
      navimg.style.opacity = 1;
    });
  });
}

function time() {
  function getCurrentTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var currentTime = hours + ":" + minutes + " " + ampm;
    return currentTime;
  }

  function updateTime() {
    document.getElementById("currentTime").textContent = getCurrentTime();
  }

  updateTime();
  setInterval(updateTime, 1000);
}

function readMore() {
  const readMoreText = document.getElementById("readMoreText");
  const additionalContent = document.getElementById("additionalContent");

  readMoreText.addEventListener("click", function () {
    additionalContent.classList.toggle("hidden");

    if (additionalContent.classList.contains("hidden")) {
      readMoreText.textContent = "Read More";
    } else {
      readMoreText.textContent = "Read Less";

      setTimeout(function () {}, 500);
    }
  });
}

time();
theme();
readMore();
menuAnimation();
