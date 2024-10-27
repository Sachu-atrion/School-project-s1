const contentSections = document.querySelectorAll('.div-content');
const paragraphs = document.querySelectorAll('.paragraph-content');

contentSections.forEach((section, index) => {
    section.addEventListener('click', function () {
        const isActive = paragraphs[index].style.display === 'block';
        
        // Reset all sections and change icon back to '+'
        paragraphs.forEach(p => p.style.display = 'none');
        document.querySelectorAll('.toggle-button span').forEach(icon => icon.innerHTML = '&#43;');
        
        // If the clicked section is not already active, open it and change icon to 'x'
        if (!isActive) {
            paragraphs[index].style.display = 'block';
            this.querySelector('span').innerHTML = '&#x2715;'; // X icon
        }
    });
});

// Number Increasing

let nums = document.querySelectorAll(".box .number");
let section = document.querySelector(".two");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

//Scroll animation
