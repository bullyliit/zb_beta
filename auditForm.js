var i = 0; /* Set Global Variable i */
function increment(){
    // Naming scheme for the input feilds. Appends the number to the feild's name
    i+=1;
}

function addFeild(spanId){
    var lst = document.createElement("li");
    var lbl = document.createElement('label');
    var inptWho = document.createElement("INPUT");
    var inptHwMch = document.createElement("INPUT");
    lbl.setAttribute("for", "nakuha_" + i);
    lbl.setAttribute("value", "Name and amount");
    inptWho.setAttribute("type", "text");
    inptWho.setAttribute("name", "sino_" + i);
    inptWho.setAttribute("placeholder", "Sinong nanguha");
    inptHwMch.setAttribute("type", "number");
    inptHwMch.setAttribute("name", "nakuha_" + i);
    inptHwMch.setAttribute("placeholder", "Magkano nakuha");
    lst.appendChild(lbl);
    lst.appendChild(inptWho);
    lst.appendChild(inptHwMch);
    document.getElementById(spanId).appendChild(lst);
}