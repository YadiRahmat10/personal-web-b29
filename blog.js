let blogs = []

function addBlog(event){
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value 
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')

    image = URL.createObjectURL(image.files[0]);

    let blog = {
        title: title,
        content: content,
        image: image,
        author: 'Yadi Rahmat',
        postAt: new Date
    }


    blogs.push(blog)

    renderBlog()

}

function renderBlog(){
    let contentContainer = document.getElementById('contents');
    contentContainer.innerHTML = ''
    for( let i = 0; i < blogs.length; i++){
        contentContainer.innerHTML +=  `<div class= "blog-list-item">
                                        <div class="blog-image">
                                        <img src="${blogs[i].image}" alt="" />
                                        </div>
                                        <div class="blog-content">
                                        <div class="btn-group">
                                        <button class="btn-edit">Edit post</button>
                                        <button class="btn-post">post Blog</button>
                                        </div>
                                        <h1>
                                        <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
                                        </h1>
                                        <div class="detail-blog-content">
                                        ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}</div>
                                        <p>${blogs[i].content}</p>
                                        <div style="text-align: right; font-size: 15px; color: grey;">
                                        ${getDistanceTime(blogs[i].postAt)}
                                        </div>
                                        </div>
                                        </div>`
    }
}

let month = [ 
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October',
    'November',
    'Desember' 
]

function getFullTime(time){

    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
    return fullTime
}

function getDistanceTime(time){
    let timePost = time
    let timeNow = new Date();

    let distance = timeNow - timePost

    let milliseconds = 1000
    let secondsInHours = 3600
    let hoursInDay = 23 

    let distanceDay = Math.floor(distance / (milliseconds * secondsInHours * hoursInDay))

    if(distanceDay >= 1){
        return `${distanceDay} day ago`
    } else {
        //
        let distanceHours = Math.floor(distance / (1000 * 60 * 60))
        if(distanceHours >= 1){
            return `${distanceHours} hours ago`
        } else {
            //
            let distanceMinutes = Math.floor(distance / (1000 * 60))
            if(distanceMinutes >= 1){
            return `${distanceMinutes} minutes ago`
        }else {
            let distanceSeconds = Math.floor(distance / 1000)
            console.log(distanceSeconds)
            return`${distanceSeconds} seconds ago`
        
             }
        }
    }
}
setInterval(()=>{

    renderBlog()

},1000)
