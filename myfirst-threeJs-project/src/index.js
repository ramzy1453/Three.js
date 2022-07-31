import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'dat.gui'

//declaration
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })
    // const gui = new dat.GUI()
renderer.setSize(innerWidth, innerHeight)

//orbit
const orbitControls = new OrbitControls(camera, canvas)
orbitControls.enableDamping = true
orbitControls.dampingFactor = 0.08
orbitControls.rotateSpeed = 0.8
const gridHelper = new THREE.GridHelper(2000, 500)
const axesHelper = new THREE.AxesHelper(200);


//light 
const ambientLight = new THREE.AmbientLight('0xffffff', 0.5);
const pointLight = new THREE.PointLight(0xffffff, 0.5)
const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(ambientLight, pointLight, lightHelper)
    //textures
const textureLoader = new THREE.TextureLoader()
const goldenMatcap = textureLoader.load('textures/matcaps/golden.jpg')

//box

//font
const fontLoader = new THREE.FontLoader()
fontLoader.load('fonts/helvetiker_regular.typeface.json', font => {

    const textGeometry = new THREE.TextBufferGeometry('AGC', {
        font: font,
        size: 60,
        height: 10,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 2,
        bevelOffset: 0,
        bevelSegments: 5
    })
    const textMaterial = new THREE.MeshMatcapMaterial({ matcap: goldenMatcap })
    const text = new THREE.Mesh(textGeometry, textMaterial)
    scene.add(text)

})

addDonuts()


//scene
camera.position.set(0, 150, 100)
    //position








function update() {

    orbitControls.update()


    renderer.render(scene, camera)
    requestAnimationFrame(update)
}

update()

addEventListener('resize', () => {
    renderer.setSize(innerWidth, innerHeight)
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()

})



//dat.gui
// gui.add(sphereMat, 'metalness').min(0).max(1).step(0.001)
// gui.add(sphereMat, 'roughness').min(0).max(1).step(0.001)
// gui.add(sphereMat, 'envMapIntensity').min(0).max(1).step(0.001)



function addDonuts() {
    const geometryDonut = new THREE.TorusBufferGeometry(30, 15, 20, 45)
    const textMaterial = new THREE.MeshMatcapMaterial({ matcap: goldenMatcap })
    geometryDonut.computeBoundingBox()
    const vec = geometryDonut.boundingBox.max
    for (let i = 0; i < 300; i++) {
        const donut = new THREE.Mesh(geometryDonut, textMaterial)

        donut.position.x = (Math.random() - 0.5) * 1000
        donut.position.y = (Math.random() - 0.5) * 1000
        donut.position.z = (Math.random() - 0.5) * 1000

        donut.rotation.x = Math.random() * Math.PI
        donut.rotation.x = Math.random() * Math.PI

        donut.scale.set(...Array(3).fill(Math.random()))

        scene.add(donut)
        console.log()
    }
}