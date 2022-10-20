(function() {
    const close = document.getElementById('modal__close');
    const modal = document.querySelector('.modal')
    const modalOpen = document.getElementById('modal__open');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('open')
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'initial';
        console.log('close')
    });
})();
