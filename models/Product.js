const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Product name is required"], trim: true },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0.01, "Price must be greater than zero"],
    },
    description: { type: String, trim: true },
    stockQuantity: {
      type: Number,
      required: [true, "Stock quantity is required"],
      min: [0, "Stock quantity cannot be negative"],
      default: 0,
    },
    category: { type: String, trim: true },
    imageUrl: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);