addEventListener("DOMContentLoaded", async function() {
    //grab the search params from the url after the question mark
    const urlparam = new URLSearchParams(window.location.search)
    const songId = urlparam.get('id')
    console.log(songId)

    const response = await fetch("http://localhost:3000/api/songs/" + songId)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += `${song.title}`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
        <h2>Title: ${song.title}</h2>
        <h3>Artist: ${song.artist}</h3>
        <h4>Popularity: ${song.popularity}</h4>
        <p>Release Date: ${song.releaseDate}</p>
    `
    document.querySelector("#list_of_songs").innerHTML = html
})
