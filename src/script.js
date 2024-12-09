const productList = document.getElementById('product-list');
const filetInput = document.getElementById('filter-input')

let products = []

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        products = await response.json()
        console.log(products)
    } catch (error) {
        productList.innerHTML = `
            <p>Erro ao carregar os produtos. Tente novamente.</p>
        `;
    }
}

function displayProducts(filteredProducts) {
    productList.innerHTML = ''

    if(filteredProducts.leght === 0) {
        productList.innerHTML = '<p>Nenhum produto foi encontrado...</p>'
    } 

    filteredProducts.forEach((products) => {

    })
}