import refs from '../../js/refs';
import fetchModalWindow from './fetchModalWindow';



const { modalBackdrop, closeModalBtn, closeModalHeaderBtn, movieSet } = refs;



function modalBackdropToggle() {
  modalBackdrop.classList.toggle('is-hidden');
}

function onWindowKeydown(event) {
  if (event.code === 'Escape') {
    modalBackdrop.classList.add('is-hidden');
    window.removeEventListener('keydown', onWindowKeydown);
  } else {
    return;
  }
}

function onWindowClick(event) {
  if (
    modalBackdrop.classList.contains('is-hidden') === false &&
    event.target === modalBackdrop
  ) {
    modalBackdrop.classList.add('is-hidden');
    modalBackdrop.removeEventListener('click', onWindowClick);
  } else {
    return;
  }
}

function onCloseModalBtnClick() {
  modalBackdropToggle();
}

function onMovieSetClick(event) {
  const currentTargetElement = event.target;
  const id = Number(currentTargetElement.getAttribute('id'));
  modalBackdropToggle();
  fetchModalWindow(id);
  window.addEventListener('keydown', onWindowKeydown);
  modalBackdrop.addEventListener('click', onWindowClick);
}

movieSet.addEventListener('click', onMovieSetClick);
closeModalBtn.addEventListener('click', onCloseModalBtnClick);
closeModalHeaderBtn.addEventListener('click', onCloseModalBtnClick);



