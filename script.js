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
        var name =  data.name;
        var followers = data.followers;
        var following = data.following;

    // Create the README template

    $('#content').css({
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#C5D0F5",
        margin: "0px",
        padding: "0px",
    });

    var container = $('<div>');

    container.css({
        height: "80%",
        width: "50vw",
        backgroundColor: "#0D1117",
        margin: "0px",
        padding: "0px",
        overflow: "auto",
    });

    $(document.createElement('img')).attr('src', 'https://raw.githubusercontent.com/BEPb/BEPb/5c63fa170d1cbbb0b1974f05a3dbe6aca3f5b7f3/assets/Bottom_up.svg').css({
        width: "100%",
        height: "32%",
        margin: "0px",
        padding: "0px",
    }).appendTo(container);

    $('#content').append(container);

    $(document.createElement('h1')).text(`Hi, I am ${name}`).css({
        color: "white",
        textAlign: "center",
    }).appendTo(container);

    $(document.createElement('img')).attr('src', 'https://raw.githubusercontent.com/SamirPaulb/SamirPaulb/main/assets/rainbow-superthin.webp').css({
        width: "100%",
    }).appendTo(container);

    $(document.createElement('h2'))

    });
    
}

$('#button').click(fetchUserDetails);
