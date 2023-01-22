document.body.addEventListener('dblclick', async (event) => {
  const phoneImg = document.querySelector('[data-marker="phone-popup/phone-image"]');

  if (event.target !== phoneImg) return;

  document.body.style.cursor = 'wait';

  const response = await fetch('http://localhost:3001/recognize-img-text', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({ imgSrc: phoneImg.getAttribute('src') }),
  });

  const { phoneText } = await response.json();

  const inputElement = document.createElement('input');
  inputElement.setAttribute('value', phoneText);
  inputElement.focus();
  inputElement.select();

  await navigator.clipboard.writeText(phoneText);

  inputElement.remove();

  alert(`Phone copied - ${phoneText}`);

  document.body.style.cursor = '';
});





