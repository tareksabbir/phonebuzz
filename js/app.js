// searching phones or others
const searchPhone = async () => {
    const searchFieldInput = document.getElementById('srearch-field');
    const searchField = searchFieldInput.value;
    //console.log(searchField);
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
        //console.log(phone);
        //stringify = JSON.stringify(phone.slug);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card  h-100 p-5">
              <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="">
              <div class="card-body text-center">
                   <h5 class="card-title">${phone.phone_name}</h5>
                   <p class="card-text">${phone.brand}</p>
             </div>
             <button onclick ="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-primary w-40 mx-auto" style="border-radius: 1rem; background-color: rgb(56, 162, 247); padding: 6px 20px; border:none;">View Details</button>

        </div>`;
        searchResult.appendChild(div);
    });
}

const loadPhoneDetails = async id => {
    //console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = data => {
    console.log(data);
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mb-3 mt-5 mx-auto" style="max-width:75%;">
            <div class="row g-0">
                <div class="col-md-5 p-5">
                <img src="${data.image}" class="card-img w-75" style="align-items: center;" alt="">
                </div>
                <div class="col-md-7">
                    <div class="card-body p-5">
                        <h5 class="card-title">${data.name}</h5>
                        <h6 class="card-text">${data.brand}</h6>
                        <hr>
                        <h5 class="card-title">Specifications</h5>
                        
                        <p class="card-text">Storage: <span>${data.mainFeatures.storage}</p></span>
                        <p class="card-text">DisplaySize: <span>${data.mainFeatures.displaySize}</span></p>
                        <p class="card-text">ChipSet <span>${data.mainFeatures.chipSet}</span></p>
                        <p class="card-text">Memory: <span>${data.mainFeatures.memory}</span></p>
                        <p class="card-text">Storage: <span>${data.mainFeatures.storage}</span></p>
                    </div>
                </div>
            </div>
        </div>`;
    phoneDetails.appendChild(div);


}






