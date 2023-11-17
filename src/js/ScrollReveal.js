function revealX() {
    window.sr = ScrollReveal({ duration:1500, distance:'100px', easing:'ease-out'});

    sr.reveal('.what_is-container', {origin:'top', reset:false});
    sr.reveal('.allergy-food-img', {origin:'left', reset:false});

    sr.reveal('.manifestation-container', {origin:'left', reset:false});
    sr.reveal('.manifestation_container-img', {origin:'bottom', reset:false});
    sr.reveal('.diagnosis-container', {origin:'bottom', reset:false});
    sr.reveal('.treatment-container', {origin:'bottom', reset:false});
    sr.reveal('.prevention-container', {origin:'bottom', reset:false});
    sr.reveal('.main_allergens-item', {origin:'left', reset:false});


    
}

window.addEventListener('load', () => {
    revealX();
})