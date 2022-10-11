(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');

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
