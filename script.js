// Menu Hambúrguer
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Reservas - simula envio do formulário
document.getElementById('reserva-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = this.elements[0].value.trim();
  const telefone = this.elements[1].value.trim();
  const data = this.elements[2].value;
  const hora = this.elements[3].value;
  const pessoas = this.elements[4].value;

  if (!nome || !telefone || !data || !hora || !pessoas) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Reserva confirmada para ${nome} no dia ${data} às ${hora} para ${pessoas} pessoa(s)! Entraremos em contato pelo número ${telefone}.`);
  this.reset();
});

// Botões "Adicionar ao Pedido"
const botoesPedido = document.querySelectorAll('.menu-item button');
const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

botoesPedido.forEach(botao => {
  botao.addEventListener('click', () => {
    const nomePrato = botao.parentElement.querySelector('h3').innerText;
    pedidos.push(nomePrato);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    alert(`"${nomePrato}" foi adicionado ao seu pedido! Total de itens: ${pedidos.length}`);
    botao.textContent = 'Adicionado!';
    botao.disabled = true;
  });
});