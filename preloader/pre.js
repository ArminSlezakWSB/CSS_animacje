document.querySelector('html').classList.add('jsActive');

window.onload = function(){
    setTimeout(function(){
        document.querySelector('html').classList.remove('jsActive');
    },6000);
};
