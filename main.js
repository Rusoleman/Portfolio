let clicksCounter = 0;
let maxIndexItems = 3;

function changeClasses() {
    const blocks = document.querySelectorAll('.skill-block');

    blocks.forEach((block) => {
        const images = block.querySelectorAll('img');
        images.forEach((image, index) => {
            image.classList.add('hidden');
            if(index === clicksCounter) {
                if(index%2 === 0) {
                    image.classList.add('front');
                } else {
                    image.classList.add('back');
                }
                image.classList.remove('hidden');
            }
        });
    });

}

function changeArea() { 
    clicksCounter === maxIndexItems ? clicksCounter = 0 : clicksCounter++;
    const cardContainers = document.querySelectorAll('.skill-block');
    // cardContainers.forEach((cardContainer) =>  cardContainer.classList.remove('flip-container'));
    cardContainers.forEach((cardContainer) =>  cardContainer.classList.toggle('flip-container'));
    changeClasses();
}
