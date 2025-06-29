document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Formun otomatik gönderilmesini engelle

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Geçerli bir e-posta adresi giriniz.");
    return;
  }

  alert("Form başarıyla gönderildi! 🎉");

  // Temizle
  document.querySelector("form").reset();
});
