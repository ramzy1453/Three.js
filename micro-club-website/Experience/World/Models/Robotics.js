import * as THREE from 'three'
import Experience from '../../Experience'
import Model from '../Model'

export default class Robotics extends Model{
    constructor({type} = {}){
        super({type : 'robotics'})
        this.model.scale.set(22,22,22)
        this.model.position.set(-38, -79 , 0)
        this.model.rotation.set(0,0.6,0)

    }
  
}