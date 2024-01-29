/*const form  = document.querySelector("form");

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kiyoshi.rio@gmail.com",
        Password : "E85C5424E88BBD0D934166A5D4CCC2C32E53",
        To : 'kiyoshi.rio@gmail.com',
        From : "kiyoshi.rio@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {});*/

function sendMail() {
    var params = {
        name: document.getElementById('name').value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value ,
    };

    const serviceID = "service_djp340e";
    const templateID = "template_l4le4xb";

    emailjs
        .send(serviceID,templateID,params)
        .then((res) =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully");
            //location.href = .value;
            window.open("https://www.facebook.com/wakatariyo051900");
        })
        .catch((err) => console.log(err));
}

