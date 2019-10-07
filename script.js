
const previousBtn = $("#prev");
const nextBtn = $("#nxt");

const topSlider = $("#topSlider");
const bottomSlider = $("#bottomSlider");


let counterTop = 0;
let counterBottom = 0;

nextBtn.click(()=>{

    const topSliderImages = topSlider.children();
    const firstChildTop = topSliderImages[0];

    const bottomSliderImages = bottomSlider.children();
    const firstChildBottom = bottomSliderImages[0];

    const secondChildTop = topSliderImages[1];
    const secondChildBottom = bottomSliderImages[1];
  
    $(topSliderImages).hide().fadeIn(200);
    $(bottomSliderImages).hide().fadeIn(200);
    
    $(firstChildTop).appendTo(topSlider);
    $(firstChildBottom).appendTo(bottomSlider);  
});



previousBtn.click(() => {

    const topSliderImages = topSlider.children();
    const lastChildTop = topSliderImages[topSliderImages.length - 1];

    const bottomSliderImages = bottomSlider.children();
    const lastChildBottom = bottomSliderImages[bottomSliderImages.length - 1];

    const secondChildTop = topSliderImages[1];
    const secondChildBottom = bottomSliderImages[1];

    $(topSliderImages).hide().fadeIn(200);
    $(bottomSliderImages).hide().fadeIn(200);
    
    $(lastChildTop).prependTo(topSlider);
    $(lastChildBottom).prependTo(bottomSlider);
})


    



