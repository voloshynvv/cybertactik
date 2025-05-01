export function scrollTo(selector) {
  const section = document.querySelector(selector);

  if (!section) {
    console.warn(`No element found with selector: "${selector}"`);
    return;
  }

  section.scrollIntoView({ behavior: "smooth" });
}
