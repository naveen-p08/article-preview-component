const shareBtn = document.querySelector('.share-btn')
const shareItems = document.querySelector('#share-items')

shareBtn.addEventListener('click', ()=> {
    let ariaState = shareBtn.getAttribute('aria-expanded')


    if(ariaState == 'false') {
        shareBtn.setAttribute('aria-expanded', 'true')
        shareItems.classList.add('visible')
    }else {
        shareBtn.setAttribute('aria-expanded', 'false')
        shareItems.classList.remove('visible')
    }
})