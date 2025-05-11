const filterCategory = (event, category) => {
  const contents = document.querySelectorAll(".faq_area_content");
  contents.forEach((content) => {
    if (content.classList.contains(category)) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });

  const clickedElement = event.target;
  const headerItems = document
    .querySelector(".faq_area_header")
    .querySelectorAll("li");

  headerItems.forEach((headerItem) => {
    headerItem.classList.remove("faq_area_header_clicked");
  });
  clickedElement.classList.add("faq_area_header_clicked");
};

document.addEventListener("DOMContentLoaded", function () {
  // 各questionの表示操作
  const contents = document.querySelectorAll(".faq_area_content");
  const faqItems = [];
  contents.forEach((content) =>
    content.querySelectorAll("li").forEach((li) => faqItems.push(li))
  );
  faqItems.forEach((faqItem) => {
    const question = faqItem.querySelector(".faq_area_question");
    const toggleButton = faqItem.querySelector(".toggle_btn");
    const answer = faqItem.querySelector(".faq_area_answer");
    question.addEventListener("click", function () {
      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        toggleButton.textContent = "−";
        question.style.borderBottomLeftRadius = "0";
        question.style.borderBottomRightRadius = "0";
      } else {
        answer.style.display = "none";
        toggleButton.textContent = "+";
        question.style.borderBottomLeftRadius = "10px";
        question.style.borderBottomRightRadius = "10px";
      }
    });
  });
});
