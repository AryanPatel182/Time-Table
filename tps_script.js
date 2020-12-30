
let index = 0;
// updatelite();

function updatelite() {
    let tableBody = document.getElementById("tableBody");
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    let str = "";
    // console.log(itemJsonArray);

    itemJsonArray.forEach((element) => {
        str += `<tr>
<td class="dt" data-lable="index">${element['index']}</td>
<td class="dt" data-lable="time">${element['time']}</td>
<td class="dt" data-lable="mon">${element['mon']}</td>
<td class="dt" data-lable="tue"> ${element['tue']}</td>
<td class="dt" data-lable="wed"> ${element['wed']}</td>
<td class="dt" data-lable="thu"> ${element['thu']}</td>
<td class="dt" data-lable="fri"> ${element['fri']}</td>
<td class="dt" data-lable="sat"> ${element['sat']}</td>
<td class="dt" data-lable="sun"> ${element['sun']}</td>
<td class="dt dlt" data-lable="delete"><a onclick="deleted(${element['index']});"  class="btntp">delete</a></td>
</tr>`

    });

    tableBody.innerHTML = str;
}


function update() {
    index = index + 1;
    let tm = document.getElementById('time').value;
    let sub = document.getElementById('sub').value;
    let day = document.getElementById('day').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        tps = { 'index': '', 'time': '', 'mon': '', 'tue': '', 'wed': '', 'thu': '', 'fri': '', 'sat': '', 'sun': '' }
        tps.time = tm;
        tps[day] = sub;
        tps.index = index;
        itemJsonArray.push(tps);
        console.log(tps);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        console.log(itemJsonArray);
        tps = { 'index': '', 'time': '', 'mon': '', 'tue': '', 'wed': '', 'thu': '', 'fri': '', 'sat': '', 'sun': '' }
        tps.time = tm;
        tps[day] = sub;
        tps.index = index;
        itemJsonArray.push(tps);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }

    let tableBody = document.getElementById("tableBody");
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    let str = "";

    itemJsonArray.forEach((element) => {
        str += `<tr>
<td class="dt" data-lable="index">${element['index']}</td>
<td class="dt" data-lable="time">${element['time']}</td>
<td class="dt" data-lable="mon">${element['mon']}</td>
<td class="dt" data-lable="tue"> ${element['tue']}</td>
<td class="dt" data-lable="wed"> ${element['wed']}</td>
<td class="dt" data-lable="thu"> ${element['thu']}</td>
<td class="dt" data-lable="fri"> ${element['fri']}</td>
<td class="dt" data-lable="sat"> ${element['sat']}</td>
<td class="dt" data-lable="sun"> ${element['sun']}</td>
<td class="dt dlt" data-lable="delete"><a onclick="deleted(${element['index']});"  class="btntp">delete</a></td>
</tr>`

    })
    tableBody.innerHTML = str;
};

function sort_index() {
    var i = 1;
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.forEach((element) => {
        element['index'] = i;
        i += 1;
    })
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    // console.log(itemJsonArray);
    index--;
    updatelite();
}


function deleted(ind) {
    console.log(ind + "del req");
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.splice(ind - 1, 1);
    // console.log(itemJsonArray);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    sort_index();
}


// add = document.getElementById("add");
// add.addEventListener("click", update);
