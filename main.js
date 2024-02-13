const getRandomMeeting = async () => {
    const res = await fetch("https://type.fit/api/quotes")
    const data = await res.json()
    const randomNumber = Math.round(Math.random() * data.length)
    return data[randomNumber]
}

getRandomMeeting().then(data => {
    document.querySelector(".creator").innerText = data.author
    document.querySelector(".text").innerText = data.text
})

document.querySelector(".refresh").addEventListener("click", () => {
    getRandomMeeting().then(data => {
        document.querySelector(".creator").innerText = data.author
        document.querySelector(".text").innerText = data.text
    })  
})

const getPartOfTheDay = (hours) => {
    let currentPartOfTheDay = ""
    if(hours >= 6 && hours < 12){
        currentPartOfTheDay = "morning"
    } else if(hours >= 12 && hours < 20){
        currentPartOfTheDay = "evening"
    } else{
        currentPartOfTheDay = "night"
    }
    document.body.style.backgroundImage = `url("src/${currentPartOfTheDay}.png")`
    return currentPartOfTheDay
}

setInterval(() => {
    let date = new Date()
    let hours = parseInt(date.getHours()) < 10 ? `0${date.getHours()}` : date.getHours()
    let minutes = parseInt(date.getMinutes()) < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    let seconds = parseInt(date.getSeconds()) < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    document.querySelector(".partDay").innerText = getPartOfTheDay(hours)
    document.querySelector(".hoursMinutes").innerText = `${hours}:${minutes}`
    document.querySelector(".second").innerText = `:${seconds}`
}, 1000)

document.querySelector(".timezone").innerText = Intl.DateTimeFormat().resolvedOptions().timeZone