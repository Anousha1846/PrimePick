//getAllCategory
export async function getAllCategory() {
    const categoryResponse = await fetch ('https://fakestoreapi.com/products/categories');
    return categoryResponse.json()
}

// all products
export async function getAllProducts() {
    const productResponse = await fetch ('https://fakestoreapi.com/products');
    return productResponse.json()
}

//getSingleProduct
export async function getSingleProduct(id:string) {
    const singleProductResponse = await fetch(`https://fakestoreapi.com/products/${id}`);
    return singleProductResponse.json();
}

//getProductByCategory
export async function getProductByCategory(category:string) {
    const ProductByCategoryResponse = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return ProductByCategoryResponse.json();

} 