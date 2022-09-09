/* About */
const about = document.getElementById("about");
about.onclick = () => {
  const goSection = document.querySelector(".about"); //секция на которую будет переход
  window.scrollTo({
    top: goSection.offsetTop,
    behavior: "smooth",
  });
};

/* Pricing */
const pricing = document.getElementById("pricing");
pricing.onclick = () => {
  const goSection = document.querySelector(".courses"); //секция на которую будет переход
  window.scrollTo({
    top: goSection.offsetTop,
    behavior: "smooth",
  });
};

/* Blog */
const blog = document.getElementById("blog");
blog.onclick = () => {
  const goSection = document.querySelector(".blog"); //секция на которую будет переход
  window.scrollTo({
    top: goSection.offsetTop,
    behavior: "smooth",
  });
};

/* Contact */
const contact = document.getElementById("contact");
contact.onclick = () => {
  const goSection = document.querySelector(".header"); //секция на которую будет переход
  window.scrollTo({
    top: goSection.offsetTop,
    behavior: "smooth",
  });
};