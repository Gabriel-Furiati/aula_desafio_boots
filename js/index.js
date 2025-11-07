const pages = [
    {
        id:"p01",
        name:"home",
        url:"./pages/home/home.html"
    },
    {
        id:"p02",
        name:"produtos",
        url:"./pages/product/product1.html"
    },
    {
        id:"p03",
        name:"sobre",
        url:"./pages/sobre/sobre.html"
    },
    {
        id:"p04",
        name:"contato",
        url:"./pages/contato/contato.html"
    }
]
 
function openPage(url) {
    const iframe = document.getElementById('pages');
 
    if(!iframe) return alert('ERRO! Iframe não encontrado');
 
    iframe.src = url || "";
}
 
// Criando função ao clicar no botão home
document.getElementById('home').addEventListener('click', () => {
    openPage(pages[0].url);
})

document.getElementById('products').addEventListener('click', () => {
    openPage(pages[1].url);
})

document.getElementById('sobre').addEventListener('click', () => {
    openPage(pages[2].url);
})

document.getElementById('contato').addEventListener('click', () => {
    openPage(pages[3].url);
})

 