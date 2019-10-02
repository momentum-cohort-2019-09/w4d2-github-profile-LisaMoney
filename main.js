function getInfo() {
    fetch('https://swapi.co/api/people/3/').then(function (response) {
        return response.json()
    }).then(function (object) {
        let nameDiv = document.querySelector("#name")
        nameDiv.innerHTML = ("The dopest character in Star Wars is " + object.name)
        let heightDiv = document.querySelector("#height")
        heightDiv.innerHTML = (object.name + " is " + object.height + " inches tall." )
        let massDiv = document.querySelector("#mass")
        massDiv.innerHTML = (object.name + " weighs " + object.mass + " kilograms.")
    })

    /*.then(fetch('https://swapi.co/api/planets/8/').then(function (response) {
        return response.json()}))

    .then(function (homeplanet) {
        let homeplanetDiv = document.querySelector("#homeplanet")
        homeplanetDiv.innerHTML = (object.name + " is from " + homeplanet.name + ".")
    })

getInfo()*/