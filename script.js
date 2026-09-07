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

    $(document.createElement('h1')).text(`Hi, I'm ${name}`).css({
        color: "white",
        textAlign: "center",
        fontFamily: "sans-serif",
        fontWeight: "500",
    }).appendTo(container);

    var para = $(document.createElement('p')).css({
        textAlign: "center",
    });

    $(document.createElement('img')).attr('src', `https://komarev.com/ghpvc/?username=${username}&label=Profile%20Views&color=0e75b6&style=flat-square`).css({
        height: "21px",
        marginRight: "5px",
    }).appendTo(para);

    $(document.createElement('img')).attr('src', `https://img.shields.io/github/followers/${username}?label=Followers&color=0e75b6&style=flat-square`).css({
        height: "21px",
        marginRight: "5px",
    }).appendTo(para);

    $(document.createElement('img')).attr('src', `https://img.shields.io/github/stars/${username}?label=Stars&color=0e75b6&style=flat-square`).css({
        height: "21px",
        marginRight: "5px",
    }).appendTo(para);

    $(document.createElement('img')).attr('src', `https://img.shields.io/github/forks/${username}/Software-Engineering?label=Forks&color=0e75b6&style=flat-square`).css({
        height: "21px",
        marginRight: "5px",
    }).appendTo(para);

    container.append(para);

     $(document.createElement('img')).attr('src', 'https://raw.githubusercontent.com/SamirPaulb/SamirPaulb/main/assets/rainbow-superthin.webp').css({
        width: "100%",
    }).appendTo(container);

    });
    
}

$('#button').click(fetchUserDetails);
