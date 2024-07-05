document.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
});

const hoverElements = document.querySelectorAll('.hover-effect');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.custom-cursor');
        cursor.classList.add('hover-effect');
    });

    element.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.custom-cursor');
        cursor.classList.remove('hover-effect');
    });
});
