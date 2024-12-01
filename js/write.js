const story = document.getElementById('story')
const form = document.querySelector('form')
const ptitle = document.getElementById('title')
const pdesc = document.getElementById('desc')
const pxogo = document.getElementById('text-area') 
const publish = document.getElementById('publish')
const contentImage = document.getElementById('content-image')
const acountUser = document.getElementById('online-user')
const user = document.getElementById('user-name')


function userData() {
    const userData = JSON.parse(localStorage.getItem('onlineUser'))
    const userName = userData.userName


    user.textContent = userName
    // user.classList.add('user-information')
    console.log(userName)
    // toggleMenu()
}
let subMenu = document.getElementById('subMenu')
function toggleMenu() {
    subMenu.classList.toggle("open-menu");

}
acountUser.addEventListener('click', function () {
    userData()
    toggleMenu()

})

function write() {
    const userData = JSON.parse(localStorage.getItem('onlineUser'))
    const userName = userData.userName
    let info = {
        id: Date.now(), 
        title: ptitle.value,
        desc: pdesc.value,
        xog: pxogo.value,
        outhor: userName
        // photo: contentImage.getAttribute(src)
    }
    console.log(info.outhor)

    
    const article = getlocalData()
    article.push(info)
    localStorage.setItem('info', JSON.stringify(article))

    // console.log(article)

}



form.addEventListener('submit', function(event){
    event.preventDefault();

    // write()


    // addLocal()
})

publish.addEventListener('click', function () {
    write()
    getlocalData()
    // addToLocal()
    window.location.href = '../html/publishing.html'
})


// localStorage
function getlocalData() {
    const localDate = JSON.parse(localStorage.getItem('info')) || []
    return localDate
    
}



// Adding rich text editor related js
// let toolbaroptions = [
//     ["bold", "italic", "underline", "strike"],
//     [ {header:[1,2,3,4,5,6,false]}],
//     [{list:"ordered",list:"bullet"}],
//     [{script:"sub"},{script:"super"}],
//     [{indent:"+1"},{indent:"-1"}],
//     [{size:["small","large","huge", false]}],
//     [{align:[]}],
//     ["image","link","video","formula"],
//     [{color:[]},{background:[]}],
//     [{font:[]}],
//     ["code-block", "blockquote"]

// ]

// let quill = new Quill('#editor', {
//     modules: {
//         toolbar: toolbaroptions,
//     },
//     theme: 'snow'
// });




// :: dhbic kusoo bandhig toolpar ka oo qurxi i.a