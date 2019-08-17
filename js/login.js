function hasClass(element, clssname) {
    return element.className.match(new RegExp('(\\s|^)' + clssname + '(\\s|$)'))
}
function addClass(element, clssname) {
    if (!this.hasClass(element, clssname)) element.className += ' ' + clssname
}
function removeClass(element, clssname) {
    if (hasClass(element, clssname)) {
        var reg = new RegExp('(\\s|^)' + clssname + '(\\s|$)')
        element.className = element.className.replace(reg, ' ')
    }
}
function toggleClass(element, clssname) {
    if (hasClass(element, clssname)) {
        removeClass(element, clssname)
    } else {
        addClass(element, clssname)
    }
}
var loginBox = document.getElementsByClassName('login-box')
var showBtn = document.getElementsByClassName('show-login-btn')
var hideBtn = document.getElementsByClassName('hide-login-btn')
showBtn[0].addEventListener('click', function() {
    toggleClass(loginBox[0], 'showed')
})
hideBtn[0].addEventListener('click', function() {
    toggleClass(loginBox[0], 'showed')
})
