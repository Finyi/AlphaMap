let switchMode = document.getElementById("nightMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme")

    if (theme.getAttribute("href") == "css/leaflet.css") {
        theme.href = "css/theme-dark.css"
    } else {
        theme.href = "css/leaflet.css"
    }
}
