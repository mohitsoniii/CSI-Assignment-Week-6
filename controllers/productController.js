let products = [
    { id: 1, name: "Television", price: 15000},
    { id: 2, name: "Juicer", price: 5000},
]

export const getAllProducts = function(req, res){
    res.json(products)
}

export const getProductById = function(req, res){
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id)

    if(!product){
        return res.status(404).json({message : "Product Not Found"})
    }
    res.status(200).send(product)
}

export const createProduct = (req, res)=>{
    const { name, price } = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
}

export const updateProduct = (req, res)=>{
    const id = parseInt(req.params.id);
    const { name, price} = req.body;

    const index = products.findIndex(p => p.id === id)
    if(index === -1){
        return res.status(404).json({message: 'Product not found'})
    }
    
    if(name !== undefined){
        products[index].name = name
    }

    if(price !== undefined){
        if (typeof price !== 'number') {
            res.status(400).json({message: 'Price must be a Number'})
        }
        products[index].price = price
    }

    res.json({message: 'Product updated', product:products[index] })
}

export const deleteProduct = (req, res)=>{
    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id)

    if(index === -1){
        return res.status(404).json({message: 'Product not found'})
    }
    const deletedProduct = products.splice(index, 1)
    res.json({message: 'Product deleted', product: deletedProduct[0]})
}