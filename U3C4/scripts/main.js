async function apiCall(url) {


    //add api call logic here
    try{
        let res=await fetch(url)
        let data = await res.json()
        return data

    }catch(err){
        console.log("Error",err);
    }


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach((item)=>{
       var div=document.createElement("div")
       var h3=document.createElement("h3")
       h3.innerText=item.title
       var img=document.createElement("img")
       img.src=item.urlToImage
    
       var p=document.createElement("p")
       p.innerText=item.description
       div.append(h3,img,p)
       main.append(div)
       div.addEventListener("click",()=>{
          
           localStorage.setItem("article",JSON.stringify(item))
           window.location.href="news.html"
       })

    })

}

export { apiCall, appendArticles }