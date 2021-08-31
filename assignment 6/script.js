var list = [];
var inp = document.getElementById("inp");
var todolist = document.getElementById("todolist");

document.getElementById("btn").addEventListener("click", function () {
    if (inp.value != "") {
        list.push(inp.value);
        inp.value = '';
        showList();
    }
});

function showList() {
    todolist.innerHTML = "";
    list.forEach(function (n, i) {
        todolist.innerHTML += "<li>" + n + "<a onclick = 'editItem(" + i + ")'><i class='fas fa-edit'></i></a>" +
            "<a onclick = 'upItem(" + i + ")'><i class='fas fa-arrow-up'></i></a>" +
            "<a onclick = 'downItem(" + i + ")'><i class='fas fa-arrow-down'></i></a>" +
            "<a onclick = 'deleteItem(" + i + ")'><i class='fas fa-trash-alt'></i></a> </li>"
            ;
    })
}

function deleteItem(i) {
    list.splice(i, 1);
    showList();
}

function editItem(i) {
    var newValue = prompt("Please insert new value");

    list.splice(i, 1, newValue);
    showList();
}

function upItem(i) {
    if (i > 0) {
        var temp = list[i];
        list[i] = list[i - 1];
        list[i - 1] = temp;

        showList();
    }
}

function downItem(i) {
    if (i < list.length - 1) {
        var temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;

        showList();
    }
}

