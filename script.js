// Adiciona referência ao framework express
const express = require('express');
const app = express();

// Obtém referência aos elementos do formulário de pagamento
const paymentForm = document.getElementById('payment-form');
const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');

// Adiciona evento de envio do formulário de pagamento
paymentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const amount = parseFloat(amountInput.value);
  const description = descriptionInput.value;

  // Lógica para processar o pagamento

  // Exibe mensagem de sucesso
  alert(`Pagamento de R$ ${amount.toFixed(2)} realizado com sucesso!`);

  // Limpa os campos do formulário
  amountInput.value = '';
  descriptionInput.value = '';
});

// Obtém referência ao botão de logout
const logoutButton = document.getElementById('logout-button');

// Adiciona evento de clique no botão de logout
logoutButton.addEventListener('click', function() {
  // Lógica para realizar o logout do usuário
  alert('Você foi desconectado.');

  // Redireciona para a página de login
  window.location.href = 'login.html';
});
