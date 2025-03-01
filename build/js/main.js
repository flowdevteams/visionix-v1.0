
//loader script
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  window.addEventListener('load', function () {

    setTimeout(function () {

      loader.classList.add('hidden');
      setTimeout(function () {
        loader.style.display = 'none';

        content.style.opacity = '1';
      }, 300);
    }, 100);
  });
});
// ----------------------------------------------- //

//dark mode script
// Check and apply the dark mode preference for first-time visitors
if (localStorage.getItem("theme") === "dark" || 
   (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  // Add 'dark' class to the root element if dark mode is preferred
  document.documentElement.classList.add("dark");
} else {
  // Remove 'dark' class if light mode is preferred
  document.documentElement.classList.remove("dark");
}

// Function to toggle between dark mode and light mode
function toggleDarkMode() {
  const isDarkMode = document.documentElement.classList.toggle("dark");

  // Save the user's preference (dark or light mode) to localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // Update the icon based on the mode
  updateIcon(isDarkMode);
}

// Function to update the dark/light mode icon
function updateIcon(isDarkMode) {
  const icon = document.getElementById("dark-mode-icon");
  if (isDarkMode) {
    // Change to moon icon for dark mode
    icon.classList.remove("ri-sun-line");
    icon.classList.add("ri-moon-line");
  } else {
    // Change to sun icon for light mode
    icon.classList.remove("ri-moon-line");
    icon.classList.add("ri-sun-line");
  }
}

// Ensure the icon is updated when the page is fully loaded
window.addEventListener("DOMContentLoaded", (event) => {
  updateIcon(document.documentElement.classList.contains("dark"));
});


  // ---------------------------------- //

  //counter animation for agency home page
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  function animateCounter(element, endValue) {
    let startValue = 0;
    const duration = 2000;
    const stepTime = 50;
    const stepValue = Math.ceil(endValue / (duration / stepTime));

    const timer = setInterval(() => {
      startValue += stepValue;
      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(timer);
      }
      element.textContent = startValue;
    }, stepTime);
  }

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const startCountersOnScroll = () => {
    document.querySelectorAll(".counter").forEach((el) => {
      if (isElementInViewport(el) && !el.hasAttribute("data-animated")) {
        const endValue = parseInt(el.getAttribute("data-end"), 10);
        if (endValue) {
          animateCounter(el, endValue);
          el.setAttribute("data-animated", "true");
        }
      }
    });
  };

  window.addEventListener("scroll", startCountersOnScroll);
  window.addEventListener("load", startCountersOnScroll);
});
// ---------------------------------- //

// typewriter animation for about page hero
function TyperwriterFunction() {
  document.addEventListener("DOMContentLoaded", () => {
    const words = ["Discover the Story Behind", "Your Growth Partner At", "Elevating Strategies With"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    let delay = 210; // Default delay for typing effect
    let isPaused = false; // State to handle pause between words

    function type() {
      currentWord = words[i];

      if (isPaused) {
        // Skip typing while paused
        setTimeout(type, 500);
        return;
      }

      if (isDeleting) {
        document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
        j--;
        if (j === 0) {
          isDeleting = false;
          i++;
          if (i === words.length) {
            i = 0;
          }
        }
      } else {
        document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
        j++;
        if (j === currentWord.length) {
          isDeleting = true;
          isPaused = true; // Trigger pause
          setTimeout(() => (isPaused = false), 2000); // Pause for 2 seconds before deleting
        }
      }

      setTimeout(type, delay);
    }

    type();
  });
}




  // dropdown for navbar script
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-button");
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");
  
    dropdownButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
  
        const dropdownMenu = this.nextElementSibling;
        const isVisible = dropdownMenu.classList.contains("show");
  
        dropdownMenus.forEach((menu) => {
          menu.classList.remove("show");
        });
  
        if (!isVisible) {
          dropdownMenu.classList.add("show");
        }
      });
    });
  
    document.addEventListener("click", function () {
      dropdownMenus.forEach((menu) => {
        menu.classList.remove("show");
      });
    });
  });
// ---------------------------------- //
  
// scroll progress bar
window.addEventListener("scroll", function () {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const progressBar = document.getElementById("scroll-progress");
  const backToTopButton = document.getElementById("back-to-top");

  // Update progress bar width
  const progress = (scrolled / scrollableHeight) * 100;
  progressBar.style.width = progress + "%";

  // Show or hide back-to-top button
  if (scrolled > scrollableHeight * 0.9) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});
// ---------------------------------- //

// Scroll back to top when the button is clicked
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// ---------------------------------- //

