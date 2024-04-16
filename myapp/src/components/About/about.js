export function openPopup(imageSrc) {
  var popup = document.querySelector('.popup');
  var popupImg = document.querySelector('.popup img');
  popupImg.src = imageSrc;
  popup.style.display = 'block';
}


export function closePopup() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'none';
}
