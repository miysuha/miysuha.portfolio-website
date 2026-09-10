let sliderIndices = {
    malay: 0,
    lazy: 0
};

function updateSlidePositions(sliderKey) {
    const images = document.querySelectorAll(`#track-${sliderKey} .work-image`);
    const currentSlideIndex = sliderIndices[sliderKey];
    
    images.forEach((img, index) => {
       
        const offset = (index - currentSlideIndex) * 100;
        img.style.left = `${offset}%`;
    });
}

function moveSlide(sliderKey, direction) {
    const images = document.querySelectorAll(`#track-${sliderKey} .work-image`);
    
    sliderIndices[sliderKey] += direction;

    if (sliderIndices[sliderKey] >= images.length) {
        sliderIndices[sliderKey] = 0; 
    }
    if (sliderIndices[sliderKey] < 0) {
        sliderIndices[sliderKey] = images.length - 1; 
    }

    updateSlidePositions(sliderKey);
}