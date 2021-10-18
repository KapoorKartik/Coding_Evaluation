let parent = document.getElementById('headline')
let articles = JSON.parse(localStorage.getItem("search_news"))
console.log('test',articles);
function showSearch(){
parent.innerHTML = null;
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
}
showSearch()
function newpage(news){
localStorage.setItem('clicked_news' , JSON.stringify(news))
console.log(news)
window.location.href = '/Coding_Evaluation/news.html'
}