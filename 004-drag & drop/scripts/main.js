const items = document.querySelectorAll("li");
const rightBox = document.querySelector(".box-right");
const leftBox = document.querySelector(".box-left");

// Loop through items
items.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    let selectedItem = e.target;

    // Right Box
    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", (e) => {
      rightBox.appendChild(selectedItem);
      selectedItem = null;
    });

    // Left Box
    leftBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    leftBox.addEventListener("drop", () => {
      leftBox.appendChild(selectedItem);
      selectedItem = null;
    });
  });
});
