let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let factDisplay = document.querySelector("#fact");
let btn = document.querySelector("#btn");
let dogImages = document.querySelector("#dog-image");
let dogBtn = document.querySelector("#dog-btn");

btn.addEventListener("click", () => {
  async function getData() {
    try {
      let response = await axios.get(url);
      factDisplay.innerHTML = response.data.fact;
    } catch (error) {
      factDisplay.innerHTML =
        "Could not load fact. Please check the API or your internet.";
    }
  }
  getData();
});



dogBtn.addEventListener("click", async function getImage() {
  try {
    let dogImage = document.querySelector('#dogImg');
    let response = await axios.get(url2);
    let link = response.data.message;
    dogImage.setAttribute("src", link);

   
    dogImage.style.width = "300px";
    dogImage.style.height = "300px";
    dogImage.style.objectFit = "cover";      
    dogImage.style.borderRadius = "15px";   
    dogImage.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)"; 
    dogImage.style.border = "4px solid #fff"; 
    dogImage.style.display = "block";         
    dogImage.style.margin = "20px auto";     

    console.log(link);
  } catch (error) {
    factDisplay.innerHTML = "Image Not Found";
  }
});

