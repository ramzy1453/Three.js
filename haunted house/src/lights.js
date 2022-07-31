 import * as THREE from 'three'
 import * as dat from 'dat.gui'
 const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.2)
 const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.2)
 moonLight.position.set(4, 5, -2)
 moonLight.castShadow = true

 const doorLight = new THREE.PointLight('#ff7d46', 1, 10)
 doorLight.position.set(0, 4, 6)
 doorLight.castShadow = true

 export const lights = new THREE.Group();

 lights.add(
     ambientLight,
     moonLight,
     doorLight,
 )

 //fog
 export const fog = new THREE.Fog('#262837', 25, 100)


 //shadows

 moonLight.shadow.mapSize.width = 256
 moonLight.shadow.mapSize.height = 256

 moonLight.shadow.camera.far = 15