'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderData = function (data, className = '') {
  const html = `
	<article class="country ${className}">
	<img class="country__img" src="${data.flags.png}" />
	<div class="country__data">
		<h3 class="country__name">${data?.name?.common}</h3>
		<h4 class="country__region">${data?.region}</h4>
		<p class="country__row"><span>👫</span>${(
      +data?.population / 100000000
    ).toFixed(1)}B people</p>
		<p class="country__row"><span>🗣️</span>${Object.keys(data?.languages)[0]}</p>
		<p class="country__row"><span>💰</span>${data?.currencies?.INR?.name}</p>
	</div>
</article>
	`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

function getCountryAndNeighbour(country) {
  //AJAX Call Country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country 1
    renderData(data);

    //Get Neighbour country (2)
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    //AJAX Call Country 2
    const request2 = new XMLHttpRequest();
    // https://restcountries.com/v3.1/alpha?codes={code},{code},{code}

    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha?codes=${neighbour}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderData(data2, 'neighbour');
    });
  });
}
getCountryAndNeighbour('india');
// getCountryAndNeighbour('usa');
// getCountry('germany');
