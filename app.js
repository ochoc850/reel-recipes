// ============================================================
//  REEL RECIPES — Main Application Logic
// ============================================================

let activeFilter = 'all';
let likedRecipes = JSON.parse(localStorage.getItem('likedRecipes') || '[]');
let comments = JSON.parse(localStorage.getItem('recipeComments') || '{}');

const DIETARY_LABELS = {
  'vegan':               { label: 'Vegan',             emoji: '🌱' },
  'vegetarian':          { label: 'Vegetarian',         emoji: '🥦' },
  'gluten-free':         { label: 'Gluten-Free',        emoji: '🌾' },
  'gluten-free-option':  { label: 'GF Option',          emoji: '🌾' },
  'dairy-free':          { label: 'Dairy-Free',         emoji: '🥛' },
  'dairy-free-option':   { label: 'DF Option',          emoji: '🥛' },
  'nut-free':            { label: 'Nut-Free',           emoji: '🥜' },
  'contains-nuts':       { label: 'Contains Nuts',      emoji: '⚠️' },
  'contains-shellfish':  { label: 'Contains Shellfish', emoji: '🦐' }
};

document.addEventListener('DOMContentLoaded', () => {
  renderGrid('all');
  setupDailyBanner();
  setupNav();
  setupMobileNav();
  setupModal();
  updateRecipeCount('all');
});

function setupDailyBanner() {
  const daily = getTodaysRecipe();
  document.getElementById('dailyTitle').textContent =
    `${daily.emoji} ${daily.title} from "${daily.film}" (${daily.year})`;
}

function setupNav() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.dataset.filter;
      activeFilter = filter;
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      if (btn.classList.contains('nav-btn')) btn.classList.add('active');
      renderGrid(filter);
      updateRecipeCount(filter);
      document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
      document.getElementById('mobileNav').classList.remove('open');
    });
  });

  document.querySelectorAll('.dropdown > .nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = btn.nextElementSibling;
      document.querySelectorAll('.dropdown-menu').forEach(m => {
        if (m !== menu) m.classList.remove('open');
      });
      menu.classList.toggle('open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  });
}

function setupMobileNav() {
  document.getElementById('hamburger').addEventListener('click', () =>
    document.getElementById('mobileNav').classList.add('open'));
  document.getElementById('closeNav').addEventListener('click', () =>
    document.getElementById('mobileNav').classList.remove('open'));
}

function filterRecipes(filter) {
  if (filter === 'all') return RECIPES;
  const dietaryFilters = ['vegan','vegetarian','gluten-free','dairy-free','nut-free'];
  if (dietaryFilters.includes(filter)) {
    return RECIPES.filter(r => r.dietary && r.dietary.includes(filter));
  }
  return RECIPES.filter(r =>
    r.category === filter || r.difficulty === filter || r.type === filter
  );
}

function updateRecipeCount(filter) {
  const count = filterRecipes(filter).length;
  document.getElementById('recipeCount').textContent = `${count} recipe${count !== 1 ? 's' : ''}`;
}

function buildDietaryBadges(dietary) {
  if (!dietary || dietary.length === 0) return '';
  return dietary.map(d => {
    const info = DIETARY_LABELS[d];
    if (!info) return '';
    return `<span class="diet-badge ${d}">${info.emoji} ${info.label}</span>`;
  }).join('');
}

function renderGrid(filter) {
  const grid = document.getElementById('recipeGrid');
  const filtered = filterRecipes(filter);
  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results"><p>No recipes found for this filter.</p><p>Check back soon!</p></div>';
    return;
  }

  const today = getTodaysRecipe();

  filtered.forEach((recipe, index) => {
    const isToday = recipe.id === today.id;
    const isLiked = likedRecipes.includes(recipe.id);
    const userComments = comments[recipe.id] || [];
    const totalComments = recipe.comments.length + userComments.length;
    const totalLikes = recipe.likes + (isLiked ? 1 : 0);
    const dietaryHTML = buildDietaryBadges(recipe.dietary);

    const card = document.createElement('div');
    card.className = `recipe-card ${isToday ? 'featured' : ''}`;
    card.style.animationDelay = `${index * 0.07}s`;
    card.dataset.id = recipe.id;

    card.innerHTML = `
      ${isToday ? '<div class="today-badge">⭐ Today\'s Recipe</div>' : ''}
      <div class="card-img-wrap">
        <img src="${recipe.image}" alt="${recipe.film} poster" loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x400/2e2238/d4c5f0?text=${encodeURIComponent(recipe.film)}';"/>
        <div class="card-type-badge ${recipe.type}">${recipe.type === 'animated' ? '🎨 Animated' : '🎥 Live Action'}</div>
        <div class="card-difficulty ${recipe.difficulty}">${difficultyLabel(recipe.difficulty)}</div>
      </div>
      <div class="card-body">
        <div class="card-film">${recipe.emoji} ${recipe.film} (${recipe.year})</div>
        <h3 class="card-title">${recipe.title}</h3>
        <p class="card-snippet">${recipe.filmConnection.substring(0, 110)}...</p>
        ${dietaryHTML ? `<div class="card-dietary">${dietaryHTML}</div>` : ''}
        <div class="card-meta">
          <span>⏱ ${recipe.totalTime}</span>
          <span>👥 Serves ${recipe.servings}</span>
          <span>🎬 ${recipe.studio}</span>
        </div>
        <div class="card-actions">
          <button class="like-btn ${isLiked ? 'liked' : ''}" data-id="${recipe.id}">
            ${isLiked ? '❤️' : '🤍'} ${totalLikes}
          </button>
          <button class="comment-btn" data-id="${recipe.id}">
            💬 ${totalComments}
          </button>
          <button class="view-btn" data-id="${recipe.id}">View Full Recipe →</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLike(parseInt(btn.dataset.id));
    });
  });

  grid.querySelectorAll('.view-btn, .card-img-wrap, .card-title').forEach(el => {
    el.addEventListener('click', () => {
      const id = parseInt(el.closest('.recipe-card')?.dataset.id || el.dataset.id);
      if (id) openModal(id);
    });
  });

  grid.querySelectorAll('.comment-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(parseInt(btn.dataset.id), true);
    });
  });
}

function toggleLike(id) {
  const idx = likedRecipes.indexOf(id);
  if (idx === -1) likedRecipes.push(id);
  else likedRecipes.splice(idx, 1);
  localStorage.setItem('likedRecipes', JSON.stringify(likedRecipes));
  renderGrid(activeFilter);
}

function setupModal() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function openModal(id, scrollToComments = false) {
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) return;

  const isLiked = likedRecipes.includes(recipe.id);
  const userComments = comments[recipe.id] || [];
  const allComments = [...recipe.comments, ...userComments];
  const dietaryHTML = buildDietaryBadges(recipe.dietary);

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-image-pair">
      <div class="img-block">
        <img src="${recipe.movieSceneImage}" alt="${recipe.film} movie"
          onerror="this.onerror=null;this.src='https://placehold.co/430x280/2e2238/d4c5f0?text=In+the+Film';"/>
        <span class="img-label">🎬 In the Film</span>
      </div>
      <div class="img-block">
        <img src="${recipe.foodImage}" alt="${recipe.title}"
          onerror="this.onerror=null;this.src='https://placehold.co/430x280/2e2238/d4c5f0?text=The+Real+Dish';"/>
        <span class="img-label">🍽 The Real Dish</span>
      </div>
    </div>

    <div class="modal-title-bar">
      <div class="modal-badges">
        <span class="badge-type ${recipe.type}">${recipe.type === 'animated' ? '🎨 Animated' : '🎥 Live Action'}</span>
        <span class="badge-diff ${recipe.difficulty}">${difficultyLabel(recipe.difficulty)}</span>
      </div>
      <h1>${recipe.emoji} ${recipe.title}</h1>
      <p class="modal-film">From <strong>${recipe.film}</strong> (${recipe.year}) · ${recipe.studio}</p>
    </div>

    ${dietaryHTML ? `<div class="modal-dietary"><span class="diet-label">Dietary:</span>${dietaryHTML}</div>` : ''}

    <div class="modal-content">
      <section class="film-connection">
        <h2>🎬 Film Connection</h2>
        <p>${recipe.filmConnection}</p>
      </section>

      <section class="prep-info">
        <div class="prep-grid">
          <div class="prep-item"><span class="prep-label">Prep Time</span><span class="prep-val">${recipe.prepTime}</span></div>
          <div class="prep-item"><span class="prep-label">Cook Time</span><span class="prep-val">${recipe.cookTime}</span></div>
          <div class="prep-item"><span class="prep-label">Total Time</span><span class="prep-val">${recipe.totalTime}</span></div>
          <div class="prep-item"><span class="prep-label">Serves</span><span class="prep-val">${recipe.servings} people</span></div>
          <div class="prep-item"><span class="prep-label">Difficulty</span><span class="prep-val">${difficultyLabel(recipe.difficulty)}</span></div>
          <div class="prep-item"><span class="prep-label">Category</span><span class="prep-val">${recipe.category.replace(/-/g,' ')}</span></div>
        </div>
      </section>

      <div class="two-col">
        <section class="ingredients-section">
          <h2>🧾 Ingredients</h2>
          <ul class="ingredient-list">
            ${recipe.ingredients.map(ing =>
              ing.startsWith('FOR ')
                ? `<li class="ing-header">${ing}</li>`
                : `<li><label><input type="checkbox" /> <span>${ing}</span></label></li>`
            ).join('')}
          </ul>
        </section>
        <section class="steps-section">
          <h2>👨‍🍳 Method</h2>
          ${recipe.steps.map(s => `
            <div class="step-card">
              <div class="step-num">${s.step}</div>
              <div class="step-body"><h4>${s.title}</h4><p>${s.detail}</p></div>
            </div>
          `).join('')}
        </section>
      </div>

      <section class="bonus-tip">
        <h2>💡 Bonus: Waste Nothing</h2>
        <p>${recipe.bonusTip}</p>
      </section>

      <div class="modal-actions">
        <button class="modal-like-btn ${isLiked ? 'liked' : ''}" data-id="${recipe.id}">
          ${isLiked ? '❤️ Liked!' : '🤍 Like this Recipe'} (${recipe.likes + (isLiked ? 1 : 0)})
        </button>
      </div>

      <section class="comments-section" id="commentsSection">
        <h2>💬 Community</h2>
        <div class="comments-list">
          ${allComments.map(c => `
            <div class="comment">
              <div class="comment-header">
                <span class="comment-user">${c.user || 'Anonymous Chef'}</span>
                <span class="comment-time">${c.time || 'Just now'}</span>
              </div>
              <p class="comment-text">${c.text}</p>
              ${c.image ? `<img src="${c.image}" class="comment-img" alt="User recreation"/>` : ''}
            </div>
          `).join('')}
        </div>
        <div class="comment-form">
          <h3>Leave a Comment</h3>
          <input type="text" id="commentName" placeholder="Your name (optional)" class="comment-input" />
          <textarea id="commentText" placeholder="Share your experience, tips, or questions..." class="comment-textarea" rows="4"></textarea>
          <p class="comment-note">📸 Made this recipe? Paste an image URL below to share your creation.</p>
          <input type="text" id="commentImage" placeholder="Image URL (optional)" class="comment-input" />
          <button class="submit-comment-btn" data-id="${recipe.id}">Post Comment</button>
        </div>
      </section>
    </div>
  `;

  document.querySelector('.modal-like-btn').addEventListener('click', (e) => {
    toggleLike(parseInt(e.target.dataset.id));
    openModal(id, false);
  });

  document.querySelector('.submit-comment-btn').addEventListener('click', (e) => {
    submitComment(parseInt(e.target.dataset.id));
  });

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  if (scrollToComments) {
    setTimeout(() => {
      document.getElementById('commentsSection')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function submitComment(recipeId) {
  const name = document.getElementById('commentName').value.trim() || 'Anonymous Chef';
  const text = document.getElementById('commentText').value.trim();
  const image = document.getElementById('commentImage').value.trim();
  if (!text) { alert('Please write something before posting!'); return; }
  if (!comments[recipeId]) comments[recipeId] = [];
  comments[recipeId].push({ user: name, text, time: 'Just now', image: image || null });
  localStorage.setItem('recipeComments', JSON.stringify(comments));
  openModal(recipeId, true);
}

function difficultyLabel(d) {
  const map = { easy: '🟢 Easy', medium: '🟡 Medium', hard: '🔴 Hard' };
  return map[d] || d;
}
