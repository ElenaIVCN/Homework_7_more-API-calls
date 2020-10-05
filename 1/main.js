
$('#btnRetrive').on('click', onRetrieveClick);


function onRetrieveClick(event) {
    event.preventDefault();

    var id = $("#choice").val();
    switch(id) {
        case "dog": doDog();
            break;
        case "cat": doCat();
            break;
        case "fox": doFox();
            break;
    }
}

function doDog() {
    fetch("https://random.dog/woof.json", {
        method: 'GET'
    }).then(function(response) {
        return response.json();
    }).then((jsonResp) = function(jsonResp) {
        console.log(jsonResp.url);
        $("#ret_img").attr("src",jsonResp.url);
    });
}

function doCat() {
    fetch("https://aws.random.cat/meow", {
        method: 'GET'
    }).then(function(response) {
        return response.json();
    }).then((jsonResp) = function(jsonResp) {
        console.log(jsonResp.file);
        $("#ret_img").attr("src",jsonResp.file);
    });
}


function doFox() {
    fetch("https://randomfox.ca/floof/", {
        method: 'GET'
    }).then(function(response) {
        return response.json();
    }).then((jsonResp) = function(jsonResp) {
        console.log(jsonResp.image);
        $("#ret_img").attr("src",jsonResp.image);
    });
}
