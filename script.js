const inputFile = document.getElementById("photo-cap");
const textSpan = document.querySelector(".btn-text");

inputFile.addEventListener("change", function () {
  if (inputFile.files.length > 0) {
    textSpan.textContent = inputFile.files[0].name;
  } else {
    textSpan.textContent = "Nenhum arquivo selecionado";
  }
});
