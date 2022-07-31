import './style.css'
import Experience from "../Experience/Experience";


const experience = new Experience({ canvas: document.querySelector('canvas.webgl') })

experience.launch()

const main = document.querySelector('.all-sections')
const loader = document.querySelector('.loader')

experience.ressources.on('ready' , () => {
    main.style.visibility = 'visible'
    loader.style.display = 'none'
})

