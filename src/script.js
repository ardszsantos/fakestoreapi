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

    filteredProducts.forEach((product) => {
        const productElement = document.createElement('div')
        
        productElement.className('product')

        productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}"/>
        <div class="product-description">
            <strong>${product.title}</strong>
            <p>Categoria: ${product.category}</p>
            <p>Preço: $ ${product.price}</p>
        </div>
        `

        productList.appendChild(productElement)
    })
}

filterInput.addEventListener('input', () => {
    const searchTerm = filterInput.toLowerCase()
    const filtered = products.filter((product) => {
        product.title.toLowerCase().includes(searchTerm) || 
        product.category.toLowerCase().includes(searchTerm)
    })
    displayProducts(filtered)
})

fetchProducts()