// Cambia este número por el tuyo (código país + número, sin + ni espacios)
// Ejemplo Colombia: 573001234567
const WHATSAPP_NUMBER = '573115403923';

function buildWhatsAppUrl(name, email, subject, message) {
  const text = [
    '*Nuevo mensaje — El Audiovisual*',
    '',
    `*Nombre:* ${name}`,
    `*Correo:* ${email}`,
    `*Asunto:* ${subject}`,
    '',
    '*Mensaje:*',
    message
  ].join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function initContacto() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('contact-alert');
  const whatsappLink = document.getElementById('whatsapp-link');
  if (!form) return;

  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const url = buildWhatsAppUrl(name, email, subject, message);
    window.open(url, '_blank');

    alertBox.innerHTML = '<div class="alert alert-success">✓ Se abrió WhatsApp con tu mensaje. Solo confirma el envío allí.</div>';
    form.reset();

    setTimeout(() => {
      alertBox.innerHTML = '';
    }, 5000);
  });
}

document.addEventListener('pageReady', (e) => {
  if (e.detail.page === 'contacto') initContacto();
});
