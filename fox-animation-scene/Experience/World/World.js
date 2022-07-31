import * as THREE from 'three'
import Experience from "../Experience";
import Environment from './Environment';
import Floor from './Floor';
import Fox from './Fox';

export default class World {

    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera.instance
        this.scene = this.experience.scene

        this.camera.position.set(3, 3, 3)



        // Set up
        this.floor = new Floor()
        this.fox = new Fox()

        // Environnement
        this.environment = new Environment()

    }

    update() {
        this.fox.update()
    }
}