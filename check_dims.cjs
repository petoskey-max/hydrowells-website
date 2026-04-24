const fs = require('fs');

function getPNGDimensions(path) {
  const buf = fs.readFileSync(path);
  if (buf.toString('ascii', 1, 4) !== 'PNG') return null;
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20)
  };
}

const images = [
  'src/assets/product-350ml.png',
  'src/assets/product-500ml.png',
  'src/assets/product-750ml.png'
];

images.forEach(img => {
  const dims = getPNGDimensions(img);
  console.log(`${img}: ${dims ? `${dims.width}x${dims.height}` : 'Not a PNG'}`);
});
