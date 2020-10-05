
$('#btnRetrive').on('click', onRetrieveClick);


function onRetrieveClick(event) {
    event.preventDefault();

    doJoke();
}

function doJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke", {
        method: 'GET'
    }).then(function(response) {
        return response.json();
    }).then((jsonResp) = function(jsonResp) {
        $("#joke_q").text("Q: \""+jsonResp.setup+"\"");
        $("#joke_a").text("A: \""+jsonResp.punchline+"\"");
    });
}
