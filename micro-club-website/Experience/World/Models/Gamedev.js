import * as THREE from 'three'
import Experience from '../../Experience'
import Model from '../Model'

export default class Gamedev extends Model{
    constructor({type} = {}){
        super({type : 'gamedev'})
        this.model.position.set(40,-115,18)
        this.model.scale.set(30,30,30)
        this.model.rotation.set(-1.86 , 2.16 , 2.63)
        // this.experience.debug.add(this.model.rotation, 'x',-Math.PI , Math.PI, 0.01).name('gd-r-x')
        // this.experience.debug.add(this.model.rotation, 'y',-Math.PI , Math.PI, 0.01).name('gd-r-y')
        // this.experience.debug.add(this.model.rotation, 'z',-Math.PI , Math.PI, 0.01).name('gd-r-z')
        // this.experience.debug.add(this.model.position, 'x',-500 , 500, 1).name('gm-p-x')
        // this.experience.debug.add(this.model.position, 'y',-500 , 500, 1).name('gm-p-y')
        // this.experience.debug.add(this.model.position, 'z',-500 , 500, 1).name('gm-p-z')

    }
  
}