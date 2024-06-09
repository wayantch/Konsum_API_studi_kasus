$(document).ready(function() {
    var token = '';

    // URL API
    var loginUrl = 'http://127.0.0.1:8000/api/login';
    var dataUrl  = 'http://127.0.0.1:8000/api/admin/books';
    var categoryUrl  = 'http://127.0.0.1:8000/api/admin/categories';
    var ImageUrl = 'http://127.0.0.1:8000/storage/';

    // Fungsi untuk menangani kesalahan
    function handleError(jqXHR, textStatus, errorThrown) {
        console.error('Error: ' + textStatus, errorThrown);
        $('#dataResult').text('Error: ' + textStatus + ' ' + errorThrown);
    }

    // Login request
    $('#login').click(function() {
        var email = $('#email').val();
        var password = $('#password').val();
        var loginData = {
            email: email,
            password: password
        };

        $.ajax({
            url: loginUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(loginData),
            dataType: 'json',
            success: function(response) {
                token = response.data.access_token;
                $('#loginResult').text('Login successful! Token: ' + token);
            },
            error: handleError
        });
    });


    
});
