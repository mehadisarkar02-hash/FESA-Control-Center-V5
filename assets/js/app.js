// FESA Control Center V5 - Ultra Premium
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cFESA Control Center V5 Loaded Successfully', 'color: #66ccff; font-size: 18px; font-weight: bold');

    // Globe Click Effect
    const globe = document.getElementById('globe');
    if (globe) {
        globe.addEventListener('click', () => {
            globe.style.transition = 'transform 0.6s';
            globe.style.transform = 'scale(1.3) rotate(30deg)';
            setTimeout(() => {
                globe.style.transform = 'scale(1) rotate(0deg)';
            }, 600);
            
            createParticles();
        });
    }

    // Command Palette (Ctrl + K)
    const commandBtn = document.getElementById('command-btn');
    if (commandBtn) {
        commandBtn.addEventListener('click', showCommandPalette);
    }

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            showCommandPalette();
        }
    });

    // Mouse Glow Effect
    document.addEventListener('mousemove', (e) => {
        const glow = document.createElement('div');
        glow.className = 'mouse-glow';
        glow.style.position = 'fixed';
        glow.style.width = '500px';
        glow.style.height = '500px';
        glow.style.borderRadius = '50%';
        glow.style.background = 'radial-gradient(circle, rgba(102, 204, 255, 0.12) 0%, transparent 70%)';
        glow.style.left = `${e.clientX - 250}px`;
        glow.style.top = `${e.clientY - 250}px`;
        glow.style.pointerEvents = 'none';
        glow.style.zIndex = '-1';
        document.body.appendChild(glow);

        setTimeout(() => glow.remove(), 800);
    });
});

// Command Palette Function
function showCommandPalette() {
    const palette = document.createElement('div');
    palette.style.position = 'fixed';
    palette.style.top = '20%';
    palette.style.left = '50%';
    palette.style.transform = 'translate(-50%, -50%)';
    palette.style.background = 'rgba(10, 15, 40, 0.95)';
    palette.style.backdropFilter = 'blur(20px)';
    palette.style.padding = '2rem';
    palette.style.borderRadius = '16px';
    palette.style.border = '1px solid #66ccff';
    palette.style.width = '420px';
    palette.style.zIndex = '10000';
    palette.innerHTML = `
        <h3 style="color:#66ccff; margin-bottom:1rem;">Command Palette</h3>
        <input type="text" placeholder="Search commands..." style="width:100%; padding:12px; background:rgba(255,255,255,0.1); border:none; border-radius:8px; color:white;">
        <div style="margin-top:1rem; color:#aaa; font-size:0.95rem;">
            <div>→ Open Facebook Downloader</div>
            <div>→ Start AI Chat</div>
            <div>→ View Analytics</div>
            <div>→ Open Settings</div>
        </div>
    `;
    document.body.appendChild(palette);

    // Close on click outside
    setTimeout(() => {
        document.addEventListener('click', function handler(e) {
            if (!palette.contains(e.target)) {
                palette.remove();
                document.removeEventListener('click', handler);
            }
        });
    }, 100);
}

// Particle Effect for Globe
function createParticles() {
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.textContent = '✦';
        particle.style.position = 'fixed';
        particle.style.color = '#66ccff';
        particle.style.fontSize = '18px';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        particle.style.opacity = '0.9';
        particle.style.zIndex = '999';
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.style.transition = 'all 1.5s';
            particle.style.opacity = '0';
            particle.style.transform = `translate(${Math.random()*200 - 100}px, -150px)`;
        }, 50);

        setTimeout(() => particle.remove(), 2000);
    }
                              }
