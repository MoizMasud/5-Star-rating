const stars = document.querySelectorAll('.stars a');
const starWrapper = document.querySelector('.stars');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        starWrapper.classList.add('disabled')
        stars.forEach((otherStar, otherIndex) => {
            if(otherIndex <= index) {
                otherStar.classList.add('active')
            }
        })
        console.log(`Star rating is ${index+1}`);
    })
});