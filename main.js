/*const flip_card_1 = document.getElementById('skill_1');
const flip_card_2 = document.getElementById('skill_2');
const flip_card_3 = document.getElementById('skill_3');
const flip_card_4 = document.getElementById('skill_4');
const flip_card_5 = document.getElementById('skill_5');
const flip_card_6 = document.getElementById('skill_6');
const flip_card_7 = document.getElementById('skill_7');
*/


const flip_cards = [flip_card_1 = document.getElementById('skill_1'),flip_card_2 = document.getElementById('skill_2'),flip_card_3 = document.getElementById('skill_3'),flip_card_4 = document.getElementById('skill_4'),flip_card_5 = document.getElementById('skill_5'),flip_card_6 = document.getElementById('skill_6'),flip_card_7= document.getElementById('skill_7')];
const classes = ['front', 'back', 'hidden'];
const images = [img_1 = document.getElementById('img_1'), img_2 = document.getElementById('img_2'), img_3 = document.getElementById('img_3')];
function classChager(){
    last_position = classes.length;
    last_item = classes[last_position];
    classes.unshift(last_item);

    images[0].classList.add(classes[0]);
    images[1].classList.add(classes[1]);
    images[2].classList.add(classes[2]);
}
function changeArea(){
    for (var i = 0; i < flip_cards.length; i++) {
        flip_cards[i].classList.add('flip-container');
        setTimeout(() => {
            flip_cards[i+1].classList.add('flip-container');
        },i*220);
    }
    classChager()
}

/*

function changeArea(){
    var flag = 0;
    switch(flag) {
        case 0:
            flip_card_1.classList.add('flip-container');
            setTimeout(() => {
                flip_card_2.classList.add('flip-container'); 
            }, 220);
            setTimeout(() => {
                flip_card_3.classList.add('flip-container'); 
            }, 440);
            setTimeout(() => {
                flip_card_4.classList.add('flip-container'); 
            }, 660);
            setTimeout(() => {
                flip_card_5.classList.add('flip-container'); 
            }, 220);
            setTimeout(() => {
                flip_card_6.classList.add('flip-container'); 
            }, 440);
            setTimeout(() => {
                flip_card_7.classList.add('flip-container'); 
            }, 660);
            flag = 1;
        break;
        case 1:
            flip_card.classList.add('flip-container');
            flag = 0;
        break;
    }
}*/