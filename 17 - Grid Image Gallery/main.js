const randomNumber = (limit) => {
    return Math.floor(Math.random() * limit) + 1;
}

const generateHtml = ([h, v]) => {
    const item = document.createElement('div');
    const image = document.createElement('img');
    const itemOverlay = document.createElement('div');
    const button = document.createElement('button');
    
    item.setAttribute('class', `item h${h} v${v}`);
    image.src = `images/${randomNumber(12)}.jpg`;
    itemOverlay.setAttribute('class', 'item__overlay');
    button.textContent = 'View →';
    
    itemOverlay.appendChild(button);
    item.appendChild(image);
    item.appendChild(itemOverlay);
    
    return item;
}

const handleClick = (e) => {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
};

const close = () => {
    overlay.classList.remove('open');
}

const generateEvents = () => {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.addEventListener('click', handleClick));
    overlayClose.addEventListener('click', close);
};

const findEmptySlots = () => {
    let vertical = 0;
    let horizontal = 0;
    
    digits.forEach((element) => {
        vertical += element[0];
        horizontal += element[1];
    });
    
    return Math.abs(vertical - horizontal);
};

const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');
const digits = Array.from({length: 50}, () => 
    [randomNumber(4), randomNumber(4)]
).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);

digits.map((digitArray) =>
    gallery.appendChild(generateHtml(digitArray))
);
generateEvents();
