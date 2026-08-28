const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "Product name is required",
    "any.required": "Product name is required",
  }),
  price: Joi.number().greater(0).required().messages({
    "number.greater": "Price must be greater than zero",
    "any.required": "Price is required",
  }),
  description: Joi.string().allow("").optional(),
  stockQuantity: Joi.number().min(0).required().messages({
    "number.min": "Stock quantity cannot be negative",
    "any.required": "Stock quantity is required",
  }),
  category: Joi.string().allow("").optional(),
  imageUrl: Joi.string().uri().allow("").optional(),
});

const productUpdateSchema = productSchema.fork(
  ["name", "price", "stockQuantity"],
  (field) => field.optional()
);

module.exports = { productSchema, productUpdateSchema };