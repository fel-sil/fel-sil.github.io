

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("user_lDMFsQwl17CkYjmXybhaB");
  const modal = document.getElementById("mail-modal");
  document.getElementsByClassName("close")[0].addEventListener("click", () => {
      modal.style.display = "none";
  })

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const btn = document.getElementById("button");
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_jajwkz6";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        modal.style.display="block";
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
});
