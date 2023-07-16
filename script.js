const fullPage = document.createElement("div");
fullPage.setAttribute("id", "fullpage"); // fullpage, all other elements will fall under this

document.getElementById("div_id").appendChild(fullPage); // set an empty div tag in your html with matching id  

fetch('https://raw.githubusercontent.com/evanjt06/avhs-centennial/master/images.json')
.then(response => response.json())
.then(data => {
  for (let year in data) { 
    if (data.hasOwnProperty(year)) {

      for (let category in data[year]) { 
        console.log(category)

        for (let x=0; x<data[year][category].length; x++) { // iterating through each image of each category

          const section = document.createElement("div") // example of how you're gonna implement your html
          section.setAttribute("id", String(year)); // id
          section.classList.add("section"); // class
          fullPage.appendChild(section); // put tags within other tags 
          
          console.log(document) // check if HTML is formatting properly 
          console.log(data[year][category][x])
        }
      }
    }
  }
})
.catch(error => {
  console.error('Error fetching the JSON file', error);
});