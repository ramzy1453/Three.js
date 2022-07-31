import * as THREE from 'three';
import { EventEmitter } from 'events';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default class Ressources extends EventEmitter {
	constructor({ assets } = {}) {
		super();
		// Options
		this.assets = assets;
		//Set up
		this.items = {};
		this.toLoad = this.assets.length;
		this.loaded = 0;
		this.setLoaders();
		this.startLoading();
	}

	setLoaders() {
		this.loaders = {
			gltfLoader: new GLTFLoader(),
			textureLoader: new THREE.TextureLoader(),
			envMapLoader: new THREE.CubeTextureLoader(),
		};
	}

	startLoading() {
		if (this.assets.length === 0) return this.emit('ready');
		this.assets.forEach((source) => {
			this.loaders[source.type + 'Loader'].load(
				source.path,
				(file) => {
					this.sourceLoaded(source, file);
				},
				() => {},
				(error) => {
					throw new Error(`Error when loading ${source.name} : ${error}`);
				}
			);
		});
	}

	sourceLoaded(source, file) {
		this.items[source.name] = file;
		this.loaded += 1;
		if (this.loaded === this.toLoad) {
			this.emit('ready');
		}
	}
}
