let addbtn = document.getElementById("addbtn")
var Exname = document.getElementById("name")
var type = document.getElementById("type")
var amount = document.getElementById("amount")
var ul = document.getElementById("ul")
addbtn.addEventListener("click", addtolist);
function addtolist() {
    // creating list Element
    let list = document.createElement("li")
    list.className = "list-group-item"
    list.appendChild(document.createTextNode("Name : " + Exname.value + ", Type : " + type.value + ", Amount : " + amount.value));

    // creating and appending delete bt in list
    let deletebtn = document.createElement("button");
    deletebtn.className = "btn btn-danger col-sm-1 float-end"
    deletebtn.appendChild(document.createTextNode("Delete"));
    list.appendChild(deletebtn)
    
    // creating and appending edit bt in list
    let editbtn = document.createElement("button");
    editbtn.className = "btn btn-warning col-sm-1 float-end me-1"
    editbtn.appendChild(document.createTextNode("Edit"));
    list.appendChild(editbtn)
     
    // appending list in ul
    ul.appendChild(list)
    
    // creating object and stringifying
    let obj = {Name:Exname.value, Type:type.value, Amount:amount.value}
    let strobj = JSON.stringify(obj)

    // adding to local storage
    localStorage.setItem(Exname.value, strobj);

    // delete btn fuctionality
    deletebtn.addEventListener("click",deletelist);
    function deletelist(e){
        ul.removeChild(e.target.parentElement)
        localStorage.removeItem(obj.Name)}

    // edit btn fuctionality
    editbtn.addEventListener("click", edit);
    function edit(e){
        localStorage.removeItem(obj.Name);
        Exname.value=obj.Name
        type.value= obj.Type
        amount.value= obj.Amount}

    }

    



