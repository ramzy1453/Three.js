import * as THREE from 'three'
import { Group } from 'three'

export const ghosts = new Group()

const ghost1 = new THREE.PointLight('#ff00ff', 2, 3)
const ghost2 = new THREE.PointLight('cyan', 3, 5)
const ghost3 = new THREE.PointLight('yellow', 4, 6)

ghost1.castShadow = true
ghost2.castShadow = true
ghost2.castShadow = true

ghosts.add(ghost1)
ghosts.add(ghost2)
ghosts.add(ghost3)


ghost1.castShadow = true
ghost1.shadow.mapSize.width = 256
ghost1.shadow.mapSize.height = 256
ghost1.shadow.camera.far = 7

ghost2.castShadow = true
ghost2.shadow.mapSize.width = 256
ghost2.shadow.mapSize.height = 256
ghost2.shadow.camera.far = 7

ghost3.castShadow = true
ghost3.shadow.mapSize.width = 256
ghost3.shadow.mapSize.height = 256
ghost3.shadow.camera.far = 7

export function rotateGhost(elapsedTime) {
    ghost1.position.x = Math.cos(elapsedTime * 0.5) * 5
    ghost1.position.z = Math.sin(elapsedTime * 0.5) * 5
    ghost1.position.y = (Math.sin(elapsedTime) + 0.5) * 3

    ghost2.position.x = Math.cos(-elapsedTime * 0.5) * 6
    ghost2.position.z = Math.sin(-elapsedTime * 0.5) * 6
    ghost2.position.y = Math.sin(-elapsedTime) * 2

    ghost3.position.x = Math.cos(elapsedTime * 0.4) * 20
    ghost3.position.z = Math.sin(elapsedTime * 0.4) * 20
    ghost3.position.y = 2



}