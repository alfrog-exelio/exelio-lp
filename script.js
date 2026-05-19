document.querySelectorAll("[data-needs-url='x-profile']").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    link.blur();
  });
  link.setAttribute("aria-disabled", "true");
  link.title = "X profile URL pending";
});
