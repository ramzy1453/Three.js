import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import * as dat from 'dat.gui'
import { house, floor } from './house'
import { graves } from './graveyard'
import { lights, fog } from './lights'
import { groupBushes } from './bushes'
import { ghosts, rotateGhost } from './ghosts'
import { controles, player } from './player'
//declaration
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const canvas = document.querySelector('canvas.webgl')
    //render
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#262837')
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

//scene
camera.position.set(5.4, 3, 11)

//light
scene.add(lights)
scene.add(floor)
scene.add(house)
scene.add(graves)
scene.add(groupBushes)
scene.add(ghosts)
scene.add(player)
scene.fog = fog

const clock = new THREE.Clock()

function update() {

    const elapsedTime = clock.getElapsedTime()
    rotateGhost(elapsedTime)
    controles(camera)
    renderer.render(scene, camera)
    requestAnimationFrame(update)
}

update()

addEventListener('resize', () => {
    renderer.setSize(innerWidth, innerHeight)
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()

})