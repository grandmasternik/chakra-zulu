const mongoose = require('mongoose');

const ChakraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
    },
    
  located: {
    type: String,
    required: true
    },
  
  color: {
    type: String,
    required: true
    },
  
  element: {
      type: String,
      required: true
    },
  
  purpose: {
      type: String,
      required: true
    },
  
  functions: {
      type: String,
      required: true
    },
  
  focus: {
    type: String,
    required: true
    },
  
    brings: {
        type: String,
        required: true
    },

    obstacle: {
        type: String,
        required: true
    }
});

module.exports = Chakra = mongoose.model('Chakra', ChakraSchema);