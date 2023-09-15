import './webui/colors.css'
import './main.css'
import { Progressbar } from './progressbar'


function main() {
  Notification.requestPermission()
  let progressbar = new Progressbar()
  document.getElementById("app")!.appendChild(progressbar.htmlElement)
}

main()
