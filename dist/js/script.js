let input = document.querySelector('.input'),
    div = document.querySelector('.supplement');

let request = new XMLHttpRequest();
request.open('GET', 'countries.json');
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.send();
request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status == 200){
        let data = JSON.parse(request.response).countries;

        input.addEventListener('input', function() {
            div.innerHTML = "";
            div.style.display = 'none';
            data.forEach( elem => {
                if (elem.slice(0, this.value.length).toLowerCase() == this.value.toLowerCase() && this.value != ''){
                    console.log(elem);
                    let temp = document.createElement('p');
                    temp.innerHTML = elem;
                    div.append(temp);
                    div.style.display = 'block';
                }
            });
        });

        div.addEventListener('click', ev => {
            input.value = ev.target.textContent;
            div.innerHTML = "";
            div.style.display = 'none';
        });
    }
});









