import * as THREE from 'three'
import Experience from '../../Experience'

export default class Model {
    constructor({type} = {}){
        
        if(!type) throw new Error('Model non existing')

        this.type = type
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        
        this.ressources = this.experience.ressources.items[type]
        this.model = this.ressources.scene
        this.scene.add(this.model)
        this.model.traverse((object) => {
            if (object instanceof THREE.Mesh) {
                object.castShadow = true
            }
        })

        // Sizes
        this.box = new THREE.Box3().setFromObject(this.model);
        this.center = this.box.getCenter(new THREE.Vector3());
        this.sizes = this.box.getSize(new THREE.Vector3());

        this.model.position.y += this.sizes.y / 2

        // this.scene.add(new THREE.BoxHelper(this.model))
        console.log(this.center)
    }
    

    update() {

    }
}