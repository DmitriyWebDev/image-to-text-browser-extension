document.body.addEventListener('dblclick', async (event) => {
    const phoneImg = document.querySelector('[data-marker="phone-popup/phone-image"]');

    if (event.target !== phoneImg) return;

    const phoneText = '11111';

    const inputElement = document.createElement('input');
    inputElement.setAttribute('value', phoneText);
    inputElement.focus();
    inputElement.select();

    await navigator.clipboard.writeText(phoneText);

    inputElement.remove();

    console.log(`Phone copied - ${phoneText}`);
})





