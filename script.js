const inputButton = document.getElementById("input");
const listContainer = document.getElementById("my-list");

function AddTask() {
    if (inputButton.value === '') {
        alert("this field requires an input");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = inputButton.value;

        let span = document.createElement("span");
        span.innerHTML = "delete"
        li.appendChild(span);
        // li.innerHTML = `${inputButton.value};
        // <span>
            
        //         <i class="fa-solid fa-pen-to-square"></i>
        //         <i class="fa-solid fa-square-check"></i>
        //         <i class="fa-solid fa-delete-left"></i>
        //     </span>`;


        listContainer.appendChild(li);
    }
    inputButton.value = "";
    saveData();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("Data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("Data");
}
showTask();