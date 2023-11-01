let myInput = document.getElementById("input");
let myTasks = document.getElementById("tasks");
myTasks.addEventListener("click", function (e) {
    function savedData() {

        let dataArr = [];
        let data = localStorage.getItem("value");

        if (data) {
            dataArr = JSON.parse(data);
        }

        let savedValue = myInput.value;
        dataArr.push(savedValue)
        localStorage.setItem('value', JSON.stringify(dataArr));
        console.log(dataArr)

        renderitems(dataArr)
        myInput.value = "";



    }
    savedData()
})

function renderitems(dataArr) {
    let returnedValue = document.querySelector('.to-do-list1')
    returnedValue.innerHTML = "";
    for (let tasks of dataArr) {
        let listItems = document.createElement('ol')
        let EditBtn = document.createElement("button")
        EditBtn.innerText = "Edit";
        EditBtn.classList = "editBtn"
        let deleteButton = document.createElement('button')
        deleteButton.innerText = "Delete"

        listItems.textContent = tasks;
        listItems.appendChild(EditBtn)
        listItems.appendChild(deleteButton)
        returnedValue.appendChild(listItems)
        deleteButton = document.querySelector("Delete")
  

        EditBtn.addEventListener("click", function (e) {
        
            console.log("edited")
        })
        deleteButton.addEventListener("click", function (e) {


            console.log("deleted")
        })



    }

}
// function 
