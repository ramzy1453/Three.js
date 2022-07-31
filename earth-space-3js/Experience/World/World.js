import * as THREE from 'three'
import Experience from "../Experience";
import Environment from "./Environment";
import Earth from "./Earth";
export default class World {

    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera
        this.scene = this.experience.scene
        this.time = this.experience.time

        // Environnement
        this.environment = new Environment()

        // Object
        this.earth = new Earth()


    }
    
    scroll(){
    }

    mousemove(e){
    }

    update() {

        this.earth.update()
        
    }

}