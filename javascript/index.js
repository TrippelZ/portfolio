const moon = document.getElementById("moon");
const sun  = document.getElementById("sun");


function SetTheme(theme) {
    localStorage.setItem("Theme", theme);
    document.body.className = theme

    if ( theme === "dark" ) {
        sun.className = "";
        moon.className  = "current-theme";
    } else {
        moon.className = "";
        sun.className  = "current-theme";
    }
}

function GetTheme() {
    let theme = localStorage.getItem("Theme");

    if ( theme ) return theme;

    const browserTheme = window.matchMedia("(prefers-color-scheme: dark)");
    
    if ( browserTheme.matches ) {
        theme = "dark";
    } else {
        theme = "light";
    }

    return theme;
}

function ToggleTheme() {
    const currentTheme = GetTheme();

    if ( currentTheme === "dark" ) {
        SetTheme("light");
    } else {
        SetTheme("dark");
    }
}

function SiteLoaded() {
    const theme = GetTheme();
    console.log(theme);
    SetTheme(theme);
}

window.addEventListener("load", SiteLoaded);