console.log('welcome to bill matcher.........');
let addednum = 0;
let arr = [];

const container = document.getElementsByClassName("contain");
// console.log( container[0].children);

function mult(a, b) {
    return a * b;
}

function getElementfromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;

}

function getElementfromStr(string) {
    let div = document.createElement('tr');
    div.innerHTML = string;
    return div.firstElementChild;

}

function calculate(quantity, rate, span, i) {
    console.log(quantity.value);
    console.log(rate.value);
    // console.log(span);
    let prod = mult(quantity.value, rate.value);
    arr.push(prod);
    span.innerHTML = prod;

    let tbody = document.getElementById('tbody');
    let tbstr = `<tr>
    <th scope="row">${i}</th>
    <td>${quantity.value}</td>
    <td>${rate.value}</td>
    <td>${prod}</td>
</tr>`;
    // let tbval = getElementfromString(tbstr);
    tbody.innerHTML += tbstr;
    // tbody.appendChild(tbval);
}


let btn1 = document.getElementById('btn1');
console.log(btn1.parentElement.parentElement);

btn1.addEventListener('click', (e) => {
    e.preventDefault();
    // alert("firstly you need to click on Add more")
    let quantity1 = document.getElementById('quantity1');
    let rate1 = document.getElementById('rate1');
    let span1 = document.getElementById('1span');
    span1.innerHTML = mult(quantity1.value, rate1.value);
    let tbody = document.getElementById('tbody');
    let tbstr = `<tr>
    <th scope="row">1</th>
    <td>${quantity1.value}</td>
    <td>${rate1.value}</td>
    <td>${mult(quantity1.value, rate1.value)}</td>
</tr>`;
    // let tbval = getElementfromString(tbstr);
    tbody.innerHTML += tbstr;
    arr.push(mult(quantity1.value, rate1.value));
})


let class1 = document.getElementById('class1');
// console.log(class1);
let plus = document.getElementById('plus');
// console.log(plus);
plus.addEventListener('click', (e) => {
    e.preventDefault();
    let k = prompt("enter the no.of tables you want");
    // const k1 = k;
    console.log((k));
    for (let i = 1; i < k; i++) {
        let params = document.getElementById('params');
        let str = `
    <div class="form-row align-items-center " >
    <div class="col-sm-3 my-1">
        
        <input type="number" class="form-control" id="quantity${addednum+2}" placeholder="Enter the quantity${addednum+2}">
    </div>
    <div class="col-sm-3 my-1">
        
        <input type="number" class="form-control" id="rate${addednum+2}" placeholder="Enter the rate${addednum+2}">
    </div>
    <div class="col-auto my-1">
        <button id="btn${addednum + 2}" class="btn btn-primary cal">cal</button>
    </div>
    <h2> <span id="${addednum + 2}span" class="badge badge-secondary">Value</span></h2>
    
    <div class="col-auto my-1 ">
                    <button  class="btn btn-outline-danger remove">Remove row</button>
                </div>
</div>
    `
        addednum++;
        let paramval = getElementfromString(str);
        params.appendChild(paramval);
        // console.log(paramval);
        let remove = document.getElementsByClassName('remove')
        for (const item of remove) {
            item.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.remove();
            })
        }

    }

    let submit = document.getElementById('submit');
    let btnstr = `<button id="end" class="btn btn-primary col-md-8">Submit</button>`;
    let btnval = getElementfromString(btnstr);

    submit.appendChild(btnval);
    // for (let i = 0; i < container.length; i++) {
    //     let rate = document.getElementById('rate1' + i)
    //     let quantity = document.getElementById('quantity1' + i)
    //     console.log(rate.value);
    //     console.log(quantity.value);

    // }
    for (let i = 1; i <= k; i++) {
        let btn = document.getElementById('btn' + i);
        let quantity = document.getElementById('quantity' + i);
        let rate = document.getElementById('rate' + i);
        let span = document.getElementById(i + 'span');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // console.log(btn);
            // console.log('gugu', i);
            calculate(quantity, rate, span, i);
        })
        // i++;

    }


    let sum = 0;
    let end = document.getElementById('end');
    end.addEventListener('click', (e) => {
        e.preventDefault();
        for (let index = 0; index < arr.length; index++) {
            // const element = arr[index];
            sum += arr[index];
        }
        console.log(sum);
        let alert = document.getElementById('alert');
        let alertstr = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong class="text-center" >Total = ${sum}</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
        let alertval = getElementfromString(alertstr);
        alert.appendChild(alertval);


        let tbody = document.getElementById('tbody');
        let tbstr = `<tr>
    <th scope="row">#</th>
    <td colspan="2"> Here is yourFinal Total</td>
    <td>${sum}</td>
  </tr>
  <tr>
    <th scope="row"></th>
    <td colspan="2"></td>
    <td></td>
  </tr>`;
        // let tbval = getElementfromString(tbstr);
        tbody.innerHTML += tbstr;
        setTimeout(() => {
            window.location.reload();
        }, 10000);
    })
})