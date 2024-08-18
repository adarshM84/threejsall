import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

//Axes helper
const axesHelper=new THREE.AxesHelper(2);
scene.add(axesHelper)

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "blue" });
const mesh = new THREE.Mesh(geometry, material);
mesh.scale.set(2,0.25,0.5);
mesh.rotation.y=Math.PI * 0.25;
mesh.rotation.x=Math.PI * 0.25;
scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(1,1,3);
camera.lookAt(new THREE.Vector3(0,0,1))
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
