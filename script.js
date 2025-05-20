document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");
  const products = [
    { name: "T-Shirt", price: "$10", img: "assets/images/Tshirt.jpg" },
    { name: "Shoes", price: "$25", img: "assets/images/shoes.jpg" },
    { name: "Backpack", price: "$40", img: "assets/images/bagpack.jpg" },
    { name: "Hat", price: "$15", img: "assets/images/hat.jpg" },
  ];

  if (productList) {
    products.forEach((product) => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button class="btn add-to-cart">Add to Cart</button>
        `;
      productList.appendChild(div);
    });

    // Add-to-cart animation
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.textContent = "Added!";
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = "Add to Cart";
          btn.disabled = false;
        }, 1000);
      });
    });
  }

  // Theme toggle
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Simple form validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      if (!name || !email) {
        e.preventDefault();
        alert("Please fill out all required fields.");
      }
    });
  }
});
