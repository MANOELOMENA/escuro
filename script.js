function validaFormulario() {
    const nome = document.getElementById('nome').value();
    const email = document.getElementById('email').value();
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;
  
    // Verifica se todos os campos estão preenchidos
    if (nome === '' || email === '' || senha === '' || confirmSenha === '') {
      alert('Por favor, preencha todos os campos.');
      return ;
    }
  
    // Verifica se o e-mail tem um formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return ;
    }
  
    // Verifica se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
      alert("A senha deve ter no mínimo 8 caracteres.");
      return ;
    }
  
    // Verifica se as senhas batem
    if (confirmSenha !== senha) {
      alert("As senhas não coincidem.");
      return ;
    }
  
  
    return;
  }
  
  function alternaModoEscuro() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  