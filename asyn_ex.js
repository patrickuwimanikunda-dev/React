//Number 3
const fetchProduct = new Promise((resolve, reject) => {
  setTimeout(() => {
    const found = false;
    if (found) {
      resolve({ name: "Laptop", price: 999, inStock: true });
    } else {
      reject("Product not found!");
    }
  }, 2000);
});

const getProduct = async ()=>{
    try{
    const product = await fetchProduct;
    console.log(`Product: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`In Stock: ${product.inStock}`);
    }
    catch(error){
        console.log(`Error: ${error}`)
    }
}
getProduct();