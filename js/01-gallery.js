import { galleryItems } from './gallery-items.js';


console.log(galleryItems);


function createGallery(images) {
    return images
        .map(image => `<div class="gallery__item">
                        <a class="gallery__link" href="${image.original}">
                            <img 
                            class="gallery__image" 
                            src=${image.preview} 
                            data-source=${image.original} 
                            alt=${image.description}>
                        </a>
                       </div>`)
        .join('');
}

const addGallery = createGallery(galleryItems);

const divEl = document.querySelector('.gallery')

divEl.insertAdjacentHTML('beforeend', addGallery);

divEl.addEventListener('click', onClickToImage);
  

function onClickToImage(event) {

    blockReload(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}">`);
        instance.show();

    console.log(instance);

    divEl.addEventListener("keydown", (event) => {
        if (event.code === "Escape") { 
            instance.close();
       }
   })

}

function blockReload(event) {
    event.preventDefault()
}

console.log("made by google and me");