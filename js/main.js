const items = [{
        id: 0,
        nome: 'SSD',
        img:'./img/ssd.jpg',
        quantidade: 0
},
{
        id: 1,
        nome: 'Memória RAM 16GB DDR4 2400Mhz',
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

    inicializarLoja();


    atualizarCarrinho = () => {
        var containerCarrinho = document.getElementById('carrinho');
        items.map((val)=>{
            if(val.quantidade > 0){
            containerCarrinho.innerHTML+= `

            <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
            <hr>

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

    let title = "";
    if (typeof document !== "undefined") {
      title = document.title;
    }
    console.log(title); // '' if in a Node.js environment