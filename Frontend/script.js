document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  fetch("http://localhost:3001/api/mesaj", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Mesaj başarıyla gönderildi!");
        document.querySelector("form").reset();
      }
    })
    .catch(error => {
      console.error("Hata oluştu:", error);
      alert("Mesaj gönderilemedi!");
    });
});
