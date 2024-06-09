$(document).ready(function() {
    var registerUrl = 'http://127.0.0.1:8000/api/register';

    // Function to handle errors
    function handleError(jqXHR, textStatus, errorThrown) {
        console.error('Error: ' + textStatus, errorThrown);
        $('#registerResult').text('Error: ' + textStatus + ' ' + errorThrown);
    }

    // Register request
    $('#register').click(function() {
        var name = $('#registerName').val();
        var email = $('#registerEmail').val();
        var password = $('#registerPassword').val();
        var confirmPassword = $('#registerConfirmPassword').val();

        // Check if passwords match
        if (password !== confirmPassword) {
            $('#registerResult').text('Passwords do not match!');
            return;
        }

        var registerData = {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        };

        $.ajax({
            url: registerUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(registerData),
            dataType: 'json',
            success: function(response) {
                $('#registerResult').text('Registration successful! Please login.');
            },
            error: handleError
        });
    });
});
