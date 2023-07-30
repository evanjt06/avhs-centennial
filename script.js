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
            for (let year in data) {
                if (data.hasOwnProperty(year)) {
                    console.log(category);
                    let currHtml = ``;
                    if (prevYear) {
                        currHtml = `
          <section class="py-5 bg-purple">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div id="carouselExampleIndicators" class="carousel slide">
                          <div class="carousel-indicators">`;
                    } else {
                        currHtml = `
          <section class="py-5 bg-yellow">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div id="carouselExampleIndicators" class="carousel slide">
                          <div class="carousel-indicators">`;
                    }

                    currHtml += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
                    for (let x = 1; x < data[year][category].length; x++) { // iterating through each image 
                       
                        currHtml += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${x}" aria-label="Slide ${x + 1}"></button>`;
                    }
                    console.log(year,category,data[year][category])
                    currHtml += `</div>
                    <h1>${year}</h1>
                    <br /><br /><br />
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img src="./images/${year}/${category}/${data[year][category][0]}"  class="d-block w-100" alt="...">
                            </div>`
                    for (let x = 1; x < data[year][category].length; x++) { // iterating through each image 
                        currHtml += `<div class="carousel-item">
                              <img src="./images/${year}/${category}/${data[year][category][x]}"  class="d-block w-100" alt="...">
                            </div>`;
                    }
                    currHtml += `</div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
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
                }

            }
        })
        .catch(error => {
            console.error('Error fetching the JSON file', error);
        });
}
