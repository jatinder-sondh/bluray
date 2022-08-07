function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    }
    emailjs.send('service_ls3t0xt', 'template_625tsxq', params).then(function (res) {
        if (res.status === 200) {
            alert('Thank you for the time, we will get back to you!');
            location.reload();
        } else {
            alert("error:" + res.txt)
        }
    })
}