const msg = document.getElementById('msg');
const submit = document.querySelector('#submit');
const helloMsg = document.getElementById('helloMsg');
const heart = document.querySelectorAll('.fa-heart');

function animationForm(){
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow =>{
        arrow.addEventListener('click',()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const next = parent.nextElementSibling;
            const name = arrows[0].previousElementSibling.value;
            
            if(input.type==="text" && validateName(input, parent)){
                nextSlider(parent, next, "0", name);
            }else if(input.type === "email" && validateEmail(input, parent)){
                nextSlider(parent, next, "0", name);
            }else if(input.type === "password" && validatePassword(input, parent)){
                nextSlider(parent, next, "-1", name);
            }
        })
    })
}

function validateName(user, parent){
    if(user.value.length < 4){
        error("rgb(189, 87, 87)");
        animationError(parent);
        getMsgError("Name must be grater that 4 chachter")
    }else{
        error("rgb(87, 189, 130)");
        getMsgError("");
        return true;
    }
}

function validateEmail(email, parent){
    const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validate.test(email.value)){
        error("rgb(87, 189, 130)");
        getMsgError("");
        return true;
    }else{
        error("rgb(189, 87, 87)");
        animationError(parent);
        getMsgError("Please Enter Validte Email");
    }
}

function validatePassword(password, parent){
    if(password.value.length < 5){
        error("rgb(189, 87, 87)");
        animationError(parent);
        getMsgError("The password must be grater that 5 chachter")
    }else{
        error("rgb(87, 189, 130)");
        getMsgError("");
        return true;
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}

function getMsgError(message){
    msg.innerHTML = message;
    msg.style.transition="all 1s ease"
    msg.style.opacity="1";
}

function nextSlider(parent, next, cheak, name){
    if(cheak=="-1"){
        submitForm(name);
    }
    next.classList.remove("innactive");
    parent.classList.add("active");
}

function animationError(parent){
    parent.style.animation = "shake 0.5s ease";
    parent.addEventListener('animationend', function(){
        parent.style.animation = "";
    })

}

function submitForm(name){
    const parentSubmit = submit.parentElement;
    const nextSubmit = parentSubmit.nextElementSibling;
    submit.addEventListener('click', function(e){
        e.preventDefault();
        console.log(name);
        nextSubmit.classList.remove("innactive");
        parentSubmit.classList.add('innactive');
        if(name === "sarah" || name === "sara" || name==="suty" || name === "Sarah" || name === "Sara" || name === "Suty"){
            helloMsg.innerHTML = " Suty. you are in my heart ^_^";
            heart.forEach(hr =>{
                hr.style.color = "red";
            })
        }else{
            helloMsg.innerHTML = "Thank You" + ` ${name}`;
        }
    });
}

animationForm();