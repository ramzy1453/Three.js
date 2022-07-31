import * as THREE from 'three'
import Experience from '../Experience'

export default class Fox {

    constructor() {

        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.camera = this.experience.camera.instance
        this.ressources = this.experience.ressources.items.foxModel
        this.time = this.experience.time
        this.setModel()
        this.setAnimation()

        // Movement
        this.animation.play('running')


        // debug UI
        if (this.debug.active) {
            this.debugFolder = this.debug.gui.addFolder('Fox')
        }


    }
    setModel() {
        this.model = this.ressources.scene
        this.model.scale.set(0.015, 0.015, 0.015)
        this.model.position.y += 5
        this.scene.add(this.model)
        this.model.traverse((object) => {
            if (object instanceof THREE.Mesh) {
                object.castShadow = true
            }
        })
    }

    setAnimation() {
        this.animation = {}
        this.animation.mixer = new THREE.AnimationMixer(this.model)
        this.animation.actions = {
            idle: this.animation.mixer.clipAction(this.ressources.animations[0]),
            walk: this.animation.mixer.clipAction(this.ressources.animations[1]),
            running: this.animation.mixer.clipAction(this.ressources.animations[2])
        }
        this.animation.current = this.animation.actions.idle
        this.animation.current.play()

        this.animation.play = name => {
            const newAction = this.animation.actions[name]
            const oldAction = this.animation.current

            newAction.reset()
            newAction.play()
            newAction.crossFadeFrom(oldAction, 1)

            this.animation.current = newAction
        }

    }

    update() {
        this.animation.mixer.update(this.time.delta / 500)
        const angle = this.time.current / 1500
        const radius = 6

        this.model.position.z = radius * Math.sin(angle)
        this.model.position.x = radius * Math.cos(angle)
        this.model.rotation.y = -angle
        this.camera.lookAt(this.model.position)
    }

}
