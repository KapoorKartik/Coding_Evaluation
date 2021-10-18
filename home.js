   /*key :- 64e0aace335340ed8d357ca93e3f69cf
    headlines : https://newsapi.org/v2/top-headlines?country=in&apiKey=64e0aace335340ed8d357ca93e3f69cf
    headlines bbc : https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=64e0aace335340ed8d357ca93e3f69cf
    search : https://newsapi.org/v2/everything?q=kashmir&apiKey=64e0aace335340ed8d357ca93e3f69cf
*/
// Show random headlines
let parent = document.getElementById('headline')
function ShowHeadlines(){
    fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=64e0aace335340ed8d357ca93e3f69cf`)

    .then((res) =>{
        return res.json()
    })
    .then(({articles})=>{
        console.log(articles)
        articles.forEach((news) => {
            let div = document.createElement('div')
            div.onclick = () => {
                newpage(news)
            }
            let title =  document.createElement('div')
            title.innerHTML = news.title
            let img =  document.createElement('img')
            img.setAttribute('class','headline_img')
            img.src = news.urlToImage
         /* let dis =  document.createElement('div')
            dis.innerHTML = news.description */
            div.append(img,title)
            parent.append(div)
        })
    })
}
ShowHeadlines()
function newpage(news){
    localStorage.setItem('clicked_news' , JSON.stringify(news))
    console.log(news)
    window.location.href = '/Coding_Evaluation/news.html'
}




// search news
function searchNews(){
let query = document.getElementById('search').value
fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=64e0aace335340ed8d357ca93e3f69cf`)


.then((res) =>{
        return res.json()
    })
    .then(({articles} ) => {
        console.log('search',articles);
        localStorage.setItem('search_news' , JSON.stringify(articles))
    })

    setTimeout(() =>{
        window.location.href = '/Coding_Evaluation/search.html'
    },2000) 
}