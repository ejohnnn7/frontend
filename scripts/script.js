// we are going to make an event listener... it will trigger when the DOM is loaded (aka upon visiting web page)
addEventListener("DOMContentLoaded", async function() {
    const response = await this.fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs) {
        let songId = song._id
        html += `<li>${song.title} - ${song.artist}</li> - ${song.username} <a href="/details.html?id=${songId}">Details</a> - <a href="edit.html?id=${songId}">Edit Song</a><br>`
    }

    document.querySelector("#list_of_songs").innerHTML = html
})
