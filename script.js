const URL="https://nekos.best/api/v2/neko";
let img=document.querySelector("#happy");
let btn=document.querySelector("#btn");

const getfacts=async()=>
{
  console.log("Getting Data....")
  let response=await fetch(URL);
  let data= await response.json();
  const firstresult=data.results[0].url;
  img.src=firstresult;
  img.style.display="block";
}
getfacts();
btn.addEventListener("click",getfacts);