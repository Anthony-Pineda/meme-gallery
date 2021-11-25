var gallery = document.querySelector('main')

var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://cdn.vox-cdn.com/thumbor/-khg_S_-tf3eS4XqudtTqK2JwqM=/69x0:856x525/1200x800/filters:focal(69x0:856x525)/cdn.vox-cdn.com/uploads/chorus_image/image/50263513/Screen_Shot_2016-08-01_at_12.34.21_PM.0.0.png',
  'https://www.cnet.com/a/img/S8WsucQh6wWeUG1yrQi66jKNtto=/940x0/2020/09/22/ad4bd31b-cf8c-46f5-aa70-231df9acc041/longcat.jpg',
];

var imageUrlInput = document.querySelector('input');

var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function () {
  if (imageUrlInput.value !='')
    console.log(imageUrlInput.value); { imageUrls.push(imageUrlInput.value); }
  imageUrlInput.value = ''; updateGallery(); });

function updateGallery() { gallery.innerHTML = ''; for (var i = 0; i < imageUrls.length; i++) {
  var imageElement = document.createElement('img');
  imageElement.className = 'gallery-image'; imageElement.src = imageUrls[i];
  gallery.appendChild(imageElement);}}

updateGallery();
