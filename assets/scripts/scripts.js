// // Smooth scrolling for the bottom arrows
// document.querySelectorAll('.bottom-arrow').forEach(arrow => {
//     arrow.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent default anchor behavior
//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);

//         if (targetElement) {
//             targetElement.scrollIntoView({
//                 behavior: 'smooth' // Smooth scroll animation
//             });
//         }
//     });
// });


function scrollToNextSection(event) {
    event.preventDefault();

    var currentSection = event.target.closest('.section');
    var nextSection = currentSection.nextElementSibling;

    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}