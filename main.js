const siteHeader = document.querySelector('header');
window.addEventListener('scroll', () => {
    // once people are not at the top of the page make the header non transparent
    window.scrollY ? siteHeader.classList.add('filled') : siteHeader.classList.remove('filled')
})