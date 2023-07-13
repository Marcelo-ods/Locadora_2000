function validationForm() {
    let validationCod = document.forms ["register"]["cod"].value;
    let validationTitle = document.forms ["register"]["title"].value;
    let validationDirector = document.forms ["register"]["director"].value;
    let validationDate = document.forms ["register"]["date"].value;
    let validationActor = document.forms ["register"]["actor"].value;
    let validationRate = document.forms ["register"]["rate"].value;
    let validationRadio = document.forms ["register"]["radio"].value;

    if (validationCod == ""){
        alert("O código deve ser preenchido");
        return false;
    }
    if (validationTitle == ""){
        alert("O Títulos deve ser preenchido");
        return false;
    }
    if (validationDirector == ""){
        alert("O Diretor deve ser preenchido");
        return false;
    }
    if (validationDate == ""){
        alert("A Data deve ser preenchida");
        return false;
    }
    if (validationActor == ""){
        alert("A/o Ator(a) deve ser preenchido");
        return false;
    }
    if (validationRate == ""){
        alert("A avaliação deve ser preenchido");
        return false;
    }
    if (validationRadio == ""){
        alert("O gênero deve ser preenchido");
        return false;
    }
    alert("A validação ocorreu de forma correta!");
}

function insert() {
    let cod = document.forms ["register"]["cod"].value;
    let title = document.forms ["register"]["title"].value;
    let director = document.forms ["register"]["director"].value;
    let date = document.forms ["register"]["date"].value;
    let actor = document.forms ["register"]["actor"].value;
    let rate = document.forms ["register"]["rate"].value;
    let radio = document.forms ["register"]["radio"].value;

    let insert = window.document.getElementById("insertRow");

    insert.innerHTML = `
    <th scope='row'>${cod}</th>
    <td scope="col">${title}</td>
    <td scope="col">${director}</td>
    <td scope="col">${date}</td>
    <td scope="col">${actor}</td>
    <td scope="col">${radio}</td>
    <td scope="col" align="center">${rate}⭐</td>
    `;
}