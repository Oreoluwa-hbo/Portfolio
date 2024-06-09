import { Component } from "preact";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class SpinningModel extends Component {
  componentDidMount() {
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => {
      document.getElementById("loading-overlay")?.remove();
    };

    const dimensions = {
      x: document.getElementById("model-container")?.clientWidth || 0,
      y: document.getElementById("model-container")?.clientHeight || 0,
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      30,
      dimensions.x / dimensions.y,
      600,
      0.2
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.minDistance = 1; // Set the minimum distance to zoom in
    controls.maxDistance = 10; // Set the maximum distance to zoom out

    renderer.setSize(dimensions.x, dimensions.y);
    document.getElementById("model-container")?.appendChild(renderer.domElement);

    const loader = new GLTFLoader(loadingManager);
    let model: THREE.Object3D | undefined;

    loader.load(
      "../scene.gltf", // replace with the path to your model
      function (gltf: THREE.GLTF & { scene: THREE.Scene }) {
        model = gltf.scene;
        scene.add(gltf.scene);

        // Center the model in the scene
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = new THREE.Vector3();
        box.getCenter(center);
        gltf.scene.position.sub(center);

        // Scale the model to fit the scene
        const scale = 0.005;
        gltf.scene.scale.set(scale, scale, scale);

        const animate = function () {
          requestAnimationFrame(animate);

          controls.update();
          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      function (error: Error) {
        console.error(error);
      }
    );

    const light = new THREE.AmbientLight(0x404040, 75); // soft white light
    scene.add(light);

    // Move the camera further back to have a better view of the model
    camera.position.z = 3;
    controls.update();
  }

  render() {
    return (
      <div class="relative w-[400px] aspect-square">
        <div
          id="loading-overlay"
          class="absolute w-full h-full bg-[rgba(0,0,0,0.3)] animate-pulse rounded-lg flex justify-center items-center"
        >
          <span>Loading 3D Model</span>
        </div>
        <div id="model-container" class="w-full h-full" />
      </div>
    );
  }
}

export default SpinningModel;
