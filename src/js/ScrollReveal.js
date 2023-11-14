function revealX() {
    window.sr = ScrollReveal({ duration:2000, distance:'100px', easing:'ease-out'});

    sr.reveal('.what_is-container', {origin:'top', reset:true});
    sr.reveal('.allergy-food-img', {origin:'left', reset:true});

    sr.reveal('.manifestation-container', {origin:'left', reset:true});
    sr.reveal('.manifestation_container-img', {origin:'bottom', reset:true});
    sr.reveal('.diagnosis-container', {origin:'bottom', reset:true});
    sr.reveal('.treatment-container', {origin:'bottom', reset:true});

    
}

window.addEventListener('load', () => {
    revealX();
})