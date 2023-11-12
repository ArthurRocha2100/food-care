document.addEventListener('DOMContentLoaded', function (){
    
    var returTopBtn = document.getElementById('return-top');
    var header = document.querySelector('header');

    function checkHeaderVisibility() {
        var headerRect = header.getBoundingClientRect();

        if(headerRect.bottom <= 0) {
            returTopBtn.style.display = 'block'
        }
        else{
            returTopBtn.style.display = 'none'
        }
    }

    window.addEventListener('scroll', checkHeaderVisibility);
    
    checkHeaderVisibility();
})
