$(document).ready(function () {
    // DOM setup
    const body = $('body');
    const hamBtn = $('.btnHam');

    // Hamburger button use toogle to add and remove class name 
    hamBtn.click(function() {
        body.toggleClass('showNav');
    })

    // Judge contact information
    $('.btnSend').click(function(e) {
        let name = $('.userName').val();
        let email = $('.userEmail').val();
        let subject = $('.userSubject').val();
        let message = $('.contactMsg').val();
        let status = $('.formStatus');
        status.empty();

        if(name.length >= 2) {
            status.append('<div>Name is valid</div>');
        }else {
            event.preventDefault();
            status.append('<div>Name is not valid</div>');
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            status.append('<div>Email is valid</div>');
        }else {
            event.preventDefault();
            status.append('<div>Email is not valid</div>');
        }

        if (subject.length > 3) {
            status.append('<div>Subject is valid</div>');
        } else {
            event.preventDefault();
            status.append('<div>Subject is not valid</div>');
        }

        if (message.length > 20) {
            status.append('<div>Message is valid</div>');
        } else {
            event.preventDefault();
            status.append('<div>Message is not valid</div>');
        }
    })
});