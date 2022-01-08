var time = new Date()

var clock = document.getElementById("clock")

clock.innerHTML = time.toLocaleTimeString()

setInterval(() => {
    time = new Date()
    clock.innerHTML = time.toLocaleTimeString()
}, 1000)