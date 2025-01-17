initializedApp()

function initializedApp() {

    function moveCursor() {
        document.addEventListener('mousemove', (event) => {
        const object = document.querySelector('.mousepoint');
    
        object.style.left = `${event.clientX}px`;
        object.style.top = `${event.clientY}px`;
        })
    }

    function scrollSection() {
        const sections = document.querySelectorAll('.section')
        const navItems = document.querySelectorAll('.nav_link')
        const fullHeight = window.innerHeight
    
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect()
            const visibleHeight = Math.min(rect.bottom, fullHeight) - Math.max(rect.top, 0)
            if(visibleHeight > fullHeight / 2) {
                setActiveNav(navItems[index])
            }
        })
    }
    
    function setActiveNav(item) {
        document.querySelectorAll('span.line, span.nav_descr').forEach(span => {
            span.classList.remove('active_span_line', 'active_span_text')
        });
    
        item.querySelectorAll('span').forEach(span => {
            if (span.classList.contains('line')) span.classList.add('active_span_line');
            if (span.classList.contains('nav_descr')) span.classList.add('active_span_text');
        })
    }

    moveCursor();
    
    window.addEventListener('scroll', scrollSection)
    window.addEventListener('DOMContentLoaded', scrollSection)
}