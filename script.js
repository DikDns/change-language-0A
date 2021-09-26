const html = document.querySelector('html');
const languages = window.navigator.languages;

if (window.navigator.languages[0] === 'id'){
    html.innerHTML = pageID;
    html.setAttribute('lang', 'id');
} else {
    html.innerHTML = pageEN;
    html.setAttribute('lang', 'en');
}


html.addEventListener('click', function(e){
    if (e.target.classList.contains('btn-lang')) {
        const lang = html.attributes.getNamedItem('lang').value;

        if (lang === 'en'){
            html.innerHTML = pageID;
            html.setAttribute('lang', 'id');
        } else if (lang === 'id') {
            html.innerHTML = pageEN;
            html.setAttribute('lang', 'en');
        }
    }
});