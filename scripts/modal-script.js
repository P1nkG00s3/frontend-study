const modal = document.querySelector('div.modal-close');
shwButton = document.querySelector('.modal-button');
closeButton = document.querySelector('button.close');
body = modal.parentElement

shwButton.addEventListener('click', () => {modal.classList.add('modal-open'); body.classList.add('blur')});
closeButton.addEventListener('click', () => {modal.classList.remove('modal-open');body.classList.remove('blur')});
