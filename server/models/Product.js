const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    // Name of product
    type: String,
    unique: true
  },
  ABV: {
    // Alcohol By Volume
    type: Number
  },
  category: {
    // product category (use for breadcumb)
    type: String
  },
  region: {
    // region where made
    type: String
  },
  options: [{
    // array containing objects with volume and price keys
    volume: {
      // in ml
      type: Number
    },
    price: {
      // store as whole number since decimals are apparently weird
      // in entry form, force split dollars and cents, combine into
      // whole number just representing number of cents to store, 
      // then convert back when displaying
      dollars: {
        type: Number
      },
      cents: {
        type: Number
      }
    }
  }],
  brand: {
    // brand name of product
    type: String
  },
  description: {
    // short description of product
    type: String
  },
  image: {
    // image of product
  }
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;