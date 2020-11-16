function openModal(modalSelector, modalTimerId) {
    const  modal = document.querySelector(modalSelector);
    // modal.classList.add('show'); // Варіант 1
    // modal.classList.remove('hide'); // Варіант 1
    modal.classList.toggle('show');  // Варіант 2
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const  modal = document.querySelector(modalSelector);
    // modal.classList.add('hide');  // Варіант 1
    // modal.classList.remove('show');  // Варіант 1
    modal.classList.toggle('show');  // Варіант 2
    document.body.style.overflow = '';
}


function modal(triggerSelector, modalSelector, modalTimerId) {
    //Modal

    const modalTriger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);

    modalTriger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

       //закрити модальне окно натисненням на зону  поза модальним вікном
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
            }
       });

       //закрити модальне окно натисненням на кнопку Esc
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
          }
       });


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll',  showModalByScroll);
        }
    }

    window.addEventListener('scroll',  showModalByScroll);
}

export default modal;
export {closeModal};
export {openModal};