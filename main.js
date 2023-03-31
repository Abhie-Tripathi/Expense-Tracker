let addbtn = document.getElementById("addbtn")
var namee = document.getElementById("namee")
var type = document.getElementById("typee")
var amount = document.getElementById("amounte")
var ul = document.getElementsByClassName("list-group mt-5")
addbtn.addEventListener("click", addtolist);
function addtolist() {
    let list = document.createElement("li")
    list.className = "list-group-item"
    list.appendChild(document.createTextNode(`Name : ${namee.value} Type : ${type.value} Amount : ${amount.value}`));
    let editbtn = document.createElement("button");
    editbtn.className = "btn btn-warning col-sm-1 float-end"
    editbtn.appendChild(document.createTextNode("Edit"));
    list.appendChild(editbtn)
    let deletebtn = document.createElement("button");
    deletebtn.className = "btn btn-danger col-sm-1 float-end"
    deletebtn.appendChild(document.createTextNode("Delete"));
    list.appendChild(deletebtn)
    ul[0].appendChild(list)
    let obj = {Name:namee.value, Type:type.value, Amount:amount.value}
    let strobj = JSON.stringify(obj)
    localStorage.setItem(namee.value, strobj);
    deletebtn.addEventListener("click",deletelist);
    function deletelist(e){
        ul[0].removeChild(e.target.parentElement)
        localStorage.removeItem(obj.Name)}
    editbtn.addEventListener("click", edit);
    function edit(e){
        localStorage.removeItem(obj.Name);
        namee.value=obj.Name
        type.value= obj.Type
        amount.value= obj.Amount}

    }

    



