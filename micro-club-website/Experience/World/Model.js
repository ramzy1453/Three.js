import * as THREE from 'three'
import Experience from '../Experience'

export default class Model {
    constructor({type} = {}){
        
        if(!type) throw new Error('Model non existing')

        this.type = type
        this.experience = new Experience()
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

        this.model.scale.set(10,10,10)
        this.setDiright()
        
    }


    setDiright(){
        
        this.light = new THREE.DirectionalLight('white', 2)
        this.scene.add(this.light)
        this.scene.add(new THREE.DirectionalLightHelper(this.light))
        this.light.castShadow = true
        this.light.shadow.mapSize.width = 4096;
        this.light.shadow.mapSize.height = 4096;
        this.light.shadow.camera.left = -40;
        this.light.shadow.camera.right = 40;
        this.light.shadow.camera.top = -40;
        this.light.shadow.camera.bottom = 40;
        this.light.shadow.camera.near = 0.5;
        this.light.shadow.camera.far = 500;
        this.light.shadow.bias = 0.0001
        this.light.target = this.model
        console.log(this.light)
    }


  
}