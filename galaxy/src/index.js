import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { generateGalaxy } from './galaxy'
import { PointLight } from 'three'

/**
 * Base
 */
// Debug

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
export const scene = new THREE.Scene()
const points = generateGalaxy()
scene.add(points)
points.rotation.x = Math.PI / 25


//resizing
addEventListener('resize', () => {
        renderer.setSize(innerWidth, innerHeight)
        camera.aspect = innerWidth / innerHeight
        camera.updateProjectionMatrix()
    })
    /**
     * Camera
     */
    // Base camera
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 100)
camera.position.x = 3
camera.position.y = 15
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    /**
     * Animate
     */
const clock = new THREE.Clock()

function update() {
    const elapsedTime = clock.getElapsedTime()

    // Update particles
    points.rotation.y = elapsedTime * Math.PI / 10


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    requestAnimationFrame(update)
}

update()