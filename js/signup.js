function signup(){
    event.preventDefault();

    var username=document.getElementById("username");
    var email=document.getElementById("email");
    var pass=document.getElementById("password");

    var user={
        username:username,
        email:email,
        password:pass,
    }

    var json=JSON.stringify(user);
    localStorage.setItem(username,json);
    console.log('user added');
    WebTransportBidirectionalStream.open('login.hyml');
}