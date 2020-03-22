window.addEventListener('load', init)

function init(){
    console.time('start')
    let c = new Clock()
    c.init()
    console.timeEnd('start')
    // c.run()

}

class Clock{
    constructor(){
        this.hrHand = document.querySelector('.clock .hr')
        this.minHand = document.querySelector('.clock .min')
        this.secHand = document.querySelector('.clock .sec')
        
    }
    
    getTime(){
        const date = new Date()
        
        this.hr = date.getHours() % 13 + Math.floor(date.getHours() / 13)
        this.min = date.getMinutes()
        this.sec = date.getSeconds()
        
        // return {
        //     hr: this.hr,
        //     min: this.min,
        //     sec: new Date().getSeconds()
        // }
    }

    animateSec(t){
        // t.sec = new Date().getSeconds()
        t.secHand.style.transform = `rotate(${t.sec*6}deg)`
        // t.sec = (t.sec+1)%60
        t.sec += 1
        t.angleMin += 0.1
        t.minHand.style.transform = `rotate(${t.angleMin}deg)`
    }

    animateHr(t){
        t.angleHr += 0.5
        t.hrHand.style.transform = `rotate(${t.angleHr}deg)`
    }

    init(){
        this.getTime()
        this.angleHr = this.hr*30 + this.min*0.5
        this.angleMin = this.min*6 + this.sec*0.1
        this.hrHand.style.transform = `rotate(${this.angleHr}deg)`
        this.minHand.style.transform = `rotate(${this.angleMin}deg)`
        // this.sec = new Date().getSeconds()
        this.sec += 2
        setInterval(this.animateSec, 1000, this)
        setInterval(this.animateHr, 60*1000, this)
    }
}
/**
 * get current time
 * set hand according to time
    * angle(hour) = hour*30 + min*0.5 
    * angle(minute) = minute*6 + sec*0.1 
 * after each sec sechand and minhand move
 * after each min hourhand move
 */

