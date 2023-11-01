const { Product, Category, Brand } = require('../db');

const getProductBySKU = async (sku) => {
  const product = await Product.findByPk(sku);
  if (product) {
    return product;
  } else {
    throw new Error('Product not found');
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw new Error('Server error, could not get the products');
  }
}

const getProductsByBrand = async (id_brand) => {
  try {
    const productsByBrand = await Product.findAll({ where: { id_brand } });
    if (productsByBrand.length > 0) {
      return productsByBrand;
    } else {
      throw new Error('Products by brand not found');
    }
  } catch (error) {
    throw new Error('Server Error, could not get products by brand');
  }
};

const getBrands = async () => {
  try {
    const brandsArray = await Brand.findAll();
    if (brandsArray.length > 0) {
      return brandsArray;
    } else {
      throw new Error('Brands not found');
    }
  } catch (error) {
    throw new Error('Server Error, could not get brands');
  }
};

const getProductsByCategory = async (id_category) => {
  try {
    const productsByCategory = await Product.findAll({ where: { id_category } });
    if (productsByCategory.length > 0) {
      return productsByCategory;
    } else {
      throw new Error('Products by category not found');
    }
  } catch (error) {
    throw new Error('Server Error, could not get products by brand');
  }
}

const getCategories = async () => {
  try {
    const categoriesArray = await Category.findAll()
    if (categoriesArray.length > 0) {
      return categoriesArray;
    } else {
      throw new Error('Categories not found');
    }
  } catch (error) {
    throw new Error('Server Error, could not get categories');
  }
}

const createProduct = async (sku, number_part, titulo, id_brand, id_category, detail, price, image, disponibility, createdInDb) => {
  try {
    const newProduct = await Product.create({
      sku,
      number_part,
      titulo,
      id_brand,
      id_category,
      detail,
      price,
      image,
      disponibility,
      createdInDb,
    });
    return newProduct;
  } catch (error) {
    throw new Error('Error creating product: ' + error.message);
  }
};

const productsFilter = async (id_brand, id_category) => {
  try {
    let whereClause = {};

    if (id_brand) {
      const brand = await Brand.findByPk(id_brand);
      if (!brand) {
        throw new Error('Brand not found');
      }
      whereClause.id_brand = id_brand;
    }

    if (id_category) {
      const category = await Category.findByPk(id_category);
      if (!category) {
        throw new Error('Category not found');
      }
      whereClause.id_category = id_category;
    }

    const products = await Product.findAll({ where: whereClause });

    if (products.length > 0) {
      return products;
    } else {
      throw new Error('No products found with the given criteria');
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}




module.exports = { getAllProducts, getBrands, getCategories, getProductBySKU, getProductsByBrand, getProductsByCategory, createProduct, productsFilter };