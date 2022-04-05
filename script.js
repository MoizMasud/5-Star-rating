const stars = document.querySelectorAll('.stars a');
const starWrapper = document.querySelector('.stars');
stars.forEach((star, clickedIndex) => {
    star.addEventListener('click', () => {
        starWrapper.classList.add('disabled') // after a click, disable the stars
        stars.forEach((otherStar, otherIndex) => {
            if(clickedIndex >= otherIndex ) {
                otherStar.classList.add('active') // add the class upto the clicked index
            }
        })
        console.log(`Star rating is ${clickedIndex+1}`);
    })
});