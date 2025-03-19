// kXzLVGfglGtsoOg6RYEG-iMYnBfnVFd3mDq1OkXBeZg

const imageContainer = document.getElementById("imagecontainer")
const myLoader = document.getElementById("loader")

function controlLoader()
{
    myLoader.hidden = false
}

controlLoader()

async function getImages()
{
    // logic to connect to unsplash, get the images
    const response = await fetch("https://api.unsplash.com/photos/?client_id=kXzLVGfglGtsoOg6RYEG-iMYnBfnVFd3mDq1OkXBeZg")
    const imagesData = await response.json()
    imagesData.map(function(i){
        let imageUrl = i.urls.full
        const myImageElement = document.createElement("img")
        // console.log(myImageElement)
        myImageElement.setAttribute("src", imageUrl)
        // console.log(myImageElement)
        imageContainer.append(myImageElement)
    })

}

getImages()

setTimeout(function()
{
    getImages()
    myLoader.hidden = true
}, 1000)


window.addEventListener("scroll", function()
{
    let myClientHeight = document.documentElement.clientHeight
    let myScrollHeight = document.documentElement.scrollHeight
    let myScrollTop = document.documentElement.scrollTop

    if(myClientHeight + myScrollTop >= myScrollHeight)
    {
        getImages()
    }

})