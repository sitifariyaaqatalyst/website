(function () {
  // Highlight active nav link based on path
  const path = (window.location.pathname || "/").toLowerCase();
  const links = document.querySelectorAll("[data-nav]");
  links.forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === "/") {
      if (path === "/" || path.endsWith("/index.html")) a.classList.add("active");
      return;
    }
    if (href && path.endsWith(href)) a.classList.add("active");
  });

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

