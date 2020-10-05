
$('#btnRetrive').on('click', onRetrieveClick);


function onRetrieveClick(event) {
    event.preventDefault();

    doJoke();
}

function doJoke() {
    fetch("http://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris", {
        method: 'GET'
    }).then(function(response) {
        return response.json();
    }).then((jsonResp) = function(jsonResp) {
        return jsonResp.value.joke;
    }).then((joke) = function(joke) {
        console.log(joke);
        $("#joke").text("\""+joke+"\"");
    });
}
