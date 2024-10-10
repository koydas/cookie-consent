function checkConsent() {
    toggleBox()
    updateCookiesMsg()
}

function closeBox() {
    const box = document.querySelector("#cookies-consent-box")

    box.setAttribute("hidden", true)
}

function acceptCookies() {
    localStorage.setItem('cookies-consent', 'accepted')
    
    toggleBox()
    updateCookiesMsg()
}

function removeConsent() {
    localStorage.removeItem('cookies-consent')

    toggleBox()
    updateCookiesMsg()
}

function updateCookiesMsg() {
    const msg = document.querySelector("#msg")

    msg.innerText = areCookiesAccepted() ? "Cookies have been accepted" : "Cookies are not yet accepted"
}

function areCookiesAccepted() {
    const consent = localStorage.getItem('cookies-consent')

    return consent !== null;
}

function toggleBox() {
    const box = document.querySelector("#cookies-consent-box")

    if (areCookiesAccepted()) {
        box.setAttribute("hidden", true)
    }
    else {
        box.removeAttribute("hidden")
    }
}