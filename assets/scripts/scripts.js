function scrollToNextSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('data-target');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}