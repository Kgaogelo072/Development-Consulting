document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function setActiveLink() {
    const fromTop = window.scrollY + 110;

    let currentSection = sections.findLast(section =>
      fromTop >= section.offsetTop
    );

    navLinks.forEach(link => {
      link.classList.remove("active");
      const sectionId = link.getAttribute("href");
      if (currentSection && sectionId === `#${currentSection.id}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
});


document.getElementById("year").textContent = new Date().getFullYear();

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector('i');
  
  if (answer.style.display === 'none' || answer.style.display === '') {
    answer.style.display = 'block';
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
  } else {
    answer.style.display = 'none';
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');
  }
}
