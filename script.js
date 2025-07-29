 let url = "https://catfact.ninja/fact";
    let factDisplay = document.querySelector('#fact');
    let btn = document.querySelector('#btn');

    btn.addEventListener('click', () => {
      async function getData() {
        try {
          let response = await axios.get(url);
          factDisplay.innerHTML = response.data.fact;
        } catch (error) {
          factDisplay.innerHTML = "❌ Error: Could not load fact. Please check the API or your internet.";
        }
      }
      getData();
    });