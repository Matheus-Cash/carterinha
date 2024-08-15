document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('bubble');

    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        bubble.style.transform = `translate(${x}px, ${y}px)`;
    });
});

const icon = document.getElementById('followIcon');

        document.addEventListener('mousemove', (event) => {
            const x = event.clientX;
            const y = event.clientY;
            icon.style.left = `${x}px`;
            icon.style.top = `${y}px`;
        });