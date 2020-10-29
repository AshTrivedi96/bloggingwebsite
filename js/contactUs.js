const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phonenoRe = /^\d{10}$/;

function validateContactUs() {

    name = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    text = document.getElementById("text").value;

    if (name.length == 0) {
        alert('Name is required!!!');
        document.getElementById("name").focus();
        return false;
    }

    if (phone.length == 0) {
        alert('Phone is required!!!');
        document.getElementById("phone").focus();
        return false;
    } else {
        if (!(phone.match(phonenoRe))) {
            alert("You have entered an invalid mobile number!")
            return false;
        }
    }

    if (email.length == 0) {
        alert('Email is required!!!');
        document.getElementById("email").focus();
        return false;
    } else {
        if (!(emailRe.test(email))) {
            alert("You have entered an invalid email address!")
            return false;
        }
    }

    if (text.length == 0) {
        alert('Description is required!!!');
        document.getElementById("text").focus();
        return false;
    }
    alert('Submitted!!!');
    return true;
}