//Produtos
const items = [{
        id: 0,
        nome: 'SSD 240GB',
        img:'./img/ssd.jpg',
        quantidade: 0
},
{
        id: 1,
        nome: 'Memória RAM 16GB DDR4 Notebook',
        img:'./img/memoria.jpg',
        quantidade: 0
},
{
        id: 2,
        nome: 'Mouse sem fio',
        img:'./img/mouseSemFio.jpg',
        quantidade: 0
},
{
        id: 3,
        nome: 'Teclado sem fio',
        img:'./img/tecladoSemFio.jpg',
        quantidade: 0
},
];

//Função que inicializa a loja e incrementa produtos ao front.
    inicializarLoja = () => {
        var containerProdutos = document.getElementById('produtos');
        items.map((val)=>{
            containerProdutos.innerHTML+= `
            <div class="produto-single">
                <img class="img" src="`+val.img+`" />
                <p>`+val.nome+`</p>
                <a key="`+val.id+`" href="#">Adicionar ao carrinho!</a>
            </div>
            `;
        })
    }

//Chamando função para iniciar loja e incrementa quantidade no front.    
    inicializarLoja();

//Função de adicionar items ao carrinho.
    atualizarCarrinho = () => {
        var containerCarrinho = document.getElementById('carrinho');
        containerCarrinho.innerHTML = ""; //limpa o carrinho e depois adiciona o produto.
        items.map((value)=>{
            if(value.quantidade > 0){
            containerCarrinho.innerHTML+= `
            <div class="info-carrinho">
            <p style="float:left;">Produto: `+value.nome+`</p>
            <p style="float:right;">Quantidade: `+value.quantidade+`</p>
            <div style="clear:both"></div>
            <hr>
            </div>
            `;
            }
        })
    }

    var links = document.getElementsByTagName('a');


    for(var i = 0; i < links.length; i++){
        links[i].addEventListener("click",function(){
            let key = this.getAttribute('key');
            items[key].quantidade++;
            atualizarCarrinho();
  
        })
    }


//test tittle.    
    let title = "";
    if (typeof document !== "undefined") {
      title = document.title;
    }
    console.log(title); // '' if in a Node.js environment