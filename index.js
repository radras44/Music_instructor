const genres = {
    M : "masulino",
    F : "femenino"
}

function getGenres (input) {
    return typeof(input) == "string" ? genres[input] || null : null
}

console.log(getGenres(undefined))