function buildHtmlProduct(product) {
        productsContainer.append(`
        <article class="col-xs-12 col-md-6 col-lg-2 themed-grid-col search-item">
            <div class="row">            
                <div class="col-xs-12">
                    <img style="cursor:pointer" onclick="viewDetails('${product.id}')" data-toggle="modal" data-target="#productModal" src="./images/products/${product.image[0]}">
                </div>
            </div>
        </article>`
    );
}

function buildList(key) {
        productsContainer.empty();
        
        key.forEach(product => {
            productsContainer.html(buildHtmlProduct(product));
        })
}