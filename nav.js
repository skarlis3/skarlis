// 1. Define the navigation links (shared between desktop and mobile)
const navLinksHTML = `
    <div class="nav-group">
        <a href="index.html" class="nav-link"><i class="ph ph-squares-four"></i> Hub Dashboard</a>
    </div>

    <div class="nav-group-label" style="margin-top: 20px; margin-bottom: 10px; font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; padding-left: 14px;">
        The Toolkit
    </div>

    <div class="nav-group">
        <a href="mla_guide.html" class="nav-link"><i class="ph ph-quotes"></i> MLA Guide</a>
        <a href="apa_guide.html" class="nav-link"><i class="ph ph-file-text"></i> APA Guide</a>
        <a href="grammar.html" class="nav-link"><i class="ph ph-check-circle"></i> Grammar</a>
        <a href="genai.html" class="nav-link"><i class="ph ph-robot"></i> Using GenAI</a>
        <a href="resources.html" class="nav-link"><i class="ph ph-student"></i> Resources</a>
    </div>
`;

const officeCardHTML = `
    <div class="office-card">
        <div class="office-content">
            <h4>&nbsp &nbsp Sarah Karlis</h4>
            <p><i class="ph ph-map-pin"></i> Office SF 304-2</p>
            <p style="margin-top: 5px; opacity: 0.5; font-size: 0.75rem;">&nbsp &nbsp &nbsp English Department</p>
        </div>
    </div>

    <div class="nav-group">
        <a href="instructor-resources.html" class="nav-link">[&nbsp &nbsp Instructor Resources &nbsp &nbsp]</a>
    </div>
`;

// Desktop sidebar HTML
const sidebarHTML = `
    <div>
        ${navLinksHTML}
    </div>
    ${officeCardHTML}
`;

// 2. Inject desktop sidebar into the placeholder
const sidebarContainer = document.getElementById('sidebar-container');
if (sidebarContainer) {
    sidebarContainer.innerHTML = sidebarHTML;
}

// 3. Create mobile menu elements
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="ph ph-list"></i>';
mobileMenuBtn.setAttribute('aria-label', 'Open navigation menu');

const mobileNavOverlay = document.createElement('div');
mobileNavOverlay.className = 'mobile-nav-overlay';

const mobileNav = document.createElement('nav');
mobileNav.className = 'mobile-nav';
mobileNav.innerHTML = `
    <button class="mobile-close-btn" aria-label="Close navigation menu">
        <i class="ph ph-x"></i>
    </button>
    <div class="mobile-nav-content">
        ${navLinksHTML}
        ${officeCardHTML}
    </div>
`;

// 4. Insert mobile elements into the page
document.body.insertBefore(mobileMenuBtn, document.body.firstChild);
document.body.insertBefore(mobileNavOverlay, document.body.firstChild);
document.body.insertBefore(mobileNav, document.body.firstChild);

// 5. Mobile menu toggle functionality
const mobileCloseBtn = mobileNav.querySelector('.mobile-close-btn');

function openMobileNav() {
    mobileNav.classList.add('active');
    mobileNavOverlay.classList.add('active');
    mobileMenuBtn.innerHTML = '<i class="ph ph-x"></i>';
    document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
    mobileNav.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="ph ph-list"></i>';
    document.body.style.overflow = '';
}

mobileMenuBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains('active')) {
        closeMobileNav();
    } else {
        openMobileNav();
    }
});

mobileCloseBtn.addEventListener('click', closeMobileNav);
mobileNavOverlay.addEventListener('click', closeMobileNav);

// Close mobile nav on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        closeMobileNav();
    }
});

// 6. Highlight the active link (both desktop and mobile)
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

// 7. Update Top Bar Profile (if it exists on the page)
const profileAvatar = document.querySelector('.top-bar .avatar');
if (profileAvatar) {
    profileAvatar.innerText = 'K';
}