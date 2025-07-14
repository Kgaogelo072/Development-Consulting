document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function setActiveLink() {
    const fromTop = window.scrollY + 110; // Adjust for header height (change if needed)

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
