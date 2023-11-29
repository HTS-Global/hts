document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pega os valores dos campos
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var pais = document.getElementById('pais').value;
    var mensagem = document.getElementById('mensagem').value;

    // Armazena os dados no local storage
    var contato = {
        nomeCompleto: nomeCompleto,
        email: email,
        telefone: telefone,
        pais: pais,
        mensagem: mensagem
    };

    localStorage.setItem('contato', JSON.stringify(contato));

    alert('Formulário enviado com sucesso!');
    event.target.reset();
});