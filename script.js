window.onload = function() {
  const form = document.querySelector('form');
  const imgInput = document.querySelector('input[name="imgURL"]');
  const topText = document.querySelector('input[name="top-text"]');
  const btmText = document.querySelector('input[name="btm-text"]');
  const list = document.querySelector('#memeList');

  form.addEventListener('submit', function(event){
    event.preventDefault();
    const meme = createMeme(imgInput.value, topText.value, btmText.value);
    list.appendChild(meme);
    imgInput.value = '';
    topText.value = '';
    btmText.value = '';
  });

  list.addEventListener('mouseover', function(event){
    if (event.target.parentElement.classList[0] === 'meme') {
        event.target.parentElement.children[0].classList.toggle('gray');
        event.target.parentElement.onmouseout = function(){
          event.target.parentElement.children[0].classList.toggle('gray');
        };
      }
    });

  list.addEventListener('click', function(event){
    if (event.target.parentElement.classList[0] === 'meme') {
      event.target.parentElement.remove();
    }
  });



  function createMeme(img, top, btm) {
    const meme = document.createElement('div');
    const image = document.createElement('img');
    const topText = document.createElement('div');
    const btmText = document.createElement('div');

    meme.classList.add('meme');
    image.src = img;
    image.classList.add('image');
    topText.innerText = top;
    topText.classList.add('top-text');
    btmText.innerText = btm;
    btmText.classList.add('btm-text');

    meme.appendChild(image);
    meme.appendChild(topText);
    meme.appendChild(btmText);

    return meme;
  }
}

