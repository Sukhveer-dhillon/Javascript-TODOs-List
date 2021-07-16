function getanupdate() {
    console.log("Updating list....");
    var tit = document.getElementById("title").value;
    var desc = document.getElementById("description").value;
    if (localStorage.getItem('items') == null) {
        var itemsarray = [];
        itemsarray.push([tit, desc]);
        localStorage.setItem('items', JSON.stringify(itemsarray));
    }
    else {
        var itemsarraystr = localStorage.getItem('items');
        itemsarray = JSON.parse(itemsarraystr);
        itemsarray.push([tit, desc]);
        localStorage.setItem('items', JSON.stringify(itemsarray));
    }
    update();

}

function update() {
    if (localStorage.getItem('items') == null) {
        var itemsarray = [];

        localStorage.setItem('items', JSON.stringify(itemsarray));
    }
    else {
        var itemsarraystr = localStorage.getItem('items');
        itemsarray = JSON.parse(itemsarraystr);

    }

    //populating table
    var tablebody = document.getElementById('tablebody');
    var str = "";
    itemsarray.forEach((element, Index) => {
        str += `
                <tr>
                        <th scope="row">${Index + 1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button class="btn btn-primary btn-sm" onclick="deleted(${Index})" >Delete</button></td>

                </tr>`
    });
    tablebody.innerHTML = str;
}

var add = document.getElementById("add");
add.addEventListener("click", getanupdate);
update();

function deleted(itemindex) {
    console.log('delete', itemindex);
    var itemsarraystr = localStorage.getItem('items');
    itemsarray = JSON.parse(itemsarraystr);

    //delete item index element form the array
    itemsarray.splice(itemindex, 1);
    localStorage.setItem('items', JSON.stringify(itemsarray));
    update();
}

function clearstorage() {
    if (confirm("Do you really wanna clear the List")) {
        console.log("clearing the storage");
        localStorage.clear();
        update();
    }
}