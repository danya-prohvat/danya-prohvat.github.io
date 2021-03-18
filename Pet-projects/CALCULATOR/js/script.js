let input = document.querySelector(".calculation"),
    history = document.querySelector(".history"),
    tools = document.querySelector(".calcurator__tools"),
    flag = false,
    arr = ['','',''],
    result = 0;

tools.addEventListener('click', event => {
    if (event.target.textContent < 10) {
        (flag == false)  ? arr[0] += event.target.textContent : arr[1] += event.target.textContent;
        saveResult();
    }
    if (event.target.textContent == '+/-'){
        if (flag == false && arr[0] != ''){
            if (arr[0] > 0) {
                arr[0] -= arr[0] * 2;
                saveResult();
            } else {
                arr[0] = Math.abs(arr[0]);
                saveResult();
            }
        }
        else if (arr[1] != '')  {
            if (arr[1] > 0) {
                arr[1] -= arr[1] * 2;
                saveResult();
            }
            else {
                arr[1] = Math.abs(arr[1]);
                saveResult();
            }
        }
    }
    if (event.target.textContent == 'C'){
        arr = ['','',''];
        flag = false;
        saveResult();
    }
    if (event.target.getAttribute('data-value') == 'back'){
        arr.forEach(elem => {
            elem = String(elem);
        })
        if (arr[0] != '' && arr[1] != '' && arr[2] != '') arr[1] = arr[1].slice(0, -1);
        else if (arr[0] != '' && arr[2] != '') arr[2] = arr[2].slice(0, -1);
        else if (arr[0] != '') arr[0] = arr[0].slice(0, -1);

        if (arr[1] == '' && arr[2] == '') flag = false;
        saveResult();
    }
    if (event.target.textContent == '.'){
        if (arr[0] != '' && arr[1] != '' && arr[2] != '') {
            let check = () => {
                for (let i = 0; i < arr[1].length; i++){
                    if (arr[1][i] == '.') return false;
                    if (i+1 == arr[1].length) return true;
                }
            }
            if (check()) arr[1] += '.';
        }
        else if (arr[0] != '' && arr[2] == '') {
            let check = () => {
                for (let i = 0; i < arr[0].length; i++){
                    if (arr[0][i] == '.') return false;
                    if (i+1 == arr[0].length) return true;
                }
            }
            if (check()) arr[0] += '.';
        }
        saveResult();
    }
    if (event.target.getAttribute('data-value') == '1/x'){
        if (flag == false && arr[0] != ''){
            saveHistory(arr[0], '1/x');
            arr[0] = Math.round( (1 / arr[0]) * 100) / 100;
            saveResult();
        }
        else if (arr[1] != '')  {
            saveHistory(arr[1], '1/x');
            arr[1] = Math.round( (1 / arr[1]) * 100) / 100;
            saveResult();
        }

    }
    if (event.target.getAttribute('data-value') == 'x2'){
        if (flag == false && arr[0] != ''){
            saveHistory(arr[0], 'x2');
            arr[0] = Math.round( (arr[0] * arr[0]) * 100) / 100;
            saveResult();
        }
        else if (arr[1] != '')  {
            saveHistory(arr[1], 'x2');
            arr[1] = Math.round( (arr[1] * arr[1]) * 100) / 100;
            saveResult();
        }
    }
    if (event.target.getAttribute('data-value') == '2_/x'){
        if (flag == false && arr[0] != ''){
            saveHistory(arr[0], '2_/x');
            arr[0] = Math.round( Math.sqrt(arr[0])  * 100) / 100;
            saveResult();
        }
        else if (arr[1] != '')  {
            saveHistory(arr[1], '2_/x');
            arr[1] = Math.round( Math.sqrt(arr[1])  * 100) / 100;
            saveResult();
        }
    }

        switch (event.target.textContent) {
            case '+':
                if (flag == false && arr[0] != '') {
                    arr[2] += event.target.textContent;
                    flag = true;
                    saveResult();
                }break;
            case '-':
                if (flag == false && arr[0] != '') {
                    arr[2] += event.target.textContent;
                    flag = true;
                    saveResult();
                }break;
            case '*':
                if (flag == false && arr[0] != '') {
                    arr[2] += event.target.textContent;
                    flag = true;
                    saveResult();
                }break;
            case '/':
                if (flag == false && arr[0] != '') {
                    arr[2] += event.target.textContent;
                    flag = true;
                    saveResult();
                }break;
            case '=':
                if (arr[0] != '' && arr[1] != '' && arr[2] != ''){
                    switch (arr[2]) {
                        case '+': saveHistory(); input.innerHTML = result = Math.round((+arr[0] + +arr[1]) * 100) / 100; break;
                        case '-': saveHistory(); input.innerHTML = result = Math.round((+arr[0] - +arr[1]) * 100) / 100; break;
                        case '*': saveHistory(); input.innerHTML = result = Math.round((+arr[0] * +arr[1]) * 100) / 100; break;
                        case '/': saveHistory(); input.innerHTML = result = Math.round((+arr[0] / +arr[1]) * 100) / 100; break;
                        default:;
                    }
                    arr = ['','',''];
                    arr[0] = String(result);
                    flag = false;
                }
                break;
            default:;
    }
    console.log(arr);
});

function saveResult(){
    input.innerHTML = arr[0] + arr[2] + arr[1];
}
function saveHistory(num, parametr){
    if (parametr)
        switch (parametr) {
        case '1/x': history.innerHTML = `1/ ${num}`; break;
        case 'x2': history.innerHTML = `${num} * ${num}`; break;
        case '2_/x': history.innerHTML = `√${num}`; break;
        default:;
        }
    else {
        history.innerHTML = input.textContent;
    }
}



