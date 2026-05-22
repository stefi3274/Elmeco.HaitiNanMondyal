const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

// Remplace le setInterval SteFi existant
app = app.replace(
  'setInterval(window.showStefiSignature, 60000);',
  ''
);

// Remplace la fonction window.showStefiSignature existante
const oldFunc = app.indexOf('window.showStefiSignature = function()');
const endFunc = app.indexOf('\n}', oldFunc) + 2;
app = app.substring(0, oldFunc) + app.substring(endFunc);

// Ajoute la nouvelle version dans initElmecoAds
app = app.replace(
  '_adTimer = setInterval(showNextElmecoAd, 20000);',
  _adTimer = setInterval(showNextElmecoAd, 20000);
    setInterval(function() {
      if (_adExpanded) return;
      var el = document.getElementById('elmecoAdFloat');
      if (!el) return;
      var orig = el.innerHTML;
      var origBg = el.style.background;
      el.innerHTML = '<div style="padding:8px 14px;font-size:13px;text-align:center;font-family:Inter,sans-serif;letter-spacing:1px;">Créé par <strong><span style="color:#00bfff;">Sté</span><span style="color:#ff8c00;">Fi</span> <span style="color:#ffffff;">Services</span></strong></div>';
      setTimeout(function() {
        el.innerHTML = orig;
        el.style.background = origBg;
      }, 5000);
    }, 60000);
);

fs.writeFileSync('app.js', app);
console.log('Fait!');