
const $ = id => document.getElementById(id);
const setAll = (ids, prop, val) => ids.forEach(id => { const el = $(id); if (el) el[prop] = val; });

const SCORES = {};

// GROUP_COLORS — voir data.js


// FLAGS — voir data.js


// FEATURED — voir data.js


// MATCHES — voir data.js


const KNOCKOUT_ROUNDS = [
  {
    round:'16es de finale', dates:'28 juin – 3 juillet', color:'#7c3aed',
    matches:[
      {id:'ko73', label:'M73', home:'2e Gr.A',         away:'2e Gr.B',          date:'28 juin', time:'15h00', stadium:'SoFi Stadium',           city:'Los Angeles'},
      {id:'ko76', label:'M76', home:'1er Gr.C',        away:'2e Gr.F',          date:'28 juin', time:'13h00', stadium:'NRG Stadium',             city:'Houston'},
      {id:'ko74', label:'M74', home:'1er Gr.E',        away:'3e Gr.A/B/C/D/F', date:'29 juin', time:'16h30', stadium:'Gillette Stadium',        city:'Boston'},
      {id:'ko75', label:'M75', home:'1er Gr.F',        away:'2e Gr.C',          date:'29 juin', time:'21h00', stadium:'Estadio BBVA',            city:'Monterrey'},
      {id:'ko78', label:'M78', home:'2e Gr.E',         away:'2e Gr.I',          date:'30 juin', time:'13h00', stadium:'AT&T Stadium',            city:'Dallas'},
      {id:'ko77', label:'M77', home:'1er Gr.I',        away:'3e Gr.C/D/F/G/H', date:'30 juin', time:'17h00', stadium:'MetLife Stadium',         city:'New York'},
      {id:'ko79', label:'M79', home:'1er Gr.A',        away:'3e Gr.C/E/F/H/I', date:'1er juil.', time:'21h00', stadium:'Estadio Azteca',        city:'Mexico'},
      {id:'ko80', label:'M80', home:'1er Gr.L',        away:'3e Gr.E/H/I/J/K', date:'1er juil.', time:'12h00', stadium:'Mercedes-Benz Stadium', city:'Atlanta'},
      {id:'ko82', label:'M82', home:'1er Gr.G',        away:'3e Gr.A/E/H/I/J', date:'1er juil.', time:'16h00', stadium:'Lumen Field',           city:'Seattle'},
      {id:'ko81', label:'M81', home:'1er Gr.D',        away:'3e Gr.B/E/F/I/J', date:'2 juil.',  time:'21h00', stadium:"Levi's Stadium",         city:'San Francisco'},
      {id:'ko84', label:'M84', home:'1er Gr.H',        away:'2e Gr.J',          date:'2 juil.',  time:'15h00', stadium:'SoFi Stadium',           city:'Los Angeles'},
      {id:'ko83', label:'M83', home:'2e Gr.K',         away:'2e Gr.L',          date:'2 juil.',  time:'21h00', stadium:'BMO Field',              city:'Toronto'},
      {id:'ko85', label:'M85', home:'1er Gr.B',        away:'3e Gr.E/F/G/I/J', date:'3 juil.',  time:'21h00', stadium:'BC Place',               city:'Vancouver'},
      {id:'ko86', label:'M86', home:'1er Gr.J',        away:'2e Gr.H',          date:'3 juil.',  time:'15h00', stadium:'Hard Rock Stadium',      city:'Miami'},
      {id:'ko87', label:'M87', home:'1er Gr.K',        away:'3e Gr.D/E/I/J/L', date:'3 juil.',  time:'21h00', stadium:'Estadio Azteca',         city:'Mexico'},
      {id:'ko88', label:'M88', home:'2e Gr.D',         away:'2e Gr.G',          date:'3 juil.',  time:'14h00', stadium:'AT&T Stadium',           city:'Dallas'},
    ]
  },
  {
    round:'8es de finale', dates:'5 – 7 juillet', color:'#2563eb',
    matches:[
      {id:'ko89', label:'M89', home:'Vainq. M74', away:'Vainq. M77', date:'5 juil.', time:'17h00', stadium:'Lincoln Financial Field', city:'Philadelphie'},
      {id:'ko90', label:'M90', home:'Vainq. M73', away:'Vainq. M75', date:'5 juil.', time:'13h00', stadium:'NRG Stadium',             city:'Houston'},
      {id:'ko91', label:'M91', home:'Vainq. M76', away:'Vainq. M78', date:'5 juil.', time:'16h00', stadium:'MetLife Stadium',         city:'New York'},
      {id:'ko92', label:'M92', home:'Vainq. M79', away:'Vainq. M80', date:'5 juil.', time:'20h00', stadium:'Estadio Azteca',          city:'Mexico'},
      {id:'ko93', label:'M93', home:'Vainq. M83', away:'Vainq. M84', date:'6 juil.', time:'14h00', stadium:'AT&T Stadium',            city:'Dallas'},
      {id:'ko94', label:'M94', home:'Vainq. M81', away:'Vainq. M82', date:'6 juil.', time:'19h00', stadium:'Lumen Field',             city:'Seattle'},
      {id:'ko95', label:'M95', home:'Vainq. M86', away:'Vainq. M88', date:'7 juil.', time:'12h00', stadium:'Mercedes-Benz Stadium',   city:'Atlanta'},
      {id:'ko96', label:'M96', home:'Vainq. M85', away:'Vainq. M87', date:'7 juil.', time:'16h00', stadium:'BC Place',                city:'Vancouver'},
    ]
  },
  {
    round:'Quarts de finale', dates:'9 – 11 juillet', color:'#0891b2',
    matches:[
      {id:'ko97',  label:'QF1', home:'Vainq. M89', away:'Vainq. M90', date:'9 juil.',  time:'17h00', stadium:'Gillette Stadium',     city:'Boston'},
      {id:'ko98',  label:'QF2', home:'Vainq. M93', away:'Vainq. M94', date:'10 juil.', time:'15h00', stadium:'SoFi Stadium',         city:'Los Angeles'},
      {id:'ko99',  label:'QF3', home:'Vainq. M91', away:'Vainq. M92', date:'11 juil.', time:'17h00', stadium:'Hard Rock Stadium',    city:'Miami'},
      {id:'ko100', label:'QF4', home:'Vainq. M95', away:'Vainq. M96', date:'11 juil.', time:'13h00', stadium:'Arrowhead Stadium',    city:'Kansas City'},
    ]
  },
  {
    round:'Demi-finales', dates:'14 – 15 juillet', color:'#b45309',
    matches:[
      {id:'ko101', label:'DF1', home:'Vainq. QF1', away:'Vainq. QF2', date:'14 juil.', time:'15h00', stadium:'AT&T Stadium',           city:'Dallas'},
      {id:'ko102', label:'DF2', home:'Vainq. QF3', away:'Vainq. QF4', date:'15 juil.', time:'15h00', stadium:'Mercedes-Benz Stadium',  city:'Atlanta'},
    ]
  },
  {
    round:'3e place', dates:'18 juillet', color:'#475569',
    matches:[
      {id:'ko103', label:'3P', home:'Perdant DF1', away:'Perdant DF2', date:'18 juil.', time:'17h00', stadium:'Hard Rock Stadium', city:'Miami'},
    ]
  },
  {
    round:'🏆 FINALE', dates:'19 juillet', color:'#e8b923',
    matches:[
      {id:'ko104', label:'🏆', home:'Vainq. DF1', away:'Vainq. DF2', date:'19 juil.', time:'15h00', stadium:'MetLife Stadium', city:'New York'},
    ]
  },
];

// GROUPS_DATA — voir data.js


const KO_STATE = {}; // keyed by match id, stores {home, away, time, stadium, city, scoreH, scoreA}

const LS_KEY = 'cdm2026';

function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch(e) { return {}; }
}

function saveState(patch) {
  try {
    const current = loadState();
    localStorage.setItem(LS_KEY, JSON.stringify(Object.assign(current, patch)));
  } catch(e) {}
}

const _state = loadState();

let starred     = _state.starred     || [];
const REACTIONS = _state.reactions  || {};   // { matchId: { emoji: count, _mine: emoji } }
const REACTION_LIST = [
  { key:'heart', emoji:'🧡', label:'J\'adore'    },
  { key:'bulb',  emoji:'💡', label:'Génial !'   },
  { key:'broke', emoji:'💔', label:'Déçu'       },
  { key:'angry', emoji:'😡', label:'En colère' },
];
let currentGroup = 'all';
let currentSearch = '';
let isDark      = _state.isDark !== undefined ? _state.isDark : true;

if (_state.scores) Object.assign(SCORES, _state.scores);
if (_state.ko) Object.assign(KO_STATE, _state.ko);

function getFlag(name) { return FLAGS[name] || '🏴'; }

function renderMatchCard(m, container) {
  const isStarred = starred.includes(m.id);
  const color = GROUP_COLORS[m.group] || GROUP_COLORS.KO;
  const isFeat = m.featured || FEATURED.some(f => f.includes(m.home.split(' ')[0]) || f.includes(m.away.split(' ')[0]));
  const score = SCORES[m.id];
  const isHaiti = m.home === 'Haïti' || m.away === 'Haïti';
  const isLive = false; // sera géré dynamiquement
  const div = document.createElement('div');
  div.className = 'match-card' + (score ? ' has-score' : '') + (isHaiti ? ' match-haiti' : '');
  div.dataset.id = m.id;
  div.dataset.group = m.group;
  div.dataset.text = (m.home + ' ' + m.away + ' ' + m.stadium + ' ' + m.city + ' ' + m.date).toLowerCase();
  div.style.setProperty('--group-color', color);

  let scoreHTML = '';
  if (score && (score.home !== null && score.home !== undefined && score.home !== '')) {
    const scorersText = score.scorers && score.scorers.length
      ? score.scorers.map(s => `${s.name}${s.minute ? ' ' + s.minute + "'" : ''}`).join(' · ')
      : '';
    scoreHTML = `
      <div class="score-badge">
        <span class="score-num">${score.home}</span>
        <span class="score-sep">–</span>
        <span class="score-num">${score.away}</span>
      </div>
      ${scorersText ? `<div class="score-scorers">${scorersText}</div>` : ''}
      <div class="edit-hint">✏ modifier</div>
    `;
  }

  const opponent = isHaiti ? (m.home === 'Haïti' ? m.away : m.home) : null;
  const waText = encodeURIComponent(`🏆 FIFA Coupe du Monde 2026\n${getFlag(m.home)} ${m.home} vs ${m.away} ${getFlag(m.away)}\n📅 ${m.date} · ${m.day}\n🏟️ ${m.stadium}, ${m.city}\n\nVia AYITI nan Mondyal`);
  const waLink = `https://wa.me/?text=${waText}`;

  div.innerHTML = `
    ${isHaiti ? `<div class="haiti-badge">🇭🇹 Haïti joue !</div>` : (isFeat ? `<div class="featured-badge">🔥 Choc</div>` : '')}
    <div class="match-meta">
      <span class="match-group">${m.label || 'GROUPE ' + m.group}</span>
      <span class="match-date">📅 ${m.date} · ${m.day || ''}${m.time ? ' · 🕐 ' + m.time : ''}</span>
    </div>
    <div class="match-teams">
      <div class="team" onclick="event.stopPropagation(); openTeamFromMatch('${m.home}')" style="cursor:pointer;" title="Infos ${m.home}">
        <div class="team-flag">${getFlag(m.home)}</div>
        <div class="team-name" style="text-decoration:underline dotted;text-underline-offset:3px;">${m.home}</div>
      </div>
      <div class="score-btn" onclick="event.stopPropagation(); toggleScoreEditor(${m.id}, this)" title="Ajouter le score">
        <span class="score-btn-label">Score</span>
        <span class="${score && score.home !== null && score.home !== undefined && score.home !== '' ? 'score-btn-current' : 'score-btn-vs'}" id="vs-display-${m.id}">
          ${score && score.home !== null && score.home !== undefined && score.home !== '' ? score.home + '–' + score.away : 'VS'}
        </span>
        <span class="score-btn-label">⚽</span>
      </div>
      <div class="team" onclick="event.stopPropagation(); openTeamFromMatch('${m.away}')" style="cursor:pointer;" title="Infos ${m.away}">
        <div class="team-flag">${getFlag(m.away)}</div>
        <div class="team-name" style="text-decoration:underline dotted;text-underline-offset:3px;">${m.away}</div>
      </div>
    </div>
    ${scoreHTML}
    <div class="score-inline-editor" id="score-editor-${m.id}" onclick="event.stopPropagation()">
      <div class="score-inline-row">
        <div class="score-inline-team">${m.home}</div>
        <input class="score-inline-input" id="si-home-${m.id}" type="number" min="0" max="30" placeholder="0" value="${score && score.home !== undefined ? score.home : ''}">
        <span class="score-inline-sep">–</span>
        <input class="score-inline-input" id="si-away-${m.id}" type="number" min="0" max="30" placeholder="0" value="${score && score.away !== undefined ? score.away : ''}">
        <div class="score-inline-team">${m.away}</div>
      </div>
      <div class="score-inline-actions">
        <button class="score-inline-cancel" onclick="event.stopPropagation(); closeScoreEditor(${m.id})">Annuler</button>
        <button class="score-inline-save" onclick="event.stopPropagation(); saveInlineScore(${m.id})">✓ Enregistrer</button>
      </div>
    </div>
    <div class="match-info">
      <div class="match-stadium">
        <span class="match-stadium-icon">🏟️</span>
        <span>${m.stadium}, ${m.city}</span>
      </div>
      <a class="btn-whatsapp" href="${waLink}" target="_blank" rel="noopener" onclick="event.stopPropagation(); addPoints(2, 'Partage WhatsApp');" title="Partager sur WhatsApp">
        <span>📲</span><span>WA</span>
      </a>
      <button class="match-star ${isStarred ? 'starred' : ''}" onclick="event.stopPropagation(); toggleStar(${m.id}, this)">
        ${isStarred ? '⭐' : '☆'}
      </button>
    </div>
    <div class="match-team-reactions" onclick="event.stopPropagation()">
      <div class="team-react-col">
        <div class="team-react-name">${getFlag(m.home)} ${m.home}</div>
        <div class="team-react-btns" id="reactions-${m.id}-home">
          ${REACTION_LIST.map(r => {
            const key = r.key + '_home';
            const count = (REACTIONS[m.id] && REACTIONS[m.id][key]) || 0;
            const reacted = REACTIONS[m.id] && REACTIONS[m.id]['_mine_home'] === r.key;
            return `<button class="reaction-btn${reacted ? ' reacted' : ''}" data-key="${key}" onclick="event.stopPropagation(); reactTeam(${m.id}, '${r.key}', 'home'); addPoints(1, 'Réaction');" title="${r.label} ${m.home}">
              <span class="reaction-emoji">${r.emoji}</span>
              <span class="reaction-count">${count || ''}</span>
            </button>`;
          }).join('')}
        </div>
      </div>
      <div class="team-react-col">
        <div class="team-react-name">${getFlag(m.away)} ${m.away}</div>
        <div class="team-react-btns" id="reactions-${m.id}-away">
          ${REACTION_LIST.map(r => {
            const key = r.key + '_away';
            const count = (REACTIONS[m.id] && REACTIONS[m.id][key]) || 0;
            const reacted = REACTIONS[m.id] && REACTIONS[m.id]['_mine_away'] === r.key;
            return `<button class="reaction-btn${reacted ? ' reacted' : ''}" data-key="${key}" onclick="event.stopPropagation(); reactTeam(${m.id}, '${r.key}', 'away'); addPoints(1, 'Réaction');" title="${r.label} ${m.away}">
              <span class="reaction-emoji">${r.emoji}</span>
              <span class="reaction-count">${count || ''}</span>
            </button>`;
          }).join('')}
        </div>
      </div>
    </div>
    <div class="match-comments-section" onclick="event.stopPropagation()">
      <button class="comments-toggle-btn" onclick="event.stopPropagation(); toggleComments(${m.id}, this)">
        💬 Commentaires
      </button>
      <div class="comments-box" id="comments-box-${m.id}" onclick="event.stopPropagation()">
        <div id="comments-list-${m.id}"></div>
        <div class="comment-form" onclick="event.stopPropagation()">
          <input class="comment-pseudo-input" id="cpseudo-${m.id}" type="text" placeholder="Ton prénom (optionnel)" maxlength="30" onclick="event.stopPropagation()">
          <textarea class="comment-input" id="ctext-${m.id}" rows="2" placeholder="Ton commentaire..." maxlength="280" onclick="event.stopPropagation()"></textarea>
          <button class="comment-submit-btn" onclick="event.stopPropagation(); submitComment(${m.id})">Envoyer</button>
          <div class="comment-pending-notice">⏳ Visible après validation de l'admin</div>
        </div>
      </div>
    </div>
  `;

  div.addEventListener('click', () => openModal(m.id));
  container.appendChild(div);
}

function renderCalendar() {
  const cont = $('matchesContainer');
  cont.innerHTML = '';
  const byDate = {};
  MATCHES.forEach(m => {
    if (!byDate[m.date]) byDate[m.date] = [];
    byDate[m.date].push(m);
  });
  const sortedDates = Object.keys(byDate).sort((a, b) => {
    const dayA = parseInt(a.split(' ')[0]);
    const dayB = parseInt(b.split(' ')[0]);
    return dayA - dayB;
  });
  sortedDates.forEach(date => {
    const ms = byDate[date];
    const section = document.createElement('div');
    section.className = 'phase-section';
    section.innerHTML = `<div class="phase-title">${date} 2026</div>`;
    const grid = document.createElement('div');
    grid.className = 'matches-grid';
    ms.forEach(m => renderMatchCard(m, grid));
    section.appendChild(grid);
    cont.appendChild(section);
  });
  applyFilters();
}

function computeStandings(letter) {
  const teams = GROUPS_DATA[letter].teams;
  const stats = {};
  teams.forEach(t => { stats[t] = {j:0, g:0, n:0, p:0, bp:0, bc:0, pts:0}; });
  MATCHES.filter(m => m.group === letter).forEach(m => {
    const s = SCORES[m.id];
    if (!s || s.home === '' || s.home === null || s.home === undefined) return;
    const h = parseInt(s.home), a = parseInt(s.away);
    if (isNaN(h) || isNaN(a)) return;
    stats[m.home].j++; stats[m.away].j++;
    stats[m.home].bp += h; stats[m.home].bc += a;
    stats[m.away].bp += a; stats[m.away].bc += h;
    if (h > a) { stats[m.home].g++; stats[m.home].pts+=3; stats[m.away].p++; }
    else if (h < a) { stats[m.away].g++; stats[m.away].pts+=3; stats[m.home].p++; }
    else { stats[m.home].n++; stats[m.home].pts++; stats[m.away].n++; stats[m.away].pts++; }
  });
  return teams.map(t => ({name:t, ...stats[t]}))
    .sort((a,b) => b.pts-a.pts || (b.bp-b.bc)-(a.bp-a.bc) || b.bp-a.bp);
}

function renderGroups() {
  const grid = $('groupsGrid');
  grid.innerHTML = '';
  Object.entries(GROUPS_DATA).forEach(([letter, data]) => {
    const color = GROUP_COLORS[letter];
    const standings = computeStandings(letter);
    const hasScores = standings.some(s => s.j > 0);
    const div = document.createElement('div');
    div.className = 'group-card';
    div.innerHTML = `
      <div class="group-card-header" style="background:${color}">
        GROUPE ${letter}
        <span>${hasScores ? '🏆 Classement' : '4 équipes'}</span>
      </div>
      <div class="group-teams-list">
        ${data.teams.map(t => `
          <div class="group-team-row group-team-clickable" onclick="openGroupTeamModal('${t.replace(/'/g,"\\'")}','${letter}')" style="cursor:pointer;" title="Voir fiche ${t}">
            <div class="group-team-flag">${getFlag(t)}</div>
            <div class="group-team-name">${t}</div>
            <div class="ko-section-lbl" style="color:${color};margin-left:auto;">›</div>
          </div>
        `).join('')}
      </div>
      ${hasScores ? `
      <div class="group-standings">
        <div class="standings-header">
          <span>#</span><span>Équipe</span><span>J</span><span>G</span><span>N</span><span>P</span><span>Pts</span>
        </div>
        ${standings.map((s,i) => `
          <div class="standings-row">
            <span class="standings-rank ${i<2?'top2':''}">${i+1}</span>
            <span class="standings-team"><span>${getFlag(s.name)}</span><span>${s.name}</span></span>
            <span class="standings-num">${s.j}</span>
            <span class="standings-num">${s.g}</span>
            <span class="standings-num">${s.n}</span>
            <span class="standings-num">${s.p}</span>
            <span class="standings-pts">${s.pts}</span>
          </div>
        `).join('')}
      </div>` : ''}
    `;
    grid.appendChild(div);
  });
}

function openGroupTeamModal(teamName, group) {
  const data = TEAM_DATA[teamName] || {};
  const color = GROUP_COLORS[group] || 'var(--accent)';
  const titreCount = data.titres ? data.titres.length : 0;
  const titreHTML = data.titres && data.titres.length
    ? data.titres.map(y => `<span class="titre-badge-inline">🏆 ${y}</span>`).join(' ')
    : `<span class="no-titre">Aucun titre mondial</span>`;

  const overlay = $('groupTeamOverlay');
  $('gtFlag').textContent = getFlag(teamName);
  $('gtName').textContent = teamName;
  $('gtGroup').textContent = `Groupe ${group}`;
  $('gtGroup').style.color = color;
  $('gtContent').innerHTML = `
    <div class="stat-mini-grid">
      <div class="stat-mini-cell">
        <div class="stat-mini-num">${data.participations || '?'}</div>
        <div class="stat-mini-lbl">Participations</div>
      </div>
      <div class="stat-mini-cell">
        <div class="stat-mini-num" style="color:${titreCount?'var(--accent)':'var(--text2)'};">${titreCount}</div>
        <div class="stat-mini-lbl">Titre(s)</div>
      </div>
      <div class="stat-mini-cell">
        <div class="stat-mini-num" style="font-size:16px;color:${color};line-height:1.2;">${data.continent || '—'}</div>
        <div class="stat-mini-lbl">Confédération</div>
      </div>
    </div>
    <div class="info-block">
      <div class="info-block-lbl">🏅 Meilleur résultat</div>
      <div class="info-block-val">${data.meilleur || '—'}</div>
    </div>
    <div class="info-block-last">
      <div class="info-block-lbl">🏆 Titres</div>
      <div class="info-block-tags">${titreHTML}</div>
    </div>
  `;
  overlay.classList.add('open');
}

function closeGroupTeamModal() {
  $('groupTeamOverlay').classList.remove('open');
}

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
function renderBracket() {
  const s = loadState();
  if (s.ko) Object.assign(KO_STATE, s.ko);

  const cont = $('bracketContent');
  cont.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'bracket-grid';

  KNOCKOUT_ROUNDS.forEach(r => {
    const section = document.createElement('div');
    section.className = 'bracket-round';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'bracket-round-title';
    titleDiv.style.background = r.color || 'var(--knockout)';
    titleDiv.innerHTML = `<span>${r.round}</span><span>${r.dates}</span>`;
    section.appendChild(titleDiv);

    const row = document.createElement('div');
    row.className = 'bracket-matches-row';

    const isReadonly = !!r.readonly;

    r.matches.forEach(m => {
      const saved = KO_STATE[m.id] || {};
      const homeVal = saved.home    || m.home    || '';
      const awayVal = saved.away    || m.away    || '';
      const timeVal = saved.time    || m.time    || '';
      const stadVal = saved.stadium || m.stadium || '';
      const cityVal = saved.city    || m.city    || '';
      const scoreH  = saved.scoreH !== undefined ? saved.scoreH : '';
      const scoreA  = saved.scoreA !== undefined ? saved.scoreA : '';

      const hasScore = scoreH !== '' && scoreA !== '';
      const hasTeams = homeVal && awayVal;

      const card = document.createElement('div');
      card.className = 'bracket-match ko-card' + (isReadonly ? ' ko-readonly' : '');
      card.dataset.id = m.id;
      card.style.borderColor = r.color || 'var(--border)';

      if (isReadonly) {
        card.innerHTML = `
          <div class="ko-card-label" style="background:${r.color || 'var(--knockout)'}">
            ${m.label}
          </div>
          <div class="ko-team" style="padding:10px 10px 6px;">
            <span class="ko-flag" style="opacity:0.3;">⬜</span>
            <span class="ko-name ko-pending">À déterminer</span>
          </div>
          <div class="ko-separator"></div>
          <div class="ko-team" style="padding:6px 10px 10px;">
            <span class="ko-flag" style="opacity:0.3;">⬜</span>
            <span class="ko-name ko-pending">À déterminer</span>
          </div>
          <div class="ko-meta">
            ${timeVal ? `<span>🕐 ${timeVal}</span>` : ''}
            ${stadVal ? `<span>🏟️ ${stadVal}${cityVal ? ', ' + cityVal : ''}</span>` : ''}
          </div>
        `;
      } else {
        card.title = 'Cliquer pour modifier';
        card.innerHTML = `
          <div class="ko-card-label" style="background:${r.color || 'var(--knockout)'}">
            ${m.label}
            ${hasScore ? `<span class="ko-score-badge">${scoreH}–${scoreA}</span>` : ''}
          </div>
          <div class="ko-team ${hasScore && parseInt(scoreH) > parseInt(scoreA) ? 'ko-winner' : ''}">
            <span class="ko-flag">${hasTeams ? getFlag(homeVal) : '❓'}</span>
            <span class="ko-name">${homeVal || '—'}</span>
            ${hasScore ? `<span class="ko-pts">${scoreH}</span>` : ''}
          </div>
          <div class="ko-separator"></div>
          <div class="ko-team ${hasScore && parseInt(scoreA) > parseInt(scoreH) ? 'ko-winner' : ''}">
            <span class="ko-flag">${hasTeams ? getFlag(awayVal) : '❓'}</span>
            <span class="ko-name">${awayVal || '—'}</span>
            ${hasScore ? `<span class="ko-pts">${scoreA}</span>` : ''}
          </div>
          ${timeVal || stadVal ? `
          <div class="ko-meta">
            ${timeVal ? `<span>🕐 ${timeVal}</span>` : ''}
            ${stadVal ? `<span>🏟️ ${stadVal}${cityVal ? ', ' + cityVal : ''}</span>` : ''}
          </div>` : ''}
          <div class="ko-edit-hint">✏ modifier</div>
        `;
        card.addEventListener('click', () => openKOModal(m.id, r));
      }

      row.appendChild(card);
    });

    section.appendChild(row);
    grid.appendChild(section);
  });

  cont.appendChild(grid);
}

function renderLegend() {
  const bar = $('legendBar');
  bar.innerHTML = Object.entries(GROUP_COLORS).filter(([k]) => k !== 'KO').map(([letter, color]) =>
    `<div class="legend-item"><div class="legend-dot" style="background:${color}"></div>Groupe ${letter}</div>`
  ).join('');
}

function renderStarred() {
  const cont = $('starredContainer');
  cont.innerHTML = '';
  const starredMatches = MATCHES.filter(m => starred.includes(m.id));
  if (!starredMatches.length) {
    cont.innerHTML = '<div class="empty-starred">Aucun match favori.<br>Cliquez sur ☆ sur un match pour l\'ajouter ici.</div>';
    return;
  }
  starredMatches.forEach(m => renderMatchCard(m, cont));
}

function applyFilters() {
  const selDate  = $('filterDate')  ? $('filterDate').value  : '';
  const selCity  = $('filterCity')  ? $('filterCity').value  : '';
  const selStade = $('filterStade') ? $('filterStade').value : '';

  const cards = document.querySelectorAll('#matchesContainer .match-card');
  cards.forEach(card => {
    const mid   = parseInt(card.dataset.id);
    const m     = MATCHES.find(x => x.id === mid);
    const group = card.dataset.group;
    const text  = card.dataset.text || '';

    const groupOk = currentGroup === 'all' || group === currentGroup;
    const searchOk = !currentSearch || text.includes(currentSearch.toLowerCase());
    const dateOk  = !selDate  || (m && m.date     === selDate);
    const cityOk  = !selCity  || (m && m.city     === selCity);
    const stadeOk = !selStade || (m && m.stadium  === selStade);

    card.style.display = (groupOk && searchOk && dateOk && cityOk && stadeOk) ? '' : 'none';
  });
  document.querySelectorAll('#matchesContainer .phase-section').forEach(sec => {
    const visible = [...sec.querySelectorAll('.match-card')].some(c => c.style.display !== 'none');
    sec.style.display = visible ? '' : 'none';
  });
}

function filterGroup(group, btn) {
  currentGroup = group;
  currentSearch = ''; // Reset recherche équipe
  const si = $('searchInput'); if (si) si.value = '';
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('active');
    b.style.background = '';
    b.style.color = '';
    b.style.border = '';
  });
  btn.classList.add('active');
  if (group !== 'all') {
    const color = GROUP_COLORS[group];
    btn.style.background = color;
    btn.style.color = '#fff';
    btn.style.border = 'none';
  }
  document.querySelectorAll('.legend-item').forEach(item => {
    if (group === 'all') {
      item.style.display = '';
    } else {
      const letter = item.textContent.trim().replace('Groupe ', '');
      item.style.display = letter === group ? '' : 'none';
    }
  });
  const calView = document.getElementById('view-calendar');
  if (calView && calView.style.display === 'none') {
    const calTab = document.querySelector('.tab[onclick*="calendar"]');
    if (calTab) showViewInternal('calendar', calTab);
  }
  applyFilters();
}

function filterSearch() {
  currentSearch = $('searchInput').value;
  applyFilters();
}

function reactMatch(id, key) {
  if (window._fb) {
    window.fbReactMatch(id, key);
    const btn = document.querySelector(`#reactions-${id} [data-key="${key}"]`);
    if (btn) {
      const emoji = btn.querySelector('.reaction-emoji');
      if (emoji) { emoji.style.animation='none'; setTimeout(()=>{emoji.style.animation='';},10); }
    }
  } else {
    if (!REACTIONS[id]) REACTIONS[id] = {};
    const prev = REACTIONS[id]['_mine'];
    if (prev) {
      REACTIONS[id][prev] = Math.max(0,(REACTIONS[id][prev]||1)-1);
      if (!REACTIONS[id][prev]) delete REACTIONS[id][prev];
      delete REACTIONS[id]['_mine'];
    }
    if (prev !== key) {
      REACTIONS[id][key] = (REACTIONS[id][key]||0)+1;
      REACTIONS[id]['_mine'] = key;
    }
    saveState({ reactions: REACTIONS });
    const container = $('reactions-' + id);
    if (!container) return;
    container.querySelectorAll('.reaction-btn').forEach((btn,i) => {
      const r = REACTION_LIST[i];
      const count = (REACTIONS[id]&&REACTIONS[id][r.key])||0;
      const reacted = REACTIONS[id]&&REACTIONS[id]['_mine']===r.key;
      btn.classList.toggle('reacted', reacted);
      btn.querySelector('.reaction-count').textContent = count||'';
    });
  }
}

function toggleComments(matchId, btn) {
  const box = $('comments-box-' + matchId);
  if (!box) return;
  const isOpen = box.classList.toggle('open');
  btn.textContent = isOpen ? '💬 Masquer commentaires' : '💬 Commentaires';
  if (isOpen) renderCommentsList(matchId);
}

function renderCommentsList(matchId) {
  const el = $('comments-list-' + matchId);
  if (!el) return;
  const data = (window._fbComments && window._fbComments[matchId]) || {};
  const approved = Object.entries(data).filter(([,c]) => c.approved);
  if (!approved.length) {
    el.innerHTML = '<div class="comment-pending-notice">Aucun commentaire pour l\'instant.</div>';
    return;
  }
  approved.sort((a,b) => a[1].timestamp - b[1].timestamp);
  el.innerHTML = approved.map(([,c]) => `
    <div class="comment-item">
      <div class="comment-pseudo">${c.pseudo || 'Anonyme'}</div>
      <div class="comment-text">${c.text.replace(/</g,'&lt;')}</div>
      <div class="comment-time">${new Date(c.timestamp).toLocaleString('fr-FR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}</div>
    </div>`).join('');
}

function submitComment(matchId) {
  const textEl   = $('ctext-'   + matchId);
  const pseudoEl = $('cpseudo-' + matchId);
  const text   = textEl   ? textEl.value.trim()   : '';
  const pseudo = pseudoEl ? pseudoEl.value.trim() : '';
  if (!text) { textEl && (textEl.style.borderColor='#e74c3c'); return; }
  if (window._fb) {
    window.fbPostComment(matchId, text, pseudo || 'Anonyme');
    textEl.value = '';
    textEl.style.borderColor = '';
    const notice = textEl.closest('.comment-form').querySelector('.comment-pending-notice');
    if (notice) { notice.textContent = '✅ Commentaire envoyé, en attente de validation !'; }
  }
}

const ADMIN_PWD = '123Touppouyo';
let adminAuthenticated = false;

function openAdmin() {
  if (adminAuthenticated) { showAdminPanel(); return; }
  const overlay = document.createElement('div');
  overlay.className = 'admin-login-overlay';
  overlay.id = 'adminLoginOverlay';
  overlay.innerHTML = `
    <div class="admin-login-box">
      <div class="admin-login-title">🔐 ADMIN</div>
      <input class="admin-pwd-input" id="adminPwdInput" type="password" placeholder="Mot de passe" onkeydown="if(event.key==='Enter')checkAdminPwd()">
      <button class="admin-login-btn" onclick="checkAdminPwd()">Entrer</button>
      <button onclick="document.getElementById('adminLoginOverlay').remove()" style="background:none;border:none;color:var(--text2);font-family:var(--font-ui);font-size:11px;cursor:pointer;margin-top:10px;width:100%;">Annuler</button>
      <div class="admin-login-error" id="adminLoginError"></div>
    </div>`;
  document.body.appendChild(overlay);
  setTimeout(() => $('adminPwdInput') && $('adminPwdInput').focus(), 100);
}

function checkAdminPwd() {
  const val = $('adminPwdInput') ? $('adminPwdInput').value : '';
  if (val === ADMIN_PWD) {
    adminAuthenticated = true;
    const ov = $('adminLoginOverlay');
    if (ov) ov.remove();
    showAdminPanel();
  } else {
    const err = $('adminLoginError');
    if (err) err.textContent = '❌ Mot de passe incorrect';
  }
}

function showAdminPanel() {
  $('adminPanel').style.display = 'block';
  renderAdminComments();
}

function closeAdminPanel() {
  $('adminPanel').style.display = 'none';
}

function renderAdminComments() {
  const cont = $('adminCommentsList');
  if (!cont) return;
  const data = window._fbComments || {};
  const all = [];
  Object.entries(data).forEach(([matchId, comments]) => {
    Object.entries(comments).forEach(([commentId, c]) => {
      const m = MATCHES.find(x => x.id === parseInt(matchId));
      all.push({ matchId, commentId, ...c, matchLabel: m ? `${m.home} vs ${m.away}` : 'Match #' + matchId });
    });
  });
  all.sort((a,b) => b.timestamp - a.timestamp);
  const pending  = all.filter(c => !c.approved);
  const approved = all.filter(c => c.approved);
  const display  = [...pending, ...approved];

  if (!display.length) {
    cont.innerHTML = '<div class="admin-empty">Aucun commentaire pour l\'instant.</div>';
    return;
  }
  cont.innerHTML = display.map(c => `
    <div class="admin-comment-card">
      <div class="admin-comment-meta">
        <span class="admin-comment-pseudo">${c.pseudo || 'Anonyme'}</span>
        <span>${new Date(c.timestamp).toLocaleString('fr-FR')}</span>
        <span style="color:var(--group-c)">⚽ ${c.matchLabel}</span>
        <span class="${c.approved ? 'admin-badge-approved' : 'admin-badge-pending'}">${c.approved ? '✅ Approuvé' : '⏳ En attente'}</span>
      </div>
      <div class="admin-comment-text">${c.text.replace(/</g,'&lt;')}</div>
      <div class="admin-comment-actions">
        ${!c.approved ? `<button class="btn-approve" onclick="fbApproveComment('${c.matchId}','${c.commentId}')">✅ Approuver</button>` : ''}
        <button class="btn-reject" onclick="fbDeleteComment('${c.matchId}','${c.commentId}')">🗑 Supprimer</button>
      </div>
    </div>`).join('');
}

function toggleStar(id, btn) {
  if (starred.includes(id)) {
    starred = starred.filter(s => s !== id);
    btn.classList.remove('starred');
    btn.textContent = '☆';
  } else {
    starred.push(id);
    btn.classList.add('starred');
    btn.textContent = '⭐';
  }
  saveState({ starred });
}

function showView(view, btn) {
  _currentView = view;
  _pushNav({ sidebar: 'closed', view: view });
  showViewInternal(view, btn);
}

function showViewInternal(view, btn) {
  ['calendar','groups','knockout','starred','ranking','scorers','pronostics','ambassadors'].forEach(v => {
    const el = $('view-' + v);
    if (el) el.style.display = 'none';
  });
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const el = $('view-' + view);
  if (el) el.style.display = 'block';
  if (view === 'starred')      renderStarred();
  if (view === 'ranking')      renderRanking();
  if (view === 'scorers')      renderScorers();
  if (view === 'pronostics')   renderPronostics();
  if (view === 'ambassadors')  renderAmbassadors();
}

const FONT_URLS = {
  "'Playfair Display', serif":      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=optional',
  "'Rajdhani', sans-serif":         'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=optional',
  "'Roboto Condensed', sans-serif": 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=optional',
  "'Space Grotesk', sans-serif":    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=optional',
};
const loadedFonts = new Set();

function setFont(font) {
  if (FONT_URLS[font] && !loadedFonts.has(font)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONT_URLS[font];
    document.head.appendChild(link);
    loadedFonts.add(font);
  }
  document.body.style.fontFamily = font;
  saveState({ font });
}

function setAccent(color) {
  document.documentElement.style.setProperty('--accent', color);
  document.querySelector('.countdown-bar').style.background = `linear-gradient(135deg, ${color} 0%, var(--accent2) 100%)`;
  saveState({ accent: color });
}

function setAccent2(color) {
  document.documentElement.style.setProperty('--accent2', color);
  saveState({ accent2: color });
}

function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle('theme-light', !isDark);
  applyThemeLabels();
  saveState({ isDark });
}

function applyThemeLabels() {
  const icon  = isDark ? '☀️' : '🌙';
  const label = isDark ? 'Clair' : 'Sombre';
  ['themeIcon','themeIcon2'].forEach(id => { const el = $(id); if(el) el.textContent = icon; });
  ['themeLabel','themeLabel2'].forEach(id => { const el = $(id); if(el) el.textContent = label; });
  document.body.classList.toggle('theme-light', !isDark);
}

function updateCountdown() {
  const target = new Date('2026-06-12T03:00:00Z'); // 11 juin 21h Mexico City = 12 juin 03h UTC
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) {
    $('cd-days').textContent = '🏆';
    $('cd-hours').textContent = '';
    $('cd-mins').textContent = '';
    $('cd-secs').textContent = '';
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  $('cd-days').textContent  = String(d).padStart(2, '0');
  $('cd-hours').textContent = String(h).padStart(2, '0');
  $('cd-mins').textContent  = String(m).padStart(2, '0');
  $('cd-secs').textContent  = String(s).padStart(2, '0');
}

let currentModalId = null;

function openModal(matchId) {
  const m = MATCHES.find(x => x.id === matchId);
  if (!m) return;
  currentModalId = matchId;

  $('mHomeFlag').textContent = getFlag(m.home);
  $('mAwayFlag').textContent = getFlag(m.away);
  $('mHomeName').textContent = m.home;
  $('mAwayName').textContent = m.away;
  $('mHomeLabelScore').textContent = m.home.substring(0, 8).toUpperCase();
  $('mAwayLabelScore').textContent = m.away.substring(0, 8).toUpperCase();
  $('mMeta').textContent = `📅 ${m.date} · 🏟️ ${m.stadium}, ${m.city}`;

  const score = SCORES[matchId];
  $('mScoreHome').value = score ? score.home : '';
  $('mScoreAway').value = score ? score.away : '';

  const list = $('scorersList');
  list.innerHTML = '';
  if (score && score.scorers && score.scorers.length) {
    score.scorers.forEach(s => addScorerRow(s));
  }

  $('modalOverlay').classList.add('open');
  $('mScoreHome').focus();
}

function closeModal() {
  $('modalOverlay').classList.remove('open');
  currentModalId = null;
}

function closeModalOnOverlay(e) {
  if (e.target === $('modalOverlay')) closeModal();
}

function addScorerRow(data) {
  const m = MATCHES.find(x => x.id === currentModalId);
  if (!m) return;
  const list = $('scorersList');
  const row = document.createElement('div');
  row.className = 'scorer-row';
  row.innerHTML = `
    <select class="scorer-select">
      <option value="">-- Équipe --</option>
      <option value="${m.home}" ${data && data.team === m.home ? 'selected' : ''}>${getFlag(m.home)} ${m.home}</option>
      <option value="${m.away}" ${data && data.team === m.away ? 'selected' : ''}>${getFlag(m.away)} ${m.away}</option>
    </select>
    <input class="scorer-min" type="text" placeholder="Nom" style="flex:2;width:auto;" value="${data ? data.name : ''}">
    <input class="scorer-min" type="number" placeholder="min" min="1" max="120" value="${data ? data.minute : ''}">
    <button class="scorer-del" onclick="this.closest('.scorer-row').remove()">×</button>
  `;
  list.appendChild(row);
}

function saveScore() {
  if (currentModalId === null) return;
  const homeVal = $('mScoreHome').value;
  const awayVal = $('mScoreAway').value;

  const scorers = [];
  document.querySelectorAll('#scorersList .scorer-row').forEach(row => {
    const inputs = row.querySelectorAll('input');
    const team = row.querySelector('select').value;
    const name = inputs[0].value.trim();
    const minute = inputs[1].value.trim();
    if (name) scorers.push({ team, name, minute });
  });

  if (homeVal !== '' && awayVal !== '') {
    SCORES[currentModalId] = {
      home: parseInt(homeVal),
      away: parseInt(awayVal),
      scorers
    };
  }
  saveState({ scores: SCORES });

  const m = MATCHES.find(x => x.id === currentModalId);
  const oldCard = document.querySelector(`.match-card[data-id="${currentModalId}"]`);
  if (oldCard) {
    const parent = oldCard.parentNode;
    oldCard.remove();
    const tmp = document.createElement('div');
    renderMatchCard(m, tmp);
    parent.appendChild(tmp.firstChild);
    applyFilters();
  }
  if ($('view-starred').style.display !== 'none') {
    renderStarred();
  }
  renderHaitiMatches();

  closeModal();
}

function clearScore() {
  if (currentModalId === null) return;
  delete SCORES[currentModalId];
  saveState({ scores: SCORES });
  $('mScoreHome').value = '';
  $('mScoreAway').value = '';
  $('scorersList').innerHTML = '';

  const m = MATCHES.find(x => x.id === currentModalId);
  const oldCard = document.querySelector(`.match-card[data-id="${currentModalId}"]`);
  if (oldCard) {
    const parent = oldCard.parentNode;
    oldCard.remove();
    const tmp = document.createElement('div');
    renderMatchCard(m, tmp);
    parent.appendChild(tmp.firstChild);
    applyFilters();
  }
  if ($('view-starred').style.display !== 'none') renderStarred();
  closeModal();
}

// TEAM_DATA — voir data.js


const PALMARES = [
  { year:2022, winner:'Argentine',   winnerFlag:'🇦🇷', finalist:'France',         finalistFlag:'🇫🇷', host:'Qatar',            score:'3-3 a.p. (4-2 tab)' },
  { year:2018, winner:'France',      winnerFlag:'🇫🇷', finalist:'Croatie',        finalistFlag:'🇭🇷', host:'Russie',           score:'4-2' },
  { year:2014, winner:'Allemagne',   winnerFlag:'🇩🇪', finalist:'Argentine',      finalistFlag:'🇦🇷', host:'Brésil',           score:'1-0 a.p.' },
  { year:2010, winner:'Espagne',     winnerFlag:'🇪🇸', finalist:'Pays-Bas',       finalistFlag:'🇳🇱', host:'Afrique du Sud',   score:'1-0 a.p.' },
  { year:2006, winner:'Italie',      winnerFlag:'🇮🇹', finalist:'France',         finalistFlag:'🇫🇷', host:'Allemagne',        score:'1-1 a.p. (5-3 tab)' },
  { year:2002, winner:'Brésil',      winnerFlag:'🇧🇷', finalist:'Allemagne',      finalistFlag:'🇩🇪', host:'Corée du S./Japon',score:'2-0' },
  { year:1998, winner:'France',      winnerFlag:'🇫🇷', finalist:'Brésil',         finalistFlag:'🇧🇷', host:'France',           score:'3-0' },
  { year:1994, winner:'Brésil',      winnerFlag:'🇧🇷', finalist:'Italie',         finalistFlag:'🇮🇹', host:'États-Unis',       score:'0-0 a.p. (3-2 tab)' },
  { year:1990, winner:'Allemagne',   winnerFlag:'🇩🇪', finalist:'Argentine',      finalistFlag:'🇦🇷', host:'Italie',           score:'1-0' },
  { year:1986, winner:'Argentine',   winnerFlag:'🇦🇷', finalist:'Allemagne',      finalistFlag:'🇩🇪', host:'Mexique',          score:'3-2' },
  { year:1982, winner:'Italie',      winnerFlag:'🇮🇹', finalist:'Allemagne',      finalistFlag:'🇩🇪', host:'Espagne',          score:'3-1' },
  { year:1978, winner:'Argentine',   winnerFlag:'🇦🇷', finalist:'Pays-Bas',       finalistFlag:'🇳🇱', host:'Argentine',        score:'3-1 a.p.' },
  { year:1974, winner:'Allemagne',   winnerFlag:'🇩🇪', finalist:'Pays-Bas',       finalistFlag:'🇳🇱', host:'Allemagne',        score:'2-1' },
  { year:1970, winner:'Brésil',      winnerFlag:'🇧🇷', finalist:'Italie',         finalistFlag:'🇮🇹', host:'Mexique',          score:'4-1' },
  { year:1966, winner:'Angleterre',  winnerFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', finalist:'Allemagne',      finalistFlag:'🇩🇪', host:'Angleterre',       score:'4-2 a.p.' },
  { year:1962, winner:'Brésil',      winnerFlag:'🇧🇷', finalist:'Tchécoslovaquie',finalistFlag:'🇨🇿', host:'Chili',            score:'3-1' },
  { year:1958, winner:'Brésil',      winnerFlag:'🇧🇷', finalist:'Suède',          finalistFlag:'🇸🇪', host:'Suède',            score:'5-2' },
  { year:1954, winner:'Allemagne',   winnerFlag:'🇩🇪', finalist:'Hongrie',        finalistFlag:'🇭🇺', host:'Suisse',           score:'3-2' },
  { year:1950, winner:'Uruguay',     winnerFlag:'🇺🇾', finalist:'Brésil',         finalistFlag:'🇧🇷', host:'Brésil',           score:'2-1 *' },
  { year:1938, winner:'Italie',      winnerFlag:'🇮🇹', finalist:'Hongrie',        finalistFlag:'🇭🇺', host:'France',           score:'4-2' },
  { year:1934, winner:'Italie',      winnerFlag:'🇮🇹', finalist:'Tchécoslovaquie',finalistFlag:'🇨🇿', host:'Italie',           score:'2-1 a.p.' },
  { year:1930, winner:'Uruguay',     winnerFlag:'🇺🇾', finalist:'Argentine',      finalistFlag:'🇦🇷', host:'Uruguay',          score:'4-2' },
];

function openSidebar() {
  $('sidebar').classList.add('open');
  $('sidebarOverlay').classList.add('open');
}
function closeSidebar() {
  $('sidebar').classList.remove('open');
  $('sidebarOverlay').classList.remove('open');
}
function switchSidebarSection(id, btn) {
  document.querySelectorAll('.sidebar-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sidebar-nav-item').forEach(b => b.classList.remove('active'));
  $('section-' + id).classList.add('active');
  btn.classList.add('active');
  _pushNav({ sidebar: 'open', section: id });

  if (id === 'accueil') {
    showSidebarNav(true);
  } else {
    showSidebarNav(false, id);
  }
}

function backToSidebarMenu() {
  showSidebarNav(true);
  document.querySelectorAll('.sidebar-section').forEach(s => s.classList.remove('active'));
  const accueil = document.getElementById('section-accueil');
  if (accueil) accueil.classList.add('active');
  document.querySelectorAll('.sidebar-nav-item').forEach(b => b.classList.remove('active'));
  const firstNav = document.querySelector('.sidebar-nav-item');
  if (firstNav) firstNav.classList.add('active');
}

function showSidebarNav(showAll, currentSection) {
  const nav = document.querySelector('.sidebar-nav');
  const backBtn = document.getElementById('sidebarBackBtn');
  const title = document.getElementById('sidebarTitle');
  const extraItems = document.querySelectorAll('.sidebar-extra');

  if (showAll) {
    if (nav) nav.style.display = '';
    if (backBtn) backBtn.style.display = 'none';
    if (title) title.textContent = 'MENU';
    extraItems.forEach(el => el.style.display = '');
  } else {
    if (nav) nav.style.display = 'none';
    if (backBtn) {
      backBtn.style.display = 'flex';
      const lbl = document.getElementById('sidebarBackLabel');
      const labels = {
        equipes: 'Informations équipes',
        palmares: 'Palmarès',
        legendes: 'Légendes',
        reglages: 'Réglages'
      };
      if (lbl) lbl.textContent = labels[currentSection] || currentSection;
    }
    if (title) title.textContent = '';
    extraItems.forEach(el => el.style.display = 'none');
  }
}

function renderTeamsList() {
  const list = $('teamsList');
  list.innerHTML = '';
  const teams = Object.entries(GROUPS_DATA).flatMap(([letter, data]) =>
    data.teams.map(name => ({ name, group: letter }))
  ).sort((a, b) => a.name.localeCompare(b.name, 'fr'));

  teams.forEach(({ name, group }) => {
    const data = TEAM_DATA[name] || {};
    const div = document.createElement('div');
    div.className = 'team-list-item';
    div.dataset.name = name.toLowerCase();
    div.innerHTML = `
      <div class="team-list-flag">${getFlag(name)}</div>
      <div class="team-list-info">
        <div class="team-list-name">${name}</div>
        <div class="team-list-meta">${data.participations || '?'} participation(s) · ${data.titres && data.titres.length ? '🏆 ' + data.titres.length + ' titre(s)' : 'Aucun titre'}</div>
      </div>
      <div class="team-list-group" style="color:${GROUP_COLORS[group]}">Gr.${group}</div>
    `;
    div.addEventListener('click', () => showTeamFiche(name, group));
    list.appendChild(div);
  });
}

function filterTeams() {
  const q = $('teamSearchInput').value.toLowerCase();
  document.querySelectorAll('.team-list-item').forEach(el => {
    el.style.display = el.dataset.name.includes(q) ? '' : 'none';
  });
}

function showTeamsList() {
  $('teamFiche').classList.remove('active');
  $('teamsListView').style.display = '';
}

function showTeamFiche(teamName, group) {
  const data = TEAM_DATA[teamName] || {};
  const color = GROUP_COLORS[group] || 'var(--accent)';

  $('ficheFlag').textContent = getFlag(teamName);
  $('ficheName').textContent = teamName;
  $('ficheGroup').textContent = `Groupe ${group}`;

  const titreCount = data.titres ? data.titres.length : 0;
  $('ficheStats').innerHTML = `
    <div class="fiche-stat">
      <div class="fiche-stat-num">${data.participations || '?'}</div>
      <div class="fiche-stat-lbl">Participations</div>
    </div>
    <div class="fiche-stat">
      <div class="fiche-stat-num" style="color:${titreCount ? 'var(--accent)' : 'var(--text2)'}">${titreCount}</div>
      <div class="fiche-stat-lbl">Titre(s)</div>
    </div>
    <div class="fiche-stat" style="grid-column:1/-1">
      <div class="fiche-stat-num" style="font-size:13px;font-family:var(--font-ui);color:var(--accent);">${data.continent || '—'}</div>
      <div class="fiche-stat-lbl">Confédération</div>
    </div>
    <div class="fiche-stat" style="grid-column:1/-1">
      <div class="fiche-stat-num" style="font-size:14px;font-family:var(--font-ui);color:var(--text2);">${data.meilleur || '—'}</div>
      <div class="fiche-stat-lbl">Meilleur résultat</div>
    </div>
  `;

  const titreHTML = data.titres && data.titres.length
    ? data.titres.map(y => `<div class="fiche-title-badge">🏆 ${y}</div>`).join('')
    : `<span class="no-titre">Aucun titre mondial</span>`;
  $('ficheTitles').innerHTML = `
    <div class="fiche-section-title">🏆 Titres</div>
    <div class="fiche-titles-list">${titreHTML}</div>
  `;
  const starsHTML = data.stars ? data.stars.map(function(s){ return '<div class="fiche-title-badge">' + s.nom + ' <span style="opacity:0.7;font-size:12px">(' + s.club + ')</span></div>'; }).join('') : '<span class="no-titre">Non disponible</span>';
  $('ficheStars').innerHTML = '<div class="fiche-section-title">⭐ Stars actuelles</div><div class="fiche-titles-list">' + starsHTML + '</div>';

  const buteursHTML = data.buteurs ? data.buteurs.map(function(s){ return '<div class="fiche-title-badge">' + s.nom + ' <span style="opacity:0.7;font-size:12px">(' + s.buts + ' buts)</span></div>'; }).join('') : '<span class="no-titre">Non disponible</span>';
  $('ficheButeurs').innerHTML = '<div class="fiche-section-title">⚽ Meilleurs buteurs</div><div class="fiche-titles-list">' + buteursHTML + '</div>';

  const passeursHTML = data.passeurs ? data.passeurs.map(function(s){ return '<div class="fiche-title-badge">' + s.nom + ' <span style="opacity:0.7;font-size:12px">(' + s.passes + ' passes)</span></div>'; }).join('') : '<span class="no-titre">Non disponible</span>';
  $('fichePasseurs').innerHTML = '<div class="fiche-section-title">🎯 Meilleurs passeurs</div><div class="fiche-titles-list">' + passeursHTML + '</div>';

  const teamMatches = MATCHES.filter(m => m.home === teamName || m.away === teamName);
  window._ficheMatches = teamMatches;
  window._ficheTeam = teamName;
  window._ficheMatchIdx = 0;
  renderFicheMatchCards(teamName, teamMatches);

  $('teamsListView').style.display = 'none';
  $('teamFiche').classList.add('active');
  _pushNav({ sidebar: 'open', section: 'equipes', team: teamName });
}

function openTeamFromMatch(teamName) {
  const match = MATCHES.find(m => m.home === teamName || m.away === teamName);
  const group = match ? match.group : 'A';

  openSidebar();
  setTimeout(() => {
    showSidebarNav(false, 'equipes');

    document.querySelectorAll('.sidebar-section').forEach(s => s.classList.remove('active'));
    const sec = document.getElementById('section-equipes');
    if (sec) sec.classList.add('active');

    const fiche = document.getElementById('teamFiche');
    const list  = document.getElementById('teamsListView');
    if (list)  list.style.display  = 'none';
    if (fiche) fiche.style.display = '';

    showTeamFiche(teamName, group);
  }, 200);
}

function filterByTeam(teamName) {
  const calTab = document.querySelector('.tab[onclick*="calendar"]');
  showView('calendar', calTab);
  currentGroup = 'all';
  currentSearch = teamName.toLowerCase();
  $('searchInput').value = teamName;
  applyFilters();
}

function renderFicheMatchCards(teamName, matches) {
  const nav = matches.length > 1 ? `
    <div class="fiche-match-nav">
      <button class="fiche-nav-btn" id="ficheNavPrev" onclick="navigateFicheMatch(-1)" ${window._ficheMatchIdx === 0 ? 'disabled' : ''}>◀</button>
      <div class="fiche-nav-counter">Match ${window._ficheMatchIdx + 1} / ${matches.length}</div>
      <button class="fiche-nav-btn" id="ficheNavNext" onclick="navigateFicheMatch(1)" ${window._ficheMatchIdx >= matches.length - 1 ? 'disabled' : ''}>▶</button>
    </div>` : '';

  const cardsHTML = matches.map((m, i) => {
    const score = SCORES[m.id];
    const scoreStr = score && score.home !== undefined ? `${score.home}–${score.away}` : 'vs';
    const side = m.home === teamName ? 'DOM.' : 'EXT.';
    const isCurrent = i === window._ficheMatchIdx;
    return `
      <div class="fiche-match-card${isCurrent ? ' current' : ''}" onclick="selectFicheMatch(${i})" style="${!isCurrent ? 'opacity:0.5;transform:scale(0.97);' : ''}">
        <div class="fiche-match-vs">
          <div class="fiche-match-team">${getFlag(m.home)} ${m.home}</div>
          <div class="fiche-match-score-big">${scoreStr}</div>
          <div class="fiche-match-team away">${m.away} ${getFlag(m.away)}</div>
        </div>
        <div class="fiche-match-meta">
          <span>📅 ${m.date}</span>
          <span>🕐 ${m.time || '–'}</span>
          <span>📍 ${m.city}</span>
          <span>${side}</span>
          ${m.stadium ? `<span>🏟️ ${m.stadium}</span>` : ''}
        </div>
      </div>`;
  }).join('');

  $('ficheMatchesList').innerHTML = nav + cardsHTML;

  setTimeout(() => {
    const current = document.querySelector('.fiche-match-card.current');
    if (current) current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

function navigateFicheMatch(dir) {
  const matches = window._ficheMatches;
  if (!matches) return;
  const newIdx = window._ficheMatchIdx + dir;
  if (newIdx < 0 || newIdx >= matches.length) return;
  window._ficheMatchIdx = newIdx;
  renderFicheMatchCards(window._ficheTeam, matches);
  renderFicheMatchCards(window._ficheTeam, matches);
}

function selectFicheMatch(idx) {
  window._ficheMatchIdx = idx;
  renderFicheMatchCards(window._ficheTeam, window._ficheMatches);
}

function renderPalmares() {
  const list = $('palmaresList');
  list.innerHTML = PALMARES.map((p, i) => `
    <div class="palmares-item">
      <div class="palmares-year">${p.year}</div>
      <div class="palmares-flag">${p.winnerFlag}</div>
      <div class="palmares-info">
        <div class="palmares-winner">${p.winner} <span style="color:var(--text2);font-size:11px;font-family:var(--font-ui);font-weight:400;">vs</span> ${p.finalistFlag} ${p.finalist}</div>
        <div class="palmares-host">Hôte : ${p.host} · Score : <strong style="color:var(--accent)">${p.score}</strong></div>
      </div>
      <div class="palmares-trophy">${i === 0 ? '🥇' : ''}</div>
    </div>
  `).join('') + '<div class="palmares-footnote">* 1950 : format poule finale, match décisif Uruguay-Brésil</div>';
}

function renderHaitiMatches() {
  const haitiMatches = MATCHES.filter(m => m.home === 'Haïti' || m.away === 'Haïti');
  const el = $('haitiMatches');
  if (!el) return;
  el.innerHTML = haitiMatches.map(m => {
    const score = SCORES[m.id];
    const scoreStr = score && score.home !== undefined ? `<strong style="color:var(--accent)">${score.home}–${score.away}</strong>` : '<span style="color:var(--text2)">—</span>';
    const opponent = m.home === 'Haïti' ? m.away : m.home;
    return `
      <div class="haiti-match-row">
        <div>
          <div class="haiti-match-team">${getFlag('Haïti')} Haïti vs ${getFlag(opponent)} ${opponent}</div>
          <div class="haiti-match-date">${m.date} · ${m.city}</div>
        </div>
        <div>${scoreStr}</div>
      </div>`;
  }).join('');
}

let currentKOId = null;

function openKOModal(matchId, round) {
  currentKOId = matchId;
  let matchDef = null;
  for (const r of KNOCKOUT_ROUNDS) {
    const found = r.matches.find(m => m.id === matchId);
    if (found) { matchDef = found; break; }
  }
  if (!matchDef) return;

  const saved = KO_STATE[matchId] || {};
  $('koModalTitle').textContent = (round ? round.round + ' · ' : '') + matchDef.label;
  $('koHome').value    = saved.home    || matchDef.home    || '';
  $('koAway').value    = saved.away    || matchDef.away    || '';
  $('koTime').value    = saved.time    || matchDef.time    || '';
  $('koStadium').value = saved.stadium || matchDef.stadium || '';
  $('koCity').value    = saved.city    || matchDef.city    || '';
  $('koScoreH').value  = saved.scoreH !== undefined ? saved.scoreH : '';
  $('koScoreA').value  = saved.scoreA !== undefined ? saved.scoreA : '';

  const hName = saved.home || matchDef.home || 'DOM.';
  const aName = saved.away || matchDef.away || 'EXT.';
  $('koScoreHLbl').textContent = hName.substring(0,6).toUpperCase();
  $('koScoreALbl').textContent = aName.substring(0,6).toUpperCase();

  $('koHome').oninput = function() {
    $('koScoreHLbl').textContent = (this.value || 'DOM.').substring(0,6).toUpperCase();
  };
  $('koAway').oninput = function() {
    $('koScoreALbl').textContent = (this.value || 'EXT.').substring(0,6).toUpperCase();
  };

  $('koModalOverlay').classList.add('open');
  $('koHome').focus();
}

function closeKOModal() {
  $('koModalOverlay').classList.remove('open');
  currentKOId = null;
}

function saveKOMatch() {
  if (!currentKOId) return;
  KO_STATE[currentKOId] = {
    home:    $('koHome').value.trim(),
    away:    $('koAway').value.trim(),
    time:    $('koTime').value.trim(),
    stadium: $('koStadium').value.trim(),
    city:    $('koCity').value.trim(),
    scoreH:  $('koScoreH').value,
    scoreA:  $('koScoreA').value,
  };
  saveState({ ko: KO_STATE });
  renderBracket();
  closeKOModal();
}

function clearKOMatch() {
  if (!currentKOId) return;
  delete KO_STATE[currentKOId];
  saveState({ ko: KO_STATE });
  renderBracket();
  closeKOModal();
}

function renderRanking() {
  const cont = $('rankingContent');
  if (!cont) return;
  cont.innerHTML = '';

  Object.entries(GROUPS_DATA).forEach(([letter, data]) => {
    const color = GROUP_COLORS[letter];
    const standings = computeStandings(letter);

    const block = document.createElement('div');
    block.className = 'ranking-group-block';

    const rows = standings.map((s, i) => {
      const diff = s.bp - s.bc;
      const diffStr = diff > 0 ? `<span class="rank-diff-pos">+${diff}</span>` :
                      diff < 0 ? `<span class="rank-diff-neg">${diff}</span>` :
                      `<span style="color:var(--text2)">0</span>`;
      const isHaiti = s.name === 'Haïti';
      return `
        <tr class="${i < 2 ? 'rank-qualified' : ''}">
          <td>${i + 1}</td>
          <td>
            <div class="rank-team-cell">
              <span style="font-size:18px;">${getFlag(s.name)}</span>
              <span${isHaiti ? ' style="color:#d4213d"' : ''}>${s.name}</span>
            </div>
          </td>
          <td>${s.j}</td>
          <td>${s.g}</td>
          <td>${s.n}</td>
          <td>${s.p}</td>
          <td>${s.bp}</td>
          <td>${s.bc}</td>
          <td>${diffStr}</td>
          <td><span class="ranking-pts">${s.pts}</span></td>
        </tr>`;
    }).join('');

    block.innerHTML = `
      <div class="ranking-group-title" style="background:${color}">
        GROUPE ${letter}
        <span style="font-family:var(--font-ui);font-size:10px;opacity:0.8;">
          ${standings.some(s => s.j > 0) ? standings[0].j + ' / 3 journées jouées' : 'Pas encore joué'}
        </span>
      </div>
      <table class="ranking-table">
        <thead>
          <tr>
            <th>#</th><th>Équipe</th>
            <th title="Matchs joués">J</th>
            <th title="Victoires">G</th>
            <th title="Nuls">N</th>
            <th title="Défaites">P</th>
            <th title="Buts pour">BP</th>
            <th title="Buts contre">BC</th>
            <th title="Différence">+/-</th>
            <th title="Points">Pts</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
    cont.appendChild(block);
  });
}

function renderScorers() {
  const cont = $('scorersContent');
  if (!cont) return;

  const scorerMap = {}; // key: "name|team"

  Object.entries(SCORES).forEach(([matchId, s]) => {
    if (!s || !s.scorers || !s.scorers.length) return;
    const m = MATCHES.find(x => x.id === parseInt(matchId));
    s.scorers.forEach(scorer => {
      if (!scorer.name || !scorer.name.trim()) return;
      const key = scorer.name.trim().toLowerCase() + '|' + (scorer.team || '');
      if (!scorerMap[key]) {
        scorerMap[key] = {
          name: scorer.name.trim(),
          team: scorer.team || '—',
          goals: 0,
          minutes: []
        };
      }
      scorerMap[key].goals++;
      if (scorer.minute) scorerMap[key].minutes.push(scorer.minute + "'");
    });
  });

  const scorers = Object.values(scorerMap).sort((a, b) => b.goals - a.goals);

  if (!scorers.length) {
    cont.innerHTML = '<div class="scorers-empty">⚽ Aucun buteur enregistré pour l\'instant.<br>Entrez les scores et les buteurs sur les cartes de match.</div>';
    return;
  }

  const rows = scorers.map((s, i) => {
    const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const isHaiti = s.team === 'Haïti';
    return `
      <tr>
        <td class="scorer-rank ${rankClass}">${i + 1}</td>
        <td>
          <div class="scorer-name"${isHaiti ? ' style="color:#d4213d"' : ''}>${s.name}</div>
          <div class="scorer-team">${getFlag(s.team)} ${s.team}</div>
        </td>
        <td class="right scorer-goals">${s.goals}</td>
        <td class="right scorer-minutes">${s.minutes.join(' · ') || '—'}</td>
      </tr>`;
  }).join('');

  cont.innerHTML = `
    <table class="scorers-table">
      <thead>
        <tr>
          <th style="width:40px;">#</th>
          <th>Joueur</th>
          <th class="right">⚽ Buts</th>
          <th class="right">Minutes</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function hideSplash() {
  const splash = document.getElementById('splashScreen');
  if (!splash || splash.style.display === 'none') return;
  splash.classList.add('hidden');
  setTimeout(() => {
    splash.style.display = 'none';
    document.body.style.overflow = '';
  }, 600);
}
document.addEventListener('DOMContentLoaded', () => setTimeout(hideSplash, 5000));
window.addEventListener('load', () => setTimeout(hideSplash, 5000));
setTimeout(hideSplash, 6000); // fallback absolu

const PRONOS = JSON.parse(localStorage.getItem('_pronos') || '{}');

function savePronos() {
  localStorage.setItem('_pronos', JSON.stringify(PRONOS));
  if (window._fb && window._fb.userId) {
    const pseudo = localStorage.getItem('_pronoPseudo') || 'Anonyme';
    const userRef = window._fb.ref(window._fb.db, 'pronos/' + window._fb.userId);
    window._fb.set(userRef, { pseudo, pronos: PRONOS, updated: Date.now() });
  }
}

function showPronoTab(tab) {
  document.getElementById('prono-view-predictions').style.display = tab === 'predictions' ? '' : 'none';
  document.getElementById('prono-view-ranking').style.display     = tab === 'ranking'     ? '' : 'none';
  document.getElementById('prono-tab-pred').className  = tab === 'predictions' ? 'comment-submit-btn' : 'filter-reset-btn';
  document.getElementById('prono-tab-rank').className  = tab === 'ranking'     ? 'comment-submit-btn' : 'filter-reset-btn';
  if (tab === 'ranking') renderPronoRanking();
}

function renderPronostics() {
  const grid = document.getElementById('pronoGrid');
  if (!grid) return;
  grid.innerHTML = '';
  MATCHES.filter(m => m.group).forEach(m => {
    const p = PRONOS[m.id];
    const isDone = p && p.home !== undefined && p.away !== undefined;
    const card = document.createElement('div');
    card.className = 'prono-card' + (isDone ? ' prono-done' : '');
    card.innerHTML = `
      <div class="prono-card-meta">
        <span>Gr. ${m.group} — ${m.date}</span>
        <span>${m.city}</span>
      </div>
      <div class="prono-teams">
        <div class="prono-team">
          <span class="prono-flag">${getFlag(m.home)}</span>
          <span class="prono-name">${m.home}</span>
        </div>
        <div class="prono-score-inputs">
          <input class="prono-input" id="ph-${m.id}" type="number" min="0" max="20" value="${isDone ? p.home : ''}" placeholder="–">
          <span class="prono-sep">–</span>
          <input class="prono-input" id="pa-${m.id}" type="number" min="0" max="20" value="${isDone ? p.away : ''}" placeholder="–">
        </div>
        <div class="prono-team">
          <span class="prono-flag">${getFlag(m.away)}</span>
          <span class="prono-name">${m.away}</span>
        </div>
      </div>
      ${isDone
        ? `<div class="prono-done-badge">✅ Pronostic enregistré : ${p.home} – ${p.away}</div>`
        : `<button class="prono-save-btn" onclick="saveProno(${m.id})">💾 Enregistrer mon pronostic</button>`
      }
    `;
    grid.appendChild(card);
  });
}

function saveProno(matchId) {
  const hEl = document.getElementById('ph-' + matchId);
  const aEl = document.getElementById('pa-' + matchId);
  if (!hEl || !aEl) return;
  const h = parseInt(hEl.value);
  const a = parseInt(aEl.value);
  if (isNaN(h) || isNaN(a)) {
    hEl.style.borderColor = '#e74c3c';
    aEl.style.borderColor = '#e74c3c';
    return;
  }
  PRONOS[matchId] = { home: h, away: a, timestamp: Date.now() };
  savePronos();
  renderPronostics(); // refresh
}

function calcPronoPoints(prono, score) {
  if (!prono || prono.home === undefined || !score || score.home === undefined) return 0;
  const ph = parseInt(prono.home), pa = parseInt(prono.away);
  const sh = parseInt(score.home),  sa = parseInt(score.away);
  if (isNaN(ph)||isNaN(pa)||isNaN(sh)||isNaN(sa)) return 0;
  if (ph === sh && pa === sa) return 5; // score exact
  const pronoWin = ph > pa ? 'H' : pa > ph ? 'A' : 'N';
  const realWin  = sh > sa ? 'H' : sa > sh ? 'A' : 'N';
  if (pronoWin === realWin) return 3; // bon résultat
  return 0;
}

function renderPronoRanking() {
  const cont = document.getElementById('pronoRankingContent');
  if (!cont) return;

  if (!window._fbPronos || !Object.keys(window._fbPronos).length) {
    cont.innerHTML = '<div style="color:var(--text2);font-family:var(--font-ui);font-size:13px;padding:30px;text-align:center;">Aucun pronostic enregistré pour l\'instant.</div>';
    return;
  }

  const players = Object.entries(window._fbPronos).map(([uid, data]) => {
    let pts = 0, count = 0;
    Object.entries(data.pronos || {}).forEach(([mid, p]) => {
      const s = SCORES[parseInt(mid)];
      if (s) { pts += calcPronoPoints(p, s); count++; }
    });
    return { pseudo: data.pseudo || 'Anonyme', pts, count, uid };
  }).sort((a,b) => b.pts - a.pts);

  const medals = ['🥇','🥈','🥉'];
  cont.innerHTML = `
    <table class="prono-rank-table">
      <thead><tr><th>#</th><th>Joueur</th><th>Pronostics</th><th>Points</th></tr></thead>
      <tbody>
        ${players.map((p,i) => `
          <tr>
            <td>${medals[i] || (i+1)}</td>
            <td>${p.pseudo}</td>
            <td style="text-align:center;color:var(--text2)">${p.count}</td>
            <td><span class="prono-pts-badge">${p.pts}</span></td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}

// HAITI_MATCHES — voir data.js


function requestNotifications() {
  if (location.protocol === 'file:') {
    alert('Les notifications nécessitent le site en ligne (GitHub Pages).');
    return;
  }
  if (window._oneSignal) {
    window._oneSignal.Slidedown.promptPush();
    window._oneSignal.User.PushSubscription.addEventListener('change', e => {
      if (e.current.isSubscribed) {
        localStorage.setItem('_notifGranted', '1');
        showNotifBanner(true);
        if (window._fb) {
          const uid = window._fb.userId;
          window._fb.set(window._fb.ref(window._fb.db, 'subscribers/' + uid), {
            osId: e.current.id,
            subscribed: true,
            timestamp: Date.now()
          });
        }
      }
    });
  } else {
    if (!('Notification' in window)) return;
    Notification.requestPermission().then(perm => {
      if (perm === 'granted') {
        localStorage.setItem('_notifGranted', '1');
        showNotifBanner(true);
      }
    });
  }
}

function scheduleNotifications() {
  HAITI_MATCHES.forEach(m => {
    const key = '_notif_' + m.id;
    if (localStorage.getItem(key)) return;
    localStorage.setItem(key, '1');
  });
}

function showNotifBanner(granted) {
  const btn = document.getElementById('btnNotif');
  if (!btn) return;
  btn.textContent = granted ? '🔔 Notifications ON' : '🔕 Notifications';
  btn.style.color = granted ? '#2ecc71' : '';
  btn.style.borderColor = granted ? 'rgba(46,204,113,0.4)' : '';
}

function initSafariBanner() {
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isStandalone = window.navigator.standalone === true;
  const dismissed = localStorage.getItem('_safariDismissed');

  if (isIOS && !isSafari && !isStandalone && !dismissed) {
    const banner = document.getElementById('safariPrompt');
    if (banner) banner.classList.add('visible');
  }
}

function initNotifications() {
  if (location.protocol === 'file:') return;
  const granted = localStorage.getItem('_notifGranted') === '1';
  showNotifBanner(granted);
  setTimeout(() => {
    if (window._oneSignal) {
      const isSubscribed = window._oneSignal.User.PushSubscription.optedIn;
      if (isSubscribed) {
        localStorage.setItem('_notifGranted', '1');
        showNotifBanner(true);
      }
    }
  }, 2000);
}

function showNotifPrompt() {
  const banner = document.createElement('div');
  banner.id = 'notifPrompt';
  banner.style.cssText = 'position:fixed;bottom:70px;left:50%;transform:translateX(-50%);z-index:9990;background:var(--surface);border:1px solid rgba(46,204,113,0.4);border-radius:12px;padding:14px 18px;display:flex;align-items:center;gap:12px;box-shadow:0 4px 20px rgba(0,0,0,0.4);font-family:var(--font-ui);font-size:12px;color:var(--text);white-space:nowrap;';
  banner.innerHTML = `
    <span style="font-size:20px;">🔔</span>
    <span>Rappels avant les matchs d\'Haïti ?</span>
    <button onclick="requestNotifications();document.getElementById('notifPrompt').remove()" style="background:#2ecc71;color:#000;border:none;border-radius:6px;padding:6px 12px;font-weight:700;cursor:pointer;font-family:var(--font-ui);font-size:11px;">Oui !</button>
    <button onclick="document.getElementById('notifPrompt').remove()" style="background:none;border:none;color:var(--text2);cursor:pointer;font-size:16px;">✕</button>`;
  document.body.appendChild(banner);
  setTimeout(() => { if (banner.parentNode) banner.remove(); }, 8000);
}

let _deferredInstallPrompt = null;

const _isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
const _isInStandaloneMode = window.navigator.standalone === true;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  _deferredInstallPrompt = e;
  const btn = document.getElementById('btnInstall');
  if (btn) btn.style.display = '';
  const sbtn = document.getElementById('sidebarInstallBtn');
  if (sbtn) sbtn.style.display = 'none';
  const sbtn2 = document.getElementById('sidebarInstallBtn2');
  if (sbtn2) sbtn2.style.display = '';
});

window.addEventListener('appinstalled', () => {
  _deferredInstallPrompt = null;
  const btn = document.getElementById('btnInstall');
  if (btn) btn.style.display = 'none';
});

if (_isIOS && !_isInStandaloneMode) {
  const btn = document.getElementById('btnInstall');
  if (btn) btn.style.display = '';
  const sbtn2 = document.getElementById('sidebarInstallBtn2');
  if (sbtn2) sbtn2.style.display = '';
}

function installApp() {
  if (_deferredInstallPrompt) {
    _deferredInstallPrompt.prompt();
    _deferredInstallPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        _deferredInstallPrompt = null;
        const btn = document.getElementById('sidebarInstallBtn');
        if (btn) btn.style.display = 'none';
      }
    });
  } else {
    alert('Pour installer :\n\n📱 Android : Menu ⋮ → "Ajouter à l\'écran d\'accueil"\n\n🍎 iPhone : Partager ↑ → "Sur l\'écran d\'accueil"');
  }
}

function reactTeam(matchId, key, side) {
  if (!REACTIONS[matchId]) REACTIONS[matchId] = {};
  const mineKey = '_mine_' + side;
  const fullKey = key + '_' + side;
  const prev = REACTIONS[matchId][mineKey];
  if (prev) {
    const prevFull = prev + '_' + side;
    REACTIONS[matchId][prevFull] = Math.max(0, (REACTIONS[matchId][prevFull] || 1) - 1);
    if (!REACTIONS[matchId][prevFull]) delete REACTIONS[matchId][prevFull];
    delete REACTIONS[matchId][mineKey];
  }
  if (prev !== key) {
    REACTIONS[matchId][fullKey] = (REACTIONS[matchId][fullKey] || 0) + 1;
    REACTIONS[matchId][mineKey] = key;
  }
  saveState({ reactions: REACTIONS });
  if (window._fb) window.fbReactMatch(matchId, fullKey);
  const container = document.getElementById('reactions-' + matchId + '-' + side);
  if (!container) return;
  container.querySelectorAll('.reaction-btn').forEach((btn, i) => {
    const r = REACTION_LIST[i];
    const rKey = r.key + '_' + side;
    const count = (REACTIONS[matchId] && REACTIONS[matchId][rKey]) || 0;
    const reacted = REACTIONS[matchId] && REACTIONS[matchId][mineKey] === r.key;
    btn.classList.toggle('reacted', reacted);
    btn.querySelector('.reaction-count').textContent = count || '';
  });
}

const USER_KEY = '_userProfile';
let _user = null;

function loadUser() {
  const raw = localStorage.getItem(USER_KEY);
  if (raw) { try { _user = JSON.parse(raw); } catch(e) {} }
  return _user;
}

function saveUser() {
  localStorage.setItem(USER_KEY, JSON.stringify(_user));
  if (window._fb && _user) {
    const uid = window._fb.userId;
    window._fb.set(window._fb.ref(window._fb.db, 'users/' + uid), {
      name: _user.name,
      avatar: _user.avatar,
      points: _user.points || 0,
      joined: _user.joined || Date.now(),
      updated: Date.now(),
      uid: uid
    });
  }
}

function addPoints(pts, reason) {
  if (!_user) return;
  _user.points = (_user.points || 0) + pts;
  saveUser();
  showPointsToast('+' + pts + ' pts — ' + reason);
  updateUserBadge();
}

function showPointsToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:140px;right:16px;z-index:9999;background:var(--accent);color:#000;font-family:var(--font-ui);font-size:12px;font-weight:700;padding:8px 14px;border-radius:20px;pointer-events:none;';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

window._restoreUser = function(profile) {
  if (typeof _user !== 'undefined') {
    _user = profile;
    if (typeof updateUserBadge === 'function') updateUserBadge();
    const ol = document.getElementById('identityOverlay');
    if (ol) ol.style.display = 'none';
  }
};

function initIdentity() {
  loadUser();
  if (!_user) {
    setTimeout(() => {
      const ol = document.getElementById('identityOverlay');
      if (ol) ol.style.display = 'flex';
    }, 6500);
  } else {
    updateUserBadge();
  }
}

function selectAvatar(btn) {
  document.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function joinCommunity() {
  const n = document.getElementById('identityName');
  const a = document.querySelector('.avatar-btn.selected');
  const existingPoints = _user ? (_user.points || 0) : 0;
  const existingJoined = _user ? _user.joined : Date.now();
  _user = {
    name: (n && n.value.trim()) || 'Anonyme',
    avatar: a ? a.textContent : '⚽',
    points: existingPoints,
    joined: existingJoined
  };
  saveUser();
  document.getElementById('identityOverlay').style.display = 'none';
  updateUserBadge();
  addPoints(5, 'Bienvenue !');
}

function skipIdentity() {
  _user = { name: 'Visiteur', avatar: '⚽', points: 0, joined: Date.now() };
  saveUser();
  document.getElementById('identityOverlay').style.display = 'none';
  updateUserBadge();
}

function updateUserBadge() {
  if (!_user) return;
  const avatar = document.getElementById('userBadgeAvatar');
  const name = document.getElementById('userBadgeName');
  if (avatar) avatar.textContent = _user.avatar || '⚽';
  if (name) name.textContent = (_user.name || 'Visiteur') + ' · ' + (_user.points || 0) + ' pts';
}

function openSettingsPanel() {
  document.getElementById('settingsPanel').style.display = 'block';
  document.getElementById('settingsOverlay').style.display = 'block';
  const badge = document.getElementById('userBadge');
  if (badge) badge.style.display = 'flex';
}
function closeSettingsPanel() {
  document.getElementById('settingsPanel').style.display = 'none';
  document.getElementById('settingsOverlay').style.display = 'none';
}

function openProfileEditor() {
  const ol = document.getElementById('identityOverlay');
  if (!ol) return;
  const nameInput = document.getElementById('identityName');
  if (nameInput && _user) nameInput.value = _user.name !== 'Visiteur' && _user.name !== 'Anonyme' ? _user.name : '';
  ol.style.display = 'flex';
}

function showProfile() {
  if (!_user) return;
  alert(_user.avatar + ' ' + _user.name + '\n🏆 Points: ' + (_user.points||0) + '\n\nContinue à partager et commenter pour monter dans le classement !');
}

function renderAmbassadors() {
  const cont = document.getElementById('ambassadorsContent');
  if (!cont) return;
  if (!window._fbUsers || !Object.keys(window._fbUsers).length) {
    cont.innerHTML = '<div style="color:var(--text2);font-family:var(--font-ui);font-size:13px;padding:30px;text-align:center;">🏆 Aucun ambassadeur encore. Sois le premier !</div>';
    return;
  }
  const medals = ['🥇','🥈','🥉'];
  const classes = ['gold','silver','bronze'];
  const users = Object.values(window._fbUsers).sort((a,b) => (b.points||0)-(a.points||0)).slice(0,20);
  cont.innerHTML = users.map((u,i) => `
    <div class="ambass-card ${classes[i]||''}">
      <div class="ambass-rank">${medals[i]||(i+1)}</div>
      <div class="ambass-avatar">${u.avatar||'⚽'}</div>
      <div class="ambass-info">
        <div class="ambass-name">${u.name||'Anonyme'}</div>
        ${i===0?'<div class="ambass-badge">⚡ Ambassadeur ELMECO</div>':''}
      </div>
      <div>
        <div class="ambass-pts">${u.points||0}</div>
        <div class="ambass-pts-lbl">pts</div>
      </div>
    </div>`).join('');
}

const ELMECO_ADS = [];
const ELMECO_ADS_DATA = [
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAGRAXwDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAUBAgMEBgcI/8QAWhAAAQMDAgMDBwQOBQgIBQUAAQACAwQFERIhBhMxQVFhBxQiMnGBkSOSobEVFzM2QlJUYnJzssHR0hYkNFN0NUVVdYKz4fAIN0ODk6K0wiVERmOUZHaEw/H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QANhEAAgECBAMFBQkAAwEAAAAAAAECAxEEEiExE0FRBRQiMlJhcYGR8AYVIzNCobHB0VPh8TT/2gAMAwEAAhEDEQA/APcUREBZJJpIa0annoP3lW8uR3rykeDBhUjcGsMrzgvOfd2BY46tgmdFLIwOI1BufVHcVDaRNjLokb6kmrweP3q6N+vIILXDq09ipzosZ5jPnDuyrHuaXNkY5p0kNdg9h/5BUkGdEWKqqYKOnfUVc0cEEYy+SRwa1o8SUBlRc7eOKqWns0NytMtNXxSVkNMXRzAtGuQNO4zuM5wt93ENlbV+aPutE2p5jouU6dodrG5bjPVASaLRorxbK+mlqaK4Us8EJIlljma5rMdckHZLfeLZc4ZZrfcKWpii+6Phma4M9pB2QG8i0bdeLZdBIbdcKWqERxJyJmv0+3B2VLfebXc5ZYrdcaSqki+6Nhma8t9uCgN9FBXziGOz3m1UlTyY6WsZO6Wolk0iIRtBHhvlbwvVrNt+yQuNJ5j+U85vL+dnCA30ULW3+A26mrbVUUFXFNVRwcx1UGsOpwBw7fLt9m9pWvTcZWesuVfbaSrgdWUoIa18rWtmcGlzg09zcEOONsFAdEi0rLWPuFpo6yQQh88LZCIJeYzJGfRd+EPFbqAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIoavortLxFbqulurYLbEx4qKMxgmYnoc/D2Y8VMoAiIgCHcYREBrxxh8bHA6ZGDTnuwo6roOfK97XPa5wDJBpyDsfA9hPxClHAxvL2gua71mjqPEK9j2PHoOBVXG5KlYgRw/C94LI2M0BwA0jAyScjLezPwGOi3aSg8zilaSC6aQbAAAb57AO8/8AIUg+RjPWcM93aVaxrnv5jxjHqt7vE+KKKQbbMq5XyiWqsulqo/MmTyimrY55oqctEj2NznRq9EuGQQD1wuqRWIPLpLFVSWqrnpKG9OlqbnQvd5/yuY9scgLnhjANIA6k7kAK+5cO1NRaeJA61Pknqb8yWPMQLpIQ6P0h+bjV9K9ORAeb8Q8N3GsqeLYbfRvZHUNoHQhgDGziPJe1pO2cbb7Zxla54bq7nbr4+jpr22qqKJkDTdXQxibD9RYGsA7ARqO3pFeoIgOIqKea/Wm7U1u4cltFRLbjTsqahjInOcc/JDSSdPj03WK1UlTW36xVFPYKi1RWunlZUulYxmvUwNEbNJ9IZGc9Nl3iIDja6nnvnEHCdwqLRURQxCrfNFUsBMDi0BmrBIySNlFPobpb7bcm01ndJG7iKSYNFKyV8cJaMSxMdsTnoezJK9HRAeVQ2a7Girg631odLxFSVTWyMYHmMFhc8hnojGDnHTCnxS1NHxPxGx1rqHx3KFr6aqijBjBbCWua45y0k+G+V2yICE4Ipp6PhCzU1XE+GeKiiZJG8Yc1waMgqbREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREBzN3prDJxpZ566ufFeI4pBSU4lIbI05yS3Ht7RnHbhdMtWa30U9bBWzUsL6qAERTOYC9gPUA9i2kAREQBFwn20bR+RV3zWfzJ9tG0fkVd81n8y37tV9Jy99w/qO7Vj4o3+uxp9oXD/bRtH5FXfNZ/Mn20bR+RV3zWfzJ3ar6R33D+o7lkbGeoxo9gVy4T7aNo/Iq75rP5k+2jaPyKu+az+ZO7VfSO+4f1HdouE+2jaPyKu+az+ZPto2j8irvms/mTu1X0jvuH9R3aLhPto2j8irvms/mT7aNo/Iq75rP5k7tV9I77h/Ud2i4T7aNo/Iq75rP5k+2jaPyKu+az+ZO7VfSO+4f1HdouE+2jaPyKu+az+ZPto2j8irvms/mTu1X0jvuH9R3aLhPto2j8irvms/mT7aNo/Iq75rP5k7tV9I77h/Ud2i4T7aNo/Iq75rP5k+2jaPyKu+az+ZO7VfSO+4f1HdouE+2jaPyKu+az+ZPto2j8irvms/mTu1X0jvuH9R3aLhPto2j8irvms/mT7aNo/Iq75rP5k7tV9I77h/Ud2i4T7aNo/Iq75rP5k+2jaPyKu+az+ZO7VfSO+4f1HdouGh8p9mklYx9NWxtccF7mtw0d5w7K7WCaOeJksL2vjeA5rmnIcD2hZzpzh5lY1p1qdXyO5kREVDUIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID5qREX0R8aEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBdr5P+L3WqZluuD80MjsMeT9xd/Ke3uXFKnYqVKcakcrNqNaVKalE+lGkOAIOx6YVy858mfFJmayy18mZGj+qyOPrAfgHxHZ4L0UHtXiVKbpyys+noVo1oKcSqIizNQiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID5qREX0R8aEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAXQyyQSslieWSMcHNcOoI6Fe58GcQx8QWhsziBVR4ZUMHY7vHgV4Upzg6+vsN5jqCSaeQ6Kho7W9/tHX4rmxVHiQut0d2BxPBqWezPeFoXe6w2ynbJIHPe86WRt9Z58FuxyMkja+Nwc1zQWkdCOwrm7jJzuJxq3ZRUjpQPzsHBXlUoqUtT6CrNxjpzKnigtc5slLoMQzOTJkR7+r03d02WOXi7lRNc6iJfIA5jOZuG9hdttnuUQ2MG2WprtzVTSTy5/Dx0z9K2KVrK592ErAX1LZdBx6ojxgD4/QuvhUlq0cnFqvZnR2e8suMskD4XwVMW74n93eFKrjKGob57Za3W0ONOWVJz0AaSC73DK61tVAXtYJmF7ma2jO5b3+xc1WCi9Dpozclqa096t0F0Frlq42VxpzUiF2QeWDguz0xlc9b+MoK2+VT47lazYo7c2rbLqc2VvpFpc7IxpyCO/p3qL8pvD1x4hioLnwpIx1whMlK54eAHQStLX7+Gc+8qDvfk2uU09zorYxkdGLPTU9NK94AlkjeCWu7RnSST4rE2OjvvlX4aorNJcLZXQ3CRkrIhA0uYTk7ndvYMn3KYg4+4WnqoKWO805nn0cpmHAu1jLezbb4duFyN9tPEXEXBlbQHhWmtdS2Wm5LI6iNxmDXemdgAAB036ZW5PwXWVvEfF874o6eG42+KmoqnYlh5el2AN2jpnogOlt3HXC9znngob1TSywMdJI0Ej0WjLiMj0gAM7ZVbPxxwze69tDa7vBUVT2a2xtDgXDGdsgb+HVecR8H8T3SSzU1TZKe2R2Silh84ZOxxrHFha0NxuAe3PeVMWnhC60k3k+e6iYw2qOYVxa5vyZc3bJHXfuygO5v/ABPZeHY4pLzcIqVspIjDgSXY64ABPvWpcOOuF7dDTzVl5p2R1MPOhcNThIzOMjAPb2ddj3Fcr5Q+Gb5VcUW+/wBmjq6pkVK6mkgpKtlPKzJPpNc4EYOd/YtXhLgq42+92Soqra2Gmp6KqbNHJUsmMb5HktaTgZJB7BjqgO4rONOHKK1Ut0qbvTto6r7hIMuMnfhoGdu3bZY63jrhihpqWpqrzTMgq43SQPGXCRrTg4wDvk4x1XmEHAvFFvt9hrqekqHVNCamOWlpqtkMrWvkcQ5ryC3cHcdyluFuB7lS37hyrrLVyqSmNXLOyeqZO6J7/UzgAZzvsMAoDsqryicJ0txdQTXuBtQ0tBbpcQCcYGQMZ39y328W2F9FHWNuURp5KvzNjwHelNnGjGM5+jt6Lw3iGTzO0V/D9MLVXGS982OthqWunc5zx6HL9bUOhPTC6my8OifyuXGjglD7LbagXN0AHosqntADfaDk+5AeyIqdiqgPmpERfRHxoRFRAVREQBFREJKoqIgKoiohBVERAEREAREQBERAEREAREQBERAFTxVU7EJPXPJbezW2t9tnfmejwGZ/CjPT4dPguxNHTumfMYmGSRmh7sbub3Lwfha6ust7pq3J5bXaZgO1h2P8fcvfmOD2BzXAgjII7V4+Lp8OpdbM+iwFbi0rPdETerfCLPK2nhYx8ML+TpG7Nt8fSoOkdH55apmYYyrpZI3EDA5p6n2krs3AOGDuCuWquE3udopq0x03M5gic3Og9uFWjONnGTNq1OV04ohHs0UVwmDgWBzaZv55DNO31qTY8QXZzy4Btvtoa4/nY6fErZHDEjS3l1LNMI+RY5pI1drnd5zv7gqx8Ku2ilrXOgcQ6YAelK7xPctnVptbmKpVFyN7hGEw2KnDur9T/iVMnocK2NjY2NYwANaMADsCvXHKWaTZ2wjlikRkNDURi4h1Y5/nLi6LIPyPo4wPrV89NVTR0oFTy3xuBlLAcPHaBupBFUsaLqWU3RtVzjyhAY+Tk4znOr9yuudG6tpmwtnlg9Nri+I4dgHJAPitxEBoPpZ33KGpbUuETGEOi39I7+OO3u7ArKahnhuFRUSV0ssMn3OBw2i78KSRAQ5tVU6yGgNwlZOXZ85bnV62r6tlKsaQwBxyR1Per0QEWOHrM24/ZFtrohW5z5wIG689+cdfFbVNbqOkqKmopqeKKaqeHzvY3BkcBgE95wtpEAREQHzUiLFJOyPqQfAL6Jux8ck3sZU2Wk+scdmNA8SsD5ZH+s8nwWbqLkaqi+ZIukY31nge9YzVRD8In2BR+6bqvFZoqMTeNawdGuKp56PxCtJUUZ5E8KJvCtb2scrhWRnrqHuUeicRjhRJNs8Tukg9+yyAg7ggqJ3VWuLTkEj2FWVV8yrorkyWRR7KqRvU6h4rPHVsds70SrKaZnKlJGyioCCMggjvCK5mVREQgIiIAiIgCIiAIiIAiIgKdq9r8m91Ny4ciZI7M1IeQ/xA3afhj4LxVdr5Krkaa/SUTzhlXFgDP4bdx9GVzYunmp36Hf2fVyVkuT0PX1VUCqvGPoyiqiIAiIgCIiAIiIAiIgCIiAIiIAiIgPlmWpfJsNh4LDk9qoqr2W29z5tJLYKiIoJCIiAIiIAiIgCIiAqioiAvZI9hy1xC3IqsOwJNj2FaKKyk0VlBS3JYYIyDlVUbDO6M947lvRSslGWn3LaM1I5p03EyIiKxmEREAREQBERAEREAW3Z6x1uutJWN6wTNf7s7/RlaioVDV1YtGTi00fSkbmvY17DlrhkHvCuUJwbWGu4Zt07jlxhDHe1vo/uU2vn5LK2j66Es0VJcwiIoLBERAEREAREQBERAEREAREQBERAfKSIi9g+cCIiAIiIAiIgCIiAIiIAiIgCIiAqqse5h1NOFaiAkqecSjBwHdoWZRAJa7IO6kKacStAPrLaE76M5qlO2qM6Ii0MQiIgCIiAIiIAqKqoeqEnr/kmqObw5JCTvBUuA9hAP7yu3Xmvkcm2ukBPQxvHwIXpS8TEq1WR9PgpZqEWERFgdQREQBERAEREAREQBERAEREAREQHyki6O9cFXyyUDq6400UdO1zWlzZmuOScDYLnF60ZKSuj56UJQdpKxVFMWfha9XqF09toHzQtOkylzWtz2gFxGVgvFjudlmZDdKOSne8ZZqwQ/2EZBTPG9rk8OVr20I5FcY5A7SWOB7iDlULSHaS0h2cYxupuVsyiKrmPYAXsc0HvBCqIpHDZjjntDSUuLMtRCCMg7Edc7K8wyhmsxSBn42k4+Km6FmWIrmxvd6rHO9gJVCx7RlzXDxIIUXFmWoiKSAiIgCIiAqqtcWOBadwrUQEpDKJWZHUdVkUZBKYpAeztUk0hzQR0W8JXRy1IZXoVRUVQ0uOAMq5nYoiv0HtLR/tBNH5zfihbJLoWKqvbE5xwCE5Mn4v0hNiMj5IxosnKf+b84Jynfm/OCXROSXQ7vyPPxd69nY6nafg7/AIr1deMeTe50dmvFRPcqhkMT6csa475dqBxtnuK9EPG/Dn+k2fMf/BeTiqcpVW0j38BOMaCUnY6NFzn9OOHP9Js+Y/8Agqjjfhz/AEpH8x/8Fz8Kp6X8js41P1L5nRIueHGvDp/zrD8138FX+mfDv+loPeHfwUcKfpfyHFp+pfMn1VQA4y4eP+d6b4n+Cvbxdw+7pd6T3vThz6McWn6l8ycRQ44psR/zvRf+KFkHEdkd0u1F/wCO3+KjJLoWzx6koijDf7OGl32Uo8AZOJm/xUSOPuHiceeSDx5D8fUpVOctkVlVhHdo6lFzbeOeHXf5wx7Ynj9yzw8X2CZway6QZPTVlv1hS6VRbxYVWm9pL5k6ixxSxzMa+J7Xsd0c05BWRZmgREQHF+Vz7yqn9dD+2F4N2r3nyufeVU/rof2wvBu1d+F8h5OO/M+B6XLkeRJmCRmowcHG3NKgHcSXK9VfD9JXwxRw0dTE2F7WODnbtbuSd9gs1o4ttreFDw5fKGolpg/W2SmmDHH0tXb4pxFxnT3WazR0lE+GitcjHsD5A579OnbPQbNUKLu1bqTKcXFNS5LQ9EuFqfJ5T7dcRU0bY4qYsMDpgJnejJuGdo36+BXI0ts+yfliqmubqjp6l08nsa0Y/wDMQtGs45pqjjqj4jFBM2OngMRhL26nbPGc9PwlW1cdUluv98u4t87prhjkjW35IDv798fBVUKiXwNJVKUnvzudNx3LFxPwdX1lOwcy1V727drWnST8059ycMMucvktpIrHWR0le+ocI5ZHhozzTkZIPUdi5izeUSqbQV9HxCJbjHVxFjSzQ3RkEO7B3j4LSi4ubDwRBYIYJo6qGcSsqg8BoIk1jxThzy5bcxxoOWe/I67iaa3VvHPDVA5sU9dTzBld8lsSQCAdhnfJUo6uvj+O7pS0clPV0cELGi3z1IjB1NB1NGk5A7fauFu/GtLcLnZ70y3PZdKJzec4vAZOB2d47ce1SUfHljhv8/EENquBuMsPKdG6dnKAwPf+CFDpystCyrQu9ef7WJXyaMkjdxe2Ll00rJiG4d6MR+Uxv3Dv8FxvFlTfTRQQ3e/0lyhe/Ijp6lkulwHU4Ax1W1wtxpT2k3o19DLN9lZC9wgeG6M6sjf9JQV1lsD6VrbPQ3CCfUMvqahr26e7AHXotIwandownUi6SSZEqir7UXScRRVRN0AVFXfxT2oCiIiALcopc/JuPsWmrmuLSCOoUxdncrKOZWJZbcUIcA34rSZIxzWuLmgnHUqThGHkLto2kzhq5oRMjadmNwFXkMHYFlRdJw52WshZnoOix+bR/ij4LYZ19yp2oRnkYfN4/wAUfBV5EfcFlRBnl1MfJj/FCchncFkRBmfUs5MfcE5Mf4oWREGZlnIj7gnIj/FCvVUIzMx8lncPgnIjPVo+CyKqDMzF5vH3BU82j7gsyIRnl1NaWli0E6RsO5Vp4GGJpIHRZpfubvYqU/3JvsQvnll3LTAzuCq2nZ3BZVczqhTPI6Pgm6y2+4x0r3k0s7tJa47Nd2Edy9PC8boyGVUTiQAHA5JXrcVfSSkCOqge47ANlac/SvB7ShGNRNcz6nsOtOpRlGTvZm0iIvOPbOL8rn3lVP66H9sLwftXvHlc+8qp/XQ/theD9q78N5Dycd+Z8D0u08qyeS37NUVJSOuEk+kyzwiTbmacb+Ci7/XWPimssUNBB5tXyysirXspwxp1aQcdhwcqRtM1HevJl9gYrlRU1wjm16KuXljHM1dT12WjeafhmwXLh91sqI5amGeN9fLFM6VmG4yR2dcnZVXmfXUvK+RWtayJt/C/C8fF8fDH2LqS59NzfPPPXZBwT6uMdij+EODbXX8TX+13ASzQ0Dw2F4kLHesRk49i6GSSgk8oEPErbza/sa2k5ZJqm686SPV96iuEL3bTxNxbWPrYYoKsEwPkeGa93dMqilLK7Pl+5o4wzK6W7+ViPdwXSUdh4plro5HVdtlcKaTmEAs0hzTjodisnAtl4a4lhq2TWqpjlooWOkkFa4iVxzkgdnq/SpU8T0F18mdYKmqp47m6kMMsbngPkc3YEDqchQ3kluNHQG9mtq4KfmwMDObIGlxGvYZ69Va83Bt7lLU1UilazRpcJ26w8TcVQ0kdtnpaPzV7nxGrc8l47dW2OvRTEfCdhutLfxS0NbQTWpz2smdUGRsukO3wR+b9KgvJZWU1BxXHPXVEVPEKeRpfK8NGTjtK6esvdLxTZ71aKu7RUtVS1b3Ucz59DKiPUdLSc4cOz4FTUzKVl7BSyShdpX1IWCx2O18BUXEVzop7hPUuA5QqTE1uS7pj9H6Vl4n4RtVuvvDjKNswpbpK1ssL5NWkZb0d16OWxqpb95M6Cy0txoYa+mlBkiqagR4w53f19YLY4xvVsn4i4Thp6+nmFDKw1EkbwWM9JnV3T8EqFKWbfqS4wy7Ll/2cp5Q7NR2LiR9DbmOZAII3gPeXHJznc+xbsHDtuf5NJ766J/n7JiwO5h041hvq9OhUrx9aoOIeInV9DfLKIXQsZiWta12W5ztg96uszqSt8mE1m+ylugrH1LiBUVIYMCQHPvA22Vs7yRKcNcSWmlnY5XgS1Ul64npqGvY59PI2QuDXlp2aSNx4qR4kj4dtlfcLdDw9WCSBzo2VJrn6c9jsaenhlbHB1HBw7xpb5a66W2SF0c2qWCpD2M9HGHHbGcre4vlutdLdDDxVa5LXIXOZSCtaXFg3DQ0Dc7dMqZSbqewrGCVLbX4GKCwWGk4Ftl7rLZVV1TUuax7IalzNy5wyAAe5RflH4aoeHK+jbbnTcuphLzHK7UWkEDY+9dPQcVwWTgGwvpauF9VBMzzimbIC8x6n6gR7CFzPlJio5ru26W25srKasaHaBNrdC7Hq4zkA9fDcKtNyz67al60YcPRa6HIKiqqLrPPCqFRVCAibg3NU72NXfU/Uf89i4Ou/tLvY1d7T+srdm+ap9dS/a35VP3f4bSIi9U+cLmdfcrT1V0frLdstbDQVYqJonSFrSGAY2Oeu/hke9Vm3FNpXL04qUkpOyNBMFegktu1uy2N7YZ4sn0A708bdO7J272rmptNhmML4Iap7hk81uCzORjbvG/8A/q5KeLz3jl16HdWwHCtLN4epBqqmvsvAdLXUdK9rcgamd+e4eKsiudKJnyyUFKQ9gboLDhuCTnp3Y+AW3Fn6DndCl6/2IjBRTYu9F8mH22m9b5R7GbkbZwCMZWndaumqpGGlpWwNaDq0tA1b7Zxt0x9KmNSblZxsVnRpxjdTTNFFQKq2OcIiqhARECEFsv3N3sVKf7k32Ks3qO9ipT/cm+xC/wCgyq5vVWq5nVChsOHoO/Vu/ZK8/wCBox/SuxnA/tsOPnBehOHon9W76ivLKB7onxPje5j2btc04IOnsXi9p6uJ9N2BpCp7z66T4r5PF/vP+l7j/wDlSfxT7P3n/TFx/wDypP4rg4L6nr95XQ998rn3lVP66H9sLwc9q948rn3lVP66H9sLwc9V04byHFjvzPgdpaOFrQOEHcSX2orTDzNDYaQN1D0tIyXeKx8WcJUdsFpmtNY+WC5lrWMnxqj1YIzjs9Jb/Dhv1m4PN2gdS11plkLZLbNE55OXaSRtt3/uWXjKwW621vDtzttO6kFfPG59KTlrDlh2B6dcEKM7U9y3Di6a06HNcWcJXDhaWnbWvhlbO0lskOdOR1G4G/RZbbwZcbjw3U31ssMdNA17g2TOqQMG5btjvC9S4ypIuJqis4ac5kVZHBFWUkru/U5rv+fFW1U9M3hbiS0UDQKe00ZpmkdruWS7PvP1qqrycUuZd4WCk3y/s8q4U4Tr+KZKltHLDE2na0vfNnBz0GwO+xWreLDVWi/Gz1L4zOHxtD250nXjB78br0HhikNs8mU87Kumoaq5S6mTVMmhoAcABn9FrvirPKbSxzXXhy907mSR1D44nSRnLXYcHNIPvd8FZVXntyM3h4qmnz0IOfya18Na2g+y9qNa9heynL3hzmjtGW+CjLZwhPX10luludBSV8c7oPNZ3u1uIHUYBGP4L1y4C3ycaYZAz7ORW8vo5JZCI3AlwLSB3fUfBeX8MTVlR5TqWa4s5dY+teZmBuA12k5CiFSck3fkWqUacZJW3diO4k4YPD+uOe62+epY9rXU0LnGRuRnJBHTosPB1ohvvEVLbKmSSOKbXqdHgEYaT2jwW95TSf6b3T9Jn+7ar/Jd9/Nt/wC9/wB25apvhZr8jDLHjZUtLmrxxw5/Rm9mjY58lO9jZIHvxkjoRt2gqZ4k4GisfBsF3mmnNe4xiSI6dDdXUdM7bdq7qpoqPi64vbWuY2WxXR2sEbPhxqAPh0+aVEcc3U3ryavuAHoS12Ix3MEjmt+gD4rFVZPKvmdLoQjml8iJm4K4coaSyvr625tluoYI+UyNzWvc0Hfbp6S16TgCnHHEnD9VWTOgFLz2SxgNdjIwDkEd66Li69Cx8O8MVAt1HWS8lpidVNJ5ThG05bjtUP5ObzWX7yhS19we10z6N7fQbpDQC3AARSqZXK4lGlnULa6Gu/gqy19uvM1kr64VFrLxKyqjZpcWgnYt7Dgq3hDhXhriWCURVd1ZUU0LH1ALYw3JBzpODnoVg4g40q6aW72u20NBQxzVErJ5YIzrl3LSSSepGfipPyL/AHW+f4Zn1uUviKDk2VjwpVVFL3nC3ptobUM+wcla+DRl5q2ta7Vns09mMKOVe5UXVFaHDJ3YVQqKqkqRlf8A2o/otXeU3re9cfNSc6TW125wMELsaQfKH2q/Z8XGU7jtSUZUqaT+tDZ6IhReofPl8Xre5WeKvh9ZWhpdsMk+AyoBUSPaMNe8DuBwqOcXHLiSe8oQW4yDuMjITSSM4OB1Pcmm5N5bFEVdJAzg46IpICKpBBwRg+KohBVFRVygCqqe3ZVI09UIsEHVEQgpJ6p9itpvuDPYrpPVKtpvuDEL/pMqvj6hWBXx+uFDKm5KMDb+7d9RXk9IN2/o/uXrUrSS1vaWED4FeVRGKLGqQZAxgAnfC8btBNuNj6XsVqMaif1oaoRAiwOs+jvK595VT+uh/bC8H7V6Fxl5Q6XiKwy22K3zwPe9jg98jSBpdnsXnp6q+Hi4xszPFzjOd4snbXceI7NbDV22qqaehfLoLmPBaXnswc4Ox7llucPFFfdIRcTUzVzMmMPlYXR6fSJwDhuMZ3wtamuNFFw5PbnMqfOJallRqaGaAWBwA799XXCmaji2inqGvfBWS5bUskll5ZlDZYwwAEYyG4zvjqjzJ3USY5XGzkaUjuL/ALMRVb31xuOvzWOXI1506tA7MaTnuwtOOp4ip6WdrDXx09xdmXEbtNQXDvxvnfp1U0zjOBk9ye2km+Vjj8zJe3MMjYDDqd7QegVaXjGkpo6HTS1L304omvaXtDcQaslvt1dvco8XpJtC/nOeudbehSw225y1TYKcAxU8zS0MAGAQMd2VISwcWPoqCjkZWuphKzzWE4IY/Gpu3VpxkjONlo19zjc5raPmyMERYTXMZKWklxwzY6W79B27roHcZ0Rq7fVeYTGSnmikecsBDWw8stBG7snf0unRS81laJWOS7vIjpv6WVN6ZPI6tluVNBzWSghzmRb+kCNi3cqJfeLi+5tubqyU1wwW1GRq6YBz7F09v4yordLG6Chnk5cFLTBz5A0mOIuLvV7TkbdNt1x1S6N1RK6BpbEXuLGu6hpJwD7laF3urFajSXhlcvrq2puFVJVVsz5p5Ma5H9TgYH0BKGtqrdVsqqGd8FQzOmRh3GRg/QVgRaWVrGGZ3uSEd9usc1XNHcJ2yVgxUuDt5R09JY3Xa4PtbbW6rlNAw6m05PoA5zn4krTRRlXQnPLqbtdd7jcIKenrqyWeGnGIWPOzBjG3uAVltuVbaqnzi3VMlPNpLdcZwcHqPoC1UU5Vawzyve+pfNLJPM+aZ5fJI4ve89XEnJK2rZd7jaTKbbWS0xlAbIYzjUB0z8StFVRpNWIUmndBURFJAVVRVCA15qp0Moa1jT0OcldnR7yn25XC1g/rGfBq7u3jMxV8BJtzuW7ShFU6dlv/ANGw7qqK53rFUIXppnz7RfAMyAKU4aucFrqppagP0uj0gsbnB1A947lGU33UewqT4Wgp5Lm6WsjElPTwSTSNIyCAFjXy8OWbY6MLnVWOTe5tyXWzzSMfNRSv5YDNBAOpvo9uezDvbqWR15tXJkh82lNM57XcpkYYHEYySQ7GMD1SPgpGWx0FPTSQctkk5qI6lrsZxA6UNDfgSsopbQ+7PpnRW91RHJNpZEwhrY2tP3TsyDjovNz0baJ6e09jhYhPVxTfsIhl0s2GMkpXFofqJ83Gkn0dR0atsgEeHvUbPVUMlW90VO2GLkaY8wg4dtlxGd+1T1K+1yVPKho7dUSCikmnfHGeWJGjIDc9neonhswVl4kjqKSndHNFI4t07R4aSNK3p5UpSs9F1OWrncowzLV8kU8+t0s5klgGS/OrkA5ZttjPXrur4prW5kkskMIjBwIwwB7/AFcY3yPws9+Vu09DSVNijjZBHFNGyI1Ms1M5rjqeN2Pzjoe5WcQ0lM2grHsomUjqSt83ic0EGVmO3PU9uVVSpyllV1yLSp1Ywc3Z6X2+tiKfPQecTFsTWtMbQz5LI1D1tuzI6HsWZ9VbRkMp2EknJMWMNw7AG/UHTk9qvr7ax9VZ6akYI31VLEXHvc4kEqU+w9A64Ry0zIpqGGOWPQA4GSWNuSH565Pd7FpKdNJXb/8ADKFKs20kt+nUipq22yzOeadjQd88rd27sgb7H1MHwKyz19qnk1zROecjJc3cjPZ3dqw3alhmbbKiCKGndWw6nxtdpY0hxGd+gwtemtpfdoKF80T+Y8Bz4Hh4A6nB9gKtGFNxzXa+PQzlOspZUk7tcuuxovdqeXYaMnOGjACoun/osw6QKp3pT4BDAcwYJa8eJ0nC1rRZqa71LzSOqm0rGbuexpdrPQbdm2/wWqxdK177GMsBXzJNasgH9CqU33FiulBblrhgjYg9itpvuLF0XOW3hMnar4vXCtWSH7o1Q9iqWpvznS5jh1DCfoXk7GMk/ALSWkgh3h3YXrVY3Gg/mH6l5NCd4/0T9S8bHyayWPp+yYJqon7P4NQIqBVWJ0ErhVVEXUcITCIgKqmERAEwiIAiIgCIiAIiIAiIgCIiAIiIAqqiqgNKtHyo9gXd2wZncuIq25c094C7i0bzu9hTAPWp9dTbtJeCl9dDPJ6xVp6K+QYcVYei9VbHzslqZaT7uPYVdSCdxkZTyFmthD8Oxqb3FKAZqGg9rSqUTphM1tO3VJJhgbjtKwxDqcOXDtmtpfY6cJwuLDjXy31tv8Db0XEHV5y8EtDMiQ+qDkD2BWNgrWzOmbORK/Op4ecnPXfxWSKavmqvNo4g6UEgt09MdVkmbcYqc1Do43QgAl8bg7APbsei8RvtZO3g1PpVHsGSv+JoasNNVQEmGXQS0tJa7GQeoSGmqqeTmQy8t+CNTXYOCMH6FcaqrEHP5beXq0asbZWTVXlkDxACKh2mID1n+wZzjxUuXbHPIVUfs9y4gkkuctMylkq5HU7MaYzKcDHTZKp1xq2Rsqql8zY/Ua9+QFRz60TugEAfI04IjGrB7sj2Kxs9Y4ZEDiME5DD2dfgqr72WqUCzXYD0cqgdFWudG90zi6JobG7XuwDpj2LbnrbxPUQ1ElW4ywEmNwIGknrtjtWiK+X8Vv0qv2Ql/FZ9Ktl7Ye8YFFL7PLapUMtY2vr5udVSCR+A0EkAADoAB0Cshgq6aQSRP0PGcOa7fcY/erfshL+K36VX7IS/iNKsn2ylbJC317SjX2dcszqVL/XsM7Zbm0NDal40tY0enjAZ6vwV76m6vqWVL6l/NYMNcHAY69w8StX7ISfiM+JVfsg/8RvxKpbtf/jh9fEvf7P/APLU+vgas7Hxkh/Xqd8rFTfcW92P3rNUSmY6nbHGMBYafaFo8F7tF1HTjxfNbWx8ziVSU5cFtwvpfexmWSD7q32rEs1N91Z7Vo9jmitUSdwGNH6B+peSws9JvhGT9C9cuYxo/QP1LymNmCMf3Tv2SvFx20D6rstWdX4fwRgRUCqszQlURF1HCEREAREQBERAEREAREQBERAEREAREQBERAFVURAW1LMtYfBdlZd6lw/NK5WRuYoj4FdVZN6l/sKrgN6h09oLw0frobMw9MrGdllmPplYnL1Y7Hzs14mZ7fvUt/RKy2ec09RzRTzTPaPR5R3acg56HxHvWO271Tf0StUOLRsSDjGx7FEo5rotGTgoyXUl5ZXyVUk3mVYBLEWPxnVknrnTjsAV89Q51JHBHQVjeXC6Jpd0OcbkBvgobW78Z3xQSPHR7viVnwNvZ7y/eXr7fcTYqWi2+aG2VerRjmePXPq9+6xRVVVFUUNUyhk84pA1urQ7D2tGACMbHBwormP/AB3/ADihmk/vJPnFOBb6YeJbt7PdyJPzmrZPUSQ0cuJjnEkRcRsR3AHr3K5tdWfJmSie90QcGkxuHrdc469vxKrHJC2khlnpKw+hvI2Rwa89/VYZqqjMbuQKtj9O2ZiQDkbfDKySTfl+vmbOTir5/h+/Q0uROAAYJvew/wAE5E39zJ8w/wAFuUsuXy5ZVyNyNIjc8lo8cFZ4pc1GDDW4LQdBc8uByfzuh71q6slyMI0YS1uRnJmHWGUf7J/gnKkGxjk+YVJumiiiHOZWMJBw7W4d2Dud+h+KtFTBI0CMVhkyMhkjsZO3f37oqsugeHhtmI7RJ/dyfNKaH/iO+Ck6iohazLG1zNxu6VwGC729wVTWUeGASVuQ5pf8ockdoG//ADlOLNq+Uh0IJ2zEW4EYBBB22Ksp/uTfYss79cjjqc8atnO6kLFTfcm+xbL2mTXg06mVZqUfLM9qwrPSE8+MDvSWxWmvEiVu4wYv0D9S8rjG/wD3Lv2SvVL1nLM/iO+peWx+t/3L/wBgrxMbtA+q7NXiq/D+CGCIEVCSVVVdGx0jwxgJLjgAdqz1NvqaZgfNGQ09uc4XXZtXOBySdmzVTdCuioLTSz8PPq3xSc7FQeaHnDeXytIx031u6+CpKSjuaQg5OyOdTddFTcNtqLtW0PnLmimrYqXXoBLtchZqxnsxlY6azUsldaaOSoqBJXsY4uaxpazUSB1OfwVHEiW4MiB3TddJR8OQ1tLSyQ1UzXVHLc0PjbhrHVHJGcHqDv3LHPZaOKKeXzip0MoPPGDlsyRzOWWnfv3yOxRxIk8GRAKm6mb7ZRaoS9s5kPnDofVx6sbH5/8APj3KXdw5b6y6NtlI+SCdrJJC52XiRrYmPa7fbdxcNu5HUjuQqMm7HHpuuoo+FGzyWtklW6Pz2gdVOIjzodq0tZ17SQM+Kx0XDsFRSUMz6qZj6gwa2tjaQ3myPjGN+wsyfApxYk8CZzabqRgoI6ipr44pZAylp5ZmlzRqdo7NumVLycLR09xjo6mpl+UknY10bG7iONsgO57QcKXUSIVKT2OX3TdT0VnpZpbdAJpw6rpnVTn6G7MDXu0gZ6+h7N1kNgpX0dTU09e6URte6MtY0tOiFspa7fr6WnbtBUcSJPBkc6ikr7RwW64SUcL5HmH0XveAA44ByNz3qNV07q5lKOV2CIikgIiIDZwDDHuO0Yz4rpbJ/an+wrlWsJAIO+e7xXU2TL6xwaCS7OAO9ThIxi6lnc2xcpyjTzKxK0tMKqubC44ackkeAJWifb37qatsM1NejFI3D2sfqaT+b2qLjppJ4p5owNEI1OBO+D3LshPxO700PJq0vDtrd/sX2v8AtbR3tP1LU7Ft2k/11n6J+paf4IWy8zMJL8Ne9/0EytKuuMdI4MDHSSYzpadmjvJWkb2/spW4/W/8FlPF0abyylqbUuz8RVjmhHQmspsoiO71EurlUDpNDdTtDycDvOG+xZhWXEtDhZ58Hbo7rnH4qp3/AA/qNPurF+n90TralhgEcstVjSGlrdOnAOQBlWDzLvqfgxQMl0qYXaZ6AxO7nuIP0tVBez+FTfCT/gqLF4flIu+z8Zzh/H+nTMqYY3veyarDnnU46Izk/FXCsibKJBPU68AZ5cfQHPeoekq46uLWzLSDhzHDdpWfJXRGnCSzLU451KlOWWSs0SZuJJH9ZqNjnBiYezHerPOmGQvM02okH7izqOmwco8FVyp4MVsVdeb3/skpaxs0ZjlqpywnJHIYN/nLAGUZ61FQP+5b/MtXdXAnvRU1FWT/AIIlVcneSv8AP/S6UMDyI3Oc3bBc3BPu3WOnPyTfYrj1HtCtgPybfYroi3gv7TN4rZoh/WI/atULbof7RH7VWflZNJeNEnfNiz9E/UvLqeM+m87AU7zn/ZK9SvhAkiJ6Bpz8F426jnAOHA4bnGrqF4+KScYan0mCk4zq2V9v4NYIiLMudBbKhlLWRyyDLRnPgpa63GmkonxRPa9zxgAdi5/tVXMc0DWHDPTIIXdGpKMXFHlzoQnNTe6LSujt92pKfh91HLLJzSKgcoMJDjJytJz020O+IwudUjBZ6qe3OrojHyxrw3V6Z0adWBj89qwmk1qdVJyT8JP0d7tsF9uFY6ocYamuhqmYhdnDJS4tP52Dt2eK04bvTMrbDUOqJDDQsjEsOh2WlrnEkdh6hQ1TbK2l53nFO5nJIbLuDoJJABwdtwfgjrbXNEbnU0gEkBqGEj1oh1ePBUyR3uacSe1joLVfaCkoaFsjpDJAImOY2M5OiqMxIPTGn35WtWXWjdBURRPc/NrNI14YQDIZuZ274x296h623VlDp87p3xB+QNWOoxkeBGRstg2G6iXlOoZQ/SXYOBsCAd89hc34hMkN7k8SptY3+J7zBdKdsdO6VxbUvkYHtxhhijaB8WH6FusvltohGKF02I2zuhYWOzHrjjAbk9mtrzttuoE2S6Dl5opsyPEbRp3LiSAMdmdLvgUFluZDyKOQiMBxIwdi0uBGDvloJ27AmWFrXGeonex0z+KLcyZs1OyV3KIjiY5pAEYqWydR+axu3fssLuILdy6KBsk4ipKqCaM8s7hs0jnAj9F7SPEFc5HaLjK6BsdJK41EJnhAHrxjq4eAwVRtqr304qG0sphdA6oD8bGIHBd7AdlHDh1J4tToZqGshhqLm9+rFRSzxR4H4T+me5TtTxJRTXClmIkEcE1W7Vo3cySPSzbwO3swud+xFx1EeZzZbTCqPo9Ij0f7FVtmuLmRPbSSlkuDGQBvlpcO3bLWk79gVnGDZWM6iVkiWpbtTMfaHPqZBHTULqeSLluOh5ZK3UOwj0x036raq7/QSW+toWyShlTGWamxkbinja13sL2HPgfFcx5lU+ZNrOURTuJDZCQASMZxvk9R8VgynCixxpx5EtxNWx3G7T1cE75YpDlrXNLTGMDbfxz0USqItErKxjKWZ3CIikqERXNaXuAA3QGwzaFhz3roLPLHDVF8zi1gILiOuPBQHLdFC1smNQzn9ylqOJlRJJG9waHN2yFngr3qrmd2NSyUm9v/AA6X7OUQvM1aWSGJ7SI8gE5Lcd/etSkrqeKhq4i48+UNa0Y20g5US+lZloOklhGPRGD7lVlO1soeNPvAJ+K7Y057ZenPoeXOdLV59deXUlrOc1zP0XfUtIHb3Lcs7mivZkjGk/UtEO9H3LqXmZwSX4a97/ogrp/b5s97f2QtIDUQ1oJJOAAtu6/26b2t/ZC1oZBC/WewEfEL5nE/my97Ps8H/wDPD3L+DZt9TcKGSWS3SPj1N5cj2b5GxwfgCr23q7MnfMK1wlfu5x6uOSe7vJKzW25UUFOIqsxse0O3ccE7nBHftjputKaoY+sfUCPEfODwzHVgIPTxwdlz3ZtmLquWtqXiesc+Q4wHPz0Jzt7ysLyRsfoUhVXGkkopmRyRyzuaQA05OT2ntHvUc9weMg9BhSIu5KWLGZiO1oz8VMLlqaslpCTEGEEYIcP+K2Ps3Uf3cHwP8V7WExlKnSUZPU+e7Q7Nr1q7nBaP2nQhVXOG91I/7KH4H+Kr9naj+6g+n+K6PvDD9f2OP7nxXRfM6RFzov04/wCxh+JUtbK5tcx2G6Xt9Zv8FpTxdGrLLF6mFbs/EUY55x0N0np7VZAcxNV5HRY6feNuO5dHM57fh/Ezjoty3jNVH7VqBpW/a4yaqPbbKzm7RZpQi3NG7xBs9g/Md9S84gjBOf8A7L/2SvSOJiGvbuNonE+Gy4G2Uz6urhpYy1r5mmNpd0BcCBn4rxsa/DA+l7PXjre9fwckOxF6SPIxxCP/AJ22f+I/+VPtMcQ/lls/8R/8qz4kepbgz6HL2kxCujM2NGT16Z7FO3t0XmEnMIJx6G/auX8ULicZ9y9KNTLFxseLOhnqKd9ihXZ2bfhFzI2g1GuctOSfQD6fmDHfjt8FxqrqcBgE4wdsntXPOOZWOulPI7nWXyFxHFXJppmnz6J2C0uLjzJcuG3RSl0hY2N7Y5GuFLR1lGQM+jiniIbuO/V023XBecTkk86TOME8w7j4qzmP39I75z6R3VOE+psq6XI6PjKKoDY5aslsklRUa4GnLGvGjU9hIzh23wXQCrp5+I7nR1EfLpYGPc+Rr8ucXy0+T06DSNvavPXySPwHvc7SMDU4nAVNbsk5OT136o6V1Yqq9pXSPTomzC40z6qLRK6pog7AONeqpyAfafpCj7fFyLeRmSSpFJC+nbKQNL/M5fQIx0A1AducLgjLIQAZHHScjLjse9VM0riXOkcSTkkvJJOMKvB9pfvK6Ho0TmW+popmPDxbopqd439ECmjcWnI7w/pnqskbWwOjt+oFkdultx3GMGeOM/S4rzTmP39I7/nFOY/8Y/OKcD2k95XQ9NHLnrmPdI1rZ6eloGZyQ8Ezt07foN67LUt0eKe2gRPa7RThzich58zmG238exee8x5x6R2/OKrzpfR+Uf6Pq+mfR9ncnBfUjvK6ExVwlnCls5lNNzGS1GXYIDMlnUY7faFBhZDNK5pa6R5aTkgvJBVi2irI55yUncKiqisUKIqp2IB24G5K9K8l3BkFyhdeLrEX04dpp4jsHkdXHvHZ8VyHB/Ds/Et5jo48tgHpVEg/AZ2+89AvoqipYKKkhpaaMRwxMDGMHQALlxFXL4Ud2DoKTzyWh4P5QYgOKriGNAa2UANbsANACjo4ny0sEsbQx+gAt78bZ9+Mr2a8cBWe710tZUmqbNK7U8xy4BOMdCCoO4eTmWNzRaapjoQMBtSTqHvA3+CpgakadRuTsdeNg6lNKKueZ8yQes123VV84I65C7Sp8n97ztDBIR2sqMfWAtB3At/Y52KGVxx/escPrXsLFxf6keK8F1i/kc/DWFjgQcHB3WF1S8AhoJ7FOP4Q4gY75S11Bb+Y0H6itaThq6M1NdaawueNI1U7k71FuyaI7klq0zlZ3yOqJTKCHF+QD3YA/cVQFdZW+TriiOHnGi5uj0tDZ2udjux2lQT7Hdmkg2muH/8AHl/gvBxFuI2ne59Fh9KaVrW0NBtPUSQSzwsmMMOOY9u7WZ6ZWIEj8N2fctx1ovDAcWqtwcbCml3+hYja7wOlnrNv/wBNL/BYmxjfBPyBNIJDC5xAeRsSrdQwshtl4/0PWZ/wsv8ABWut13DdJs9c1xONYppTj3YQFgy7AAJJO2Enikp5THMx0b29WuGCFmhoHOtkssjpm1TJXMIJAAA7xjOVm4gtpo6C2Pt0U8lRVRvkc0DX6uOgA8VFwWitg+x4pfsdTiQNwKnfXkuznuO230rWp4JameOGBhfLI8MY1vUk9Aowi7RsMtVSzwxsIDi+nLBucdSMLp22iL+kFvoRPMIpmhziMagT3FTewWpFyxPhlfDKwtkY4tc0jcHuUhaJXwPOkHDgez2fvSutopbnUQRMmnYyVzGtwS447dlOW/hDiOSN9QLXVMilwYxhoOkDuJyP+K6MI0qyd7WOTGrNQlG179DBNWubE4nI2SlqNMEe++lYRZ618+XidzR1jMLsg/BSkdnuD8aKSb3Uzz+5fQcV80vmfNSw9O1ot/I1/Ond5WSCslbI0xvOodFvx8N3d4BbQ1XupiPrW7TcL3lu4ttS53e4BuPpUOvHm18yFhHyv8jRnqC+KaSu1SAxOBbnfGD+/CheHwRxBbQcE85vb4hdxScF3auL4qpgpInNIdI/DiPYAd1u27yXtorlT1rrs6UwuDgzzcDOD7V43aE4zmsrue72XTlTpyUlbXmeioiquI9E+V6aB9RM2KMek49q3q20S0kPN1tkaPWAGMLUoqk0tSyYN1Y6jvUlcbwyopjFDG8F4wS7Gy92Chkd9z5Wo6qqJRWnMhSp2yW6mqrNeaidhdNDD/VyCRpeGveT4+iwqDKnrLeae30BpZYS/myyuldoBOl0LoxpPflxXPUvbQ7KOXN4i4WWjZdK+CeWYwUkEUupuA52sxg52PTmE9N8Lap+GqGfkiOpndzJI8SANwWPqHQ5AxscN1e/orI71Qi6VNXzKkNqYIWu+RGY3RuiP42+eWd9uq2G8TUPNbM5lRq50bizQPVbVPmJznrhwGMdVk3PkbpUuZrS8P0cYZIX1PLe6lGgloc3mukad8dmgHp2qySwUxp6yaJ84FO+sYAcO+4saRk4HUuKvqOIKadutzZzNJJSPlLgDkwueCevUtLfflWi/wAApK6ACf8ArMla8AYxiZrQzO/Zg57k/EH4VzdrOEKSnqLi1tXK6OndSCF2Bl/NcA/P6OVDQ2ynn4mitbWzxQuqeQXPILzhxGRsBvhTNVxXRzmTTDO0PlD8kDcCZj2537GtcPeoiK508PFUV0Ms80LannO1N9MDUTjGo9/epjn5kT4WmUzVlmo6e2PrWiqkBZTuYwOb6HNY92XHTvgsHctWjt9E+yyVtXO+OQySxxYxp1MjD2g7ZOScdi3Ky70k9qfRRyVMZEdMxr9Aw8xMe0g4dsCX+PRalJW0IsklHWRyukbJNLGGj0S58QY3fO2CMos2Uh5M2liUdwxSMulNTyzztgfUzslfpGRHGxrtQ26+kfoSj4Wp54mNlkqGTGeSMkBukBtQyLGMdcPJ69irWcT00pqZGxTSSObUiESjYc1sTRnfYYY7p3hbLuLLe6Ujk1Jg87dVhuB905zJBtnuDx7wq/iF7USIltduFJVVULqqVsLITy2luWue57SCdO4GgHp2rBQW6jls81dWTSRlsr4mFuNIcIi9urYn0iNPYt6qvVJLRT0jJ6puaeCJk3L3dofI45GrYHWB17Fp2auoqOiqGzMm84kZKz0BlsjHxFrWnfAw86s4Kt4spR5My2N+s4bpIY5iyafMEdRq1aTqdHDHID02Hp4xv0WSr4XpII63TLUF0Es7Wu204jMQwdupEh7ezoqVPENBOJGDzhrahk4e7lj5MyQxxjbPpYLCezYrVv1+iuDhyBO1nn81S5jjgFruXpyAevoH4qFxGWfCRintFNTi8l3nEooasU8YYQMgl41O2O3oDu6qLt9FUXKtio6OJ0tRM4NYwdv/AA8VOuq4LjPdaWgfWPmulU2aFrINycvJYQHfnDfovVfJ/wAGRcN0nPqtMlzmb8rINxGPxWn6z2pKrkWu4hQ4slbYkuDOGoOGrS2mjIkqJMOqJseu/wAPAdAp9FVcDbbuz1oxUVZBUVUUElEVUQFMBMKqICmEx4lVRAUx4lMeJVUQFMeJVCNupVyogPnfyj0h4ZvVXQ6nTeeyuq43dwe4kg95BB+hdh5J6WO8z0t4jL4mWyKSmEZG73SaSXZ6YwPblRf/AEhGHz+yuawE8qXJzjo5v8Sup8hkRj4JLXs0vFZJnx2bj6FFib6Ep5WLY258DXKN0jmGFonbjtLDnB9q8lgOeMrQcfgNz8F7Vx6M8H3j/CvXhlHV07uKbVL5zDoY1oe7mDS3btOVDJie38C0gp7PJIHlxqKqWUg/g+ljA+C6LAyofhAtPD9K6N7Xsfrc1zTkEF53BU0rFWUwmPEqqICmPamB3KqICiKqIAiIgPlNEVF7B84VVERAVRURAVRURAVRURAMKqoiAqioiAqiIgC2rZbay61kdHQU75p5Ds1vZ4k9g8VNcJ8GXPiWUPhYYKIHD6qQej/sj8I/85Xt3DXDVt4bo+RQRem4fKzP3fIfE/u6LCrXUNFuddDCyqavREVwNwTTcNQc6YtnuUjcSTY2Z+azuHj2rrvBFVefKTk7s9aEFBWQREUFgiIgCIiAIiIAiIgCIiAKiqiA8Z8v8cr6qzmOKR45M2Sxhdj0mdy6vyNh7eEn8xj2E1b8BzSDjSxd0QgCAgePN+D7v/hXr5hjsdc+vZSxNhc+TBb6eBg96+ta6jgr6SWlqmCSCZhZIw9oK5mPyccNxVLKiOmnbKwYa7zl5x9KEpo3PJ7SvouDbTSyFpfDBy3FvQkEjZdEteho4qGlZTQAiNgIbqOT1z1WwhAREQBERAEREAREQHgXEvk8vVmL5YIzX0g35sDfSaPzmdfhsuQORkdxwV9V4XPX7gyyX3L6yjayc/8Abweg/wB5HX3rrhimtJHn1cCnrA+dUXpN58klfDqfaK6KpZ2RzjQ/49PqXF3Phu9WpxFfbKqIA+vyy5h/2hkLpjVhLZnFOhUhuiJRV9hB78Ki0MQiIgCImUAVU7+7vWako6mtkEdJTzTvPRsTC4/QouiUm9jD70XY2jyacRXDS6aCOhjP4VQ70vmjJ+OF3tj8llmodMlxfJcZeuH+hH80dfeVlKvCPM6KeEqT5WPIrNYrnfJhFbKSWc/hPAwxntd0C9T4W8llHR6Ki+yCsmG4gbtE0+Pa76B4L0KmpoKWFsNNDHFE31WRtDQPcFlwuSpiJS0Wh30sJCGr1ZbFEyKNscbWtY0Ya1owAO4BXoiwOsIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiICmEwMYwqogIqv4cs1xz57a6OVx/CdCNXxG6gavyZcMznMdJNTk/3M7h9Byuwle2ONz3nDWjJPcAte31XnUGpzSx4OHNPZ3fQQiquLsmVdKMldo4WbyR2Z2eVXV8fdlzHf+1a58j9Dna7VYH6ti9MVVrxqnUy7tS9J5tH5ILYD8rc653sDB+5bsHkp4djwZHVsx/Pn0j/AMoC7xFDrTfMlYekv0nOUXA/DVEQYrPTOcOjpQZD/wCYlT0FPDTxiOnijiYPwY2ho+hZUVG29zRRjHZFMeCqiKCwREQBERAEREAREQBERAEREAREQBERAEREAREQBEVD0OEBVFGw3VkjGSGGURyOLYzgEuIJBGB09Un3LHLfqRtPJNFzJA1pIwwgOwwP+ohTZkXRLIo+W8UkUj45HPa5udiw74IGB84Kw3iCOeSOZksYaGbvbjJc4gD4tO6WYuiTRaMV0pZXxta53yjOY0luBjONz2b7Kxl5o3lrWukLn+o3Qcu3I297SlmLokUUcL3QmLmiR5ZvuGE9Ghx+ghblPOyphbLHnS7plGmhdGVFH1t7ttDcaS31VXHHV1ZxBE47vOCfd0OM9Vvg5UElUREAREQBUzhUL2tBLiAB1J6BaTqiSrOijJEf4U+Nv9nvPj0VZSSJSbKVRNZN5q3PKaQZz9Tfae3w9qrUg0k/nbR8kRpnA7B2O93b4exXsY6kjwwM5YPTfJyepPaVDVVyutZcjbrU6khdFAJppaljnghziGta0EfinJWb9u5dezY6Nrg5oc0gg7gjtVygqGploZ226WRtRUtgE0scUZaGgnGWA9mQfRzkLE/jOxxt9KsdrBIdGIHl7MdS5uMgbjdXU1zKuL5HRIoJnFlkkrWUrK5rnvcGte1pMZcdw3XjGd+mVS58W2e11ppKypc2VgBkLYnObFnprcBhvvVsy6kZX0J5FD3TiS1Wt0LKupOqVnMa2KN0h0fjHSDhvisdbxVZqOKmklrWvFSzmRCFrpC5n42GjIHiUzIWfQnEWvQ1lPX0kVVRytlglbqY9vRwWwpICIiAIiIAiIgCKiICqKiqgCKiICqIqICqKiICqKiICqwVdZTUcRlq544YwQC6RwACzLXraGkr4TDW08U8eQdMjQQitzBE13E9LTXhlsDDJI9kbw/nRtbh7iABk7nboFqjjSiJqS+nqWRwxTyteQ08xsL9D8DOQc9627nw5HX1LHmrnipwYiaZjWaDy3am4yMt364WrFwdTxSTu88qcSRTxRgBoMQmfrfg43OemVsuFbUzefkW0dzt1XQV1Uy2z66Fw1wxkPeSQHjQWkjfX2eK1X361Mpgz7Ev5nnMlMYNbAA5sQLvS1acaBjr4KUt/DbKGhr6eGsqGS1rtb54mtjcxwaGgtDRgbALWPB8YozC2umDnVL6h55MZY5zm6SNGMAdvt3S9O7Hjsa8l5tWKWo+xVU6nrGxEVDgA0GYgAbnd2WjONxgLJbrxaa+5Oo20kkZJl0zSSDDjE/DicOyPScSCe9bEHCkdPVUU0FZNpo4I4Io5Y2SBob2jI2ce0jdXUnCtNBdH1000lSSJQI5o2YxI4OIcQMuxjbPQI3TFpGGsvFrs90jpIYA+WeIP1tnY1mkO0gEudjP/FKm62anvDbZ5rI6VkT3ukjG0RaDIW5z62CTt3+K2bvwzDcQI2VEtLTOYI5KeBjAxwDg7PTY5HUK2XhKgfcWVsb6iJ+ZnPa2UkPMgw47nY+zwUJ07ah5iKg4hs0tI6ZtrlaWmBrIw5oDuc3DNw7DdgAc9Nl0nDlZTV9pjqKOF0MTnPHLdjIcHEO6bHcHftUJT8D0sFDJTCrnOt8DgeWwAcn1ctxh2e3PVT1jtkdntkVFFI+RsZcdT8A5JJOw2AydgOiTdNrwiOa+p5r5R6GlofKTw9ebuJDaKkNppnB5aIpWOLoySOgyQfcV6rHPFK57I5GPcw4eGuBLTjOD3bELR4isdBxFaai2XOLmU8wwcbFp7HNPYQuc4D4FfwjVVUgu01XHOwM5bo9OdJ9FztzlwBxnbIx3LI0O2REQBERARtXQSSS81sglA35M/qe7HT6Vnp6prniGRhhlxtG7t/RPattYainjqIyyVuR2EdQe8HsWeTK7xL5rqzMM7WDLmyEuyPQ1bfBcjXw0lTxI1lyr325kdH8hNFPyXTFzzqBf2huB6PjldXTZin5FQGl/WOXGNY/iFS6U9FJTgVdJDUjOI45Iw7Lj2DKq1fxFr20OdgqKO3cVAmsEkIs7BHLLOHGXErvwidyq2unZceLLrUPcG/I0zmmF+SWkO21DqD24W5U2tpa2CWzUVWyMAR6426Y89WtHYAtmmjqqOYCmtVLGwhrC6PDCGjoMeCZc3mGa2xzHKjZ5K5tLWjS97hgdCKg4P0Kj47a+o4kp7tdZLdivMrxHKGOmidG0AEEEub16dq6ZrKwU7qU2ilFP/d6hpOTk/TuqTRVFTURzVVjpZJGbNkdpe9oz2Z9yZSMxEWp9BZ+JKuGepZHTi1UzYZJ3Aa2M1A7nr2ZwqUVxtVLxfLUGemp6Oe1QmlkdiNjmh7iQ3PtGymK6CW4RReeWWmqHtJw2cNeGnbpnoraqCprGNbWWOinbH6jZC12n2ZGymwuU4E0u4fY+MYifUTvj2wCwyuLSPDGF0S16MPFOwSRMicBjQzo0dmFsLRKyKN3dwiIpICIiAIiIDluLuI6yxuYaelZJF5vJM58jXkEtIAZ6PQkEnJ22XQyzltG6doGRGXgH2ZWrdLHbrq9r66n5jmsMedbm5aSCWnB3Gw2KyU9thgfVkPleKp2p7HvJa30cYaOwK7cMq6lbO7OXsvGtTW0zJqijjLX1FNAHROc0B0vUHUPwdt+hyFtUXGPntVRwR0jIzUxvkzJMdg2Ux4GGnJOM9ikm8L2hsQjZSaWgRAaXuBHK9Qgg7Ed/VXwcOWynfA+nhfC6BhjYY5nt9Eu1EHB3y45OVdypPZFUp9RxDdX2qhbPExkkhnhiLHHoHvDc/SVGxcXNdQ3KtfTsbFRGRujmkve5rywD1cDJHeVK1thttdWMq6qn1zt0DVrcAQx2puQDg4O4yoXiy2UVr4auFRTQF2HCblSyPfGXmQOzoLsdTlRDI7Ra1EsyuzFVcew0tFR1MtE/5eKdz28wfJPjONJOO07Z9i37/wAQVFBDbjSxRcysD3EzBxawNjLz6u/ZhchcWmgo5Iq6yUhe+CuqS2TUzVEHMyNLXENc7Y7HAx4qTlrzfL4LNLQU5jp3SNgfrkYYwIm75BGQdektG+DlbOnHRpaalM0trkpDxiHhgNICS6jaXMly0+cAnIyOgx71K/Zn/wCIXSk5B/qEDJi7V6+oOOPD1VztjgpLjZqeqqrST50Y8ChD8RiElrMkuyMb9FFSXukZUXyeGja51PATC/zuQ+cMjfyyJBq39bI8Cq8NNtJE5mlqzoW8XyvtFPcWW9jo5SNREx0wgs1ZedG3dkZG+5XSUNSaqip6gs5bpY2vLNQdpyOmRsfaFyNvgoaptRRSW2rdFQ1rqeA080juW1rGjOS70chxGBthRNtut1ttLXXSCmYaKCLzaKMgtiYY5+W0NAcSfRO5wDkYUOmpaR0JU2tyRg46qQKySejicyCGaUBhc0+hKI8ZcMHOc5HToVM33icWeodC+ldI40wmgw/HNcXhmjp1y4FcmJqEUOs2im01dPX6iZZAHNiIdsCcsDnDJHUYV1Ndo7o6ga62w+cQV0UcJqZpH8mR0Re4nfJwWbDpjC0dKLd8uhXO9rnU0HE7qq8i3vouW11RPA2US6suiALsjGwOdt1niude7ima1uZTebx07ajWA7WWucWgd2chQNoew8Tx8uhpWzGJlVJPA6WdmuXIeWuB0tB0j0sKU4zjho7VWXeGIOq9EMWoOcNTeaNtiPxisnGOayW5dN2uySrLnJBfrdbmMaY6qKaRzznLSzTjHzlBycbiNtVI63u5cUNTLGRMMv5LwxwIxtknbqoO98QB8DKyso2Pq4K6qii1SvhdHAzBd6rt3dB3ErLcHUkIvU1JbqR8UU0dOea+RwkZUaHOwNWG5LgTjrhXjSSSuvq5Vz6MnpeMY4amRk9KWQx1EkDpeYCA5sIlHZ2jI9yUfFslTUOgdQNheyljqHNfMc+mwv0jDeowOuFgoLZb6995s9bQxPipZ4pHnmPJlkMYOokknbp16LnKW51NbS19x5YgqW2ZlVIdLgyctL240h2CzAwPeihBp2QzSXM6Gn43kqLNUXKK2B0dPytfy+AS/Hog6fWbkZHit6Xih0NxNBNRYlbVQUzi2XIBkYX56dmMLk60NoHxUAjgFLNR0b6giB2l+ZdLQ4B2RgYAIyemdlNSUzJL/f5qnzUz0McVRTzTBzI2vLH4MgDsHSNs4zhJQh0+tCFKXUrTcfCooX1TbcQGuhbnnZaDI4twTp2IwCRg7ELrqGd1TSRTPDGl4zhjiR7iQD9C84jo2stHMe2GCI1EUVNMIJBJUxtaXM0Rh2S7WTpJwdO673h4VQsdF5/GY6rktMrC8u0u7dySfpVKsYpXiXhJt6lt94gtXD8DJ7xXwUcbzpYZXbuPgOpV9lvdsvtJ53aK2GrgzpLonZwe4jqD7V5lx5PbrV5UrfceL6czWV9CY6WR7DJHFMDvlvb1+kFV8lhpK/j7iK58MwOp+HnxMj06C1j5tjlo7Pwj7D4rA0PXUREAREQBERAaVd93o/137irav+20P6w/sFEWMufvX9Gi5e5mcfd1mKItEUZQfwVR6xRFJBVO1EUgBVREAREQBERAEREAREQBERAFAcb/AHs1/wCg39pqIrQ8yIlszk/Kv1t3+Gl/9qy0n32Q/wCuJv8A0rURdEfy/gzL9R0fAn3qUHsf+25eezf5Fov9V3D/AHrURKXnfvEtkdl5Nv8AJFT/AIx/1NWlN/1fXD/HP/8AUBEVf1v3oLb5kJU/2qr/AE7x+wFr3X+xV/8ArCm/9MiLaJQttv8Al+w/4Gk/9yn4v+qln6z/APvRFSXmXwLLY0ZP7fcvZdfrYrKP73rx+vt/7MaIrcl9cyEdlZ/8vcSfrIf90uNtX+SLj/8At9v7b0RUh/haX+jir/L3D3+Fpf8AeBRP/wBS8Uf4Wp+pEV48vrmVZry/esz/AFgP90vW+DfvXtv6hqIsqvlRenucF/0iPvTof8e39ly3vID94I/xkv8A7URc5qekoiID/9k=",
];

function loadAdsLazy() {
  setTimeout(() => {
    ELMECO_ADS.push(...ELMECO_ADS_DATA);
    initElmecoAds();
  }, 3000);
}

let _adIndex = 0;
let _adTimer = null;
let _adExpanded = false;

function showNextElmecoAd() {
  if (_adExpanded) return; // ne change pas si agrandie
  const el = document.getElementById('elmecoAdFloat');
  const img = document.getElementById('elmecoAdImg');
  if (!el || !img) return;

  el.style.animation = 'ad-slide-out 0.4s ease forwards';
  setTimeout(() => {
    img.src = ELMECO_ADS[_adIndex % ELMECO_ADS.length];
    _adIndex++;
    el.style.display = 'block';
    el.style.animation = 'ad-slide-in 0.5s ease forwards';
  }, 400);
}
function showStefiSignature() {
  const el = document.getElementById('elmeco-watermark');
  if (!el) return;
  const savedHTML = el.innerHTML;
  el.innerHTML = '<span class="elmeco-label">Créé par</span><span class="elmeco-name" style="color:#00bfff;">Ste</span><span class="elmeco-name" style="color:#ff8c00;">Fi</span><span class="elmeco-tagline">Services</span>';
  setTimeout(() => {
    el.innerHTML = savedHTML;
  }, 8000);
}
const BAD_WORDS = [
  'merde','putain','connard','connasse','salope','foutre','enculer','enculé',
  'bâtard','batard','con','conne','idiot','idiote','imbécile','imbecile',
  'crétin','cretin','abruti','nique','niquer','bordel','pute','couille',
  'kaka','malere','manman','bouzen','salop','bouzin','betiz','betise',
  'kochon','vye','move','degage','racaille',
  'fuck','shit','asshole','bitch','bastard','crap','damn','idiot','stupid',
  'hate','kill','murder','rape','racist'
];

function filterComment(text) {
  const lower = text.toLowerCase();
  for (const word of BAD_WORDS) {
    if (lower.includes(word)) return false;
  }
  return true;
}

function countFlags(matchId, commentId) {
  const key = `_flags_${matchId}_${commentId}`;
  const flags = JSON.parse(localStorage.getItem(key) || '[]');
  return flags.length;
}

function flagComment(matchId, commentId) {
  const key = `_flags_${matchId}_${commentId}`;
  const uid = window._fb ? window._fb.userId : 'anon';
  const flags = JSON.parse(localStorage.getItem(key) || '[]');
  if (flags.includes(uid)) return; // déjà signalé
  flags.push(uid);
  localStorage.setItem(key, JSON.stringify(flags));
  
  if (window._fb) {
    window._fb.set(
      window._fb.ref(window._fb.db, `flags/${matchId}/${commentId}/${uid}`),
      true
    );
  }
  
  if (flags.length >= 3) {
    autoHideComment(matchId, commentId);
  }
  
  showPointsToast('Signalement enregistré 🚩');
}

function autoHideComment(matchId, commentId) {
  if (window._fb) {
    window._fb.update(
      window._fb.ref(window._fb.db, `comments/${matchId}/${commentId}`),
      { hidden: true }
    );
  }
}

const _navHistory = [];

function _pushNav(state) {
  const last = _navHistory[_navHistory.length - 1];
  if (last && JSON.stringify(last) === JSON.stringify(state)) return;
  _navHistory.push(state);
  if (_navHistory.length > 20) _navHistory.shift();
}

function goBack() {
  if (_navHistory.length <= 1) {
    _goToView('calendar');
    return;
  }
  _navHistory.pop(); // Retire l'état actuel
  const prev = _navHistory[_navHistory.length - 1];
  if (!prev) { _goToView('calendar'); return; }

  if (prev.sidebar === 'open' && prev.section) {
    _goToSection(prev.section, prev.team || null);
  } else if (prev.sidebar === 'closed') {
    closeSidebar();
    if (prev.view) _goToView(prev.view);
  }
}

function _goToView(view) {
  const tab = document.querySelector('.tab[onclick*=\"\'' + view + '\'\"]');
  showViewInternal(view, tab || document.querySelector('.tab'));
}

function _goToSection(section, teamName) {
  openSidebar();
  setTimeout(() => {
    document.querySelectorAll('.sidebar-section').forEach(s => s.classList.remove('active'));
    const sec = document.getElementById('section-' + section);
    if (sec) sec.classList.add('active');
    if (teamName && section === 'equipes') {
      const m = MATCHES.find(x => x.home === teamName || x.away === teamName);
      showTeamFiche(teamName, m ? m.group : 'A');
    }
  }, 150);
}

const _viewHistory = [];
let _currentView = 'calendar';

function toggleScoreEditor(matchId, btn) {
  const editor = document.getElementById('score-editor-' + matchId);
  if (!editor) return;
  const isOpen = editor.classList.contains('open');
  document.querySelectorAll('.score-inline-editor.open').forEach(e => e.classList.remove('open'));
  if (!isOpen) {
    editor.classList.add('open');
    const inp = document.getElementById('si-home-' + matchId);
    if (inp) setTimeout(() => inp.focus(), 100);
  }
}

function closeScoreEditor(matchId) {
  const editor = document.getElementById('score-editor-' + matchId);
  if (editor) editor.classList.remove('open');
}

function saveInlineScore(matchId) {
  const homeInput = document.getElementById('si-home-' + matchId);
  const awayInput = document.getElementById('si-away-' + matchId);
  if (!homeInput || !awayInput) return;

  const h = homeInput.value.trim();
  const a = awayInput.value.trim();
  if (h === '' || a === '') {
    showPointsToast('Entrez les deux scores !');
    return;
  }

  const homeScore = parseInt(h);
  const awayScore = parseInt(a);

  if (isNaN(homeScore) || isNaN(awayScore)) return;

  SCORES[matchId] = { home: homeScore, away: awayScore, scorers: [] };
  saveState({ scores: SCORES });

  const vsDisplay = document.getElementById('vs-display-' + matchId);
  if (vsDisplay) {
    vsDisplay.className = 'score-btn-current';
    vsDisplay.textContent = homeScore + '–' + awayScore;
  }

  closeScoreEditor(matchId);
  showPointsToast('Score enregistré ✓');

  const card = document.querySelector('[data-id="' + matchId + '"]');
  if (card) {
    const m = MATCHES.find(x => x.id === matchId);
    if (m) {
      const newCard = document.createElement('div');
      renderMatchCard(m, newCard);
      card.replaceWith(newCard.firstChild);
    }
  }
}

const RAPIDAPI_KEY = 'b54773ac56msheedcadcc3491eaep1b4037jsnd742271224e0';
const WC_LEAGUE_ID = 1;     // FIFA World Cup
const WC_SEASON    = 2026;

const API_TEAM_MAP = {
  'Mexico': 'Mexique',
  'South Africa': 'Afrique du Sud',
  'South Korea': 'Corée du Sud',
  'Czech Republic': 'Rép. Tchèque',
  'Bosnia and Herzegovina': 'Bosnie-Herzégovine',
  'United States': 'USA',
  'Saudi Arabia': 'Arabie Saoudite',
  'New Zealand': 'Nouvelle-Zélande',
  'Ivory Coast': "Côte d'Ivoire",
  'DR Congo': 'RD Congo',
  'Haiti': 'Haïti',
  'Morocco': 'Maroc',
  'Brazil': 'Brésil',
  'France': 'France',
  'Argentina': 'Argentine',
  'Germany': 'Allemagne',
  'Netherlands': 'Pays-Bas',
  'Japan': 'Japon',
  'Sweden': 'Suède',
  'Tunisia': 'Tunisie',
  'Switzerland': 'Suisse',
  'Canada': 'Canada',
  'Qatar': 'Qatar',
  'Portugal': 'Portugal',
  'England': 'Angleterre',
  'Croatia': 'Croatie',
  'Colombia': 'Colombie',
  'Ecuador': 'Équateur',
  'Spain': 'Espagne',
  'Belgium': 'Belgique',
  'Uruguay': 'Uruguay',
  'Iraq': 'Irak',
  'Norway': 'Norvège',
  'Senegal': 'Sénégal',
  'Algeria': 'Algérie',
  'Austria': 'Autriche',
  'Jordan': 'Jordanie',
  'Ghana': 'Ghana',
  'Panama': 'Panama',
  'Uzbekistan': 'Ouzbékistan',
  'Australia': 'Australie',
  'Turkey': 'Turquie',
  'Paraguay': 'Paraguay',
  'Curacao': 'Curaçao',
  'Cape Verde': 'Cap-Vert',
  'Egypt': 'Égypte',
  'Iran': 'Iran',
  'Cape Verde Islands': 'Cap-Vert',
  'Scotland': 'Écosse',
};

function normalizeTeamName(apiName) {
  return API_TEAM_MAP[apiName] || apiName;
}

let _apiLastFetch = 0;
let _apiTimer = null;

async function fetchLiveScores() {
  const now = Date.now();
  if (now - _apiLastFetch < 60000) return; // Max 1 fois par minute
  _apiLastFetch = now;

  try {
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${WC_LEAGUE_ID}&season=${WC_SEASON}&live=all`;
    const res = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    });
    const data = await res.json();
    if (data.response && data.response.length > 0) {
      processApiFixtures(data.response);
    }
  } catch(e) {
    
  }
}

async function fetchTodayScores() {
  try {
    const today = new Date().toISOString().split('T')[0];
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${WC_LEAGUE_ID}&season=${WC_SEASON}&date=${today}`;
    const res = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    });
    const data = await res.json();
    if (data.response && data.response.length > 0) {
      processApiFixtures(data.response);
      
    }
  } catch(e) {
    
  }
}

function processApiFixtures(fixtures) {
  let updated = false;
  fixtures.forEach(fix => {
    const homeAPI = fix.teams.home.name;
    const awayAPI = fix.teams.away.name;
    const home = normalizeTeamName(homeAPI);
    const away = normalizeTeamName(awayAPI);
    const status = fix.fixture.status.short; // FT, 1H, 2H, HT, etc.
    const homeGoals = fix.goals.home;
    const awayGoals = fix.goals.away;

    const match = MATCHES.find(m =>
      (m.home === home && m.away === away) ||
      (m.home === away && m.away === home)
    );

    if (!match) return;
    if (homeGoals === null || awayGoals === null) return;

    const existing = SCORES[match.id];
    const newHome = m.home === home ? homeGoals : awayGoals;
    const newAway = m.home === home ? awayGoals : homeGoals;

    if (!existing || existing.home !== newHome || existing.away !== newAway) {
      SCORES[match.id] = { home: newHome, away: newAway, scorers: [], status };
      saveState({ scores: SCORES });
      updated = true;

      updateMatchCardScore(match.id, newHome, newAway, status);
    }
  });

  if (updated) { saveState({ scores: SCORES }); }
}

function updateMatchCardScore(matchId, home, away, status) {
  const vsDisplay = document.getElementById('vs-display-' + matchId);
  if (vsDisplay) {
    vsDisplay.className = 'score-btn-current';
    vsDisplay.textContent = home + '–' + away;
  }
  const card = document.querySelector('[data-id="' + matchId + '"]');
  if (card && ['1H','2H','HT','ET','P'].includes(status)) {
    if (!card.querySelector('.live-badge')) {
      const badge = document.createElement('div');
      badge.className = 'live-badge';
      badge.innerHTML = '<span class="live-dot"></span> EN DIRECT';
      card.insertBefore(badge, card.firstChild);
    }
  }
}

function initAutoScores() {
  const now = new Date();
  const wcStart = new Date('2026-06-11');
  const wcEnd   = new Date('2026-07-20');

  if (now < wcStart || now > wcEnd) {
    
    return;
  }

  fetchTodayScores();

  _apiTimer = setInterval(() => {
    fetchLiveScores();
    fetchTodayScores();
  }, 180000);

}

window.renderAdminComments = renderAdminComments;
window.renderCommentsList  = renderCommentsList;
window.fbApproveComment    = function(mid, cid) { if(window._fb) window._fb.update(window._fb.ref(window._fb.db,'comments/'+mid+'/'+cid),{approved:true}); addPoints(5, 'Commentaire approuvé'); };
window.fbDeleteComment     = function(mid, cid) { if(window._fb) window._fb.remove(window._fb.ref(window._fb.db,'comments/'+mid+'/'+cid)); };

function initExtraFilters() {
  const dates  = [...new Set(MATCHES.map(m => m.date))];
  const cities = [...new Set(MATCHES.map(m => m.city))].sort();
  const stades = [...new Set(MATCHES.map(m => m.stadium))].sort();

  const selDate  = $('filterDate');
  const selCity  = $('filterCity');
  const selStade = $('filterStade');
  if (!selDate || !selCity || !selStade) return;

  dates.forEach(d => {
    const o = document.createElement('option');
    o.value = d; o.textContent = '📅 ' + d;
    selDate.appendChild(o);
  });
  cities.forEach(c => {
    const o = document.createElement('option');
    o.value = c; o.textContent = '📍 ' + c;
    selCity.appendChild(o);
  });
  stades.forEach(s => {
    const o = document.createElement('option');
    o.value = s; o.textContent = '🏟️ ' + s;
    selStade.appendChild(o);
  });
}

function applyExtraFilters() { applyFilters(); }

function resetExtraFilters() {
  if ($('filterDate'))  $('filterDate').value  = '';
  if ($('filterCity'))  $('filterCity').value  = '';
  if ($('filterStade')) $('filterStade').value = '';
  applyFilters();
}

let isElmecoTheme = false;

function toggleElmecoTheme() {
  isElmecoTheme = !isElmecoTheme;
  applyElmecoTheme(isElmecoTheme);
  if (isElmecoTheme && isHaitiTheme) applyHaitiTheme(false);
}

function applyElmecoTheme(on) {
  isElmecoTheme = on;
  document.body.classList.toggle('theme-elmeco', on);
  if (on && !document.getElementById('comicSansLink')) {
    const link = document.createElement('link');
    link.id = 'comicSansLink';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.cdnfonts.com/css/comic-sans-ms';
    document.head.appendChild(link);
  }
  const btn = $('btnElmecoTheme');
  if (btn) {
    btn.classList.toggle('active', on);
    btn.title = on ? 'Désactiver thème ELMECO' : 'Thème ELMECO';
  }
  const banner = $('elmecoThemeBanner');
  if (banner) banner.classList.toggle('visible', on);
  if (on) {
    document.documentElement.style.setProperty('--accent',  '#e08040');
    document.documentElement.style.setProperty('--accent2', '#604020');
  } else {
    const s = loadState();
    document.documentElement.style.setProperty('--accent',  s.accent  || '#e8b923');
    document.documentElement.style.setProperty('--accent2', s.accent2 || '#ff6b35');
  }
}

function handleElmecoBannerClick(e) {
  applyElmecoTheme(false);
}

let isHaitiTheme = false;
function toggleHaitiTheme() {
  isHaitiTheme = !isHaitiTheme;
  applyHaitiTheme(isHaitiTheme);
}

function applyHaitiTheme(on) {
  isHaitiTheme = on;
  if (on && isElmecoTheme) applyElmecoTheme(false);
  document.body.classList.toggle('theme-haiti', on);
  const btn = $('btnHaitiTheme');
  if (btn) {
    btn.classList.toggle('active', on);
    btn.title = on ? 'Désactiver thème Haïti' : 'Activer thème Haïti 🇭🇹';
  }
  const banner = $('haitiBanner');
  if (banner) banner.classList.toggle('visible', on);
  if (on) {
    document.documentElement.style.setProperty('--accent', '#d4213d');
    document.documentElement.style.setProperty('--accent2', '#003f8a');
  } else {
    const s = loadState();
    document.documentElement.style.setProperty('--accent', s.accent || '#e8b923');
    document.documentElement.style.setProperty('--accent2', s.accent2 || '#ff6b35');
  }
}

function handleBannerClick(e) {
  applyHaitiTheme(false);
}

function checkLiveMatches() {
  const now = new Date();
  const months = ['janv','févr','mars','avr','mai','juin','juil','août','sept','oct','nov','déc'];
  const todayStr = now.getDate() + ' ' + months[now.getMonth()];
  const liveCards = document.querySelectorAll('.match-card');
  liveCards.forEach(card => {
    const mid = parseInt(card.dataset.id);
    const m = MATCHES.find(x => x.id === mid);
    if (!m) return;
    const score = SCORES[mid];
    const isToday = m.date.toLowerCase().trim() === todayStr.toLowerCase();
    const existingLive = card.querySelector('.live-badge');
    if (isToday && !score) {
      if (!existingLive) {
        const meta = card.querySelector('.match-meta');
        if (meta) {
          const badge = document.createElement('div');
          badge.className = 'live-badge';
          badge.innerHTML = '<span class="live-dot"></span> EN DIRECT';
          badge.style.marginBottom = '6px';
          meta.parentNode.insertBefore(badge, meta);
        }
      }
    } else if (existingLive) {
      existingLive.remove();
    }
  });
}

renderCalendar();
renderGroups();
renderBracket();
initExtraFilters();
setInterval(checkLiveMatches, 60000);
setTimeout(checkLiveMatches, 1000);
renderLegend();
renderTeamsList();
renderPalmares();
renderHaitiMatches();
updateCountdown();
setInterval(updateCountdown, 1000);
initNotifications();
initSafariBanner();
initIdentity();
loadAdsLazy();
applyThemeLabels();
_pushNav({ sidebar: 'closed', view: 'calendar' }); // État initial
initAutoScores();
window.renderAmbassadors = renderAmbassadors;

(function restorePrefs() {
  const s = loadState();

  if (!s.isDark) {
    document.body.classList.add('theme-light');
    setAll(['themeIcon','themeIcon2'], 'textContent', '🌙');
    setAll(['themeLabel','themeLabel2'], 'textContent', 'Sombre');
  }

  if (s.accent) {
    document.documentElement.style.setProperty('--accent', s.accent);
    document.querySelector('.countdown-bar').style.background =
      `linear-gradient(135deg, ${s.accent} 0%, var(--accent2) 100%)`;
    setAll(['accentPicker','accentPickerSidebar'], 'value', s.accent);
  }
  if (s.accent2) {
    document.documentElement.style.setProperty('--accent2', s.accent2);
    setAll(['accentPicker2','accentPicker2Sidebar'], 'value', s.accent2);
  }

  if (s.font) {
    document.body.style.fontFamily = s.font;
    ['select[onchange="setFont(this.value)"]', '#fontSelectSidebar'].forEach(sel => {
      const el = document.querySelector(sel);
      if (el) [...el.options].forEach(o => { o.selected = o.value === s.font; });
    });
  }
})();

document.querySelectorAll('.filter-btn:not(:first-child)').forEach(btn => {
  const group = btn.getAttribute('onclick').match(/'([A-L])'/)?.[1];
  if (group) btn.style.borderColor = GROUP_COLORS[group];
});
