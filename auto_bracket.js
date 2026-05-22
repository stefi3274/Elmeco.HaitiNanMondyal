const fs = require('fs');
let appContent = fs.readFileSync('app.js', 'utf8');

const bracketFunction = 
function getQualifiedTeams() {
  const qualified = {};
  const thirdPlace = [];
  
  Object.keys(GROUPS_DATA).forEach(letter => {
    const standings = computeStandings(letter);
    qualified[letter] = {
      first: standings[0] ? standings[0].name : '',
      second: standings[1] ? standings[1].name : ''
    };
    if (standings[2]) {
      thirdPlace.push({
        name: standings[2].name,
        group: letter,
        points: standings[2].j,
        gd: standings[2].bp - standings[2].bc,
        gf: standings[2].bp
      });
    }
  });
  
  thirdPlace.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.gd !== a.gd) return b.gd - a.gd;
    return b.gf - a.gf;
  });
  
  const best8Third = thirdPlace.slice(0, 8).map(t => t.name);
  
  return { qualified, best8Third };
}

function autoFillBracket() {
  const { qualified, best8Third } = getQualifiedTeams();
  const groups = Object.keys(GROUPS_DATA).sort();
  
  const r32Teams = [];
  groups.forEach(letter => {
    r32Teams.push(qualified[letter].first);
    r32Teams.push(qualified[letter].second);
  });
  best8Third.forEach(t => r32Teams.push(t));
  
  const koMatches = [];
  for (let i = 0; i < 16; i++) {
    koMatches.push({
      home: r32Teams[i * 2] || '',
      away: r32Teams[i * 2 + 1] || ''
    });
  }
  
  if (!window.KO_STATE) window.KO_STATE = {};
  
  KNOCKOUT_ROUNDS.forEach(round => {
    if (round.round === '16e de finale') {
      round.matches.forEach((m, i) => {
        if (koMatches[i] && !KO_STATE[m.id]) {
          KO_STATE[m.id] = {
            home: koMatches[i].home,
            away: koMatches[i].away
          };
        }
      });
    }
  });
  
  saveKoState();
  renderBracket();
}
;

// Cherche la fonction renderBracket et insère avant
const insertBefore = 'function renderBracket()';
if (appContent.includes(insertBefore)) {
  appContent = appContent.replace(insertBefore, bracketFunction + '\n' + insertBefore);
  fs.writeFileSync('app.js', appContent);
  console.log('Fonction autoFillBracket ajoutée avec succès!');
} else {
  console.log('renderBracket non trouvé - cherche manuellement');
}