import * as THREE from 'three'
import Experience from '../../Experience'
import Model from '../Model'

export default class It extends Model{
    constructor({type} = {}){
        super({type : 'it'})
        this.model.scale.set(22,22,22)
        this.model.position.set(40, -10 , 0)
        this.model.rotation.set(0.18,-0.5,0)

    }
  
}