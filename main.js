const shareBtn = document.querySelector('.share-btn')
const shareItems = document.querySelector('#share-items')

shareBtn.addEventListener('click', ()=> {
    let ariaState = shareBtn.getAttribute('aria-expanded')


    if(ariaState == 'false') {
        shareBtn.setAttribute('aria-expanded', 'true')
        shareItems.classList.add('visible')
        shareBtn.classList.add('active')
    }else {
        shareBtn.setAttribute('aria-expanded', 'false')
        shareItems.classList.remove('visible')
        shareBtn.classList.remove('active')
    }
})