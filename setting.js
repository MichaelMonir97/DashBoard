var email = document.querySelector(".genral-info input[type='email']")
var button = document.querySelector('.genral-info .row button')

button.addEventListener('click', function(){
    if(this.textContent == 'Change'){
        this.classList.remove('change')
        this.textContent = 'Save'

        email.classList.remove('c-mode')
        email.toggleAttribute('disabled')
        email.classList.add('e-mode')
    }else{
        this.classList.add('change')
        this.textContent = 'Change'

        email.classList.remove('e-mode')
        email.toggleAttribute('disabled')
        email.classList.add('c-mode')
    }
}
)


// li radio label
var li = Array.from(document.querySelectorAll('.backup > ul li'))

li.forEach(function(eachLi){
    eachLi.addEventListener('click',function(){
        li.forEach(function(removeClas){removeClas.classList.remove('active')})
        this.classList.add('active')
    })
})