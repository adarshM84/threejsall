import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

//Axes helper
// const axesHelper=new THREE.AxesHelper(2);
// scene.add(axesHelper)

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "blue" });
// const mesh = new THREE.Mesh(geometry, material);
// mesh.scale.set(2,0.25,0.5);
// mesh.rotation.y=Math.PI * 0.25;
// mesh.rotation.x=Math.PI * 0.25;
// scene.add(mesh);

const objGroup=new THREE.Group();

const box1=new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: "blue" })
)
box1.position.x=-1.8;
objGroup.add(box1)

const box2=new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
)
box2.position.x=0.5;

objGroup.add(box2)


const box3=new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "orange" })
)
box2.position.x=1.5;
objGroup.add(box3)

scene.add(objGroup)

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
camera.position.set(0,0,2);
// camera.lookAt(new THREE.Vector3(0,0,1))
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
