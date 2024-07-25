function submitTodo() {
    const ambilvalue = document.getElementById("inputkegiatan").value
    let arrayutama = JSON.parse(localStorage.getItem("info2"))
    if (arrayutama) {
        arrayutama.push({
            id: arrayutama[arrayutama.length - 1].id + 1,
            kegiatan: ambilvalue,
            checked: false
        })
    } else {
        arrayutama = [{
            id: 0,
            kegiatan: ambilvalue,
            checked: false
        }]
    }
    localStorage.setItem("info2", JSON.stringify(arrayutama))
    document.getElementById("inputkegiatan").value = ""
    displayTodo()
}

function displayTodo() {
    const arrayutama = JSON.parse(localStorage.getItem("info2"))
    let daftar = ``
    if (arrayutama) {
        for (let i = 0; i < arrayutama.length; i++) {
            daftar += `
            <ul class="list-group list-group-horizontal rounded-0 bg-transparent my-2">
                <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id=${arrayutama[i].id} onchange="setComplete(this.checked, this.id)" aria-label="..." ${arrayutama[i].checked ? 'checked' : ''}/>
                    </div>
                </li>
                <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                    <p class="lead fw-normal mb-0">${arrayutama[i].kegiatan}</p>
                </li>
                <li class="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
                    <button type="button" class="btn btn-danger" id=${arrayutama[i].id} onclick="deleteTodo(this.id)">Delete</button>
                </li>
            </ul>
        `
        }
    }
    document.getElementById("mainsectionjs").innerHTML = daftar
}

function setComplete (checked, id) {
    let arrayutama = JSON.parse(localStorage.getItem("info2"))
    arrayutama = arrayutama.map(el => {
        if (el.id === Number(id)) {
            el.checked = checked
        }
        return el
    })
    localStorage.setItem("info2", JSON.stringify(arrayutama))
    displayTodo()
}

function deleteTodo (id) {
    let arrayutama = JSON.parse (localStorage.getItem("info2"))
    arrayutama = arrayutama.filter(el => el.id !== Number(id))
    if (arrayutama.length) {
        localStorage.setItem("info2", JSON.stringify(arrayutama))
    } else {
        localStorage.removeItem("info2")
    }
    displayTodo()
}

function messageSent () {
    alert ("Message sent!");
}