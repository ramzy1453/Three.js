import Experience from "../Experience";
import Environment from "./Environment";
import It from "./Models/It";
import Robotics from "./Models/Robotics";
import Gamedev from "./Models/Gamedev";
import Multimedia from "./Models/Multimedia";
import Particles from "./Particles";
import gsap from "gsap";
import * as THREE from 'three'
export default class World {

    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera
        this.scene = this.experience.scene
        this.time = this.experience.time


        // this.scene.background = this.experience.ressources.items.space
        // Setup
        this.distance = 60
        this.curSec = 0

        // Particles
        this.particles = new Particles(this.distance)



        // Models        
        this.objects = [
            new It().model,
            new Robotics().model,
            new Gamedev().model,
            new Multimedia().model
        ]


        // Environnement
        this.environment = new Environment()

    }
    
    scroll(){
        this.camera.position.y = -scrollY / innerHeight * this.distance
        const newSec = Math.round(scrollY / innerHeight)
        console.log(newSec, this.curSec)
        if(newSec !== this.curSec){
            this.curSec = newSec
            gsap.to(this.objects[this.curSec].rotation , 2 , {
                x : `-=${Math.PI * 2}`,
                y : `-=${Math.PI * 2}`,
            })
        }
    }

    mousemove(e){
        const paraX  = 5*(e.clientX / innerWidth - 0.5)
        const paraY = -5*(e.clientY / innerHeight - 0.5)
        this.camera.cameraGroup.position.x += (paraX - this.camera.cameraGroup.position.x) * 0.1
        this.camera.cameraGroup.position.y += (paraY - this.camera.cameraGroup.position.y) * 0.1
    }

    update() {
        
        this.objects.forEach((model,key) => {
            const k = key%2 == 0 ? 1 : -1
            const speed = 30
            model.rotation.y -= k* Math.PI / speed * this.time.delta / 1000
        })

    }

}