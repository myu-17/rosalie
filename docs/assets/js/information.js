const filterCategory = (event, category) => {
  const contents = document.querySelectorAll(".information_area_item");
  contents.forEach((content) => {
    if (category === "all") {
      content.style.display = "flex";
    } else {
      if (content.classList.contains(category)) {
        content.style.display = "flex";
      } else {
        content.style.display = "none";
      }
    }
  });

  const clickedElement = event.target;
  const headerItems = document
    .querySelector(".information_area_header")
    .querySelectorAll("li");

  headerItems.forEach((headerItem) => {
    headerItem.classList.remove("information_area_header_clicked");
  });
  clickedElement.classList.add("information_area_header_clicked");
};
