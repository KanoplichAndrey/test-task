export const form = document.getElementById( "info" )
export  function nameValid (a) {
    let name = form.elements.name;
    let nameValue = name.value;

     if (nameValue == "" || isNaN(nameValue)) {
        document.getElementById("numberError").innerHTML = "Введите ваш номер!";
        numberError.style.color = "red";
        if (a) name.focus();
        return false;
    }
    else{
        document.getElementById("numberError").innerHTML = "";
        return true;
    }
}