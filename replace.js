const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.match(/\.(jpg|jpeg|png)$/i));
const images = files.map(f => 'data:image/jpeg;base64,' + fs.readFileSync(f).toString('base64'));
let html = fs.readFileSync('index.html', 'utf8');
const regex = /<div class="player-slide"><img src="data:image\/jpeg;base64,[^"]+"/g;
const matches = html.match(regex);
if (matches) {
  matches.forEach((m, i) => {
    if (images[i]) {
html = html.replace(m, '<div class="player-slide"><img src="' + images[i] + '"');    }
  });
}
fs.writeFileSync('index.html', html);
console.log('Remplacé ' + Math.min(matches.length, images.length) + ' images.');