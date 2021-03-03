function submitData(userName, userEmail) {

    let formData = {
        name: userName,
        email: userEmail
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    let fetchItem = fetch("http://localhost:3000/users", configObj) 
            .then(function(response) {
                return response.json();
            })
            .then(function(object) {
                let responseID = object["id"];
                appendToDom(responseID);
            })
            .catch(function(error) {
                appendToDom(error.message);
            });

    return fetchItem;
}

function appendToDom(itemToAppend) {
    document.body.innerHTML = itemToAppend;
}
