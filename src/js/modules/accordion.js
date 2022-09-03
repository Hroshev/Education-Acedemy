const faqs = document.querySelectorAll(".faq__accordion")

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});