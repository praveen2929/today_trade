function sendMail() {
    
  var params = {
    fullName: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    number: document.getElementById("number").value,
    message: document.getElementById("message").value,
  };
 
  emailjs
    .send("service_auf1vf6", "template_q2t2q7r", params)
    .then(function (res) {
      alert("send success!");
    });
}
