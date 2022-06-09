const path = require('path');
const stealTools = require('steal-tools');

stealTools.export({
  steal: {
    config: path.join(__dirname, 'package.json!npm')
  },
  outputs: {
    '+standalone': {
      dest: path.join(__dirname, 'dist', 'testee.js'),
      addProcessShim: false,
      noProcessShim: true
    },
    '+standalone min': {
      dest: path.join(__dirname, 'dist', 'testee.min.js'),
      minify: true,
      addProcessShim: false,
      noProcessShim: true
    }
  }
}).catch(e => console.log(e));
