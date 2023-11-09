// Progression 1: create a function and fetch the api using axios
let arr=[];
function detail(){
  const body=document.getElementById('body')

  fetch('https://gnews.io/api/v4/search?q=example&apikey=04ad987fa662874d362d92df970efaa8')
  .then((data)=>data.json()).then((peradata)=>{
    console.log(peradata)
    peradata.articles.forEach((article)=>{

      const news=document.createElement('div')
      news.setAttribute('id','container')
      
      const title=document.createElement('h1')
      title.setAttribute('id','title')
      title.innerText=article.title
      news.append=title
      
      const img=document.createElement('img')
      img.setAttribute('id','image')
      img.src=article.url
      news.append=img

      const content=document.createElement('p')
      content.setAttribute('id','content')
      content.innerText=article.content
      news.append=content
      arr.push(news)

    })
    arr.forEach((deta)=>{
      body.append=deta
    })
    console.log(body)
    

  })
  .catch((error)=>{
    console.log('Promise reject.');
    console.log(error.message);
  });
}detail()