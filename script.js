function fetchUserDetails() {

    // Get the username
    var username = $('#username').val();

    // API call to get user details
    $.get(`https://api.github.com/users/${username}`, function(data) {
        var name = data.name;
        var followers = data.followers;
        var following = data.following;
    });
}

$('#button').click(fetchUserDetails);
