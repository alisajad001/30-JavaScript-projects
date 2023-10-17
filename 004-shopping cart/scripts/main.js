let $ = document;

const addBtn = $.querySelector(".btn-add");
const openCartBtn = $.querySelector(".btn-cart");
const closeCartBtn = $.querySelector(".btn-close");
const removeBtn = $.querySelector(".btn-remove");
const itemQuantitiy = $.querySelector(".quantity");

// Open cart
openCartBtn.addEventListener("click", () => {
  $.querySelector(".shop-cart").style.display = "block";
});

// Close cart
closeCartBtn.addEventListener("click", () => {
  $.querySelector(".shop-cart").style.display = "none";
});
