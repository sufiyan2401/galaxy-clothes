const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if(bar){
    bar.addEventListener('click' , () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click' , () => {
        nav.classList.remove('active');
    })
}

// New work form validation//

// const user = document.getElementById('userinp')
// const name = document.getElementById('nameinp')
// const password = document.getElementById('passinp')
// const email = document.getElementById('emailinp')

// function submit(){
        
//     if (user > 5.){
//         alert("usernmar only cmontain" )
//     }
//     else if (user = ''){
//         alert("plz fil the following field")
//     }
// }
