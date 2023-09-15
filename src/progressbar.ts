import { Module } from "./webui/module";

export class Progressbar extends Module<HTMLDivElement> {
    private fill = new Module<HTMLDivElement>("div", "", "fill")
    private text = new Module<HTMLDivElement>("div", "", "text")
    private isFilling = true

    constructor() {
        super("div", "", "progressbar")
        this.add(this.fill)
        this.add(this.text)
        window.setInterval(this.tick.bind(this), 1000)
    }

    private tick() {
        let now = new Date()
        let mins = now.getMinutes() % 30
        let secs = now.getSeconds()
        let cycle = mins + (secs/60)
        let color = "accent"
        let percent = 0
        if (mins < 25) { // We have to work
            percent = ((25 - cycle) / 25 * 100)
            this.text.htmlElement.innerHTML = "Work<BR>" + (24 - mins).toFixed() + ":" + ("0" + (59-secs)).slice(-2)
            if (this.isFilling) {
                var n = new Notification("Work",{
                    body: "Pause is over get back to work"
                })
                window.setTimeout(n.close.bind(n), 30000)
                this.isFilling = false
            }
        } else { // Pause
            color = "good"
            percent = ((cycle - 25) / 5 * 100)
            this.text.htmlElement.innerHTML = "Pause<BR>" + (mins-25).toFixed() + ":" + ("0" + secs).slice(-2)
            if (!this.isFilling) {
                var n = new Notification("Pause", {
                    body: "Take a break!"
                })
                window.setTimeout(n.close.bind(n), 30000)
                this.isFilling = true
            }
        }
        color = getComputedStyle(document.body).getPropertyValue('--color-' + color)
        this.fill.htmlElement.style.backgroundColor = color
        this.fill.htmlElement.style.width = percent.toFixed(1) + "%"
    }
}
