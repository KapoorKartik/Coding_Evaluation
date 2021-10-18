let parent = document.getElementById('headline')
let news = JSON.parse(localStorage.getItem('clicked_news'))
function showNews(){
    // let div = document.createElement('div')
    let inner_div = document.createElement('div')       
            let title =  document.createElement('div')
            title.innerHTML ="<strong>Title :</strong>" + news.title
            let img =  document.createElement('img')
            img.setAttribute('class','headline_img')
            img.src = news.urlToImage
          let dis =  document.createElement('div')
            dis.innerHTML ="<strong>Details :</strong>" +  news.description 

            inner_div.append(title,dis)
            parent.append(img,inner_div)
}
showNews()