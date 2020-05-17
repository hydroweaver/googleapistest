gapi = require('gapi');
// // require('coffee-register');
// // require('iced-coffee-script/register'); 

// //https://stackoverflow.com/questions/21583899/how-to-properly-set-up-coffeescript-with-node-js
// //require('coffee-script/register')
// //require('CoffeeScript').register()
// CoffeeScript = require('coffeescript');
// CoffeeScript.register();


// gapi.server.setAPIKey('kkey here');

// gapi.server.load('youtube', 'v3', ()=>{
//     var request = gapi.server.youtube.channels.list({
//         "part": "snippet,contentDetails,statistics",
//         "forUsername": "GoogleDevelopers"
//     });
//     request.execute((response)=>{
//         console.log(response);
//     })
// })




function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.channels.list({
      "part": "snippet,contentDetails,statistics",
      "forUsername": "GoogleDevelopers"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: ".apps.googleusercontent.com"});
  });


  loadClient();
