const buttonRequestNode = document.querySelector('button');
const resultNode = document.querySelector('.res');
const buttonClearNode = document.querySelector('.btn-clear')

function checkValueNumber() {
    const valueNumber = document.querySelector('.inp1').value;
    if ((valueNumber < 1 || valueNumber > 10 || isNaN(valueNumber))) {
        resultNode.textContent = 'Номер страницы вне диапазона от 1 до 10'
    }
    else {
        return valueNumber
    }
}

function checkLimitNumber() {
    const valueLimit = document.querySelector('.inp2').value;
    if ((valueLimit < 1 || valueLimit > 10 || isNaN(valueLimit))) {
        resultNode.textContent = 'Лимит вне диапазона от 1 до 10'
    }
    else {
        return valueLimit
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
        localStorage.setItem('myStorage', cards)
        resultNode.innerHTML = cards
    })
    .catch(() => {console.log('error')})
}

buttonRequestNode.addEventListener('click', () => {
    if (checkValueNumber() && checkLimitNumber()){
        fetchRequest(`https://picsum.photos/v2/list?page=${checkValueNumber()}&limit=${checkLimitNumber()}`)
    }
})

buttonClearNode.addEventListener('click', () => {
    localStorage.clear()
})

resultNode.innerHTML = localStorage.getItem('myStorage')