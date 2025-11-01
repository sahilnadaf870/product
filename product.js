const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");

productForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const productName = document.getElementById("productName").value;

  const li = document.createElement("li");
  li.innerHTML = `${productName} <button onclick="this.parentElement.remove()">Delete</button>`;

  productList.appendChild(li);
  productForm.reset();
});
