import express from 'express'

import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
    
} from '../controllers/productController.js'

const router = express.Router()

// Get all products
router.get('/',getAllProducts);

// Get a specific Product by Id
router.get('/:id',getProductById);

// Create a product (POST)
router.post('/',createProduct);

// Update a Product by Id (PATCH)
router.patch('/:id',updateProduct);

// Delete a Product by Id (DELETE)
router.delete('/:id', deleteProduct);

export default router;