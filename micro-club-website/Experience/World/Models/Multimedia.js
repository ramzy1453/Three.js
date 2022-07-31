import * as THREE from 'three'
import Experience from '../../Experience'
import Model from '../Model'

export default class Multimedia extends Model{
    constructor({type} = {}){
        super({type : 'multimedia'})
        this.model.scale.set(180,180,180)
        this.model.position.set(-25,-192,18)
        this.model.rotation.set(0.4,0.5,0)

    }
  
}