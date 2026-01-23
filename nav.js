// 1. Define the Sidebar HTML structure
const sidebarHTML = `
    <div>
        
        <div class="nav-group">
            <a href="index.html" class="nav-link"><i class="ph ph-squares-four"></i> Hub Dashboard</a>
        </div>

        <div style="margin-top: 20px; margin-bottom: 10px; font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; padding-left: 14px;">
            The Toolkit
        </div>

        <div class="nav-group">
            <a href="mla_guide.html" class="nav-link"><i class="ph ph-quotes"></i> MLA Guide</a>
            <a href="apa_guide.html" class="nav-link"><i class="ph ph-file-text"></i> APA Guide</a>
            <a href="grammar.html" class="nav-link"><i class="ph ph-check-circle"></i> Grammar</a>
            <a href="genai.html" class="nav-link"><i class="ph ph-robot"></i> Using GenAI</a>
            <a href="resources.html" class="nav-link"><i class="ph ph-student"></i> Resources</a>
        </div>
    </div>

    <!-- Office Card at bottom of sidebar -->
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

// 2. Inject into the placeholder
const sidebarContainer = document.getElementById('sidebar-container');
if (sidebarContainer) {
    sidebarContainer.innerHTML = sidebarHTML;
}

// 3. Highlight the active link
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

// 4. Update Top Bar Profile (if it exists on the page)
// This targets the top bar profile section to change "PK" to "K"
const profileAvatar = document.querySelector('.top-bar .avatar');
if (profileAvatar) {
    profileAvatar.innerText = 'K';
}