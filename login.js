$(document).ready(function() {
    var loginUrl = 'http://127.0.0.1:8000/api/login';

    // Function to handle errors
    function handleError(jqXHR, textStatus, errorThrown) {
        console.error('Error: ' + textStatus, errorThrown);
        $('#loginResult').text('Error: ' + textStatus + ' ' + errorThrown);
    }

    // Function to redirect user based on role
    function redirectUser(role) {
        if (role === 'admin') {
            window.location.href = 'home.html';
        } else {
            window.location.href = 'admin/admin_dashboard.html';
        }
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
                var token = response.data.access_token;
                $('#loginResult').text('Login successful! Token: ' + token);
                // Save the token in localStorage for later use
                localStorage.setItem('token', token);

                // Redirect user based on role
                redirectUser(response.data.role);
            },
            error: handleError
        });
    });

    
    // Pastikan Anda menulis skrip di bawah pustaka jQuery
    $(document).ready(function() {
        // Logout request
        $('#logout').click(function() {
            // Hapus token dari localStorage
            localStorage.removeItem('token');
            
            // Alihkan pengguna ke halaman login
            window.location.href = 'login.html';
        });
    });
});
