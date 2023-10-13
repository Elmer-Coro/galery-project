const filterButtons = document.querySelectorAll(".filter-controls button");
const images = document.querySelectorAll(".gallery img");
const containerImg = document.querySelectorAll(".gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const close = document.getElementsByClassName("close")[0];
const imageUpload = document.getElementById("image-upload");
const addBtn = document.querySelector(".add");
const thumbnailsContainer = document.querySelector(".thumbnails-container");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    images.forEach((image) => {
      const imageCategory = image.dataset.category;

      if (category === "todos" || imageCategory === category) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = image.src;
    modal.classList.add("fadeIn");
  });
});

close.addEventListener("click", () => {
  modal.classList.add("fadeOut");

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fadeOut");
  }, 300);
});

imageUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const newImage = document.createElement("img");
    newImage.src = reader.result;
    newImage.alt = "Nueva Imagen";
    newImage.dataset.category = "nueva";
    containerImg[0].appendChild(newImage);
  };
  reader.readAsDataURL(file);
});

addBtn.addEventListener("click", () => {
  imageUpload.click();
});
