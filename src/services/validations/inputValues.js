const { idSchema, productSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };

  return { type: null, message: '' };
};

const validateName = (productName) => {
  const { error } = productSchema.validate(productName);
  
  if (error) {
    if (error.message.includes('required')) {
      return { type: 'INVALID_INPUT', message: error.message };
    }
    return { type: 'INVALID_VALUE', message: error.message };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateName,
};