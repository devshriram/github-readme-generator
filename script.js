var outer = $('#content').css({
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#C5D0F5",
    margin: "0px",
    padding: "0px",
    });

    var btn = $('<button>').text('Generate Code').attr('id', 'myBtn');

    btn.click(generateCode);

    function generateCode() {

    // Clear the DOM
    outer.empty();

    var code = $(document.createElement('div')).css({
        height: "80%",
        width: "50vw",
        backgroundColor: "#0D1117",
        marginTop: "10vh",
        color: "white",
        overflow: "auto",
        padding: "10px",
        whiteSpace: "pre-wrap",
    }).text('<img src="https://raw.githubusercontent.com/BEPb/BEPb/5c63fa170d1cbbb0b1974f05a3dbe6aca3f5b7f3/assets/Bottom_up.svg" width="100%" />\n' + '\n' + '<h1 id="top" align="center">Hi, I\'m [Write Your Name here] <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35"></h1></h1>\n' + '\n' + `<p align="center">
  <img src="https://komarev.com/ghpvc/?username=built-different-13&label=Profile%20Views&color=0e75b6&style=flat-square" alt="Views" height="21" /> 
  <img src="https://img.shields.io/github/followers/devshriram?label=Followers&color=0e75b6&style=flat-square" alt="Followers" height="21" />
  <img src="https://img.shields.io/github/stars/devshriram?label=Stars&color=0e75b6&style=flat-square" alt="Stars" height="21" />
  <img src="https://img.shields.io/github/forks/devshriram/Software-Engineering?label=Forks&color=0e75b6&style=flat-square" alt="Forks" height="21" />
  <img src="https://img.shields.io/github/watchers/devshriram/Software-Engineering?label=Watchers&style=flat-square&color=0e75b6" alt="Watchers" height="21" />
</p>\n` + '\n').appendTo(outer);

    }


    $('#button').click(fetchUserDetails);

    function fetchUserDetails() {

    // Get the username
    var username = $('#username').val();

    // Validate the username
    if(username==='') {
        return;
    }

    // Clear the DOM
    outer.empty();

    // API call to get user details
    $.get(`https://api.github.com/users/${username}`, function(data) {
        var name =  data.name;

    // Create the README template

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

    $(document.createElement('img')).attr('src', `https://komarev.com/ghpvc/?username=${username}&label=Following%20&color=0e75b6&style=flat-square`).css({
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

    $(document.createElement('img')).attr('src', 'https://user-images.githubusercontent.com/74038190/229223156-0cbdaba9-3128-4d8e-8719-b6b4cf741b67.gif').css({
        width: "40px",
    }).appendTo(container);

    var heading1 = $(document.createElement('h2')).text('About Me').css({
        marginRight: "10px",
        color: "white",
        display: "inline",
    });

    container.append(heading1);

    $(document.createElement('hr')).css({
        border: "1px solid white",
        width: "100%",
    }).appendTo(container);

    var section1 = $(document.createElement('div')).css({
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
    });

    var section2 = $(document.createElement('div')).css({
        height: "100%",
    });

    var ul = $(document.createElement('ul'));

    var item1 = $('<li>').text('⭐ I’m a Software Engineer.').css('color', 'white');
    var item2 = $('<li>').text('🚀 Passionate about Web Development.').css('color', 'white');
    var item3 = $('<li>').text('💡 Interested in contributing to Open Source Projects.').css('color', 'white');
    var item4 = $('<li>').text('💬 Ask me about Software Engineering.').css('color', 'white');
    var item5 = $('<li>').text('🎯 Focus on Quality over Quantity').css('color', 'white');
    var item6 = $('<li>').text('🔄 Repeat Brainstorming, Coding, and Debugging.').css('color', 'white');
    var item7 = $('<li>').text('✨ Enjoy my GitHub profile.').css('color', 'white');

    ul.append(item1);
    ul.append(item2);
    ul.append(item3);
    ul.append(item4);
    ul.append(item5);
    ul.append(item6);
    ul.append(item7);

    section2.append(ul);

    section1.append(section2);

    $(document.createElement('img')).attr('src', 'https://user-images.githubusercontent.com/74038190/212749447-bfb7e725-6987-49d9-ae85-2015e3e7cc41.gif').css({
        height: "180px",
        width: "250px",
        // align: "right",
    }).appendTo(section1);

    
    container.append(section1);

    $(document.createElement('img')).attr('src', 'https://user-images.githubusercontent.com/10498744/210012254-234538ff-d198-48aa-8964-37e6fd45d227.gif').css({
        width: "100%",
        height: "120px",
    }).appendTo(container);

    $(document.createElement('img')).attr('src', 'https://raw.githubusercontent.com/SamirPaulb/SamirPaulb/main/assets/rainbow-superthin.webp').css({
        width: "100%",
    }).appendTo(container);

     $(document.createElement('img')).attr('src', 'https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gi').css({
        width: "40px",
    }).appendTo(container);

    var heading2 = $(document.createElement('h2')).text('Technical Skills').css({
        marginRight: "10px",
        color: "white",
        display: "inline",
    });

    container.append(heading2);

     $(document.createElement('hr')).css({
        border: "1px solid white",
        width: "100%",
    }).appendTo(container);

    var skillSection = $(document.createElement('div')).css({
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    });

    container.append(skillSection);

    var skillIcon = $(document.createElement('a')).attr('href', 'https://skillicons.dev');

    var skillIconImages = $(document.createElement('img')).attr('src', 'https://skillicons.dev/icons?i=html,css,js,docker,kubernetes,mongodb,express,nodejs,react,git,github').appendTo(skillIcon);

    container.append(skillIcon);

     $(document.createElement('img')).attr('src', 'https://raw.githubusercontent.com/SamirPaulb/SamirPaulb/main/assets/rainbow-superthin.webp').css({
        width: "100%",
    }).appendTo(container);

    $(document.createElement('img')).attr('src', 'https://raw.githubusercontent.com/Trilokia/Trilokia/379277808c61ef204768a61bbc5d25bc7798ccf1/bottom_header.svg').css({
        height: "100px",
        width: "100%",
    }).appendTo(container);

    btn.css({
    height: "30px",
    width: "150px",
    color: "white",
    marginTop: "45px",
    backgroundColor: "black",
    }).appendTo(outer);

    }); 
    
}
