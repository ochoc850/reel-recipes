// ============================================================
//  REEL RECIPES — Main Application Logic
// ============================================================

let activeFilter = 'all';
let likedRecipes = JSON.parse(localStorage.getItem('likedRecipes') || '[]');
let comments = JSON.parse(localStorage.getItem('recipeComments') || '{}');

// ─────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderGrid('all');
  setupDailyBanner();
  setupNav();
  setupMobileNav();
  setupModal();
  updateRecipeCount('all');
});

// ─────────────────────────────────────────
//  DAILY BANNER
// ─────────────────────────────────────────
function setupDailyBanner() {
  const daily = getTodaysRecipe();
  document.getElementById('dailyTitle').textContent =
    `${daily.emoji} ${daily.title} from "${daily.film}" (${daily.year})`;
}

// ─────────────────────────────────────────
//  NAV FILTERING
// ─────────────────────────────────────────
function setupNav() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.dataset.filter;
      activeFilter = filter;

      // Close dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));

      // Update active state on desktop nav
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      if (btn.classList.contains('nav-btn')) btn.classList.add('active');

      renderGrid(filter);
      updateRecipeCount(filter);
      document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });

      // Close mobile nav
      document.getElementById('mobileNav').classList.remove('open');
    });
  });

  // Dropdown toggles
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
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const closeNav = document.getElementById('closeNav');

  hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
  closeNav.addEventListener('click', () => mobileNav.classList.remove('open'));
}

// ─────────────────────────────────────────
//  FILTER LOGIC
// ─────────────────────────────────────────
function filterRecipes(filter) {
  if (filter === 'all') return RECIPES;
  return RECIPES.filter(r =>
    r.category === filter ||
    r.difficulty === filter ||
    r.type === filter
  );
}

function updateRecipeCount(filter) {
  const count = filterRecipes(filter).length;
  document.getElementById('recipeCount').textContent = `${count} recipe${count !== 1 ? 's' : ''}`;
}

// ─────────────────────────────────────────
//  RENDER GRID
// ─────────────────────────────────────────
function renderGrid(filter) {
  const grid = document.getElementById('recipeGrid');
  const filtered = filterRecipes(filter);

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results"><p>No recipes found for this filter yet.</p><p>Check back soon — new recipes added daily!</p></div>';
    return;
  }

  const today = getTodaysRecipe();

  filtered.forEach((recipe, index) => {
    const isToday = recipe.id === today.id;
    const isLiked = likedRecipes.includes(recipe.id);
    const userComments = comments[recipe.id] || [];
    const totalComments = recipe.comments.length + userComments.length;
    const totalLikes = recipe.likes + (isLiked ? 1 : 0);

    const card = document.createElement('div');
    card.className = `recipe-card ${isToday ? 'featured' : ''}`;
    card.style.animationDelay = `${index * 0.07}s`;
    card.dataset.id = recipe.id;

    card.innerHTML = `
      ${isToday ? '<div class="today-badge">⭐ Today\'s Recipe</div>' : ''}
      <div class="card-img-wrap">
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1a1208/c9943a?text=${encodeURIComponent(recipe.film)}';"/>
        <div class="card-type-badge ${recipe.type}">${recipe.type === 'animated' ? '🎨 Animated' : '🎥 Live Action'}</div>
        <div class="card-difficulty ${recipe.difficulty}">${difficultyLabel(recipe.difficulty)}</div>
      </div>
      <div class="card-body">
        <div class="card-film">${recipe.emoji} ${recipe.film} (${recipe.year})</div>
        <h3 class="card-title">${recipe.title}</h3>
        <p class="card-snippet">${recipe.filmConnection.substring(0, 110)}...</p>
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

  // Attach events to cards
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

// ─────────────────────────────────────────
//  LIKE SYSTEM
// ─────────────────────────────────────────
function toggleLike(id) {
  const idx = likedRecipes.indexOf(id);
  if (idx === -1) {
    likedRecipes.push(id);
  } else {
    likedRecipes.splice(idx, 1);
  }
  localStorage.setItem('likedRecipes', JSON.stringify(likedRecipes));
  renderGrid(activeFilter);
}

// ─────────────────────────────────────────
//  MODAL
// ─────────────────────────────────────────
function setupModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(id, scrollToComments = false) {
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) return;

  const isLiked = likedRecipes.includes(recipe.id);
  const userComments = comments[recipe.id] || [];
  const allComments = [...recipe.comments, ...userComments];

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-hero">
      <img src="${recipe.image}" alt="${recipe.title}" onerror="this.onerror=null;this.src='https://placehold.co/860x280/1a1208/c9943a?text=${encodeURIComponent(recipe.film)}';"/>
      <div class="modal-hero-overlay">
        <div class="modal-badges">
          <span class="badge-type ${recipe.type}">${recipe.type === 'animated' ? '🎨 Animated' : '🎥 Live Action'}</span>
          <span class="badge-diff ${recipe.difficulty}">${difficultyLabel(recipe.difficulty)}</span>
        </div>
        <h1>${recipe.emoji} ${recipe.title}</h1>
        <p class="modal-film">From <strong>${recipe.film}</strong> (${recipe.year}) · ${recipe.studio}</p>
      </div>
    </div>

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
              <div class="step-body">
                <h4>${s.title}</h4>
                <p>${s.detail}</p>
              </div>
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
        <div class="comments-list" id="commentsList">
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
          <textarea id="commentText" placeholder="Share your experience, tips, or questions about this recipe..." class="comment-textarea" rows="4"></textarea>
          <p class="comment-note">📸 Made this recipe? Share your creation by pasting an image URL below.</p>
          <input type="text" id="commentImage" placeholder="Image URL (optional)" class="comment-input" />
          <button class="submit-comment-btn" data-id="${recipe.id}">Post Comment</button>
        </div>
      </section>
    </div>
  `;

  // Like button inside modal
  document.querySelector('.modal-like-btn').addEventListener('click', (e) => {
    toggleLike(parseInt(e.target.dataset.id));
    openModal(id, false); // re-render modal
  });

  // Comment submission
  document.querySelector('.submit-comment-btn').addEventListener('click', (e) => {
    submitComment(parseInt(e.target.dataset.id));
  });

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('active');
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

// ─────────────────────────────────────────
//  COMMENTS
// ─────────────────────────────────────────
function submitComment(recipeId) {
  const name = document.getElementById('commentName').value.trim() || 'Anonymous Chef';
  const text = document.getElementById('commentText').value.trim();
  const image = document.getElementById('commentImage').value.trim();

  if (!text) {
    alert('Please write something before posting!');
    return;
  }

  if (!comments[recipeId]) comments[recipeId] = [];

  const newComment = {
    user: name,
    text: text,
    time: 'Just now',
    image: image || null
  };

  comments[recipeId].push(newComment);
  localStorage.setItem('recipeComments', JSON.stringify(comments));

  // Re-render modal
  openModal(recipeId, true);
}

// ─────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────
function difficultyLabel(d) {
  const map = { easy: '🟢 Easy', medium: '🟡 Medium', hard: '🔴 Hard' };
  return map[d] || d;
}
