let URL = "https://potterapi-fedeperin.vercel.app/en/books";

const facts = document.querySelector("#fact");
const btn = document.getElementById("btn")

btn.addEventListener("click" , getadata)
async function getadata() {
  console.log("Getting data ....");
    let response = await fetch(URL);
    console.log(response);
    
  let data = await response.json();
  console.log(data);
  facts.innerText = data[0].title
}
