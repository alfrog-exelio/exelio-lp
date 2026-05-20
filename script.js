document.querySelectorAll("[data-needs-url]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    link.blur();
  });
  link.setAttribute("aria-disabled", "true");

  if (link.dataset.needsUrl === "x-profile") {
    link.title = "X profile URL pending";
  }

  if (link.dataset.needsUrl === "episode") {
    link.title = "Episode URL pending";
  }
});
