function validationForm() {
    let validationNumber = document.forms ["register"]["number"].value;
    let validationClient = document.forms ["register"]["client"].value;
    let validationCar = document.forms ["register"]["car"].value;
    let validationDay = document.forms ["register"]["day"].value;
    
    if (validationNumber == ""){
        alert("O número do carro deve ser preenchido");
        return false;
    }
    if (validationClient == ""){
        alert("O cliente deve ser preenchido");
        return false;
    }
    if (validationCar == ""){
        alert("O Modelo deve ser preenchido");
        return false;
    }
    if (validationDay == ""){
        alert("O(s) dia(s) deve(m) ser preenchido");
        return false;
    }
    alert("A validação ocorreu de forma correta!");
}


function insert() {
    
    let number = document.forms ["register"]["number"].value;
    let client = document.forms ["register"]["client"].value;
    let car = document.forms ["register"]["car"].value;
    let day = document.forms ["register"]["day"].value;

    let insert = window.document.getElementById("insertRow");

    insert.innerHTML = `
    <th scope="row">${number}</th>
    <td>${client}</td>
    <td>${car}</td>
    <td>${day}</td>

    `;
}
