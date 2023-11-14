import { createTree, getRoot, updateProducts } from './../../services/merkle-tree';
import { createHash } from './../../utils/helpers';
import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();
import Product from '../../models/Product';
import { productValidator } from '../../services/validator';
import { socketInstance } from '../../services/socket';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      cropType,
      cropVariety,
      location,
      quantity,
      packagingStatus,
      harvestDate,
      entryDate,
      picture,
      grade,
      pricePerQuintal,
      appId,
    } = req.body;

    let newProduct: any = {
      cropType,
      cropVariety,
      location,
      quantity,
      packagingStatus,
      harvestDate,
      entryDate,
      picture,
      grade,
      pricePerQuintal,
      appId,
      isVerified: false,
      isDeleted: false,
    };

    // validating body
    await productValidator.validate(newProduct);

    // creating hash
    const productHash = createHash(newProduct);
    newProduct.path = [productHash];

    // fetching all products
    const products = await Product.find({}, { _id: 1, path: { $slice: 1 } }).sort({
      createdAt: 1,
    });

    let productsHashes = [];
    if (products.length) {
      productsHashes = products.map(p => p.path[0]);
      productsHashes.push(productHash);

      // creating merkle tree
      const treeRes = await createTree(productsHashes);

      if (!treeRes.success)
        return res.status(200).json({ ...treeRes, message: 'Creating product has failed!' });

      // updating local products
      const updatedProductsRes = await updateProducts(treeRes.tree, [...products, newProduct]);

      if (!updatedProductsRes.success)
        return res.status(200).json({
          ...updatedProductsRes,
          message: 'Creating product has failed!',
        });

      newProduct.path = updatedProductsRes.data[updatedProductsRes.data.length - 1]?.path;
      updatedProductsRes.data.pop();

      // updating old products
      for (const p of updatedProductsRes.data) {
        await Product.updateOne({ _id: p._id }, { $set: { path: p.path } });
      }
    }

    const product = new Product(newProduct);
    await product.save();

    if (socketInstance) socketInstance.emit('tree', newProduct.path);
    res.status(200).json({ success: true, data: product });
  } catch (e) {
    console.error('Creating product has failed!', (e as Error).message);
    res.status(200).json({
      success: false,
      message: 'Creating product has failed!',
      error: e as Error,
    });
    next(e);
  }
};

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.find({ isDeleted: false }).sort({ createdAt: -1 });
    if (products?.length) {
      for (const p of products) {
        const rootRes = await getRoot(p.appId || 474866790);
        if (rootRes.success) p.isVerified = rootRes.root === p.path[p.path.length - 1];
      }
    }

    return res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error('Fetching products have failed!', (error as Error).message);
    res.status(200).json({
      success: false,
      message: 'Fetching products have failed!',
    });
  }
};

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productId = req.params.id;

    if (!productId)
      return res.status(200).json({ success: false, message: 'Provide valid product id' });

    // fetching target product
    const targetProduct: any = await Product.findById(productId);
    if (!targetProduct || targetProduct.isDeleted) {
      return res.status(200).json({
        success: false,
        message: 'Product not exist.',
      });
    }

    const updatableProduct = {
      ...targetProduct._doc,
      ...req.body,
    };
    delete updatableProduct.path;

    // creating new hash
    const productHash = createHash(updatableProduct);
    updatableProduct.path = [productHash];

    // updating product with new hash and body
    const result = await Product.updateOne({ _id: productId }, { $set: updatableProduct });

    if (result.matchedCount > 0) {
      // Fetching all products to create new tree with updated product
      const products = await Product.find({}, { _id: 1, path: { $slice: 1 } }).sort({
        createdAt: 1,
      });
      if (products.length > 1) {
        const productsHashes = products.map(p => p.path[0]);
        // creating merkle tree
        const treeRes = await createTree(productsHashes);

        if (!treeRes.success)
          return res.status(200).json({ ...treeRes, message: 'Updating product has failed!' });

        // updating local products
        const updatedProductsRes = await updateProducts(treeRes.tree, products);

        if (!updatedProductsRes.success)
          return res.status(200).json({
            ...updatedProductsRes,
            message: 'Updating product with new hashes has failed!',
          });

        // updating old products
        for (const p of updatedProductsRes.data) {
          await Product.updateOne({ _id: p._id }, { $set: { path: p.path } });
        }
        const targetLeaf = updatedProductsRes.data.filter(p => p._id.toString() === productId)[0];

        if (socketInstance) socketInstance.emit('tree', targetLeaf.path);
      } else if (socketInstance) socketInstance.emit('tree', updatableProduct.path);
      res.status(200).json({ success: true, data: updatableProduct });
    } else return res.status(200).json({ success: false, message: 'No product found to update!' });
  } catch (error) {
    console.error('Updating product has failed!', (error as Error).message);
    res.status(200).json({
      success: false,
      message: 'Updating product has failed!',
    });
  }
};

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productId = req.params.id;

    if (!productId)
      return res.status(200).json({ success: false, message: 'Provide valid product id' });

    // empty hash
    const emptyHash = createHash('');

    const update = {
      isDeleted: true,
      path: [emptyHash],
    };

    // updating product with new hash and body
    const result = await Product.updateOne({ _id: productId }, { $set: update });

    if (result.matchedCount > 0) {
      // Fetching all products to create new tree with updated product
      const products = await Product.find({}, { _id: 1, path: { $slice: 1 } }).sort({
        createdAt: 1,
      });
      if (products.length > 1) {
        const productsHashes = products.map(p => p.path[0]);
        // creating merkle tree
        const treeRes = await createTree(productsHashes);

        if (!treeRes.success)
          return res.status(200).json({ ...treeRes, message: 'Deleting product has failed!' });

        // updating local products
        const updatedProductsRes = await updateProducts(treeRes.tree, products);

        if (!updatedProductsRes.success)
          return res.status(200).json({
            ...updatedProductsRes,
            message: 'Updating product with new hashes has failed!',
          });

        // updating old products
        for (const p of updatedProductsRes.data) {
          await Product.updateOne({ _id: p._id }, { $set: { path: p.path } });
        }

        const targetLeaf = updatedProductsRes.data.filter(p => p._id.toString() === productId)[0];
        if (socketInstance) socketInstance.emit('tree', targetLeaf.path);
      } else if (socketInstance) socketInstance.emit('tree', []);
      res
        .status(200)
        .json({ success: true, data: productId, message: 'Product deleted successfully!' });
    } else return res.status(200).json({ success: false, message: 'No product found to delete!' });
  } catch (error) {
    console.error('Deleting product has failed!', (error as Error).message);
    res.status(200).json({
      success: false,
      message: 'Deleting product has failed!',
    });
  }
};

router.post('/', create);
router.get('/', getProducts);
router.put('/:id', updateProduct);
router.put('/delete/:id', deleteProduct);

module.exports = router;
