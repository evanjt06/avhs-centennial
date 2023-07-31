/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function load(category) {
  fetch('https://raw.githubusercontent.com/evanjt06/avhs-centennial/master/images.json')
      .then(response => response.json())
      .then(data => {
          let prevYear = true;
          let count = 0;
          for (let year in data) {
              if (data.hasOwnProperty(year)) {
                  if(data[year][category].length == 0){
                    continue;
                  }
                  console.log(category);
                  let currHtml = ``;
                  if (prevYear) {
                      currHtml = `
        <section class="py-5 bg-purple">
          <div class="container my-5">
              <div class="row justify-content-center">
                  <div class="col-lg-6">
                      <div id="carouselExampleIndicators${count}" class="carousel slide">
                        <div style="transform:translate(0, 50px);" class="carousel-indicators">`;
                  } else {
                      currHtml = `
        <section class="py-5 bg-yellow">
          <div class="container my-5">
              <div class="row justify-content-center">
                  <div class="col-lg-6">
                      <div id="carouselExampleIndicators${count}" class="carousel slide">
                        <div style="transform:translate(0, 50px);" class="carousel-indicators">`;
                  }

                  currHtml += `<button type="button" data-bs-target="#carouselExampleIndicators${count}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
                  for (let x = 1; x < data[year][category].length; x++) { // iterating through each image 
                     
                      currHtml += `<button type="button" data-bs-target="#carouselExampleIndicators${count}" data-bs-slide-to="${x}" aria-label="Slide ${x + 1}"></button>`;
                  }
                  console.log(year,category,data[year][category])
                  if(category=="Life"){
                    currHtml += `</div>
                 <center><h1>${year}</h1></center>
                  <br /><br /><br />
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="images/${year}/Student ${category}/${data[year][category][0]}"  class="d-block w-100" alt="...">
                          </div>`
                  } else {
                    currHtml += `</div>
                 <center><h1>${year}</h1></center>
                  <br /><br /><br />
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="images/${year}/${category}/${data[year][category][0]}"  class="d-block w-100" alt="...">
                          </div>`
                  }
        
                  for (let x = 1; x < data[year][category].length; x++) { // iterating through each image 
                      if(category=="Life"){
                        currHtml += `<div class="carousel-item">
                            <img src="images/${year}/Student ${category}/${data[year][category][x]}"  class="d-block w-100" alt="...">
                          </div>`;
                      } else {
                        currHtml += `<div class="carousel-item">
                            <img src="images/${year}/${category}/${data[year][category][x]}"  class="d-block w-100" alt="...">
                          </div>`;
                      }
                      
                  }
                  currHtml += `</div>
                  <button style="transform:translate(-100px);" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${count}" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button style="transform:translate(100px);" class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${count}" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
                      </div>
                  </div>
              </div>
          </div>
      </section>`;
                  
                  //add section to html
                  document.body.innerHTML += currHtml;
                  prevYear = !prevYear;
                  count++;
              }

          }

          document.body.innerHTML += `<footer class="py-5 bg-dark">
          <div class="container"><p class="m-0 text-center text-white">Copyright &copy AV Web Development 2023</p></div>
      </footer>`
        
      })
      .catch(error => {
          console.error('Error fetching the JSON file', error);
      });
}
