import Experience from "../Experience";
import * as THREE from 'three'
import gsap from 'gsap'

export default class Earth {

    constructor() {
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.camera = this.experience.camera
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.textures = this.experience.ressources.items

        this.earthMesh()
        this.cloudMesh()



    }

    earthMesh(){


        this.geometry = new THREE.SphereBufferGeometry(32, 32,32)
        this.material = new THREE.MeshPhongMaterial({
            map : this.textures.earth,
            normalMap : this.textures.normal,
            bumpMap : this.textures.bump,
            bumpScale : 1,
            specularMap : this.textures.specular,
            specular : new THREE.Color('grey') 
        })

        // this.debug.add(this.material, 'roughness', 0 , 1 , 0.01)
        // this.debug.add(this.material, 'metalness', 0 , 1 , 0.01)

        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)

        this.debug.add(this.camera.rotation, 'x' , Math.PI * -2 , 2* Math.PI , Math.PI / 50)
        this.debug.add(this.camera.rotation, 'y' , Math.PI * -2 , 2* Math.PI , Math.PI / 50)
        this.debug.add(this.camera.rotation, 'z' , Math.PI * -2 , 2* Math.PI , Math.PI / 50)
        
    }

    cloudMesh(){
        this.mesh.add(
            new THREE.Mesh(
                new THREE.SphereGeometry(32.5, 32, 32),
                new THREE.MeshPhongMaterial({
                    map : this.textures.cloud2,
                    side : THREE.DoubleSide,
                    opacity : 0.2,
                    transparent : true,
                    depthWrite : false,
                })
            )
        )
    }

    goTo(x,y,z){
        const distance = this.camera.position.distanceTo(this.mesh.position)
        const timing = distance * 3 / 100
        console.log(timing)
        gsap.to(this.camera.position, timing, {
            x : x, 
            y : y,
            z : z,
            ease : 'Power1.easeOut'
        })
    }

    update(){
        this.mesh.rotation.y += Math.PI * this.time.delta / 32 / 1000
    }
    

}