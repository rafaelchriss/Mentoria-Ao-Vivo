// Primeiro, estamos adicionando um ouvinte de eventos (event listener) ao formulário de login.
// O evento 'submit' é acionado quando o usuário envia o formulário.
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    
  // Usamos 'event.preventDefault()' para evitar que o formulário recarregue a página ao ser enviado.
  event.preventDefault();
  
  // Coletamos os valores dos campos 'username' e 'password' a partir dos inputs do formulário.
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Fazemos uma requisição HTTP para 'login.php' usando o método POST, 
  // passando as credenciais do usuário (username e password) no corpo da requisição.
  const response = await fetch('login.php', {
    method: 'POST', // Definimos que a requisição será um POST
    headers: {
      'Content-Type': 'application/json' // O tipo de conteúdo enviado é JSON
    },
    // O body da requisição contém o JSON com as credenciais do usuário
    body: JSON.stringify({ username, password })
  });
  
  // Aguardamos a resposta da requisição e convertemos o resultado para JSON.
  const result = await response.json();
  
  // Selecionamos o elemento de mensagem na página que será usado para mostrar feedback ao usuário.
  const messageElement = document.getElementById('message');
  
  // Verificamos se o resultado retornado pela requisição indica sucesso no login.
  if (result.success) {
    // Se o login for bem-sucedido, mudamos a cor da mensagem para verde.
    messageElement.style.color = 'green';
    // Exibimos uma mensagem de sucesso indicando que o login foi bem-sucedido.
    messageElement.textContent = 'Login bem-sucedido! Redirecionando...';
    
    // Após 2 segundos, redirecionamos o usuário para a página de boas-vindas.
    setTimeout(() => {
      window.location.href = 'welcome.html'; // Redirecionamento para a página 'welcome.html'
    }, 2000);
  } else {
    // Se o login falhar (usuário ou senha incorretos), mostramos uma mensagem de erro.
    messageElement.textContent = 'Usuário ou senha incorretos.';
  }
});
