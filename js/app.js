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
        displaySearchResult(data.status);

    }
}

const displaySearchResult = data => {
    console.log(data)
}