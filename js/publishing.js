// API
const accessKey = "X3QWVMt9MkRwG6S2p365l5ehIthsaoVZ6cQJvXVPi5A"

const form = document.getElementById('form')
const searchInput = document.getElementById('search-input')
const photos = document.getElementById('search-results')
const more = document.getElementById('Show-more')


let keyWord = ""
let page = 1;
const query = 'office'
keyWord = searchInput.value
async function fetchImages(query){

    const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}&per_page=12`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new error(`http response: ${response.status}`)
        }
        const data = await response.json()
        const results = data.results
        console.log(results)
        if(!Array.isArray(results)){
            throw new error('not expected')
        }
        photos.innerHTML = '';
        results.map(photo => {

            const image = document.createElement("img")

            
            image.src = photo.urls.small
            photos.appendChild(image)
            // console.log(photo.id)

            const ddd = image.src
            console.log(ddd)
            console.log('ddd')
            image.addEventListener('click',() => {
                const ddd = image.src
                console.log(ddd + 'ffffff')
                function getImageLink() {
                    const photoLink = locals()
                    const imageLinkData = JSON.parse(localStorage.getItem('links')) || []
                    return imageLinkData
                    // console.log(imageLinkData)
                }

                getImageLink()
                function locals() {
                    const local = localStorage.setItem('links', JSON.stringify(ddd));
                    // console.log(local)
                    return local
                }
                
                
            })
            // console.log(photo)

            

        });

        // page++
        // if(page > 1){
        //     more.style.display = 'block'
        // }
        searchInput.value = ""

    } catch (error) {
        console.log(error)
    }

}


form.addEventListener('submit', (event) => {
    event.preventDefault()
    page = 1;

    fetchImages(searchInput.value)

})



// end of the API 



const articles = document.getElementById('articles')
const tit = document.getElementById('title')
const pdescr = document.querySelector('#desc')
const publishNow = document.getElementById('Publish-now')
document.addEventListener('DOMContentLoaded', function () {
    displayPost()
})


function displayPost() {
    const publishPosts = getlocalData()
    console.log(publishPosts)

}

publishNow.addEventListener('click',() =>{
    window.location.href = '../html/first.html'
})

function getlocalData() {
    const localDate = JSON.parse(localStorage.getItem('info')) || []
    return localDate

}

