// Task Delete //
var taskDeleted =localStorage.getItem('list') == null ? [] : [localStorage.getItem('list') ]
console.log(taskDeleted)
if (taskDeleted.length !== 0 ){

    for (i of taskDeleted[0].split(',')){
        document.querySelectorAll('.tasks .row')[i].classList.add('deleted')
        document.querySelectorAll('.tasks .row')[i].addEventListener('contextmenu', (event) => event.preventDefault())
    }
}

console.log(taskDeleted)

// for (i of taskDeleted){
// i.
// }

// Click on Delete Icon //
const iconDelete = document.querySelectorAll('.tasks .row i.delete')

for(let i = 0; i < iconDelete.length; i++){

iconDelete[i].addEventListener('click', function(){
    document.querySelectorAll('.tasks .row')[i].classList.add('deleted')
    document.querySelectorAll('.tasks .row')[i].addEventListener('contextmenu', (event) => event.preventDefault())
    taskDeleted.push(i)
    localStorage.setItem('list', taskDeleted)
})
}

// Last Post Widget

var likesIcon = document.querySelector('.post .footer .likes')
likesIcon.addEventListener('click', ()=>{


    if(document.querySelector('.post .footer .likes i').classList.contains('fa-regular')){
        document.querySelector('.post .footer .likes i').classList.remove('fa-regular')
        document.querySelector('.post .footer .likes i').classList.add('fa-solid','red')
    }else{
        document.querySelector('.post .footer .likes i').classList.remove('fa-solid','red')
        document.querySelector('.post .footer .likes i').classList.add('fa-regular')
    }
    
})

// Setting Page /  Change Email

