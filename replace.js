const fs = require('fs');
const path = require('path');

const htmlFile = 'index.html';
const imgDir = '.'; // images dans le même dossier

let html = fs.readFileSync(htmlFile, 'utf8');

let count = 0;
const regex = /src="data:image\/(jpeg|png|jpg|gif|webp);base64,([A-Za-z0-9+/=]+)"/g;

html = html.replace(regex, (match, ext, b64) => {
  const filename = `img_extracted_${String(count).padStart(2, '0')}.jpg`;
  const filepath = path.join(imgDir, filename);

  // Écrit le fichier image
  const buffer = Buffer.from(b64, 'base64');
  fs.writeFileSync(filepath, buffer);
  console.log(`✅ Extrait : ${filename} (${(buffer.length / 1024).toFixed(0)} KB)`);

  count++;
  return `src="${filename}"`;
});

// Remplace aussi les balises <img ... src="data:..."> dans les attributs alt/autres
fs.writeFileSync(htmlFile, html, 'utf8');
console.log(`\n✅ Terminé — ${count} images extraites et index.html mis à jour.`);
