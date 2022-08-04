setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour]')
const minuteHand = document.querySelector('[data-minute]')
const secondHand = document.querySelector('[data-second]')

function setClock(){
    const currentDate = new Date(); 
    const seconds=currentDate.getSeconds()/60
    const minutes=(seconds +currentDate.getMinutes())/60
    const hour=(minutes+currentDate.getHours())/12
    set(secondHand,seconds)
    set(minuteHand,minutes)
    set(hourHand,hour)
}
function set(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}
setClock()