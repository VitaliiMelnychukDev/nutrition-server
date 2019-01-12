const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    validate: {
      validator: function(text) {
        return text.length >= 2;
      },
      message: 'Name length more than 2'
    }
  },
  ingrids: [
    {
      name: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      }
    }
  ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;