const resNode = document.querySelector('.result');
const bnNode = document.querySelector('button');


function checkValue() {
    const width = document.querySelector('.input-1').value;
    const height = document.querySelector('.input-2').value;
    if((width >= 100 && width <= 300) && (height >= 100 && height <= 300)) {
        fetch('https://picsum.photos/'+width+'/'+height)
            .then((response) => {
                console.log('response', response)
                return response.blob()
            })
            .then((data) => {
                const dataURL = URL.createObjectURL(data)
                resNode.innerHTML = `<img alt="" src="${dataURL}">`
            })
            .catch(() => {console.log('error')})
    }
    else {
        resNode.textContent = 'Одно из чисел вне диапазона от 100 до 300'
    }
}


bnNode.addEventListener('click', checkValue);
