const buttonRequestNode = document.querySelector('button');
const resultNode = document.querySelector('.res');

function checkValueNumber() {
    const valueNumber = document.querySelector('.inp1').value;
    if ((valueNumber >= 1) && (valueNumber <= 10)) {
        return valueNumber;
    }
    else {
        resultNode.textContent = 'Номер страницы вне диапазона от 1 до 10'
    }
}

function checkLimitNumber() {
    const valueLimit = document.querySelector('.inp2').value;
    if ((valueLimit >= 1) && (valueLimit <= 10)) {
        return valueLimit
    }
    else {
        resultNode.textContent = 'Лимит вне диапазона от 1 до 10'
    }
}

function fetchRequest(url) {
fetch(url)
    .then((response) => {
        console.log('response', response)
        return response.json()
    })
    .then(data => {
        console.log(data)
        let cards = '';

        data.forEach((item) => {
            const cardBlock = `
      <div class="card">
        <img src="${item.download_url}" class="card-image" alt=""/>
      </div>
    `;
            cards = cards + cardBlock;
        });

        resultNode.innerHTML = cards;
    })
    .catch(() => {console.log('error')})
}


buttonRequestNode.addEventListener('click', () => {
    if (checkValueNumber() && checkLimitNumber()) {
        fetchRequest(`https://picsum.photos/v2/list?page=${checkValueNumber()}&limit=${checkLimitNumber()}`);
    }
    else {
        resultNode.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'
    }
})
