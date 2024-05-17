const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerText = 'Bem-vindo à Loja de Compras Online: Tudo tem';
document.body.appendChild(titulo);

const produto = document.createElement('div');
produto.className = 'produto';

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Liquidificador Melhor do Mundo';
produto.appendChild(nomeProduto);

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Nem precisa falar nada. Ele é o melhor do mundo';
produto.appendChild(descricaoProduto);

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 3.579,99';
produto.appendChild(precoProduto);

const imagemProduto = document.createElement('img');
imagemProduto.src = 'liquidificador_.jpg';
imagemProduto.alt = 'Imagem do Produto';
produto.appendChild(imagemProduto);

document.body.appendChild(produto);

