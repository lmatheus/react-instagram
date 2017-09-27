const images = [];
for (var i = 0; i < 9; i++) {
  const image = require(`../images/pictures/${i}.jpg`);
  images.push({ url: image });
}
export default images;
