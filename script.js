function fetchUserDetails() {

    // Get the username
    var username = $('#username').val();

    // Validate the username
    if(username==='') {
        return;
    }

    // Clear the DOM
    $('#content').empty();

    // API call to get user details
    $.get(`https://api.github.com/users/${username}`, function(data) {
        var name = data.name;
        var followers = data.followers;
        var following = data.following;
    });

    // Create the README template
    $(document.createElement('img')).attr('src', "https://raw.githubusercontent.com/BEPb/BEPb/5c63fa170d1cbbb0b1974f05a3dbe6aca3f5b7f3/assets/Bottom_up.svg").css({
        width: "100%",
    }).appendTo('#content');

}

$('#button').click(fetchUserDetails);
