'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//AJAX Call
function getCountry(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
	<article class="country">
	<img class="country__img" src="${data.flags.png}" />
	<div class="country__data">
		<h3 class="country__name">${data?.name?.common}</h3>
		<h4 class="country__region">${data?.region}</h4>
		<p class="country__row"><span>👫</span> ${(
      +data?.population / 100000000
    ).toFixed(1)}B people</p>
		<p class="country__row"><span>🗣️</span>${Object.keys(data?.languages)[0]}</p>
		<p class="country__row"><span>💰</span>${data?.currencies?.INR?.name}</p>
	</div>
</article>
	`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
}
getCountry('india');
getCountry('usa');
getCountry('germany');

/* <p class="country__row"><span>🗣️</span>${data?.languages.hin}</p> */
