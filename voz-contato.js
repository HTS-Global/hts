const elementocontactForm = document.getElementById('contactForm')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    contactForm = e.results[0][0].transcript
    exibeContatoNaTela(contactForm)
    verificaSeOContatoPossuiUmValorValido(contactForm)
}

function exibeContatoNaTela(contactForm) {
    elementoContato.innerHTML = `
        <div>Você disse</div>
        <span class="box">${contactForm}</span>
     `
}

recognition.addEventListener('end', () => recognition.start())
