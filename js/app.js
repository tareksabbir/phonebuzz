// searching phones or others
const searchPhone = async () => {
    const searchFieldInput = document.getElementById('srearch-field');
    const searchField = searchFieldInput.value;
    console.log(searchField);
    searchFieldInput.value = '';
    if (searchField == '') {
        // error sms

    } else {
        // load data 
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`
        const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.data);

    }
}

//display data from api
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    data.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick ="loadMealDetail('${phone.slug}')" class="card h-100 p-3">
              <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="">
              <div class="card-body text-center">
                   <h5 class="card-title">${phone.phone_name}</h5>
                   <p class="card-text">${phone.brand}</p>
             </div>
             <button type="button" class="btn btn-primary w-40 mx-auto" style="border-radius: 1rem; background-color: rgb(56, 162, 247); padding: 6px 20px; border:none;">View Details</button>

        </div>`;
        searchResult.appendChild(div);
    });
}




