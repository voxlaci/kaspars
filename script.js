const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
};

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Booking inquiry: ${data.get("project")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name") || ""}\nEmail: ${data.get("email") || ""}\nProject: ${data.get("project") || ""}\n\n${data.get("message") || ""}`
  );

  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
