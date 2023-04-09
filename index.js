document.querySelectorAll('.field[data-error] input').forEach(el => {
    el.addEventListener('input', () => el.parentElement.removeAttribute('data-error'));
})

