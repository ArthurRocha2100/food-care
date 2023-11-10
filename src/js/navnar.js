document.addEventListener('DOMContentLoaded', function (){
    
    var returTopBtn = document.getElementById('return-top');
    var missionSection = document.getElementById('mission');
    var aboutSection = document.getElementById('about')
    var header = document.querySelector('header');

    function checkMissionSectionVisibility() {
        var missionRect = missionSection.getBoundingClientRect();

        if (missionRect.top <= 6) {
            returTopBtn.style.display = 'block' 
            header.style.position = 'static';
            header.style.top = 0;
            aboutSection.style.marginTop = 0;
        }
        else if (missionRect.top <= 90) {
            header.style.position = 'absolute';
            header.style.top = 'calc(100vh)';
            aboutSection.style.marginTop = '90px';

        } 
        else {
            header.style.position = 'sticky';
            header.style.top = 0;
            aboutSection.style.marginTop = 0;
            returTopBtn.style.display = 'none'
        }
    }

    window.addEventListener('scroll', checkMissionSectionVisibility);
    
    checkMissionSectionVisibility();
})
